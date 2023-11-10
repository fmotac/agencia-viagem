import React from 'react';
import { useUser } from '../context/userContext';

export async function getServerSideProps() {
  // Simulação de busca de destinos no servidor
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await response.json();

  return {
    props: {
      destinos: data,
    },
  };
}

export default function Destinos({ destinos }) {
  const { user } = useUser();
  return (
    <div>
      <h1>Destinos </h1>
      <p>Olá, {user}!</p>
      <ul>
        {destinos.map((destino) => (
          <li 
          key={destino.id}>
            {destino.title} <hr/>
          <img src={destino.thumbnailUrl}/>
          
          </li>
        ))}
      </ul>
    </div>
  );
}