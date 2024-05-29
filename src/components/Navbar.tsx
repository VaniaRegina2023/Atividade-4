// src/components/Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importe o arquivo CSS

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/contact">Contato</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/tasks">Tarefas</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
