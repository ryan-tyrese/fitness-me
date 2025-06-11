import loginLg from "../assets/login_lg.jpg";
import googleLogo from "../assets/google-icon.svg";
import appleLogo from "../assets/apple-icon.svg";
import emailLogo from "../assets/email.svg"

export default function LogIn() {
  return (
    <>
      <div className="min-h-screen relative">
        <img
          src={loginLg}
          alt="Small Login"
          className="hidden lg:block object-cover object-center"
        />
        <div className="absolute z-0 inset-0 flex flex-col items-center justify-center">
          <div className="bg-black opacity-90 rounded-lg p-4 md:p-8 w-4/5 md:w-3/5 lg:w-2/5 h-7/10 md:h-6/10 lg:h-8/10 xl:h-6/10 content-center">
            <div className="bg-black">
              <h1 className="text-white font-bold md:text-5xl text-center text-3xl">
                Log In
              </h1>
            </div>
            <div className="flex flex-col mt-10 mb-10 items-center">
              <button className="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg mb-4 w-9/10 h-8/10 md:w-8/10 md:h-5/10">
                <span className="flex justify-center">
                  <img
                    src={googleLogo}
                    alt="Google Logo"
                    className="h-8 w-7 mr-2 lg:mr-4"
                  />
                  Sign In: Google
                </span>
              </button>
              <button className="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg w-9/10 h-8/10 md:w-8/10 md:h-5/10">
                <span className="flex justify-center">
                  <img
                    src={appleLogo}
                    alt="Google Logo"
                    className="h-8 w-7 mr-2 lg:mr-4"
                  />
                  Sign In: Apple
                </span>
              </button>
              <p className="text-white m-7 font-bold md:text-lg">
                or 
              </p>
              <div className="text-left mb-5 w-9/10 h-8/10 md:w-8/10 md:h-5/10">  
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  placeholder="Email"
                  className="p-3 w-full h-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-gray-200 focus:bg-white border border-gray-300 focus:border-gray-500 text-base outline-none text-gray-700 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg w-9/10 h-8/10 md:w-8/10 md:h-5/10">
                <span className="flex justify-center">
                  <img
                    src={emailLogo}
                    alt="Google Logo"
                    className="h-8 w-7 mr-2 lg:mr-4"
                  />
                  Log In
                </span>
              </button>
              <p className="text-xs text-gray-500 m-3">
                "It always seems impossible until it's done" - Nelson Mandela
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
