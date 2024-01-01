// App.js

import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import './index.css';
const App = () => {
  const [formData, setFormData] = useState(/* your initial data */);

  return (
    <div>
      <ResumeForm />
      <ResumePreview formData={formData} />
    </div>
  );
};

export default App;
