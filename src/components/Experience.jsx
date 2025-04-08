import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

const Experience = () => {
  const { portfolioData, isLoading, error } = usePortfolioData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  // Determine the number of work experiences to display
  const workExperiences = portfolioData.work.map(work => ({
    ...work,
    type: 'work',
    period: work.duration,
    title: work.title,
    organization: work.organization
  }));

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Professional Experience
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

            <div className="space-y-12">
              {workExperiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'justify-end' : ''
                  }`}
                >
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? 'flex-row-reverse' : ''
                    } w-full`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : ''}`}>
                      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                        <Briefcase className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {experience.title}
                        </h3>
                        <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                          {experience.organization}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                          {experience.period}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                          {experience.description}
                        </p>
                      </div>
                    </div>

                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-800" />
                    </div>

                    <div className="w-5/12" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;