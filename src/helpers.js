export const mobileOnlyStyles = styles => `
  @media (max-width: 768px) {
    ${styles}
  }$
`
export const desktopOnlyStyles = styles => `
  @media (min-width: 768px) {
    ${styles}
  }
`
