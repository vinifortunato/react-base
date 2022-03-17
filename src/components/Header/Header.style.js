import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;
