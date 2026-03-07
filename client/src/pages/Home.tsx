import { Mail, Linkedin, Github, Phone, MapPin, Award, Briefcase, BookOpen, FileText, Code2 } from 'lucide-react';

/**
 * Design Philosophy: Minimalist Security-First (Modern Professional)
 * - Swiss Design principles with cybersecurity visual language
 * - Neon cyan (#00d9ff) accents on dark slate background
 * - IBM Plex Mono for headings (technical credibility)
 * - Asymmetric layout with floating cards and timeline elements
 * - Scroll-triggered animations for visual interest
 */

export default function Home() {
  const experiences = [
    {
      title: "Information Security Engineer",
      company: "Next Generation Technology Solution (NGTSOLs)",
      location: "Lahore",
      period: "08/2025 – Present",
      highlights: [
        "Resolved 300+ security incidents and alerts with minimal business impact",
        "Monitored real-time security alerts using SIEM and SOC tools",
        "Integrated Azure services and security logs with SIEM platforms",
        "Developed and tuned custom SIEM rules and decoders",
        "Managed EDR/XDR platforms for enhanced endpoint visibility",
        "Applied MITRE ATT&CK framework for detection mapping and threat hunting",
        "Deployed and optimized Wazuh SIEM/IDS infrastructure",
        "Implemented SOAR automation workflows to reduce MTTR"
      ]
    },
    {
      title: "Associate Security Researcher",
      company: "SlashNext Inc (Acquired by Veronis)",
      location: "Lahore",
      period: "01/2024 – 07/2025",
      highlights: [
        "Monitored and investigated security alerts using Microsoft Sentinel",
        "Managed detections across Cisco XDR, Microsoft Defender, and Sophos",
        "Performed alert triage and escalation for high-severity incidents",
        "Identified and analyzed web application vulnerabilities",
        "Integrated security telemetry from endpoints, email, and cloud sources",
        "Tuned detection rules to reduce false positives",
        "Applied MITRE ATT&CK framework for threat analysis"
      ]
    }
  ];

  const skills = [
    { category: "Security Monitoring & SIEM", items: ["Microsoft Sentinel", "Splunk", "Wazuh", "Log Correlation", "Alert Tuning"] },
    { category: "Cloud Security", items: ["Azure Monitor", "AWS Security", "Log Analytics", "Entra ID", "Security Events"] },
    { category: "Endpoint & XDR", items: ["Microsoft Defender", "Cisco XDR", "Sophos", "EDR/XDR", "Endpoint Detection"] },
    { category: "Security Operations", items: ["Incident Response", "Alert Triage", "Threat Detection", "Escalation", "SOC Operations"] },
    { category: "Threat Intelligence", items: ["MITRE ATT&CK", "Detection Mapping", "Threat Hunting", "Threat Analysis"] },
    { category: "Vulnerability & AppSec", items: ["Web Application Scanning", "Security Misconfigurations", "Burp Suite", "Penetration Testing"] },
    { category: "Identity & Windows Security", items: ["Active Directory", "Windows Event Logs", "Authentication Logs", "Entra ID"] },
    { category: "Automation & SOAR", items: ["SOAR Playbooks", "Workflow Automation", "False Positive Reduction", "Process Automation"] },
    { category: "Ticketing & Case Management", items: ["ServiceNow", "Jira", "SLA Management", "Incident Documentation"] }
  ];

  const education = [
    {
      degree: "BS. Computer Systems Engineering",
      school: "University of Engineering & Technology Peshawar",
      period: "09/2020 – 08/2024",
      cgpa: "3.17"
    }
  ];

  const certifications = [
    "CompTIA Security+",
    "Azure Security Engineer Associate (AZ-500)",
    "Securing Software, Data and End Points (ISC2)",
    "Python for Cybersecurity (Infosec)",
    "Cloud Security on AWS (edureka)",
    "Digital Forensics & Cyber Security (NAVTTC)",
    "Google Cybersecurity",
    "Burp Suite for Penetration Testing"
  ];

  const publications = [
    {
      title: "Access Restricted: A study of Broken Access Control Vulnerabilities",
      journal: "Archives of Advanced Engineering Science",
      date: "11/03/2025"
    }
  ];

  const projects = [
    {
      title: "AI-Powered SOC Alert Triage & Response System",
      description: "Built an agent-based system to analyze, classify, and escalate security alerts automatically. Integrated SOC tools to improve response time and detection accuracy, enhancing analyst efficiency.",
      tags: ["AI/ML", "SOC", "Automation", "Alert Management"]
    },
    {
      title: "Email Security & Threat Hunting",
      description: "Worked on email security product to detect, analyze, and remediate phishing threats. Implemented advanced threat hunting techniques for comprehensive email security.",
      tags: ["Email Security", "Threat Hunting", "Phishing Detection", "Security Research"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-cyan-400">Safi Ullah Khan</div>
          <div className="flex gap-6 text-sm">
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663031442762/SjxouDDkGo7R5vhrchqVNg/hero-bg-cXDxftru3ZZC5dUaQxAkaE.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center" data-scroll>
          <div className="mb-6 inline-block">
            <div className="px-4 py-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm font-mono">
              Information Security Engineer
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Safi Ullah Khan
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            SOC Analyst | Cybersecurity Specialist | Threat Detection & Response Expert
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:safi.cloudsec@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-cyan-400 text-slate-950 rounded-lg font-semibold hover:bg-cyan-300 transition-colors">
              <Mail size={20} /> Get in Touch
            </a>
            <a href="#projects" className="flex items-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-colors">
              <Code2 size={20} /> View Work
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-slate-400">
            <div className="flex items-center gap-2">
              <Phone size={18} /> +92 3289095508
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} /> Islamabad, Pakistan
            </div>
          <a href="https://www.linkedin.com/in/safi-ullah-khan-85395528b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
         <Linkedin size={18} /> LinkedIn
        </a>
        <a href="https://github.com/Safiullahgithub" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
        <Github size={18} /> GitHub
          </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16" data-scroll>
            <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
              <Briefcase className="text-cyan-400" size={32} />
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item" data-scroll>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 glow-cyan-hover">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-400">{exp.title}</h3>
                      <p className="text-lg text-slate-300">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-cyan-400 font-mono text-sm">{exp.period}</p>
                      <p className="text-slate-400 text-sm">{exp.location}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-slate-300">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16" data-scroll>
            <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
              <Code2 className="text-cyan-400" size={32} />
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 glow-cyan-hover" data-scroll>
                <h3 className="text-lg font-bold text-cyan-400 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16" data-scroll>
            <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
              <BookOpen className="text-cyan-400" size={32} />
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div data-scroll>
              <h3 className="text-xl font-bold text-cyan-400 mb-6">Degree</h3>
              {education.map((edu, idx) => (
                <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 glow-cyan-hover">
                  <h4 className="text-lg font-bold text-slate-100">{edu.degree}</h4>
                  <p className="text-slate-300">{edu.school}</p>
                  <div className="flex justify-between mt-4 text-sm text-slate-400">
                    <span>{edu.period}</span>
                    <span>CGPA: {edu.cgpa}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Certifications */}
            <div data-scroll>
              <h3 className="text-xl font-bold text-cyan-400 mb-6">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-cyan-400/50 transition-colors">
                    <Award size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16" data-scroll>
            <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
              <FileText className="text-cyan-400" size={32} />
              Publications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
          </div>
          
          <div className="space-y-6">
            {publications.map((pub, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 glow-cyan-hover" data-scroll>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{pub.title}</h3>
                <p className="text-slate-300 mb-2">{pub.journal}</p>
                <p className="text-sm text-slate-400">{pub.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16" data-scroll>
            <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
              <Code2 className="text-cyan-400" size={32} />
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 glow-cyan-hover" data-scroll>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="skill-badge text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center" data-scroll>
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-8">
            I'm always interested in discussing cybersecurity, threat detection, and security operations.
          </p>
          
      <div className="flex flex-wrap justify-center gap-6 mb-12">
       <a href="mailto:safi.cloudsec@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-cyan-400 text-slate-950 rounded-lg font-semibold hover:bg-cyan-300 transition-colors">
       <Mail size={20} /> Email
   </a>
     <a href="https://www.linkedin.com/in/safi-ullah-khan-85395528b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-colors">
    <Linkedin size={20} /> LinkedIn
     </a>
     <a href="https://github.com/Safiullahgithub" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-colors">
    <Github size={20} /> GitHub
     </a>
    </div>
          
          <div className="text-slate-400 text-sm">
            <p>Passport: YJ4159381</p>
            <p className="mt-4">© 2026 Safi Ullah Khan. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
