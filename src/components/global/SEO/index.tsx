import Head from "next/head";

interface SEOProps {
  prefix?: string;
  path: string;
  description?: string;
}

const SEO = ({
  prefix,
  path,
  description = "Blutech Solutions LLC is a technology company specializing in innovative software solutions. We provide cutting-edge services in web and mobile application development, cloud computing, and digital transformation strategies. Our team is dedicated to delivering high-quality, scalable solutions that meet the unique needs of our clients. Contact us today to discover how we can help transform your ideas into reality.",
}: SEOProps) => {
  const seo = {
    description: description,
    url: `https://bluetech-department-list.vercel.app/${path}`,
    title: `${prefix ? prefix + " - " : ""}Blutech Solutions LLC`,
    image: "/favicon.ico",
    twitterUsername: "",
    keywords:
      "Blutech Solutions LLC, software development, web development, mobile application development, cloud computing, digital transformation, technology solutions, scalable software, innovative software solutions, tech company, web services, mobile services, cloud services, software consulting, IT solutions, tech consulting",
  };

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon.ico" />
      <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon.ico" />
      <title>{seo.title}</title>
      <meta name="keywords" content={seo.keywords} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
    </Head>
  );
};

export default SEO;
