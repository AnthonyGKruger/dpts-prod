import axios from "axios";

export async function GET(request) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/dpts-users`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    },
  );

  const users = response.data.data.map((user) => {
    return user.attributes.email;
  });

  return new Response(users, {
    status: 200,
  });
}
