import { Poppins } from 'next/font/google'
import "./globals.css";
import Footer from './components/Footer';


const poppins= Poppins({

  subsets: ['latin'],
  weight:['400']
})
 
export const metadata = {
  title: "home page",
  description: "Work visa agency",
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
