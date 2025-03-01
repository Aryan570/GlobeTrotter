'use client'
import React, { useEffect, useState } from 'react';
// import { generateShareImage } from '../../services/imageService';
import Image from 'next/image';

interface ShareDialogProps {
  score: number;
  onClose: () => void;
  image : string;
}

export const ShareDialog: React.FC<ShareDialogProps> = ({ score, onClose, image }) => {
  // const [shareImage, setShareImage] = useState<string>('');
  const [inviteLink, setInviteLink] = useState<string>('');

  useEffect(() => {
    const init = async () => {
      const username = localStorage.getItem('username');
      // const image = await generateShareImage(score, username!);
      // const link = `${window.location.origin}/challenge/${username}/${score}`;
      const link = `${window.location.origin}/challenge/${username}`;
      // setShareImage(image);
      setInviteLink(link);
    };
    init();
  }, [score]);

  const shareToWhatsApp = () => {
    const text = `Can you beat my score in Globetrotter? Play here: ${inviteLink}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
  };

  return (
    <div className="share-dialog flex flex-col">
      <Image src={image} alt="Challenge Score" height={200} width={200} />
      <button className='cursor-pointer text-emerald-600 text-right' onClick={shareToWhatsApp}>Share on WhatsApp</button>
      <button className='text-right cursor-pointer text-red-500' onClick={onClose}>Close</button>
    </div>
  );
};
