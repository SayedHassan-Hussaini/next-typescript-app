import Card from "../components/card/Card-component";
import { shopifyClient, parseShopifyResponse } from "../lib/shopify";

interface IIndex {
  products: [];
}
const Index = ({ products }: IIndex) => {
  console.log("products...........", products);

  return (
    <div className="md:w-[80%] mx-auto mt-5">
      <Card />
    </div>
  );
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
