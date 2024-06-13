import { UPDATE_REVIEW_FIELD, RESET_REVIEW_FORM, SUBMIT_REVIEW_SUCCESS, SUBMIT_REVIEW_FAILURE, EDIT_REVIEW_SUCCESS, EDIT_REVIEW_FAILURE, DELETE_REVIEW_SUCCESS, DELETE_REVIEW_FAILURE, SET_REVIEWS } from '../actions/reviewActions';

// Interface para o estado das revisões
interface ReviewState {
    restaurante: string;
    endereco: string;
    nota: string;
    comentarios: string;
    imagens: string;
    user: string | null;
    reviews: any[]; // Array de revisões
}

// Estado inicial das revisões
const initialState: ReviewState = {
    restaurante: '',
    endereco: '',
    nota: '',
    comentarios: '',
    imagens: '',
    user: null,
    reviews: [],
};

// Reducer das revisões
const reviewReducer = (state = initialState, action: any): ReviewState => {
    switch (action.type) {
        case UPDATE_REVIEW_FIELD:
            return { ...state, [action.field]: action.value };
        case RESET_REVIEW_FORM:
            return {
                ...initialState,
                user: state.user, // Mantém o usuário atual após resetar o formulário
            };
        case SUBMIT_REVIEW_SUCCESS:
            return {
                ...state,
                ...initialState, // Reinicia o estado para o inicial após submeter uma review com sucesso
            };
        case SUBMIT_REVIEW_FAILURE:
            return state; // Mantém o estado atual em caso de falha ao submeter a review (pode ajustar conforme necessário)
        case EDIT_REVIEW_SUCCESS:
            const updatedReviews = state.reviews.map(review => {
                if (review.id === action.updatedReview.id) {
                    return action.updatedReview;
                }
                return review;
            });
            return {
                ...state,
                reviews: updatedReviews, // Atualiza o estado com as revisões após sucesso na edição
            };
        case EDIT_REVIEW_FAILURE:
            return state; // Mantém o estado atual em caso de falha ao editar a review (pode ajustar conforme necessário)
        case DELETE_REVIEW_SUCCESS:
            const filteredReviews = state.reviews.filter(review => review.id !== action.reviewId);
            return {
                ...state,
                reviews: filteredReviews, // Remove a revisão do estado após sucesso na deleção
            };
        case DELETE_REVIEW_FAILURE:
            return state; // Mantém o estado atual em caso de falha ao deletar a review (pode ajustar conforme necessário)
        case SET_REVIEWS:
            return {
                ...state,
                reviews: action.reviews, // Define as revisões no estado
            };
        default:
            return state;
    }
};

export default reviewReducer;
