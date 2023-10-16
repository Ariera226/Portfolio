import { UserButton, auth } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const { userId } = auth();

  return (
    <>
      <nav className="bg-gray-400 py-4 px-4">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-white hover:text-black mr-4 bold">
                92213134 최중건 포트폴리오
              </div>
            </Link>
          </div>

          <div className="flex items-center font-bold">
            {!userId ? (
              <>
                <Link
                  href="/sign-in"
                  className="text-gray-200 hover:text-black mr-4"
                >
                  로그인
                </Link>
                <Link
                  href="/sign-up"
                  className="text-gray-200 hover:text-black mr-4"
                >
                  회원가입
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/courses"
                  className="text-gray-200 hover:text-black mr-4"
                >
                  소셜 계정들
                </Link>
                <Link
                  href="/profile"
                  className="text-gray-200 hover:text-black mr-4"
                >
                  프로필
                </Link>
                <div className="ml-auto">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
