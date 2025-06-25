import { Metadata } from "next";
import PengurusPage from "./pengurus";

export const metadata: Metadata = {
  title: "Pengurus | XIIPALINGTEKNIK",
};

const Page = () => {
  return (
    <div>
      <PengurusPage />
    </div>
  );
};

export default Page;
