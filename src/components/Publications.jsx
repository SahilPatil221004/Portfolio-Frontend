import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

const Publications = () => {
  const { portfolioData, isLoading, error } = usePortfolioData();

  if (isLoading) return (
    <section className="py-20 bg-white dark:bg-gray-900 text-center">
      <p className="text-gray-600 dark:text-gray-300">Loading publications...</p>
    </section>
  );

  if (error) return (
    <section className="py-20 bg-white dark:bg-gray-900 text-center">
      <p className="text-red-600">{error}</p>
    </section>
  );

  const publications = portfolioData?.publications || [];

  return (
    <section id="publications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-12">
            <BookOpen className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Selected Publications
            </h2>
          </div>

          <div className="grid gap-8">
            {publications.map((pub, index) => (
              <motion.div
                key={pub._id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {pub.description || 'No additional description available'}
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {pub.year}
                    </p>
                  </div>
                  <a
                    href={pub.link || '#'}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;