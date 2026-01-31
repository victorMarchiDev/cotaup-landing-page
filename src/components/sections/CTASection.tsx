import { motion } from "framer-motion";
import { ArrowRight, Check, Shield, Clock, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-cotaup-blue-dark to-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Oferta especial: Teste grátis por 14 dias
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Comece a economizar{" "}
              <span className="underline decoration-white/30 decoration-wavy underline-offset-8">
                hoje mesmo
              </span>
            </h2>

            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Junte-se a centenas de empresas que já transformaram sua gestão de compras 
              e estão economizando tempo e dinheiro todos os dias.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <Button
                size="xl"
                className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl group"
              >
                Agendar Demonstração Gratuita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="border-white/30 text-primary-foreground hover:bg-white/10 backdrop-blur-sm"
              >
                Falar com um Especialista
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 text-white/70"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Sem necessidade de cartão</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Configuração em 5 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-5 h-5" />
                <span className="text-sm">Suporte dedicado</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Features mini-list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {[
              "Cotações ilimitadas",
              "Fornecedores ilimitados",
              "Relatórios completos",
              "Integrações disponíveis",
              "Suporte prioritário",
              "Atualizações gratuitas",
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
                className="flex items-center gap-2 justify-center text-white/80"
              >
                <Check className="w-4 h-4 text-green-300" />
                <span className="text-sm">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
