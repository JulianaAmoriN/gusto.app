import { UPDATE_REVIEW_FIELD, RESET_REVIEW_FORM, SUBMIT_REVIEW_SUCCESS, SUBMIT_REVIEW_FAILURE, EDIT_REVIEW_SUCCESS, EDIT_REVIEW_FAILURE, DELETE_REVIEW_SUCCESS, DELETE_REVIEW_FAILURE, SET_REVIEWS } from '../actions/reviewActions';

interface ReviewState {
    restaurante: string;
    endereco: string;
    nota: string;
    comentarios: string;
    imagens: string;
    user: string | null;
    reviews: any[];
}

const initialState: ReviewState = {
    restaurante: '',
    endereco: '',
    nota: '',
    comentarios: '',
    imagens: '',
    user: null,
    reviews: [],
};

const reviewReducer = (state = initialState, action: any): ReviewState => {
    switch (action.type) {
        case UPDATE_REVIEW_FIELD:
            return { ...state, [action.field]: action.value };
        case RESET_REVIEW_FORM:
            return {
                ...initialState,
                user: state.user,
            };
        case SUBMIT_REVIEW_SUCCESS:
            return {
                ...state,
                ...initialState,
            };
        case SUBMIT_REVIEW_FAILURE:
            return state;
        case EDIT_REVIEW_SUCCESS:
            const updatedReviews = state.reviews.map(review => {
                if (review.id === action.updatedReview.id) {
                    return action.updatedReview;
                }
                return review;
            });
            return {
                ...state,
                reviews: updatedReviews,
            };
        case EDIT_REVIEW_FAILURE:
            return state;
        case DELETE_REVIEW_SUCCESS:
            const filteredReviews = state.reviews.filter(review => review.id !== action.reviewId);
            return {
                ...state,
                reviews: filteredReviews,
            };
        case DELETE_REVIEW_FAILURE:
            return state;
        case SET_REVIEWS:
            return {
                ...state,
                reviews: action.reviews,
            };
        default:
            return state;
    }
};

export default reviewReducer;
