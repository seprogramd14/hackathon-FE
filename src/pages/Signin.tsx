import styled from '@emotion/styled';
import { Text } from '../components/Text';
import { theme } from '../styles/theme';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const Signin = () => {
  return (
    <Wrapper>
      <TopContainer>
        <Text size={28} weight={600}>
          로그인
        </Text>
        <InputWrapper>
          <Label size={14} color={theme.color.gray[400]}>
            아이디
          </Label>
          <Input width={256} />
        </InputWrapper>
        <InputWrapper>
          <Label size={14} color={theme.color.gray[400]}>
            비밀번호
          </Label>
          <Input width={256} />
        </InputWrapper>
      </TopContainer>
      <BottomContainer>
        <Button width={256} height={42} color='gray'>
          로그인
        </Button>
        <TextWrapper>
          <Text size={12} color={theme.color.gray[400]}>
            아직 계정이 없다면?
          </Text>
          <Link
            to={'/signup'}
            style={{ height: '14px', display: 'flex', alignItems: 'start' }}>
            <Text size={12} color={theme.color.gray[500]} weight={600}>
              회원가입
            </Text>
          </Link>
        </TextWrapper>
      </BottomContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 120px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: start;
`;

const Label = styled(Text)`
  margin-left: 2px;
`;
