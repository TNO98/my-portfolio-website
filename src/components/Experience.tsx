import { FiCalendar, FiMapPin } from 'react-icons/fi';

export default function Experience() {
  const experiences = [
    {
      company: 'Alfalabs Technologies LLP',
      position: 'Software Developer',
      location: 'Kolkata, India (Remote)',
      duration: 'Aug 2023 – Present',
      type: 'Full-time',
      achievements: [
        'Single-handedly developing, writing test cases and maintaining the complete Robotan-Dashboard project, WhatsApp Chat Bot with AI integration (RAG) and some features of Robotan (The Automation Bot)',
        'Create deployment strategies for different client\'s systems (Intranet, VPN, Distributed, Linux, Windows etc) and train the team on new features and deployment strategies',
        'Handle the complete development life-cycle of three official company websites',
        'Collaborate with Business Analyst teams to gather requirements for new features and resolve issues',
        'Find and deploy open source solutions for different requirements like project management, VPN, RDC, CI/CD'
      ],
      technologies: ['Java 17', 'Spring Boot', 'React', 'Next.js', 'PostgreSQL', 'Docker', 'AWS', 'Azure', 'GCP'],
      current: true
    },
    {
      company: 'Freelancer',
      position: 'Web/Software Developer',
      location: 'Remote',
      duration: 'Feb 2021 – July 2023',
      type: 'Freelance',
      achievements: [
        'Developed and delivered custom web and software solutions tailored to local client requirements',
        'Ensured on-time completion and client satisfaction across multiple projects',
        'Built responsive websites and web applications using modern technologies',
        'Provided technical consultation and maintenance services'
      ],
      technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'JavaScript', 'HTML/CSS'],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            Building scalable applications and leading development initiatives 
            with a focus on Java full-stack solutions and AI integrations.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1">
                    {exp.position}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                    <span>{exp.company}</span>
                    {exp.current && (
                      <span className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium">
                        Current
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-secondary-foreground text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <FiCalendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-secondary-foreground leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-card border border-border rounded-xl p-6 text-center animate-fade-in-up">
          <h3 className="text-xl font-semibold mb-4">Professional Growth</h3>
          <p className="text-secondary-foreground mb-4">
            Continuously expanding expertise in emerging technologies and best practices. 
            Currently focusing on AI integrations, cloud-native architectures, and advanced Spring Boot features.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>2+ Years Professional Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Multiple Enterprise Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary-foreground rounded-full"></div>
              <span>Full-Stack Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}