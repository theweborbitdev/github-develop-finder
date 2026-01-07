import { useState } from "react";

function GithubDevFinder() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchUser = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">GitHub Developer Finder</h1>
        
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 mb-8">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter GitHub username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={fetchUser}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
            >
              Search
            </button>
          </div>
        </div>

        {userData && (
          <div className="bg-gray-800 rounded-lg shadow-xl p-8">
            <div className="flex items-center gap-6 mb-6">
              <img 
                src={userData.avatar_url} 
                alt={userData.login} 
                className="w-24 h-24 rounded-full border-4 border-blue-600"
              />
              <div>
                <h2 className="text-3xl font-bold text-white">{userData.login}</h2>
                {userData.name && <p className="text-gray-300 text-lg">{userData.name}</p>}
              </div>
            </div>
            
            {userData.bio && <p className="text-gray-300 mb-4">{userData.bio}</p>}
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <p className="text-gray-400 text-sm">Followers</p>
                <p className="text-2xl font-bold text-blue-400">{userData.followers}</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <p className="text-gray-400 text-sm">Following</p>
                <p className="text-2xl font-bold text-blue-400">{userData.following}</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <p className="text-gray-400 text-sm">Repos</p>
                <p className="text-2xl font-bold text-blue-400">{userData.public_repos}</p>
              </div>
            </div>

            {userData.location && (
              <p className="text-gray-300 mt-4">
                <span className="font-semibold">Location:</span> {userData.location}
              </p>
            )}
            {userData.company && (
              <p className="text-gray-300">
                <span className="font-semibold">Company:</span> {userData.company}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default GithubDevFinder;
