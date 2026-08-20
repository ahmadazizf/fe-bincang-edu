import { useState } from 'react';
import { programsData } from '../data/programsData';

export function usePrograms() {
  const [programs] = useState(programsData);
  const [selectedProgramId, setSelectedProgramId] = useState(null);

  const getProgramById = (id) => programs.find((p) => p.id === id);

  return {
    programs,
    selectedProgramId,
    setSelectedProgramId,
    getProgramById,
  };
}
