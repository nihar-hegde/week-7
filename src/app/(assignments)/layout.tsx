import React from "react";

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </div>
    </div>
  );
};

export default Layout;
