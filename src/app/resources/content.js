import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Ariel',
    lastName:  'Ramirez',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full Stack developer',
    avatar:    '/images/arielfoto.jpg',
    location:  'America/Lima',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['Spanish', 'English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
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
    subline: <>I'm Ariel, an Argentine <InlineCode>Freelancer</InlineCode> software developer with over 8 years of experience in full-stack development. <br /> Lets create valuable software.</>
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
        description: <>8 years of experience in Software Development, including team
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
                images: [ // optional: leave the array empty if you don't want to display images
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
                    <> Development of a custom web application for survey tracking and configuration
                        using Laravel, JavaScript, and MySQL.
                    </>,
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
                    <> Development of a custom web application for survey tracking and configuration
                        using Laravel, JavaScript, and MySQL.
                    </>,
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
                    <> Development of a custom web application for survey tracking and configuration
                        using Laravel, JavaScript, and MySQL.
                    </>,
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
                title: 'PHP - Codeigniter - Laravel',
                description: <>Experienced in developing scalable web applications, handling backend logic, implementing modern design patterns, and integrating APIs for seamless data exchange and third-party service integration.</>,
                images: []
            },
            {
                title: 'Linux Administration',
                description: <>Proficient in Linux server management with over 5 years of experience using Debian and Ubuntu. 
                    Skilled in configuring, maintaining, and troubleshooting server environments.</>,
                images: []
            },
            {
                title: 'Javascript - React.js - Tailwinds - JQuery - Bootstrap',
                description: <>Experienced in building responsive and dynamic web interfaces, leveraging modern JavaScript frameworks and libraries for front-end development.</>,
                images: []
            },
            {
                title: 'PostgreSQL - MySQL - MongoDB',
                description: <>Capable of database administration, query optimization, and configuration for relational and NoSQL databases.</>,
                images: []
            },
            {
                title: 'Node.js - Express',
                description: <>Skilled in developing RESTful APIs from scratch and maintaining existing back-end services for efficient data handling.</>,
                images: []
            }
            ,
            {
                title: 'Next.js - TypeScript',
                description: <>Proficient in developing modern web applications using Next.js and TypeScript, integrating tools like Supabase and Once UI for robust, next-generation solutions.Proficient in developing modern web applications using Next.js and TypeScript, i
                    ntegrating tools like Supabase and Once UI for robust, next-generation solutions.</>,
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