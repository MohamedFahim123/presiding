
import { useEffect, useState } from 'react';
import CustomCrudFields from '../../custom/CustomCrudFields'
import PropTypes from 'prop-types';

export default function LanguageFeild({ setValue,errors, langs, handleAddField, handleDeleteField, handleInputChange }) {
    const [languagesFeilds, setLanguagesFields] = useState(
        [
            {
                id: Date.now(),
                value: '',
                radioBtnValue: '',
                radioBtn: [{ value: 'beginner' }, { value: 'intermediate' }, { value: 'fluent' }],
            }
        ]
    );

    useEffect(() => {
        setValue('languages', languagesFeilds.map(field => ({ languages_id: field.value, level: field.radioBtnValue })));
    }, [languagesFeilds]);

    return (
        <>
            <h3 className="my-3">
                Languages
            </h3>
            <CustomCrudFields
                error={errors?.languages_id}
                fields={languagesFeilds}
                options={langs}
                setFields={setLanguagesFields}
                handleAddField={handleAddField}
                handleDeleteField={handleDeleteField}
                handleInputChange={handleInputChange}
                labelName={'Language'}
            />
        </>
    );
};
LanguageFeild.propTypes = {
    errors: PropTypes.object,
    langs: PropTypes.array,
    handleAddField: PropTypes.func,
    handleDeleteField: PropTypes.func,
    handleInputChange: PropTypes.func,
    setValue: PropTypes.func,
}