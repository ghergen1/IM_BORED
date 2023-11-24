import { useEffect, useState } from 'react';

const TextCycler = () => {
  const texts = [
    'Explore the underwater world of the John Pennekamp Coral Reef State Park snorkeling.',
    'Take a thrilling white water rafting tour down the Niagara River.',
    'Explore the trails and wildlife of the Patuxent Research Refuge.',
    'Embark on a scenic hot air balloon ride over Napa Valley.',
    'Discover the ancient ruins of Machu Picchu on a guided hiking tour.',
    'Experience the breathtaking views from the top of the Eiffel Tower in Paris.',
    'Go on a safari adventure to witness the incredible wildlife in the Serengeti National Park.',
    'Sail through the stunning fjords of Norway on a picturesque cruise.',
    'Hike the iconic Inca Trail to reach the historic city of Cusco.',
    'Take a helicopter tour over the Grand Canyon for a unique perspective.',
    'Visit the vibrant markets and temples of Bangkok on a cultural exploration.',
    'Witness the beauty of the Northern Lights in Lapland, Finland.',
    'Explore the diverse ecosystems of the Galápagos Islands on a guided expedition.',
    'Go on a zip-lining adventure through the lush rainforests of Costa Rica.',
    'Take a scenic drive along the Amalfi Coast to enjoy stunning coastal views.',
    'Discover the rich history of Rome through a guided tour of ancient landmarks.',
    'Experience the traditional tea ceremonies in Kyoto, Japan.',
    'Go on a dog sledding adventure in the snowy landscapes of Alaska.',
    'Explore the vibrant street art scene in Berlin, Germany.',
    'Take a wine-tasting tour through the vineyards of Tuscany, Italy.',
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
