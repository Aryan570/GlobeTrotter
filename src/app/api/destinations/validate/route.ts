import { NextResponse } from 'next/server';
import { destinations } from '@/data/destinations';

export async function POST(request: Request) {
  const { id, guess } = await request.json();
  const destination = destinations.find((dest) => dest.id === id);

  if (!destination) {
    return NextResponse.json({ error: 'Destination not found' }, { status: 404 });
  }
  const correct = destination.city.toLowerCase() === guess.toLowerCase();

  return NextResponse.json({
    correct,
    funFact: destination.fun_fact[Math.floor(Math.random() * 2)] // Return one fun fact
  });
}
