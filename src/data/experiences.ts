export interface Experience {
  url: string;
  company: string;
  img: string;
  position: string;
  startDate: string;
  endDate: string | null;
  display: boolean;
  description: string;
}

const experiences: Experience[] = [
  {
    url: "https://www.blueorigin.com/",
    company: "Blue Origin",
    img: "https://d1o72l87sylvqg.cloudfront.net/blue-origin/logo-feather-blue-square-optimized.png",
    position: "Software Development Engineer",
    startDate: "2025-08",
    endDate: null,
    display: true,
    description:
      "Engineered end-to-end solutions by integrating new features into React.js, Node.js, and Django applications.",
  },
  {
    url: "https://www.chicagoventure.com/",
    company: "Chicago Venture Partners",
    img: "/images/chicago_venture_partners_logo.jpeg",
    position: "Full Stack Developer Intern",
    startDate: "2024-05",
    endDate: "2024-08",
    display: true,
    description:
      "Engineered end-to-end solutions by integrating new features into React.js, Node.js, and Django applications.",
  },
  {
    url: "https://www.akpsiuiuc.biz/",
    company: "Alpha Kappa Psi",
    img: "https://static.wixstatic.com/media/80b5eb_8a28ade9791846ca96f725fa47152ce3~mv2.png/v1/fill/w_400,h_384,al_c/80b5eb_8a28ade9791846ca96f725fa47152ce3~mv2.png",
    position: "Technical Recruitment Chair",
    startDate: "2023-12",
    endDate: "2024-04",
    display: true,
    description:
      "Architected Google App Script programs to automated the process of organizing, maintaining, and tracking applicants during our Spring recruitment cycle",
  },
  {
    url: "https://www.zebra.com/us/en.html",
    company: "Zebra Technologies",
    img: "https://www.inkworldmagazine.com/wp-content/uploads/sites/15/2025/05/166_main-14.jpg",
    position: "Software Engineer Intern",
    startDate: "2023-06",
    endDate: "2023-08",
    display: true,
    description:
      "Implemented a Prometheus pipeline to scrape and track release data giving managers better insights into project completion on the cloud",
  },
  {
    url: "https://crowddynamicslab.github.io/",
    company: "Crowd Dynamics Lab",
    img: "https://crowddynamicslab.github.io/images/logo.png",
    position: "Undergraduate Research Assistant",
    startDate: "2023-01",
    endDate: "2023-05",
    display: true,
    description:
      "Worked with Dr. Hari Sundaram to build a web-scraping app for comparing various industry prices on Amazon",
  },
  {
    url: "https://uiuc.hack4impact.org/",
    company: "Hack4Impact UIUC",
    img: "https://media.licdn.com/dms/image/C560BAQGDbdhpmxRmrg/company-logo_200_200/0/1633548684667?e=2147483647&v=beta&t=uzgi1imN65DlpVvbd0TUb-S1L4pTNXwoS0tkolTipKs",
    position: "Software Developer",
    startDate: "2022-09",
    endDate: "2023-12",
    display: true,
    description:
      "Building public-facing web and mobile applications for nonprofit organizations.",
  },
  {
    url: "https://www.zebra.com/us/en.html",
    company: "Zebra Technologies",
    img: "https://www.inkworldmagazine.com/wp-content/uploads/sites/15/2025/05/166_main-14.jpg",
    position: "Software Engineer Intern",
    startDate: "2022-05",
    endDate: "2022-08",
    display: true,
    description:
      "Assisted in implementing a AndroidOS Blutooth Low Energy Tech stack for a temperature sensing device",
  },
  {
    url: "https://giesbusiness.illinois.edu/experience/experiential-learning/illinois-business-consulting",
    company: "Illinois Business Consulting",
    img: "https://media.licdn.com/dms/image/C4E0BAQHXpt3Z77TTTg/company-logo_200_200/0/1524591453687?e=2147483647&v=beta&t=UcDxleqvyfRWfKf9Xo6uLiJMaOMcq3_pJ8496H0_LQo",
    position: "Consultant",
    startDate: "2021-09",
    endDate: "2022-01",
    display: false,
    description:
      "Conducted market entry research for a chemical battery additive manufacturer in East Asia.",
  },
  {
    url: "https://siteinnovator.com/",
    company: "SiteInnovator",
    img: "https://pbs.twimg.com/profile_images/1253312931946803200/F9wKZuhw_400x400.jpg",
    position: "Web Developer",
    startDate: "2019-05",
    endDate: "2021-02",
    display: false,
    description:
      "Designed websites for local businesses with WordPress to help expand their online presence.",
  },
];

export default experiences;
