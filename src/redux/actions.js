export const FETCH_ALL_DOGS_SUCCESS = 'FETCH_ALL_DOGS_SUCCESS';
export const FETCH_ALL_DOGS_ERROR = 'FETCH_ALL_DOGS_ERROR';
export const FETCH_ALL_DOGS_PENDING = 'FETCH_ALL_DOGS_PENDING';

export const SET_OPEN_BASIC_MODAL = 'SET_OPEN_BASIC_MODAL';
export const SET_CLOSE_BASIC_MODAL = 'SET_CLOSE_BASIC_MODAL';

export const fetchAllDogsSuccess = (payload) => ({
  type: FETCH_ALL_DOGS_SUCCESS,
  payload,
});

export const fetchAllDogsError = (error) => ({
  type: FETCH_ALL_DOGS_ERROR,
  error,
});
export const fetchAllDogsPending = () => ({
  type: FETCH_ALL_DOGS_PENDING,
});

export const setOpenBasicModal = () => ({
  type: SET_OPEN_BASIC_MODAL,
});
export const setCloseBasicModal = () => ({
  type: SET_CLOSE_BASIC_MODAL,
});
