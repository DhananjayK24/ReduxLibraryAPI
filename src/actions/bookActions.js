export const SearchBook = (book) => (dispatch, getState) =>{
    
    const {
        Book: {books},
    } = getState();

        dispatch({
            type: "SEARCH_BOOK",
            payload: [book],
        });
}

export const SearchTerm = (search) => (dispatch, getState) =>{
    
    const {
        Book: {books},
    } = getState();

        dispatch({
            type: "SEARCH_TERM",
            payload: search,
        });
}

export const SetLoading = (value) => (dispatch, getState) =>{
    
    const {
        Book: {books},
    } = getState();

        dispatch({
            type: "LOADING_TERM",
            payload: value,
        });
}