import styled from 'styled-components';

export const Container = styled.div`
  min-height: 120px;
  width: 100%;
  padding: 1rem 2rem;

  background: #EBEAED;
  border-radius: 0.5rem;
  box-shadow: 0px 5px 5px #0000000D;

  & + div {
    margin-top: 0.8rem;
  }
`;

export const Content = styled.div`
  width: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    a {
      color: var(--text-body);
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      text-decoration: none;
    }

    button {
      background-color: transparent;
      background-repeat: no-repeat;
      height: 2rem;
      border: 0;
      color: var(--red);
    }
  }

  p {
    color: #878787;
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const TagsContainer = styled.div`
  margin-top: 1rem;
  span {
    background: var(--text-body);
    color: #fff;
    font-weight: 600;
    border-radius: 0.25rem;
    padding: 0.2rem;

    & + span {
      margin-left: 0.5rem;
    }
  }
`;
