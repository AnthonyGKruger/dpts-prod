import axios from "axios";

export async function POST(request) {
  const user = await request.json();
  const { name, surname, email, password } = user;
  const hashedPassword = await bcrypt.hash(password, 10);
  const userData = { name, surname, email, password: hashedPassword };

  // console.log(userData);

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/dpts-users`,
    {
      data: userData,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    },
  );

  if (response.status === 200) {
    return new Response("User registered.", {
      status: 200,
    });
  } else {
    return new Response("Something went wrong...", {
      status: 400,
    });
  }
}
