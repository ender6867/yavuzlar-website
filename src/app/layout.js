import Head from "@/layout/components/Head";
import "./globals.css";
import Layout from "@/layout";

export const metadata = {
  title: "Yavuzlar",
  description: "Yavuzlar Web Güvenliği ve Yazılım Takımı",
  icons: {
    icon: "/yavuzlar-logo-black-stroke-kare.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" translate="no">
      <Head />

      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
