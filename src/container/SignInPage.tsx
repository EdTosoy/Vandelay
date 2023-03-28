import Footer from "../components/Footer";
import Header from "../components/Header";
import SignInForm from "../components/SignInForm";

function SignInPage() {
  return (
    <div className="grid-container relative signInBG bg-no-repeat bg-right-top ">
      <Header glassBG />
      <div className="col-start-2 col-end-3  h-93vh grid items-center bg-white w-1/2 sticky -mt-20 ">
        <SignInForm />
      </div>
      <Footer />
    </div>
  );
}

export default SignInPage;
