import React, { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import { FaMinus } from 'react-icons/fa';

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const candidates = JSON.parse(localStorage.getItem('potentialCandidates') || '[]');
    setSavedCandidates(candidates);
  }, []);

  const removeCandidateFromList = (candidateToRemove: Candidate) => {
    const updatedCandidates = savedCandidates.filter(
      candidate => candidate.login !== candidateToRemove.login
    );
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('potentialCandidates', JSON.stringify(updatedCandidates));
  };

  if (savedCandidates.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Potential Candidates</h1>
        <p>No candidates have been accepted yet.</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Potential Candidates</h1>
      <table className="table" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Username</th>
            <th>Location</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {savedCandidates.map((candidate) => (
            <tr key={candidate.login}>
              <td>
                <img 
                  src={candidate.avatar_url} 
                  alt={`${candidate.name}'s avatar`} 
                  style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '50%', 
                    objectFit: 'cover' 
                  }} 
                />
              </td>
              <td>{candidate.name || candidate.login}</td>
              <td>{candidate.login}</td>
              <td>{candidate.location || 'Not specified'}</td>
              <td>{candidate.company || 'Not specified'}</td>
              <td>
                <button 
                  onClick={() => removeCandidateFromList(candidate)}
                  style={{ 
                    backgroundColor: 'red', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px' 
                  }}
                >
                  <FaMinus /> Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedCandidates;