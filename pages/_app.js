import '@/styles/globals.css'

import { UserProvider } from '../context/userContext';
import Navbar from '@/components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Navbar />
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
