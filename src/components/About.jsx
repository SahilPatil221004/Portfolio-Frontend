import { motion } from 'framer-motion';
import { Award, BookOpen, Users } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

const About = () => {
  const { portfolioData, isLoading, error } = usePortfolioData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const stats = portfolioData.about.stats.map(stat => ({
    icon: stat.key === 'Research Papers' ? BookOpen : 
           stat.key === 'Students Mentored' ? Users : 
           Award,
    label: stat.key,
    value: stat.value
  }));

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
            About Me
          </h2>

          <div className="text-lg text-gray-600 dark:text-gray-300 space-y-4">
            <p>{portfolioData.about.bio}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center shadow-sm"
            >
              <Icon className="w-8 h-8 text-blue-700 dark:text-blue-500 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {value}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;