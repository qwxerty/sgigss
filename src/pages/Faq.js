import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Czy mogę zwrócić konto?',
      answer: 'Nie, wszystkie transakcje są ostateczne. Upewnij się, że podajesz poprawny email.',
    },
    {
      question: 'Jak długo trwa dostawa konta?',
      answer: 'Konto jest dostarczane natychmiast po potwierdzeniu płatności, zazwyczaj w ciągu kilku minut.',
    },
    {
      question: 'Co zrobić w przypadku problemów?',
      answer: 'Skontaktuj się z nami pod adresem kontakt@minecraftelite.pl.',
    },
  ];

  return (
    <div className="min-h-screen bg-green-950 text-white font-sans">
      <Navbar />
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center text-green-400 mb-12 font-bold"
        >
          Często zadawane pytania
        </motion.h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-green-900/50 backdrop-blur-md p-4 rounded-xl shadow-md border border-green-800/30"
            >
              <h4 className="text-lg text-green-300 font-medium">{faq.question}</h4>
              <p className="text-gray-400 text-sm mt-2">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="bg-green-900/90 py-8 text-center text-gray-400">
        <p>© 2025 Minecraft Elite. Wszystkie prawa zastrzeżone.</p>
        <p className="mt-2">
          <Link to="/kontakt" className="text-green-400 hover:underline">Kontakt</Link> |{' '}
          <Link to="/regulamin" className="text-green-400 hover:underline">Regulamin</Link> |{' '}
          <Link to="/faq" className="text-green-400 hover:underline">FAQ</Link>
        </p>
      </footer>
    </div>
  );
};

export default FAQ;