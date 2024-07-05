export type TProject = {
  name: string;
  description: string;
  features: string[];
  technologies: string[];
  liveLink: string;
  frontendRepo: string;
  backendRepo: string;
  image: string;
};

export type TUpdateProject = {
  name?: string;
  description?: string;
  features?: string[];
  technologies?: string[];
  liveLink?: string;
  frontendRepo?: string;
  backendRepo?: string;
  image?: string;
};
