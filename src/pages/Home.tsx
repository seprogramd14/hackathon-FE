import styled from '@emotion/styled';
import { Text } from '../components/Text';
import { theme } from '../styles/theme';
import { Add } from '../components/icons/Add';
import { Button } from '../components/Button';
import { MoldOne } from '../components/icons/MoldOne';
import { MoldTwo } from '../components/icons/MoldTwo';
import { MoldThree } from '../components/icons/MoldThree';
import { MoldFour } from '../components/icons/MoldFour';
import { MoldFive } from '../components/icons/MoldFIve';

function getRandom(): number {
  return Math.floor(Math.random() * 5) + 1;
}

export const Home = () => {
  const items = [
    { title: 'React 입문', date: '2025 . 01 . 12', st: getRandom() },
    { title: 'React 입문', date: '2025 . 01 . 12', st: getRandom() },
    { title: 'React 입문', date: '2025 . 01 . 12', st: getRandom() },
  ];

  function p(num: number) {
    switch (num) {
      case 1:
        return <MoldOne />;
      case 2:
        return <MoldTwo />;
      case 3:
        return <MoldThree />;
      case 4:
        return <MoldFour />;
      case 5:
        return <MoldFive />;
      default:
        return '0px';
    }
  }

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
          {items.map((item, index) => {
            return (
              <ClassBox key={index} num={item.st}>
                <MoldBox num={item.st}>{p(item.st)}</MoldBox>
                <div>
                  <Text size={20} weight={600}>
                    {item.title}
                  </Text>
                  <Text size={14} weight={400}>
                    {`created ${item.date}`}
                  </Text>
                </div>
                <div>
                  <Button width={84} height={42} color='gray'>
                    공부하기
                  </Button>
                </div>
              </ClassBox>
            );
          })}
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

const MoldBox = styled.span<{ num: number }>`
  position: absolute;
  left: ${({ num }) => (num === 2 ? '16px' : '12px')};
  top: ${({ num }) => {
    function p() {
      switch (num) {
        case 1:
          return '110px';
        case 2:
          return '104px';
        case 3:
          return '103px';
        case 4:
          return '113px';
        case 5:
          return '96px';
        default:
          return '0px'; // num이 1~5가 아닐 경우 기본값
      }
    }

    return p();
  }};
`;

const ClassBox = styled.div<{ num: number }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 280px;
  border-radius: 8px;
  /* border: 1px solid ${theme.color.gray[200]}; */
  padding: 28px 20px;
  gap: 40px;
  position: relative;
  overflow: hidden;
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
  background-color: ${({ num }) => {
    function p() {
      switch (num) {
        case 1:
          return '#FFFFD1';
        case 2:
          return '#8EE6D6';
        case 3:
          return '#FFB1B6';
        case 4:
          return '#ADE5FD';
        case 5:
          return '#F7F7F7';
        default:
          return '#F7F7F7'; // num이 1~5가 아닐 경우 기본값
      }
    }

    return p();
  }};
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
