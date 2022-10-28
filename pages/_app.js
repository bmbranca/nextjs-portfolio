import "../styles/globals.css";
import { IntercomProvider } from "react-use-intercom";

const INTERCOM_APP_ID = "opso6xil";

function MyApp({ Component, pageProps }) {
  return (
    <IntercomProvider appId={INTERCOM_APP_ID}>
      <Component {...pageProps} />
    </IntercomProvider>
  );
}

export default MyApp;
