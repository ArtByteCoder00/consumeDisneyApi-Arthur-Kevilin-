import Image from 'next/image';
import { DisneyCharacter } from '@/types/characters';

export default function CharacterCard({ character }: { character: DisneyCharacter }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <Image
        src={character.imageUrl}
        alt={character.name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{character.name}</h3>
        <p className="text-gray-600">
          Aparece em: {character.films?.slice(0, 3).join(', ') || 'Nenhum filme listado'}
        </p>
      </div>
    </div>
  );
}