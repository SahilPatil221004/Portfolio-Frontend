import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AdminDashboard = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get('https://virendra-bagade-mu.vercel.app/api/portfolio');
        setPortfolio(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch portfolio');
        setLoading(false);
      }
    };

    if (user) {
      fetchPortfolio();
    } else {
      navigate('/admin/login');
    }
  }, [user, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {   
      const response = await axios.put('https://virendra-bagade-mu.vercel.app/api/portfolio', portfolio );
      alert('Portfolio updated successfully');
    } catch (err) {
      setError('Failed to update portfolio');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const addWorkExperience = () => {
    setPortfolio({
      ...portfolio,
      work: [...portfolio.work, {
        title: '',
        organization: '',
        duration: '',
        description: ''
      }]
    });
  };

  const addPublication = () => {
    setPortfolio({
      ...portfolio,
      publications: [...portfolio.publications, {
        title: '',
        year: null,
        description: '',
        link: ''
      }]
    });
  };

  const addProject = () => {
    setPortfolio({
      ...portfolio,
      projects: [...portfolio.projects, {
        title: '',
        description: '',
        year: null,
        link: ''
      }]
    });
  };

  const addTeachingExperience = () => {
    setPortfolio({
      ...portfolio,
      teaching: [...portfolio.teaching, {
        title: '',
        level: '',
        description: ''
      }]
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button 
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <form onSubmit={handleUpdate} className="space-y-6">
        {/* Personal Information Section */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={portfolio.personalInfo?.fullName || ''}
                onChange={(e) => setPortfolio({
                  ...portfolio,
                  personalInfo: { 
                    ...portfolio.personalInfo, 
                    fullName: e.target.value 
                  }
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Position
              </label>
              <input
                type="text"
                value={portfolio.personalInfo?.position || ''}
                onChange={(e) => setPortfolio({
                  ...portfolio,
                  personalInfo: { 
                    ...portfolio.personalInfo, 
                    position: e.target.value 
                  }
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Tagline
              </label>
              <input
                type="text"
                value={portfolio.personalInfo?.tagline || ''}
                onChange={(e) => setPortfolio({
                  ...portfolio,
                  personalInfo: { 
                    ...portfolio.personalInfo, 
                    tagline: e.target.value 
                  }
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Avatar URL
              </label>
              <input
                type="text"
                value={portfolio.personalInfo?.avatarURL || ''}
                onChange={(e) => setPortfolio({
                  ...portfolio,
                  personalInfo: { 
                    ...portfolio.personalInfo, 
                    avatarURL: e.target.value 
                  }
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </div>
        {/* About Section */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Bio
            </label>
            <textarea
              value={portfolio.about.bio || ''}
              onChange={(e) => setPortfolio({
                ...portfolio,
                about: { ...portfolio.about, bio: e.target.value }
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
            />
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Work Experience</h2>
            <button 
              type="button"
              onClick={addWorkExperience}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              + Add Work Experience
            </button>
          </div>
          {portfolio.work.map((job, index) => (
            <div key={index} className="mb-4 border-b pb-4">
              <input
                type="text"
                placeholder="Title"
                value={job.title}
                onChange={(e) => {
                  const newWork = [...portfolio.work];
                  newWork[index].title = e.target.value;
                  setPortfolio({ ...portfolio, work: newWork });
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              />
              <input
                type="text"
                placeholder="Organization"
                value={job.organization}
                onChange={(e) => {
                  const newWork = [...portfolio.work];
                  newWork[index].organization = e.target.value;
                  setPortfolio({ ...portfolio, work: newWork });
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              />
              <input
                type="text"
                placeholder="Duration"
                value={job.duration}
                onChange={(e) => {
                  const newWork = [...portfolio.work];
                  newWork[index].duration = e.target.value;
                  setPortfolio({ ...portfolio, work: newWork });
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              />
              <textarea
                placeholder="Description"
                value={job.description}
                onChange={(e) => {
                  const newWork = [...portfolio.work];
                  newWork[index].description = e.target.value;
                  setPortfolio({ ...portfolio, work: newWork });
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="3"
              />
            </div>
          ))}
        </div>

        {/* Publications Section */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Publications</h2>
            <button 
              type="button"
              onClick={addPublication}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              + Add Publication
            </button>
          </div>
          {portfolio.publications.map((publication, index) => (
            <div key={index} className="mb-4 border-b pb-4">
              <input
                type="text"
                placeholder="Title"
                value={publication.title}
                onChange={(e) => {
                  const newPublications = [...portfolio.publications];
                  newPublications[index].title = e.target.value;
                  setPortfolio({ ...portfolio, publications: newPublications });
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              />
              <input
                type="number"
                placeholder="Year"
                value={publication.year || ''}
                onChange={(e) => {
                  const newPublications = [...portfolio.publications];
                  newPublications[index].year = e.target.value ? parseInt(e.target.value) : null;
                  setPortfolio({ ...portfolio, publications: newPublications });
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              />
              <textarea
                placeholder="Description"
                value={publication.description}
                onChange={(e) => {
                  const newPublications = [...portfolio.publications];
                  newPublications[index].description = e.target.value;
                  setPortfolio({ ...portfolio, publications: newPublications });
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                rows="3"
              />
              <input
                type="text"
                placeholder="Publication Link"
                value={publication.link}
                onChange={(e) => {
                  const newPublications = [...portfolio.publications];
                  newPublications[index].link = e.target.value;
                  setPortfolio({ ...portfolio, publications: newPublications });
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Projects</h2>
            <button 
              type="button"
              onClick={addProject}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              + Add Project
            </button>
          </div>
          {portfolio.projects.map((project, index) => (
            <div key={index} className="mb-4 border-b pb-4">
              <input
                type="text"
                placeholder="Title"
                value={project.title}
                onChange={(e) => {
                  const newProjects = [...portfolio.projects];
                  newProjects[index].title = e.target.value;
                  setPortfolio({ ...portfolio, projects: newProjects });
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              />
              <input
                type="number"
                placeholder="Year"
                value={project.year || ''}
                onChange={(e) => {
                  const newProjects = [...portfolio.projects];
                  newProjects[index].year = e.target.value ? parseInt(e.target.value) : null;
                  setPortfolio({ ...portfolio, projects: newProjects });
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              />
              <textarea
                placeholder="Description"
                value={project.description}
                onChange={(e) => {
                  const newProjects = [...portfolio.projects];
                  newProjects[index].description = e.target.value;
                  setPortfolio({ ...portfolio, projects: newProjects });
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="3"
              />
              <input
                type="text"
                placeholder="Project Link"
                value={project.link}
                onChange={(e) => {
                  const newProjects = [...portfolio.projects];
                  newProjects[index].link = e.target.value;
                  setPortfolio({ ...portfolio, projects: newProjects });
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          ))}
        </div>

        {/* Teaching Section */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Teaching Experience</h2>
            <button 
              type="button"
              onClick={addTeachingExperience}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              + Add Teaching Experience
            </button>
          </div>
          {portfolio.teaching.map((teaching, index) => (
            <div key={index} className="mb-4 border-b pb-4">
              <input
                type="text"
                placeholder="Course Title"
                value={teaching.title}
                onChange={(e) => {
                  const newTeaching = [...portfolio.teaching];
                  newTeaching[index].title = e.target.value;
                  setPortfolio({ ...portfolio, teaching: newTeaching });
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              />
              <input
                type="text"
                placeholder="Level (e.g., Graduate, Undergraduate)"
                value={teaching.level}
                onChange={(e) => {
                  const newTeaching = [...portfolio.teaching];
                  newTeaching[index].level = e.target.value;
                  setPortfolio({ ...portfolio, teaching: newTeaching });
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              />
              <textarea
                placeholder="Description"
                value={teaching.description}
                onChange={(e) => {
                  const newTeaching = [...portfolio.teaching];
                  newTeaching[index].description = e.target.value;
                  setPortfolio({ ...portfolio, teaching: newTeaching });
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="3"
              />
            </div>
          ))}
        </div>
        
        <button 
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update Portfolio
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;