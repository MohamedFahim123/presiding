import { Table } from 'react-bootstrap';
import styles from './careerJopsTable.module.css'
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
export default function CareerJopsTable({currData}) {
    const navigate = useNavigate();

    console.log(currData)

    return (
        <div className={`${styles.careerJopsTable__handler}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className={`${styles.careerJops__header}`}>
                            Job Openings
                        </h2>
                        <div className={`${styles.jobsTable_sec}`}>
                            <Table responsive>
                                <thead>
                                    <tr className={`${styles.table__Header}`}>
                                        <th className={` ${styles.jopTitle}`}>
                                            job Title
                                        </th>
                                        <th className=''>Employment Type</th>
                                        <th className=''>job Type</th>
                                        <th className=''>Location</th>
                                        <th className=''>Experience Level</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currData?.jobs?.map((row, index) => (
                                        <tr className={`${styles.table__Body}`} key={index}>
                                            <td title={row?.title} className={`${styles.BodyJopTit}`}>
                                                <NavLink to={`job-Details/${row?.id}`} className={'nav-link'}>
                                                    {row?.title}
                                                </NavLink>
                                            </td>
                                            <td>
                                                {}
                                            </td>
                                            <td title={row?.job_type}>
                                                {row?.job_type}
                                            </td>
                                            <td title={row?.city} className={`${styles.countryStyle}`}>
                                                {row?.city}
                                            </td>
                                            <td title={row?.years_of_experience}>
                                                {row?.years_of_experience}
                                            </td>
                                            <td className={`${styles.tableActions}`}>
                                                <button onClick={()=> navigate(`/careers/job-details/${row?.id}`)} className={`${styles.applayBtn}`}>
                                                    apply
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
CareerJopsTable.propTypes = {
    currData: PropTypes.array,
}