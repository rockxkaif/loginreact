import logo from './images/logo.png';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import './login.css';

const myStyles = makeStyles(() => ({
    mycard: {
        marginTop: '10rem',
        boxShadow: '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)'
    }
}))

const Login = () => {

    const classes = myStyles();

    return (
        <div>
            <div className="col-md-3 mx-auto" >
                <div className={clsx('card', classes.mycard)} style={{ marginTop: '10rem' }}>
                    <div className="card-body">

                        <div className="col-md-2 mx-auto mt-4">
                            <img src={logo} className="img-fluid" />
                        </div>

                        <label className="mt-5 w-100">Username</label>
                        <input className="form-control" />

                        <label className="mt-4">Password</label>
                        <input className="form-control" type="password" />

                        <button className="mt-5 btn btn-primary w-100">Login Now</button>

                        <hr className="mt-4" />
                        <a href="#">Forgot Password</a>
                        <div className="float-end">
                            <a href="#">Not Registered Yet?</a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}


export default Login;
