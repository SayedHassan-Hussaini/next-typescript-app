import Card from "../components/card/Card-component";
import { shopifyClient, parseShopifyResponse } from "../lib/shopify";

interface IIndex {
  products: [id: string, descriptionHtml: string, images: [], handle: string];
}
type productType = {
  id: string;
  images: [];
  handle: string;
  variants: [];
};
const Index = ({ products }: IIndex) => {
  console.log("products...........", products);

  return (
    <div className="md:w-[80%] mx-auto mt-5">
      <div className="grid grid-cols-4 items-center gap-3">
        {products?.map((product) => (
          <Card
            key={product?.id}
            imageUrl={product?.images[0]?.src}
            description={product?.handle}
            price={product?.variants[0]?.price?.amount}
            productId={product?.id}
          />
        ))}
      </div>
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
