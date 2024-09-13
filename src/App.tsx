import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import MainLayout from "./components/layout/main-layout";

// Pages
import HomePage from "@/pages/home";
import DashboardPage from "@/pages/dashboard";
import AssessmentPage from "@/pages/assessment";
import AboutPage from "@/pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/assessment", element: <AssessmentPage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
