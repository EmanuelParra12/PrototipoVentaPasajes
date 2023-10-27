import React from 'react';
import '../styles/Header.css';
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">ÓMNIBUS</a></li>{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <li><a href="#">TRANSFERS</a></li>{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <li><a href="#">CIRCUITOS Y TRASLADOS</a></li>{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <li><a href="#">VIAJES ESPECIALES</a></li>{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;