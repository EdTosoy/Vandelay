import { Link } from "react-router-dom";
import FormInput from "./FormInput";
import PrimaryButton from "./PrimaryButton";
import SignUpWithLogo from "./SignUpWithLogo";
import ToggleSwitch from "./ToggleSwitch";

function SignUpForm() {
  return (
    <div className="border p-12 rounded-2xl mb-4 flex flex-col justify-center w-452 bg-white form-shadow">
      <h4 className="font-bold text-lg mb-3">Register with</h4>
      <div className="flex justify-center ">
        <SignUpWithLogo iconName="logo-facebook" />
        <SignUpWithLogo iconName="logo-apple" />
        <SignUpWithLogo iconName="logo-google" />
      </div>
      <h4 className="font-bold text-lg mt-4 text-gray200">or</h4>

      <form action="">
        <FormInput label="Name" placeholder="Your full name" />
        <FormInput label="Email" placeholder="Your email address" />
        <FormInput label="Password" placeholder="Your password" />
      </form>

      <div className="flex items-center pb-2 ">
        <ToggleSwitch />
        <p className="text-xs ml-3 -mb-2  text-gray900">Remember me</p>
      </div>
      <div>
        <PrimaryButton name="SIGN UP" />
      </div>
      <div>
        <p className="text-gray200 text-sm">
          Already have an account?{" "}
          <Link to={"sign-in"} className="text-cyan ">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
