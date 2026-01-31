import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Diretor de Compras",
    company: "Supermercados União",
    avatar: "CM",
    content: "Reduzimos o tempo de compra em mais de 40% usando o Cotaup. A centralização das cotações mudou completamente nossa operação.",
    rating: 5,
  },
  {
    name: "Ana Paula Silva",
    role: "Gerente de Suprimentos",
    company: "Varejo Express",
    avatar: "AS",
    content: "Antes perdíamos horas comparando planilhas. Agora, em minutos, temos a visão completa de todos os fornecedores.",
    rating: 5,
  },
  {
    name: "Roberto Oliveira",
    role: "CEO",
    company: "Distribuidora Norte",
    avatar: "RO",
    content: "O ROI foi impressionante. Em 3 meses recuperamos o investimento e hoje economizamos em média 25% nas compras.",
    rating: 5,
  },
  {
    name: "Mariana Costa",
    role: "Coordenadora de Compras",
    company: "Rede Mais",
    avatar: "MC",
    content: "A equipe se adaptou rapidamente. O sistema é intuitivo e o suporte é excepcional. Recomendo para qualquer empresa.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            Empresas de diversos segmentos já transformaram sua gestão de compras com o Cotaup.
          </p>
        </motion.div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative bg-card rounded-3xl p-8 lg:p-12 shadow-card border border-border"
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
              <Quote className="w-12 h-12 text-primary/20" />
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Avatar */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="shrink-0"
              >
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-primary to-cotaup-blue-dark flex items-center justify-center text-2xl lg:text-3xl font-bold text-primary-foreground shadow-lg">
                  {testimonials[activeIndex].avatar}
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-6">
                  "{testimonials[activeIndex].content}"
                </blockquote>

                <div>
                  <p className="font-semibold text-lg">{testimonials[activeIndex].name}</p>
                  <p className="text-muted-foreground">
                    {testimonials[activeIndex].role} • {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
