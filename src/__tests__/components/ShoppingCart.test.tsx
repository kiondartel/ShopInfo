import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../store";
import ShoppingCart from "../../components/ShoppingCart";
import mockProducts from "../mocks/products.json";

describe("ShoppingCart", () => {
  const mockTotal = mockProducts.length;

  const renderComponent = () =>
    render(
      <Provider store={store}>
        <ShoppingCart total={mockTotal} itens={mockProducts} />
      </Provider>
    );

  it("should start with the cart closed and show the total quantity of items", () => {
    renderComponent();
    expect(screen.getByText(mockTotal.toString())).toBeInTheDocument();
    expect(screen.queryByText(/Total Price/)).toBeNull();
  });
  it("should open the cart when clicking on the ShoppingCartWrapper", () => {
    renderComponent();
    const shoppingCartWrapper = screen.getByTestId("shopping-cart-wrapper");
    fireEvent.click(shoppingCartWrapper);

    expect(screen.getByText("Carrinho de compras")).toBeInTheDocument();
  });
});
