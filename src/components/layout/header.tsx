import { Link } from "react-router-dom";

const LINKS = [
  { url: "/dashboard", text: "Dashboard" },
  { url: "/assessment", text: "Assessment" },
  { url: "/about", text: "About" },
];

function Header() {
  return (
    <>
      <header className="container flex justify-between py-4">
        <Link to={"/"} className="">
          <h1 className="text-2xl font-bold">You Be Fit</h1>
        </Link>

        {/*  */}
        <nav className="flex space-x-4">
          {LINKS.map((link, index) => (
            <Link key={index} to={link.url} className="hover:underline">
              {link.text}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}

export default Header;
