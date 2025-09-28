import styled from "styled-components";

export const Select = styled.select`
  padding: 1rem 4rem 1rem 1rem;
  font-size: 1.6rem;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.white};
  font-family: "Nunito", sans-serif;
  cursor: pointer;
  margin-bottom: 2rem;

  /* Remove default arrow */
  -webkit-appearance: none; /* Safari/Chrome */
  -moz-appearance: none; /* Firefox */
  appearance: none;

  /* Custom arrow */
  background-image: url('data:image/svg+xml;utf8,<svg fill="black" height="12" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 2rem;

  &:hover {
    border-color: ${({ theme }) => theme.colors.mediumGrey};
  }
`;
