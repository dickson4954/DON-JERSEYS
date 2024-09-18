// FAQSection.js
import React, { useState } from 'react';
import styles from './FAQSection.module.css'; // Correct CSS file import

const FAQSection = () => {
  const [expanded, setExpanded] = useState({});

  const toggleAnswer = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Updated FAQ list with football-related questions
  const faqList = [
    { 
      question: 'How can I purchase a football from your store?', 
      answer: 'You can purchase a football by browsing our catalog, selecting the football you like, and adding it to your cart. Proceed to checkout to complete your purchase.' 
    },
    { 
      question: 'Do you offer custom football designs?', 
      answer: 'Yes, we offer custom designs for select footballs. Please contact our support team for more information on customization options.' 
    },
    { 
      question: 'What payment methods do you accept?', 
      answer: 'We accept all major credit cards, PayPal, and other secure payment options. You can choose your preferred method during checkout.' 
    },
    { 
      question: 'How long does delivery take for football orders?', 
      answer: 'Delivery times vary depending on your location. Typically, orders are delivered within 1-2 business days. You can track your order with the tracking information provided after purchase.' 
    },
    { 
      question: 'Can I return a football if it doesn’t meet my expectations?', 
      answer: 'Yes, you can return any football within 30 days of purchase for a full refund, provided it is unused and in its original packaging.' 
    },
  ];

  return (
    <section className={styles.faqSection}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqList.map((faq, index) => (
          <div className={styles.faqItem} key={index}>
            <button onClick={() => toggleAnswer(index)} className={styles.faqQuestion}>
              {faq.question}
            </button>
            {expanded[index] && <p className={styles.faqAnswer}>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
