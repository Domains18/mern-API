import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser, reset } from '../features/Auth/authSlice';
import Spinner from '../components/Spinner';



function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password, } = formData

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isloading, isError, isSuccess, message } = useSelector((state) => state.auth);


    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess || user) {
            navigate('/');
        }
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    const onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email,
            password
        }

        dispatch(loginUser(userData))
    }

    if (isloading) {
        return <Spinner />
    }
    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Login To Your Account</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text"
                            className='form-control'
                            id='email'
                            name='email'
                            value={email}
                            onChange={onChange}
                            placeholder="Enter Your Email"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className='form-control'
                            id='password'
                            name='password'
                            value={password}
                            onChange={onChange}
                            placeholder="Enter Your Password"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className='btn btn-block'>Submit</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Register