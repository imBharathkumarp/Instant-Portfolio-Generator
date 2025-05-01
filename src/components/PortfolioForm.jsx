import React, { useState } from 'react';
import ProjectInput from './ProjectInput';

const PortfolioForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    about: '',
    skills: '',
    github: '',
    linkedin: '',
    projects: [{ title: '', link: '', description: '' }],
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...formData.projects];
    newProjects[index][field] = value;
    setFormData({ ...formData, projects: newProjects });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { title: '', link: '', description: '' }],
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, profileImage });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-xl shadow-md">
      <div className="grid md:grid-cols-2 gap-4">
        <input name="name" placeholder="Your Name" onChange={handleChange} required
          className="px-3 py-2 border rounded-md w-full" />
        <input name="role" placeholder="Your Role" onChange={handleChange} required
          className="px-3 py-2 border rounded-md w-full" />
      </div>

      <textarea name="about" placeholder="Tell us about yourself..." rows="3"
        onChange={handleChange} required
        className="px-3 py-2 border rounded-md w-full" />

      <input name="skills" placeholder="Skills (comma separated)" onChange={handleChange}
        className="px-3 py-2 border rounded-md w-full" />

      <div className="grid md:grid-cols-2 gap-4">
        <input name="github" placeholder="GitHub URL" onChange={handleChange}
          className="px-3 py-2 border rounded-md w-full" />
        <input name="linkedin" placeholder="LinkedIn URL" onChange={handleChange}
          className="px-3 py-2 border rounded-md w-full" />
      </div>

      <div>
        <label className="block mb-2">Upload Profile Picture</label>
        <input type="file" accept="image/*" onChange={handleImageUpload}
          className="block w-full text-sm" />
        {profileImage && <img src={profileImage} alt="preview"
          className="mt-2 w-20 h-20 rounded-full object-cover border" />}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Projects</h3>
        {formData.projects.map((proj, i) => (
          <ProjectInput
            key={i}
            index={i}
            project={proj}
            onChange={handleProjectChange}
          />
        ))}
        <button type="button" onClick={addProject}
          className="mt-3 px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
          + Add Project
        </button>
      </div>

      <div className="text-center">
        <button type="submit"
          className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          Generate Portfolio
        </button>
      </div>
    </form>
  );
};

export default PortfolioForm;
