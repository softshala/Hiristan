import React from 'react';
import './ServiceExpert.css';
import user1 from '../../assets/images/Homepage/bn-4.webp'; // Replace with actual image paths
import user2 from '../../assets/images/Homepage/bn-4.webp';
import user3 from '../../assets/images/Homepage/bn-4.webp';
import user4 from '../../assets/images/Homepage/bn-4.webp';

const experts = [
  {
    id: 1,
    name: 'Kr. Dhananjay Preet',
    role: 'Sr. Web Designer.',
    location: 'London',
    experience: '7 Years Exp.',
    description: 'Creative and experienced web designer with a knack for visual storytelling.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    image: user1,
  },
  {
    id: 2,
    name: 'Clarence B. Mantooth',
    role: 'Sr. Content Writer.',
    location: 'Canada, USA',
    experience: '3 Years Exp.',
    description: 'Crafts compelling content that engages and converts across platforms.',
    skills: ['SEO', 'Copywriting', 'Content Strategy'],
    image: user2,
  },
  {
    id: 3,
    name: 'Geraldine E. Scott',
    role: 'Shopify Developer.',
    location: 'Denver, USA',
    experience: '8 Years Exp.',
    description: 'Built over 100+ high-converting Shopify stores.',
    skills: ['Shopify', 'Liquid', 'JavaScript', 'React'],
    image: user3,
  },
  {
    id: 4,
    name: 'Donald J. Merrick',
    role: 'Laravel Developer.',
    location: 'California, USA',
    experience: '5 Years Exp.',
    description: 'Expert in backend systems and scalable API development.',
    skills: ['Laravel', 'PHP', 'MySQL', 'REST API'],
    image: user4,
  },
];

const ServiceExpert = () => {
  return (
    <div className="service-expert-container">
      <div className="service-expert-header">
        <h2 className="service-expert-heading">Access Our Pool of Verified ServiceNow Experts <br />Ready to Join Your Team
</h2>
        <p className="service-expert-subheading">
          Meet pre-screened ServiceNow experts with comprehensive platform knowledge and verified experience, and relevant certifications.
        </p>
      </div>
      <div className="service-expert-grid">
        {experts.map((expert) => (
          <div key={expert.id} className="service-expert-card">
            <div className="service-expert-experience-badge">
              💼  {expert.experience}
            </div>
            <div className="service-expert-top-row">
              <img src={expert.image} alt={expert.name} className="service-expert-img" />
              <div className="service-expert-details">
                <h3 className="service-expert-name">{expert.name}</h3>
                <p className="service-expert-role">{expert.role}</p>
                <p className="service-expert-location">📍 {expert.location}</p>
              </div>
            </div>
            <p className="service-expert-description">{expert.description}</p>
            <div className="service-expert-skills">
              {expert.skills.map((skill, idx) => (
                <span key={idx} className="service-expert-skill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceExpert;