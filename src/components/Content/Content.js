import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import Bookmarked from "../Bookmarked/Bookmarked";
import Home from "../Home/Home";
import Movies from "../Movies/Movies";
import Series from "../Series/Series";
import './content.css'

const Content = (props) => {
    const { addBookmark } = props;
    return (
        <main className="content">
            <Routes>
                <Route path="/" exact element={<Home addBookmark={addBookmark} />} />
                <Route path="/movies" exact element={<Movies addBookmark={addBookmark} />} />
                <Route path="/series" exact element={<Series addBookmark={addBookmark} />} />
                <Route path="/boukmarked" exact element={<Bookmarked addBookmark={addBookmark} />} />
            </Routes>
        </main>
    )
}
export default Content;