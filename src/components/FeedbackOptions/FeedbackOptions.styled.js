import styled from 'styled-components';

export const WrapBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;
export const Btn = styled.button`
  text-transform: capitalize;
  width: 80px;
  border: 1px solid gray;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  :hover {
    color: darkblue;
    background-color: lightblue;
  }
  :active {
    background-color: blue;
    border-color: white;
    color: white;
    opacity: 0.5;
  }
`;
