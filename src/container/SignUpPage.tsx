import Footer from "../components/Footer";
import Header from "../components/Header";
import SignUpForm from "../components/SignUpForm";

function SignUpPage() {
  return (
    <div className="grid-container bg-signUpBG bg-no-repeat bg-top ">
      <Header />
      <div className="col-start-2 col-end-3 text-center justify-between items-center mb-4">
        <div className="my-14 text-white">
          <h2 className="text-4xl font-bold mb-3">Welcome!</h2>
          <p className="text-sm ">
            Use these awesome forms to login or create new <br /> account in
            your project for free.
          </p>
        </div>
        <div className="flex place-content-center">
          <SignUpForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUpPage;
