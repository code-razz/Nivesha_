import React from 'react';
// import InvestorSlider from '../../components/investorSlider';
import './companyPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChartBar, faUsers, faTasks } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CompanySlider from '../../components/CompanySlider';

const CompanyPage = () => {
  const services = [
    { title: 'Consulting', icon: faBriefcase, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Analytics', icon: faChartBar, description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Teamwork', icon: faUsers, description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Project Management', icon: faTasks, description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }
  ];

  const partners = [
    { name: 'Partner 1', image: 'partner1.jpg' },
    { name: 'Partner 2', image: 'partner2.jpg' },
    { name: 'Partner 3', image: 'partner3.jpg' },
    { name: 'Partner 4', image: 'partner4.jpg' },
    { name: 'Partner 5', image: 'partner5.jpg' }
  ];

  return (
    <>
    <Header/>
    <div className="company-page">
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          {services.map((service, index) => (
            <div key={index} className="service">
              <FontAwesomeIcon icon={service.icon} size="3x" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <h3 className='companylist'>Our Esteemed Companies</h3>
      <CompanySlider/>
      </div>
      <Footer/>
      
    </>
     
  );
};

export default CompanyPage;