import React from "react";
import Layout from "../components/Layout";
import BiayaKuliah from "../components/biayakuliah";

const BiayaPage = () => {
  const images = [
    "/img/1.png",
    "/img/2.png",
    "/img/33.png",
    "/img/44.png",
    "/img/55.png",
    "/img/6.png",
    "/img/7.png",
    "/img/8.png",
  ];

  return (
    <Layout>
      <BiayaKuliah images={images} />
    </Layout>
  );
};

export default BiayaPage;
