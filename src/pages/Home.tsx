import styled from '@emotion/styled';
import { Text } from '../components/Text';
import { theme } from '../styles/theme';
import { Add } from '../components/icons/Add';
import { Button } from '../components/Button';

export const Home = () => {
  return (
    <Wrapper>
      <Text size={48} weight={600}>
        WANNAGO에 오신 것을 환영합니다
      </Text>
      <ButtonListWrapper>
        <NewButton>
          <Add />
          <Text weight={600} color={theme.color.white}>
            새로 만들기
          </Text>
        </NewButton>
        <ListContainer>
          <ClassBox>
            <div>
              <Text size={20} weight={600}>
                React 입문
              </Text>
              <Text size={14} weight={400}>
                created 2025.01.12
              </Text>
            </div>
            <div>
              <Button width={84} height={42} color='gray'>
                공부하기
              </Button>
            </div>
          </ClassBox>
        </ListContainer>
      </ButtonListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 1520px;
  margin-top: 140px;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: start;
`;

const ButtonListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ClassBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 280px;
  border-radius: 8px;
  border: 1px solid ${theme.color.gray[200]};
  padding: 28px 20px;
  gap: 40px;
  > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  }
  > div:nth-of-type(2) {
    display: flex;
    justify-content: end;
    width: 100%;
  }
`;

const NewButton = styled.div`
  width: 146px;
  height: 48px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${theme.color.gray[500]};
  transition: 0.2s linear;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    transition: 0.05s linear;
    filter: brightness(0.9);
  }
`;
