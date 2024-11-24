import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Ariel',
    lastName: 'Ramirez',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Full Stack developer',
    avatar: '/images/arielfoto.jpg',
    location: 'America/Lima',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['Spanish', 'English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/once-ui-system/nextjs-starter',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/company/once-ui/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:ariel.liquid@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website${person.role}`,
    headline: <>Full Stack Developer</>,
    subline: <>Hi, I'm Ariel, a Software Developer specializing in Linux, PHP (Laravel, CodeIgniter), PostgreSQL (PostGIS), and modern JavaScript (ReactJS, NodeJS). <br /> Explore my portfolio and let’s bring your next project to life.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting+with+me&details=Click+the+link+to+join+the+call+with+me+at+ariel.liquid@gmail.com&location=https://meet.google.com/aqu-egxk-jrx&dates=20241123T120000Z/20241123T123000Z'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Experienced in Software Development, including team
            leadership and project planning. Began as a Junior programmer at R2 Software, actively participating in backend
            development and progressively handling more advanced projects, building a robust skill set. Specialized in PHP,
            CodeIgniter, Laravel, JavaScript, ReactJS, PostgreSQL with PostGIS, and Linux server administration, with solid experience in web
            development and geospatial data.
        </>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Freelance',
                timeframe: 'Mar. 2024 - Oct. 2024',
                role: 'Full Stack developer',
                achievements: [
                    <> Custom web application for survey tracking, response processing, data analysis, indicator calculation, and reporting.
                    </>,
                    <> Configured and deployed the infrastructure on Linode with Debian and Apache.
                        Implemented HTTPS, configured Apache and domain settings, applied security configurations, and set up the MySQL database.
                    </>
                ],
                images: [ 
                    {
                        src: '/images/projects/safe_travel/STNPS.jpg',
                        alt: 'Survey Tracking',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/safe_travel/STLine.jpg',
                        alt: 'Survey Tracking',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Freelance',
                timeframe: 'Sep. 2024 - Nov. 2024',
                role: 'Full Stack developer',
                achievements: [
                    <>Development of a web scraper for Zoho Books API integration in Laravel and MySQL.</>,
                    <> Login and web scraping using Laravel HTTP and cookies. HTML parsing and data extraction.
                        Integration and synchronization with ZOHO API. Implementation of OAuth 2.0 and refresh token.
                    </>
                ],
                images: []
            },
            {
                company: 'Freelance',
                timeframe: 'Sep. 2024 - Nov. 2024',
                role: 'Full Stack developer',
                achievements: [
                    <> Customized a professional portfolio using Next.js and TypeScript, starting from a template.
                    </>,
                    <> Configured and deployed the infrastructure on AWS LightSail, implemented HTTPS, and set up Apache reverse proxy.
                        Integrated GitHub Actions for continuous deployment and configured PM2 to ensure the app runs smoothly and continuously.
                    </>,
                ],
                images: []
            },
            {
                company: 'R2Software',
                timeframe: 'May. 2016 - Oct. 2023',
                role: 'Full Stack developer',
                achievements: [
                    <>
                        Development of a Web Application and Android Application for National Crop Survey and Agricultural Yield Estimation.
                        Collaborated as part of a multidisciplinary team, contributing to both frontend and backend development.
                    </>,
                    <>
                        Utilized PHP, CodeIgniter, PostgreSQL, and RESTful APIs for synchronization with the mobile app. Developed Python scripts for geometry package processing.
                    </>
                ],
                images: [
                    {
                        src: '/images/projects/project-01/EMAHOME.jpg',
                        alt: 'Survey Tracking',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/EMASELECUNITS.jpg',
                        alt: 'Survey Tracking',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/EMAEDITGEOM.jpg',
                        alt: 'Survey Tracking',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'R2Software',
                timeframe: 'May. 2016 - Oct. 2023',
                role: 'Full Stack developer',
                achievements: [
                    <>
                        Development of a Web Application for Early Detection of Oil Well Alerts.
                        Collaborated as part of a multidisciplinary team, contributing to both frontend and backend development.
                    </>,
                    <>
                        Utilized ReactJS for the frontend, and PHP, CodeIgniter, and PostgreSQL for data processing.
                        Integrated Highcharts library for custom graphs to meet the specific requirements.
                    </>
                ],
                images: [
                    {
                        src: '/images/projects/project-01/INFOHOME.jpg',
                        alt: 'Survey Tracking',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/INFOCUSTOM.jpg',
                        alt: 'Survey Tracking',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/INFOWELL.jpg',
                        alt: 'Survey Tracking',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/INFOTABLE.jpg',
                        alt: 'Survey Tracking',
                        width: 16,
                        height: 9
                    }

                ]
            },
            {
                company: 'R2Software',
                timeframe: 'May. 2016 - Oct. 2023',
                role: 'Full Stack developer',
                achievements: [
                    <>
                        Development of a Web Application that Allows the Creation of Custom Forms and Survey Routes.
                        Collaborated as part of a multidisciplinary team, contributing to both frontend and backend development.
                    </>,
                    <>
                        Utilized ReactJS for the frontend, and PHP, CodeIgniter, and PostgreSQL for backend processing. 
                        Developed a RESTful API for managing all entities.
                    </>
                ],
                images: [
                    {
                        src: '/images/projects/project-01/ElaineFORM1.jpg',
                        alt: 'Survey Tracking',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/ElaineFORM2.jpg',
                        alt: 'Survey Tracking',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/ElaineRUT.jpg',
                        alt: 'Survey Tracking',
                        width: 16,
                        height: 9
                    }

                ]
            },
        ]
    },
    studies: {
        display: true,
        title: 'Studies',
        institutions: [
            {
                name: 'Universidad Tecnologia Nacional. UTN',
                description: <>Technical Degree in Applied Informatics</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'PHP - CodeIgniter - Laravel',
                description: <>Extensive experience in developing scalable and robust web applications, implementing MVC design patterns, and integrating RESTful APIs for seamless data interaction. Adept at maintaining and enhancing legacy systems while modernizing codebases.</>,
                images: []
            },
            {
                title: 'Linux Administration',
                description: <>Expertise in managing Linux servers, particularly Debian and Ubuntu, with over 5 years of experience. Skilled in server configuration, performance optimization, troubleshooting, and ensuring secure, reliable deployment environments.</>,
                images: []
            },
            {
                title: 'JavaScript - React.js - Tailwind CSS - jQuery - Bootstrap',
                description: <>Proficient in building interactive, responsive web interfaces using modern JavaScript frameworks and libraries. Skilled in creating intuitive user experiences with a focus on design consistency and performance optimization.</>,
                images: []
            },
            {
                title: 'PostgreSQL - PostGIS - MySQL - MongoDB',
                description: <>Strong background in database administration and optimization for both relational and NoSQL databases. Specialized in geospatial data handling and analysis with PostGIS, including custom geometries and spatial queries.</>,
                images: []
            },
            {
                title: 'CI/CD - GitHub Actions',
                description: <>Experienced in implementing Continuous Integration and Continuous Deployment pipelines using GitHub Actions. </>,
                images: []
            },
            {
                title: 'Cloud Deployment - AWS Lightsail',
                description: <>Proficient in deploying and managing applications in AWS Lightsail, ensuring scalable and cost-effective cloud hosting solutions. Experienced in configuring servers, setting up domain names, and optimizing applications for production environments.</>,
                images: []
            },
            {
                title: 'Node.js - Express.js',
                description: <>Skilled in developing and maintaining RESTful APIs, focusing on efficient data handling and integration with frontend applications. Experienced in creating scalable backend services to support modern web architectures.</>,
                images: []
            },
            {
                title: 'Next.js - TypeScript',
                description: <>Proficient in building modern, full-stack web applications with Next.js and TypeScript. Experienced in integrating tools like Supabase and Once UI for scalable, feature-rich solutions tailored to business needs.</>,
                images: []
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };