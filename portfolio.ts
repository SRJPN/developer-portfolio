import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Sooraj Parameswaran',
  title: "Hi all, I'm Sooraj Parameswaran",
  description:
    "Senior Software Engineer with over six years of experience leading teams and developing full-stack software applications. Proficient in Event-driven architectures, Microservices architecture, Distributed systems, and Serverless paradigms. Demonstrated success in providing technical solutions to multinational enterprise clients and creating rapid prototypes."
};

export const openSource = {
  githubUserName: 'srjpn',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://srjpn.github.io/',
  linkedin: 'https://www.linkedin.com/in/srjpn/',
  github: 'https://github.com/srjpn',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Backend Development',
      lottieAnimationFile: '/lottie/skills/backend.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Developing RESTful APIs using ASP.Net Core'),
        emoji('⚡ Crafting Application Services with Node.js and Express'),
        emoji('⚡ Constructing RESTful APIs utilizing Django & Django REST Framework'),
        emoji('⚡ Designing Serverless applications using AWS Lambda & API Gateway'),
      ],
      softwareSkills: [
        {
          skillName: 'dotnetcore',
          iconifyTag: 'devicon:dotnetcore',
        },
        {
          skillName: 'NodeJs',
          iconifyTag: 'logos:nodejs',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },
        {
          skillName: 'AWS-Lambda',
          iconifyTag: 'logos:aws-lambda',
        },
        {
          skillName: 'GraphQL',
          iconifyTag: 'logos:graphql',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Elixir',
          iconifyTag: 'devicon:elixir-wordmark',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'AWS-Cognito',
          iconifyTag: 'logos:aws-cognito',
        },
        {
          skillName: 'AWS-CloudFormation',
          iconifyTag: 'logos:aws-cloudformation',
        },
        {
          skillName: 'AWS-Fargate',
          iconifyTag: 'logos:aws-fargate',
        },
        {
          skillName: 'AWS-Lambda',
          iconifyTag: 'logos:aws-lambda',
        },
        {
          skillName: 'AWS-SQS',
          iconifyTag: 'logos:aws-sqs',
        },
        {
          skillName: 'AWS-SNS',
          iconifyTag: 'logos:aws-sns',
        },

        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
      ],
    },
    {
      title: 'Fullstack / Frontend Development',
      lottieAnimationFile: '/lottie/skills/frontend.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Building dynamic user interfaces with React'),
        emoji('⚡ Creating robust web applications using Angular'),
        emoji('⚡ Developing server-side rendered applications with Next.js'),
        emoji('⚡ Crafting visually appealing and responsive designs with CSS'),

      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'React',
          iconifyTag: 'logos:react',
        },
        {
          skillName: 'Angular',
          iconifyTag: 'devicon:angular',
        },
        {
          skillName: 'NextJs',
          iconifyTag: 'logos:nextjs',
        },
        {
          skillName: 'CSS',
          iconifyTag: 'logos:css-3',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Backend',
    progressPercentage: '90',
  },
  {
    Stack: 'Programming',
    progressPercentage: '80',
  },
  {
    Stack: 'Cloud Infra', 
    progressPercentage: '60',
  },
  {
    Stack: 'Frontend', 
    progressPercentage: '40',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Alagappa University, Karaikudi, Tamil Nadu',
    course: 'Master of Business Administration (MBA)',
    duration: '2018 - 2020',
    desc: 'Specialization in Project Management',
  },
  {
    schoolName: 'Alagappa University, Karaikudi, Tamil Nadu',
    course: 'Bachelor of Computer Applications (BCA)',
    duration: '2016 - 2018',
    desc: 'Computer Applications',
  },
  {
    schoolName: 'Govt. Polytechnic College, Chelakkara, Kerala',
    course: 'Diploma in Engineering',
    duration: '2012 - 2015',
    desc: 'Electronics Engineering',
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Deserve Labs',
    companyLogo: '/img/icons/common/deserve-logo.png',
    date: 'July 2022 – Present',
    desc: 'Spearheaded low-level design and implementation across various facets of the self-processing platform. Designed and developed customer rewards systems for SaaS - Self processing platform (Credit card as a service). Single-handedly managed real-time reward processing for each transaction based on custom logic for each tenant.',
  },
  {
    role: 'Senior Consultant',
    company: 'Thoughtworks Technologies',
    companyLogo: '/img/icons/common/Thoughtworks.jpeg',
    date: 'July 2017 – July 2022',
    desc: 'Developed custom software solutions for clients and actively participated in the software development life cycle. Mentored and guided graduate developers and assisted in deciding software infrastructure. Key Project Contributions:',
    descBullets: [
      "Database Developer - Product Catalogue: Modelled databases, optimised queries, and improved query performance by over 50%.",
      "Fullstack Developer - Product Catalogue: Developed a new application reducing spare part search time by 70% for dealers/customers.",
      "Full Stack / Lead Developer - Exhibition Organisers: Built a new platform to manage over 400 show engagements with global coordination.",
    ],
  },
  {
    role: 'STEP Intern',
    company: 'Thoughtworks Technologies',
    companyLogo: '/img/icons/common/Thoughtworks.jpeg',
    date: 'June 2015 – July 2017',
    desc: 'Contributed to the development of a Ticket Booking Application handling high request loads and maintained an admin portal for shows. Built scalable architecture for an instantaneous load of over 10k requests. Developed applications for iOS and Android devices to provide a consistent user experience.',
  }
];

export const projects: ProjectType[] = [];

export const feedbacks: FeedbackType[] = [
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Sooraj Parameswaran',
  description:
    'A passionate Full Stack Web Developer.',
  author: 'Sooraj Parameswaran',
  image: 'https://avatars.githubusercontent.com/u/15261233?v=4',
  // url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Sooraj',
    'Sooraj Parameswaran',
    '@SRJPN',
    'SRJPN',
    'srjpn',
    'Portfolio',
    'Sooraj Portfolio ',
    'Sooraj Parameswaran Portfolio',
  ],
};
