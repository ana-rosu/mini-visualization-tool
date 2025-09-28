import styled from "styled-components";

export const ChartsContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 3rem;
  }
`;
