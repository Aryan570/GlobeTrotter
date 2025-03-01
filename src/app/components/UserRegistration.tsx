'use client'
import React, { useState } from 'react';
import { createUserProfile } from '../../services/userService';
import { ShareDialog } from './ShareDialog';
import { generateShareImage } from '@/services/imageService';
import { Loader2 } from 'lucide-react';

interface UserRegistrationProps {
  score: number;
}

export const UserRegistration: React.FC<UserRegistrationProps> = ({ score }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [share, setshare] = useState(false);
  const [shareImage, setShareImage] = useState<string>('');
  const [loading, setLoading] = useState(false);
  function handle_share() {
    setshare(false);
    setError('');
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserProfile(username, score);
      const image = await generateShareImage(score, username!);
      localStorage.setItem('username', username);
      setshare(true);
      setShareImage(image);
      setLoading(false);
    } catch (e: unknown) {
      if (e instanceof Error) setError(e.message);
      else setError("An unknown error occurred");
      setLoading(false);
    }
  };
  if (share) {
    return <ShareDialog score={score} onClose={handle_share} image={shareImage} />;
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <label>Share with friends !!</label>
      <input
        className='mb-1 mt-1 border-b-2 ring-none focus:ring-0 focus:outline-none'
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
        required
      />
      {error && <p className="error">{error}</p>}
      {loading ? <div className='w-full flex justify-end'><Loader2 className='animate-spin text-right'/></div> :<button className='w-full text-right cursor-pointer' type="submit">Register</button>}
    </form>
  );
};
