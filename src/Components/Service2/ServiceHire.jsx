import React from 'react';
import './ServiceHire.css';

const serviceHireItems = [
  {
    number: '01',
    title: 'Impressive from the Get-Go: Launch with Style',
    description:
      'Create an unforgettable first impression from the very start. Our meticulously designed templates and optimized frameworks guarantee that your website captivates and engages visitors.',
  },
  {
    number: '02',
    title: "Innovative Solutions for Today's Builders",
    description:
      "We provide state-of-the-art tools and frameworks designed for modern developers and digital innovators. Whether you're creating robust web applications or interactive platforms, we've got you covered.",
  },
  {
    number: '03',
    title: 'Reliable Solutions for Every Challenge',
    description:
      'In a rapidly evolving digital landscape, maintaining consistency is crucial. Our solutions prioritize performance, guaranteeing swift load times and seamless user experiences.',
  },
  {
    number: '04',
    title: 'Designed for Impact, Built for Success',
    description:
      'Our websites are not only visually stunning; they are expertly designed to drive significant results. By merging user-centric design with swift performance, we guarantee that your online presence makes a lasting impression.',
  },
];

const ServiceHire = () => {
  return (
    <section className="service-hire-section">
      <div className="service-hire-container">
        <div className="service-hire-header-row">
          <h2 className="service-hire-heading">
            Get started with our Salesforce
developer  <br />hiring  guides
          </h2>
          
        </div>

        <div className="service-hire-grid">
          {serviceHireItems.map((item, index) => (
            <div key={index} className="service-hire-card">
              <div className="service-hire-number">{item.number}</div>
              <h3 className="service-hire-title">{item.title}</h3>
              <p className="service-hire-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHire;
