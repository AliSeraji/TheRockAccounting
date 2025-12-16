import type { Route } from './+types/home';
import { Link, redirect } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The Rock accounting' },
    { name: 'THE ROCK', content: 'Welcome to The Rock' },
  ];
}

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#FFF]">
      <p className="text-black mb-2.5">
        Welcome to the Rock accounting procedure
      </p>
      <Link to={`/rock`}>
        <button className="flex flex-row h-10 w-48 bg-[blue] text-[16px] rounded-sm text-[white] justify-center items-center hover:cursor-pointer hover:bg-blue-500 ">
          {`Let's see the next page`}
        </button>
      </Link>
    </div>
  );
}
