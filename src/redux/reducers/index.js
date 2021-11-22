import { combineReducers } from "redux";
import getGameListReducer from "./gameListReducer";
import getGenreGameReducer from "./genreGameReducer";
import getGameDetailReducer from "./gameDetailReducer";
import getGamelistByGenreReducer from "./gamelistByGenreReducer";


const rootReducer = combineReducers({
    getGameListReducer,
    getGenreGameReducer,
    getGameDetailReducer,
    getGamelistByGenreReducer
})

export default rootReducer