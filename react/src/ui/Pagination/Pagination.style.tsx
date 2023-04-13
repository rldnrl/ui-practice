import { css } from '@emotion/css'

export const paginationStyle = {
  container: css`
    display: flex;
    gap: 4px;
  `,
  list: (active= false) => css`
    list-style: none;
    ${active ? '> button { background: red; };' : ''}
  `,
  button: css`
    border: none;
    outline: none;
    background: none;
    padding: 0.5rem;
    border-radius: 4px;
  `
}
