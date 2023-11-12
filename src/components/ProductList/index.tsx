import React from "react";
import {
  ProductContainer,
  Image,
  ProductsGrid,
  ProductName,
  ProductPrice,
  ProductDescription,
  ProductInfo,
  BuyButton,
} from "./styles";
import { toast } from "react-toastify";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/reducers/cartReducer";
import { Product } from "../../types/Products";

interface ProductsListProps {
  products: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product: Product) => {
    dispatch(addProductToCart(product));
    toast.success("Item adicionado ao carrinho");
  };
  return (
    <ProductsGrid>
      {products.map((product) => (
        <ProductContainer key={product.id}>
          <Image src={product.photo} alt={product.name} />
          <ProductInfo>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>
              R${parseFloat(product.price).toFixed(0)}
            </ProductPrice>
          </ProductInfo>
          <ProductDescription>
            Redesigned from scratch and completely revised.
          </ProductDescription>
          <BuyButton onClick={() => handleAddToCart(product)}>
            <MdAddShoppingCart size={25} />
            <h3>Comprar</h3>
          </BuyButton>
        </ProductContainer>
      ))}
    </ProductsGrid>
  );
};

export default ProductsList;
