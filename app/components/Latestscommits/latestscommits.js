import React, { useEffect, useState } from 'react';

const LatestCommits = ({ username }) => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch repositories.');
        }
        const repos = await reposResponse.json();

        // Fetch commits for each repository
        const commitsPromises = repos.map((repo) =>
          fetch(
            `https://api.github.com/repos/${username}/${repo.name}/commits`
          )
            .then((res) => (res.ok ? res.json() : []))
            .then((commits) =>
              commits.map((commit) => ({
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

  if (loading) return <p>Loading commits...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Latest Commits</h1>
      <ul>
        {commits.map((commit, index) => (
          <li key={index}>
            <strong>{commit.repo}:</strong> {commit.message} <br />
            <em>By {commit.author} on {new Date(commit.date).toLocaleString()}</em> <br />
            <a href={commit.url} target="_blank" rel="noopener noreferrer">
              View Commit
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestCommits;
