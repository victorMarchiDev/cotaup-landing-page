import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Store, 
  ShoppingCart, 
  Package, 
  Users 
} from "lucide-react";

const segments = [
  {
    icon: Store,
    title: "Varejo",
    description: "Lojas e redes de varejo que precisam otimizar compras e reduzir custos operacionais.",
    features: ["Gestão de estoque", "Multi-lojas", "Fornecedores integrados"],
  },
  {
    icon: ShoppingCart,
    title: "Supermercados",
    description: "Supermercados e atacados com alto volume de compras e múltiplos fornecedores.",
    features: ["Cotações em massa", "Perecíveis", "Reposição automática"],
  },
  {
    icon: Package,
    title: "Empresas com Alto Volume",
    description: "Indústrias e empresas que compram insumos em grande escala regularmente.",
    features: ["Contratos", "Programação de compras", "Aprovações"],
  },
  {
    icon: Users,
    title: "Gestores e Compradores",
    description: "Profissionais que buscam eficiência e controle no dia a dia das compras.",
    features: ["Relatórios", "Histórico", "Indicadores"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export const SegmentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
            Segmentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Para quem é o <span className="text-gradient">Cotaup</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Solução flexível que se adapta às necessidades de diferentes tipos de empresas e profissionais.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {segments.map((segment, index) => (
            <motion.div
              key={segment.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300"
                >
                  <segment.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {segment.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {segment.description}
                </p>

                <ul className="space-y-2">
                  {segment.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
