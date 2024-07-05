import type { Metadata } from "next";
import { Providers } from "./providers";
import { ProductProvider } from "@/utils/context/ProductContext";
import { BDLMainLayout } from "@/components";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blutech Solutions LLC",
  description:
    "Blutech Solutions LLC is a technology company specializing in innovative software solutions. We provide cutting-edge services in web and mobile application development, cloud computing, and digital transformation strategies. Our team is dedicated to delivering high-quality, scalable solutions that meet the unique needs of our clients. Contact us today to discover how we can help transform your ideas into reality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ProductProvider>
            <BDLMainLayout>{children}</BDLMainLayout>
          </ProductProvider>
        </Providers>
      </body>
    </html>
  );
}
