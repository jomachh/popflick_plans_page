import { AppLayout } from "../containers/AppLayout";
import "../styles/globals.sass";

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
