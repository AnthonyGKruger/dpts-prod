import axios from "axios";

export async function POST(request) {
  const data = await request.json();

  console.log(data);

  // const response = await axios.post(
  //   `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/dpts-temp-carts`,
  //   {
  //     data: data,
  //   },
  //   {
  //     headers: {
  //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
  //     },
  //   },
  // );
  //
  // if (response.status === 200) {
  //   return new Response("posted temp cart", {
  //     status: 200,
  //   });
  // } else {
  //   return new Response("Something went wrong...", {
  //     status: 400,
  //   });
  // }
}
