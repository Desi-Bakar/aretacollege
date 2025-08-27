import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/social/facebook.svg";
import facebook from "../img/social/facebookk.png";
import instagram from "../img/social/instagram.png";
import tiktok from "../img/social/tiktokkk.png"; // ✅ Sudah benar di-import
import vimeo from "../img/social/youtube.png";

const Footer = () => {
  return (
<footer className="bg-blue-950 text-center text-neutral-300 dark:bg-blue-950 dark:text-neutral-200 lg:text-left">
  <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
    <div className="mr-12 hidden lg:block">

          <span>Dapatkan koneksi dengan kami di jaringan sosial:</span>
        </div>

        <div className="flex justify-center">
          <a href={"https://www.facebook.com/AretaCollege/"} target="_blank" rel="noopener noreferrer" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <img src={facebook} alt="Facebook" className="h-6 w-6" />
          </a>
          <a href={"https://www.instagram.com/areta_informaticscollege/"} target="_blank" rel="noopener noreferrer" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <img src={instagram} alt="Instagram" className="h-6 w-6" />
          </a>
          <a href={"https://www.tiktok.com/@areta_informaticscollege"} target="_blank" rel="noopener noreferrer" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <img src={tiktok} alt="TikTok" className="h-6 w-6" /> {/* ✅ Diubah dari twitter */}
          </a>
          <a href={"http://www.youtube.com/@aretainformaticscollege6107"} target="_blank" rel="noopener noreferrer" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <img src={vimeo} alt="Vimeo" className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        {/* ...bagian lain footer tetap... */}
      </div>
 
      <div className="mx-6 py-10 text-center md:text-left">
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {/* Kiri */}
    <div>
      <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-4 w-4"
        >
          <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
        </svg>
        Areta Informatics College
      </h6>
      <p>
        Metode belajar dengan 90% Praktek 10% Teori terbukti menghantarkan mahasiswa/i kami dapat bersaing di dunia kerja dan bisnis baik dibidang IT maupun dibidang Digital Marketing.
      </p>
    </div>

    {/* Tengah */}
    <div>
      <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
        Programs
      </h6>
      <p className="mb-4">
        <a href="#!" className="text-neutral-600 dark:text-neutral-200">Teknik Informatika</a>
      </p>
      <p className="mb-4">
        <a href="#!" className="text-neutral-600 dark:text-neutral-200">Sistem Informasi</a>
      </p>
      <p className="mb-4">
        <a href="#!" className="text-neutral-600 dark:text-neutral-200">Bisnis Digital</a>
      </p>
      <p>
        <a href="#!" className="text-neutral-600 dark:text-neutral-200">Training</a>
      </p>
    </div>

    {/* Kanan */}
    <div>
      <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
        Contact
      </h6>

      <p className="mb-4 flex justify-center md:justify-start">
        <a
          href="https://www.google.com/maps/place/Areta+Informatics+College/@-6.2539912,106.5937312,17z"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/maps.png"
            alt="Lokasi Areta College"
            className="rounded-lg shadow-lg w-48 hover:scale-105 transition-transform duration-300"
          />
        </a>
      </p>

      <p className="mb-4 flex items-center justify-center md:justify-start">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
        admin@aretacollege.com
      </p>

      <p className="mb-4 flex items-center justify-center md:justify-start">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5">
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clipRule="evenodd"
          />
        </svg>
        +62 852 1950 7377
      </p>
    </div>
  </div>
</div>


 
  <div className="bg-neutral-300 p-6 text-center text-black">
    <span>© 2025 Copyright: </span>
    <a
      className="font-semibold text-neutral-600 text-blue-950"
      href="https://aretacollege.com/"
      >Areta Informatics College</a
    >
  </div>
</footer>
    );
};

export default Footer;