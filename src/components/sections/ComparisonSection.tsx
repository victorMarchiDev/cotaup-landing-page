import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  X, 
  Check, 
  FileSpreadsheet, 
  Mail, 
  RefreshCw, 
  Search, 
  Zap, 
  Shield 
} from "lucide-react";

const beforeItems = [
  { icon: FileSpreadsheet, text: "Planilhas desorganizadas" },
  { icon: Mail, text: "E-mails perdidos" },
  { icon: RefreshCw, text: "Retrabalho constante" },
  { icon: Search, text: "Busca manual por fornecedores" },
];

const afterItems = [
  { icon: Zap, text: "Tudo centralizado" },
  { icon: Shield, text: "Processos padronizados" },
  { icon: Check, text: "Automação completa" },
  { icon: Check, text: "Comparação instantânea" },
];

export const ComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSide, setHoveredSide] = useState<"before" | "after" | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
            Transformação
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Processo de compras <span className="text-gradient">simplificado</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja a diferença entre o processo tradicional e a gestão inteligente com o Cotaup.
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setHoveredSide("before")}
            onMouseLeave={() => setHoveredSide(null)}
            className={`relative rounded-2xl p-8 transition-all duration-500 ${
              hoveredSide === "after" ? "opacity-50 scale-95" : ""
            }`}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-700">Antes</h3>
                  <p className="text-sm text-red-600/70">Processo tradicional</p>
                </div>
              </div>

              <div className="space-y-4">
                {beforeItems.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/80 border border-red-100"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-red-500" />
                    </div>
                    <span className="font-medium text-red-800">{item.text}</span>
                    <X className="w-5 h-5 text-red-400 ml-auto" />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-6 p-4 rounded-xl bg-red-100/50 border border-red-200"
              >
                <p className="text-center text-red-700 font-medium">
                  ⏱️ Média de <span className="font-bold">4 horas</span> por cotação
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onMouseEnter={() => setHoveredSide("after")}
            onMouseLeave={() => setHoveredSide(null)}
            className={`relative rounded-2xl p-8 transition-all duration-500 ${
              hoveredSide === "before" ? "opacity-50 scale-95" : ""
            }`}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100/50 border border-green-200" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center"
                >
                  <Check className="w-6 h-6 text-green-600" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-green-700">Depois</h3>
                  <p className="text-sm text-green-600/70">Com Cotaup</p>
                </div>
              </div>

              <div className="space-y-4">
                {afterItems.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/80 border border-green-100"
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="font-medium text-green-800">{item.text}</span>
                    <Check className="w-5 h-5 text-green-500 ml-auto" />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="mt-6 p-4 rounded-xl bg-green-100/50 border border-green-200"
              >
                <p className="text-center text-green-700 font-medium">
                  ⚡ Média de <span className="font-bold">20 minutos</span> por cotação
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">92%</p>
                <p className="text-sm text-muted-foreground">menos tempo</p>
              </div>
              <div className="border-x border-border">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">rastreável</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">0</p>
                <p className="text-sm text-muted-foreground">planilhas</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
