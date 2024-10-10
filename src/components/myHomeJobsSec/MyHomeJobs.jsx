import './myHomeJobs.css'
import bg from '../../assets/home-jobs/bg.png'
export default function MyHomeJobs() {
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
                    Always looking for the top talent
                    </h3>
                    <button className='gradient_btn'>
                    Find available jobs 
                    <i className="bi bi-arrow-right-short"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
