import { motion } from 'framer-motion';
import { Code2, Brain, Laptop, School } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

const Projects = () => {
  const { portfolioData, isLoading, error } = usePortfolioData();

  const iconMap = {
    'AI for Healthcare': Brain,
    'Smart Campus Initiative': School,
    'Advanced Compiler Design': Code2,
    'Virtual Lab Platform': Laptop
  };

  if (isLoading) return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 text-center">
      <p className="text-gray-600 dark:text-gray-300">Loading projects...</p>
    </section>
  );

  if (error) return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 text-center">
      <p className="text-red-600">{error}</p>
    </section>
  );

  const projects = portfolioData?.projects || [];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Research Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = iconMap[project.title] || Code2;
              return (
                <motion.div
                  key={project._id || index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-blue-600 dark:text-blue-400">
                          {project.year}
                        </span>
                        <a
                          href="#"
                          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Learn more →
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;