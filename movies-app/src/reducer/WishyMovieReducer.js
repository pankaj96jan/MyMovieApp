const WishyInitialState = [];


export const wishyMovieReducer = (state = WishyInitialState, action) => {
    switch (action.type) {
        case "WISHlIST_MOVIE":
            console.log(action.payload, "reducer");
            return [...state, { ...action.payload }]
        default:
            return [...state]
    }
}