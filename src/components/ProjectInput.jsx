import React from 'react';

const ProjectInput = ({ index, project, onChange }) => {
  return (
    <div className="space-y-2 p-4 border rounded-lg bg-gray-50 shadow-sm">
      <input type="text" placeholder="Project Title"
        value={project.title}
        onChange={(e) => onChange(index, 'title', e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
      <input type="text" placeholder="Project Link"
        value={project.link}
        onChange={(e) => onChange(index, 'link', e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
      <textarea placeholder="Project Description"
        value={project.description}
        onChange={(e) => onChange(index, 'description', e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
    </div>
  );
};

export default ProjectInput;
