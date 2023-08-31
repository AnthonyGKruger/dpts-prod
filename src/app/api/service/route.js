import axios from "axios";

export async function POST(request) {
  const serviceData = await request.json();
  const { id } = await serviceData;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/dpts-services/${await id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    },
  );

  if (response.status === 200) {
    return new Response(JSON.stringify(response.data.data), {
      status: 200,
    });
  } else {
    return new Response("Something went wrong...", {
      status: 400,
    });
  }
}
