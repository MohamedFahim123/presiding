import styles from './contactUsMainTextSection.module.css';

export default function ContactUsMainTextSection() {
    return (
        <div className={styles.contact_section}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-md-0 mb-3">
                        <h2 className={styles.head}>
                            Want to make your business better? Contact us today!
                        </h2>
                    </div>
                    <div className="col-md-6">
                        <p className={styles.text}>
                            Our team is ready to assist you and address any queries you may have. We eagerly await your communication.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};