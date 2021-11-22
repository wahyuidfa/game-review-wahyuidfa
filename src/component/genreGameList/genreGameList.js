import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGamelistByGenreAsync } from "../../redux/action";
import getGamelistByGenreReducer from "../../redux/reducers/gamelistByGenreReducer"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./genreGameList.module.css";
import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";
import Rating from '@mui/material/Rating';
import { useParams } from "react-router";
// import Stack from '@mui/material/Stack';

function GenreGameList() {
    const dispatch = useDispatch();
    const { gameListByGenre, loading } = useSelector((state) => state.getGamelistByGenreReducer);
    const [pageGenres, setPageGenres] = useState(1)
    let { nameGenres } = useParams();

    const handleChange = (e, value) => {
        setPageGenres(value)
        console.log(pageGenres,"test page")
    }
    console.log(nameGenres, "test")
    useEffect(() => {
        dispatch(getGamelistByGenreAsync(nameGenres, pageGenres));
    }, [dispatch, nameGenres, pageGenres]);

    return (
        <div className={styles.container}>
            <div className={styles.gameListContainer}>
                {loading ? (
                    <div>
                        <img src={"spinner"} />
                    </div>
                ) : (
                    ""
                )}
                {gameListByGenre.map((game) => (
                    <div key={game.id} className={styles.divBox}>
                        <Link to={`/game-detail/${game.id}`} style={{ textDecoration: "none" }}>
                            <div className={styles.imgContainer}>
                                <img
                                    className={styles.imgPoster}
                                    src={game.background_image}
                                    alt="img"
                                />
                            </div>
                            <div className={styles.gameInfo}>
                                <p className={styles.title}>
                                    {game.name} <br />
                                </p>
                                <Rating name="half-rating-read" defaultValue={game.rating} precision={0.1} readOnly />
                                {game.genres.map((genre) => (
                                    <div key={genre.id} className={styles.genre}>
                                        {genre.name},
                                    </div>
                                ))}
                            </div>
                        </Link>
                    </div>
                ))}
            <div className={styles.pagination}>
                <Stack sx={{ color: "GrayText" }}>
                  <Pagination count={100} onChange={handleChange} variant="outlined" color="primary" />
                </Stack>
            </div>
            </div>
        </div>
    );
}

export default GenreGameList;
