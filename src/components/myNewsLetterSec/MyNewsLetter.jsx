import './myNewsLetter.css'
export default function MyNewsLetter() {
    return (
        <div className='myNewsLetter__handler'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 ">
                        <div className="myNewsLetterForm__handler">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="NewsLetter__text">
                                        <p>
                                            Subscribe to our News Letter<br/>
                                            to get latest insights & updates
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <form action="">
                                        <div className="NewsLetter__inputs">
                                            <input className='form-control' type="text" placeholder='Enter your E-mail Address'/>
                                            <button className='gradient_btn'>Get Started</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
