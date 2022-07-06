import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuBarContainer = styled.div`
  height: 85px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100px;
  padding: 15px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1.2vw;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.7vw;
`;