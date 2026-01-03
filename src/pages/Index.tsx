import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChoseUs";
import TechStack from "@/components/sections/TechStack";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DevCraft - Custom Software Development & ERP Solutions</title>
        <meta
          name="description"
          content="DevCraft builds exceptional digital experiences through modern web development, custom ERP solutions, and innovative software engineering. Transform your business today."
        />
      </Helmet>
      <Layout>
        <HeroSection />
        <ServicesOverview />
        <WhyChooseUs />
        <TechStack />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
