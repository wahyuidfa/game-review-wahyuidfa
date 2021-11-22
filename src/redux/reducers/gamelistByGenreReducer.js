import { getGameDetail } from "../../service/service";

const initialState = {
    gameListByGenre: [],
    totalPage: null,
    nextPage: null,
    currentPage: null,
    loading: false,
    error: "",
};

function getGamelistByGenreReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "getgamelistbygenre/get-start":
            return {
                ...state,
                loading: true,
            };
        case "getgamelistbygenre/get-success":
            return {
                ...state,
                gameListByGenre: payload.getGamelistByGenre.results,
                loading: false,
                error: "",
            };
            case "getgamelistbygenre/get-failed":
                return {
                    ...state,
                    loading: false,
                    error: payload.error,
                }
                default:
                    return state
    }
}

export default getGamelistByGenreReducer;
