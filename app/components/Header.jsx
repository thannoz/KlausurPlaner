import Link from 'next/link';
import { UserButton, auth } from '@clerk/nextjs';

const Header = () => {
  const { userId } = auth();
  //console.log(userId);

  return (
    <nav className='flex items-center justify-between px-6 py-4 mb-5 bg-orange-300'>
      <div className='flex items-center'>
        <Link href='/'>
          <div className='text-lg font-bold text-blue-700'>
            myExams
          </div>
        </Link>
      </div>
      <div className='flex items-center text-white'>
        {!userId && (
          <>
            <Link href='sign-in' className='text-blue-700 hover:text-white mr-8'>
              Sign In
            </Link>
            <Link href='sign-up' className='text-blue-700 hover:text-white mr-10'>
              Sign Up
            </Link>
          </>
        )}
        {userId && (
          <Link href="dashboard" className='text-blue-700 hover:text-white mr-8'>
            Dashboard
          </Link>
        )}
        {userId && (
          <Link href='profile' className='text-blue-700 hover:text-white mr-10'>
            Profile
          </Link>
        )}
        <div className='ml-auto'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </nav>
  );
};

export default Header;
