import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <>
      <h1 className="text-2xl mb-4 font-bold">환영합니다 !</h1>
      안녕하세요, 제 이름은 최중건입니다. 저는 현재 중부대학교 2학년에
      재학중이고, 정보보호학을 전공하고 있습니다. 궁극적인 목표는 실력을 키워
      추후에 프로그램 개발직을 얻는 것입니다.
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://www.joongbu.ac.kr/home/"
          className="text-xl text-red-700 font-bold"
        >
          중부대학교
        </Link>
        <p className="mb-2">
          중부대학교의 메인 사이트입니다. 저에 대해 더 알고싶다면 회원가입 또는
          로그인을, 학교에 대해 알고싶으시면 링크를 확인해주세요.
        </p>
      </div>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fosjr8whhobub1.png"
          className="text-xl text-gray-700 font-bold"
        >
          팀 멤버 소개
        </Link>
        <p className="mb-2">
          절 포함한 이번 프로젝트에 참여하게 된 팀원들입니다.
        </p>
      </div>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2F8o8wk8ymobub1.png"
          className="text-xl text-purple-600 font-bold"
        >
          프로젝트 소개
        </Link>
        <p className="mb-2">
          이번 프로젝트인 쇼핑몰 웹사이트의 간략한 소개입니다.
        </p>
      </div>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2F31vpuzzuobub1.png"
          className="text-xl text-green-900 font-bold"
        >
          웹사이트 세부기능 I
        </Link>
        <p className="mb-2">쇼핑몰 웹사이트 세부 기능 소개의 첫 부분입니다.</p>
      </div>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Finmrddixobub1.png"
          className="text-xl text-cyan-900 font-bold"
        >
          웹사이트 세부기능 II
        </Link>
        <p className="mb-2">
          쇼핑몰 웹사이트 세부 기능 소개의 두번째 부분입니다.
        </p>
      </div>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fsg7azgk1pbub1.png"
          className="text-xl text-yellow-700 font-bold"
        >
          프로젝트 진행 계획
        </Link>
        <p className="mb-2">현재까지 계획한 웹사이트 제작의 진행 계획입니다.</p>
      </div>
    </>
  );
}
