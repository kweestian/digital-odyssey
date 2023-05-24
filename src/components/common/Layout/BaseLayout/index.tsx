import { Poppins } from '@next/font/google';
import Header from '../components/Header';

/**
 *
 * @param
 * @returns just to add teh header
 */
const DefaultLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    {children}
  </>
);

export default DefaultLayout;
