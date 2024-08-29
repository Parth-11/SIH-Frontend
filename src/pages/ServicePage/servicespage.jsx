import React from "react";
import styles from './services.module.css';

const ServicePage = () => {

    const services=[
        {
            image: '', 
            title: 'Comprehensive Legal Database',
            description: 'Lorem ipsum dolor sit amet.'

        },

        {
            image: '', 
            title: 'Comprehensive Legal Database',
            description: 'Lorem ipsum dolor sit amet.'

        },

        {
            image: '', 
            title: 'Comprehensive Legal Database',
            description: 'Lorem ipsum dolor sit amet.'

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
                        description={service.description}
                    />
                ))}

            </div>

        </div>
    );

}


export default ServicePage