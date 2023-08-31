export const metadata = {
  title: "Service - DPTS",
  description: "DPTS service Page",
};

const ServicePage = ({ params, searchParams }) => {
  console.log("params:", params);

  const serviceId = params.id;

  return <h1>testing</h1>;
};

export default ServicePage;
