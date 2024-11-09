import PropTypes from "prop-types";

export default function AttachMentsInputs({ register, errors, fillFrom }) {
    return (
        <>
            <h3 className="my-3">
                {
                    fillFrom ? 'Extra Informations' : 'Attachments'
                }
            </h3>
            <div className="col-lg-8 my-2">
                <label className='text-capitalize mb-1' htmlFor={'applyForAJobCVFile'}>Your CV <span className="requiredStar">*</span></label>
                <input
                    type="file"
                    id={'applyForAJobCVFile'}
                    className={`form-control ${errors?.cv?.message && 'error_input'}`}
                    {...register('cv')}
                    accept='.pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx'
                />
                {
                    errors?.cv?.message &&
                    <span className="error_message">{errors?.cv?.message}</span>
                }
            </div>
            {
                !fillFrom &&
                <div className="col-lg-8 my-2">
                    <label className='text-capitalize mb-1' htmlFor={'applyForAJobCVFile'}>Your Cover <span className="optional">( optional )</span></label>
                    <input
                        type="file"
                        id={'applyForAJobCoverLetter'}
                        className={`form-control ${errors?.cover_letter?.message && 'error_input'}`}
                        {...register('cover_letter')}
                    />
                    {
                        errors?.cover_letter?.message &&
                        <span className="error_message">{errors?.cover_letter?.message}</span>
                    }
                </div>
            }
        </>
    );
};

AttachMentsInputs.propTypes = {
    register: PropTypes.any.isRequired,
    errors: PropTypes.object,
    fillFrom: PropTypes.boolean,
};