const initialState = {

};
const reducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'FETCH_POSTCARDS_REQUEST':
            return{
                ...state,
                cards: [],
                loading: true,
                error: null,
            };


        case 'CHANGE_INSCRIPTION_FONT_SIZE':
             return {
                ...state,
                 inscriptionStyles: {
                    ...state.inscriptionStyles,
                     fontSize: `${action.payload}px`
                 }
            };
        default:
            return state
    }
};

export default reducer