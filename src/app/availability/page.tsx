import DefaultLayout from "@/(components)/layouts/DefaultLayout";
import AvailabilityTable from "@/(components)/availabilityTable/AvailabilityTable";
import React from "react";

export default function Availability() {
  return (
    <DefaultLayout>
      <h1 className="font-bold text-[25px]">Availabality</h1>
      <AvailabilityTable name={"Add Availability"} path="/setavailability" />
    </DefaultLayout>
  );
}
