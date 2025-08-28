import React from "react";
import Layout from "../components/Layout";
import BiayaKuliah from "../components/biayakuliah";

const BiayaPage = () => {
  const images = [
    "/img/contohh.jpg",
    "/img/contohh.jpg",
    "/img/contohh.jpg",
    "/img/contohh.jpg",
    "/img/contohh.jpg",
    "/img/contohh.jpg",
    "/img/contohh.jpg",
    "/img/contohh.jpg",
  ];

  return (
    <Layout>
      <BiayaKuliah images={images} />
    </Layout>
  );
};

export default BiayaPage;
