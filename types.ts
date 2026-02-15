
export enum Category {
  ANDROID = 'Android Apps',
  DESKTOP = 'Desktop Software',
  EDUCATION = 'Tech Tutorials',
  SEO = 'SEO Insights'
}

export interface AppSpecs {
  version: string;
  size: string;
  compatibility: string;
  lastUpdated: string;
}

export interface TechItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: Category;
  rating: number;
  image: string;
  pros: string[];
  cons: string[];
  specs?: AppSpecs;
  downloadUrl?: string;
  date: string;
  author: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
