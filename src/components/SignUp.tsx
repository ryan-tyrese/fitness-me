import appleLogo from "../assets/apple-icon.svg";
import googleLogo from "../assets/google-icon.svg";
import emailLogo from "../assets/email.svg";

export default function SignUp() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 pb-20 mx-auto flex flex-col items-center text-center">
          <div className="flex flex-col">
            <h1 className="title-font font-medium text-3xl text-black">
              What are you waiting for?
            </h1>
            <p className="mt-4">
              Sign-up now to get a range of options for your fitness journey.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-20">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <button className="text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 rounded text-lg mb-3">
              <span className="flex">
                <img
                  src={googleLogo}
                  alt="Google Logo"
                  className="h-8 w-7 mr-6 md:mr-8 lg:mr-13"
                />
                Sign Up: Google
              </span>
            </button>
            <button className="text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 rounded text-lg mb-3">
              <span className="flex">
                <img
                  src={appleLogo}
                  alt="Google Logo"
                  className="h-8 w-7 mr-6 md:mr-8 lg:mr-13"
                />
                Sign Up: Apple
              </span>
            </button>
            <button className="text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 rounded text-lg mb-3">
              <span className="flex">
                <img
                  src={emailLogo}
                  alt="Google Logo"
                  className="h-8 w-7 mr-6 md:mr-8 lg:mr-13"
                />
                Sign Up: Email
              </span>
            </button>
            <p className="text-xs text-gray-500 mt-3">
              "It always seems impossible until it's done" - Nelson Mandela
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
