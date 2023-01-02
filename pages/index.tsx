import { shopifyClient, parseShopifyResponse } from "../lib/shopify";

interface IIndex {
  products: [];
}
const Index = ({ products }: IIndex) => {
  console.log("products...........", products);

  return <>Index</>;
};
export default Index;
export const getServerSideProps = async () => {
  // Fetch all the products
  const products = await shopifyClient.product.fetchAll();

  return {
    props: {
      products: parseShopifyResponse(products),
    },
  };
};
