export type Project = {
  index: number;
  year: number;
  title: string;
  description: string;
  tags: string[];
  builtWith: string[];
  preview?: string;
  url?: string;
};

export const SHOWCASE_PROJECT_INDEXES: number[] = [1, 2];

export const projects: Project[] = [
  { 
    index: 1,
    year: 2025,
    title: "Pocket Penguin", 
    description: "A gamified wellness and habit-tracking mobile app, aims to help users build daily habits, track progress, and engage with habit formation.", 
    tags: ["Product design", "Full-stack"], 
    builtWith: ["Flutter", "Django", "SQLite"],
    preview: "/projects/pocketpenguin.png",
    url: "https://github.com/wkeav/Pocket_Penguin",
  },
  { 
    index: 2,
    year: 2023,
    title: "VelocityStaffChat", 
    description: "A plugin built to create private staff chat channels that integrates with Discord through Spicord.", 
    tags: [], 
    builtWith: ["React", "MDX"],
    preview: "",
    url: "https://github.com/SenPr/VelocityStaffChat",
  },
  
];