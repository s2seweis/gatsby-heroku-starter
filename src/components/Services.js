import React from 'react';
import Title from './Title';
import services from '../constants/services';
import '../assets/css/service.css';

const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="services" />
      <div className="section-center services-center">
        {services.map (service => {
          const {id, icon, title, text1, text2} = service;
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline" />
              <p style={{wordBreak: 'break-word'}}>{text1}</p>
              <p style={{wordBreak: 'break-word'}}>{text2}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;