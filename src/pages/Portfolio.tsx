import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ExternalLink, Github, Clock, Boxes } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A full-featured e-commerce solution with inventory management, payment processing, and admin dashboard.",
    technologies: ["React", "ASP.NET Core", "SQL Server", "Stripe"],
    image: null,
    demoUrl: "#",
    featured: true,
  },
  {
    title: "Healthcare Management System",
    category: "Enterprise Software",
    description:
      "Patient management system with appointment scheduling, medical records, and billing integration.",
    technologies: ["React", "Entity Framework", "Azure", "SignalR"],
    image: null,
    demoUrl: "#",
    featured: true,
  },
  {
    title: "Restaurant POS System",
    category: "Business Application",
    description:
      "Point-of-sale system designed for restaurants with order management and real-time kitchen display.",
    technologies: ["React", "ASP.NET Core", "WebSocket", "SQL Server"],
    image: null,
    demoUrl: "#",
    featured: false,
  },
  {
    title: "Real Estate Portal",
    category: "Web Application",
    description:
      "Property listing platform with advanced search, virtual tours, and agent management features.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    image: null,
    demoUrl: "#",
    featured: false,
  },
  {
    title: "Inventory Tracker",
    category: "Business Tool",
    description:
      "Warehouse inventory management with barcode scanning, stock alerts, and reporting.",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    image: null,
    demoUrl: "#",
    featured: false,
  },
  {
    title: "Corporate Website",
    category: "Website Design",
    description:
      "Modern responsive website with animations, blog integration, and contact management.",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "CMS"],
    image: null,
    demoUrl: "#",
    featured: false,
  },
];

const erpProduct = {
  title: "DevCraft ERP",
  tagline: "The Complete Business Solution",
  description:
    "Our flagship ERP product is currently in development. A comprehensive solution designed to streamline operations for small and medium businesses.",
  features: [
    "Inventory & Warehouse Management",
    "Sales & Purchase Orders",
    "Invoicing & Payments",
    "Customer Relationship Management",
    "Financial Reporting",
    "Multi-user Access Control",
  ],
  status: "Coming Soon",
};

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Our Work - DevCraft | Portfolio & Case Studies</title>
        <meta
          name="description"
          content="Explore DevCraft's portfolio of successful projects including web applications, enterprise software, and business solutions."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="container relative mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our <span className="gradient-text">Work</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                A showcase of projects that demonstrate our expertise in
                building exceptional digital solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Featured <span className="gradient-text">Projects</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative rounded-2xl bg-card border border-border overflow-hidden card-hover"
                  >
                    {/* Image placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center">
                          <Boxes className="h-8 w-8 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button variant="heroOutline" size="sm" asChild>
                          <a href={project.demoUrl} className="group/btn">
                            View Project
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>

            {/* All Projects Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                More <span className="gradient-text">Projects</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <span className="text-xs text-primary font-medium">
                      {project.category}
                    </span>
                    <h3 className="font-display text-lg font-semibold mt-2 mb-2 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* ERP Product Preview */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent" />
          <div className="container relative mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="rounded-3xl border border-primary/30 bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-primary/20">
                      <Boxes className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium text-accent">
                        {erpProduct.status}
                      </span>
                    </div>
                  </div>

                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-foreground">
                    {erpProduct.title}
                  </h2>
                  <p className="text-xl text-primary mb-4">
                    {erpProduct.tagline}
                  </p>
                  <p className="text-muted-foreground mb-8 max-w-2xl">
                    {erpProduct.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {erpProduct.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <Button variant="hero" size="lg" asChild>
                    <a href="#notify">Get Notified on Launch</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

export default Portfolio;
