import React from 'react';
import './Contact.css'; // Importa o arquivo CSS para estilização

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para lidar com o envio do formulário
  };

  return (
    <div className="contact-container"> {/* Adiciona a classe para estilização */}
      <h1>Contato</h1>
      <p>Entre em contato conosco preenchendo o formulário abaixo:</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group"> {/* Adiciona a classe para estilização */}
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="input-group"> {/* Adiciona a classe para estilização */}
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group"> {/* Adiciona a classe para estilização */}
          <label htmlFor="phone">Telefone:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
