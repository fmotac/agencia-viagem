import { useUser } from '../context/userContext';

export default function QuemSomos() {
  const { user } = useUser();
    return (

      <div>
        <h1>Quem Somos</h1>
        <p>Olá, {user}!</p>
        <p>Somos uma agência de viagens dedicada a tornar suas viagens inesquecíveis.</p>
      </div>
    );
  }
  