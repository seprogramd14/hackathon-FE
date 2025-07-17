import React, { useState } from 'react';
import * as S from './style'
import AssignmentBody from './AssignmentBody';

const MainBody: React.FC = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [showAssignment, setShowAssignment] = useState(false); // New state for showing assignment
  const [isEditActive, setIsEditActive] = useState(false); // New state for EditIcon active status
  const studyTime = "24m"; // Placeholder for study time

  const handleCompleteStudy = () => {
    setIsCompleted(true);
  };

  const handleCancelComplete = () => {
    setIsCompleted(false);
  };

  const handleAssignmentClick = () => { // New handler for assignment button
    setShowAssignment(true);
  };

  const handleClose = () => {
    setShowAssignment(false);
  }

  const toggleEditActive = () => { // Handler for EditIcon click
    setIsEditActive(!isEditActive);
  };

  if (showAssignment) { // Conditional rendering for AssignmentBody
    return <AssignmentBody onClose={handleClose}/>;
  }

  return (
    <S.MainBodyContainer>
      <S.Header>
        <S.Title>
          1.1 - useState
          {isCompleted ? <S.CheckIcon>✔</S.CheckIcon> : <S.StudyTime>{studyTime}</S.StudyTime>}
        </S.Title>
        <S.HeaderActions>
          <S.Count>출처 +9</S.Count>
          <S.EditIcon onClick={toggleEditActive} isActive={isEditActive}>✏</S.EditIcon>
        </S.HeaderActions>
      </S.Header>

      <S.VideoPlaceholder>Video Player Placeholder</S.VideoPlaceholder>

      <S.ContentSection>
        <p>
          useState에서 React에서 <S.Highlight>함수형 컴포넌트 내부에서 상태를 관리할 수 있도록 해주는 함수</S.Highlight>입니다.
        </p>
        <p>
          이를 사용하면 어떤 값(예: 숫자, 문자열, 객체 등)을 상태로 저장하고, 그 값을 변경할 수 있는 함수를 함께 얻을 수 있습니다.
        </p>
        <p>
          예를 들어, useState(0)이라고 하면 0이라는 초기값을 가진 상태 변수와 그 값을 반환합니다.
          이 함수를 호출하면 React는 컴포넌트를 다시 렌더링하여 변경된 상태를 화면에 반영합니다.
        </p>
        <p>
          즉, useState는 사용자 입력, 버튼 클릭, 네트워크 응답 등에 따라 컴포넌트의 UI를 동적으로 변경할 수 있도록 도와주는 중요한 기능입니다.
        </p>
      </S.ContentSection>

      {isCompleted && (
        <S.ChatHistorySection>
          <S.ChatHistoryTitle>저장된 채팅 내역</S.ChatHistoryTitle>
          <S.ChatItem>
            <S.ChatText>가상돔 작동원리</S.ChatText>
            <S.ChatTime>before 12h</S.ChatTime>
          </S.ChatItem>
          <S.ChatItem>
            <S.ChatText>가상돔 작동원리</S.ChatText>
            <S.ChatTime>before 12h</S.ChatTime>
          </S.ChatItem>
        </S.ChatHistorySection>
      )}

      <S.ButtonGroup>
        <S.ActionButton type="default">더 많은 시작 자료 📚</S.ActionButton>
        {!isCompleted ? (
            <S.ActionButton type="success" onClick={handleCompleteStudy}>공부 완료</S.ActionButton>
        ) : (
          <>          
            <S.ActionButton type="primary" onClick={handleAssignmentClick}>과제 풀기</S.ActionButton> {/* Added onClick here */}
            <S.ActionButton type="failed" onClick={handleCancelComplete}>공부 완료 취소</S.ActionButton>
          </>
        )}
      </S.ButtonGroup>

      <S.NavigationButtons>
        <S.NavButton>
          <S.NavText>Prev</S.NavText>
          1 - hook이란?
        </S.NavButton>
        <S.NavButton>
          <S.NavText>Next</S.NavText>
          1.1.1 - prev
        </S.NavButton>
      </S.NavigationButtons>
    </S.MainBodyContainer>
  );
};

export default MainBody;
