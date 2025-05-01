import { useState } from 'react';
import PortfolioForm from '../components/PortfolioForm';
import PortfolioPreview from '../components/PortfolioPreview';

export default function Home() {
  const [formData, setFormData] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Instant Portfolio Generator</h1>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <PortfolioForm onSubmit={setFormData} />
        <PortfolioPreview data={formData} />
      </div>
    </div>
  );
}
