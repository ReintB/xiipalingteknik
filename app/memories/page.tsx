import { Metadata } from "next";
import MemoriesPage from "./memories";

export const metadata: Metadata = {
  title: "Memori | XIIPALINGTEKNIK",
};

const Page = () => {
  return (
    <div>
      <MemoriesPage />
    </div>
  );
};

export default Page;
