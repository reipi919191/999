import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  priceRange: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Gourmet' | 'Tourism' | 'Hotel' | 'Event';
  imageUrl: string;
  likes: number;
  description?: string;
  client?: string;
  date?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum PageRoute {
  HOME = '',
  ABOUT = 'about',
  SERVICES = 'services',
  PORTFOLIO = 'portfolio',
  CONTACT = 'contact'
}