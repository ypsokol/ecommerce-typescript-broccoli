import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../context/theme/provider";
import { CartProvider } from "../context/cart/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "../context/user/provider";
import { Layout } from "../component/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CartProvider>
        <UserProvider>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default MyApp;
