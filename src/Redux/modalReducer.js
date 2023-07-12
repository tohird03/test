let initialState = {
  isModalOpen: false,
  singleProductId: null,
  theme: 'light'
}

export function modalOpenReducer(state = initialState, action) {
  switch(action.type){
    case 'OPEN':
      return {...state, isModalOpen: true};
    case 'CLOSE':
      return {...state, isModalOpen: false};
    case 'ID':
      return {...state, singleProductId: action.singleProductId};
    case 'LIGHT':
      return {...state, theme: 'light'}
    case 'DARK':
      return {...state, theme: 'dark'}
    default:
      return state = initialState;
  }
}
