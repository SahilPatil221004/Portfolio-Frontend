import { Linkedin, Twitter, Mail } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

const Footer = () => {
  const { portfolioData, isLoading, error } = usePortfolioData();

  if (isLoading) return null;
  if (error) return null;

  const personalInfo = portfolioData?.personalInfo || {};
  const contactInfo = portfolioData?.contact || {};
  const socialLinks = contactInfo.socialLinks || {};

  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {personalInfo.fullName || 'Dr. John Doe'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {personalInfo.position || 'Professor of Computer Science'}<br />
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#publications"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Publications
                </a>
              </li>
              <li>
                <a
                  href="#teaching"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Teaching
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              )}
              {contactInfo.email && (
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} {personalInfo.fullName || 'Dr. John Doe'}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;