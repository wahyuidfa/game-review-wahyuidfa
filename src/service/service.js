import axios from "axios";

export const getGameList = (page) => {
    return axios.get(
        `https://api.rawg.io/api/games?key=0714221825fe4c84840930f06c76a6ba&page=${page}`
    )
}

export const getGenreGame = () => {
    return axios.get(
        `https://api.rawg.io/api/genres?key=0714221825fe4c84840930f06c76a6ba`
    )
}