import { useEffect, useState } from 'react';

const TextCycler = () => {
  const texts = [
    'Explore the underwater world of the John Pennekamp Coral Reef State Park with a snorkeling adventure.',
    'Take a thrilling white water rafting tour down the Niagara River and experience the power of the falls up close.',
    'Go for a hike at the Patuxent Research Refuge: Explore the trails and wildlife of the Patuxent Research Refuge.',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div id="text-cycler">
      <h2 className="text-fade-in-out">{texts[currentIndex]}</h2>
    </div>
  );
};

export default TextCycler;
