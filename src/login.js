import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='container'>
        <div className="row">
          <div className="offset-md-2 col-md-8 mt-5">
            
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  <h4>Welcome to My App</h4>
                  <p>Please login to continue!</p>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input id='username'
                    className='form-control' autoComplete='off'/>
                  </div>

                  <div className="form-group mt-4">
                    <label>Password</label>
                    <input id='password'
                    className='form-control' autoComplete='off'/>
                  </div>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-primary'>
                    <Link exact to="/Login" className='text-decoration-none text-dark'>Login</Link>
                    </button>

                    <button className='btn btn-warning '
                    style={{
                      float: 'right'
                    }}>
                        <Link exact to="/Registration" className='text-decoration-none text-dark'>Create an Account</Link>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
