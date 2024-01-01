// ResumePreview.js

import React from 'react';

const ResumePreview = ({ formData }) => {
  if (!formData) {
    return <div>Loading...</div>; // or any other loading indicator
  }

  return (
    <div>
      <h2>Resume Preview</h2>

      <h3>{formData.name || 'Name Not Provided'}</h3>
      <p>Email: {formData.email || 'Email Not Provided'}</p>
      <p>Phone: {formData.phone || 'Phone Not Provided'}</p>
      <p>Address: {formData.address || 'Address Not Provided'}</p>

      <h4>Objective</h4>
      <p>{formData.objective || 'Objective Not Provided'}</p>

      <h4>Skills</h4>
      <p>{formData.skills || 'Skills Not Provided'}</p>

      <h4>Education</h4>
      <ul>
        {formData.education.map((edu, index) => (
          <li key={index}>
            {edu.degree || 'Degree Not Provided'} in {edu.school || 'School Not Provided'} - Graduated {edu.graduationYear || 'Year Not Provided'}
          </li>
        ))}
      </ul>

      <h4>Experience</h4>
      <ul>
        {formData.experience.map((exp, index) => (
          <li key={index}>
            {exp.jobTitle || 'Job Title Not Provided'} at {exp.company || 'Company Not Provided'} ({exp.startDate || 'Start Date Not Provided'} - {exp.endDate || 'End Date Not Provided'})
            <p>Responsibilities: {exp.responsibilities || 'Responsibilities Not Provided'}</p>
          </li>
        ))}
      </ul>

      <h4>Projects</h4>
      <ul>
        {formData.projects.map((project, index) => (
          <li key={index}>
            {project.projectName || 'Project Name Not Provided'}
            <p>Description: {project.projectDescription || 'Description Not Provided'}</p>
            <p>Link: {project.projectLink || 'Link Not Provided'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumePreview;
