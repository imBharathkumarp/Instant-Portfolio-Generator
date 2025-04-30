const PortfolioPreview = ({ data }) => {
    if (!data) return null;
  
    return (
      <div className="p-4 bg-gray-100 rounded shadow">
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <h2 className="text-lg text-blue-600">{data.role}</h2>
        <p className="mt-2">{data.about}</p>
        <p className="mt-2"><strong>Skills:</strong> {data.skills}</p>
        <div className="flex gap-4 mt-2">
          <a href={data.github} className="text-blue-500 underline">GitHub</a>
          <a href={data.linkedin} className="text-blue-500 underline">LinkedIn</a>
        </div>
      </div>
    );
  };
  
  export default PortfolioPreview;
  