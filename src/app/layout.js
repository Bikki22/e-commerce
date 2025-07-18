import Header from "@/components/Header";
import "./globals.css";
import config from "@/config/config";

export const metadata = {
  title: config.appName,
  description: "Online buying and selling application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
