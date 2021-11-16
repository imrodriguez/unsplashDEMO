import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import { API } from '../lib/unsplash';
import { ErrorMessage } from '../components/ErrorMessage';

interface Props extends AppProps {
  user: User;
  error?: boolean;
}

function MyApp({ Component, pageProps, user, error }: Props) {
  if (error) {
    return <ErrorMessage/>
  }

  return <Layout user={user}><Component {...pageProps} /></Layout>
};

MyApp.getInitialProps = async () => {
  try {
    const user = await API.users.get({
      username: 'adam_29063'
    });
    
    if (user.type === 'error') {
      throw new Error;
    }
  
    return { user: user.response };
  } catch(error) {
    return { error: true };
  }
  
};

export default MyApp;
