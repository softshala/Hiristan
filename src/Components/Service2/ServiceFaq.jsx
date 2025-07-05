import React, { useState } from 'react';
import './ServiceFaq.css';

const faqData = [
  { question: "What Salesforce editions do your professionals work with (Essentials, Professional, Enterprise, Unlimited)?", answer: "Our Salesforce experts are certified across all editions from Essentials to Unlimited. They understand edition-specific limitations, feature availability, and can recommend optimal edition upgrades based on your business requirements. We ensure seamless transitions between editions while maximizing ROI." },
  { question: "Do you provide Salesforce CPQ (Configure, Price, Quote) implementation and customization services?", answer: "Our Salesforce-certified experts implement end-to-end quote-to-cash processes, including product configuration, pricing rules, approval workflows, and contract generation. We customize CPQ for complex pricing models, multi-currency environments, and integrate with ERP systems for seamless operations." },
  { question: "Can you integrate Salesforce with ERP systems like SAP, Oracle, or Microsoft Dynamics?", answer: "Yes, our integration specialists connect Salesforce with major ERP systems using REST/SOAP APIs, middleware platforms, and real-time synchronization. We ensure data consistency, implement error handling, and maintain audit trails for complete financial and operational data integration." },
  { question: "Do you provide Salesforce org health checks and performance audits?", answer: "Our certified experts conduct comprehensive org assessments, including security reviews, performance analysis, code quality audits, and best practices evaluation. We provide detailed reports with actionable recommendations for optimization, risk mitigation, and enhanced system performance." },
 ];

const ServiceFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="service-faq-section">
      <h2 className="service-faq-heading">FAQs About Hiring Salesforce Experts</h2>
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