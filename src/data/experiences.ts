export interface Experience {
  url: string;
  company: string;
  img: string;
  position: string;
  startDate: string;
  endDate: string | null;
  location: string;
  current: boolean;
  display: boolean;
  professional: boolean;
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
    location: "Huntsville, AL",
    current: true,
    display: true,
    professional: true,
    description:
      "Building backend services and internal tools that support manufacturing and supply chain operations using Java, Spring Boot, AWS, and GraphQL.",
  },
  {
    url: "https://www.chicagoventure.com/",
    company: "Chicago Venture Partners",
    img: "/images/chicago_venture_partners_logo.jpeg",
    position: "Full Stack Developer Intern",
    startDate: "2024-05",
    endDate: "2024-08",
    location: "Chicago, IL",
    current: false,
    display: true,
    professional: true,
    description:
      "Pioneered research & deployment of tooling for monitoring internal apps. Implemented stakeholder-requested features in internal Django applications.",
  },
  {
    url: "https://www.akpsiuiuc.biz/",
    company: "Alpha Kappa Psi",
    img: "https://static.wixstatic.com/media/80b5eb_8a28ade9791846ca96f725fa47152ce3~mv2.png/v1/fill/w_400,h_384,al_c/80b5eb_8a28ade9791846ca96f725fa47152ce3~mv2.png",
    position: "Technical Recruitment Chair",
    startDate: "2023-12",
    endDate: "2024-04",
    location: "Champaign, IL",
    current: false,
    display: true,
    professional: false,
    description:
      "Engineered Google Apps Script programs to automate organizing, maintaining, and tracking applicants during our Spring recruitment cycle",
  },
  {
    url: "https://www.zebra.com/us/en.html",
    company: "Zebra Technologies",
    img: "https://api.the-trackr.com/companies/logo/zebra-technologies",
    position: "Software Engineer Intern II",
    startDate: "2023-06",
    endDate: "2023-08",
    location: "Lincolnshire, IL",
    current: false,
    display: true,
    professional: true,
    description:
      "Architected a Prometheus pipeline to scrape github release data from a Spring Boot app, persist data in a GCP Bucket, and notify via an RSS feed.",
  },
  {
    url: "https://crowddynamicslab.github.io/",
    company: "Crowd Dynamics Lab",
    img: "https://crowddynamicslab.github.io/images/logo.png",
    position: "Undergraduate Research Assistant",
    startDate: "2023-01",
    endDate: "2023-05",
    location: "Champaign, IL",
    current: false,
    display: true,
    professional: false,
    description:
      "Worked under Dr. Hari Sundaram to implement a Python script to web-scrape pricing data from Amazon to highlight price discrimination.",
  },
  {
    url: "https://uiuc.hack4impact.org/",
    company: "Hack4Impact UIUC",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdtkWasCaUKkaO2uHNb4lo3TY0RVUo7dBX1A&s",
    position: "Software Developer",
    startDate: "2022-09",
    endDate: "2023-12",
    location: "Champaign, IL",
    current: false,
    display: true,
    professional: false,
    description:
      "Developed public-facing web and mobile applications for nonprofit organizations with a team of students.",
  },
  {
    url: "https://www.zebra.com/us/en.html",
    company: "Zebra Technologies",
    img: "https://api.the-trackr.com/companies/logo/zebra-technologies",
    position: "Software Engineer Intern",
    startDate: "2022-05",
    endDate: "2022-08",
    location: "Lincolnshire, IL",
    current: false,
    display: true,
    professional: true,
    description:
      "Assisted in implementing a Blutooth Low Energy Tech stack for a temperature sensing device.",
  },
  {
    url: "https://giesbusiness.illinois.edu/experience/experiential-learning/illinois-business-consulting",
    company: "Illinois Business Consulting",
    img: "https://pbs.twimg.com/profile_images/970180612173828097/kYVZol1c_400x400.jpg",
    position: "Consultant",
    startDate: "2021-09",
    endDate: "2022-01",
    location: "Champaign, IL",
    current: false,
    display: true,
    professional: false,
    description:
      "Conducted market entry research for a chemical battery additive manufacturer in East Asia.",
  },
  {
    url: "https://siteinnovator.com/",
    company: "SiteInnovator",
    img: "https://siteinnovator.com/wp-content/uploads/2022/01/cropped-cropped-SiteInnovator-1-01-e1643391722155-300x64.png",
    position: "Web Developer",
    startDate: "2019-05",
    endDate: "2021-02",
    location: "Naperville, IL",
    current: false,
    display: true,
    professional: false,
    description: "Designed websites for local businesses with WordPress.",
  },
];

export default experiences;
