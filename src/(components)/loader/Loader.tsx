import React from "react";
type LoaderProps = {
  height: string;
};
export default function Loader({ height }: LoaderProps) {
  return (
    <div
      className={`absolute  flex justify-center items-center bg-blue-100 opacity-80 ${height} w-screen`}
    >
      <div
        className="w-28 h-28 rounded-full animate-spin border-y-8 border-solid border-primary border-t-transparent shadow-xl">
    </div>
    </div>
  );
}
