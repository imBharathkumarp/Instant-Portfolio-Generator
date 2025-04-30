import React, { useState } from 'react';
import PortfolioForm from './components/PortfolioForm';
import PortfolioPreview from './components/PortfolioPreview';

const App = () => {
  const [portfolioData, setPortfolioData] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Instant Portfolio Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PortfolioForm onSubmit={setPortfolioData} />
        <PortfolioPreview data={portfolioData} />
      </div>
    </div>
  );
};

export default App;
