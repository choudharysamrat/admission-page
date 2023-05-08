import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import '../styles/globals.css';


export default function App({ Component, pageProps }) {
    return (
        <>
        <Header/>
        <Hero/>
        <div className='container minh'>
        <Component {...pageProps} />
        </div>
        <Footer/>
        </>
    )
}