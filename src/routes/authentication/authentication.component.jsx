import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import { Forms } from './authentication.styles';

const AuthenticationPage = () => (
  <Forms>
    <SignInForm />
    <SignUpForm />
  </Forms>
);

export default AuthenticationPage;