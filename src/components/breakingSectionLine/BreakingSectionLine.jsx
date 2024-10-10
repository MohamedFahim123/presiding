import PropTypes from 'prop-types';
import styles from './breakingSectionLine.module.css';

export default function BreakingSectionLine({ text }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p className={styles.breakingLine}>{text ? text : ''}</p>
                </div>
            </div>
        </div>
    );
};

BreakingSectionLine.propTypes = {
    text: PropTypes.string.isRequired,
};