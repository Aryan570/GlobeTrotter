import Game from '@/app/components/Game';
// import ChallengeInvite from '@/app/components/ChallengeInvite';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <Game />
      {/* <ChallengeInvite /> */}
    </div>
  );
}