// ResumePreview.js

import React, { useState } from "react";
import Template1 from "../Templates/Template1.js";
import Template2 from "../Templates/Template2.js";

const ResumePreview = ({ formData }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(1);

  const renderSelectedTemplate = () => {
    switch (selectedTemplate) {
      case 1:
        return <Template1 formData={formData} />;
      case 2:
        return <Template2 formData={formData} />;
      // Add more cases for additional templates

      default:
        return <Template1 formData={formData} />;
    }
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-100 shadow-lg"
    >
      <div className="mb-4">
        {/* Add template selection controls */}
        <label className="block mb-2 text-lg">Choose Template:</label>
        <select
          className="border p-2"
          value={selectedTemplate}
          onChange={(e) => setSelectedTemplate(Number(e.target.value))}
        >
          <option value={1}>Template 1</option>
          <option value={2}>Template 2</option>
          {/* Add more template options as needed */}
        </select>
      </div>
<div id="ResumePreview" className="mb-4">
      {renderSelectedTemplate()}
      </div>
    </div>
  );
};

export default ResumePreview;
