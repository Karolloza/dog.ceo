export const getDogsArray = (state) => (state.common.dogs ? Object.keys(state.common.dogs) : []);

export const getBasicModal = (state) => state.common.isOpenBasicModal;
