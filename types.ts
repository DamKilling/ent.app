// Fix: Add missing import for React to resolve React.ReactElement type.
import React from 'react';

export type Page = 'Home' | 'Services' | 'Shop' | 'Community' | 'Profile' | 'Upload' | 'PostDetail' | 'PetAICompanion' | 'Memorials' | 'MemorialDetail' | 'CreateMemorial' | 'AboutUs' | 'ServiceDetail';

export interface Comment {
    user: string;
    avatar: string;
    text: string;
}

export interface Post {
    id: number;
    emoji: string;
    title: string;
    user: string;
    likes: number;
    avatar: string;
    image?: string | null;
    comments: Comment[];
}

export interface Product {
    id: number;
    icon: React.ReactElement;
    name: string;
    desc: string;
    price: number;
    tag: string;
    tagColor: string;
}

export interface Tribute {
    id: number;
    user: string;
    text: string;
    date: string;
}

export interface Memorial {
  id: number;
  petName: string;
  petAvatar: string;
  birthday: string;
  adoptionDay: string;
  favoriteToys: string;
  stories: string;
  photos: string[];
  candles: number;
  tributes: Tribute[];
}

export interface Order {
    id: string;
    date: string;
    title: string;
    price: number;
    status: 'Pending' | 'Confirmed' | 'Completed';
    type: 'Service' | 'Product';
}