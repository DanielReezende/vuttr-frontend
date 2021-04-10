import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  label {
    font-size: 1rem;
    font-weight: 600;
    padding: 2rem 0;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    margin-top: 1rem;
    margin-bottom: 1rem;


    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {

    }
  }

  textarea {
    width: 100%;
    padding: 1rem 1.5rem;
    height: 5rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    margin-top: 1rem;
    margin-bottom: 1rem;

    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }
  }

  button {
    margin-top: 1.5rem;
    width: 100%;
  }

`;
