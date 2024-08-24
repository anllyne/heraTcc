import { addCycle, getCycles } from '../models/CycleModel';

export const handleAddCycle = async (cycle) => {
  const response = await addCycle(cycle);
  if (response.success) {
    // Sucesso ao adicionar ciclo
  } else {
    // Tratar erro
  }
};

export const fetchCycles = async (uid) => {
  const cycles = await getCycles(uid);
  return cycles;
};
