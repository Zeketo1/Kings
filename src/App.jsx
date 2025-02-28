import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import Loading from "./pages/Loading";
import CustomCursor from "./common/CustomCursor";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      {isLoading ? (
        <Loading />
      ) : (
        <RouterProvider router={AppRouter} />
      )}
    </>
  );
};

export default App;