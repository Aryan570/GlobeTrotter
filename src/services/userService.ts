"use server"

import { connectToDatabase } from "@/lib/mongodb";

export interface UserProfile {
  username: string;
  score: number;
}

export type UserError = {
  message: string;
  code: 'INVALID_USERNAME' | 'USERNAME_EXISTS';
};

// const profiles = new Map<string, UserProfile>();

export const createUserProfile = async (username: string, score : number): Promise<{error? : UserError}> => {
  if(/[^a-zA-Z0-9_]/.test(username)){
    return { 
      error: {
        code: 'INVALID_USERNAME',
        message: 'Invalid username'
      }
    };
  }
  const {db} = await connectToDatabase();
  const doc = await db.collection('life').findOne({username: username});
  if (doc) {
    return {
      error: {
        code: 'USERNAME_EXISTS',
        message: 'Username already exists'
      }
    };
  }
  await db.collection('life').insertOne({username: username, score: score, createdAt: new Date()});
  return {};
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
