import React from "react";
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import styles from "./gameDetail.module.css";
import { getGameDetailAsync } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function GameDetail() {
    const dispatch = useDispatch();
    const { gameDetail, loading, platform, publisher, genres, developers, tags } = useSelector(
        (state) => state.getGameDetailReducer
    );
    let { name } = useParams();

    useEffect(() => {
        dispatch(getGameDetailAsync(name));
    }, [dispatch, name]);

    console.log(gameDetail, "test gemae deatil");
    return (
        <React.Fragment>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.bannerContainer}>
                    {/* style={{backgroundImage:`url('${gameDetail.background_image}'`}}> */}
                    <img
                        className={styles.imgCover}
                        src={gameDetail.background_image}
                        alt="poster"
                    />
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.gameDetailContainer}>
                        <h1 className={styles.headingTitle}>{gameDetail.name}</h1>
                        {/* <div className={styles.updatePatch}> */}
                        <p className={styles.updatePatch}>
                            {" "}
                            Release Date: <p>{gameDetail.released} </p>
                        </p>
                        <div className={styles.buttonBanner}>
                            <a
                                className={styles.btnlist}
                                href={gameDetail.website}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {" "}
                                <button className={styles.trailer}>Go to Website</button>{" "}
                            </a>
                            <a className={styles.btnlist} href="#">
                                {" "}
                                <button className={styles.watchlist}>Add to Wishlist </button>
                            </a>
                        </div>
                        <div className={styles.descriptionContainer}>
                            <p className={styles.description}> {gameDetail.description_raw}</p>
                        </div>
                        <div className={styles.bawah}>
                            <div className={styles.platformContainer}>
                                <div className={styles.platform}>
                                    <p className={styles.textPlatform}> Platform: </p>
                                    {platform.map((parent) => parent.platform.name).join(", ")}
                                    <br />
                                </div>
                                <div className={styles.lastUpdate}>
                                    <p className={styles.textPlatform}>Last Updated:</p>
                                    {gameDetail.updated}
                                </div>
                                <div className={styles.publisher}>
                                    <p className={styles.textPlatform}>Publisher:</p>
                                    {publisher.map((publishers) => publishers.name).join(", ")}
                                </div>
                            </div>
                            <div className={styles.detail2}>
                                <div className={styles.genres}>
                                    <p className={styles.textGenres}>Genre:</p>
                                    {genres.map((genre) => genre.name).join(", ")}
                                </div>
                                <div className={styles.developer}>
                                    <p className={styles.textGenres}>Developer:</p>
                                    {developers.map((developer) => developer.name).join(", ")}
                                </div>
                                <div className={styles.ageRating}>
                                    <p className={styles.textGenres}>Metascore:</p>
                                    <p className={styles.metascore}>
                                        {gameDetail.metacritic }
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.tagsContainer}>
                            <p className={styles.tags}>Tags:</p>
                            {tags.map((tags) => tags.name).join(", ")}
                        </div>
                    </div>

                    {/* </div> */}
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default GameDetail;
