import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 9rem;
  padding: 1rem 2rem;
  white-space: nowrap;

  background: #135673;
  border: 0;
  outline-color: #135673;
  border-radius: 0.25rem;
  transition: filter 0.2s;

  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.36px;
  color: #fff;

  &:hover{
    filter: brightness(0.9);
  }

  svg {
    height: 1.4rem;
    width: 1.4rem;
    margin-right: 0.25rem;
    color: #fff;
  }

`;
