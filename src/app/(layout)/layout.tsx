import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { memo, ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
};

export default memo(Layout);
