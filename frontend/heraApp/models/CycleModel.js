import axios from 'axios';

export const addCycle = async (cycle) => {
  try {
    const response = await axios.post('C:\Users\anaca\OneDrive\Área de Trabalho\tccHera\backend\models\Cycle.js', cycle);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCycles = async (uid) => {
  try {
    const response = await axios.get(`C:\Users\anaca\OneDrive\Área de Trabalho\tccHera\backend\models\Cycle.js${uid}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
