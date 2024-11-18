import PropTypes from 'prop-types'
import './myMainHeader.css'
export default function MyMainHeader({ secHead, secText ,secText2}) {
    return (
        <div className='header_ofSec py-4'>
            <p className='mb-1'>
                {secHead ? secHead : ''}
            </p>
            <h3>
                {secText ? secText : ''}
                <br />
                {
                    secText2 ? secText2 : ''
                }
            </h3>
        </div>
    )
}

MyMainHeader.propTypes = {
    secHead: PropTypes.string,
    secText: PropTypes.string.isRequired,
    secText2: PropTypes.string,
}