import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AppRoutes from "../routes/AppRoutues";
import ConfirmModal from "../components/ConfirmModal";

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <ConfirmModal />
    </>
  );
}

export default Home;
