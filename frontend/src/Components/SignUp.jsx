import React from 'react'

const SignUp = () => {
  return (
    <div>
      <h1>Sign up:</h1>
      <div>
        User name: <input type="text" />
        Email: <input type="email" name="email" id="email" />
        password: <input type="password" />
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default SignUp
