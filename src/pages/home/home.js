import React from "react";
import styles from "./home.module.css";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import { useDispatch, useSelector } from "react-redux";
import { getGameListAsync, getGenreGameAsync } from "../../redux/action";
import { useEffect } from "react";
import ListGames from "../../component/listGames/listGames";
import { Link } from "react-router-dom";

function Home() {
    const dispatch = useDispatch();
    const { loading, genreList } = useSelector((state) => state.getGenreGameReducer);

    useEffect(() => {
        dispatch(getGenreGameAsync());
    }, [dispatch]);

    return (
        <React.Fragment>
            <Navbar />
            <div className={styles.homeContainer}>
                
                <div className={styles.listGameContainer}>
                    <ListGames />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Home;
