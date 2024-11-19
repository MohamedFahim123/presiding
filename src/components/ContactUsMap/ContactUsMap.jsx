import styles from './contactUsMap.module.css';

export default function ContactUsMap() {
    return (
        <div className={`${styles.map_container}`}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492525.947927653!2d34.480823254772446!3d31.257561052818215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15006f476664de99%3A0x8d285b0751264e99!2sJordan!5e0!3m2!1sen!2seg!4v1732018080993!5m2!1sen!2seg"
                width="100%"
                className={styles.contactMap}
                height="550"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};
