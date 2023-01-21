import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, useParams } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import FilterBar from './components/FilterBar/FilterBar';
import Search from './components/Search/Search';
import { setAllData } from './redux/Actions';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);

  useEffect(() => {
    axios.get('./data.json').then(res => dispatch((setAllData(res.data))));
  }, [])

  const closeSign = () => {
    document.getElementsByClassName('App')[0].style.cssText = "opacity:1;"
    document.getElementsByClassName('profile')[0].style.cssText = "width: 0;height: 0;opacity:0;"
  }
  const addBookmark = (index) => {
    if (document.getElementById(index).getAttribute('fill') === 'none') {
      document.getElementById(index).setAttribute('fill', '#FFF');
      document.getElementById(index).setAttribute('stroke', '#FFF');
    }
    else {
      document.getElementById(index).setAttribute('fill', 'none')
      document.getElementById(index).setAttribute('stroke', '#FFF');
    }
  }
  return (
    <div className='container'>
      <div className="App">
        <BrowserRouter>
          <FilterBar />
          <Search />
          <Content addBookmark={addBookmark} />
        </BrowserRouter>
      </div>
      <div className="profile">
        <h3><p>MEMBER LOGIN</p><span className='close' onClick={() => closeSign()}>x</span></h3>
        <input className='login' type='text' placeholder='Email Or Phone Number' />
        <input className='password' type='password' placeholder='password' />
        <button className='login'>LOGIN</button>
        <p>Forget Password? <span> Click Here</span></p>
        <button className='register'>REGISTER</button>
      </div>
    </div>
  );
}

export default App;
