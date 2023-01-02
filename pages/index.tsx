import { useEffect } from "react";
import { shopifyClient, parseShopifyResponse } from "../lib/shopify";

const Index = () => {

  useEffect(() => {
    const run = async () => {
      const products = await shopifyClient.product.fetchAll();
      const response=parseShopifyResponse(products)
      console.log("product..........",response)
    };
    run()
   
   
  }, []);

  return <>Index</>;
};
export default Index;
// export const getServerSideProps = async () => {
//   // Fetch all the products
//   const products = await shopifyClient.product.fetchAll();

//   return {
//    props: {
//     products: parseShopifyResponse(products),
//   },
//  };
// };
