import '../css/login.css';
var bcrypt = require('bcryptjs');

function Login(){
    return (
    <div className="Login">
        <div className="signup sign">
            <span>SIGN UP</span>
        </div>
        <div className="vdiv"/>
        <div className="signin sign">
            <span>SIGN IN</span>
        </div>
    </div>)
}

export default Login;
