import { IoTelescopeSharp } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa";

const VisionAndMission = () => {
  const data = [
    {
      title: "Vision",
      content: [
        "Empowering Future Payments Through Innovative Solutions",
        "We envision a world where payments are seamless, secure, and tailored to individual needs. Our commitment lies in shaping the future of payment systems by architecting innovative solutions that elevate businesses and enhance user experiences. Through collaboration and cutting-edge technology, we aspire to drive global advancements in the payment landscape.",
      ],
      icon: (
        <IoTelescopeSharp className={"w-12 h-12 mx-auto text-darker-purple"} />
      ),
    },
    {
      title: "Mission",
      content: [
        "At our core, we are dedicated to delivering transformative payment strategies. Our mission is to partner with organizations, leveraging our expertise as Payment Consultants and Enterprise Solutions Architects.",
        "We collaborate closely with clients, understanding their unique challenges and goals, to design tailored payment ecosystems that redefine industry standards. By harnessing our extensive experience and embracing emerging trends, we empower businesses to thrive in an ever-evolving payment landscape.",
      ],
      icon: (
        <FaBusinessTime className={"w-12 h-12 mx-auto text-primary-colour"} />
      ),
    },
  ];

  const cards = data.map((card, idx) => {
    return (
      <div key={idx} className="col-span-4 lg:col-span-6 flex">
        <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 flex-grow">
          <figure className="p-6 pb-0">{card.icon}</figure>
          <div className="p-6">
            <h3 className="mb-4 text-2xl font-medium text-slate-700 text-center">
              {card.title}
            </h3>
            {card.content.map((paragraph, idx) => {
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          {cards}
        </div>
      </div>
    </section>
  );
};

export default VisionAndMission;
