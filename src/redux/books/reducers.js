import { types } from './actions';

const defaultState = [];

export default dataReducer = (state = defaultState, action) => {

    switch (action.type) {
        case types.addBook:
            return [...state, action.book];

        case types.removeBook:
            return state.filter((item) => {
                if (item !== action.book) return action.book;
            });

        case types.updateBook:
            return state.map((item) => {
                if (item.id === action.book.id) item = action.book;
                return item;
            })

        default:
            return state;

    }
} 