import React, { useState } from "react";
import { useUser } from "../context/userContext";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useUser();

  const handleCadastro = () => {
    // Lógica para lidar com o cadastro do cliente (enviar para um servidor, por exemplo)
    console.log("Cliente cadastrado:", nome, email);
  };

  return (
    <div>
      <p>Olá, {user}!</p>
      <h1>Cadastro de Clientes</h1>
      <form>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" onClick={handleCadastro}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}
