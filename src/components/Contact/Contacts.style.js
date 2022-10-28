import styled from 'styled-components';

export const PhonebookBlock = styled.div`
  margin-bottom: 5px;

  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  width: 300px;
  padding: 10px;
`;

export const PhoneBookDot = styled.div`
  width: 5px;
  height: 5px;
  border: 1px solid #000;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #000;
`;

export const PhoneBookBtn = styled.div`
  margin-left: auto;
  border: 1px solid #0000ff;
  padding: 3px 15px 3px 15px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #0000ff;
    color: #fff;
  }
`;
