import AuthTemplate from "./auth-template"
import { LoginForm } from "../login-form"


function Register() {

  return (
    <>
      <AuthTemplate>
        <LoginForm />
      </AuthTemplate>
    </>
  )
}

export default Register