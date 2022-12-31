import PageHeader from "./header";
import Sidebar from "./sideBar";
import { useRouter } from "next/router";

export default function layout({ children }) {
  const router =useRouter()
  return (
    <>
      <Sidebar currentPage={router?.asPath} />
      <div className={`md:ml-64`}>
        <PageHeader />
        <main className="w-[90%] mx-auto my-5">{children}</main>
      </div>
    </>
  );
}
