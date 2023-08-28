import axios from "axios";
import bcrypt from "bcryptjs";

const comparePassword = async (password, hashedPassword) => {
  return await bcrypt
    .compare(password, hashedPassword)
    .then((result) => result);
};

export async function POST(request) {
  const user = await request.json();
  const { email, password } = user;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/dpts-users`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    },
  );

  // console.log(response);

  if (response.status === 200) {
    for (const user of response.data.data) {
      if (user.attributes.email === email) {
        console.log(user);
        console.log("user match...");

        const passwordIsMatched = await comparePassword(
          password,
          user.attributes.password,
        );

        if (await passwordIsMatched) {
          console.log("password match");
          return new Response("match", {
            status: 200,
          });
        } else {
          console.log("password match fail");
          return new Response("fail", {
            status: 403,
          });
        }
      }
    }
  } else {
    return new Response("Something went wrong...", {
      status: 400,
    });
  }
}
