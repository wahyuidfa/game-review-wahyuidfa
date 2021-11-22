import React from "react";
import styles from "./genre.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getGenreGameAsync } from "../../redux/action";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/navbar/navbar"
import Footer from "../../component/footer/footer"

function Genre() {
    const dispatch = useDispatch();
    const { loading, genreList } = useSelector((state) => state.getGenreGameReducer);

    useEffect(() => {
        dispatch(getGenreGameAsync());
    }, [dispatch]);
    return (
        <React.Fragment>
            <Navbar/>
            <div className={styles.container}>
                <div className={styles.boxContainerLeftSide}>
                    <div className={styles.headingNavBottom}>
                        <h2>Genre</h2> 
                        </div>
                        {/* <div className={styles.genresList}>  */}
                            {genreList.map((genres) => (
                                <div key={genres.id} className={styles.divBox}>
                                    <Link
                                        to={`/listgenre/${genres.slug}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <div className={styles.imgContainer}>
                                            <img
                                                className={styles.imgPoster}
                                                src={genres.image_background}
                                                alt="img"
                                            />
                                        </div>
                                        <div className={styles.gameInfo}>
                                            <p className={styles.title}>
                                                {genres.name} <br />
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default Genre;
