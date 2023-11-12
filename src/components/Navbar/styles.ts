import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 30px 20px;
  background-color: #2a52be;
`;

export const Brand = styled(Link)`
  display: flex;
  gap: 10px;
  align-items: end;
  font-size: 25px;
  font-weight: bold;
  color: white;
  text-decoration: none;

  h1 {
    line-height: 44px;
    margin-bottom: 0;
  }
  p {
    font-size: 20px;
    font-stretch: condensed;
  }
`;
