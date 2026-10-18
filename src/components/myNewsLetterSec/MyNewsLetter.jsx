import { useForm } from 'react-hook-form'
import './myNewsLetter.css'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewsLetterShema } from '../../validation/NewsLetter'
import toast from 'react-hot-toast';
export default function MyNewsLetter() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: {
            email: '',
        },
        resolver: zodResolver(NewsLetterShema),
    });

    const onSubmit = async (data) => {
        void data;
        toast.success('Demo mode: your subscription was saved for this preview.');
    };

    return (
        <div className='myNewsLetter__handler'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 m-auto">
                        <div className="myNewsLetterForm__handler">
                            <div className="row justify-content-center align-items-center px-3">
                                <div className="col-lg-6 col-md-6">
                                    <div className="NewsLetter__text mb-2">
                                        <p>
                                            Subscribe to our News Letter<br />
                                            to get latest insights & updates
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="NewsLetter__inputs">
                                            <input
                                                {...register('email')}
                                                className={`form-control ${errors?.email?.message && 'error_input'}`}
                                                type="text"
                                                placeholder='Enter your E-mail Address'
                                            />
                                            <button type='submit' disabled={isSubmitting} className='gradient_btn'>Get Started</button>
                                        </div>
                                        {
                                            errors?.email?.message &&
                                            <p className="error_message">{errors?.email?.message}</p>
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
