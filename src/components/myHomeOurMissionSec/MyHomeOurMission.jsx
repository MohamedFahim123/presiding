import './myHomeOurMission.css'
import MyMainHeader from '../myMainHeaderSec/MyMainHeader'
export default function MyHomeOurMission() {
    return (
        <div className='ourMission__handler'>
            <div className="container">
                <div className="mission_header">
                <MyMainHeader
                    secHead='OUR MISSION'
                    secText='HELPING ENTITIES STAND OUT'
                />  
                </div>
                <div className="row">
                    <div className="col-lg-10">
                        <div className="missionInfo__handler">
                            <div className="missionInfo_text">
                                <p className='mb-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non lacus vehicula, maximus lorem malesuada, condimentum felis. Praesent posuere quam a rutrum dignissim.
                                </p>
                                <p>
                                    Pellentesque dolor sapien, lobortis vel pulvinar rhoncus, auctor consectetur dolor. Aliquam eget velit vel massa ornare tincidunt. Nunc sagittis in urna quis sagittis. Morbi dignissim eleifend orci a iaculis. Proin nunc justo, dictum vitae ante ut, accumsan tristique tellus. In lectus velit, dictum ut pretium non, placerat nec ante.
                                    Duis congue mauris ac nibh congue tristique. Aenean eget felis faucibus neque placerat volutpat. Ut nec risus consectetur, elementum enim a, malesuada sapien. Praesent scelerisque ligula ac orci ultrices semper. Nunc fringilla nulla ut tellus pharetra facilisis nec rhoncus ipsum. Nam lacus augue, suscipit eget dui eu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
