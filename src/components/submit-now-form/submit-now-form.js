import React from 'react';
import './submit-now-form.css'
import {testName, testEmail} from "../../utils";
class SubmitNowForm extends React.Component {
    state = {
        redirectToPreviousRoute: false,
        name: '',
        email: '',
        subject: '',
        letter: '',
    };

    handleSubmit = e => {
        e.preventDefault();

    };

    handleChange = e => {
        const value = e.currentTarget.value;
        const fieldName = e.currentTarget.dataset.fieldName;

        this.setState(prev => ({
            ...prev,
            [fieldName]: value,
        }))
    };

    validate = () => {
        const { name, email } = this.state;
        if (!testEmail(email)) {
            return false
        }
        if (!testName(name)) {
            return false
        }
        return true
    };

    render() {
      const { name, email, subject, letter } = this.state;
        return (
            <section className='submit-form'>
                <div className="container">
                    <div className="row">
                        <form className="needs-validation" noValidate onSubmit={this.handleSubmit}>
                            <div className="form-row">
                                <div className="col-md-4 mb-3">
                                    <input
                                        data-field-name={'name'}
                                        type={'text'}
                                        onChange={this.handleChange}
                                        placeholder={'Your name'}
                                        value={name}
                                        className="form-control"
                                           required />
                                        <div className="valid-feedback">
                                            Looks good!
                                            {/*Password must contain at least 6 characters!*/}
                                        </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <input className="form-control"
                                           data-field-name={'email'}
                                           type={'email'}
                                           onChange={this.handleChange}
                                           placeholder={'Email address'}
                                           value={email}
                                           required />
                                        <div className="invalid-feedback">
                                            Select the correct email address
                                        </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <input className="form-control"
                                           data-field-name={'subject'}
                                           type={'text'}
                                           onChange={this.handleChange}
                                           placeholder={'Subject'}
                                           value={subject}
                                           required />
                                    <div className="invalid-feedback">
                                        Please choose a subject name.
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-12">
                                    <textarea className="form-control"
                                              data-field-name={'name'}
                                              onChange={this.handleChange}
                                              value={letter}
                                              required>
                                    </textarea>
                                    <div className="invalid-feedback">
                                        The letter must contain at least 10 characters
                                    </div>
                                    <button disabled={!this.validate()} type="submit" className="btn btn-lg btn-block" >
                                        Submit now
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default SubmitNowForm
