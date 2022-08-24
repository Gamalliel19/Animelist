export const productReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_PRODUCT':
      return [
        ...state,
        {
          id: action.payload.id,
          price: action.payload.price,
          name: action.payload.name,
        },
      ];
    case 'DELETE_PRODUCT':
      return [...state.filter((product) => product.id !== action.payload.id)];
    default:
      return state;
  }
};

export const shoppingCartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return state + 1;
  }
};
