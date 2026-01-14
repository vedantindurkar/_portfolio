import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Target, Eye, Rocket, Code2, Users, Award } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/sections/CTASection";

const skills = [
  { name: "React & TypeScript", level: 95 },
  { name: "ASP.NET Core", level: 90 },
  { name: "SQL Server & Databases", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: "DevOps & Cloud", level: 75 },
];

const milestones = [
  {
    year: "2021",
    event: "Two developer friends came together to start a Tech Company",
  },
  { year: "2022", event: "Completed first major enterprise project" },
  {
    year: "2023",
    event: "Expanded team and delivered muliple successful projects",
  },
  { year: "2024", event: "Delivered a successful project to the government" },
  { year: "2025", event: "ERP product entering beta phase" },
  { year: "2026", event: "Building our own Product..." },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - DevCraft | Our Story & Mission</title>
        <meta
          name="description"
          content="Learn about DevCraft's mission to transform businesses through innovative software solutions. Meet our team and discover our journey."
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
                Building the Future,{" "}
                <span className="gradient-text">One Line at a Time</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                We're a passionate team of developers and designers dedicated to
                crafting software that makes a difference.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">
                  Our Mission
                </h2>
                <p className="text-muted-foreground">
                  To empower businesses with innovative software solutions that
                  streamline operations, enhance productivity, and drive
                  sustainable growth in an increasingly digital world.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold mb-4 text-foreground">
                  Our Vision
                </h2>
                <p className="text-muted-foreground">
                  To become a leading provider of enterprise software solutions,
                  known for our innovation, reliability, and commitment to
                  transforming how businesses operate.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent" />
          <div className="container relative mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Our <span className="gradient-text">Story</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <Code2 className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        Founder-Led Vision
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    DevCraft was born from a simple observation: many businesses
                    struggle with outdated, clunky software that hinders rather
                    than helps their growth.
                  </p>
                  <p className="text-muted-foreground">
                    Starting as a solo developer with a passion for clean code
                    and intuitive design, our founder set out to build software
                    that businesses actually enjoy using. What began as
                    freelance projects quickly evolved into a full-fledged
                    software development company.
                  </p>
                  <p className="text-muted-foreground">
                    Today, we're focused on developing our flagship ERP product
                    — a comprehensive solution designed to revolutionize how
                    businesses manage their operations, from inventory to
                    invoicing.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Technical <span className="gradient-text">Expertise</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Years of experience across multiple technologies enable us to
                deliver comprehensive solutions.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Journey</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative pl-12 md:pl-0 pb-10 ${
                      index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2"
                    }`}
                  >
                    <div
                      className={`md:px-8 ${
                        index % 2 === 0 ? "md:mr-4" : "md:ml-4"
                      }`}
                    >
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                        {milestone.year}
                      </span>
                      <p className="text-muted-foreground">{milestone.event}</p>
                    </div>
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 top-1 w-3 h-3 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Rocket,
                  title: "Launch ERP Product",
                  description:
                    "Release our comprehensive ERP solution for small and medium businesses.",
                },
                {
                  icon: Users,
                  title: "Expand Team",
                  description:
                    "Grow our talented team of developers and designers to serve more clients.",
                },
                {
                  icon: Award,
                  title: "Industry Recognition",
                  description:
                    "Become a recognized leader in enterprise software solutions.",
                },
              ].map((goal, index) => (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border text-center"
                >
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                    <goal.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                    {goal.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {goal.description}
                  </p>
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

export default About;
