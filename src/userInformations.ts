import type { CertificateItem, EducationItem, ExperienceItem, Profile, SkillItem } from "./types/userInformations.types";

export const userProfile : Profile = {
    name: "Amirul Naim Bin Ahmad Nazri", 
    role: "Software Engineer",
    description: "Passionate about creating elegant solutions to complex problems.",
    socials: {
       github : {
            link: "https://github.com/naimbob95"
        },
      linkedIn : {
            link: "https://www.linkedin.com/in/amirul-naim-339a23b6/"
        }
    }  
};

export const experienceItems : ExperienceItem[] = [
    {
        title: "Software Engineer",
        company: "BrioHR",
        dates: "Dec 2023 - Present",
        technologies: ["Typescript", "NestJs", "Microservices", "Angular", "Mongodb", "Docker"],
        points: [
            "Contributed to maintaining the HR system across a microservices architecture using Nest.js, Angular, and MongoDB, ensuring scalability and performance.",
            "Enhanced the recruitment module by transforming the approval process from a single-layer to a dynamic multi-layer approval system, improving flexibility and compliance. Additionally, implemented unit tests using Jest to ensure robustness and reliability.",
            "Participated in the development of the time-attendance module using hexagonal architecture by implementing dynamic policy configurations to accommodate diverse organizational requirements, along with comprehensive Jest unit tests to validate functionality.",
            "Learned and implemented Domain-Driven Development (DDD) principles across the project to create a more maintainable and scalable codebase by aligning technical implementations with business needs.",
            "Collaborated with cross-functional teams to optimize microservice interactions, improving data consistency and reducing system downtime.",
            "Conducted performance tuning and optimization of MongoDB queries to enhance system responsiveness, incorporating unit tests to validate query accuracy and efficiency.",
            "Developed and maintained RESTful APIs to facilitate seamless communication between microservices and front-end applications, with Jest tests ensuring API stability and correctness."
        ]
    },
    {
        title: "Web Developer",
        company: "Boneybone Ventures Sdn Bhd",
        dates: "Aug 2021 - Dec 2023",
        technologies: ["Laravel", "Vue.Js", "Microservices", "Mysql", "AWS", "Runcloud"],
        points: [
            "Utilized expertise in Laravel PHP, Vue.js, and MySQL to make significant contributions to the development of an ERP system consisting of PMO, CRM, BC, and HRMS modules.",
            "Deployed web systems on AWS EC2 and DigitalOcean droplets, ensuring high availability, scalability, and fault tolerance for clients.",
            "Effectively utilize Runcloud to efficiently manage the application and server, ensuring optimal performance, security, and smooth operations.",
            "Designed and developed a dashboard that effectively displays sales and project data using Laravel, MySQL, and Vue.js.",
            "Led a team of developers in developing and maintaining the system and utilizing Jira for streamlined project management and efficient workflow to ensure timely delivery of high-quality software."
        ]
    },
    {
        title: "Technical Team Lead",
        company: "PRIMALCOM ENTEPRISE SDN BHD",
        dates: "Sept 2020 - Apr 2021",
        technologies: ["Python", "Node.Js", "Flask", "MongoDB", "AWS"],
        points: [
            "Led the team in system development and technical support, ensuring seamless operation and high customer satisfaction.",
            "Developed and maintained Rest API using Node.js with PM2 process manager.",
            "Collected raw sales and inventory data, conducted data cleaning, and analysis using Python.",
            "Developed modules for an e-commerce fulfillment system using Python Flask microservice for backend, HTML/CSS/Javascript for frontend, and MongoDB and MYSQL for database.",
            "Deployed web system on AWS servers using Nginx for optimal performance and high availability."
        ]
    },
    {
        title: "Analyst Programmer",
        company: "SERBA DINAMIK IT SOLUTIONS SDN BHD",
        dates: "Apr 2020 - Sept 2020",
        technologies: ["Laravel", "Linux", "MySQL", "IPFS", "Node.Js"],
        points: [
            "Worked with Laravel in the process of writing the code, ultimately resulting in a completed program.",
            "Developed mobile applications within 3 months using an ionic framework.",
            "Implemented the interplanetary file system(IPFS) for secure file storage in the system.",
            "Pickup node.js and develop web API using node.js within 3 months.",
            "Deployed the web system on the server using Nginx and apache with Ubuntu."
        ]
    },
    {
        title: "Web Developer Intern",
        company: "COOL CODE SDN BHD",
        dates: "Sept 2018 - Jan 2019",
        technologies: ["Laravel", "Vue.js", "MySQL", "WordPress"],
        points: [
            "Developed a web system using Laravel as the backend with Blade, Sass, and Vue.js for the frontend, and MySQL as the database.",
            "Created and validated a software requirements specification and performed user acceptance testing.",
            "Revamp and manage the company website using Wordpress."
        ]
    }
];

 export const educationItems : EducationItem[] = [
    {
      title: "Bachelor of Computer Science (Software Engineering)",
      institution: "Universiti Teknologi Malaysia",
      dates: "2016 - 2020",
      description: "Major in Software Engineering"
    },
    {
      title: "Diploma in Information Technology (Programming)",
      institution: "Politeknik Balik Pulau",
      dates: "2013 - 2016",
      description: "Major in Programming"
    }
  ];

export const  skillItem : SkillItem = {
    languages : ["JavaScript", "TypeScript", "PHP", "Python"],
    technologies : ["Angular", "Vue.Js", "Node.js", "Nest.Js", "PostgreSQL", "Docker","Laravel"]
}


  export const certificateItems: CertificateItem[] = [
    {
      title: "AWS Certified Cloud Practitioner",
      provider: "Amazon Web Services (AWS)",
      dates: "2023 - 2026",
      link: "https://www.credly.com/badges/c780afc4-183e-4ef7-8bb3-a7bd9c77da06/linked_in_profile"
    }
  ];