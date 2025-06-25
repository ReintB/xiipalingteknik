import { Metadata } from "next";
import ContactPage from "./contact";

export const metadata: Metadata = {
  title: "Kontak | XIIPALINGTEKNIK",
};

const Page = () => {
  return (
    <div>
      <ContactPage />
    </div>
  );
};

export default Page;
