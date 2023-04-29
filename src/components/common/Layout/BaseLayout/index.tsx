import { Poppins } from '@next/font/google';
import Header from '../components/Header';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal'],
});

/**
 *
 * @param
 * @returns just to add teh header
 */
const DefaultLayout = ({ children }: { children: React.ReactNode }) => (
  <div className={poppins.className}>
    <Header />
    {children}
  </div>
);

export default DefaultLayout;
