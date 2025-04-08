import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

const Contact = () => {
  const { portfolioData, isLoading, error } = usePortfolioData();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Feel free to reach out for research collaborations, speaking engagements, 
              or academic inquiries. I'm always open to discussing new opportunities 
              and ideas.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-gray-900 dark:text-white">{contact.email}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="text-gray-900 dark:text-white">{contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Office</p>
                  <p className="text-gray-900 dark:text-white">
                    {contact.office}
                  </p>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <a
                  href={contact.socialLinks.linkedin}
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={contact.socialLinks.twitter}
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form remains the same */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;