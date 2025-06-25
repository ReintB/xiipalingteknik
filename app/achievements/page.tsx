import { Metadata } from "next";
import AchievementsPage from "./achievements";

export const metadata: Metadata = {
  title: "Prestasi | XIIPALINGTEKNIK",
};

const Page = () => {
  return (
    <div>
      <AchievementsPage />
    </div>
  );
};

export default Page;
