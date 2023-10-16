import Link from 'next/link';
import React from 'react';

const username = 'bradtraversy';
async function fetchRepos() {
  const url = `https://api.github.com/users/${username}/repos`;

  const response = await fetch();

  // 3. ISR : Incremental Static Regeneration
  // const response = await fetch(
  //   `https://api.github.com/users/${username}/repos`,
  //   { next: { revalidate: 60 } }
  // )

  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">현재까지의 팀 프로젝트 계획</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} className="bg-gray-100 m-4 p-4 rounded-md">
            <Link
              href={`https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fosjr8whhobub1.png`}
            >
              <h3 className="text-xl font-bold">{repo.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ReposPage;
