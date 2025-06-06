import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const headerVariants = {
    initial: { backgroundColor: 'rgba(255, 255, 255, 0)' },
    scrolled: { backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)' }
  };
  
  const logoVariants = {
    initial: { color: '#1a202c' },
    scrolled: { color: '#1a202c' }
  };
  
  const menuItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };
  
  const navItems = [
    { title: 'Início', href: '#início' },
    { title: 'Produtos', href: '#produtos' },
    { title: 'Sobre', href: '#sobre' },
    { title: 'Contato', href: '#contato' }
  ];
  
  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 shadow-md' : 'py-4'}`}
      initial="initial"
      animate={isScrolled ? "scrolled" : "initial"}
      variants={headerVariants}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.a 
          href="#" 
          className="text-2xl font-serif font-bold"
          variants={logoVariants}
        >
          <span className="text-gradient">Resinarte</span>
        </motion.a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <motion.li key={item.title} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href={item.href} 
                  className={`font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-dark hover:text-accent' 
                      : 'text-dark hover:text-accent'
                  }`}
                >
                  {item.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        
        {/* Contact Button */}
        <motion.a 
          href="#contato" 
          className="hidden md:block button text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Faça seu pedido
        </motion.a>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <svg 
            className="w-6 h-6 text-dark" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden glass absolute top-full left-0 right-0 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.title}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ delay: index * 0.1 }}
                  >
                    <a 
                      href={item.href} 
                      className="block py-2 text-dark hover:text-accent transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <a 
                    href="#contato" 
                    className="block button text-center mt-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Faça seu pedido
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}; 