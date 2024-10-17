// src/app/layout.tsx

import './globals.css';
import Header from './components/Header'; // Import the Header component
import Upper from './components/Upper'; // Import the Header component
import Middle from './components/Middle'; // Import the Header component
import Lower from './components/Lower'; // Import the Header component

export default function RootLayout({ }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='w-full bg-[#ffffff]'>
        <Header />
        <Upper />
        <Middle />
        <Lower />
      </body>
    </html>
  );
}
