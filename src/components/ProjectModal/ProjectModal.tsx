import React, { useEffect, useState } from 'react';
import './ProjectModal.css';

// Using a slightly expanded Item interface internally to the modal
interface ProjectItem {
  id: string;
  img: string;
  url: string;
  height: number;
  title?: string;
  description?: string;
  tags?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectItem | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => setIsVisible(false), 300); // Wait for exit animation
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : 'closed'}`} onClick={onClose}>
      <div className={`modal-content ${isOpen ? 'open' : 'closed'}`} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {project && (
          <div className="modal-body">
            <div className="modal-image-container">
              <img src={project.img} alt={project.title || 'Project preview'} className="modal-image" />
            </div>
            <div className="modal-info">
              <h2>{project.title || 'Project Title'}</h2>
              <p className="modal-description">{project.description || 'No description available for this project.'}</p>

              {project.tags && project.tags.length > 0 && (
                <div className="modal-tags">
                  {project.tags.map((tag, idx) => {
                    const normalized = tag.toLowerCase().replace(/\s+/g, '');
                    const mappings: Record<string, string> = {
                      'react': 'react',
                      'reactnative': 'react',
                      'fastapi': 'fastapi',
                      'langchain': 'langchain',
                      'langgraph': 'langgraph',
                      'supabase': 'supabase',
                      'firebase': 'firebase',
                      'next.js': 'nextdotjs',
                      'express': 'express',
                      'postgresql': 'postgresql',
                      'mongodb': 'mongodb',
                      'docker': 'docker',
                    };
                    const slug = mappings[normalized] || normalized;
                    const iconUrl = `https://cdn.simpleicons.org/${slug}/white`;

                    return (
                      <div key={idx} className="modal-tech-icon-wrapper" title={tag}>
                        <img
                          src={iconUrl}
                          alt={tag}
                          className="modal-tech-icon"
                          onError={(e) => {
                            // Fallback to text if icon fails to load
                            e.currentTarget.style.display = 'none';
                            const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                            if (sibling) sibling.style.display = 'block';
                          }}
                        />
                        <span className="modal-tag fallback-text" style={{ display: 'none' }}>{tag}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="modal-links">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="modal-link-btn github-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Source Code
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="modal-link-btn demo-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
