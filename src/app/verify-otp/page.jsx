import Navbar from "@/component/Navbar";
import VeriftyOtp from "@/component/VeriftyOtp";
import React from "react";

export default function page() {
  return (
    <>
      <div>
        <Navbar/>
      </div>

      <div>
        <VeriftyOtp />
      </div>
    </>
  );
}
