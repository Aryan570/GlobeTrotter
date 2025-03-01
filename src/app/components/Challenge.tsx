'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Confetti from 'react-confetti';
import { MoveRight, ReplyAll } from 'lucide-react';
import { UserRegistration } from '@/app/components/UserRegistration';
import { useRouter } from 'next/navigation';
import { getProfile, UserProfile } from '@/services/userService';

interface DestinationData {
    id: string;
    clues: string[];
    options: string[];
}

interface Score {
    correct: number;
    incorrect: number;
}

export default function Challenge({ slug }: { slug: string }) {
    const router = useRouter();
    const [friend, setFriend] = useState<UserProfile | undefined>(undefined);
    const [destination, setDestination] = useState<DestinationData | null>(null);
    const [score, setScore] = useState<Score>({ correct: 0, incorrect: 0 });
    const [feedback, setFeedback] = useState<{ message: string; funFact: string } | null>(null);
    const [showConfetti, setShowConfetti] = useState(false);
    const [disable, setdisable] = useState(false);
    const [over, setover] = useState(false);

    useEffect(() => {
        fetchDestination();
    }, []);

    useEffect(() => {
        async function init(){
            const friend = await getProfile(slug);
            if (friend === undefined) router.push('/');
            setFriend(friend);
        }
        init();
    }, [router,slug]);

    async function fetchDestination() {
        try {
            const res = await axios.get('/api/destinations/random');
            setDestination(res.data);
            setFeedback(null);
            setShowConfetti(false);
            setdisable(false);
        } catch (error) {
            console.error('Error fetching destination:', error);
        }
    }

    async function handleGuess(guess: string) {
        try {
            const res = await axios.post('/api/destinations/validate', {
                id: destination?.id,
                guess
            });
            const { correct, funFact } = res.data;
            if (correct) {
                setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
                setFeedback({ message: '🎉 Correct Answer!', funFact });
                setShowConfetti(true);
            } else {
                setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
                setFeedback({ message: '😢 Incorrect Answer!', funFact });
            }
            if (score.correct + score.incorrect >= 9) setover(true);
            setdisable(true);
        } catch (error) {
            console.error('Error validating answer:', error);
        }
    }
    if (friend === undefined) {
        return (
            <div className='h-2/3 w-2/3 p-4 border rounded-3xl shadow mb-8 flex justify-around items-center'>
                <div>
                    Loading...
                </div>
            </div>
        );
    }
    if (over) {
        return (
            <div className='h-2/3 w-2/3 p-4 border rounded-3xl shadow mb-8 flex justify-around items-center'>
                <div className="flex flex-col justify-center items-center">
                    <div className='fixed inset-0 pointer-events-none overflow-hidden'><Confetti /></div>
                    <h1 className="text-2xl font-bold">Globetrotter Challenge</h1>
                    <p className="mt-2">Score: {score.correct} Correct, {score.incorrect} Incorrect</p>
                    {score.correct >= friend!.score ? <p className='text-green-500'>{score.correct != friend!.score ? "New God is born!" : "Boo! A Tie"}</p> : <p className='text-red-500'>Couldn&apos;t beat {friend?.username}, lol</p>}
                    <button className='mt-2 cursor-pointer' onClick={
                        () => {
                            setover(false);
                            setScore({ correct: 0, incorrect: 0 });
                            fetchDestination();
                        }
                    }><ReplyAll /></button>
                </div>
                <div>
                    <UserRegistration score={score.correct} />
                </div>
            </div>
        );
    }
    return (
        <>
            {showConfetti && <div className='fixed inset-0 pointer-events-none overflow-hidden'><Confetti /></div>}
            <div className="h-2/3 w-2/3 p-4 grid grid-cols-6 grid-rows-5 border rounded-3xl shadow mb-8">
                <div className="mb-4 row-start-1 row-span-2 col-start-1 col-span-2 flex flex-col justify-center items-center border-r-2">
                    <h1 className="text-2xl font-bold">Globetrotter Challenge</h1>
                    <p className="mt-2">Score: {score.correct} Correct, {score.incorrect} Incorrect</p>
                </div>
                {destination && (
                    <div className="mb-4 row-start-2 row-span-4 col-start-1 col-span-2 h-full flex flex-col justify-center items-center border-r-2">
                        <p key={0} className='row-start-2 row-span-2 col-start-1 col-span-2 text-lg my-2 '>{destination.clues[0]}</p>
                        <p key={1} className='row-start-4 row-span-2 col-start-1 col-span-2 text-lg my-2 '>{destination.clues[1]}</p>
                    </div>
                )}
                <div className=' col-start-3 col-span-2 row-start-1 row-span-2'>
                    <button
                        key={0}
                        className="h-full w-full text-white p-2 rounded hover:bg-blue-600 transition ml-2"
                        onClick={() => handleGuess(destination!.options[0])}
                        disabled={disable}
                    >
                        {destination?.options[0]}
                    </button>
                </div>
                <div className='col-start-5 col-span-2 row-start-1 row-span-2'>
                    <button
                        key={1}
                        className=" h-full w-full text-white rounded p-2 hover:bg-blue-600 transition"
                        onClick={() => handleGuess(destination!.options[1])}
                        disabled={disable}
                    >
                        {destination?.options[1]}
                    </button>
                </div>
                <div className='col-start-3 col-span-2 row-start-3 row-span-2 mb-3'>
                    <button
                        key={2}
                        className=" h-full w-full text-white p-2 rounded hover:bg-blue-600 transition ml-2"
                        onClick={() => handleGuess(destination!.options[2])}
                        disabled={disable}
                    >
                        {destination?.options[2]}
                    </button>
                </div>
                <div className='col-start-5 col-span-2 row-start-3 row-span-2 mb-3'>
                    <button
                        key={3}
                        className=" h-full w-full text-white p-2 rounded hover:bg-blue-600 transition"
                        onClick={() => handleGuess(destination!.options[3])}
                        disabled={disable}
                    >
                        {destination?.options[3]}
                    </button>
                </div>
                {/* </div> */}
                {feedback ? (
                    <div className="p-4 ml-2 border-t-2 col-start-3 col-span-3 row-start-5 row-span-1">
                        <p className="font-semibold">{feedback.message}</p>
                        <p className="mt-1">Fun Fact: {feedback.funFact}</p>
                    </div>
                ) : (
                    <div className="p-4 border-t-2 ml-2 col-start-3 col-span-3 row-start-5 row-span-1 flex justify-center items-center">
                        <p className="font-semibold">Fact waiting for you!</p>
                    </div>
                )}
                <button
                    onClick={fetchDestination}
                    className=" border-l-2 border-t-2 text-white p-2 rounded hover:bg-green-600 transition col-start-6 col-span-1 row-start-5 row-span-1 flex justify-center items-center"
                    disabled={feedback ? false : true}
                >
                    <MoveRight />
                </button>
            </div>
        </>
    );
}
