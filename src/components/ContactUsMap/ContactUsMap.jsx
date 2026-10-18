import styles from './contactUsMap.module.css';

export default function ContactUsMap() {
    return (
        <div className={`${styles.map_container}`}>
            <div className={styles.mockMap} role="img" aria-label="Map preview showing Presiding in Riyadh, Saudi Arabia">
                <div className={styles.mapRoadOne} />
                <div className={styles.mapRoadTwo} />
                <div className={styles.mapRoadThree} />
                <div className={styles.mapLocation}>
                    <span className={styles.mapPin}><i className="bi bi-geo-alt-fill" /></span>
                    <span className={styles.mapLabel}>Riyadh, Saudi Arabia</span>
                </div>
                <span className={styles.mapCaption}>Presiding office · 24.7136° N, 46.6753° E</span>
            </div>
        </div>
    );
};
