import { LucideIcon } from 'lucide-react';

export interface TrajectoryItem {
  id: string;
  title: string; // e.g. "Unidad de Cuidados Paliativos"
  organization: string; // e.g. "Fundación Presentes"
  description: string;
  icon: LucideIcon;
}

export interface CapabilityItem {
  id: string;
  title: string;
  icon: LucideIcon;
  items: string[]; // List of specific areas (e.g., "Urgencias", "Hospitalización")
  image: string;
}

export interface Language {
  name: string;
  level: string; // e.g., "Nativo", "C2"
  percentage: number; // For visual bar
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  year: string;
  stats?: { label: string; value: string }[];
}

export interface PhilosophyItem {
  id: string;
  text: string;
}