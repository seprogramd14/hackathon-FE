import styled from "@emotion/styled";

export const MainBodyContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px; /* Limit content width for better readability */
  margin: 0 auto;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const CheckIcon = styled.span`
  color: #4caf50;
  margin-left: 10px;
  font-size: 20px;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
`;

export const Count = styled.span`
  font-size: 14px;
  color: #888;
  margin-right: 10px;
`;

export const EditIcon = styled.span<{ isActive?: boolean }>`
  cursor: pointer;
  font-size: 18px;
  color: ${(props) => (props.isActive ? '#FFD700' : '#555')};
`;

export const VideoPlaceholder = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #aaa;
  margin-bottom: 20px;
`;

export const ContentSection = styled.div`
  width: 100%;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 30px;
`;

export const Highlight = styled.span`
  font-weight: bold;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end; /* Align buttons to the right */
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 40px;
`;

type Type = 'default' | 'primary' | 'success' | 'failed' 

export const ActionButton = styled.button<{ type?: Type}>`
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out;

  ${(props) => {
    if (props.type === 'primary') {
      return `
        background-color: #007bff;
        color: #fff;
        border: 1px solid #007bff;
        &:hover {
          background-color: #0056b3;
          border-color: #0056b3;
        }
      `;
    } else if (props.type === 'success') {
      return `
        background-color: #448361;
        color: #fff;
        border: 1px solid #448361;
        &:hover {
          background-color: #315f46ff;
          border-color: #315f46ff;
        }
      `;
    } else if (props.type === 'failed') {
      return `
        background-color: #EB5757;
        color: #fff;
        border: 1px solid #EB5757;
        &:hover {
          background-color: #c34747ff;
          border-color: #c34747ff;
        }
      `;
    } else {
      return `
        background-color: #37352F;
        color: #fff;
        border: 1px solid #ccc;
        &:hover {
          background-color: #37352F;
          border-color: #bbb;
        }
      `;
    }
  }}
`;

export const ChatHistorySection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  padding-top: 20px;
  gap: 10px;
`;

export const ChatHistoryTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
`;

export const ChatItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid #a8a8a8ff;
  border-radius: 10px;
  :hover {
    background-color: #e2e2e2ff;
  }
`;

export const ChatText = styled.span`
  font-size: 15px;
`;

export const ChatTime = styled.span`
  font-size: 13px;
  color: #888;
`;

export const NavigationButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: auto; /* Push to bottom */
  padding-top: 20px;
  border-top: 1px solid #eee;
`;

export const NavButton = styled.button`
  background: none;
  border: 1px solid #555;
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;
  font-size: 16px;
  color: black;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;

export const NavText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #555;
`;

export const StudyTime = styled.span`
  background-color: #e0e0e0;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 12px;
  margin-left: 10px;
  color: #555;
`;