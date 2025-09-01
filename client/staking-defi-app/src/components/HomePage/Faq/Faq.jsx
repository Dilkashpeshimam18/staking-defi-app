import React, { useState } from "react";
import "./Faq.css";

const faqs = [
  {
    question: "What is crypto staking?",
    answer:
      "Crypto staking is the process of locking up your cryptocurrency to support a blockchain network and earning rewards in return.",
  },
  {
    question: "Is staking safe?",
    answer:
      "Staking involves risks like any investment, but when done on secure platforms, it is generally safe. Always do your research.",
  },
  {
    question: "Can I unstake my crypto anytime?",
    answer:
      "Some platforms allow flexible unstaking while others may require a lock-up period. It depends on the staking terms.",
  },
  {
    question: "How do I start staking?",
    answer:
      "You can start by choosing a staking platform, selecting your crypto, and locking it up to earn rewards.",
  },
  {
    question: "What cryptocurrencies can I stake?",
    answer:
      "Popular options include Ethereum, Cardano, Polkadot, and many others depending on platform availability.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        {/* Left Side */}
        <div className="faq-left">
          <h2>
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <p>
            Join thousands of satisfied users who are growing their crypto
            portfolios with DSTAKE. Hear what they have to say about their staking
            experience!
          </p>
        </div>

        {/* Right Side */}
        <div className="faq-right">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="arrow">
                  {activeIndex === index ? "▼" : "▶"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
