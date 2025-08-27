import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import logo from "../img/Logo_Baru.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setIsProgramsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setIsProgramsOpen(false), 300);
    setCloseTimeout(timeout);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (isProgramsOpen && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsProgramsOpen(false);
      }
    }

    function handleEsc(e) {
      if (e.key === "Escape" && isProgramsOpen) {
        setIsProgramsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isProgramsOpen]);

  const openOnHover = (open) => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      setIsProgramsOpen(open);
    }
  };

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Areta">
              <img src={logo} alt="Kampus Full Praktik" style={{ width: "150px" }} />
            </Link>
            <a
              role="button"
              className={`navbar-burger ${isActive ? "is-active" : ""}`}
              aria-label="menu"
              aria-expanded={isActive}
              onClick={() => setIsActive(!isActive)}
            >
              <span></span><span></span><span></span>
            </a>
          </div>

          <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item nav-link" to="/about" onClick={() => setIsActive(false)}>About</Link>

              <div
                className="navbar-item nav-has-dropdown"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="nav-trigger"
                  aria-haspopup="true"
                  aria-expanded={isProgramsOpen}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsProgramsOpen((v) => !v);
                  }}
                  onFocus={() => openOnHover(true)}
                >
                  Programs ▾
                </button>
                <div className={`nav-dropdown ${isProgramsOpen ? "open" : ""}`}>
                  <Link className="navbar-item nav-dd-item" to="/products#ti" onClick={() => { setIsProgramsOpen(false); setIsActive(false); }}>Teknik Informatika</Link>
                  <Link className="navbar-item nav-dd-item" to="/products#si" onClick={() => { setIsProgramsOpen(false); setIsActive(false); }}>Sistem Informasi</Link>
                  <Link className="navbar-item nav-dd-item" to="/products#bd" onClick={() => { setIsProgramsOpen(false); setIsActive(false); }}>Bisnis Digital</Link>
                </div>
              </div>

              {/* Ganti tombol Biaya Kuliah menjadi anchor link */}
              <Link className="navbar-item nav-link" to="/biaya/" onClick={() => setIsActive(false)}>Biaya Kuliah</Link>

              <Link className="navbar-item nav-link" to="/blog" onClick={() => setIsActive(false)}>Blog</Link>
              <Link className="navbar-item nav-link" to="/contact" onClick={() => setIsActive(false)}>Contact</Link>
              <a
                href="https://pmb.aretacollege.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-item nav-link"
                onClick={() => setIsActive(false)}
              >
                Registration
              </a>
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        .navbar { background: #0F1E4A; padding: 0.5rem 1rem; z-index: 10; }
        .nav-link, .nav-trigger, .navbar-burger {
          color: #fff !important; background: none !important; border: none !important;
          transition: color .25s ease, transform .15s ease; cursor: pointer;
        }
        .nav-link:hover, .nav-trigger:hover { color: #ffcc00 !important; transform: translateY(-1px); }
        .nav-has-dropdown { position: relative; }
        .nav-trigger { padding: 0.5rem 0.75rem; border-radius: 8px; }
        .nav-dropdown {
          position: absolute; top: calc(100% + 8px); left: 0; min-width: 220px; background: #0f1e4a;
          border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.25); transform-origin: top;
          transform: scaleY(0.9) translateY(-6px); opacity: 0; pointer-events: none;
          transition: transform .22s ease, opacity .22s ease;
        }
        .nav-dropdown.open { transform: scaleY(1) translateY(0); opacity: 1; pointer-events: auto; }
        .nav-dd-item {
          padding: 12px 18px;
          background: #ffcc00 !important;
          color: #0f1e4a !important;
          font-weight: bold;
          transition: background 0.2s ease, padding-left 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
        .nav-dd-item:hover {
          background: #e6b800 !important;
          padding-left: 26px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .nav-dd-item:first-child { border-radius: 12px 12px 0 0; }
        .nav-dd-item:last-child { border-radius: 0 0 12px 12px; }

        @media (max-width: 1023px) {
          .nav-has-dropdown { width: 100%; }
          .nav-dropdown {
            position: static; transform: none; opacity: 1; pointer-events: auto;
            box-shadow: none; border-radius: 10px; margin-top: 6px; background: #10255f;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
