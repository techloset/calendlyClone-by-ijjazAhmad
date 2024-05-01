import React from "react";
import Table from "@/(components)/table/Table";
import DefaultLayout from "@/(components)/layouts/DefaultLayout";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/constants/authProvider";
export const metadata: Metadata = {
  title: "Calendly Scheduled Events",
  description: "The all Scheduled Events Here",
};
export default async function ScheduledEvents() {
  const session = await getServerSession(authOptions);
  const id = session?.user.id;

  return (
    <DefaultLayout>
      <h1 className="font-bold text-[25px]">Scheduled Events</h1>
      <Table name={"Add Event"} path={`schedulemeeting/${id}`} />
    </DefaultLayout>
  );
}
