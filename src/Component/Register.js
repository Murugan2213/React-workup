import Form from "./Form";

const Register = () => {

    const Title = "Register";
    const WelcomeMsg = "Please Register Here";


    return (
        <div>
            <Form title = {Title} welcome = {WelcomeMsg}/>
        </div>
    )
}

export default Register;