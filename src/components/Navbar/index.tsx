import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import { NavbarContainer, Brand } from "./styles";
import ShoppingCart from "../ShoppingCart";

const NavBar: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const totalItemsInCart = cartItems.length;
  return (
    <NavbarContainer>
      <Brand to="/">
        <h1>MKS</h1>
        <p>Sistemas</p>
      </Brand>
      <ShoppingCart total={totalItemsInCart} itens={cartItems} />
    </NavbarContainer>
  );
};

export default NavBar;
