import { Outlet } from "react-router";
import { Link } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <header className="container flex justify-between py-4">
        <h1 className="text-2xl font-bold">You Be Fit</h1>
        <nav className="flex space-x-4">
          <Link to={"/dashboard"} className="hover:underline">
            Dashboard
          </Link>
          <Link to={"/about"} className="hover:underline">
            About
          </Link>
        </nav>
      </header>

      <main className="container h-full flex-1">
        <Outlet />
      </main>

      <footer className="container py-4 text-center">
        You Be Fit &copy; 2024
      </footer>
    </div>
  );
}

export default MainLayout;
