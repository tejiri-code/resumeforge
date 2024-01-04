// Template2.js
import React from 'react';

const Template2 = ({ formData }) => {
  // Template 2 specific layout and styles
  return (
    <div className="template-2">
      <div className="container mx-auto my-8 p-8 shadow-lg rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="mb-4">
          <h2 className="text-4xl font-extrabold mb-2">{formData.name || "Name Not Provided"}</h2>
          <p className="text-gray-200">{formData.email || "Email Not Provided"}</p>
          <p className="text-gray-200">{formData.phone || "Phone Not Provided"}</p>
          <p className="text-gray-200">{formData.address || "Address Not Provided"}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Objective</h3>
          <p className="text-lg">{formData.objective || "Objective Not Provided"}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Skills</h3>
          <p className="text-lg">{formData.skills || "Skills Not Provided"}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Education</h3>
          <ul className="list-disc list-inside text-lg">
            {formData.education.map((edu, index) => (
              <li key={index}>
                {edu.degree || "Degree Not Provided"} in{" "}
                {edu.school || "School Not Provided"} - Graduated{" "}
                {edu.graduationYear || "Year Not Provided"}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Experience</h3>
          <ul className="list-disc list-inside text-lg">
            {formData.experience.map((exp, index) => (
              <li key={index}>
                {exp.jobTitle || "Job Title Not Provided"} at{" "}
                {exp.company || "Company Not Provided"} (
                {exp.startDate || "Start Date Not Provided"} -{" "}
                {exp.endDate || "End Date Not Provided"})
                <p className="text-gray-200">
                  Responsibilities:{" "}
                  {exp.responsibilities || "Responsibilities Not Provided"}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Projects</h3>
          <ul className="list-disc list-inside text-lg">
            {formData.projects.map((project, index) => (
              <li key={index}>
                {project.projectName || "Project Name Not Provided"}
                <p className="text-gray-200">
                  Description:{" "}
                  {project.projectDescription || "Description Not Provided"}
                </p>
                <p className="text-gray-200">Link: {project.projectLink || "Link Not Provided"}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template2;
