import React from "react";
import { useSelector } from "react-redux";
import './series.css'

const Series = (props) => {
    const data = useSelector(state => state.data);
    const { addBookmark } = props;
    return (
        <main className="series">
            <h2 className="title">TV Series</h2>
            {data.length === 0 ? <p className="not-found">No Series Found</p> :
                <div className="boxes">
                    {data.map((ele, index) => {
                        if (ele.category === 'TV Series')
                            return (
                                <div className="box" key={index}>
                                    <img src={`../../../.${ele.thumbnail.regular.large}`} alt={`${ele.title} picture`} />
                                    <div className="bookmark" onClick={() => addBookmark(`ser${index}`)}>
                                        {ele.isBookmarked === true ? <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path id={`ser${index}`} d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z" fill="#FFF" /></svg>
                                            : <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path id={`ser${index}`} d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" strokeWidth="1.5" fill="none" /></svg>}
                                    </div>
                                    <div className="play">
                                        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" fill="#FFF" /></svg>
                                        <button>Play</button>
                                    </div>
                                    <div className="info">
                                        <span className="year">{ele.year}</span>
                                        <span className="dot">.</span>
                                        <img src={ele.category === 'Movie' ? '../../../assets/icon-nav-movies.svg' : '../../../assets/icon-nav-tv-series.svg'} />
                                        <span className="category">{ele.category}</span>
                                        <span className="dot">.</span>
                                        <span className="rating">{ele.rating}</span>
                                    </div>
                                    <h2 className="title">{ele.title}</h2>
                                </div>
                            )
                    })}
                </div>}
        </main>
    )
}
export default Series;