import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Store, 
  ShoppingCart, 
  Package, 
  Users,
  Truck,
  Handshake,
  TrendingUp,
  Search
} from "lucide-react";

const buyerSegments = [
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

const supplierBenefits = [
  {
    icon: TrendingUp,
    title: "Prospecção Ativa",
    description: "Acesse uma base de compradores qualificados buscando exatamente o que você oferece.",
  },
  {
    icon: Search,
    title: "Visibilidade",
    description: "Seja encontrado por empresas que precisam dos seus produtos e serviços.",
  },
  {
    icon: Handshake,
    title: "Novos Negócios",
    description: "Expanda sua carteira de clientes com leads qualificados e prontos para comprar.",
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
  const buyersRef = useRef(null);
  const suppliersRef = useRef(null);
  const isBuyersInView = useInView(buyersRef, { once: true, margin: "-100px" });
  const isSuppliersInView = useInView(suppliersRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
            Ecossistema Completo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Compradores</span> e{" "}
            <span className="text-gradient">Fornecedores</span> em um só lugar
          </h2>
          <p className="text-lg text-muted-foreground">
            O Cotaup conecta quem compra e quem vende, criando uma rede de relacionamentos 
            que gera oportunidades reais de negócio para todos.
          </p>
        </motion.div>

        {/* Platform Connection Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-20"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 lg:p-12 border border-primary/20">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Buyers Side */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-4">
                  <ShoppingCart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Para Compradores</h3>
                <p className="text-muted-foreground">
                  Infinidade de opções para comparar preços, condições e encontrar os melhores fornecedores do mercado.
                </p>
              </div>

              {/* Connection Center */}
              <div className="flex flex-col items-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-glow mb-4"
                >
                  <Handshake className="w-12 h-12 text-primary-foreground" />
                </motion.div>
                <span className="text-lg font-semibold text-primary">Conexão Direta</span>
                <p className="text-sm text-muted-foreground text-center mt-2">
                  Relacionamentos que geram negócios
                </p>
              </div>

              {/* Suppliers Side */}
              <div className="text-center lg:text-right">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-4 lg:ml-auto">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Para Fornecedores</h3>
                <p className="text-muted-foreground">
                  Prospecção ativa de novos clientes. Acesse uma base qualificada de empresas prontas para comprar.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Buyers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Segmentos de Compradores</h3>
          </div>

          <motion.div
            ref={buyersRef}
            variants={containerVariants}
            initial="hidden"
            animate={isBuyersInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {buyerSegments.map((segment) => (
              <motion.div
                key={segment.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary/30 transition-all duration-300"
              >
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
        </motion.div>

        {/* Suppliers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Truck className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Para Fornecedores</h3>
          </div>

          <motion.div
            ref={suppliersRef}
            variants={containerVariants}
            initial="hidden"
            animate={isSuppliersInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-6"
          >
            {supplierBenefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-glow"
                >
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Supplier CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">É fornecedor?</p>
                  <p className="text-sm text-muted-foreground">Amplie sua carteira de clientes hoje</p>
                </div>
              </div>
              <a 
                href="https://cotaup.com.br/login" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
              >
                Cadastre-se Grátis
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};