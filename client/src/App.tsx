import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth";
import ErrorPage from "./pages/ErrorPage";
import Main from "./pages/Main";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Auth />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
