import { motion } from 'framer-motion';
import { GraduationCap, Users, Clock, BookOpen } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

const Teaching = () => {
  const { portfolioData, isLoading, error } = usePortfolioData();

  if (isLoading) return (
    <section className="py-20 bg-white dark:bg-gray-900 text-center">
      <p className="text-gray-600 dark:text-gray-300">Loading courses...</p>
    </section>
  );

  if (error) return (
    <section className="py-20 bg-white dark:bg-gray-900 text-center">
      <p className="text-red-600">{error}</p>
    </section>
  );

  const courses = portfolioData?.teaching || [];

  return (
    <section id="teaching" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-12">
            <GraduationCap className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Teaching
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course._id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {course.title}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                    <span>{course.level}</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {course.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Teaching;