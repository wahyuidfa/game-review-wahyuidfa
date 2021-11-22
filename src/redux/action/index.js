import {
    getGameList,
    getGenreGame,
    getGameDetail,
    getGamelistByGenre,
} from "../../service/service";

export const getGameListAsync = (page) => {
    return (dispatch, getState) => {
        dispatch({ type: "getgamelist/get-start" });
        getGameList(page)
            .then((response) => {
                console.log(response.data, "test game");
                dispatch(getGameListSuccess(response.data));
            })
            .catch((error) => {
                console.log(error);
                dispatch(getGameListFailed(error));
            });
    };
};

export const getGameListSuccess = (getGameList) => ({
    type: "getgamelist/get-success",
    payload: {
        getGameList,
    },
});

export const getGameListFailed = (error) => ({
    type: "getgamelist/get-failed",
    payload: {
        error,
    },
});

export const getGenreGameAsync = () => {
    return (dispatch, getState) => {
        dispatch({ type: "getgenregame/get-start" });
        getGenreGame()
            .then((response) => {
                console.log(response.data, "test genre");
                dispatch(getGenreGameSuccess(response.data));
            })
            .catch((error) => {
                console.log(error);
                dispatch(getGenreGameFailed(error));
            });
    };
};

export const getGenreGameSuccess = (getGenreGame) => ({
    type: "getgenregame/get-success",
    payload: {
        getGenreGame,
    },
});

export const getGenreGameFailed = (error) => ({
    type: "getgenregame/get-failed",
    payload: {
        error,
    },
});

export const getGameDetailAsync = (name) => {
    return (dispatch, getState) => {
        dispatch({ type: "gegamedetail/get-start" });
        getGameDetail(name)
            .then((response) => {
                console.log(response.data, "test game detail");
                dispatch(getGameDetailSuccess(response.data));
            })
            .catch((error) => {
                console.log(error);
                dispatch(getGameDetailFailed(error));
            });
    };
};

export const getGameDetailSuccess = (getGameDetail) => ({
    type: "getgamedetail/get-success",
    payload: {
        getGameDetail,
    },
});

export const getGameDetailFailed = (error) => ({
    type: "getgamedetail/get-failed",
    payload: {
        error,
    },
});

export const getGamelistByGenreAsync = (nameGenres, pageGenres) => {
    return (dispatch, getState) => {
        dispatch({ type: "getgameistbygenre/get-start" });
        getGamelistByGenre(nameGenres, pageGenres)
            .then((response) => {
                console.log(response.data, "test game");
                dispatch(getGamelistByGenreSuccess(response.data));
            })
            .catch((error) => {
                console.log(error);
                dispatch(getGamelistByGenreFailed(error));
            });
    };
};

export const getGamelistByGenreSuccess = (getGamelistByGenre) => ({
    type: "getgamelistbygenre/get-success",
    payload: {
        getGamelistByGenre,
    },
});

export const getGamelistByGenreFailed = (error) => ({
    type: "getgamelistbygenre/get-failed",
    payload: {
        error,
    },
});
