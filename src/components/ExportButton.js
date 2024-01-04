// ExportButton.js

import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ExportButton = ({ resumeData, dataLoaded }) => {
  const handleExport = () => {
    if (!dataLoaded) {
      alert('Data is still loading. Please wait.');
      return;
    }

    const element = document.getElementById("ResumePreview");

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0, 150, 180); // Adjust width and height as needed
      pdf.save("resume.pdf");
    });
  };

  return (
    <button
      onClick={handleExport}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
    >
      Export to PDF
    </button>
  );
};

export default ExportButton;
