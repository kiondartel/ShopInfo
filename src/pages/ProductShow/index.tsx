import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import { FilterByStatusContainer, Container } from "./styles";
import React from "react";
import { useQuery } from "react-query";
import { fetchProducts } from "../../services/mksApi/ProductPreview";
import Loader from "../../components/LoadingSpinner";
import ProductsList from "../../components/ProductList";
import { Product } from "../../types/Products";

const ProductShow: React.FC = () => {
  const pageToLoad = 1;
  const rowsPerPage = 10;
  const sortBy = "name";
  const orderBy = "ASC";
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<Product[], Error>(
    ["products", pageToLoad, rowsPerPage, sortBy, orderBy],
    () => fetchProducts(pageToLoad, rowsPerPage, sortBy, orderBy),
    {
      retry: true,
    }
  );

  return (
    <Container>
      <NavBar />
      <FilterByStatusContainer>
        {isLoading && <Loader />}
        {error && <p>Error: {error.message}</p>}
        {products && <ProductsList products={products} />}
      </FilterByStatusContainer>
      <Footer />
    </Container>
  );
};

export default ProductShow;
