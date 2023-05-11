import { useAppStore } from '@/hooks/useAppStore';
import '@/styles/globals.css';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const setUser = useAppStore(state=>state.setUser);
  useEffect(()=>{
    if (pageProps.user) {
      setUser(pageProps.user);
    }
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <Toaster position='bottom-center'/>
    </QueryClientProvider>
  );
}
