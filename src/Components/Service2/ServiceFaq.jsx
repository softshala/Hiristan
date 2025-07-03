import React, { useState } from 'react';
import './ServiceFaq.css';

const faqData = [
  { question: "What is Salesforce?", answer: "Salesforce is a cloud-based platform for customer relationship management, sales automation, and enterprise operations." },
  { question: "Where can I find Salesforce developers?", answer: "You can find Salesforce developers on freelance platforms, job boards, or through specialized agencies." },
  { question: "How much do Salesforce developers make?", answer: "Salesforce developers' salaries vary by experience and location, typically ranging from $70,000 to $160,000 annually." },
  { question: "Why should you hire Salesforce developers?", answer: "Salesforce developers bring expertise in CRM customization, sales automation, and platform integration." },
  { question: "What is the no-risk trial period for hiring a Salesforce developer with CloudDevs?", answer: "CloudDevs offers a risk-free trial period to evaluate your developer before committing." },
  { question: "What is Salesforce mainly used for?", answer: "Salesforce is used for customer relationship management, sales automation, marketing, and more." },
];

const ServiceFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="service-faq-section">
      <h2 className="service-faq-heading">FAQs about hiring Salesforce developers</h2>
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