import React from "react";
import styles from "./services.module.css";

const ServiceCard = ({ image, title, description }) =>{
    return(

    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image}  />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
    );
};

export default ServiceCard;