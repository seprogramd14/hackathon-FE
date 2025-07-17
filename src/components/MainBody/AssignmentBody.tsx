import React, { useState } from 'react';
import styled from '@emotion/styled';
import * as S from './style';


const AssignmentBodyContainer = styled(S.MainBodyContainer)`
  align-items: flex-start;
  padding-top: 0;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding: 20px 0;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const ExitButton = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const QuestionSection = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const QuestionNumberWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const QuestionNumber = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
`;

const QuestionText = styled.p`
  font-size: 16px;
  display: inline;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
`;

const OptionButton = styled.button<{ selected?: boolean }>`
  width: 100%;
  padding: 12px 20px;
  border: 1px solid ${(props) => (props.selected ? '#007bff' : '#e0e0e0')};
  border-radius: 8px;
  background-color: ${(props) => (props.selected ? '#e6f7ff' : '#fff')};
  color: ${(props) => (props.selected ? '#007bff' : '#333')};
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  &:hover {
    border-color: #007bff;
  }
`;

const OXOptionsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
`;

const OXOption = styled.div<{ selected?: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  border: 1px solid ${(props) => (props.selected ? '#007bff' : '#e0e0e0')};
  border-radius: 8px;
  background-color: ${(props) => (props.selected ? '#e6f7ff' : '#fff')};
  font-size: 48px;
  font-weight: bold;
  color: ${(props) => (props.selected ? '#007bff' : '#333')};
  cursor: pointer;
  &:hover {
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 15px;
  line-height: 1.6;
  resize: vertical;
  margin-top: 15px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SubmitButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

const SubmitButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #555;
  }
`;

interface Props {
  onClose: () => void
}

const AssignmentBody: React.FC<Props> = ({ onClose }) => {
  const [selectedOption1, setSelectedOption1] = useState<string | null>(null);
  const [selectedOX, setSelectedOX] = useState<'O' | 'X' | null>(null);
  const [selectedQuestionNumber, setSelectedQuestionNumber] = useState<number | null>(null);

  const handleQuestionNumberClick = (questionNum: number) => {
    setSelectedQuestionNumber(questionNum === selectedQuestionNumber ? null : questionNum);
  };

  return (
    <AssignmentBodyContainer>
      <Header>
        <Title>1.1 - useState 과제</Title>
        <ExitButton onClick={onClose}>과제 그만하기</ExitButton>
      </Header>

      <QuestionSection>
        <QuestionNumberWrapper onClick={() => handleQuestionNumberClick(1)}>
          <QuestionNumber>1</QuestionNumber>
        </QuestionNumberWrapper>
        <QuestionText>리액트에서 useState란 함수형 컴포넌트 내의 상태를 관리하기 위한 OO이다.</QuestionText>
        <OptionsContainer>
          <OptionButton
            selected={selectedOption1 === 'React Hook'}
            onClick={() => setSelectedOption1('React Hook')}
          >
            React Hook
          </OptionButton>
          <OptionButton
            selected={selectedOption1 === 'Event Handler'}
            onClick={() => setSelectedOption1('Event Handler')}
          >
            Event Handler
          </OptionButton>
          <OptionButton
            selected={selectedOption1 === 'class component'}
            onClick={() => setSelectedOption1('class component')}
          >
            class component
          </OptionButton>
          <OptionButton
            selected={selectedOption1 === 'Props'}
            onClick={() => setSelectedOption1('Props')}
          >
            Props
          </OptionButton>
        </OptionsContainer>
      </QuestionSection>

      <QuestionSection>
        <QuestionNumberWrapper onClick={() => handleQuestionNumberClick(2)}>
          <QuestionNumber>2</QuestionNumber>
        </QuestionNumberWrapper>
        <QuestionText>useState는 클래스형 컴포넌트에서만 사용 가능하다.</QuestionText>
        <OXOptionsContainer>
          <OXOption selected={selectedOX === 'O'} onClick={() => setSelectedOX('O')}>
            O
          </OXOption>
          <OXOption selected={selectedOX === 'X'} onClick={() => setSelectedOX('X')}>
            X
          </OXOption>
        </OXOptionsContainer>
      </QuestionSection>

      <QuestionSection>
        <QuestionNumberWrapper onClick={() => handleQuestionNumberClick(3)}>
          <QuestionNumber>3</QuestionNumber>
        </QuestionNumberWrapper>
        <QuestionText>useState로 얻을 수 있는 값 두 가지를 설명하시오.</QuestionText>
        <TextArea placeholder="ex ) 경제학에 대해 공부하고 싶어요"></TextArea>
      </QuestionSection>

      <SubmitButtonContainer>
        <SubmitButton onClick={onClose}>제출</SubmitButton>
      </SubmitButtonContainer>
    </AssignmentBodyContainer>
  );
};

export default AssignmentBody;
