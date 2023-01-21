import Recommended from "../Recommended/Recommended";
import Trending from "../Trending/Trending";
import './home.css'

const Home = (props) => {
    const { addBookmark } = props;
    return (
        <main className="result container">
            <Trending addBookmark={addBookmark} />
            <Recommended addBookmark={addBookmark} />
        </main>
    )
}
export default Home;