import { combineReducers } from "redux";
import getGameListReducer from "./gameListReducer";
import getGenreGameReducer from "./genreGameReducer";


const rootReducer = combineReducers({
    getGameListReducer,
    getGenreGameReducer,
})

export default rootReducer