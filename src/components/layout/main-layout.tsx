import { Outlet } from "react-router";

import Header from "./header";
import Footer from "./footer";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />
      <main className="container flex h-full w-full flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
