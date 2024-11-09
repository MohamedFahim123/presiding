import PropTypes from "prop-types";

export default function ApplyBtn({isSubmitting}) {
    return (
        <div className="col-12 d-flex justify-content-center">
            <button disabled={isSubmitting} className="btn btn-outline-primary submitApplicationBtn py-2">Apply</button>
        </div>
    );
};

ApplyBtn.propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
}