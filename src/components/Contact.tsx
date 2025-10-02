import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiCheckCircle } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FiMail size={20} />,
      title: 'Email',
      value: 'malaysircar@gmail.com',
      href: 'mailto:malaysircar@gmail.com'
    },
    {
      icon: <FiPhone size={20} />,
      title: 'Phone',
      value: '+91-9635573845',
      href: 'tel:+919635573845'
    },
    {
      icon: <FiMapPin size={20} />,
      title: 'Location',
      value: 'Kolkata, India',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <FiLinkedin size={24} />,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/malay-sarkar-216b8b284/',
      color: 'hover:text-blue-600'
    },
    {
      icon: <FiGithub size={24} />,
      name: 'GitHub',
      href: 'https://github.com/TNO98',
      color: 'hover:text-gray-600'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? I&apos;m always open to discussing 
            new opportunities, interesting projects, and innovative ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h3>
            <p className="text-secondary-foreground mb-8 leading-relaxed">
              Whether you&apos;re looking for a Java Full-Stack Developer for your team, 
              need consultation on a technical project, or just want to discuss the latest 
              in software development and AI integration, I&apos;d love to hear from you.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="text-secondary-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-secondary-foreground">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 border border-border rounded-lg transition-all duration-200 ${social.color} hover:scale-105`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="mt-8 p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="font-medium text-accent">Currently Available</span>
              </div>
              <p className="text-sm text-secondary-foreground">
                Open to new opportunities and interesting projects. 
                Response time: Usually within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-accent/10 border border-accent/20 rounded-lg flex items-center gap-3">
                  <FiCheckCircle className="text-accent" size={20} />
                  <span className="text-accent font-medium">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">Preferred Communication</h3>
            <p className="text-secondary-foreground mb-6 max-w-3xl mx-auto">
              For project discussions, I prefer detailed emails or LinkedIn messages where we can 
              outline requirements, timelines, and technical specifications. For urgent matters, 
              feel free to call directly.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Project Inquiries: Email preferred</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Quick Questions: LinkedIn DM</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary-foreground rounded-full"></div>
                <span>Urgent Matters: Phone Call</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}