import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  Eye, 
  Sparkles 
} from "lucide-react";

const differentials = [
  {
    icon: ShieldCheck,
    title: "Redução de Erros Manuais",
    description: "Elimine digitação repetitiva e erros de planilhas. Automação que garante precisão.",
    stat: "98%",
    statLabel: "menos erros",
  },
  {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Processos que levavam horas agora são feitos em minutos. Sua equipe focada no estratégico.",
    stat: "70%",
    statLabel: "mais rápido",
  },
  {
    icon: TrendingUp,
    title: "Poder de Negociação",
    description: "Compare fornecedores instantaneamente. Negocie com dados reais e histórico de preços.",
    stat: "25%",
    statLabel: "economia média",
  },
  {
    icon: Eye,
    title: "Visão Clara de Custos",
    description: "Dashboards e relatórios que mostram exatamente para onde vai cada centavo.",
    stat: "100%",
    statLabel: "visibilidade",
  },
  {
    icon: Sparkles,
    title: "Sistema Intuitivo",
    description: "Interface limpa e fácil. Sua equipe operando em minutos, não em semanas.",
    stat: "5min",
    statLabel: "para começar",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export const DifferentialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Por que escolher o Cotaup
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
            Diferenciais que <span className="text-primary">impactam</span> seu resultado
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Resultados reais para empresas que buscam eficiência e economia em suas compras.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`group relative rounded-2xl p-6 border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm hover:bg-primary-foreground/10 transition-all duration-300 ${
                index === 4 ? "lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0"
                >
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-primary-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/60 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">{item.stat}</span>
                    <span className="text-sm text-primary-foreground/50">{item.statLabel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
