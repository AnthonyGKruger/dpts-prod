import "./globals.css";
import { Roboto } from "next/font/google";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
  icons: [
    { rel: "icon", url: "/assets/logos/DPTS-logo-web-version.png" },
    { rel: "apple", url: "/assets/logos/DPTS-logo-web-version.png" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} text-text-colour bg-background-colour`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
