import React from "react";
import styles from './services.module.css';
import ServiceCard from "../../components/ServicePage/ServiceCard";
import im1 from "../../images/im1-services.webp";
import im2 from "../../images/im2-services.jpeg";
import im3 from "../../images/im3-services.jpg";


const ServicePage = () => {

    const services=[
        {
            image: im1, 
            title: 'Comprehensive Legal Database',
            description: 'Access a regularly updated database with extensive legal documents, court cases, and statutes across various jurisdictions.'

        },

        {
            image: im2, 
            title: 'Advanced Search Engine',
            description: 'Utilize our powerful search engine capable of handling complex queries and filtering results by jurisdiction, date, and legal domain.'

        },

        {
            image: im3, 
            title: 'AI-Powered Predictive Analytics',
            description: 'Leverage AI tools to extract key legal principles, forecast case outcomes, and receive personalized recommendations tailored to your needs.'

        }
    ]
    
    return(
        <div className={styles.servicesSection}>
            <div className={styles.header}>
                <h2>SERVICES</h2>
            </div>
            <div className={styles.servicesCards}>
                {services.map((service,index) => (
                    <ServiceCard
                        key={index}
                        image={service.image}
                        title={service.title}
                        description={service.description}
                    />
                ))}

            </div>

        </div>
    );

}


export default ServicePage