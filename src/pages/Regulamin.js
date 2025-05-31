import React from 'react';
import { Link } from 'react-router-dom'; // Poprawny import Link
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const Regulamin = () => {
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
          REGULAMIN
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-green-900/50 backdrop-blur-md p-6 rounded-xl shadow-lg border border-green-800/30 mb-12"
        >
          <h3 className="text-xl text-green-300 mb-4 font-semibold">1. Postanowienia ogólne</h3>
          <p className="text-gray-400 mb-4">Wszystkie transakcje są ostateczne. Konta są dostarczane po potwierdzeniu płatności.</p>
          <h3 className="text-xl text-green-300 mb-4 font-semibold">2. Obowiązki użytkownika</h3>
          <p className="text-gray-400 mb-4">Użytkownik musi podać prawidłowy email do otrzymania konta.</p>
          <h3 className="text-xl text-green-300 mb-4 font-semibold">3. Wsparcie</h3>
          <p className="text-gray-400">W razie problemów kontakt: <span className="text-green-400">kontakt@minecraftelite.pl</span>.</p>
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl text-center text-green-400 mb-8 font-semibold"
        >
          Często zadawane pytania
        </motion.h3>
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
          <Link to="/regulamin" className="text-green-400 hover:underline">Regulamin</Link>
        </p>
      </footer>
    </div>
  );
};

export default Regulamin;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Navbar from '../components/Navbar';

// const Regulamin = () => {
//   const faqs = [
//     {
//       question: 'Czy mogę zwrócić konto?',
//       answer: 'Nie, wszystkie transakcje są ostateczne. Upewnij się, że podajesz poprawny email.',
//     },
//     {
//       question: 'Jak długo trwa dostawa konta?',
//       answer: 'Konto jest dostarczane natychmiast po potwierdzeniu płatności, zazwyczaj w ciągu kilku minut.',
//     },
//     {
//       question: 'Co zrobić w przypadku problemów?',
//       answer: 'Skontaktuj się z nami pod adresem kontakt@minecraftelite.pl.',
//     },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-green-950 text-white font-sans"
//     >
//       <Navbar />
//       <section className="py-20 px-4 max-w-4xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-5xl text-center text-green-400 mb-12 font-bold tracking-tight"
//         >
//           REGULAMIN
//         </motion.h2>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="bg-green-900/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-green-800/40 mb-12"
//         >
//           <h3 className="text-xl text-green-300 mb-4 font-semibold">1. Postanowienia ogólne</h3>
//           <p className="text-gray-400 mb-4">Wszystkie transakcje są ostateczne. Konta są dostarczane po potwierdzeniu płatności.</p>
//           <h3 className="text-xl text-green-300 mb-4 font-semibold">2. Obowiązki użytkownika</h3>
//           <p className="text-gray-400 mb-4">Użytkownik musi podać prawidłowy email do otrzymania konta.</p>
//           <h3 className="text-xl text-green-300 mb-4 font-semibold">3. Wsparcie</h3>
//           <p className="text-gray-400">W razie problemów kontakt: <span className="text-green-400">kontakt@minecraftelite.pl</span>.</p>
//         </motion.div>
//         <motion.h3
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-2xl md:text-3xl text-center text-green-400 mb-8 font-semibold"
//         >
//           Często zadawane pytania
//         </motion.h3>
//         <div className="space-y-6">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               className="bg-green-900/60 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-green-800/40"
//             >
//               <h4 className="text-lg text-green-300 font-medium">{faq.question}</h4>
//               <p className="text-gray-400 text-sm mt-2">{faq.answer}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//       <footer className="bg-green-900 py-12 px-4">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-xl text-green-300 font-semibold mb-4">Minecraft Elite</h3>
//             <p className="text-gray-400 text-sm">Najlepsze konta Minecraft dla elitarnych graczy.</p>
//           </div>
//           <div>
//             <h3 className "text-xl text-green-300 font-semibold mb-4">Linki</h3>
//             <ul className="space-y-2">
//               <li><Link to="/" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Strona główna</Link></li>
//               <li><Link to="/opinie" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Opinie</Link></li>
//               <li><Link to="/regulamin" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Regulamin</Link></li>
//               <li><Link to="/kontakt" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Kontakt</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-xl text-green-300 font-semibold mb-4">Kontakt</h3>
//             <p className="text-gray-400 text-sm">Email: <span className="text-green-400">kontakt@minecraftelite.pl</span></p>
//             <p className="text-gray-400 text-sm mt-2">Discord: <a href="#" className="text-green-400 hover:underline">Dołącz do nas!</a></p>
//           </div>
//         </div>
//         <div className="text-center text-gray-500 text-sm mt-8">
//           © 2025 Minecraft Elite. Wszystkie prawa zastrzeżone.
//         </div>
//       </footer>
//     </motion.div>
//   );
// };

// export default Regulamin;