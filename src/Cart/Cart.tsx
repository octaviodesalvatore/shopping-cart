import React from "react";
import { CartItem } from "../CartItem/CartItem";
//Styles
import { Wrapper } from "./Cart.styles";
//Types
import { CartItemType } from "../App";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

export const Cart: React.FC<Props> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Tu carrito de compras</h2>
      {cartItems.length === 0 ? <p>No hay items en tu cart</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};
