import { Metadata } from "next";
import TimelinePage from "./timeline";

export const metadata: Metadata = {
  title: "Timeline  | XIIPALINGTEKNIK",
};

const Page = () => {
  return (
    <div>
      <TimelinePage />
    </div>
  );
};

export default Page;
