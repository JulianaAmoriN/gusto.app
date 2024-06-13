export const UPDATE_REVIEW_FIELD = 'UPDATE_REVIEW_FIELD';
export const RESET_REVIEW_FORM = 'RESET_REVIEW_FORM';

export const updateReviewField = (field, value) => ({
  type: UPDATE_REVIEW_FIELD,
  field,
  value,
});

export const resetReviewForm = () => ({
  type: RESET_REVIEW_FORM,
});
