"use client";
import React, { useState } from "react";

const OtpPage = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  return (
    <div className="h-screen flex justify-center items-center space-x-2">
      {otp.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <input
              type="number"
              className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl border-gray-400 
              focus:border-gray-700 focus:text-gray-700 text-gray-400 transition spin-button-none
              "
            />
            {index === otp.length - 1 ? null : (
              <span className="w-2 py-0.5 bg-gray-400" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default OtpPage;
