import React from "react";
import {
  CartOverlay,
  Title,
  CartItem,
  CloseIcon,
  RemoveItemIcon,
  ProductName,
  Image,
  ProductPrice,
  ItemsGrid,
  CartItemQuantitySelector,
  TotalPrice,
  Total,
  Purchase,
} from "./styles";

import { useDispatch } from "react-redux";
import {
  decrementProductQuantity,
  incrementProductQuantity,
  removeProductToCart,
} from "../../store/reducers/cartReducer";
import { Product } from "../../types/Products";

interface CartOverlayProps {
  isOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
  itens: Array<Product>;
  totalPrice: number;
}

const CartOverlayComponent: React.FC<CartOverlayProps> = ({
  isOpen,
  setCartOpen,
  itens,
  totalPrice,
}) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (id: number) => {
    dispatch(removeProductToCart(id));
  };

  const handleIncrement = (id: number) => {
    dispatch(incrementProductQuantity(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementProductQuantity(id));
  };

  const itemCounts = new Map<number, number>();
  itens.forEach((item) => {
    itemCounts.set(item.id, (itemCounts.get(item.id) || 0) + 1);
  });

  const uniqueItems = itens.reduce((unique: Product[], item) => {
    if (!unique.some((obj) => obj.id === item.id)) {
      unique.push(item);
    }
    return unique;
  }, [] as Product[]);

  return (
    <CartOverlay isOpen={isOpen}>
      <Title>
        <h1>
          Carrinho <br></br>de compras
        </h1>
        <CloseIcon size={30} onClick={() => setCartOpen(false)} />
      </Title>
      <ItemsGrid>
        {uniqueItems.map((item) => (
          <CartItem key={item.id}>
            <Image src={item.photo} alt={item.name} />
            <ProductName>{item.name}</ProductName>
            <CartItemQuantitySelector>
              <button onClick={() => handleDecrement(item.id)}>-</button>
              <span>{itemCounts.get(item.id)}</span>
              <button onClick={() => handleIncrement(item.id)}>+</button>
            </CartItemQuantitySelector>
            <ProductPrice>R${parseFloat(item.price).toFixed(0)}</ProductPrice>
            <RemoveItemIcon onClick={() => handleRemoveItem(item.id)} />
          </CartItem>
        ))}
      </ItemsGrid>
      <TotalPrice>
        <Total>
          <h1>Total:</h1>
          <h1>R${totalPrice}</h1>
        </Total>
        <Purchase>
          <h1>Finalizar Compra</h1>
        </Purchase>
      </TotalPrice>
    </CartOverlay>
  );
};

export default CartOverlayComponent;
