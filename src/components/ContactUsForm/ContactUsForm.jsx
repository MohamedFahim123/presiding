import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { ContactFormShema } from "../../validation/ContactShema";
import CustomInput from "../../custom/CustomInput";
import styles from './contactUsForm.module.css';
import toast from "react-hot-toast";

export default function ContactUsForm() {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        },
        resolver: zodResolver(ContactFormShema),
    });

    const formInputs = [
        {
            error: errors?.name?.message, type: 'text', placeholder: 'Full Name', name: 'name', lableName: 'Full Name', id: 'contactUsFullName'
        },
        {
            error: errors?.email?.message, type: 'email', placeholder: 'Example@gmail.com', name: 'email', lableName: 'Email', id: 'contactUsEmail'
        },
        {
            error: errors?.phone?.message, type: 'number', placeholder: '+0 123 456 789', name: 'phone', lableName: 'Phone Number', id: 'contactUsPhone'
        },
        {
            error: errors?.subject?.message, type: 'text', placeholder: 'Subject', name: 'subject', lableName: 'Subject', id: 'contactUsSubject'
        },
    ];

    const onSubmit = async (data) => {
        const toastId = toast.loading('loading...');
        void data;
        reset();
        toast.success('Demo mode: your message was submitted locally.', {
            id: toastId,
            duration: 1800,
        });
    };

    return (
        <div className="applicationForm__handler">
            <div className="container py-5">
                <h2 className={`text-center mb-5 ${styles.heading}`}>
                    Submit Your Request
                </h2>
                <form className="row" onSubmit={handleSubmit(onSubmit)}>
                    {
                        formInputs?.map((formInput, idx) => (
                            <div key={idx} className="col-md-6 my-2">
                                <CustomInput error={formInput.error} type={formInput.type} register={register} placeholder={formInput.placeholder} name={formInput.name} lableName={formInput.lableName} id={formInput.id} />
                            </div>
                        ))
                    }
                    <div className="col-lg-6 mt-2 mb-4">
                        <label htmlFor="contactUsMessage">Message </label>
                        <textarea
                            placeholder="Message"
                            className={`form-control ${errors?.message && 'error_input'}`}
                            {...register('message')}
                            id="contactUsMessage"
                        >
                        </textarea>
                        {
                            errors?.message?.message &&
                            <span className="error_message">{errors?.message?.message}</span>
                        }
                    </div>
                    <div className="col-12">
                        <button type="submit" disabled={isSubmitting} className="btn btn-outline-primary submitApplicationBtn py-2">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
