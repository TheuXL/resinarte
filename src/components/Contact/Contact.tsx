import { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    product: 'Selecione um produto',
    isCustom: false,
    quantity: '1',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  
  const handleSubmit = (_e: React.FormEvent) => {
    // Não previne o comportamento padrão para permitir o envio do formulário
    setIsSubmitting(true);
    
    // Simular o sucesso após o envio do formulário
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after 6 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          product: 'Selecione um produto',
          isCustom: false,
          quantity: '1',
        });
      }, 6000);
    }, 1000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section id="contato" className="section relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/90 bg-animate"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute right-10 top-10 w-96 h-96 rounded-full bg-accent/10 mix-blend-overlay filter blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute left-10 bottom-10 w-80 h-80 rounded-full bg-secondary/10 mix-blend-overlay filter blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <div className="container relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h2 className="mb-4">
              Solicite um <span className="text-gradient">Orçamento</span>
            </h2>
            <p className="max-w-2xl mx-auto text-secondary">
              Interessado em um de nossos chaveiros personalizados ou deseja algo exclusivo? 
              Preencha o formulário abaixo e entraremos em contato o mais breve possível.
            </p>
          </motion.div>
          
          <motion.div 
            className="glass p-6 md:p-8 rounded-xl shadow-lg"
            variants={itemVariants}
          >
            {isSubmitted ? (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 glow">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Mensagem Enviada!</h3>
                <p className="text-secondary">
                  Obrigado pelo seu interesse. Sua mensagem foi enviada para resinarteluz@gmail.com.
                </p>
                <p className="text-secondary mt-2">
                  Entraremos em contato em breve!
                </p>
              </motion.div>
            ) : (
              <motion.form 
                action="https://formsubmit.co/resinarteluz@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
                variants={containerVariants}
              >
                {/* FormSubmit.co configuração simples */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Novo pedido de orçamento do site" />
                <input type="hidden" name="_next" value={window.location.href} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-secondary/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition bg-white/80 backdrop-blur-sm"
                      placeholder="Seu nome"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-secondary/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition bg-white/80 backdrop-blur-sm"
                      placeholder="seu@email.com"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-secondary/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition bg-white/80 backdrop-blur-sm"
                      placeholder="(00) 00000-0000"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="product" className="block text-sm font-medium text-dark mb-1">
                      Produto de interesse
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-secondary/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition bg-white/80 backdrop-blur-sm"
                    >
                      <option value="Selecione um produto">Selecione um produto</option>
                      <option value="Chaveiro com Inicial">Chaveiro com Inicial</option>
                      <option value="Chaveiro com Nome">Chaveiro com Nome</option>
                      <option value="Chaveiro para Dia das Mães">Chaveiro para Dia das Mães</option>
                      <option value="Chaveiro Esportivo">Chaveiro Esportivo</option>
                      <option value="Chaveiro Infantil">Chaveiro Infantil</option>
                      <option value="Chaveiro com Data Especial">Chaveiro com Data Especial</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="quantity" className="block text-sm font-medium text-dark mb-1">
                      Quantidade
                    </label>
                    <select
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-secondary/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition bg-white/80 backdrop-blur-sm"
                    >
                      <option value="1">1 unidade</option>
                      <option value="2-5">2 a 5 unidades</option>
                      <option value="6-10">6 a 10 unidades</option>
                      <option value="11-20">11 a 20 unidades</option>
                      <option value="20+">Mais de 20 unidades</option>
                    </select>
                  </motion.div>
                  
                  <motion.div className="md:col-span-2" variants={itemVariants}>
                    <div className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id="isCustom"
                        name="isCustom"
                        checked={formData.isCustom}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-accent focus:ring-accent border-secondary/30 rounded"
                      />
                      <label htmlFor="isCustom" className="ml-2 block text-sm text-dark">
                        Desejo um produto totalmente personalizado
                      </label>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-secondary/30 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition bg-white/80 backdrop-blur-sm h-32 resize-none"
                    placeholder="Descreva aqui os detalhes do seu pedido, como cores, pingentes, e outras personalizações..."
                  />
                </motion.div>
                
                <motion.div className="text-center pt-4" variants={itemVariants}>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-md font-medium bg-accent text-light hover:bg-accent/90 transition-all duration-300 inline-block shadow-md w-full md:w-auto"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Pedido de Orçamento'}
                  </button>
                  
                  <p className="text-xs text-secondary mt-4">
                    O formulário enviará sua mensagem diretamente para resinarteluz@gmail.com.
                    Se preferir, você também pode enviar um email diretamente para <a href="mailto:resinarteluz@gmail.com" className="text-accent">resinarteluz@gmail.com</a>
                  </p>
                </motion.div>
              </motion.form>
            )}
          </motion.div>
          
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            variants={containerVariants}
          >
            <motion.div 
              className="glass p-6 rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <a 
                href="https://wa.me/5587988176111" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-accent/30 transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                <span className="text-secondary">(87) 98817-6111</span>
              </a>
            </motion.div>
            
            <motion.div 
              className="glass p-6 rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <a 
                href="mailto:resinarteluz@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-accent/30 transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">E-mail</h3>
                <span className="text-secondary">resinarteluz@gmail.com</span>
              </a>
            </motion.div>
            
            <motion.div 
              className="glass p-6 rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <a 
                href="https://www.instagram.com/resinarteluz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-accent/30 transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Instagram</h3>
                <span className="text-secondary hover:text-accent transition-colors">@resinarteluz</span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 