import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import Loading from "./pages/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <RouterProvider router={AppRouter} />
      )}
    </>
  );
};

export default App;