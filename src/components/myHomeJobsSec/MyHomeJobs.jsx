import './myHomeJobs.css'
import bg from '../../assets/home-jobs/bg.png'
import { useNavigate } from 'react-router-dom'
export default function MyHomeJobs() {
  const navigate = useNavigate();
  return (
    <div className='myHomeJobs__handler'
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-10">
            <p>
              We pride ourselves with our great company culture
            </p>
            <h3>
              Always looking for top talents
            </h3>
            {/* <button className='gradient_btn' onClick={()=> navigate('/fill-application-form')}>
              Find available jobs
              <i className="bi bi-arrow-right-short"></i>
            </button> */}
            <button className='gradient_btn' onClick={()=> navigate('/careers')}>
              Find available jobs
              <i className="bi bi-arrow-right-short"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
