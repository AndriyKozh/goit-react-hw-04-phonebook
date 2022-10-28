import styled from 'styled-components';

export const FormContact = styled.div`
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;

  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

export const FormLable = styled.label`
  width: 40%;
  height: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-weight: bold;
  border: transparent;
`;

export const FormInput = styled.input`
  border: transparent;
  padding: 4px 10px 4px 10px;
  margin-top: 10px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
`;

export const FormBtn = styled.button`
  font-size: 14px;
  font-weight: bold;
  margin-top: 30px;
  padding: 4px 20px 4px 20px;
  background-color: #fff;
  border: 1px solid #0000ff;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #0000ff;
  }
`;
