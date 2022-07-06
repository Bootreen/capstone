import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';
import SignInForm from '../../components/sign-in-form/sign-in-form.component.jsx';
import { Forms } from './authentication.styles.jsx';

const AuthenticationPage = () => (
  <Forms>
    <SignInForm />
    <SignUpForm />
  </Forms>
);

export default AuthenticationPage;