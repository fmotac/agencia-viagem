import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { useUser } from '../context/userContext';

export default function Home() {
  const { user, setUser } = useUser();

  return (
    <div className={styles.container}>
      <h1>Agência de Viagens</h1>
      {user ? (
        <p>Olá, {user}!</p>
      ) : (
        <p>Faça login para uma experiência personalizada.</p>
      )}
      <button onClick={() => setUser('Flavio Mota')}>Login</button>
    </div>
  );
}
