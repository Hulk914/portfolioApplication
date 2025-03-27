export interface Home {
    name: string;
    experience: string;
    resumePath: string;
    designation: string;
    languages: iconInterface[];
    frameworks: iconInterface[];
    tools: iconInterface[];
}

export interface iconInterface {
    image: string;
    text: string;
}

export interface CompanyDetails {
    companyName: string;
    iconArray: iconInterface[];
    aboutProd: string[];
}

export interface CompanyTech {
    [key: string]: CompanyDetails;
};

export interface Experience {
    companyTech: CompanyTech;
}

export interface CheckoutLink {
    label: string;
    link: string;
}

export interface Contact {
    experience: string;
    companyList: string[];
    phone: string;
    email: string;
    checkout: CheckoutLink[];
}

interface HobbyLink {
    title: string;
    link: string;
}

export interface Hobby {
    imageSrc: string;
    title: string;
    hobbyLinks: HobbyLink[];
}

export interface Hobbies {
    hobbiesArray: Hobby[];
}

export interface Portfolio {
    home: Home;
    experience: Experience;
    contact: Contact;
    hobbies: Hobbies;
    about: string[];
}

export interface PortfolioData {
    [key: string]: Portfolio;
}

export const portfolioData: PortfolioData = {
    ayush: {
        home: {
            name: 'Ayush Thakur',
            experience: '8+',
            resumePath: '/assets/Ayush_Angular_8yrs.pdf',
            designation: 'Senior Manager',
            languages: [
                { image: 'assets/js.png', text: 'javascript' },
                { image: 'assets/html5.png', text: 'html5' },
                { image: 'assets/css3.png', text: 'css3' },
                { image: 'assets/ts.svg', text: 'typescript' },
                { image: 'assets/java.png', text: 'java' },
                { image: 'assets/node.png', text: 'node.js' }
            ],
            frameworks: [
                { image: 'assets/angular.png', text: 'angular' },
                { image: 'assets/bootstrap.png', text: 'bootstrap' },
                { image: 'assets/react.png', text: 'react' },
                { image: 'assets/express.png', text: 'expressJS' },
                { image: 'assets/ngrx.png', text: 'NgRx' },
                { image: 'assets/angularB.png', text: 'material' }
            ],
            tools: [
                { image: 'assets/vscode.png', text: 'vs code' },
                { image: 'assets/docker.png', text: 'docker' },
                { image: 'assets/npm.png', text: 'npm' },
                { image: 'assets/git.png', text: 'git' },
                { image: 'assets/postman.png', text: 'postman' },
                // { image: 'assets/chromeD.png', text: 'dev tools' },
                { image: 'assets/jira.png', text: 'jira' },
                // { image: 'assets/eclipse.png', text: 'eclipse' }
            ]
        },
        experience: {
            companyTech: {
                fis: {
                    companyName: 'FIS / Zenmonics (Senior Software Engineer)',
                    iconArray: [
                        { image: 'assets/angular.png', text: 'angular' },
                        { image: 'assets/js.png', text: 'javascript' },
                        { image: 'assets/html5.png', text: 'html5' },
                        { image: 'assets/css3.png', text: 'css3' },
                        { image: 'assets/angularB.png', text: 'material' },
                        { image: 'assets/vscode.png', text: 'vs code' },
                        { image: 'assets/npm.png', text: 'npm' },
                        { image: 'assets/git.png', text: 'git' },
                        { image: 'assets/chromeD.png', text: 'dev tools' },
                        { image: 'assets/bitbucket.png', text: 'bitbucket' },
                        { image: 'assets/jira.png', text: 'jira' },
                        { image: 'assets/vstudio.png', text: 'visual studio' },
                        { image: 'assets/ts.svg', text: 'typescript' },
                        { image: 'assets/postman.png', text: 'postman' },
                        { image: 'assets/java.png', text: 'java' }
                    ],
                    aboutProd: [
                        'Worked on large scale (1+ million users), cross platform banking application',
                        'Provided innovative solution for generic scroll & focus to error fields in large forms',
                        'Generic code for crud operations and view pages of varied form structures, with solution to overcome angular material data table slowness for large records in absence of server side pagination',
                        'I was part of the team that converted complete legacy dot net application to angular in minimal time',
                        'Worked on session handling using ng-idle',
                        'Created generic directive to throttle click events in order to prevent multiple payments and to solve similar issues',
                        'Handled nested api calls through rxjs',
                        'Created maintainable and optimized code structure to handle complex scenarios involving lot of components interactions'
                    ]
                },
                zycus: {
                    companyName: 'Zycus (Associate Tech Lead)',
                    iconArray: [
                        { image: 'assets/angular.png', text: 'angular' },
                        { image: 'assets/js.png', text: 'javascript' },
                        { image: 'assets/html5.png', text: 'html5' },
                        { image: 'assets/css3.png', text: 'css3' },
                        { image: 'assets/node.png', text: 'node.js' },
                        { image: 'assets/vscode.png', text: 'vs code' },
                        { image: 'assets/npm.png', text: 'npm' },
                        { image: 'assets/git.png', text: 'git' },
                        { image: 'assets/chromeD.png', text: 'dev tools' },
                        { image: 'assets/bitbucket.png', text: 'bitbucket' },
                        { image: 'assets/jira.png', text: 'jira' },
                        { image: 'assets/vstudio.png', text: 'visual studio' },
                        { image: 'assets/express.png', text: 'expressJS' },
                        { image: 'assets/bootstrap.png', text: 'bootstrap' },
                        { image: 'assets/ts.svg', text: 'typescript' },
                        { image: 'assets/postman.png', text: 'postman' }
                    ],
                    aboutProd: [
                        'Created large scale procurement application suite which is in direct competition with SAP',
                        'Minimal 3rd party modules used. Worked on creating common reusable components that could be used across the different applications as a submodule to provide consistent features and UI',
                        'The common components greatly decreased the development time and reduced the number of issues. Also, since there was no 3rd party dependency, optimization and enhancements became much easier',
                        'Came up with new benchmarks and quality improvement techniques to improve the standard of coding. reviewed code and merged them',
                        'Trained and managed colleagues and took complete ownership of not only my product but the complete product suite by unblocking all technical issues related to Angular. Also provided innovative solutions to complex problems',
                        'Created ng-template based reusable module that could be used to generate pages by providing a meta data object',
                        'worked on creation of dynamic forms based on api configs'
                    ]
                },
                infySenior: {
                    companyName: 'Infosys (Senior Systems Engineer)',
                    iconArray: [
                        { image: 'assets/java.png', text: 'java' },
                        { image: 'assets/eclipse.png', text: 'eclipse' },
                        { image: 'assets/postman.png', text: 'postman' },
                        { image: 'assets/vscode.png', text: 'vs code' },
                        { image: 'assets/vstudio.png', text: 'visual studio' },
                        { image: 'assets/cplus.png', text: 'c++' },
                        { image: 'assets/python.png', text: 'python' },
                        { image: 'assets/docker.png', text: 'docker' },
                        { image: 'assets/kube.png', text: 'kubernetes' },
                        { image: 'assets/npm.png', text: 'npm' },
                        { image: 'assets/git.png', text: 'git' },
                        { image: 'assets/chromeD.png', text: 'dev tools' },
                        { image: 'assets/jira.png', text: 'jira' },
                        { image: 'assets/bootstrap.png', text: 'bootstrap' },
                        { image: 'assets/js.png', text: 'javascript' },
                        { image: 'assets/html5.png', text: 'html5' },
                        { image: 'assets/css3.png', text: 'css3' },
                        { image: 'assets/ts.svg', text: 'typescript' },
                        { image: 'assets/maven.png', text: 'maven' },
                        { image: 'assets/jersey.png', text: 'jersey' }
                    ],
                    aboutProd: [
                        'Worked on micro service based application in the telecom domain (for client - Sonus, now Ribbon Communications) that enabled client to view related metrics and take actions on the same',
                        'The micro services were setup using docker containers and orchestration was done using kubernetes',
                        'Worked on UI which was created using angular along with ngx-admin with our custom styles applied',
                        'Also worked on Java side api handling and logging throughout the application',
                        'Worked on python as well in order to consume ini files and perform related operations on postgresql database through procedure calls',
                        'Worked with primeNG angular for common components like data tables etc. Also due to version compatibility issues modified primeNG components form git to solve issues with the library itself',
                        'Worked on generic client side pagination logic that worked in sync with server side pagination'
                    ]
                },
                infySystem: {
                    companyName: 'Infosys (Systems Engineer)',
                    iconArray: [
                        { image: 'assets/vstudio.png', text: 'visual studio' },
                        { image: 'assets/cplus.png', text: 'c++' },
                        { image: 'assets/c.png', text: 'c' },
                        { image: 'assets/wire.png', text: 'wireshark' },
                        { image: 'assets/perf.png', text: 'perforce' },
                        { image: 'assets/jira.png', text: 'jira' }
                    ],
                    aboutProd: [
                        'Replaced the hardware security card used by the device of the telecommunications client (Sonus, now Ribbon Communications) with an open source FreeBSD license-based library (LibSRTP).',
                        'This removed the cost of external physical card previously used for encrypting RTP calls, while leveraging benefits of open source software',
                        'Worked with the actual hardware and tracked packets at each layer using wireshark'
                    ]
                },
                infyTrainee: {
                    companyName: 'Infosys (Intern)',
                    iconArray: [
                        { image: 'assets/js.png', text: 'javascript' },
                        { image: 'assets/html5.png', text: 'html5' },
                        { image: 'assets/css3.png', text: 'css3' },
                        { image: 'assets/jquery.png', text: 'jquery' },
                        { image: 'assets/jersey.png', text: 'jersey' },
                        { image: 'assets/java.png', text: 'java' },
                        { image: 'assets/cplus.png', text: 'c++' }
                    ],
                    aboutProd: [
                        'Created responsive web application which would enable the administrator or manager to monitor the processes running on other systems in the network',
                        'Also, the person logged in to the application would have the power to start new processes or end running processes in the systems connected to the network.',
                        'On completing standard training with core stream as java and basic training in python I was given extra training in C/C++ in the networking domain. In Linux based environment using putty we created a transaction manager that utilized the concept of threads to use a single resource to transport messages between clients and server. Proper logging mechanisms were also created to handle unexpected errors.'
                    ]
                },
                ttl: {
                    companyName: 'Tata Technologies Limited (Intern)',
                    iconArray: [
                        { image: 'assets/perl.png', text: 'perl' }
                    ],
                    aboutProd: [
                        'Worked on creating perl based application to parse multiple files and render them as graphs and tables using perl cgi',
                    ]
                },
            }
        },
        contact: {
            experience: '8+',
            companyList: [
                'FIS (Fidelity)',
                'Zenmonics',
                'Zycus',
                'Infosys'
            ],
            phone: '(+91) 9650218723',
            email: 'ayushthakur2009@gmail.com',
            checkout: [
                { label: 'LinkedIn', link: 'https://www.linkedin.com/in/ayush-thakur/' },
                { label: 'My Angular Tutorials', link: 'https://youtube.com/playlist?list=PLZdPgkRI3ruhsIqV7Cr5hxjAyNirV9Jr0' },
                { label: 'Rock Band Page', link: 'https://www.instagram.com/bedrock.bottom.in/?hl=en' },
                { label: 'Medium (Tech Blogs)', link: 'https://medium.com/@just-another-developer' }
            ]
        },
        hobbies: {
            hobbiesArray: [
                {
                    imageSrc: 'assets/GuitarDP.jpg',
                    title: 'Music (Lead Guitarist)',
                    hobbyLinks: [
                        {
                            title: 'Rock Band Page',
                            link: 'https://www.instagram.com/bedrock.bottom.in/?hl=en'
                        }
                    ]
                },
                {
                    imageSrc: 'assets/ooo.png',
                    title: 'My Youtube Channel',
                    hobbyLinks: [
                        {
                            title: 'Angular Tutorials',
                            link: 'https://www.youtube.com/playlist?list=PLZdPgkRI3ruiOnkAoA7UGi_ueg4PuB8qB'
                        },
                        {
                            title: 'Travel',
                            link: 'https://www.youtube.com/playlist?list=PLZdPgkRI3ruidXU2BVr9WU0yoUSphK-w9'
                        },
                        {
                            title: 'Tech Tutorials',
                            link: 'https://www.youtube.com/playlist?list=PLZdPgkRI3rugThm4kEEZJpwFPVm9o0AA-'
                        }
                    ]
                },
                {
                    imageSrc: 'assets/bike.jpg',
                    title: 'Biker, Coder, Musician',
                    hobbyLinks: [
                        {
                            title: 'Medium Tech Blogs',
                            link: 'https://medium.com/@just-another-developer'
                        },
                        {
                            title: 'My Instagram Page',
                            link: 'https://www.instagram.com/_ayush_protean_/'
                        },
                        {
                            title: 'Zaroha Instagram Page',
                            link: 'https://www.instagram.com/zaroha_adventures/'
                        }
                    ]
                },
                {
                    imageSrc: 'assets/jenny.jpg',
                    title: 'Photography',
                    hobbyLinks: [
                        {
                            title: 'Shutterstock Profile',
                            link: 'https://www.shutterstock.com/g/TravelingHulk'
                        },
                        {
                            title: 'My Instagram Page',
                            link: 'https://www.instagram.com/_ayush_protean_/'
                        }
                    ]
                }
            ]
        },
        about: [
            'Angular version 19',
            'Github : https://github.com/Hulk914/portfolioApplication',
            'Responsive Web app - Tablet and mobile compatible',
            'Coding done using DRY principle with common components and services',
            'SCSS variables used to maintain consistent color scheme',
            'Continuous Deployment on every git push',
            'Standalone components used',
            'configurable & reusable components created',
            'deployed on netlify',
            'Bootstrap used for css',
            'Future Enhancements : Theme, SSR, Bundle compression, dockerization',
        ]
    },
    shreya: {
        home: {
            name: 'Shreya Kumari',
            experience: '5+',
            resumePath: '/assets/Shreya_Kumari_Angular_5yrs.pdf',
            designation: 'Manager',
            languages: [
                { image: 'assets/js.png', text: 'javascript' },
                { image: 'assets/html5.png', text: 'html5' },
                { image: 'assets/css3.png', text: 'css3' },
                { image: 'assets/ts.svg', text: 'typescript' },
                { image: 'assets/java.png', text: 'java' },
                { image: 'assets/node.png', text: 'node.js' }
            ],
            frameworks: [
                { image: 'assets/angular.png', text: 'angular' },
                { image: 'assets/bootstrap.png', text: 'bootstrap' },
                { image: 'assets/react.png', text: 'react' },
                { image: 'assets/express.png', text: 'expressJS' },
                { image: 'assets/ngrx.png', text: 'NgRx' },
                { image: 'assets/angularB.png', text: 'material' }
            ],
            tools: [
                { image: 'assets/vscode.png', text: 'vs code' },
                { image: 'assets/npm.png', text: 'npm' },
                { image: 'assets/git.png', text: 'git' },
                { image: 'assets/postman.png', text: 'postman' },
                // { image: 'assets/chromeD.png', text: 'dev tools' },
                { image: 'assets/jira.png', text: 'jira' },
                { image: 'assets/eclipse.png', text: 'eclipse' }
            ]
        },
        experience: {
            companyTech: {
                ibm: {
                    companyName: 'IBM (APPLICATION DEVELOPER)',
                    iconArray: [
                        { image: 'assets/angular.png', text: 'angular' },
                        { image: 'assets/js.png', text: 'javascript' },
                        { image: 'assets/html5.png', text: 'html5' },
                        { image: 'assets/css3.png', text: 'css3' },
                        { image: 'assets/angularB.png', text: 'material' },
                        { image: 'assets/vscode.png', text: 'vs code' },
                        { image: 'assets/npm.png', text: 'npm' },
                        { image: 'assets/git.png', text: 'git' },
                        { image: 'assets/chromeD.png', text: 'dev tools' },
                        { image: 'assets/bitbucket.png', text: 'bitbucket' },
                        { image: 'assets/jira.png', text: 'jira' },
                        { image: 'assets/vstudio.png', text: 'visual studio' },
                        { image: 'assets/ts.svg', text: 'typescript' },
                        { image: 'assets/postman.png', text: 'postman' },
                        { image: 'assets/java.png', text: 'java' }
                    ],
                    aboutProd: [
                        `Worked on IBM's R2R (Record to Report) project, focusing on finance and accounting management processes.`,
                        'Worked on new features as well as maintenance & enhancement tasks',
                        'Refactored code for quality improvements and addressed accessibility issues using IBM Equal Access Accessibility Checker.'
                    ]
                },
                morgan: {
                    companyName: 'Morgan Stanley (MANAGER)',
                    iconArray: [
                        { image: 'assets/angular.png', text: 'angular' },
                        { image: 'assets/ngrx.png', text: 'NgRx' },
                        { image: 'assets/js.png', text: 'javascript' },
                        { image: 'assets/html5.png', text: 'html5' },
                        { image: 'assets/css3.png', text: 'css3' },
                        { image: 'assets/angularB.png', text: 'material' },
                        { image: 'assets/vscode.png', text: 'vs code' },
                        { image: 'assets/npm.png', text: 'npm' },
                        { image: 'assets/git.png', text: 'git' },
                        { image: 'assets/chromeD.png', text: 'dev tools' },
                        { image: 'assets/bitbucket.png', text: 'bitbucket' },
                        { image: 'assets/jira.png', text: 'jira' },
                        { image: 'assets/vstudio.png', text: 'visual studio' },
                        { image: 'assets/ts.svg', text: 'typescript' },
                        { image: 'assets/postman.png', text: 'postman' },
                        { image: 'assets/java.png', text: 'java' }
                    ],
                    aboutProd: [
                        'Worked as an individual contributor in various Banking Domain applications',
                        'Lead the Angular version update initiatives by transitioning applications from versions <10 to 16.',
                        'Managed application requirements, implemented new features, and coordinated with the Release Management Team for smooth production releases.',
                        'Mentored interns and new hires',
                        'Conducted interviews and received awards like the Global Excellence Award and Employee Network Award.'
                    ]
                }
            }
        },
        contact: {
            experience: '5+',
            companyList: [
                'Morgan Stanley',
                'IBM'
            ],
            phone: '(+91) 7092401980',
            email: 'shreyapuja777@gmail.com',
            checkout: [
                { label: 'LinkedIn', link: 'https://www.linkedin.com/in/shreya-kumari-628287124/' },
                { label: 'Instagram', link: 'https://www.instagram.com/shreyapuja777/' },
            ]
        },
        hobbies: {
            hobbiesArray: [
                {
                    imageSrc: 'assets/abstract.png',
                    title: 'Interests',
                    hobbyLinks: [
                        {
                            title: 'Travelling',
                            link: 'https://www.instagram.com/shreyapuja777/'
                        },
                        {
                            title: 'Dancing',
                            link: 'https://www.instagram.com/shreyapuja777/'
                        },
                        {
                            title: 'Modelling',
                            link: 'https://www.instagram.com/shreyapuja777/'
                        },
                        {
                            title: 'Cooking',
                            link: 'https://www.instagram.com/shreyapuja777/'
                        },
                        {
                            title: 'Music',
                            link: 'https://www.instagram.com/shreyapuja777/'
                        },
                    ]
                },
            ],
        },
        about: [
            'Angular version 19',
            'Github : https://github.com/Hulk914/portfolioApplication',
            'Responsive Web app - Tablet and mobile compatible',
            'Coding done using DRY principle with common components and services',
            'SCSS variables used to maintain consistent color scheme',
            'Continuous Deployment on every git push',
            'Standalone components used',
            'configurable & reusable components created',
            'deployed on netlify',
            'Bootstrap used for css',
            'Future Enhancements : Theme, SSR, Bundle compression, dockerization',
        ]
    }
};