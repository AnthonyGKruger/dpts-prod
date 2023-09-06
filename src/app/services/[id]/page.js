import ServiceItem from "@/components/services/ServiceItem";
import ServiceStoreProvider from "@/components/services/ServiceStoreProvider";

export async function generateMetadata({ params }, parent) {
  const id = params.id;

  const service = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/dpts-services/${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    },
  ).then((res) => res.json());

  return {
    title: `${service.data.attributes.title} - DPTS`,
  };
}

const ServicePage = async ({ params }) => {
  return (
    <ServiceStoreProvider>
      <ServiceItem params={params} />
    </ServiceStoreProvider>
  );
};

export default ServicePage;
