// 1. Dil çevirilerini bir nesne içinde saklayalım
const translations = {
    en: {
        
        projects_title: "My Projects",

        contact_title: "Contact",
    
        nav_projects: "Projects",
        nav_contact: "Contact",
        
        name: "Selin Pir",
        job_title: "Web Developer | Data Science",       
        nav_about: "About",
        about_title: "About Me",
        about_text: "Hello, I’m Selin Pir, 23 years old, and a Management Information Systems student at Pamukkale University. This website was created as a small window into myself and as a showcase for my projects.",
        about_text2: "If you'd like to see my work more closely, you can check out my projects or contact me. ",

        download_cv:"Download CV",
        experience_section_title: "My Experience",
        skills_title: "Skills",
        footer_text: "© 2025 | All rights reserved.",
        use_navbar_text: "Use the Navbar",


        projects: [
            {
                title: "PetSas E-Commerce Site",
                date: "June - July 2025",
                description: "A B2C e-commerce application developed with .NET 8 and Blazor Server, simulating a real-world scenario with multi-role user management (admin, supplier, user).",
                technologies: [".NET 8", "Blazor Server", "MSSQL"],
                link: "https://github.com/selinpir/Petsas-B2B-E-ticaret"
            },
            {
                title: "Chess Tournaments Database",
                date: "January 2025",
                description: "Designed a relational database using SQL Server to manage player, match, and score information for chess tournaments.",
                technologies: ["SQL Server", "Database Design"],
                link: "https://github.com/selinpir/SQL-chess-tournament"
            },
            {
                title: "HR Management Database",
                date: "May 2024",
                description: "Developed a relational HR database with SQL Server to manage employee, department, salary, and leave information. Performed data analysis using various SQL queries.",
                technologies: ["SQL Server", "DDL/DML", "Normalization"],
                link: "https://github.com/selinpir/SQL-HumanResources-Database"
            },
            {
                title: "Series & Movie Blog",
                date: "February 2025",
                description: "A blog platform where users can view and comment on series and movie content, developed using ASP.NET.",
                technologies: ["ASP.NET", "MSSQL", "C#"],
                link: "https://github.com/selinpir/diziFilm_blog_w_asp.net"
            },
            {
                title: "Personal CV Blog",
                date: "January 2025",
                description: "A dynamic blog site designed to showcase my personal resume and projects.",
                technologies: ["ASP.NET", "MSSQL", "C#"],
                link: "https://github.com/selinpir/cv_blog_w_asp.net"
            },
            {
                title: "FiBu - Movie Finder App",
                date: "March 2024",
                description: "A movie finding and tracking application developed in C and C# languages.",
                technologies: ["C", "C#"],
                link: "https://github.com/selinpir/FiBu"
            },
            {
                title: "LEDAFLIX - Series Tracker",
                date: "May 2023",
                description: "A series tracking application featuring C#, SQL, and object-oriented programming principles.",
                technologies: ["C#", "MSSQL", "OOP"],
                link: "https://github.com/selinpir/ledaflix-dizi-takip-uygulamasi"
            }
        ]
    },

    tr: {
          
        projects_title: "Projelerim",

        contact_title: "İletişim",
     
        nav_projects: "Projelerim",
        nav_contact: "İletişim",


        name: "Selin Pir",
        job_title: "Web Geliştirme | Veri Bilimi",     
        nav_about: "Hakkımda",
        about_title: "Hakkımda",
        about_text: "Merhaba, ben Selin Pir. 23 yaşında, Pamukkale Üniversitesi Yönetim Bilişim Sistemleri öğrencisiyim. Bu site, kendimle ilgili ufak bir pencere ve projelerim için bir vitrin olması amacıyla geliştirildi.",
        about_text2: "Yaptığım işleri daha yakından görmek isterseniz projelerime göz atabilir veya benimle iletişime geçebilirsiniz. ",

        download_cv:"CV indir",
        experience_section_title: "Deneyimlerim",
        skills_title: "Becerilerim",
        footer_text: "© 2025 | Tüm hakları saklıdır.",
        use_navbar_text: "Navbar'ı Kullanın",

          projects: [
            {
                title: "PetSas E-Ticaret Sitesi",
                date: "Haziran - Temmuz 2025",
                description: ".NET 8 ve Blazor Server ile geliştirilmiş, çok rollü kullanıcı yönetimiyle (admin, tedarikçi, kullanıcı) gerçek bir e-ticaret senaryosunu simüle eden B2C pet ürünleri uygulaması.",
                technologies: [".NET 8", "Blazor Server", "MSSQL"],
                link: "https://github.com/selinpir/Petsas-B2B-E-ticaret"
            },
            {
                title: "Satranç Turnuvaları Veritabanı",
                date: "Ocak 2025",
                description: "SQL Server kullanılarak satranç turnuvalarının oyuncu, maç ve puan bilgilerini yöneten ilişkisel bir veritabanı tasarlandı.",
                technologies: ["SQL Server", "Veritabanı Tasarımı"],
                link: "https://github.com/selinpir/SQL-chess-tournament"
            },
            {
                title: "İnsan Kaynakları Veritabanı",
                date: "Mayıs 2024",
                description: "Çalışan, departman, maaş ve izin bilgilerinin yönetildiği ilişkisel bir İK veritabanı tasarladım. Veri analizi ve raporlama işlemleri için çeşitli SQL sorguları geliştirildi.",
                technologies: ["SQL Server", "DDL/DML", "Normalizasyon"],
                link: "https://github.com/selinpir/SQL-HumanResources-Database"
            },
            {
                title: "Dizi & Film Blog",
                date: "Şubat 2025",
                description: "Kullanıcıların dizi ve film içeriklerini görüntüleyip yorumlayabileceği bir blog platformu geliştirildi.",
                technologies: ["ASP.NET", "MSSQL", "C#"],
                link: "https://github.com/selinpir/diziFilm_blog_w_asp.net"
            },
            {
                title: "Kişisel CV Blog",
                date: "Ocak 2025",
                description: "Kişisel özgeçmişimin ve projelerin sergilendiği dinamik bir blog sitesi tasarlandı.",
                technologies: ["ASP.NET", "MSSQL", "C#"],
                link: "https://github.com/selinpir/cv_blog_w_asp.net"
            },
            {
                title: "FiBu – Film Bulma Uygulaması",
                date: "Mart 2024",
                description: "C ve C# dillerinde geliştirilen film bulma ve takip etme uygulaması.",
                technologies: ["C", "C#"],
                link: "https://github.com/selinpir/FiBu"
            },
            {
                title: "LEDAFLIX – Dizi Takip Uygulaması",
                date: "Mayıs 2023",
                description: "C#, SQL ve nesneye yönelik programlama içeren dizi takip uygulaması.",
                technologies: ["C#", "MSSQL", "OOP"],
                link: "https://github.com/selinpir/ledaflix-dizi-takip-uygulamasi"
            }
        ]
    }
};

const experiences = [
    {
        tr: {
            title: "Full Stack Stajyeri" ,    
            description:"Datakod Yazılım A.Ş. –İzmir/Balçova, Haziran 2025- Temmuz 2025",    
            description2:"⋆｡𖦹°⭒˚｡⋆"           
        },
        en: {
            title: "Full Stack Intern ",    
            description:"Datakod Yazılım A.Ş. –İzmir/Balçova, June 2025- July 2025 ",    
            description2:"⋆｡𖦹°⭒˚｡⋆"             
        }
    },
    {
        tr: {
            title: "Medium İçerik Üreticiliği ",          
            description:"Huawei Student Developers Türkiye– Uzaktan,  Mart 2025- Eylül 2025 ",    
            description2:"⋆｡𖦹°⭒˚｡⋆"      
        },
        en: {
            title: "Content Writer",   
            description:"Huawei Student Developers Turkey– Remote, March 2025- September 2025",    
            description2:"⋆｡𖦹°⭒˚｡⋆"               
        }
    }
    ,
     {
        tr: {
            title: "Proje Yönetimi Stajyeri",         
            description:"SCA Social– Uzaktan, Ekim 2024- Kasım 2024",    
            description2:"⋆｡𖦹°⭒˚｡⋆"        
        },
        en: {
            title: "Project Management Intern",       
            description:"SCA Social– Remote,  October 2024– November 2024",    
            description2:"⋆｡𖦹°⭒˚｡⋆"        
        }
    }
     ,
     {
        tr: {
            title: "Topluluk Çalışanı",          
            description:"  Yönetim Bilişim Topluluğu–Pamukkale Üniversitesi, Temmuz 2023- Şubat 2024",    
            description2:"⋆｡𖦹°⭒˚｡⋆"       
        },
        en: {
            title: "Community Member ",      
            description:"Management Information Systems Community– Pamukkale University, July 2023– February 2024 ",    
            description2:"⋆｡𖦹°⭒˚｡⋆"      
        }
    }
];


function renderExperiences(language) {
    const container = document.getElementById('deneyim-listesi');
    if (!container) return; 
    
    container.innerHTML = '';
    experiences.forEach(exp => {
        const experienceDiv = document.createElement('div');
        experienceDiv.classList.add('deneyim-item');
        const title = exp[language].title;
        const description = exp[language].description;
         const description2 = exp[language].description2;
        experienceDiv.innerHTML = `<h3>${title}</h3><p>${description}</p><p>${description2}</p>`;
        container.appendChild(experienceDiv);
    });
}

function renderProjects(language) {
    const container = document.getElementById('projects-container');
    if (!container) return; 

    const projectsData = translations[language].projects;
    container.innerHTML = ''; 

    projectsData.forEach(project => {
        const techList = project.technologies.map(tech => `<li>${tech}</li>`).join('');

        const projectCardHTML = `
            <div class="project-card">
                <span class="project-date">${project.date}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <ul class="project-tech-list">
                    ${techList}
                </ul>
                <a href="${project.link}" target="_blank" class="project-link">
                    GitHub'da Görüntüle <i class="fab fa-github"></i>
                </a>
            </div>
        `;
        container.innerHTML += projectCardHTML;
    });
}

const skills = [
    {
        tr: {
            title: "Backend" ,    
            description:" C#, .NET Core, ASP.NET, Blazor, Entity Framework, Python",    
            description2:"𖦹"           
        },
        en: {
            title: "Backend",    
            description:" C#, .NET Core, ASP.NET, Blazor, Entity Framework, Python",    
             description2:"𖦹"            
        }
    },
    {
            tr: {
                title: "Frontend" ,    
                description:" HTML5, CSS3, Bootstrap, MudBlazor",    
                 description2:"𖦹"          
            },
            en: {
                title: "Frontend",    
                description:" HTML5, CSS3, Bootstrap, MudBlazor",    
                description2:"𖦹"           
            }
        }
        ,
         {
            tr: {
                title: "Veritabanı" ,    
                description:" Microsoft SQL Server",    
                 description2:"𖦹"          
            },
            en: {
                title: "Database",    
                description:" Microsoft SQL Server",    
                description2:"𖦹"           
            }
        }
        , {
            tr: {
                title: "Diğer" ,    
                description:"  VBA, Arena Simulation, Orange, Microsoft Office Programları, WordPress",    
                 description2:"𖦹"          
            },
            en: {
                title: "Other",    
                description:"  VBA, Arena Simulation, Orange, Microsoft Office Programları, WordPress",    
                description2:"𖦹"           
            }
        }
];
    
    function renderSkills(language) {
    const container = document.getElementById('beceri-listesi');
    if (!container) return; 
    
    container.innerHTML = '';
    skills.forEach(exp => {
        const experienceDiv = document.createElement('div');
        experienceDiv.classList.add('beceri-item');
        const title = exp[language].title;
        const description = exp[language].description;
         const description2 = exp[language].description2;
        experienceDiv.innerHTML = `<h3>${title}</h3><p>${description}</p><p>${description2}</p>`;
        container.appendChild(experienceDiv);
    });
}

const setLanguage = (language) => {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = translations[language][key];
    });
     renderExperiences(language);
     renderSkills(language);
    renderProjects(language);

    localStorage.setItem('language', language);
};

const trButton = document.getElementById('lang-tr');
const enButton = document.getElementById('lang-en');

trButton.addEventListener('click', () => {
    setLanguage('tr');
});

enButton.addEventListener('click', () => {
    setLanguage('en');
});


document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'tr';
    setLanguage(savedLanguage);
});