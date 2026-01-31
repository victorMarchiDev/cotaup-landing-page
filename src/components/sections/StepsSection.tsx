import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  FileEdit, 
  Send, 
  BarChart3, 
  ShoppingCart, 
  ClipboardCheck,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileEdit,
    title: "Criar Cotação",
    description: "Cadastre os itens que precisa comprar, defina quantidades e especificações.",
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    icon: Send,
    title: "Enviar para Fornecedores",
    description: "Com um clique, envie a cotação para sua base de fornecedores cadastrados.",
    color: "from-primary to-cotaup-blue-dark",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Comparar Preços",
    description: "Visualize as propostas lado a lado. Compare preços, prazos e condições.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    number: "04",
    icon: ShoppingCart,
    title: "Gerar Pedido",
    description: "Escolha a melhor proposta e transforme em pedido automaticamente.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    number: "05",
    icon: ClipboardCheck,
    title: "Acompanhar Status",
    description: "Monitore entregas, histórico completo e relatórios de performance.",
    color: "from-violet-500 to-violet-600",
  },
];

export const StepsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
            Passo a Passo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Simples, rápido e <span className="text-gradient">eficiente</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Da cotação ao pedido em poucos passos. Veja como o Cotaup simplifica todo o processo de compras.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary to-transparent -translate-x-1/2 origin-top"
          />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setActiveStep(index)}
                className={`relative lg:flex lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`lg:w-[calc(50%-40px)] ${index % 2 === 0 ? "lg:pr-0" : "lg:pl-0"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`group relative bg-card rounded-2xl p-6 shadow-card border transition-all duration-300 ${
                      activeStep === index ? "border-primary shadow-glow" : "border-border hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shrink-0 shadow-lg`}
                      >
                        <step.icon className="w-7 h-7 text-primary-foreground" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                            PASSO {step.number}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>

                    {/* Arrow indicator */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:flex absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-muted rounded-full items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-muted-foreground rotate-90" />
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Center dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                  className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full items-center justify-center z-10 ${
                    activeStep === index ? "bg-primary" : "bg-card border-2 border-primary"
                  }`}
                >
                  {activeStep === index && (
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="absolute w-full h-full rounded-full bg-primary/30"
                    />
                  )}
                </motion.div>

                {/* Spacer */}
                <div className="hidden lg:block lg:w-[calc(50%-40px)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
