export const AlertReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SHOW_ALERT':
      return { ...payload, show: true }
    case 'HIDE_ALERT':
      return { ...state, show: false }
    default:
      return state
  }
}