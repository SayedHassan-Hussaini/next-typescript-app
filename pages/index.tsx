import Card from "../components/card/Card-component";
import { shopifyClient, parseShopifyResponse } from "../lib/shopify";

interface IIndex {
  products: [];
  user: [];
}
type productType = {
  id: string;
  images: [{ src: "" }];
  handle: string;
  variants: [{ price: { amount: number } }];
};
const Index = ({ products, user }: IIndex) => {
  console.log("products...........", user);

  return (
    <div className="md:w-[80%] mx-auto mt-5">
      <div className="grid grid-cols-4 items-center gap-3">
        {products?.map(({ id, images, handle, variants }: productType) => (
          <Card
            key={id}
            imageUrl={images[0]?.src}
            description={handle}
            price={variants[0]?.price?.amount}
            productId={id}
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
  const users = await fetch(
    `https://sayed-company.myshopify.com/admin/api/2023-01/customers.json`,{
      headers:{
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token':"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"
      }
    }
  );
  const response= await users.json()
  console.log("user..........", response);
  return {
    props: {
      products: parseShopifyResponse(products),
      user: response,
    },
  };
};
