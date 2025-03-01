"use server"

import { connectToDatabase } from "@/lib/mongodb";

export interface UserProfile {
  username: string;
  score: number;
}

// const profiles = new Map<string, UserProfile>();

export const createUserProfile = async (username: string, score : number): Promise<void> => {
  if(/[^a-zA-Z0-9_]/.test(username)){
    throw new Error('Invalid username');
  }
  const {db} = await connectToDatabase();
  const doc = await db.collection('life').findOne({username: username});
  if (doc) {
    throw new Error('Username already exists');
  }
  await db.collection('life').insertOne({username: username, score: score, createdAt: new Date()});
};

// export const updateScore = (username: string, score: number): void => {
//   const profile = profiles.get(username);
//   if (profile) {
//     profile.score = score;
//     profiles.set(username, profile);
//   }
// };

export const getProfile = async (username: string): Promise<UserProfile | undefined> => {
  const {db} = await connectToDatabase();
  const doc = await db.collection('life').findOne({username: username});
  if(!doc) return undefined;
  return {username: doc!.username, score: doc!.score};
};
