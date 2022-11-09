import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navabar from "../components/navabar";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Navabar />
    <Component {...pageProps} />
  </>
}
