import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div style={{backgroundColor:'black', color:'white'}}>
      <Link href="/">Home</Link>
      <Link href="/destino">Destinos</Link>
      <Link href="/quem-somos">Quem Somos</Link>
      <Link href="/cadastro">Cadastro de Clientes</Link>
    </div>
  );
}
