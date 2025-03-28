import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch: React.FC = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [candidates, setCandidates] = useState<string[]>([]);

  useEffect(() => {
    fetchNextCandidate();
  }, []);

  const fetchNextCandidate = async () => {
    try {
      const users = await searchGithub();
      if (users.length > 0) {
        const username = users[0].login;
        const userDetails = await searchGithubUser(username);
        setCurrentCandidate(userDetails);
      }
    } catch (error) {
      console.error('Error fetching candidate:', error);
    }
  };

  const saveCandidateToLocalStorage = (candidate: Candidate) => {
    const savedCandidates = JSON.parse(localStorage.getItem('potentialCandidates') || '[]');
    const updatedCandidates = [...savedCandidates, candidate];
    localStorage.setItem('potentialCandidates', JSON.stringify(updatedCandidates));
    setCandidates(updatedCandidates.map(c => c.login));
  };

  const handleAcceptCandidate = () => {
    if (currentCandidate) {
      saveCandidateToLocalStorage(currentCandidate);
      fetchNextCandidate();
    }
  };

  const handleRejectCandidate = () => {
    fetchNextCandidate();
  };

  if (!currentCandidate) {
    return <div>Loading...</div>;
  }

  return (
    <div className="candidate-search" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Candidate Search</h1>
      {currentCandidate ? (
        <div className="candidate-card" style={{ 
          backgroundColor: '#1a1a1a', 
          borderRadius: '10px', 
          padding: '20px', 
          maxWidth: '400px', 
          margin: '0 auto' 
        }}>
          <img 
            src={currentCandidate.avatar_url} 
            alt={`${currentCandidate.name}'s avatar`} 
            style={{ 
              width: '200px', 
              height: '200px', 
              borderRadius: '50%', 
              objectFit: 'cover' 
            }}
          />
          <h2>{currentCandidate.name || currentCandidate.login}</h2>
          <p>Username: {currentCandidate.login}</p>
          <p>Location: {currentCandidate.location || 'Not specified'}</p>
          <p>Email: {currentCandidate.email || 'Not public'}</p>
          <p>Company: {currentCandidate.company || 'Not specified'}</p>
          <a 
            href={currentCandidate.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#646cff', textDecoration: 'none' }}
          >
            GitHub Profile
          </a>
          <div style={{ marginTop: '20px' }}>
            <button 
              onClick={handleAcceptCandidate} 
              style={{ 
                backgroundColor: 'green', 
                color: 'white', 
                margin: '0 10px' 
              }}
            >
              <FaPlus /> Accept
            </button>
            <button 
              onClick={handleRejectCandidate}
              style={{ 
                backgroundColor: 'red', 
                color: 'white', 
                margin: '0 10px' 
              }}
            >
              <FaMinus /> Reject
            </button>
          </div>
        </div>
      ) : (
        <p>No more candidates available</p>
      )}
    </div>
  );
};

export default CandidateSearch;