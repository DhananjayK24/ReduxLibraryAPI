export const bookReducer = (state = {books: [], searchTerm: 'game', loading: true}, action) =>{
    switch(action.type){
        case "SEARCH_BOOK":
            return {...state, books: action.payload};
        
        case "SEARCH_TERM":
            return {...state, searchTerm: action.payload};
        
        case "LOADING_TERM":
            return {...state, loading: action.payload};

        default:
            return state;
    }
}