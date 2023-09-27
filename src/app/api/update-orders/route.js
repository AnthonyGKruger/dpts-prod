import axios from "axios";

export async function POST(request) {
  const data = await request.json();

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/dpts-orders`,
    {
      data: data,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    },
  );

  if (response.status === 200) {
    return new Response("Order sent", {
      status: 200,
    });
  } else {
    return new Response("Something went wrong...", {
      status: 400,
    });
  }
}
