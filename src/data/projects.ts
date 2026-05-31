export interface Project {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  display: boolean;
}

const projects: Project[] = [
  {
    title: "RV Programming Language",
    description:
      "RV is a Python-inspired programming language written in C++, featuring custom lexing, parsing, IR compilation, and runtime execution with an interactive web interface",
    tech: ["C++", "Flask", "Next.js"],
    imageUrl: "/images/interpreter.png",
    liveUrl: "https://rv-interpreter-frontend.vercel.app/",
    repoUrl: "https://github.com/rohanvan123/rv-interpreter",
    display: true,
  },
  {
    title: "Pathfinding Visualizer",
    description:
      "Web app for visualizing pathfinding algorithms like BFS, Dijkstra's, and A* Search",
    tech: ["Next.js", "Tailwind", "Typescript"],
    imageUrl: "/images/pathfinding-vis.png",
    liveUrl: "https://pathfinding-visualizer-fawn-ten.vercel.app/",
    repoUrl: "https://github.com/rohanvan123/pathfinding-visualizer",
    display: true,
  },
  {
    title: "Nowcasting Dashboard",
    description:
      "Mobile-first web app for users to view nowcasting forecasts for solar energy production on their solar panel arrays.",
    tech: ["Hack4Impact", "Open Source"],
    imageUrl:
      "https://user-images.githubusercontent.com/23221268/242501890-f2d56861-c906-4670-9e10-d380ad56eaeb.png",
    repoUrl: "https://github.com/openclimatefix/pv-sites-mobile",
    display: true,
  },
  {
    title: "rshell",
    description:
      "Custom implementation of the UNIX-based shell with directory tree managment and execuation capabilities",
    tech: ["C", "Python"],
    imageUrl: "/images/rshell-logo.svg",
    repoUrl: "https://github.com/rohanvan123/rshell",
    display: true,
  },
  {
    title: "Investment Portfolio",
    description:
      "Web app for visualizing your custom portfolio using SimFin's Financial API",
    tech: ["Next.js", "Firebase Auth", "ReCharts", "Firebase DB"],
    imageUrl: "/images/investment-portfolio.png",
    liveUrl: "https://investment-portfolio-rohanvan123.vercel.app/",
    repoUrl: "https://github.com/rohanvan123/investment-portfolio",
    display: true,
  },
  {
    title: "Mosaic Image Generator",
    description:
      "Using K-d trees and Nearest Neighbor search algorithms to generate photo mosaics",
    tech: ["C++", "CMake", "Docker"],
    imageUrl: "/images/mosaic-image.png",
    repoUrl: "https://github.com/rohanvan123/mosaic-image-gen",
    display: false,
  },
  {
    title: "Brink",
    description:
      "Mobile-first accessible web app for people to learn more about election, polling, and voting information in their area",
    tech: ["Hack4Impact", "Open Source"],
    imageUrl: "/images/brink.png",
    liveUrl: "https://brink.h4i.app/landing",
    repoUrl: "https://github.com/hack4impact-uiuc/brink",
    display: false,
  },
  {
    title: "Hangman",
    description:
      "Basic HTML, CSS, JS rendition of the traditional Hangman game with easy words",
    tech: ["Next.js"],
    imageUrl: "/images/hangman.png",
    liveUrl: "https://hangman-vercel.vercel.app/",
    repoUrl: "https://github.com/rohanvan123/hangman",
    display: false,
  },
];

export default projects;
