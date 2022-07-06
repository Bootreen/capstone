import styled from 'styled-components';

export const ProductImage = styled.img`
  width: 100%;
  object-fit: scale-down;
`;

export const SpicinessLabel = styled.img`
  position: absolute;
  top: 0.5vw;
  left: 0.5vw;
  width: 5.5vw;
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  position: relative;

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    bottom: 5vw;
    display: none;
  }

  &:hover {

    ${ProductImage}, ${SpicinessLabel} {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const ProductFooter = styled.div`
  color: white;
  background-color: dimgrey;
  padding: 0.7vw 0;
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8vw;
`;

export const ProductTitle = styled.span`
  width: 82%;
  padding-left: 0.5vw;
`;

export const ProductPrice = styled.span`
  width: 18%;
  text-align: right;
  padding-right: 0.5vw;
`;
