import React, { useState } from 'react';
import './ServiceFaq.css';

const faqData = [
  { question: "How do you handle time zone differences and communication preferences?", answer: "We match professionals based on your preferred time zones and communication requirements. Our ServiceNow experts are available across the US, UK, Middle East, Canada, India, and Australia time zones with proficiency in English and local language requirements as needed." },
  { question: "What is your typical contract duration and pricing structure?", answer: "We offer flexible contract durations from short-term project sprints (2-4 weeks) to long-term engagements (12+ months). Pricing varies by engagement model: dedicated resources start at competitive monthly rates, hourly engagements are billed weekly, and project delivery follows milestone-based pricing." },
  { question: "How quickly can you scale team size up or down during project phases?", answer: "Our pre-vetted talent pool enables rapid scaling within 48-72 hours for additional resources. We can seamlessly add specialists for specific modules (ITSM, ITOM, CSM) or reduce team size based on project phases without contract penalties or lengthy notice periods." },
  { question: "Can we interview ServiceNow professionals before making the final selection?", answer: "Absolutely. We encourage client interviews as part of our transparent selection process. You can review detailed profiles, conduct technical interviews, and even request short technical assessments to ensure the perfect fit for your specific ServiceNow requirements and company culture." },
];

const ServiceFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="service-faq-section">
      <h2 className="service-faq-heading">FAQs About Hiring ServiceNow Professionals</h2>
      <div className="service-faq-list">
        {faqData.map((item, index) => (
          <div key={index} className={`service-faq-item ${index === 0 ? 'no-top-border' : ''} ${index === faqData.length - 1 ? 'no-bottom-border' : ''}`}>
            <div className="service-faq-question" onClick={() => toggleAnswer(index)}>
              <span>{item.question}</span>
              <span className="service-faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="service-faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFaq;