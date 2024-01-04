// ResumeForm.js

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveResume } from "../actions";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import ResumePreview from "./ResumePreview";
import ExportButton from "./ExportButton";
import { auth } from '../firebase';

const ResumeForm = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    objective: "",
    education: [{ degree: "", school: "", graduationYear: "" }],
    experience: [
      {
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        responsibilities: "",
      },
    ],
    skills: "",
    projects: [{ projectName: "", projectDescription: "", projectLink: "" }],
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...formData.education];
    updatedEducation[index][name] = value;
    setFormData({ ...formData, education: updatedEducation });
  };

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperience = [...formData.experience];
    updatedExperience[index][name] = value;
    setFormData({ ...formData, experience: updatedExperience });
  };

  const handleProjectsChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProjects = [...formData.projects];
    updatedProjects[index][name] = value;
    setFormData({ ...formData, projects: updatedProjects });
  };

  const handleAddEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        { degree: "", school: "", graduationYear: "" },
      ],
    });
  };

  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        {
          jobTitle: "",
          company: "",
          startDate: "",
          endDate: "",
          responsibilities: "",
        },
      ],
    });
  };

  const handleAddProject = () => {
    setFormData({
      ...formData,
      projects: [
        ...formData.projects,
        { projectName: "", projectDescription: "", projectLink: "" },
      ],
    });
  };
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    // Check if any value in formData is undefined
    const isDataLoaded = Object.values(formData).every(
      (value) => value !== undefined
    );

    // Update dataLoaded only if all values in formData are defined
    if (isDataLoaded) {
      setDataLoaded(true);
    }
  }, [formData]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission, e.g., save data to state or API
    try {
      // Save resume data to Firestore
      await addDoc(collection(db, "resumes"), formData);

      console.log("Form Data saved to Firestore:", formData);
      alert("Form Data saved successfully!");
    } catch (error) {
      console.error("Error saving data to Firestore:", error.message);
      alert("Error saving data. Please try again.");
    }
    // Save resume data to Redux state
    dispatch(saveResume(formData));
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-100 shadow-lg justify-center items-center min-h-screen">
         <button
            onClick={handleLogout}
            className="group relative w-full mt-4 mb-5 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Log out
          </button>
      <form
        onSubmit={handleSubmit}
        className="container grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center"
      >
        <h2 className="text-3xl font-bold col-span-2">Resume Form</h2>
        <label className="block mb-2 text-gray-700" htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </label>
        <br />

        <label className="block mb-2 text-gray-700" htmlFor="email">
          Email:
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </label>
        <br />

        <label className="block mb-2 text-gray-700">
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </label>
        <br />

        <label className="block mb-2 text-gray-700e">
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </label>
        <br />

        <label className="block mb-2 text-gray-700">
          Objective:
          <textarea
            name="objective"
            value={formData.objective}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </label>
        <br />

        <label className="block mb-2 text-gray-700">
          Skills:
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </label>
        <br />

        <label className="block mb-2 text-gray-700">
          Education:
          {formData.education.map((edu, index) => (
            <div key={index}>
              <input
                type="text"
                name="degree"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(e, index)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                name="school"
                placeholder="School"
                value={edu.school}
                onChange={(e) => handleEducationChange(e, index)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <input
                type="date"
                name="graduationYear"
                placeholder="Graduation Year"
                value={edu.graduationYear}
                onChange={(e) => handleEducationChange(e, index)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddEducation}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Add Education
          </button>
        </label>
        <br />

        <label className="block mb-2 text-gray-700">
          Experience:
          {formData.experience.map((exp, index) => (
            <div key={index}>
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={exp.jobTitle}
                onChange={(e) => handleExperienceChange(e, index)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => handleExperienceChange(e, index)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <input
                type="date"
                name="startDate"
                placeholder="Start Date"
                value={exp.startDate}
                onChange={(e) => handleExperienceChange(e, index)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <input
                type="date"
                name="endDate"
                placeholder="End Date"
                value={exp.endDate}
                onChange={(e) => handleExperienceChange(e, index)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <textarea
                name="responsibilities"
                placeholder="Responsibilities"
                value={exp.responsibilities}
                onChange={(e) => handleExperienceChange(e, index)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddExperience}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Add Experience
          </button>
        </label>
        <br />

        <label className="block mb-2 text-gray-700">
          Projects:
          {formData.projects.map((project, index) => (
            <div key={index}>
              <input
                type="text"
                name="projectName"
                placeholder="Project Name"
                value={project.projectName}
                onChange={(e) => handleProjectsChange(e, index)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <textarea
                name="projectDescription"
                placeholder="Project Description"
                value={project.projectDescription}
                onChange={(e) => handleProjectsChange(e, index)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <input
                type="link"
                name="projectLink"
                placeholder="Project Link"
                value={project.projectLink}
                onChange={(e) => handleProjectsChange(e, index)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddProject}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Add Project
          </button>
        </label>
        <br />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Generate Resume
        </button>
      </form>
      {/* Display the live preview */}
      <ResumePreview formData={formData} />
      <ExportButton resumeData={formData} dataLoaded={dataLoaded} />
    </div>
  );
};

export default ResumeForm;
