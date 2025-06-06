import { motion } from 'framer-motion';

interface ProductProps {
  id: number;
  name: string;
  description: string;
  price?: string;
  image: string;
  category: string;
  index: number;
}

export const ProductCard = ({ name, description, price, image, category }: ProductProps) => {
  // Map of image components - we'll use placeholder when actual image not available
  const getProductImage = (imageKey: string) => {
    switch(imageKey) {
      case 'keychain-initial':
        return '/assets/images/initial-keychain.jpg';
      case 'keychain-name':
        return '/assets/images/name-keychain.jpg';
      case 'keychain-mothers-day':
        return '/assets/images/mothers-day-keychain.jpg';
      case 'keychain-sports':
        return '/assets/images/sports-keychain.jpg';
      case 'keychain-baby':
        return '/assets/images/baby-keychain.jpg';
      case 'keychain-date':
        return '/assets/images/date-keychain.jpg';
      default:
        return '/assets/images/placeholder.jpg';
    }
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className="glass rounded-xl overflow-hidden transition-all product-card"
      variants={cardVariants}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      <div className="relative group">
        <div className="h-64 overflow-hidden img-hover-zoom">
          <img 
            src={getProductImage(image)} 
            alt={name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/assets/images/placeholder.jpg';
            }}
          />
        </div>
        
        {/* Overlay that appears on hover */}
        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.span 
            className="bg-light/80 text-dark px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Ver detalhes
          </motion.span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2 flex justify-between items-center">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/20 text-dark backdrop-blur-sm capitalize inline-block">
            {category === 'datas-especiais' ? 'Datas Especiais' : category}
          </span>
          <span className="font-semibold text-accent">{price}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-secondary mb-4 text-sm">{description}</p>
        
        <div className="mt-4 flex justify-end">
          <motion.a 
            href="#contato" 
            className="text-sm font-medium text-accent hover:text-dark transition-colors inline-flex items-center"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {price?.includes('A partir de') || !price
              ? 'Solicitar orçamento' 
              : 'Encomendar'}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}; 