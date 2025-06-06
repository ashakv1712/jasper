'use client';

import { useState } from 'react';

export default function MarvelQuotesPage() {
  const [currentQuote, setCurrentQuote] = useState('Click the button for a Marvel quote!');
  const [currentMovie, setCurrentMovie] = useState('');

  const marvelQuotes = [
    { quote: "I am Iron Man.", movie: "Iron Man (2008)" },
    { quote: "That's my secret, Captain. I'm always angry.", movie: "The Avengers (2012)" },
    { quote: "I can do this all day.", movie: "Captain America: The First Avenger (2011)" },
    { quote: "With great power comes great responsibility.", movie: "Spider-Man (2002)" },
    { quote: "I love you 3000.", movie: "Avengers: Endgame (2019)" },
    { quote: "Wakanda forever!", movie: "Black Panther (2018)" },
    { quote: "We are Groot.", movie: "Guardians of the Galaxy (2014)" },
    { quote: "I am Inevitable", movie: "Avengers: Endgame (2019)" },
    { quote: "Avengers... assemble!", movie: "Avengers: Endgame (2019)" },
    { quote: "I'm with you until the end of the line", movie: "Captain America: The Winter Soldier (2014)" },
  ];

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * marvelQuotes.length);
    const randomQuote = marvelQuotes[randomIndex];
    setCurrentQuote(randomQuote.quote);
    setCurrentMovie(randomQuote.movie);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <main className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-red-500">Marvel Movie Quotes</h1>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
          <blockquote className="text-2xl italic mb-4">{`"${currentQuote}"`}</blockquote>
          {currentMovie && <p className="text-gray-400">— {currentMovie}</p>}
        </div>

        <button
          onClick={generateRandomQuote}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105"
        >
          Generate New Quote
        </button>
      </main>

      <footer className="mt-12 text-gray-500 text-sm">
        <p>Made with Next.js | Marvel Cinematic Universe</p>
      </footer>
    </div>
  );
}
