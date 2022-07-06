export const titleUrlToggle = (input) =>
  input.includes(' ') ? input.replaceAll(' ', '-').toLowerCase()
  : input.replaceAll('-', ' ').toLowerCase();