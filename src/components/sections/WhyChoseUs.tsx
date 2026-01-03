import { motion } from "framer-motion";
import { Zap, Shield, Users, Clock, Code2, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description:
      "We prioritize efficiency without compromising quality, delivering projects on time, every time.",
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    description:
      "Enterprise-grade security and architecture that grows with your business needs.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "Your vision drives our work. We collaborate closely to ensure perfect alignment with your goals.",
  },
  {
    icon: Clock,
    title: "Agile Development",
    description:
      "Flexible methodologies that adapt to changes and deliver continuous value throughout the project.",
  },
  {
    icon: Code2,
    title: "Clean Code Standards",
    description:
      "Well-documented, maintainable code that's easy to update and extend in the future.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Round-the-clock support and maintenance to keep your applications running flawlessly.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">DevCraft?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We don't just build software — we craft digital experiences that
              drive real business results. Our commitment to excellence sets us
              apart.
            </p>

            {/* Feature highlight */}
            <div className="p-6 rounded-2xl glass border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-display font-semibold text-foreground">
                    Fast Turnaround
                  </span>
                </div>
                <p className="text-muted-foreground">
                  From concept to deployment in weeks, not months. We move fast
                  without sacrificing quality.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.slice(0, 6).map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-primary/10 w-fit mb-3 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
