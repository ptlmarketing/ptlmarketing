import React from "react";

function Users() {
  const cards = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Card Title ${i + 1}`,
    description: `This is a description for card ${i + 1}.`,
    image: `https://picsum.photos/300/200?random=${i + 1}`,
  }));

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        20 Sample Cards
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{card.description}</p>
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
