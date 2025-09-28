import styled from "styled-components";

export const PanelContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 80rem;
  min-width: 37rem;
  height: 50rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 40rem;
  }
`;

export const PanelTitle = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  margin-top: 0;
`;
