import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage/HomePage";
import CoreLayout from "./components/layouts/CoreLayout/CoreLayout";
import CoreErrorPage from "./pages/Error/CoreErrorPage";
import ThemeProvider from "./store/ThemeProvider";
import AuthProvider from "./store/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard";
import Protected from "./components/Auth/Protected/Protected";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { queryClient } from "./query/queryClient";
import Urls from "./pages/Urls/Urls";
import UrlsPageLayout from "./components/layouts/UrlsPageLayout/UrlsPageLayout";
import UrlDetailsPage from "./pages/UrlDetailsPage/UrlDetailsPage";
import UrlsLoaderProvider from "./store/UrlsLoaderProvided";

const router = createBrowserRouter([
  {path: '/', element: <CoreLayout />, children: [
    {path: '', element: <HomePage />},
    {path: 'dashboard', element: <Protected><Dashboard /></Protected>},
    {path: 'urls', element: <Protected><UrlsPageLayout /></Protected>, children: [
      {index: true, element: <Urls/>},
      {path: ':urlId', element: <UrlDetailsPage />}
    ]},
    {path: 'login', element: <Login />},
    {path: 'signup', element: <Signup />},
  ], errorElement: <CoreErrorPage />}
])

const App: React.FC = () => {

  return <>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UrlsLoaderProvider>
          <RouterProvider router={router} />
        </UrlsLoaderProvider>
      </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </>
}

export default App
