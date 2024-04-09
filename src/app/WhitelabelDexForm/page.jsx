"use client";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import FooterUp from "../../components/shared/FooterUp";
import { TripettoForm } from "../../components/shared/TripettoForm";
import React from "react";

export default function WhitelabelDexForm() {
  return (
    <div>
      <Header />
      <div className="container">
        <TripettoForm />
      </div>
      <FooterUp />
      <Footer />
    </div>
  );
}
