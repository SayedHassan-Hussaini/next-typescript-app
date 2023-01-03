import Card from "../components/card/Card-component";
import { shopifyClient, parseShopifyResponse } from "../lib/shopify";

interface IIndex {
  products: [];
  user: [];
  createUser: [];
}
type productType = {
  id: string;
  images: [{ src: "" }];
  handle: string;
  variants: [{ price: { amount: number } }];
};

const Index = ({ products, user, createUser }: IIndex) => {
  console.log(" products...........", createUser);
  console.log(" user...........", user);
  const handleRegister = async () => {
    const data = {
      first_name: "Steve",
      last_name: "Lastnameson",
      email: "sayed@gmail.com",
      phone: "+15142546011",
      verified_email: true,
      addresses: [
        {
          address1: "123 Oak St",
          city: "Ottawa",
          province: "ON",
          phone: "555-1212",
          zip: "123 ABC",
          last_name: "Lastnameson",
          first_name: "Mother",
          country: "CA",
        },
      ],
      password: "Asdf123",
      password_confirmation: "Asdf123",
      send_email_welcome: false,
    };
    const req = await fetch(
      `https://sayed-company.myshopify.com/admin/api/2023-01/customers.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": "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",
        },
        body: JSON.stringify(data),
      }
    );
    console.log("req..............", req);
    const response = await req.json();
    console.log("respon...........", response);
  };
  return (
    <div className="md:w-[80%] mx-auto mt-5">
      <button onClick={handleRegister}>Register</button>
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
    `https://sayed-company.myshopify.com/admin/api/2023-01/customers/search.json?query=email:sh.hussaini1378@gmail.com&query=last_name:Hussaini`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": "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",
      },
    }
  );
  const response = await users.json();

  const data = {
    firstName: "Steve",
    lastName: "Lastnameson",
    email: "sayed@gmail.com", 
    password: "newpass",
   
    };
  const req = await fetch(
    `https://sayed-company.myshopify.com/admin/api/2023-01/customers.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": "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",
      },
      body: JSON.stringify(data),
    }
  );
  console.log("req..............", req);
  const response2 = await req.json();
  console.log("respon...........", response2);
  return {
    props: {
      products: parseShopifyResponse(products),
      user: response,
      createUser: response2,
    },
  };
};
