const ThankYou = () => {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          {/*<h3 className="text-indigo-600 font-semibold">404 Error</h3>*/}
          <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
            Thank You!
          </p>
          <p className="text-gray-600">
            We have received your payment and are currently processing your
            request. We will contact you to set up a suitable appointment date.
            <br />
            <br />
            In the meantime feel free to carry on browsing or you can contact us
            should you need any further assistance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/"
              className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg"
            >
              Continue Browsing
            </a>
            <a
              href="/contact"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;
