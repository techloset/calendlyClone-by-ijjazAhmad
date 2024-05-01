import { Metadata } from "next";
import DefaultLayout from "@/(components)/layouts/DefaultLayout";
import { getServerSession } from "next-auth";
import { authOptions } from "@/constants/authProvider";
import CopyLink from "@/(components)/copyLink/CopyLink";

export const metadata: Metadata = {
  title: "Calendly Dashboard",
  description: "This is meeting schedule app",
};
export default async function Home() {
  const session = await getServerSession(authOptions);
  const id = session?.user.id;

  return (
    <>
      <DefaultLayout>
        <h1 className="font-bold text-[25px]">Home</h1>
        <div className="px-[33px] mb-[33px] py-[33px] border  border-t-12 shadow-2 border-primary rounded-md w-[95%] sm:w-[440px]">
          <p className="">Share your meeting Link</p>
          <CopyLink link={`http://localhost:3000/schedulemeeting/${id}`} />
        </div>
      </DefaultLayout>
    </>
  );
}