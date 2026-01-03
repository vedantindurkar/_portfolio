import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Globe,
  Palette,
  Server,
  Boxes,
  Wrench,
  Check,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Custom, responsive websites built with cutting-edge technologies for optimal performance and user experience.",
    features: [
      "Responsive design for all devices",
      "SEO-optimized structure",
      "Fast loading speeds",
      "Modern UI/UX design",
      "Cross-browser compatibility",
      "Content management integration",
    ],
  },
  {
    icon: Palette,
    title: "Website Redesign & Improvement",
    description:
      "Transform your existing website with fresh designs, improved UX, and enhanced functionality.",
    features: [
      "Complete visual overhaul",
      "Performance optimization",
      "User experience improvements",
      "Mobile responsiveness updates",
      "Accessibility enhancements",
      "Modern technology migration",
    ],
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "Robust, scalable backend systems and APIs using industry-standard technologies.",
    features: [
      "RESTful API design",
      "Database architecture",
      "Authentication & authorization",
      "Third-party integrations",
      "Performance optimization",
      "API documentation",
    ],
  },
  {
    icon: Boxes,
    title: "ERP / Business Software Solutions",
    description:
      "Custom enterprise resource planning software tailored to streamline your business operations.",
    features: [
      "Inventory management",
      "Sales & invoicing",
      "Customer relationship management",
      "Reporting & analytics",
      "Multi-user access control",
      "Cloud-based deployment",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance, updates, and technical support to keep your applications running smoothly.",
    features: [
      "24/7 monitoring",
      "Regular updates & patches",
      "Bug fixes & troubleshooting",
      "Performance tuning",
      "Security audits",
      "Backup & recovery",
    ],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - DevCraft | Web Development & ERP Solutions</title>
        <meta
          name="description"
          content="Explore DevCraft's comprehensive software services including web development, API development, ERP solutions, and ongoing maintenance support."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="container relative mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Comprehensive{" "}
                <span className="gradient-text">Software Services</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                From concept to deployment and beyond, we offer end-to-end
                solutions to help your business thrive in the digital landscape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="p-4 rounded-2xl bg-primary/10 w-fit mb-6">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <div className="p-1 rounded-full bg-primary/20">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="heroOutline" asChild>
                      <Link to="/contact" className="group">
                        Get a Quote
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative aspect-square max-w-md mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl" />
                      <div className="absolute inset-4 bg-card rounded-2xl border border-border flex items-center justify-center">
                        <service.icon className="h-24 w-24 text-primary/30" />
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent" />
          <div className="container relative mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A streamlined approach to delivering exceptional results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Understanding your goals and requirements",
                },
                {
                  step: "02",
                  title: "Design",
                  description: "Creating wireframes and visual designs",
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Building with clean, efficient code",
                },
                {
                  step: "04",
                  title: "Deployment",
                  description: "Launch and ongoing support",
                },
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-6 rounded-2xl bg-card border border-border text-center"
                >
                  <span className="text-4xl font-display font-bold gradient-text">
                    {phase.step}
                  </span>
                  <h3 className="font-display text-xl font-semibold mt-4 mb-2 text-foreground">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {phase.description}
                  </p>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 text-muted-foreground">
                      →
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

export default Services;
