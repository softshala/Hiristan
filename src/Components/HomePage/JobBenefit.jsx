import React from 'react';
import './JobBenefit.css';
import payrollIcon from '../../assets/images/Homepage/Payroll.svg'; 
import performanceIcon from '../../assets/images/Homepage/Performance.svg'; 
import complianceIcon from '../../assets/images/Homepage/Compliance.svg'; 
import securityIcon from '../../assets/images/Homepage/IP.svg'; 

const benefits = [
  {
    title: 'Payroll Management',
    description: "Complete payroll administration, tax compliance, and benefits management are managed seamlessly. Focus on project delivery while we manage all employment-related administrative complexities.",
    icon: payrollIcon,
  },
  {
    title: 'Performance Benchmarking & Optimization',
    description: "Continuous performance analysis against industry standards with actionable optimization recommendations. Data-driven insights help maximize your technology investment ROI and operational efficiency.",
    icon: performanceIcon,
  },
  {
    title: 'Compliance Management',
    description: "Regular compliance monitoring and reporting for industry-specific regulations. Real-time alerts and documentation ensure your projects maintain regulatory adherence without additional overhead.",
    icon: complianceIcon,
  },
  {
    title: 'IP Protection & Security',
    description: "Comprehensive intellectual property protection through robust NDAs, secure development environments, and data encryption protocols. Your sensitive information remains completely protected.",
    icon: securityIcon,
  },
];

const JobBenefit = () => {
  return (
    <div className="job-benefit-wrapper">
      <div className="job-benefit-left">
        <h1 className="job-benefit-heading">Beyond Hiring – <br />The Hiristan Experience</h1>
        <p className="job-benefit-description">
         Hiristan connects you with top tech talent and removes hiring hassles. Whether you need one expert or a full team, we provide the support and infrastructure to scale your projects with ease.   </p>
      </div>

      <div className="job-benefit-right">
        {benefits.map((item, index) => (
          <div
            className="job-benefit-card"
            key={index}
            style={{ zIndex: 10 + index }}
          >
             <img src={item.icon} alt={`${item.title} Icon`} className="job-benefit-icon" />
            <h2 className="job-benefit-card-title">{item.title}</h2>
            <p className="job-benefit-card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobBenefit;