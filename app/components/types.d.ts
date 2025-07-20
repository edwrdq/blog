// Type declarations for modules without types
declare module 'shake.js' {
  interface ShakeOptions {
    threshold?: number;
    timeout?: number;
  }

  class Shake {
    constructor(options?: ShakeOptions);
    start(): void;
    stop(): void;
  }

  export default Shake;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  status: 'Live' | 'In Development' | 'Archived';
  featured: boolean;
}