const initialState = {
    gameList: [],
    totalPage: null,
    nextPage: null,
    currentPage: null,
    loading: false,
    error: "",
};

function getGameListReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "getgamelist/get-start":
            return {
                ...state,
                loading: true,
            };
        case "getgamelist/get-success":
            return {
                ...state,
                gameList: payload.getGameList.results, 
                loading: false,
                error: "",
            };
        case "getgamelist/get-failed":
            return {
                ...state,
                loading: false,
                error: payload.error,
            };
        default:
            return state;
    }
}

export default getGameListReducer;
