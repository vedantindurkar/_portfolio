import { motion } from "framer-motion";
//lucide-

const technologies = {
  frontend: [
    { name: "React", color: "61dafb", icon: "" },
    { name: "TypeScript", color: "3178c6" },
    { name: "Tailwind CSS", color: "06b6d4" },
    { name: "Framer Motion", color: "ff0055" },
  ],
  backend: [
    { name: "ASP.NET Core", color: "512bd4" },
    { name: "Entity Framework", color: "68217a" },
    { name: "SQL Server", color: "cc2927" },
    { name: "RESTful APIs", color: "43b02a" },
  ],
};

const TechStack = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We use cutting-edge technologies to deliver modern, scalable, and
            high-performance solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display text-xl font-semibold text-center md:text-left text-foreground">
              Frontend
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.frontend.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors text-center"
                >
                  <div
                    className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `#${tech.color}20` }}
                  >
                    <div
                      className="w-6 h-6 rounded-md"
                      style={{ backgroundColor: `#${tech.color}` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display text-xl font-semibold text-center md:text-left text-foreground">
              Backend
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.backend.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors text-center"
                >
                  <div
                    className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `#${tech.color}20` }}
                  >
                    <div
                      className="w-6 h-6 rounded-md"
                      style={{ backgroundColor: `#${tech.color}` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
