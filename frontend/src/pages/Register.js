import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../features/Auth/authSlice';
import Spinner from '../components/Spinner';


function Register() {
    const [formData, setFormData] = useState({
        name: ' ',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isloading, isError, isSuccess, message } = useSelector((state) => state.auth);

    //useEffect
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
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault();

        //check for password mismatch
        if (password !== password2) {
            toast.error('Password Mismatch');

        } else {
            const userData = {
                name,
                email,
                password,
            }

            dispatch(register(userData))
        }
        if(isloading){
            return <Spinner/>
        }
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
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text"
                            className='form-control'
                            id='name'
                            name='name'
                            value={name}
                            onChange={onChange}
                            placeholder="Enter Your Name"
                        />
                    </div>
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
                        <input
                            type="password2"
                            className='form-control'
                            id='password2'
                            name='password2'
                            value={password2}
                            onChange={onChange}
                            placeholder="Confirm Your Password"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className='btn btn-block'>Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register