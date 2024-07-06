import type { Metadata } from "next";
import { Providers } from "./providers";
import { ProductProvider } from "@/utils/context/ProductContext";
import { BDLMainLayout } from "@/components";

// Define metadata using the Metadata type
export const metadata: Metadata = {
  title: "BlueTech Solutions - IT Services & Solutions",
  description:
    "BlueTech Solutions LLC offers innovative IT services in web development, graphic design, network, and hardware solutions to enhance business efficiency.",
  keywords:
    "BlueTech Solutions, IT services, web development, graphic design, network solutions, hardware solutions, business solutions, technology provider, innovative technologies, customized solutions, business efficiency, pioneering solutions, long-term partnerships, future succes",
  authors: [
    {
      name: "Blutech Solutions LLC",
      url: "https://bluetech-department-list.vercel.app",
    },
  ],
  openGraph: {
    title: "Blutech Solutions LLC",
    description:
      "Blutech Solutions LLC is a technology company specializing in innovative software solutions. We provide cutting-edge services in web and mobile application development, cloud computing, and digital transformation strategies.",
    siteName: "Blutech Solutions LLC",
  },
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
