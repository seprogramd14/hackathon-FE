import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface CurriculumContextType {
  currentStep: number;
  totalSteps: number;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  goToStep: (step: number) => void;
  resetSteps: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

const CurriculumContext = createContext<CurriculumContextType | undefined>(undefined);

interface CurriculumProviderProps {
  children: ReactNode;
}

export const CurriculumProvider: React.FC<CurriculumProviderProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3; // 총 3단계로 가정

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  };

  const resetSteps = () => {
    setCurrentStep(1);
  };

  const canGoNext = currentStep < totalSteps;
  const canGoPrevious = currentStep > 1;

  const value: CurriculumContextType = {
    currentStep,
    totalSteps,
    goToNextStep,
    goToPreviousStep,
    goToStep,
    resetSteps,
    canGoNext,
    canGoPrevious,
  };

  return (
    <CurriculumContext.Provider value={value}>
      {children}
    </CurriculumContext.Provider>
  );
};

export const useCurriculum = (): CurriculumContextType => {
  const context = useContext(CurriculumContext);
  if (context === undefined) {
    throw new Error('useCurriculum must be used within a CurriculumProvider');
  }
  return context;
}; 