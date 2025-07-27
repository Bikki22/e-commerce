import Header from "@/components/Header";
import "./globals.css";
import config from "@/config/config";
import { ToastContainer } from "react-toastify";
import AppProvider from "@/redux/provider";
import MainLayout from "../layouts/mainLayout";

export const metadata = {
  title: {
    default: config.appName,
    template: `${config.appName} | %s`,
  },
  description: "E-commerce app on next js",
  keywords: "E-commerce, online shopping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <MainLayout>
            <Header />
            {children}
            <ToastContainer />
          </MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}
