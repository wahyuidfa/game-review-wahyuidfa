import React from "react";
import styles from "./listByGenre.module.css";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import GenreGameList from "../../component/genreGameList/genreGameList"
import { Link } from "react-router-dom";

function ListByGenre() {
    const dispatch = useDispatch();
    // const { loading, genreList } = useSelector((state) => state.getGenreGameReducer);

    // useEffect(() => {
    //     dispatch(getGamelistByGenreAsync());
    // }, [dispatch]);

    return (
        <React.Fragment>
            <Navbar />
            <div className={styles.homeContainer}>
                
                <div className={styles.listGameContainer}>
                   <GenreGameList/>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default ListByGenre;
