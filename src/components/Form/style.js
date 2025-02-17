import styled from 'styled-components';

export const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
    * {
      font-size: ${({ theme }) => theme.fontSize.SMALL};
    }
  }
  & > form > textarea {
    display: block;
    padding: 5px 1%;
    width: 98%;
    height: 50px;
    margin-bottom: 10px;
  }
  & > form > input[type='text'] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
    margin-right: 10px;
  }
`;