import Header from '@/components/header';
import Link from 'next/link';

const Homepage = () => {
  return (
    <>
      <Header />
      Root homepage
      <Link href="/sign-in">Sign In</Link>
    </>
  );
};

export default Homepage;
