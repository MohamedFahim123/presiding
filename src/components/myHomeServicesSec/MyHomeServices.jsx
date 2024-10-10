import './myHomeServices.css'
import MyMainHeader from '../myMainHeaderSec/MyMainHeader'
import img1 from '../../assets/serviceIcon/Vector (5).png'
import img2 from '../../assets/serviceIcon/Vector (6).png'
import img3 from '../../assets/serviceIcon/Vector (7).png'
import img4 from '../../assets/serviceIcon/Vector (8).png'
export default function MyHomeServices() {
    const serviceItems = [
        {
            servImg: img1,
            servTit: 'Management',
            servSubTit: 'Consultancy',
            servInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            servImg: img2,
            servTit: 'Financial',
            servSubTit: 'Consultancy',
            servInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            servImg: img3,
            servTit: 'Corporate Social',
            servSubTit: 'Responsibility',
            servInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            servImg: img4,
            servTit: 'Training &',
            servSubTit: 'Development',
            servInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
    ]
    return (
        <div className='myHomeServices__handler'>
            <div className="container">
                <>
                    <MyMainHeader 
                        secHead='OUR services'
                        secText='We create solutions that are bold & up with the times' 
                    />
                </>
                <div className="servicesItem__handler">
                    <div className="row mt-5 mb-3">
                        {
                            serviceItems.map((item, index)=>(
                            <div key={index} className="col-lg-3 col-md-3 mb-5">
                                <div className="serviceItem_box">
                                    <img src={item?.servImg} alt={`icon-${index}`} />
                                    <div className="serviceItem_info">
                                        <h3>
                                            {item?.servTit}<br/> {item?.servSubTit}
                                        </h3>
                                        <p>
                                            {item?.servInfo}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
