import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa'




function Register() {
    const [formData, setFormData] = useState({
        name: ' ',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData

    const onChange = () => {
        console.log('onChange')
    }
    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Create an Account</p>
            </section>
            <section className="form">
                <div className="form-group">
                    <form>
                        <input type="text"
                            className='form-control'
                            id='name'
                            name='name'
                            value={name}
                            onChange={onChange}
                            placeholder="Enter Your Name"
                        />
                    </form>
                </div>
                <div className="form-group">
                    <form>
                        <input
                            type="password"
                            className='form-control'
                            id='password'
                            name='password'
                            value={password}
                            onChange={onChange}
                            placeholder="Enter Your Password"
                        />
                    </form>
                </div>
                <div className="form-group">
                    <form>
                        <input
                            type="password2"
                            className='form-control'
                            id='password2'
                            name='password2'
                            value={password2}
                            onChange={onChange}
                            placeholder="Confirm Your Password"
                        />
                    </form>
                </div>
            </section>
        </>
    )
}

export default Register