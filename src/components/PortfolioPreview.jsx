import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const PortfolioPreview = ({ data }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${data?.name || 'portfolio'}-preview`,
  });

  if (!data) return <div className="text-gray-400">Fill the form to preview your portfolio...</div>;

  return (
    <div>
      <div ref={componentRef} className="p-6 bg-white shadow-md rounded space-y-4">
        {data.profileImage && (
          <div className="flex justify-center mb-4">
            <img
              src={data.profileImage}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-2 border-indigo-500"
            />
          </div>
        )}

        <h2 className="text-2xl font-bold text-center">{data.name}</h2>
        <h3 className="text-lg text-indigo-600 text-center">{data.role}</h3>
        <p className="mt-2 text-gray-700 text-center">{data.about}</p>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-800">Skills</h4>
          <p>{data.skills}</p>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-800">Projects</h4>
          {data.projects.map((proj, i) => (
            <div key={i} className="mb-4 border p-3 rounded bg-gray-50">
              <p className="font-medium">🔹 {proj.title}</p>
              <p className="text-sm text-gray-700">{proj.description}</p>
              <a
                href={proj.link}
                className="text-blue-600 text-sm underline break-words"
                target="_blank"
                rel="noopener noreferrer"
              >
                {proj.link}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-6">
          <a href={data.github} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={data.linkedin} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={handlePrint}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition shadow"
        >
          📄 Export as PDF
        </button>
      </div>
    </div>
  );
};

export default PortfolioPreview;
