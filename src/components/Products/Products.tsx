import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';

interface Product {
  id: number;
  name: string;
  description: string;
  price?: string;
  image: string;
  category: string;
}

type CategoryMapping = {
  [key: string]: string;
}

export const Products = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Chaveiros Personalizados com Iniciais',
      description: 'Chaveiros elegantes em resina com iniciais personalizadas e acabamento em glitter. Disponíveis em diversas cores e com pingentes decorativos.',
      price: 'A partir de R$ 14,90',
      image: 'keychain-initial',
      category: 'chaveiros'
    },
    {
      id: 2,
      name: 'Chaveiros com Nomes',
      description: 'Chaveiros personalizados com nomes completos, em formato de nuvem ou coração, com detalhes em folha de ouro e glitter.',
      price: 'A partir de R$ 14,90',
      image: 'keychain-name',
      category: 'chaveiros'
    },
    {
      id: 3,
      name: 'Chaveiros para o Dia das Mães',
      description: 'Chaveiros especiais para o Dia das Mães com mensagem "Feliz Dia das Mães" e decoração exclusiva em cores vibrantes.',
      price: 'R$ 14,90',
      image: 'keychain-mothers-day',
      category: 'datas-especiais'
    },
    {
      id: 4,
      name: 'Chaveiros Esportivos',
      description: 'Chaveiros temáticos para amantes de esportes, com símbolos de handebol, futebol e outros esportes. Perfeito para presentear atletas.',
      price: 'R$ 19,90',
      image: 'keychain-sports',
      category: 'tematicos'
    },
    {
      id: 5,
      name: 'Chaveiros Infantis',
      description: 'Chaveiros delicados com temas infantis, incluindo famílias de ursinhos. Ideal para lembranças de maternidade ou aniversários.',
      price: 'A partir de R$ 19,90',
      image: 'keychain-baby',
      category: 'infantil'
    },
    {
      id: 6,
      name: 'Chaveiros Personalizados com Datas',
      description: 'Chaveiros comemorativas com datas especiais, nomes e símbolos personalizados. Perfeito para celebrações e recordações.',
      price: 'R$ 19,90',
      image: 'keychain-date',
      category: 'datas-especiais'
    },
  ];

  const categories = ['todos', 'chaveiros', 'datas-especiais', 'tematicos', 'infantil'];
  
  const categoryNames: CategoryMapping = {
    'todos': 'Todos',
    'chaveiros': 'Chaveiros',
    'datas-especiais': 'Datas Especiais',
    'tematicos': 'Temáticos',
    'infantil': 'Infantil'
  };
  
  const filteredProducts = activeCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  // Gallery images
  const galleryImages = [
    { src: '/assets/images/initial-keychain.jpg', alt: 'Chaveiro com inicial' },
    { src: '/assets/images/name-keychain.jpg', alt: 'Chaveiro com nome' },
    { src: '/assets/images/mothers-day-keychain.jpg', alt: 'Chaveiro Dia das Mães' },
    { src: '/assets/images/date-keychain.jpg', alt: 'Chaveiro com data' },
    { src: '/assets/images/sports-keychain.jpg', alt: 'Chaveiro esportivo' }
  ];

  return (
    <section id="produtos" className="section relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light via-primary/5 to-light/90 z-0"></div>
      
      {/* Animated decorative elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-dark mb-4">
            Nossas <span className="text-gradient">Criações</span>
          </h2>
          <p className="max-w-2xl mx-auto text-secondary">
            Cada peça é única e feita à mão com muito carinho e atenção aos detalhes.
            Personalizamos de acordo com suas preferências para tornar cada item verdadeiramente especial.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm capitalize transition-all shadow-sm ${
                activeCategory === category
                  ? 'bg-accent text-light glow'
                  : 'glass text-dark hover:bg-secondary/10'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {categoryNames[category]}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProducts.map((product, index) => (
            <ProductCard 
              key={product.id}
              {...product}
              index={index}
            />
          ))}
        </motion.div>
        
        {/* Image Gallery Showcase */}
        <motion.div
          className="mt-24 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            <span className="text-gradient">Galeria</span> de produtos
          </h3>
          
          <div className="flex gap-4 overflow-x-auto pb-6 px-2 scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-72 h-72 rounded-xl overflow-hidden shadow-lg img-hover-zoom"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-secondary mb-6">
            Não encontrou o que procura? Criamos peças personalizadas sob encomenda.
            Entre em contato e transforme sua ideia em uma linda peça de resina.
          </p>
          <motion.a 
            href="#contato" 
            className="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar orçamento personalizado
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}; 