export const metadata = {
  title: "Not Found - DPTS",
  description: "DPTS Not Found Page",
};

const notFound = () => {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <p className="text-indigo-600 text-4xl font-semibold sm:text-5xl">
            404 Error
          </p>
          <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
            Page not found
          </p>
          <p className="text-gray-600">
            Sorry, the page you are looking for could not be found or has been
            removed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/"
              className="block py-2 rounded bg-primary-colour px-5 text-lg font-medium tracking-wide text-white hover:text-black transition duration-300 hover:bg-secondary-colour focus:bg-darker-purple focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:shadow-none"
            >
              Continue Browsing
            </a>
            <a
              href="/contact"
              className="block py-2 rounded bg-primary-colour px-5 text-lg font-medium tracking-wide text-white hover:text-black transition duration-300 hover:bg-secondary-colour focus:bg-darker-purple focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:shadow-none"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default notFound;
