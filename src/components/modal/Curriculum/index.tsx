import styled from '@emotion/styled';
import Modal from '..';
import { theme } from '../../../styles/theme';
import { Text } from '../../Text';
import { Input } from '../../Input';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { StepThree } from './StepThree';
import { Button } from '../../Button';
import { useCurriculum } from '../../../contexts/CurriculumContext';

export const CurriculumModalBottomGroup = () => {
  const {
    currentStep,
    totalSteps,
    goToNextStep,
    goToPreviousStep,
    canGoNext,
    canGoPrevious,
  } = useCurriculum();

  return (
    <ButtonContainer>
      <Button
        width={84}
        height={42}
        color={currentStep === 1 ? 'red' : 'gray'}
        onClick={currentStep === 1 ? undefined : goToPreviousStep}>
        {currentStep === 1 ? '돌아가기' : '뒤로'}
      </Button>
      <StepWrapper>
        {Array.from({ length: totalSteps }, (_, index) => (
          <Stepper key={index} isDone={index < currentStep} />
        ))}
      </StepWrapper>
      <Button
        width={84}
        height={42}
        color='gray'
        onClick={canGoNext ? goToNextStep : undefined}
        disabled={!canGoNext}>
        {currentStep === totalSteps ? '완료' : '다음'}
      </Button>
    </ButtonContainer>
  );
};

export const CurriculumModal = () => {
  const { currentStep, resetSteps } = useCurriculum();

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      default:
        return <StepOne />;
    }
  };

  return (
    <Modal
      onClose={() => {
        console.log(124);
        resetSteps();
      }}>
      {renderCurrentStep()}
    </Modal>
  );
};

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 48px;
`;

const StepWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const Stepper = styled.div<{ isDone: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ isDone }) =>
    isDone ? theme.color.gray[500] : theme.color.gray[300]};
`;
