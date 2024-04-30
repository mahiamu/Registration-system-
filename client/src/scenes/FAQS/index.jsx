import React, { useState } from 'react';
import Header from '../../components/Header';
import './FAQ.css';
import FAQ from './FAQ';
import { Box } from '@mui/system';


function Faqs () {
  const [faqs, setfaqs] = useState([
    {
      question: 'How many programmers does it take as a developer ?',
      answer: 'None. We don\'t address number issues.',
      open: true
    },
    {
      question: 'Who is the most awesome person?',
      answer: 'You. The Viewer.',
      open: false
    },
    {
      question: 'How many questions does it take to make a successful FAQ Page?',
      answer: 'This many.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <Box m="1.5rem 2.5rem">
    <div className="Faqs">
       <Header title="FAQS" subtitle="Most frequently asked questions and answers about ethio-talent" />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ key={i} faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
    </Box>
  );
}

export default Faqs;