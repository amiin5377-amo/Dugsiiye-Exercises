import {useState, useEffect} from 'react';

const GithubSearchUser = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
        console.error(error, "error fetching user data");
    }
  }, [error])

    const handleSearch = async () => {
   if (!searchTerm) return;
   setUser(null);
   setLoading(true);
   setError("");

    try {
      const response = await fetch(`https://api.github.com/users/${searchTerm}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const userData = await response.json();
      setUser(userData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
   
  };
   

  return (
    <div>
      
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button onClick={handleSearch}>Search</button>
    

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {user && (
        <div>
          <img src={user.avatar_url} alt={user.name} width="100" style={{ borderRadius: '50%' }}  />
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
          <p>Public Repositories: {user.public_repos}</p>
        </div>
      )}
    </div>
  );

   
    }
export default GithubSearchUser;