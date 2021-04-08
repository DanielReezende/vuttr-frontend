import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; 
  background: #247BA0;
  padding: 2rem 1rem 12rem;
`;

export const Content = styled.section`
  height: 4rem;
  max-width: 980px;
  width: 100%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  padding-bottom: 1rem;

  h1{
    font-size: 3rem;
    color: #fff;
  }

  p {
    font-size: 1.5rem;
    font-weight: 600;
    color: #FBFBFB;
  }

`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    margin-left: 1rem;
  }

  label {
    font-size: 1rem;
    font-weight: 600;
    white-space: nowrap;

    margin-left: 0.5rem;
    color: #FBFBFB;
  }
`;

