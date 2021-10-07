import * as actionTypes from './actions';

const initialState = {
  dogs: null,
  isLoading: false,
  error: null,
  isOpenBasicModal: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_DOGS_SUCCESS: {
      return {
        ...state,
        dogs: action.payload,
        isLoading: false,
        error: null,
      };
    }
    case actionTypes.FETCH_ALL_DOGS_ERROR: {
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    }
    case actionTypes.FETCH_ALL_DOGS_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case actionTypes.SET_OPEN_BASIC_MODAL: {
      return {
        ...state,
        isOpenBasicModal: true,
      };
    }
    case actionTypes.SET_CLOSE_BASIC_MODAL: {
      return {
        ...state,
        isOpenBasicModal: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
