import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/" },
  { 
    name: "Services", 
    href: "/services",
    hasDropdown: true,
    subItems: [
      { name: "Content Writing", href: "/services/content-writing" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Branding", href: "/services/branding" },
      { name: "SEO", href: "/services/seo" },
      { name: "Resume Writing", href: "/services/resume-writing" },
      { name: "SOP Writing", href: "/services/sop-writing" },
      { name: "Copywriting", href: "/services/copywriting" },
    ]
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/98 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center shadow-md">
                <span className="text-primary-foreground font-display font-bold text-xl">W</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground tracking-tight">
                WriteElite
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.hasDropdown ? (
                  <div className="relative">
                    <Link
                      to={item.href}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isActive(item.href)
                          ? "text-primary bg-primary/5"
                          : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.name ? "rotate-180" : ""}`} />
                    </Link>
                    
                    {/* Clean Dropdown Menu - No glassmorphism */}
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 w-56 bg-card rounded-lg border border-border overflow-hidden z-50"
                          style={{ boxShadow: "0 4px 20px hsl(220 20% 15% / 0.08)" }}
                          role="menu"
                          aria-orientation="vertical"
                        >
                          <div className="py-2">
                            {item.subItems?.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.03, duration: 0.15 }}
                              >
                                <Link
                                  to={subItem.href}
                                  role="menuitem"
                                  className="block px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-200 border-l-3 border-transparent hover:border-l-primary focus:outline-none focus:bg-primary/5 focus:text-primary"
                                  style={{ borderLeftWidth: "3px" }}
                                >
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                          <div className="px-4 py-3 bg-muted/30 border-t border-border">
                            <Link to="/services" className="text-xs font-medium text-primary hover:underline focus:outline-none focus:underline">
                              View all services →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 block ${
                      isActive(item.href)
                        ? "text-primary bg-primary/5"
                        : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="hidden lg:block btn-primary text-sm py-3 px-7"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <ul className="container mx-auto px-6 py-6 space-y-1">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between text-foreground/80 hover:text-primary transition-colors py-3 text-lg font-medium"
                      >
                        {item.name}
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1 overflow-hidden"
                          >
                            {item.subItems?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-foreground/70 hover:text-primary transition-colors py-2 text-base"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-foreground/80 hover:text-primary transition-colors py-3 text-lg font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block btn-primary text-center mt-4"
                >
                  Get Started
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
