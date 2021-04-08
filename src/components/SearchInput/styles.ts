import styled from 'styled-components';

export const Container = styled.div`
  background: #F5F4F6;
  border: 2px solid #EBEAED;
  height: 3rem;

  display: flex;
  align-items: center;

  border-radius: 0.25rem;
  color: var(--text-title);
  
  padding: 1rem;
  max-width: 16rem;
  width: 100%;

  input {
    flex: 1;
    background: transparent;
    font-size: 1rem;
    border: 0;
    outline: none;

    &::placeholder {
      color: #B1ADB9;
    }
  }

  svg {
    width: 1.4rem;
    height: 1.4rem;
    margin-right: 0.8rem;
    color: #B1ADB9;
  }
`;
