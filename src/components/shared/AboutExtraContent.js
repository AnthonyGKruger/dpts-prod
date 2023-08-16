import AboutDetails from "@/components/about/AboutDetails";

const AboutExtraContent = () => {
  return (
    <section className={"container mx-auto py-14"}>
      <AboutDetails
        title={"Passion and Approach"}
        subtitle={""}
        image={"/assets/about/insights copy.jpg"}
        details={[
          "Passionate about crafting seamless payment ecosystems, our consultancy is built on collaboration. We" +
            " work" +
            " closely with clients to tailor strategies that align with their unique goals. Drawing from a wealth of" +
            " experience, We offer actionable insights that deliver tangible outcomes.",
        ]}
        even={false}
      />
      <AboutDetails
        title={"Experience that Counts"}
        subtitle={""}
        image={"/assets/about/experience.jpg"}
        details={[
          "We've architectured payment solutions at leading institutions globally, optimizing customer experiences" +
            " and driving operational efficiency. From Africa's financial giants to the UK's innovation hub, our" +
            " journey reflects a commitment to pushing the boundaries of payment technology.",
        ]}
        even={true}
      />
    </section>
  );
};

export default AboutExtraContent;
