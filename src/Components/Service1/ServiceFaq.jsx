import React, { useState } from 'react';
import './ServiceFaq.css';

const faqData = [
  { question: "What is ServiceNow?", answer: "ServiceNow is a cloud-based platform for IT service management, workflow automation, and enterprise operations." },
  { question: "Where can I find ServiceNow developers?", answer: "You can find ServiceNow developers on freelance platforms, job boards, or through specialized agencies." },
  { question: "How much do ServiceNow developers make?", answer: "ServiceNow developers' salaries vary by experience and location, typically ranging from $70,000 to $160,000 annually." },
  { question: "Why should you hire ServiceNow developers?", answer: "ServiceNow developers bring expertise in workflow automation, IT service management, and platform customization." },
  { question: "What is the no-risk trial period for hiring a ServiceNow developer with CloudDevs?", answer: "CloudDevs offers a risk-free trial period to evaluate your developer before committing." },
  { question: "What is ServiceNow mainly used for?", answer: "ServiceNow is used for IT service management, business process automation, HR services, and more." },
];

const ServiceFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="service-faq-section">
      <h2 className="service-faq-heading">FAQs about hiring ServiceNow developers</h2>
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