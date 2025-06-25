import { Metadata } from "next";
import SiswaPage from "./siswa";

export const metadata: Metadata = {
  title: "Siswa  | XIIPALINGTEKNIK",
};

const Page = () => {
  return (
    <div>
      <SiswaPage />
    </div>
  );
};

export default Page;
