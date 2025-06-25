import { Metadata } from "next";
import ActivitiesPage from "./activities";

export const metadata: Metadata = {
  title: "Kegiatan | XIIPALINGTEKNIK",
};

const Page = () => {
  return (
    <div>
      <ActivitiesPage />
    </div>
  );
};

export default Page;
