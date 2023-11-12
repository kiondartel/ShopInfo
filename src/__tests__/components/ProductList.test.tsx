import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ProductsList from "../../components/ProductList/index";
import { addProductToCart } from "../../store/reducers/cartReducer";
import store from "../../store";
import mockProducts from "../mocks/products.json";

describe("ProductsList", () => {
  it("should render the product list", () => {
    render(
      <Provider store={store}>
        <ProductsList products={mockProducts} />
      </Provider>
    );

    expect(screen.getByText("Produto 1")).toBeInTheDocument();
    expect(screen.getByText("Produto 2")).toBeInTheDocument();
  });

  it("should add product to cart when click on the button", () => {
    const spy = jest.spyOn(store, "dispatch");

    render(
      <Provider store={store}>
        <ProductsList products={mockProducts} />
      </Provider>
    );

    fireEvent.click(screen.getAllByText("Comprar")[0]!);

    expect(spy).toHaveBeenCalledWith(addProductToCart(mockProducts[0]));
    spy.mockRestore();
  });
});
