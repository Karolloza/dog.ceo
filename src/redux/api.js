import axios from 'axios';
import { fetchAllDogsSuccess, fetchAllDogsError, fetchAllDogsPending } from './actions';

export const fetchDogs = () => async (dispatch) => {
  try {
    await dispatch(fetchAllDogsPending());
    const { data } = await axios.get('https://dog.ceo/api/breeds/list/all');
    await dispatch(fetchAllDogsSuccess(data.message));
  } catch (error) {
    dispatch(fetchAllDogsError(error));
  }
};

export const fetchDogBreedImage = (breed) => async () => {
  try {
    const { data } = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
    return data.message;
  } catch (error) {
    return error;
  }
};
