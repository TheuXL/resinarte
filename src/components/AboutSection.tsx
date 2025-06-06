import { motion } from 'framer-motion';

export const AboutSection = () => {
  // Define proper animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section id="sobre" className="section relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-primary/5 bg-animate"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute right-0 top-0 w-96 h-96 rounded-full bg-secondary/10 filter blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute left-0 bottom-0 w-80 h-80 rounded-full bg-accent/10 filter blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Sobre a <span className="text-gradient">Resinarte</span>
          </h2>
          <p className="max-w-2xl mx-auto text-secondary">
            Conheça nossa história e o que nos move a criar peças únicas e personalizadas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.p 
                className="text-secondary"
                variants={textVariants}
              >
                Na Resinarte, transformamos a resina em arte personalizada, criando chaveiros e lembranças 
                que eternizam momentos especiais. Cada peça é cuidadosamente elaborada à mão, com atenção 
                aos mínimos detalhes.
              </motion.p>
              <motion.p 
                className="text-secondary"
                variants={textVariants}
              >
                Nossa especialidade são os chaveiros personalizados com nomes, iniciais, datas comemorativas
                e temas especiais. Utilizamos técnicas exclusivas para incorporar glitter, folhas metálicas 
                e outros elementos decorativos que tornam cada peça verdadeiramente única.
              </motion.p>
              <motion.p 
                className="text-secondary"
                variants={textVariants}
              >
                Atendemos todo o Brasil, enviando nossas criações com todo o cuidado para que cheguem 
                perfeitas às mãos de nossos clientes. Trabalhamos com encomendas personalizadas, 
                transformando suas ideias em peças inesquecíveis.
              </motion.p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              <motion.div 
                className="glass p-5 rounded-lg text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="text-2xl font-bold text-gradient mb-1">100%</div>
                <div className="text-dark text-sm">Artesanal</div>
              </motion.div>
              <motion.div 
                className="glass p-5 rounded-lg text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="text-2xl font-bold text-gradient mb-1">Brasil</div>
                <div className="text-dark text-sm">Entrega nacional</div>
              </motion.div>
              <motion.div 
                className="glass p-5 rounded-lg text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="text-2xl font-bold text-gradient mb-1">Único</div>
                <div className="text-dark text-sm">Personalizado</div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                className="rounded-xl overflow-hidden shadow-xl img-hover-zoom"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src="/src/assets/images/name-keychain.jpg" 
                  alt="Chaveiro personalizado com nome" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="rounded-xl overflow-hidden shadow-xl mt-12 img-hover-zoom"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src="/src/assets/images/initial-keychain.jpg" 
                  alt="Chaveiro personalizado com inicial" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="rounded-xl overflow-hidden shadow-xl img-hover-zoom"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src="/src/assets/images/date-keychain.jpg" 
                  alt="Chaveiro personalizado com data" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="rounded-xl overflow-hidden shadow-xl mt-12 img-hover-zoom"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src="/src/assets/images/mothers-day-keychain.jpg" 
                  alt="Chaveiro para o Dia das Mães" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 