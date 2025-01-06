import React, { useEffect, useState } from 'react';
import { IoOpenOutline } from 'react-icons/io5';

const LatestCommits = ({ username }) => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos`,
          {
            headers: {
              "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            }
          }
        );
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch repositories.');
        }
        const repos = await reposResponse.json();

        // Fetch commits for each repository
        const commitsPromises = repos.map((repo) =>
          fetch(
            `https://api.github.com/repos/${username}/${repo.name}/commits`,
            {
              headers: {
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
              }
            }
          )
            .then((res) => (res.ok ? res.json() : []))
            .then((commits) =>
              commits
                .filter((commit) => !commit.commit.message.toLowerCase().includes("readme"))
                .filter((commit) => !commit.commit.message.toLowerCase().includes("first"))
                .map((commit) => ({
                  repo: repo.name, // Fix: Ensure `repo.name` is passed here
                  message: commit.commit.message,
                  author: commit.commit.author.name,
                  date: commit.commit.author.date,
                  url: commit.html_url,
                }))
            )
        );

        const allCommits = await Promise.all(commitsPromises);

        // Flatten and sort commits
        const formattedCommits = allCommits.flat().sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        setCommits(formattedCommits.slice(0, 10)); // Limit to 10 commits
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCommits();
  }, [username]);

  if (loading) return <p>Chargement des commits...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div className="p-4 bg-base-200 pb-40">
      <h2 className='p-10 md:p-20 font-kadwa text-[50px] font-medium'>Derniers commits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 max-w-[800px] mx-auto p-4">
        {commits.map((commit, index) => (
          <div key={index} className="card bg-base-100 shadow-md">
            <div className="card-body p-4 relative">
              <h2 className="card-title text-sm font-semibold capitalize">
                {commit.message}
              </h2>
              <p className="text-xs sm:text-xs md:text-sm text-gray-500">
                Repository: {commit.repo}
              </p>
              <p className="text-xs sm:text-xs md:text-sm text-gray-500">
                {new Date(commit.date).toLocaleString()}
              </p>
              <div className="card-actions justify-end mt-4 absolute right-2 bottom-2">
                <a
                  href={commit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline text-xs"
                >
                  <IoOpenOutline />
                  Voir le commit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default LatestCommits;
