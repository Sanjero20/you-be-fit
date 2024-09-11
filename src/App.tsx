import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import MainLayout from "./components/layout/main-layout";

// Pages
import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";
import AboutPage from "./pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
