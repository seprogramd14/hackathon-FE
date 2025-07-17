import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';

interface ChatMessage {
  id: number;
  type: 'user' | 'ai';
  text: string;
  responseTime?: string;
  isThinking?: boolean;
}

const RightSidebarContainer = styled.div`
  width: 300px;
  background-color: #fff;
  border-left: 1px solid #eee;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100vh; /* Ensure it takes full height */
`;

const Header = styled.div`
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SaveChatButton = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const ChatArea = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const EmptyChat = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
  font-size: 16px;
`;

const UserMessage = styled.div`
  background-color: #e0f7fa; /* Light blue for user messages */
  align-self: flex-end;
  padding: 10px 15px;
  border-radius: 18px 18px 2px 18px;
  max-width: 80%;
  word-wrap: break-word;
  font-size: 14px;
`;

const AiMessage = styled.div`
  background-color: #f5f5f5; /* Light gray for AI messages */
  align-self: flex-start;
  padding: 10px 15px;
  border-radius: 18px 18px 18px 2px;
  max-width: 80%;
  word-wrap: break-word;
  font-size: 14px;
`;

const ResponseTime = styled.div`
  font-size: 11px;
  color: #888;
  margin-top: 5px;
  text-align: ${(props: { type: 'user' | 'ai' }) => (props.type === 'user' ? 'right' : 'left')};
`;

const ThinkingIndicator = styled.div`
  background-color: #f5f5f5;
  align-self: flex-start;
  padding: 10px 15px;
  border-radius: 18px 18px 18px 2px;
  max-width: 80%;
  word-wrap: break-word;
  font-size: 14px;
  color: #888;
`;

const InputArea = styled.div`
  padding: 15px;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputField = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SendButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #555;
  }
`;

const CategorySelect = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 13px;
  background-color: #f9f9f9;
  cursor: pointer;
  margin-right: 10px;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RightSidebar: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('text');
  const chatAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const newUserMessage: ChatMessage = {
      id: messages.length + 1,
      type: 'user',
      text: input,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');

    // Simulate AI thinking and response
    const thinkingMessage: ChatMessage = {
      id: messages.length + 2,
      type: 'ai',
      text: '',
      isThinking: true,
    };
    setMessages((prev) => [...prev, thinkingMessage]);

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === thinkingMessage.id
            ? { ...msg, text: '함수형 컴포넌트란? 기존의 클래스형 컴포넌트를 개선한 컴포넌트입니다.', isThinking: false, responseTime: '3.7s' }
            : msg
        )
      );
    }, 2000);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <RightSidebarContainer>
      <Header>
        AI에게 도움 받기
        {messages.length > 0 && <SaveChatButton>대화 저장하기</SaveChatButton>}
      </Header>
      <ChatArea ref={chatAreaRef}>
        {messages.length === 0 ? (
          <EmptyChat>아직 대화한 기록이 없어요</EmptyChat>
        ) : (
          messages.map((msg) => (
            msg.isThinking ? (
              <ThinkingIndicator key={msg.id}>
                <div className="dot-flashing"></div>
              </ThinkingIndicator>
            ) : (
              <React.Fragment key={msg.id}>
                {msg.type === 'user' ? (
                  <UserMessage>{msg.text}</UserMessage>
                ) : (
                  <AiMessage>{msg.text}</AiMessage>
                )}
                {msg.responseTime && <ResponseTime type={msg.type}>Response time: {msg.responseTime}</ResponseTime>}
              </React.Fragment>
            )
          ))
        )}
      </ChatArea>
      <InputArea>
        <InputRow>
          <InputField
            type="text"
            placeholder="ex ) 경제학에 대해 공부하고 싶어요"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <SendButton onClick={handleSendMessage}>↑</SendButton>
        </InputRow>
        <InputRow>
          <CategorySelect value={selectedCategory} onChange={handleCategoryChange}>
            <option value="text">text</option>
            <option value="video">video</option>
            <option value="image">image</option>
            <option value="diagram">diagram</option>
            <option value="mix">mix</option>
          </CategorySelect>
          <span style={{ fontSize: '13px', color: '#888' }}>output - {selectedCategory}</span>
        </InputRow>
      </InputArea>
    </RightSidebarContainer>
  );
};

export default RightSidebar;