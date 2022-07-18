const WishyInitialState = [];

export const wishyMovieReducer = (state = WishyInitialState, action) => {
    switch (action.type) {
        case "WISHlIST_MOVIE":

            console.log(action.payload.code, "reducer");
            if (action.payload.code === "11000") {
                return [...state]
            } else {
                return [...state, { ...action.payload }]
            }
        default:
            return [...state]
    }
}