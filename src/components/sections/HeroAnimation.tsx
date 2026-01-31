import { motion } from "framer-motion";
import { FileText, Send, BarChart3, ShoppingCart, CheckCircle2 } from "lucide-react";

export const HeroAnimation = () => {
  const steps = [
    { icon: FileText, label: "Cotação", color: "bg-primary" },
    { icon: Send, label: "Enviar", color: "bg-cotaup-blue" },
    { icon: BarChart3, label: "Comparar", color: "bg-primary" },
    { icon: ShoppingCart, label: "Pedido", color: "bg-cotaup-blue-dark" },
    { icon: CheckCircle2, label: "Concluído", color: "bg-green-500" },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative bg-card rounded-2xl shadow-card border border-border p-6 backdrop-blur-sm"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Nova Cotação</h3>
              <p className="text-xs text-muted-foreground">5 itens • 3 fornecedores</p>
            </div>
          </div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-medium"
          >
            Em andamento
          </motion.div>
        </div>

        {/* Progress Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-5 left-5 right-5 h-0.5 bg-border" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 2, ease: "easeOut" }}
            className="absolute top-5 left-5 right-5 h-0.5 bg-primary origin-left"
          />

          <div className="relative flex justify-between">
            {steps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.4 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  animate={{ 
                    boxShadow: index < 4 ? [
                      "0 0 0 0 rgba(59, 130, 246, 0)",
                      "0 0 0 8px rgba(59, 130, 246, 0.2)",
                      "0 0 0 0 rgba(59, 130, 246, 0)"
                    ] : undefined
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2, 
                    delay: index * 0.4 
                  }}
                  className={`w-10 h-10 rounded-full ${step.color} flex items-center justify-center z-10`}
                >
                  <step.icon className="w-5 h-5 text-primary-foreground" />
                </motion.div>
                <span className="mt-2 text-xs font-medium text-muted-foreground">
                  {step.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sample Data */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.4 }}
          className="mt-6 space-y-3"
        >
          {[
            { name: "Fornecedor Alpha", value: "R$ 12.450,00", saving: "-8%" },
            { name: "Fornecedor Beta", value: "R$ 13.200,00", saving: "-3%" },
            { name: "Fornecedor Gamma", value: "R$ 11.890,00", saving: "-12%", best: true },
          ].map((supplier, index) => (
            <motion.div
              key={supplier.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 + index * 0.15, duration: 0.4 }}
              className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                supplier.best 
                  ? "bg-green-50 border border-green-200" 
                  : "bg-muted/50 hover:bg-muted"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${supplier.best ? "bg-green-500" : "bg-muted-foreground"}`} />
                <span className="text-sm font-medium">{supplier.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">{supplier.value}</span>
                <span className={`text-xs font-medium ${supplier.best ? "text-green-600" : "text-muted-foreground"}`}>
                  {supplier.saving}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 bg-card rounded-xl shadow-lg p-3 border border-border"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Economia</p>
            <p className="text-sm font-bold text-green-600">+R$ 4.200</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-3 border border-border"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Pedidos hoje</p>
            <p className="text-sm font-bold text-primary">23 aprovados</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
