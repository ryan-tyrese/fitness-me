export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <>
      <footer className="bg-white flex flex-col items-center mt-auto">
        <div className="text-gray-500 text-center w-full p-10">
          <h1 className="text-2xl font-bold lg:text-3xl text-black text-center">
            Fit
          </h1>
          <p className="font-semibold text-sm">&copy; {currentYear} Fit, Inc.</p>
          <p className="text-sm">All rights reserved.</p>
          <a
            href="/"
            className="hover:underline decoration-black hover:text-black"
          >
            <p className="underline decoration-gray-500 text-sm">Terms of use</p>
          </a>
          <a
            href="/"
            className="hover:underline decoration-black hover:text-black"
          >
            <p className="underline decoration-gray-500 text-sm">Privacy Policy</p>
          </a>
        </div>
      </footer>
    </>
  );
}
