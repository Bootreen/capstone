import styled from 'styled-components';
import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 2vw;
  height: 2vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.5vw;
  cursor: pointer;
`;

export const ShoppingCartIcon = styled(Icon)`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0.2vw;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 1vw;
  font-weight: bold;
  bottom: 0.26vw;
`;