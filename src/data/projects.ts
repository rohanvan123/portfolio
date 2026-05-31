export interface Project {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Pathfinding Visualizer",
    description:
      "Web app for visualizing pathfinding algorithms like BFS, Dijkstra's, and A* Search",
    tech: ["Next.js", "Tailwind", "Typescript"],
    imageUrl: "/images/pathfinding-vis.png",
    link: "https://rohanvanjani.com/pathfinding-visualizer/",
  },
  {
    title: "Investment Portfolio",
    description:
      "Web app for visualizing your custom portfolio using SimFin's Financial API",
    tech: ["Next.js", "Firebase Auth", "ReCharts", "Firebase DB"],
    imageUrl: "/images/investment-portfolio.png",
    link: "https://investment-portfolio-rohanvan123.vercel.app/",
  },
  {
    title: "Language Interpreter",
    description:
      "C++ interpreter for a custom python-like language with a frontend for visualization Lexer & Parser outputs",
    tech: ["C++", "Flask", "Next.js"],
    imageUrl: "/images/interpreter.png",
    link: "https://rohanvanjani.com/pathfinding-visualizer/",
  },
  {
    title: "Nowcasting Dashboard",
    description:
      "Mobile-first web app for users to view nowcasting forecasts for solar energy production on their solar panel arrays.",
    tech: ["Hack4Impact", "Open Source"],
    imageUrl:
      "https://user-images.githubusercontent.com/23221268/242501890-f2d56861-c906-4670-9e10-d380ad56eaeb.png",
    link: "https://github.com/openclimatefix/pv-sites-mobile",
  },
  {
    title: "RShell",
    description:
      "Custom implementation of the UNIX-based shell with directory tree managment and execuation capabilities",
    tech: ["C", "Python"],
    imageUrl: "/images/rshell.png",
    link: "https://github.com/rohanvan123/rshell",
  },
  {
    title: "Mosaic Image Generator",
    description:
      "Using K-d trees and Nearest Neighbor search algorithms to generate photo mosaics",
    tech: ["C++", "CMake", "Docker"],
    imageUrl: "/images/mosaic-image.png",
    link: "https://github.com/rohanvan123/mosaic-image-gen",
  },
  {
    title: "Brink",
    description:
      "Mobile-first accessible web app for people to learn more about election, polling, and voting information in their area",
    tech: ["Hack4Impact", "Open Source"],
    imageUrl: "/images/brink.png",
    link: "https://brink.h4i.app/landing",
  },
  {
    title: "Hangman",
    description:
      "Basic HTML, CSS, JS rendition of the traditional Hangman game with easy words",
    tech: ["Next.js"],
    imageUrl: "/images/hangman.png",
    link: "https://hangman-vercel.vercel.app/",
  },
];

export default projects;
