import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram, 
  Youtube,
  ArrowUp
} from "lucide-react";
import logoCotaup from "@/assets/logo-cotaup.png";

const footerLinks = {
  produto: [
    { label: "Funcionalidades", href: "#features" },
    { label: "Preços", href: "#pricing" },
    { label: "Integrações", href: "#integrations" },
    { label: "Atualizações", href: "#updates" },
  ],
  empresa: [
    { label: "Sobre nós", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Carreiras", href: "#careers" },
    { label: "Contato", href: "#contact" },
  ],
  suporte: [
    { label: "Central de Ajuda", href: "#help" },
    { label: "Documentação", href: "#docs" },
    { label: "Status", href: "#status" },
    { label: "API", href: "#api" },
  ],
  legal: [
    { label: "Termos de Uso", href: "#terms" },
    { label: "Privacidade", href: "#privacy" },
    { label: "Cookies", href: "#cookies" },
    { label: "LGPD", href: "#lgpd" },
  ],
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-foreground text-primary-foreground pt-16 lg:pt-24 pb-8 relative">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 pb-12 border-b border-primary-foreground/10">
          {/* Brand Column */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <img src={logoCotaup} alt="Cotaup Logo" className="w-10 h-10 object-contain" />
                <span className="text-xl font-bold">Cotaup</span>
              </div>
              <p className="text-primary-foreground/60 mb-6 max-w-xs">
                Sistema de gestão de cotações, pedidos e compras empresariais. 
                Simplifique suas compras, economize tempo e dinheiro.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a href="mailto:suporte@cotaup.com" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  suporte@cotaup.com
                </a>
                <p className="flex items-center gap-2 text-sm text-primary-foreground/60">
                  <MapPin className="w-4 h-4" />
                  Maringá, Paraná, Brasil
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                {[
                  { icon: Linkedin, href: "#" },
                  { icon: Instagram, href: "https://www.instagram.com/wintech.group/" },
                  { icon: Youtube, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="font-semibold mb-4 capitalize">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50 text-center lg:text-left">
            © {new Date().getFullYear()} Cotaup. Todos os direitos reservados.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:shadow-glow transition-all"
          >
            <ArrowUp className="w-5 h-5 text-primary-foreground" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
