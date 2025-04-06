
import Header from './components/Header';

import './globals.css'; 
import 'antd/dist/reset.css';

export const metadata = {
  title: 'Portfolio',
  description: 'My portfolio site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative'> 
       <Header />
        {children}
        </body>
    </html>
  );
}

