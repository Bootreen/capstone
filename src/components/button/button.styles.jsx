import styled from 'styled-components';
import { SpinnerContainer } from '../spinner/spinner.styles.jsx';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const BorderlessButton = styled(BaseButton)`
  min-width: 10px;
  padding: 0 20px;
  margin: 0 auto;
  line-height: normal;
  background-color: white;
  color: black;
  font-weight: bold;
  font-size: inherit;
  text-transform: none;

  &:hover {
    border: none;
  }
`;

export const PaymentButton = styled(InvertedButton)`
  margin: 30px auto 0;
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;