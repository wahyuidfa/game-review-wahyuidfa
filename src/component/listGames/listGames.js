import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameListAsync } from "../../redux/action";
import getGameListReducer from "../../redux/reducers/gameListReducer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./gameList.module.css";
import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";
import Rating from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';

function ListGames() {
    const dispatch = useDispatch();
    const { gameList, loading } = useSelector((state) => state.getGameListReducer);
    const [page, setPage] = useState("1")

    const handleChange = (e, value) => {
        setPage(value)
        console.log(page,"test page")
    }
    
    useEffect(() => {
        dispatch(getGameListAsync(page));
    }, [dispatch, page]);

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
                {gameList.map((game) => (
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
                  <Pagination count={32146} onChange={handleChange} variant="outlined" color="primary" />
                </Stack>
            </div>
            </div>
        </div>
    );
}

export default ListGames;
