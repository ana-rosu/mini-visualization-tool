import styled from "styled-components";

export const HeaderTitle = styled.h1`
  font-size: 3rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.textGreyPrimary};
`;

export const DateContainer = styled.p`
  font-size: 1.2rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.textGreySecondary};
`;
