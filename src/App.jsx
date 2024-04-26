import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import FallBack from "./components/fallback/Fallback";
import { router } from "./core/router/router";
import "./App.css";

function App() {
  return (
    <div className="App font-sans">
      <Suspense fallback={<FallBack />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
