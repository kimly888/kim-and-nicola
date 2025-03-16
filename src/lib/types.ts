export type Guest = {
  id: string;
  name: string;
  email: string;
  attending: boolean;
  plus_ones: number;
  dietary_restrictions?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
};

export type EventDetails = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image_url?: string;
};

export type AdminUser = {
  id: string;
  email: string;
  created_at: string;
};
