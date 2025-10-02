import { FiExternalLink, FiGithub, FiCloud, FiShoppingCart, FiSettings } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'Robotan Dashboard',
      description: 'A comprehensive full-stack application for managing and orchestrating the Robotan automation bot ecosystem. The platform serves as a centralized dashboard for enterprise-level process automation, providing end-to-end workflow management, execution monitoring, and scheduling capabilities.',
      highlights: [
        'Designed and built a web dashboard that orchestrates automation workflows',
        'Implemented secure authentication/authorization and multi-tier license-key generation and validation',
        'Delivered real-time graphs and charts for live execution metrics using frequent API polling',
        'Added a calendar-based scheduler with holiday rules, failure-retries, and on-demand job triggers',
        'Built CRUD with pagination for core entities—workflows, processes, trackers, scheduled jobs, Workspaces',
        'Dockerization of the application and complete CI/CD for deployment to Docker Hub'
      ],
      technologies: ['Java 17', 'Spring Boot', 'React', 'Next.js', 'RTK Query', 'TailwindCSS', 'PostgreSQL', 'JUnit 5', 'Docker'],
      category: 'Enterprise Application',
      icon: <FiSettings size={24} />,
      status: 'Production'
    },
    {
      title: 'Robotan (Automation Bot)',
      description: 'An enterprise-grade automation engine that performs web and desktop automation tasks using multiple automation libraries, frameworks and cloud APIs from GCP/Azure.',
      highlights: [
        'Optimized database interaction, file handling and API calling with performance improvement of ~60%',
        'Implemented two-way communication systems with Robotan-Dashboard using REST APIs',
        'Fetch current system info (hardware IDs like MAC) for license validation',
        'Notification system with support for WhatsApp, Gmail, Outlook, Slack',
        'File upload/download/search on Google Drive/OneDrive and Google Sheets manipulation',
        'Data extraction from invoices and generate Excel sheets with custom format'
      ],
      technologies: ['Java 17', 'Spring Boot', 'Document Intelligence', 'Vertex AI', 'Gmail API', 'Google Drive API', 'OneDrive API', 'Slack API', 'WhatsApp API'],
      category: 'AI Integration',
      icon: <FiCloud size={24} />,
      status: 'Production'
    },
    {
      title: 'AI Integrated WhatsApp Chatbot',
      description: 'Insurance chatbot using retrieval-augmented generation (RAG) to recognize returning WhatsApp numbers, instantly pull their account data, answer FAQs, and suggest renewals. New numbers enter a short form for lead generation.',
      highlights: [
        'Implemented custom webhook for two-way communication',
        'RAG system for custom knowledge base for AI models',
        'Up to 60% cost cutting on AI model usage using RAG optimizations',
        'Lead generation on getting message from new numbers',
        'Real-time customer data retrieval and policy suggestions'
      ],
      technologies: ['Java 17', 'Spring Boot', 'Spring AI', 'GPT-5', 'PgVector', 'text-embedding-3', 'Meta Cloud API', 'Custom Webhook'],
      category: 'AI/ML Application',
      icon: <FiSettings size={24} />,
      status: 'Production'
    },
    {
      title: 'Corporate Websites Portfolio',
      description: 'Built sleek, responsive corporate sites for Alfalabs Technologies, Robotan and Mynet Insurance, each reflecting its unique brand with lead generation capabilities.',
      highlights: [
        'Responsive design optimized for all devices',
        'Lead generation from contact forms',
        'SEO optimization and Google Analytics integration',
        'Modern UI/UX with smooth animations',
        'Fast loading times and performance optimization'
      ],
      technologies: ['Next.js', 'Node.js', 'Google APIs', 'Nodemailer', 'TailwindCSS', 'shadcn/ui', 'Figma', 'Google Analytics'],
      category: 'Web Development',
      icon: <FiExternalLink size={24} />,
      status: 'Live',
      liveLinks: [
        { name: 'Alfalabs Technologies', url: 'https://www.alfalabstechnologies.com/' },
        { name: 'Robotan', url: 'https://robotan.io/' },
        { name: 'Mynet Insurance', url: 'https://www.mynetinsurance.in/' }
      ]
    },
    {
      title: 'Medicare E-commerce Platform',
      description: 'An e-commerce platform dedicated to prescription and OTC medicines, streamlining search, ordering, and doorstep delivery with secure payment integration.',
      highlights: [
        'Built an online pharmacy with fast search and one-click checkout',
        'Integrated Razorpay for secure payments and order tracking',
        'Synced inventory in real time and flagged expiries',
        'Deployed Docker containers on AWS for smooth releases',
        'Regulatory compliance for pharmaceutical sales'
      ],
      technologies: ['Java 8', 'Spring Boot', 'Angular', 'Material UI', 'MySQL', 'Docker', 'AWS', 'Razorpay'],
      category: 'E-commerce',
      icon: <FiShoppingCart size={24} />,
      status: 'Completed'
    }
  ];

  const getStatusBadge = (status: string) => {
    const colors = {
      'Production': 'bg-green-100 text-green-800 border-green-200',
      'Live': 'bg-blue-100 text-blue-800 border-blue-200',
      'Completed': 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return colors[status as keyof typeof colors] || colors.Completed;
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            Showcase of enterprise applications, AI integrations, and full-stack solutions 
            that demonstrate expertise across the complete development lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="text-sm text-secondary-foreground">{project.category}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadge(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-secondary-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Details */}
              <div className="p-6">
                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-secondary-foreground">{highlight}</span>
                      </li>
                    ))}
                    {project.highlights.length > 3 && (
                      <li className="text-sm text-secondary-foreground italic">
                        +{project.highlights.length - 3} more features...
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Links */}
                {project.liveLinks && (
                  <div className="flex flex-wrap gap-2">
                    {project.liveLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                      >
                        <FiExternalLink size={14} />
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 bg-card border border-border rounded-xl p-8 text-center animate-fade-in-up">
          <FiGithub size={48} className="mx-auto mb-4 text-secondary-foreground" />
          <h3 className="text-2xl font-semibold mb-4">More Projects on GitHub</h3>
          <p className="text-secondary-foreground mb-6 max-w-2xl mx-auto">
            Explore additional projects, code samples, and contributions on my GitHub profile. 
            From open-source contributions to personal experiments with new technologies.
          </p>
          <a
            href="https://github.com/TNO98"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-colors duration-200"
          >
            <FiGithub size={20} />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}