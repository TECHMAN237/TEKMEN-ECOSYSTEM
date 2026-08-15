export type Category = 'All' | 'Web' | 'Mobile' | 'AI' | 'IoT' | 'Platforms' | 'SaaS' | 'Systems';

export type ViewState = 'home' | 'about' | 'innovation' | 'products' | 'product-detail' | 'team' | 'community' | 'start-project';

export type InnovationViewState = 'home' | 'about' | 'solutions' | 'portfolio' | 'product-detail' | 'products' | 'process' | 'contact';

export interface ProjectItem {
  id: string;
  title: string;
  category: Category;
  description: string;
  image: string;
  tags: string[];
  metrics?: string;
  client?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  roadmap?: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  status: 'Live' | 'Beta' | 'R&D';
  metrics?: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: string;
  roadmap: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  expertise: string;
  bio: string;
  avatar: string;
  skills: string[];
  projects?: string[];
  competitions?: string[];
  achievements?: string[];
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface TeamSquad {
  id: string;
  name: string;
  focus: string;
  description: string;
  members: TeamMember[];
  status: string;
  competitionsWon: number;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  organization: string;
  date: string;
  description: string;
  result: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  result: string;
  teamMembersInvolved: string[];
}

export interface CredentialBadge {
  id: string;
  title: string;
  category: string;
  description: string;
  requirements: string;
}

export interface EcosystemCardData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  iconName: string;
  colorScheme: 'violet' | 'blue' | 'red' | 'indigo';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

