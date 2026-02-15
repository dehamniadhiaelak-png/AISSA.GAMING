
import React from 'react';
import { TechItem, Category } from './types';

export const MOCK_DATA: TechItem[] = [
  {
    id: '1',
    title: 'Adobe Lightroom Mobile',
    description: 'The industry-standard photo editing tool now optimized for mobile devices.',
    longDescription: 'Lightroom for mobile is a free, powerful photo editor and camera app that empowers your photography, helping you capture and edit stunning images. It offers easy-to-use image editing tools like sliders to retouch your photos and transformative presets to quickly apply unique adjustments that bring your photos to life wherever you are.',
    category: Category.ANDROID,
    rating: 4.8,
    image: 'https://picsum.photos/seed/lightroom/800/450',
    pros: ['Professional grade tools', 'Cloud sync', 'Excellent RAW support'],
    cons: ['Subscription required for some features', 'High battery usage'],
    specs: {
      version: '9.4.1',
      size: '124 MB',
      compatibility: 'Android 8.0+',
      lastUpdated: 'Oct 24, 2024'
    },
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.adobe.lrmobile',
    date: '2024-10-24',
    author: 'TechPulse Team'
  },
  {
    id: '2',
    title: 'Visual Studio Code',
    description: 'The most popular code editor for developers, refined for desktop performance.',
    longDescription: 'Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity).',
    category: Category.DESKTOP,
    rating: 4.9,
    image: 'https://picsum.photos/seed/vscode/800/450',
    pros: ['Incredible extension library', 'Fast performance', 'Great Git integration'],
    cons: ['Can be memory intensive with many extensions', 'Steep learning curve for advanced features'],
    specs: {
      version: '1.94.0',
      size: '95 MB',
      compatibility: 'Windows/Mac/Linux',
      lastUpdated: 'Oct 15, 2024'
    },
    downloadUrl: 'https://code.visualstudio.com/download',
    date: '2024-10-15',
    author: 'Admin'
  },
  {
    id: '3',
    title: 'The Future of Web Development',
    description: 'Exploring Next.js vs WordPress for modern technical blogs.',
    category: Category.EDUCATION,
    rating: 4.5,
    image: 'https://picsum.photos/seed/webdev/800/450',
    pros: ['Comprehensive comparison', 'Real-world benchmarks', 'Expert opinions'],
    cons: ['Focuses mostly on React-based stacks'],
    date: '2024-10-10',
    author: 'Sarah Chen'
  }
];

export const CATEGORIES = Object.values(Category);
