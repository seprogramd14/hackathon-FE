import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';
import { Text } from '../../Text';
import { Input } from '../../Input';
import { CurriculumModalBottomGroup } from '.';
import { useState } from 'react';

export const StepTwo = () => {
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
  const [textPercentage, setTextPercentage] = useState<number>(50);

  const Levels = [
    { name: '초급', des: '기초 개념을 배우는 단계' },
    { name: '중급', des: '활용과 실습 중심 학습' },
    { name: '고급', des: '심화 이해와 해결력 강화' },
  ];

  return (
    <Container>
      <Text size={24} weight={600}>
        어떻게 공부할까요?
      </Text>
      <MiddleBox>
        <InputBox>
          <Text size={14} weight={600}>
            학습기간
          </Text>
          <FirstInputBox>
            <Input width={240} type='number' />
            <Text size={14} color={theme.color.gray[400]}>
              일
            </Text>
          </FirstInputBox>
        </InputBox>
        <InputBox>
          <Text size={14} weight={600}>
            난이도
          </Text>
          <SecondInputBox>
            {Levels.map((level, index) => {
              return (
                <LevelBox
                  key={index}
                  isSelected={selectedLevel === index + 1}
                  onClick={() => {
                    setSelectedLevel(index + 1);
                  }}>
                  <Text weight={600}>{level.name}</Text>
                  <Text size={14} color={theme.color.gray[400]}>
                    {level.des}
                  </Text>
                </LevelBox>
              );
            })}
          </SecondInputBox>
        </InputBox>

        <InputBox>
          <Text size={14} weight={600}>
            학습선호
          </Text>
          <SecondInputBox>
            <ThirdTextBox>
              <Text size={12} color={theme.color.gray[400]}>
                텍스트
              </Text>
              <Text size={10} color={theme.color.gray[400]}>
                {`${textPercentage}%`}
              </Text>
            </ThirdTextBox>
            <SliderWrapper>
              <Slider
                type='range'
                min='0'
                max='100'
                value={textPercentage}
                onChange={(e) => setTextPercentage(Number(e.target.value))}
              />
            </SliderWrapper>
            <ThirdTextBox>
              <Text size={12} color={theme.color.gray[400]}>
                시각자료
              </Text>
              <Text size={10} color={theme.color.gray[400]}>
                {`${100 - textPercentage}%`}
              </Text>
            </ThirdTextBox>
          </SecondInputBox>
        </InputBox>
      </MiddleBox>
      <CurriculumModalBottomGroup />
    </Container>
  );
};

const Container = styled.div`
  width: 650px;
  height: 510px;
  background-color: ${theme.color.white};
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 48px;
`;

const MiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 36px;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FirstInputBox = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const SecondInputBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ThirdTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  align-items: center;
`;

const LevelBox = styled.div<{ isSelected?: boolean }>`
  width: 180px;
  height: 64px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 24px;
  border-radius: 12px;
  border: 1px solid ${theme.color.gray[100]};
  cursor: pointer;
  letter-spacing: -0.2px;
  transition: 0.1s linear;
  background-color: ${({ isSelected }) =>
    isSelected ? theme.color.gray[500] + '0f' : theme.color.white};
  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? theme.color.gray[500] + '0f' : theme.color.gray[500] + '05'};
  }
`;

const SliderWrapper = styled.div`
  width: 450px;
  height: 10px;
  position: relative;
  display: flex;
  align-items: center;
`;

const Slider = styled.input`
  width: 450px;
  height: 4px;
  border-radius: 2px;
  background-color: ${theme.color.gray[200]};
  outline: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${theme.color.gray[500]};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${theme.color.gray[500]};
    cursor: pointer;
    border: none;
  }
`;
