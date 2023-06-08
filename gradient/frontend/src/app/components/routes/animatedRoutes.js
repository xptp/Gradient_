import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../page/homePage";
import ActorsPage from "../page/actorsPage";
import OneActorPage from "../page/oneActorPage/oneActorPage";
import ActressPage from "../page/actressPage";
import ContactsPage from "../page/contactsPage";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<HomePage />} />
        <Route path="actors" element={<ActorsPage />} />
        <Route path="actor/:id" element={<OneActorPage />} />
        <Route path="actress" element={<ActressPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
