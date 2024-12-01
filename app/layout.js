import { Poppins } from 'next/font/google'
import "./globals.css";
import Footer from './components/Footer';
import Nav from './components/Nav';



const poppins= Poppins({

  subsets: ['latin'],
  weight:['400']
})
 

export const metadata = {
  title: 'Ivin Consultancy | Work Visa Assistance',
  description: 'Ivin Consultancy specializes in helping individuals secure work visas for opportunities abroad. Trusted experts in international career support.',
  icons: {
    icon: '/logoivin.png', 
  },
  openGraph: {
    title: 'Ivin Consultancy | Work Visa Experts',
    description: 'Expert guidance on securing work visas for international job opportunities.',
    url: 'https://ivinconsultancy.com',
    images: [
      {
        url: '/logoivin.png', 
        width: 800,
        height: 600,
        alt: 'Ivin Consultancy Logo',
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}+ relative`}
>    

      <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
