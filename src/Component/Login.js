import Form from "./Form";
import '../Styles/Login.css';

const Login = () => {

    const Title = "Login";
    const WelcomeMsg = "Please Login Here!";


    return (
        <div className="bg-success p-2 text-dark bg-opacity-25">
            
            <Form title = {Title} welcome = {WelcomeMsg}/>
        </div>
    )
}

export default Login;