import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
`;

export const CheckoutRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 0.5fr;
  align-items: center;
  text-align: center;
  margin: 0;
  border-top: 1px solid grey;
`;

export const TableHeaderRow = styled(CheckoutRow)`
  text-align: center;
  margin-bottom: -26px;
  border-top: none;

  & :first-child {
    text-align: left;
    margin-left: 26px;
  }
`;

export const TotalRow = styled(CheckoutRow)`
  grid-template-areas: ". . total amount .";

  & :first-child {
    grid-area: total;
  }

  & :last-child {
    grid-area: amount;
  }
`;

export const CheckoutImage = styled.img`
  width: 10vw;
  min-width: 100px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;