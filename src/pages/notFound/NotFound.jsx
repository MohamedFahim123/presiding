import styles from './notFound.module.css';
import notFoundImg from './404-not-found.png';
import { useNavigate } from 'react-router-dom';
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={styles.notFound__handler}>
      <img src={notFoundImg} alt="not found page" />
      <button onClick={() => navigate('/')} className="btn btn-outline-primary submitApplicationBtn py-2">Back To Home</button>
    </div>
  );
};
