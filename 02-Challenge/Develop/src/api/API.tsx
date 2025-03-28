import { Candidate } from '../interfaces/Candidate.interface';

const searchGithub = async (): Promise<{login: string}[]> => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Invalid API response');
    }

    return await response.json();
  } catch (err) {
    console.error('GitHub search error:', err);
    return [];
  }
};

const searchGithubUser = async (username: string): Promise<Candidate> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Invalid user search response');
    }

    return await response.json();
  } catch (err) {
    console.error('GitHub user search error:', err);
    throw err;
  }
};

export { searchGithub, searchGithubUser };