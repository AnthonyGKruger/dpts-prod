"use client";
import HeroSVG from "@/components/home/HeroSVG";
import { useState } from "react";

const Hero = () => {
  const containerClasses = `py-6 place-self-center pr-10 transition-all duration-700`;
  const headingClasses = `text-3xl text-primary-colour transition-all duration-700 text-center`;
  const paragraphClasses = `mt-5 md:text-md lg:text-lg transition-all duration-700`;
  const buttonContainerClasses = `w-full h-full col-span-1 flex justify-center items-center transition-all duration-300`;
  const buttonClasses = `md:mt-10 mt-5 md:h-12 h-9 rounded-xl bg-primary-colour md:px-6 px-3 font-base md:text-lg text-md
                tracking-wide text-slate-50 hover:text-slate-800 shadow-xl shadow-secondary-colour border border-white/50 transition-all
                duration-400 hover:bg-secondary-colour hover:shadow-lg hover:shadow-secondary-colour
                hover:scale-105 hover:border-accent-colour transition-all duration-700`;

  const [serviceData, setServiceData] = useState(
    <div className={containerClasses}>
      <h3 className={headingClasses}>Enterprise Architecture Planning</h3>
      <p className={paragraphClasses}>
        Are you ready to transform your organization and unlock its true
        potential? Embrace the power of Enterprise Architecture Planning (EAP)
        today and take the first step towards achieving unparalleled efficiency,
        agility, and innovation?
      </p>
      <p className={paragraphClasses}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        By leveraging EAP, you'll gain invaluable insights into your business
        processes, technology landscape, and data infrastructure, allowing you
        to make informed decisions that drive growth and success.
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Don't wait any longer; seize the opportunity to optimize your resources,
        enhance collaboration, and align your business goals with IT strategies.
      </p>
      <p className={paragraphClasses}>
        Embrace the future of enterprise excellence with EAP - the ultimate
        catalyst for sustainable and competitive advantage. Act now and witness
        the profound impact of Enterprise Architecture Planning as it
        revolutionizes the way your organization operates. Your success story
        starts here, so take the leap into a brighter and more prosperous future
        today!
      </p>
      <div className={buttonContainerClasses}>
        <button className={buttonClasses}>Contact Us Now!</button>
      </div>
    </div>,
  );

  const architectureServices = [
    {
      id: "eap",
      title: `Enterprise Architecture Planning`,
      description: [
        `Are you ready to transform your organization and unlock its true potential? Embrace the power of Enterprise Architecture Planning (EAP) today and take the first step towards achieving unparalleled efficiency, agility, and innovation?`,
        `By leveraging EAP, you'll gain invaluable insights into your business processes, technology landscape, and data infrastructure, allowing you to make informed decisions that drive growth and success. Don't wait any longer; seize the opportunity to optimize your resources, enhance collaboration, and align your business goals with IT strategies.`,
        `Embrace the future of enterprise excellence with EAP - the ultimate catalyst for sustainable and competitive advantage. Act now and witness the profound impact of Enterprise Architecture Planning as it revolutionizes the way your organization operates. Your success story starts here, so take the leap into a brighter and more prosperous future today!`,
      ],
    },
    {
      id: "ba",
      title: `Business Architecture`,
      description: [
        `
Are you ready to transform your business and drive unparalleled success? Embrace the power of Business Architecture, your key to unlocking the full potential of your organization. Our expert team is here to guide you through the intricacies of aligning your strategy, processes, and technology, creating a solid foundation for growth and innovation.`,
        `Don't let opportunities slip away—take charge now and build a future-proof business that stands the test of time. Join us on this transformative journey and witness the remarkable impact Business Architecture can make on your bottom line. Seize the moment and reach new heights of excellence today!`,
      ],
    },
    {
      id: "aa",
      title: `Application Architecture`,
      description: [
        `
Are you tired of dealing with complex and inefficient software applications that slow down your business processes? It's time to revolutionize your application architecture! Embrace cutting-edge technology and streamline your operations with our expertly crafted solutions. Our team of skilled architects will assess your unique requirements and design a scalable, secure, and high-performance application architecture tailored to your needs.`,
        `Don't let outdated systems hold you back any longer. Take the leap into the future of application architecture and watch your business soar to new heights. Contact us now and let's build the foundation for your success together!`,
      ],
    },
    {
      id: "da",
      title: `Data Architecture`,
      description: [
        `Are you ready to unlock the full potential of your data? Embrace the power of efficient and robust data architecture, the foundation upon which data-driven organizations thrive. From seamless data integration and enhanced security to accelerated analytics and business intelligence, our data architecture solutions are designed to transform your data into actionable insights.`,
        `Don't let your valuable information remain untapped; take charge of your data destiny today. Join us on this transformative journey and witness the extraordinary possibilities that a well-designed data architecture can unleash for your organization. Together, let's sculpt a data landscape that drives innovation, enhances decision-making, and propels your business to unprecedented heights. Act now and harness the true power of your data!`,
      ],
    },
    {
      id: "ta",
      title: `Technology Architecture`,
      description: [
        `Embrace the future of innovation with our cutting-edge Technology Architecture solutions! Witness the seamless integration of advanced technologies to drive your business towards unprecedented success. Empower your organization with the robust framework, unparalleled scalability, and heightened security that our architecture offers.`,
        `Unleash the potential of your digital transformation journey and stay ahead of the competition in today's dynamic landscape. Join us on this transformative ride, where your aspirations meet reality, and together, we'll build a technology-driven tomorrow like never before. Take the first step towards a revolutionary change – explore our Technology Architecture offerings today! `,
      ],
    },
    {
      id: "sa",
      title: `Security Architecture`,
      description: [
        `
Are you concerned about the safety and integrity of your digital assets? Don't wait for a security breach to happen; take proactive measures now to safeguard your organization's critical information with a robust Security Architecture. Our expert team will meticulously analyze your current infrastructure, identify vulnerabilities, and design a comprehensive security framework tailored to your unique needs.`,
        `Protect your data, preserve your reputation, and ensure peace of mind for your stakeholders. Embrace the power of a strong Security Architecture and fortify your defenses against evolving cyber threats. Get in touch today and let us help you build a safer, more resilient future for your business. Remember, security is not an option; it's an imperative. Act now!`,
      ],
    },
    {
      id: "ia",
      title: `Integration Architecture`,
      description: [
        `Are you tired of dealing with complex and disconnected systems? Imagine a seamless, efficient, and integrated digital ecosystem that streamlines your business processes, saving you time and resources. Embrace the power of Integration Architecture, the key to unlocking the full potential of your organization.`,
        `Our expert team will design and implement a cutting-edge solution tailored to your unique needs, enabling smooth data flow, real-time insights, and enhanced collaboration across all your applications.`,
        `Say goodbye to silos and hello to a unified and agile future. Step into a world of unparalleled efficiency and productivity – take the leap with Integration Architecture today and revolutionize the way you do business. Together, we'll transform your challenges into opportunities and drive your success to new heights. Don't wait any longer; embrace the future now!`,
      ],
    },
    {
      id: "dtc",
      title: "Digital Transformation Consulting",
      description: [
        `Are you ready to revolutionize your business and stay ahead in the digital age? Embrace the power of digital transformation with our expert consulting services! At DPTS, we understand that surviving and thriving in today's fast-paced world requires adapting to the latest technologies and trends.`,
        `Our dedicated team of seasoned consultants will work closely with you to develop tailored strategies, implement cutting-edge solutions, and optimize your operations for increased efficiency and profitability.`,
        `Don't let your competitors outpace you - take charge of your digital future now! Join us on this transformative journey and unlock the true potential of your business. Contact us today and let's pave the way to a brighter, digitally empowered tomorrow. Together, we'll reshape your business for sustainable success.`,
      ],
    },
  ];

  const onClickHandler = (event) => {
    setServiceData(
      architectureServices.map((service, idx) => {
        if (service.id === event.target.attributes.dataid.value) {
          return (
            <div key={idx} className={containerClasses}>
              <h3 className={headingClasses}>{service.title}</h3>
              {service.description.map((paragraph, idx) => {
                return (
                  <p className={paragraphClasses} key={idx}>
                    {paragraph}
                  </p>
                );
              })}
              <div className={buttonContainerClasses}>
                <button className={buttonClasses}>Contact Us Now!</button>
              </div>
            </div>
          );
        }
      }),
    );
  };

  return (
    <section>
      <div className="container px-6 m-auto py-20">
        <div>
          <h2 className={`text-center font-light text-4xl tracking-wide`}>
            All About Enterprise Architecture
          </h2>
          <h2 className={`mt-5 text-center font-light text-lg`}>
            use the clickable parts of the image to see more!
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-6 md:grid-cols-4 lg:grid-cols-12 lg:py-10">
          <div className="col-span-4 md:col-span-4 lg:col-span-6 self-center">
            <HeroSVG onClickHandler={onClickHandler} />
          </div>
          <div className="col-span-4 md:col-span-4 lg:col-span-6 place-items-center  md:px-20 lg:px-0">
            {serviceData}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
