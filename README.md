# Resinarte - Landing Page

Uma landing page moderna e interativa para a Resinarte, uma loja especializada em artes com resina.

## Visão Geral

Esta landing page foi desenvolvida utilizando React, TypeScript e Tailwind CSS para criar uma experiência minimalista, moderna e que segue estratégias de marketing e design para capturar a atenção dos clientes.

## Tecnologias Utilizadas

- React
- TypeScript
- Tailwind CSS
- Framer Motion (para animações)
- Vite (para build e desenvolvimento)

## Funcionalidades

- Design responsivo para todos os dispositivos
- Animações suaves e interativas
- Exibição de produtos com filtragem por categoria
- Formulário de contato para solicitações de orçamento
- Navegação intuitiva

## Como Executar o Projeto

1. Clone este repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```
   npm run dev
   ```
4. Acesse http://localhost:5173 no seu navegador

## Estrutura do Projeto

```
resinarte/
├── public/             # Arquivos públicos
├── src/                # Código fonte
│   ├── assets/         # Imagens e recursos
│   │   ├── Header/     # Cabeçalho
│   │   ├── Hero/       # Seção principal
│   │   ├── Products/   # Seção de produtos
│   │   ├── Contact/    # Formulário de contato
│   │   └── Footer/     # Rodapé
│   ├── hooks/          # Hooks personalizados
│   ├── lib/            # Utilitários
│   ├── App.tsx         # Componente principal
│   └── main.tsx        # Ponto de entrada
└── README.md           # Documentação
```

## Personalização

Para personalizar a landing page:

1. Adicione suas próprias imagens na pasta `src/assets/images`
2. Modifique a paleta de cores no arquivo `tailwind.config.ts`
3. Atualize as informações de produtos no componente `Products.tsx`
4. Ajuste os textos e detalhes de contato conforme necessário

## Implantação

Para construir a versão de produção:

```
npm run build
```
```
To deploy to production (resinarte.vercel.app), run `vercel --prod`
```

Os arquivos serão gerados na pasta `dist`, que pode ser implantada em qualquer serviço de hospedagem estática.

## Licença

Este projeto está sob a licença MIT.
