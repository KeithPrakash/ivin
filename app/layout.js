import { Poppins } from 'next/font/google'
import "./globals.css";
import Footer from './components/Footer';


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
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      > 
        {children}
        <Footer/>
      </body>
    </html>
  );
}
