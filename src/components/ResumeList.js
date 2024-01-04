// ResumeList.js

import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

const ResumeList = () => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const snapshot = await db.collection('resumes').get();
        const resumesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setResumes(resumesData);
      } catch (error) {
        console.error('Error fetching resumes', error);
      }
    };

    fetchResumes();
  }, []);

  return (
    <div>
      <h2>Saved Resumes</h2>
      <ul>
        {resumes.map((resume) => (
          <li key={resume.id}>{resume.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeList;
