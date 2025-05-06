'use client';

import CharacterCard from '@/components/CharacterCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DisneyCharacter } from '@/types/characters';
import Footer from '@/components/Footer';

export default function Home() {
  const [characters, setCharacters] = useState<DisneyCharacter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.disneyapi.dev/character');
        console.log(response.data.data, "BIBIBIBIBIBIBIB")
        setCharacters(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar personagens');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Seção Hero */}
      <header className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Disney API Explorer
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Acesse o mundo mágico da Disney através da nossa API
          </p>
          <a
            href="https://disneyapi.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
          >
            Documentação
          </a>
        </div>
      </header>

      {/* Seção Recursos */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Cards de recursos... */}
        </div>
      </section>

      {/* Seção Personagens */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Personagens em Destaque</h2>
         
          {loading && <p className="text-center">Carregando...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          <div className="grid md:grid-cols-3 gap-6">
            {characters.map((character) => (
              <CharacterCard key={character._id} character={character} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

