import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/global.css';
import HomePage from "./pages/HomePage/HomePage";
import CoreLayout from "./components/layouts/CoreLayout";
import CoreErrorPage from "./pages/Error/CoreErrorPage";

const router = createBrowserRouter([
  {path: '/', element: <CoreLayout />, children: [
    {path: '', element: <HomePage />}
  ], errorElement: <CoreErrorPage />}
])


const App: React.FC = () => {
  return <>
    <RouterProvider router={router} />
  </>
}

export default App
