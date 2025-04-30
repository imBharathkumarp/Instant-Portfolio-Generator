import React, { useState } from 'react';

const PortfolioForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    about: '',
    skills: '',
    github: '',
    linkedin: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow rounded">
      <input name="name" placeholder="Your Name" onChange={handleChange} className="input" />
      <input name="role" placeholder="Your Role" onChange={handleChange} className="input" />
      <textarea name="about" placeholder="About You" onChange={handleChange} className="input" />
      <input name="skills" placeholder="Skills (comma separated)" onChange={handleChange} className="input" />
      <input name="github" placeholder="GitHub URL" onChange={handleChange} className="input" />
      <input name="linkedin" placeholder="LinkedIn URL" onChange={handleChange} className="input" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Generate</button>
    </form>
  );
};

export default PortfolioForm;
