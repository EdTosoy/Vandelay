import { Link } from "react-router-dom";
import FormInput from "./FormInput";
import PrimaryButton from "./PrimaryButton";
import ToggleSwitch from "./ToggleSwitch";

function SignInForm() {
  return (
    <div className=" w-452  bg-white  pr-16 pl-0  ">
      <div className="mb-10 ">
        <h1 className="text-cyan text-3xl font-bold">Welcome Back</h1>
        <p className="text-gray200 font-bold ">
          Enter your email and password to sign in
        </p>
      </div>
      <form action="">
        <div className="mb-6">
          <FormInput label="Email" placeholder="Your email address" />
        </div>
        <div className="mb-6">
          <FormInput label="Password" placeholder="Your password" />
        </div>
      </form>

      <div className="flex items-center pb-2 ">
        <ToggleSwitch />
        <p className="text-xs ml-3 -mb-2 text-gray900">Remember me</p>
      </div>
      <div>
        <PrimaryButton name="SIGN IN" />
      </div>
      <div className="text-center">
        <p className="text-gray200 text-sm">
          Don't have an account?{" "}
          <Link to={"/"} className="text-cyan ">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignInForm;
