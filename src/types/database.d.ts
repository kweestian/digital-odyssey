type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          created_at: string | null;
          first_login: boolean | null;
          id: number;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          first_login?: boolean | null;
          id?: number;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          first_login?: boolean | null;
          id?: number;
          user_id?: string;
        };
      };
      user_experiences: {
        Row: {
          answer: Json | null;
          attachment: string | null;
          bonus: string | null;
          created_at: string | null;
          experience_key: string | null;
          id: number;
          user_id: string;
        };
        Insert: {
          answer?: Json | null;
          attachment?: string | null;
          bonus?: string | null;
          created_at?: string | null;
          experience_key?: string | null;
          id?: number;
          user_id: string;
        };
        Update: {
          answer?: Json | null;
          attachment?: string | null;
          bonus?: string | null;
          created_at?: string | null;
          experience_key?: string | null;
          id?: number;
          user_id?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
