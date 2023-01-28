import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";

const Home = lazy(() => import("./pages/home/Home"));

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense
            fallback={
              <div className="h-screen w-full flex justify-center items-center bg-black text-white">
                Loading
              </div>
            }
          >
            <DefaultLayout />
          </Suspense>
        }
      >
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
