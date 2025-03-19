export interface Profile {
  id: string;
  username: string | null;
  fullName: string | null;
  avatarUrl: string | null;
  role: 'user' | 'moderator' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface Word {
  id: string;
  term: string;
  definition: string;
  partOfSpeech: string | null;
  culturalNotes: string | null;
  exampleUsage: string | null;
  createdBy: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Pronunciation {
  id: string;
  wordId: string;
  audioUrl: string | null;
  phoneticNotation: string | null;
  createdBy: string | null;
  createdAt: Date;
}

export interface UserSuggestion {
  id: string;
  userId: string;
  term: string;
  definition: string;
  partOfSpeech: string | null;
  culturalNotes: string | null;
  exampleUsage: string | null;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

export interface Vote {
  id: string;
  suggestionId: string;
  userId: string;
  voteType: 'up' | 'down';
  createdAt: Date;
}

export interface Comment {
  id: string;
  wordId: string;
  userId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}