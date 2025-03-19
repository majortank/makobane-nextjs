export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          full_name: string | null
          avatar_url: string | null
          role: 'user' | 'moderator' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          role?: 'user' | 'moderator' | 'admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          role?: 'user' | 'moderator' | 'admin'
          created_at?: string
          updated_at?: string
        }
      }
      words: {
        Row: {
          id: string
          term: string
          definition: string
          part_of_speech: string | null
          cultural_notes: string | null
          example_usage: string | null
          created_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          term: string
          definition: string
          part_of_speech?: string | null
          cultural_notes?: string | null
          example_usage?: string | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          term?: string
          definition?: string
          part_of_speech?: string | null
          cultural_notes?: string | null
          example_usage?: string | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      pronunciations: {
        Row: {
          id: string
          word_id: string
          audio_url: string | null
          phonetic_notation: string | null
          created_by: string | null
          created_at: string
        }
        Insert: {
          id?: string
          word_id: string
          audio_url?: string | null
          phonetic_notation?: string | null
          created_by?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          word_id?: string
          audio_url?: string | null
          phonetic_notation?: string | null
          created_by?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      suggestion_status: 'pending' | 'approved' | 'rejected'
      vote_type: 'up' | 'down'
      user_role: 'user' | 'moderator' | 'admin'
    }
  }
}