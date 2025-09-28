import styled from "styled-components";

export const SectionContainer = styled.div`
  padding: 3rem 4rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2rem 5rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem 2rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints["4k"]}) {
    padding: 5rem 20rem 0;
  }
`;

export const HeaderContainer = styled(SectionContainer)``;

export const DashboardContainer = styled(SectionContainer)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem 2rem 3rem;
  }
`;
