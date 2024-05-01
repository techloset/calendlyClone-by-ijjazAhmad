import React from "react";
import Navigation from "./Navigation";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Navigation
      main={
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-2 2xl:p-8 bg-white-100 min-h-[90vh]">
            {children}
          </div>
        </main>
      }
    />
  );
}
