import { FiCode, FiDatabase, FiCloud, FiTool } from 'react-icons/fi';
import { SiReact, SiGooglecloud } from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: <FiCode size={24} />,
      skills: [
        'Java 17',
        'Spring Boot',
        'JWT Authentication',
        'Spring AI',
        'Hibernate',
        'JUnit 5',
        'Maven'
      ],
      color: 'text-blue-500'
    },
    {
      title: 'Frontend Development',
      icon: <SiReact size={24} />,
      skills: [
        'React/Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Redux/RTK Query',
        'HTML5/CSS3',
        'JavaScript ES6+'
      ],
      color: 'text-cyan-500'
    },
    {
      title: 'Database & Storage',
      icon: <FiDatabase size={24} />,
      skills: [
        'PostgreSQL',
        'Hibernate ORM',
        'Database Design',
        'Query Optimization',
        'Data Migration'
      ],
      color: 'text-green-500'
    },
    {
      title: 'Cloud & DevOps',
      icon: <FiCloud size={24} />,
      skills: [
        'AWS',
        'Azure',
        'Google Cloud Platform',
        'Docker',
        'GitLab CI/CD',
        'Linux (RHEL, Ubuntu, Debian)',
        'Shell Scripting (Bash)'
      ],
      color: 'text-purple-500'
    },
    {
      title: 'Tools & Libraries',
      icon: <FiTool size={24} />,
      skills: [
        'Quartz Scheduler',
        'Apache PDFBox',
        'Apache POI',
        'WhatsApp Business API',
        'Swagger/OpenAPI',
        'Testcontainers',
        'Wireguard VPN'
      ],
      color: 'text-orange-500'
    }
  ];

  const cloudProviders = [
    { 
      name: 'AWS', 
      icon: <div className="w-8 h-8 bg-orange-400 rounded flex items-center justify-center text-white text-xs font-bold">AWS</div>, 
      color: 'text-orange-400' 
    },
    { 
      name: 'Azure', 
      icon: <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">AZ</div>, 
      color: 'text-blue-400' 
    },
    { name: 'GCP', icon: <SiGooglecloud size={32} />, color: 'text-red-400' }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack with focus on 
            Java backend development, modern frontend frameworks, and cloud platforms.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${category.color} mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cloud Platforms Highlight */}
        <div className="bg-card border border-border rounded-xl p-8 text-center animate-fade-in-up">
          <h3 className="text-2xl font-semibold mb-6">Multi-Cloud Experience</h3>
          <p className="text-secondary-foreground mb-8 max-w-2xl mx-auto">
            Experienced in deploying and managing applications across major cloud platforms 
            with CI/CD pipelines and containerized deployments.
          </p>
          <div className="flex justify-center items-center gap-12">
            {cloudProviders.map((provider) => (
              <div
                key={provider.name}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className={`${provider.color} group-hover:scale-110 transition-transform duration-200`}>
                  {provider.icon}
                </div>
                <span className="mt-2 font-medium text-sm">{provider.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}