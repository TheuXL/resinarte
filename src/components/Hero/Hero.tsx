import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="início" className="min-h-screen flex items-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden bg-animate">
      {/* Abstract shapes background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/30 mix-blend-overlay filter blur-3xl"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -30, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-secondary/20 mix-blend-overlay filter blur-3xl"
          animate={{ 
            x: [0, -20, 0], 
            y: [0, 20, 0],
            scale: [1, 1.05, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <motion.h1 
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Arte em resina <br /> 
              <span className="text-gradient">que eterniza momentos</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 max-w-lg text-dark/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Chaveiros personalizados, porta-retratos e lembranças exclusivas feitas à mão com materiais de alta qualidade. Peças únicas que transformam memórias em obras de arte.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#produtos" className="button">
                Ver produtos
              </a>
              <a href="#contato" className="button-outline">
                Solicitar orçamento
              </a>
            </motion.div>

            {/* Floating product images removed as requested */}
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl glass p-3 relative z-10 floating">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden img-hover-zoom">
                <img 
                  src="/assets/images/logo.jpg" 
                  alt="Resinarte - Arte em Resina" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Decorative blurs */}
            <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent/20 filter blur-xl"></div>
            <div className="absolute top-1/4 -right-6 w-32 h-32 md:w-40 md:h-40 rounded-full bg-secondary/20 filter blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 