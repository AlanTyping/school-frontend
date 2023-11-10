import { Inter } from 'next/font/google';
import './globals.css';
import ReactQueryProvider from '../utils/QueryClientProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'school',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  )
}
