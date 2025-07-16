import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';
import { Text } from '../../Text';
import { Input } from '../../Input';
import { CurriculumModalBottomGroup } from '.';

export const StepOne = () => {
  return (
    <Container>
      <TopBox>
        <Text size={24} weight={600}>
          무엇을 공부하고 싶나요?
        </Text>
        <Input width={450} placeholder='ex ) 경제학에 대해 공부하고 싶어요' />
      </TopBox>
      <CurriculumModalBottomGroup />
    </Container>
  );
};

const Container = styled.div`
  width: 546px;
  height: 248px;
  background-color: ${theme.color.white};
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
