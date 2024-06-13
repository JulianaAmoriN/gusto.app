// reviewReducer.js
import { UPDATE_REVIEW_FIELD, RESET_REVIEW_FORM } from '../actions/reviewActions';

const initialState = {
    restaurante: '',
    endereco: '',
    nota: '',
    comentarios: '',
    imagens: '',
    user: null,
};

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_REVIEW_FIELD:
            return { ...state, [action.field]: action.value };
        case RESET_REVIEW_FORM:
            return {
                ...state,
                restaurante: '',
                endereco: '',
                nota: '',
                comentarios: '',
                imagens: '',
            };
        default:
            return state;
    }
};

export default reviewReducer;
