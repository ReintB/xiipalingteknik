import { Metadata } from "next";
import GalleryPage from "./gallery";

export const metadata: Metadata = {
  title: "Galeri | XIIPALINGTEKNIK",
};

const Page = () => {
  return (
    <div>
      <GalleryPage />
    </div>
  );
};

export default Page;
