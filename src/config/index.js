module.exports = {

    author: "Amer Din",
    siteTitle: "Amer's Portfolio",
    siteShortTitle: "Amer Din", // Used as logo text in header, footer, and splash screen
    siteDescription: "Software Engineering Student @ UT Dallas",
    siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: true, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/amerdin"
        },
        {
            name: "Github",
            url: "https://github.com/amertx"
        },
        {
            name: "Instagram",
            url: "https://instagram.com/amerdtx"
        },
        
        
    ],
  
    navLinks: {
        menu: [
            {
                name: "about me",
                url: "/#about",
            },

            {
                name: "skills",
                url: "/#interests",
            },

            {
                name: "projects",
                url: "/#projects",
            },
            {
                name: "resume",
                url: "/#resume",
            },
        
        ],
        button: {
            name: "contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
        {
            name: "Imprint",
            url: "/imprint"
        }
    ]
}