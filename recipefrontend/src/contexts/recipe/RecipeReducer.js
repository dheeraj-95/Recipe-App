// import LoadingSpinner from '../../Components/Spinner/LoadingSpinner';

export const RecipeReducer = (state, {type, payload}) => {
  switch (type) {
    case 'SHOW_LOADER':
      return { ...state, loading: true }
    case 'GET_RECIPES':
      return { ...state, recipes: payload, loading: false }
    case 'GET_RECIPE':
      return { ...state, recipeById: payload, loading: false }
    case 'CREATE_RECIPE':
      return { ...state, recipes: [...state.recipes, payload] }
    case 'DELETE_RECIPE':
      return { ...state, recipes: payload }
    case 'EDIT_RECIPE': 
      return { ...state, recipes: payload }
    default:
      return state
  }
}