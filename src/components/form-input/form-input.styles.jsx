import styled, { css } from 'styled-components';

const COLOR = {
  primary: 'black',
  secondary: 'grey'
};

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${COLOR.primary};
`;

export const FormInputLabel = styled.label`
  color: ${COLOR.secondary};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${({shrink}) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${COLOR.secondary};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${COLOR.secondary};

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;