import Link from "next/link";

const WaveSvg = () => {
  return (
    <div id={`home-cta`} className={``}>
      <div className={`relative`}>
        <div className={`absolute md:py-20 lg:py-44 py-14 lg:px-10`}>
          <div className={`grid grid-cols-1`}>
            <div className={`w-full h-fit col-span-1`}>
              <h1
                className={`text-center md:text-6xl lg:text-7xl xl:text-9xl text-3xl font-base text-slate-800
               drop-shadow-2xl rounded-xl px-10`}
              >
                {/*<h1 className={`text-center md:text-6xl lg:text-7xl xl:text-9xl text-4xl font-extrabold text-slate-800`}>*/}
                {/*We help Banks and Payment Processors transform their digital*/}
                {/*ambitions into reality!*/}
                Unlock the Power of Seamless Payments and Digital
                Transformation!
              </h1>
            </div>

            <div
              className={`w-full h-full col-span-1 flex justify-center items-center`}
            >
              <Link
                href={"#"}
                className={`md:mt-10 mt-5 md:h-12 h-9 rounded-xl bg-transparent md:px-6 px-3 py-2 font-base md:text-lg lg:text-2xl text-sm
                tracking-wide text-slate-200 hover:text-slate-800 shadow-xl shadow-secondary-colour border border-white/50 transition-all
                duration-600 hover:bg-secondary-colour hover:shadow-lg hover:shadow-secondary-colour
                hover:scale-105 hover:border-accent-colour`}
              >
                <span>Transform Your Business Today</span>
              </Link>
              {/*  <button*/}
              {/*  className={`md:mt-10 mt-5 md:h-12 h-9 rounded-xl bg-transparent md:px-6 px-3 font-base md:text-lg lg:text-2xl text-sm*/}
              {/*    tracking-wide text-slate-200 hover:text-slate-800 shadow-xl shadow-secondary-colour border border-white/50 transition-all*/}
              {/*    duration-600 hover:bg-secondary-colour hover:shadow-lg hover:shadow-secondary-colour*/}
              {/*    hover:scale-105 hover:border-accent-colour`}*/}
              {/*>*/}
              {/*  <span>Transform Your Business Today</span>*/}
              {/*</button>*/}
            </div>
          </div>
        </div>
        <object
          className={`object-scale-down`}
          type="image/svg+xml"
          data="/assets/home/dpts-home-cta.svg"
        >
          svg-animation
        </object>
      </div>
    </div>
  );
};

export default WaveSvg;
