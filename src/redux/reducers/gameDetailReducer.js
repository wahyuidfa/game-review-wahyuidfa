const initialState = {
    gameDetail: [],
    platform: [],
    publisher:[],
    genres: [],
    developers: [],
    tags: [],
    loading: false,
    error: "",
};

function getGameDetailReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "getgamedetail/get-start":
            return {
                ...state,
                loading: true,
            };
        case "getgamedetail/get-success":
            return {
                ...state,
                gameDetail: payload.getGameDetail,
                platform: payload.getGameDetail.parent_platforms,
                publisher: payload.getGameDetail.publishers,
                genres: payload.getGameDetail.genres,
                developers: payload.getGameDetail.developers,
                tags: payload.getGameDetail.tags,
                loding: false,
                error: "",
            };
        case "getgamedetail/get-failed":
            return {
                ...state,
                loading: false,
                error: "",
            };
        default:
            return state;
    }
}

export default getGameDetailReducer;
