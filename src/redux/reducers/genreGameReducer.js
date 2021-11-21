const initialState = {
    genreList: [],
    totalPage: null,
    nextPage: null,
    currentPage: null,
    loading: false,
    error: "",
};

function getGenreGameReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "getgenregame/get-start":
            return {
                ...state,
                loading: true,
            };
        case "getgenregame/get-success":
            return {
                ...state,
                genreList: payload.getGenreGame.results,
                loading: true,
                error: "",
            };
        case "getgenregame/get-failed":
            return {
                ...state,
                loading: false,
                error: payload.error,
            };
        default:
            return state;
    }
}

export default getGenreGameReducer;
