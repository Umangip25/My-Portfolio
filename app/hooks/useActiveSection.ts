import { useEffect, useState } from 'react';

const sections = ['about', 'experience', 'projects', 'skills', 'contact'];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);

            // Update URL cleanly without page reload
            const url = id === 'hero' ? '/' : `/${id}`;
            window.history.pushState(null, '', url);
          }
        });
      },
      {
        threshold: 0.5, // section must be 50% visible to trigger
      }
    );

    // Observe all sections
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Cleanup on unmount
    return () => observer.disconnect();
  }, []);

  return activeSection;
}