import styled from 'styled-components';

export default function NormalButton({ text, isAccent }) {
  return (
    <>
      <Button isAccent={isAccent}>{text}</Button>
    </>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: ${props => (props.isAccent ? '#FF9C27' : '#687a48')};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;

  :hover {
    transform: scale(1.1);
  }
`;
