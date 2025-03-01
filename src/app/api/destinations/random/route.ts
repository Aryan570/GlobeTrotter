import { NextResponse } from 'next/server';
import { destinations } from '@/data/destinations';

export async function GET() {
  const randomIndex = Math.floor(Math.random() * destinations.length);
  const destination = destinations[randomIndex];
  const options = [destination.city];
  while (options.length < 4) {
    const randomIndex = Math.floor(Math.random() * destinations.length);
    const randomDestination = destinations[randomIndex];
    if (!options.includes(randomDestination.city)) {
       options.push(randomDestination.city);
    }
  }
  for(let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = options[i];
        options[i] = options[j];
        options[j] = temp;
  }
  return NextResponse.json({
    id: destination.id,
    clues: destination.clues,
    options : options
  });
}
