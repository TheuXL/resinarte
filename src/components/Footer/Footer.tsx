export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/10 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-dark">Resinarte</h3>
            <p className="text-secondary mb-4">
              Transformando momentos em arte com chaveiros personalizados em resina.
              Cada peça é única e feita à mão com muito carinho e atenção aos detalhes.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/resinarteluz" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors p-2 rounded-full hover:bg-accent/10">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors p-2 rounded-full hover:bg-accent/10">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors p-2 rounded-full hover:bg-accent/10">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors p-2 rounded-full hover:bg-accent/10">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-dark">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#produtos" className="text-secondary hover:text-accent transition-colors">Chaveiros com Iniciais</a>
              </li>
              <li>
                <a href="#produtos" className="text-secondary hover:text-accent transition-colors">Chaveiros com Nomes</a>
              </li>
              <li>
                <a href="#produtos" className="text-secondary hover:text-accent transition-colors">Chaveiros Temáticos</a>
              </li>
              <li>
                <a href="#produtos" className="text-secondary hover:text-accent transition-colors">Chaveiros para Datas Especiais</a>
              </li>
              <li>
                <a href="#produtos" className="text-secondary hover:text-accent transition-colors">Chaveiros Infantis</a>
              </li>
              <li>
                <a href="#contato" className="text-secondary hover:text-accent transition-colors">Projetos Personalizados</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-dark">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href="https://wa.me/5587988176111" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-secondary hover:text-accent transition-colors inline-flex items-center group"
                >
                  <span>(87) 98817-6111</span>
                  <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:resinarteluz@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-secondary hover:text-accent transition-colors inline-flex items-center group"
                >
                  <span>resinarteluz@gmail.com</span>
                  <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
                <a 
                  href="https://www.instagram.com/resinarteluz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-secondary hover:text-accent transition-colors inline-flex items-center group"
                >
                  <span>@resinarteluz</span>
                  <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </li>
              <li className="mt-4">
                <a href="#contato" className="text-accent hover:text-dark transition-colors font-medium">
                  Solicite um orçamento →
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary text-sm mb-4 md:mb-0">
            © {currentYear} Resinarte. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-secondary hover:text-accent transition-colors text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-secondary hover:text-accent transition-colors text-sm">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}; 