import React from "react";
import PropTypes from "prop-types";


const BiayaKuliah = ({ image }) => {
  return (
    <section id="biaya" className="py-12 bg-gray-50 scroll-mt-20">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="w-full bg-white rounded-xl shadow overflow-hidden mb-8">
        <img
          src="/img/Semester_Satu.png"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      <div className="w-full bg-white rounded-xl shadow overflow-hidden mb-8">
        <img
          src="/img/Semester_Satu.png"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      <div className="w-full bg-white rounded-xl shadow overflow-hidden mb-8">
        <img
          src="/img/Semester_Satu.png"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      <div className="w-full bg-white rounded-xl shadow overflow-hidden mb-8">
        <img
          src="/img/Semester_Satu.png"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      <div className="w-full bg-white rounded-xl shadow overflow-hidden mb-8">
        <img
          src="/img/Semester_Satu.png"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      <div className="w-full bg-white rounded-xl shadow overflow-hidden mb-8">
        <img
          src="/img/Semester_Satu.png"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      <div className="w-full bg-white rounded-xl shadow overflow-hidden mb-8">
        <img
          src="/img/Semester_Satu.png"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      <div className="w-full bg-white rounded-xl shadow overflow-hidden mb-8">
        <img
          src="/img/Semester_Satu.png"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>
    </div>
  </section>
  
    
  );
};

BiayaKuliah.propTypes = {
  image: PropTypes.string.isRequired,
};

export default BiayaKuliah;
