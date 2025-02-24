# Template Frontend

Este repositório é um template frontend configurado com React, TypeScript e várias ferramentas modernas para desenvolvimento web. Abaixo está uma explicação de cada dependência e instruções para instalação e uso.

---

## **Dependências**

### **Principais:**

- **@radix-ui/react-dialog, @radix-ui/react-popover, @radix-ui/react-select, @radix-ui/react-slot, @radix-ui/react-tooltip**  
  Conjunto de componentes acessíveis e altamente configuráveis da biblioteca Radix UI para criação de elementos de interface como diálogos, popovers, selects e tooltips.

- **autoprefixer**  
  Adiciona automaticamente prefixos CSS para garantir compatibilidade entre navegadores.

- **axios**  
  Biblioteca para fazer requisições HTTP de forma simples e eficiente.

- **class-variance-authority**  
  Facilita a criação de classes CSS dinâmicas e variantes condicionais.

- **clsx**  
  Utilitário para manipulação de strings de classe CSS de forma dinâmica.

- **cmdk**  
  Utilitário para criar Command Menus altamente performáticos.

- **postcss**  
  Ferramenta para transformar CSS com plugins, como o TailwindCSS e o Autoprefixer.

- **react, react-dom**  
  Bibliotecas principais do React para construção de interfaces de usuário.

- **react-router-dom**  
  Gerenciador de rotas para aplicativos React.

- **tailwind-merge**  
  Mescla classes do TailwindCSS e resolve conflitos de forma eficiente.

- **tailwindcss**  
  Framework CSS utilitário para criar estilos rapidamente.

---

### **Dependências de Desenvolvimento:**

- **@iconify/react**  
  Biblioteca de ícones para React.

- **@types/node, @types/react, @types/react-dom**  
  Tipos para desenvolvimento TypeScript com Node.js, React e ReactDOM.

- **@typescript-eslint/eslint-plugin, @typescript-eslint/parser**  
  Ferramentas para linting e análise de código TypeScript.

- **@vitejs/plugin-react**  
  Plugin oficial do Vite para suporte ao React.

- **eslint, eslint-plugin-react-hooks, eslint-plugin-react-refresh**  
  Configurações para linting e boas práticas em projetos React.

- **i18next, react-i18next**  
  Ferramentas para internacionalização (i18n) de projetos React.

- **typescript**  
  Linguagem que adiciona tipagem estática ao JavaScript.

- **vite**  
  Ferramenta de build rápida e moderna para projetos web.

---

## **Instalação**

### 1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/template-frontend.git
   cd template-frontend
   ```

### 2. **Instale as depêndencias:**
Certifique-se de ter o Node.js e npm ou Yarn instalados.
   
   Com npm:
   ```bash
   npm install
   ```
   
   Com yarn:
   ```bash
   yarn install
   ```

### 4. **Build para produção:**
 
   Com npm:
   ```bash
   npm run build
   ```
   
   Com yarn:
   ```bash
   yarn build
   ```

### 5. **Pré-visualização do build:**
 
   Com npm:
   ```bash
   npm run preview
   ```
   
   Com yarn:
   ```bash
   yarn preview
   ```

---

## **Estrutura do Projeto**
- ```src/```: Código-fonte do projeto.
- ```public/```: Arquivos estáticos.
- ```vite.config.ts```: Configuração do Vite.

<table>
  <tr><th colspan=5><h1>Requisitos Da Aplicação</h1></th></tr>
  <tr>
    <td>Requisito Macro</td>
    <td>Requisitos Funcionais / Não Funcionais</td>
    <td>Departamento</td>
    <td>Detalhes</td>
    <td>Status</td>
  </tr>
  
  <tr>
    <th colspan=5><h2>Requisito Macro 01 -> Setup Geral do projeto</h2></th>
  </tr>
  
  <tr>
    <td>Criar componentes gerais do projeto.</td>
    <td>Req.F. 1.1</td>
    <td>Front-end</td>
    <td>Desenvolver os componentes básicos e reutilizáveis que serão utilizados em diferentes partes da aplicação, garantindo consistência e funcionalidade.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Configurar rotas gerais do projeto</td>
    <td>Req.F. 1.2</td>
    <td>Front-end</td>
    <td>Implementar a estrutura de navegação da aplicação, assegurando que as páginas estejam interligadas corretamente.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Configurar traduções de formulário gerais do projeto</td>
    <td>Req.F. 1.3</td>
    <td>Front-end</td>
    <td>Adicionar suporte de tradução de textos com foco em acessibilidade e componentização de validação para erros em formulários.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Configurar a biblioteca TailwindCSS.</td>
    <td>Req.F. 1.4</td>
    <td>Front-end</td>
    <td>Integrar a biblioteca de estilização TailwindCSS, incluindo sua configuração inicial para personalizações futuras.</td>
    <td align=center>✅</td>
  </tr>
  
  <tr></tr>
  <tr>
    <th colspan=5><h2>Requisito Macro 02 -> Registro de novos usuários</h2></th>
  </tr>
  
  <tr>
    <td>Cadastrar e-mail e senha de novos usuários.</td>
    <td>Req.F. 2.1</td>
    <td>Front-end</td>
    <td>Criar o formulário que permite ao usuário inserir e-mail e senha para cadastro na plataforma</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Implementar validação de e-mail e senha</td>
    <td>Req.F. 2.2</td>
    <td>Front-end</td>
    <td>Garantir que os campos de e-mail e senha atendam aos critérios de validação, como formato correto e segurança mínima exigida.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Adicionar tratamento de erros em validação de novos usuários.</td>
    <td>Req.F. 2.3</td>
    <td>Front-end</td>
    <td>Implementar mensagens claras e intuitivas para erros comuns, como e-mail inválido ou senha fraca.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Montagem da tela de Cadastro de e-mail e senha para novos usuários.</td>
    <td>Req.F. 2.4</td>
    <td>Front-end</td>
    <td>Implementar tela para cadastramento de novos usuários utilizando e-mail e senha.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Criar endpoints para cadastro de novos usuários.</td>
    <td>Req.NF. 2.1</td>
    <td>Back-end</td>
    <td>Desenvolver os serviços necessários para receber, validar e processar os dados enviados pelo front-end.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Cadastrar e-mail e senha de novos usuários.</td>
    <td>Req.NF. 2.2</td>
    <td>Back-end</td>
    <td>Salvar os dados de cadastro no banco de dados após validação.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Criar modelo para usuários no banco de dados.</td>
    <td>Req.NF. 2.3</td>
    <td>Back-end</td>
    <td>Estruturar as tabelas e colunas no banco de dados para armazenar informações de usuário, incluindo hashing de senha para segurança.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Implementar validação de e-mail e senha no back-end.</td>
    <td>Req.NF. 2.4</td>
    <td>Back-end</td>
    <td>Adicionar regras de validação para evitar cadastros inválidos e garantir a integridade dos dados recebidos.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Integrar novos usuários ao banco de dados.</td>
    <td>Req.NF. 2.5</td>
    <td>Back-end</td>
    <td>Garantir que os dados validados sejam salvos corretamente no banco de dados.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Adicionar tratamento de erros no cadastro de usuários.</td>
    <td>Req.NF. 2.6</td>
    <td>Back-end</td>
    <td>Desenvolver mecanismos para lidar com erros, como falhas de conexão ou duplicidade de e-mail.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Implementar validação de e-mail e senha no back-end.</td>
    <td>Req.NF. 2.7</td>
    <td>Back-end</td>
    <td>Adicionar regras de validação para evitar cadastros inválidos e garantir a integridade dos dados recebidos.</td>
    <td align=center>✅</td>
  </tr>
  
  <tr></tr>
  <tr>
    <th colspan=5><h2>Requisito Macro 03 -> Login de usuários existentes</h2></th>
  </tr>
  
  <tr>
    <td>Adicionar recuperação de senha via e-mail. ⛔</td>
    <td>Req.F. 3.1</td>
    <td>Front-end</td>
    <td>Implementar forma de recuperar senhas esquecidas via e-mail dos colaboradores.</td>
    <td align=center>❌</td>
  </tr>
  <tr>
    <td>Montagem da tela de Login usando e-mail e senha para usuários existentes.</td>
    <td>Req.F. 3.2</td>
    <td>Front-end</td>
    <td>Implementar tela para login de usuários existentes utilizando e-mail e senha.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Validação de login utilizando e-mail e senha para usuários existentes.</td>
    <td>Req.F. 3.3</td>
    <td>Front-end</td>
    <td>Implementar uma validação de dados como e-mail e senha para login do usuário existente.</td>
    <td align=center>✅</td>
  </tr>

  <tr></tr>
  <tr>
    <th colspan=5><h2>Requisito Macro 04 -> Cadastro de novos materiais</h2></th>
  </tr>
  
  <tr>
    <td>Montagem do modal de cadastro de novo material</td>
    <td>Req.F. 4.1</td>
    <td>Front-end</td>
    <td>Implementar a montagem do modal de novo material, para que o administrador possa criar um novo material com uma descrição, tipo de material, nome, quantidade e imagem.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Integração do backend com o modal de cadastro de novo material.</td>
    <td>Req.F. 4.2</td>
    <td>Front-end</td>
    <td>Implementar a integração do modal de novo material, para que o administrador possa criar um novo material com uma descrição, tipo de material, nome, quantidade e imagem de forma 100% funcional.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Validação de formulário do modal de cadastro de novo material.</td>
    <td>Req.F. 4.3</td>
    <td>Front-end</td>
    <td>Validar o formulário com retornos visuais para o que deverá ser feito pelo administrador para cadastrar de forma correta um novo material</td>
    <td align=center>✅</td>
  </tr><tr>
    <td>Adicionar modelo de materiais no banco de dados.</td>
    <td>Req.NF. 4.1</td>
    <td>Back-end</td>
    <td>Adicionar modelo para o banco de dados para poder ser aplicado as chaves de materiais no backend</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Implementar endpoints para cadastro de novo material.</td>
    <td>Req.NF. 4.2</td>
    <td>Back-end</td>
    <td>Implementar endpoints para cadastro de novo material, para assim permitir a funcionalidade do front-end</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Implementar validação de chaves retornadas pelo frontend.</td>
    <td>Req.NF. 4.3</td>
    <td>Back-end</td>
    <td>Implementar validação de chaves retronadas pelo frontend, para que caso o tipo seja diferente do que pedido pelo backend seja retornado um erro para o frontend.</td>
    <td align=center>✅</td>
  </tr>

  <tr></tr>
  <tr>
    <th colspan=5><h2>Requisito Macro 05 -> Edição de materiais já existentes ⛔</h2></th>
  </tr>
  
  <tr>
    <td>Montagem do modal de edição de material já existente. ⛔</td>
    <td>Req.F. 5.1</td>
    <td>Front-end</td>
    <td>Implementar a montagem do modal de editar material já existente, para que o administrador possa editar um material já existente com uma descrição, tipo de material, nome, quantidade e imagem.</td>
    <td align=center>❌</td>
  </tr>
  <tr>
    <td>Integração do backend com o modal de edição de material já existente. ⛔</td>
    <td>Req.F. 5.2</td>
    <td>Front-end</td>
    <td>Implementar a integração do modal de material já existente, para que o administrador possa editar um material com uma descrição, tipo de material, nome, quantidade e imagem de forma 100% funcional.</td>
    <td align=center>❌</td>
  </tr>
  <tr>
    <td>Validação de formulário do modal de edição de material já existente. ⛔</td>
    <td>Req.F. 5.3</td>
    <td>Front-end</td>
    <td>Validar o formulário com retornos visuais para o que deverá ser feito pelo administrador para editar de forma correta um material já existente</td>
    <td align=center>❌</td>
  </tr>
  <tr>
    <td>Implementar endpoints para edição de material já existente.</td>
    <td>Req.NF. 5.1</td>
    <td>Back-end</td>
    <td>Implementar endpoints para edição de material já existente, para assim permitir a funcionalidade do front-end</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Implementar validação de chaves retornadas pelo frontend.</td>
    <td>Req.NF. 5.2</td>
    <td>Back-end</td>
    <td>Implementar validação de chaves retronadas pelo frontend, para que caso o tipo seja diferente do que pedido pelo backend seja retornado um erro para o frontend.</td>
    <td align=center>✅</td>
  </tr>

  <tr></tr>
  <tr>
    <th colspan=5><h2>Requisito Macro 06 -> Vizualização detalhada de material existente</h2></th>
  </tr>
  
  <tr>
    <td>Montagem do modal de vizualização de material já existente</td>
    <td>Req.F. 6.1</td>
    <td>Front-end</td>
    <td>Implementar a montagem do modal de vizualização material já existente, para que o usuário possa vizualizar um material já existente com uma descrição, tipo de material, nome, quantidade e imagem.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Integração do backend com o modal de vizualização de material já existente.</td>
    <td>Req.F. 6.2</td>
    <td>Front-end</td>
    <td>Implementar a integração do modal de vizualização de material já existente, para que o usuário possa vizualizar um material com uma descrição, tipo de material, nome, quantidade e imagem de forma 100% funcional.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Implementar endpoints para vizualização de material já existente.</td>
    <td>Req.NF. 6.1</td>
    <td>Back-end</td>
    <td>Implementar endpoints para vizualização de material já existente, para assim permitir a funcionalidade do front-end</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Implementar validação de chaves retornadas pelo frontend.</td>
    <td>Req.NF. 6.2</td>
    <td>Back-end</td>
    <td>Implementar validação de chaves retronadas pelo frontend, para que caso o tipo seja diferente do que pedido pelo backend seja retornado um erro para o frontend.</td>
    <td align=center>✅</td>
  </tr>

  <tr></tr>
  <tr>
    <th colspan=5><h2>Requisito Macro 07 -> Vizualização de materiais existentes</h2></th>
  </tr>
  
  <tr>
    <td>Montagem da tela de vizualização de materiais existentes</td>
    <td>Req.F. 7.1</td>
    <td>Front-end</td>
    <td>Implementar a montagem da tela de materiais existentes, para que o usuário possa vizualizar um material já existente com uma descrição, tipo de material, nome, quantidade e imagem.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Integração do backend com a tela de vizualização de material já existente.</td>
    <td>Req.F. 7.2</td>
    <td>Front-end</td>
    <td>Implementar a integração da tela de vizualização de materiais existentes, para que o administrador possa vizualizar materiais existentes com uma descrição, tipo de material, nome, quantidade e imagem de forma 100% funcional.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Implementar endpoints para vizualização de materiais existentes.</td>
    <td>Req.NF. 7.1</td>
    <td>Back-end</td>
    <td>Implementar endpoints para vizualização de materiais existentes, para assim permitir a funcionalidade do front-end</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Implementar validação de chaves retornadas pelo frontend.</td>
    <td>Req.NF. 7.2</td>
    <td>Back-end</td>
    <td>Implementar validação de chaves retronadas pelo frontend, para que caso o tipo seja diferente do que pedido pelo backend seja retornado um erro para o frontend.</td>
    <td align=center>✅</td>
  </tr>
  
  <tr></tr>
  <tr>
    <th colspan=5><h2>Requisito Macro 08 -> Reserva de materiais existentes</h2></th>
  </tr>
  
  <tr>
    <td>Montagem do modal de reserva de materiais existentes</td>
    <td>Req.F. 8.1</td>
    <td>Front-end</td>
    <td>Implementar a montagem do modal de reserva, para que o usuário possa reservar um material já existente.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Integração do backend com o modal de reserva de material já existente.</td>
    <td>Req.F. 8.2</td>
    <td>Front-end</td>
    <td>Implementar a integração do modal de reserva de materiais existentes de forma 100% funcional.</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Implementar endpoints para reserva de materiais existentes.</td>
    <td>Req.NF. 8.1</td>
    <td>Back-end</td>
    <td>Implementar endpoints para vizualização de materiais existentes, para assim permitir a funcionalidade do front-end</td>
    <td align=center>✅</td>
  </tr>
  <tr>
    <td>Implementar validação de chaves retornadas pelo frontend.</td>
    <td>Req.NF. 8.2</td>
    <td>Back-end</td>
    <td>Implementar validação de chaves retronadas pelo frontend, para que caso o tipo seja diferente do que pedido pelo backend seja retornado um erro para o frontend.</td>
    <td align=center>✅</td>
  </tr>

  <tr></tr>
<tr>
  <th colspan=5><h2>Requisito Macro 09 -> Cadastro de novos espaços</h2></th>
</tr>

<tr>
  <td>Montagem do modal de cadastro de novo espaço</td>
  <td>Req.F. 9.1</td>
  <td>Front-end</td>
  <td>Implementar a montagem do modal de novo espaço, para que o administrador possa criar um novo espaço com uma descrição, tipo de espaço e nome.</td>
  <td align=center>✅</td>
</tr>
<tr>
  <td>Integração do backend com o modal de cadastro de novo espaço</td>
  <td>Req.F. 9.2</td>
  <td>Front-end</td>
  <td>Implementar a integração do modal de novo espaço, para que o administrador possa criar um novo espaço com uma descrição, tipo de espaço e nome de forma 100% funcional.</td>
  <td align=center>>✅</td>
</tr>
<tr>
  <td>Validação de formulário do modal de cadastro de novo espaço</td>
  <td>Req.F. 9.3</td>
  <td>Front-end</td>
  <td>Validar o formulário com retornos visuais para o que deverá ser feito pelo administrador para cadastrar de forma correta um novo espaço.</td>
  <td align=center>>✅</td>
</tr>
<tr>
  <td>Adicionar modelo de espaços no banco de dados</td>
  <td>Req.NF. 9.1</td>
  <td>Back-end</td>
  <td>Adicionar modelo para o banco de dados para poder ser aplicado às chaves de espaços no backend.</td>
  <td align=center>✅</td>
</tr>
<tr>
  <td>Implementar endpoints para cadastro de novo espaço</td>
  <td>Req.NF. 9.2</td>
  <td>Back-end</td>
  <td>Implementar endpoints para cadastro de novo espaço, permitindo a funcionalidade do front-end.</td>
  <td align=center>✅</td>
</tr>
<tr>
  <td>Implementar validação de chaves retornadas pelo frontend</td>
  <td>Req.NF. 9.3</td>
  <td>Back-end</td>
  <td>Implementar validação de chaves retornadas pelo frontend, para que, caso o tipo seja diferente do esperado pelo backend, seja retornado um erro.</td>
  <td align=center>✅</td>
</tr>

<tr></tr>
<tr>
  <th colspan=5><h2>Requisito Macro 10 -> Edição de espaços já existentes ⛔</h2></th>
</tr>

<tr>
  <td>Montagem do modal de edição de espaço já existente ⛔</td>
  <td>Req.F. 10.1</td>
  <td>Front-end</td>
  <td>Implementar a montagem do modal de edição de espaço já existente, para que o administrador possa editar um espaço já existente com uma descrição, tipo de espaço e nome.</td>
  <td align=center>❌</td>
</tr>
<tr>
  <td>Integração do backend com o modal de edição de espaço já existente ⛔</td>
  <td>Req.F. 10.2</td>
  <td>Front-end</td>
  <td>Implementar a integração do modal de espaço já existente, para que o administrador possa editar um espaço com uma descrição, tipo de espaço e nome de forma 100% funcional.</td>
  <td align=center>❌</td>
</tr>
<tr>
  <td>Validação de formulário do modal de edição de espaço já existente ⛔</td>
  <td>Req.F. 10.3</td>
  <td>Front-end</td>
  <td>Validar o formulário com retornos visuais para o que deverá ser feito pelo administrador para editar de forma correta um espaço já existente.</td>
  <td align=center>❌</td>
</tr>
<tr>
  <td>Implementar endpoints para edição de espaço já existente</td>
  <td>Req.NF. 10.1</td>
  <td>Back-end</td>
  <td>Implementar endpoints para edição de espaço já existente, permitindo a funcionalidade do front-end.</td>
  <td align=center>✅</td>
  
</tr>
<tr>
  <td>Implementar validação de chaves retornadas pelo frontend</td>
  <td>Req.NF. 10.2</td>
  <td>Back-end</td>
  <td>Implementar validação de chaves retornadas pelo frontend, para que, caso o tipo seja diferente do esperado pelo backend, seja retornado um erro.</td>
  <td align=center>✅</td>
  
</tr>

<tr></tr>
<tr>
  <th colspan=5><h2>Requisito Macro 11 -> Visualização detalhada de espaço existente ⛔</h2></th>
</tr>

<tr>
  <td>Montagem do modal de visualização de espaço já existente ⛔</td>
  <td>Req.F. 11.1</td>
  <td>Front-end</td>
  <td>Implementar a montagem do modal de visualização de espaço já existente, para que o usuário possa visualizar um espaço já existente com uma descrição, tipo de espaço e nome.</td>
  <td align=center>❌</td>
</tr>
<tr>
  <td>Integração do backend com o modal de visualização de espaço já existente ⛔</td>
  <td>Req.F. 11.2</td>
  <td>Front-end</td>
  <td>Implementar a integração do modal de visualização de espaço já existente, para que o usuário possa visualizar um espaço com uma descrição, tipo de espaço e nome de forma 100% funcional.</td>
  <td align=center>❌</td>
</tr>
<tr>
  <td>Implementar endpoints para visualização de espaço já existente</td>
  <td>Req.NF. 11.1</td>
  <td>Back-end</td>
  <td>Implementar endpoints para visualização de espaço já existente, permitindo a funcionalidade do front-end.</td>
  <td align=center>✅</td>
  
</tr>
<tr>
  <td>Implementar validação de chaves retornadas pelo frontend</td>
  <td>Req.NF. 11.2</td>
  <td>Back-end</td>
  <td>Implementar validação de chaves retornadas pelo frontend, para que, caso o tipo seja diferente do esperado pelo backend, seja retornado um erro.</td>
  <td align=center>✅</td>
  
</tr>

<tr></tr>
<tr>
  <th colspan=5><h2>Requisito Macro 12 -> Reserva de espaços existentes</h2></th>
</tr>

<tr>
  <td>Montagem do modal de reserva de espaços existentes</td>
  <td>Req.F. 12.1</td>
  <td>Front-end</td>
  <td>Implementar a montagem do modal de reserva, para que o usuário possa reservar um espaço já existente.</td>
  <td align=center>✅</td>
</tr>
<tr>
  <td>Integração do backend com o modal de reserva de espaço já existente</td>
  <td>Req.F. 12.2</td>
  <td>Front-end</td>
  <td>Implementar a integração do modal de reserva de espaços existentes de forma 100% funcional.</td>
  <td align=center>✅</td>
</tr>
<tr>
  <td>Implementar endpoints para reserva de espaços existentes</td>
  <td>Req.NF. 12.1</td>
  <td>Back-end</td>
  <td>Implementar endpoints para reserva de espaços existentes, permitindo a funcionalidade do front-end.</td>
  <td align=center>✅</td>
</tr>
<tr>
  <td>Implementar validação de chaves retornadas pelo frontend</td>
  <td>Req.NF. 12.2</td>
  <td>Back-end</td>
  <td>Implementar validação de chaves retornadas pelo frontend, para que, caso o tipo seja diferente do esperado pelo backend, seja retornado um erro.</td>
  <td align=center>✅</td>
</tr>

<tr></tr>
<tr>
  <th colspan=5><h2>Requisito Macro 13 -> Cadastro de novos links ⛔</h2></th>
</tr>

<tr>
  <td>Montagem do modal de cadastro de novo link ⛔</td>
  <td>Req.F. 13.1</td>
  <td>Front-end</td>
  <td>Implementar a montagem do modal de novo link, para que o administrador possa criar um novo link com uma descrição, nome, URL e tipo.</td>
  <td align=center>❌</td>
</tr>
<tr>
  <td>Integração do backend com o modal de cadastro de novo link ⛔</td>
  <td>Req.F. 13.2</td>
  <td>Front-end</td>
  <td>Implementar a integração do modal de novo link, para que o administrador possa criar um novo link com uma descrição, nome, URL e tipo. de forma 100% funcional.</td>
  <td align=center>❌</td>
</tr>
<tr>
  <td>Validação de formulário do modal de cadastro de novo link ⛔</td>
  <td>Req.F. 13.3</td>
  <td>Front-end</td>
  <td>Validar o formulário com retornos visuais para o que deverá ser feito pelo administrador para cadastrar de forma correta um novo link.</td>
  <td align=center>❌</td>
</tr>
<tr>
  <td>Adicionar modelo de links no banco de dados</td>
  <td>Req.NF. 13.1</td>
  <td>Back-end</td>
  <td>Adicionar modelo para o banco de dados para poder ser aplicado às chaves de links no backend.</td>
  <td align=center>✅</td>
</tr>
<tr>
  <td>Implementar endpoints para cadastro de novo link</td>
  <td>Req.NF. 13.2</td>
  <td>Back-end</td>
  <td>Implementar endpoints para cadastro de novo link, permitindo a funcionalidade do front-end.</td>
  <td align=center>✅</td>
</tr>
<tr>
  <td>Implementar validação de chaves retornadas pelo frontend</td>
  <td>Req.NF. 13.3</td>
  <td>Back-end</td>
  <td>Implementar validação de chaves retornadas pelo frontend, para que, caso o tipo seja diferente do esperado pelo backend, seja retornado um erro.</td>
  <td align=center>✅</td>
</tr>

<tr></tr>
<tr>
  <th colspan=5><h2>Requisito Macro 14 -> Edição de links já existentes ⛔</h2></th>
</tr>

<tr>
  <td>Montagem do modal de edição de link já existente ⛔</td>
  <td>Req.F. 14.1</td>
  <td>Front-end</td>
  <td>Implementar a montagem do modal de edição de link já existente, para que o administrador possa editar um link já existente com uma descrição, nome, URL e tipo..</td>
  <td align=center>❌</td>
</tr>
<tr>
  <td>Integração do backend com o modal de edição de link já existente ⛔</td>
  <td>Req.F. 14.2</td>
  <td>Front-end</td>
  <td>Implementar a integração do modal de link já existente, para que o administrador possa editar um link com uma descrição, nome, URL e tipo. de forma 100% funcional.</td>
  <td align=center>❌</td>
</tr>
<tr>
  <td>Validação de formulário do modal de edição de link já existente ⛔</td>
  <td>Req.F. 14.3</td>
  <td>Front-end</td>
  <td>Validar o formulário com retornos visuais para o que deverá ser feito pelo administrador para editar de forma correta um link já existente.</td>
  <td align=center>❌</td>
</tr>
<tr>
  <td>Implementar endpoints para edição de link já existente</td>
  <td>Req.NF. 14.1</td>
  <td>Back-end</td>
  <td>Implementar endpoints para edição de link já existente, permitindo a funcionalidade do front-end.</td>
  <td align=center>✅</td>
</tr>
<tr>
  <td>Implementar validação de chaves retornadas pelo frontend</td>
  <td>Req.NF. 14.2</td>
  <td>Back-end</td>
  <td>Implementar validação de chaves retornadas pelo frontend, para que, caso o tipo seja diferente do esperado pelo backend, seja retornado um erro.</td>
  <td align=center>✅</td>
</tr>

<tr></tr>
<tr>
  <th colspan=5><h2>Requisito Macro 15 -> Visualização detalhada de link existente ⛔</h2></th>
</tr>

<tr>
  <td>Montagem do modal de visualização de link já existente ⛔</td>
  <td>Req.F. 15.1</td>
  <td>Front-end</td>
  <td>Implementar a montagem do modal de visualização de link já existente, para que o usuário possa visualizar um link já existente com uma descrição, nome, URL e tipo..</td>
  <td align=center>❌</td>
</tr>
<tr>
  <td>Integração do backend com o modal de visualização de link já existente ⛔</td>
  <td>Req.F. 15.2</td>
  <td>Front-end</td>
  <td>Implementar a integração do modal de visualização de link já existente, para que o usuário possa visualizar um link com uma descrição, nome, URL e tipo. de forma 100% funcional.</td>
  <td align=center>❌</td>
</tr>
<tr>
  <td>Implementar endpoints para visualização de link já existente</td>
  <td>Req.NF. 15.1</td>
  <td>Back-end</td>
  <td>Implementar endpoints para visualização de link já existente, permitindo a funcionalidade do front-end.</td>
  <td align=center>✅</td>
</tr>
<tr>
  <td>Implementar validação de chaves retornadas pelo frontend</td>
  <td>Req.NF. 15.2</td>
  <td>Back-end</td>
  <td>Implementar validação de chaves retornadas pelo frontend, para que, caso o tipo seja diferente do esperado pelo backend, seja retornado um erro.</td>
  <td align=center>✅</td>
</tr>

<tr></tr>
<tr>
  <th colspan=5><h2>Requisito Macro 16 -> Vizualização de usuários já existentes</h2></th>
</tr>

<tr>
  <td>Montagem do modal de visualização de usuário já existente</td>
  <td>Req.F. 16.1</td>
  <td>Front-end</td>
  <td>Implementar a montagem do modal de visualização de usuário já existente, para que o administrador possa visualizar um usuário já existente com um nome, email e imagem.</td>
  <td align=center>✅</td>
</tr>
<tr>
  <td>Integração do backend com o modal de visualização de usuário já existente</td>
  <td>Req.F. 16.2</td>
  <td>Front-end</td>
  <td>Implementar a integração do modal de visualização de usuário já existente, para que o administrador possa visualizar um usuário com um nome, email e imagem de forma 100% funcional.</td>
  <td align=center>✅</td>
</tr>
<tr>
  <td>Implementar endpoints para visualização de usuário já existente</td>
  <td>Req.NF. 16.1</td>
  <td>Back-end</td>
  <td>Implementar endpoints para visualização de usuário já existente, permitindo a funcionalidade do front-end.</td>
  <td align=center>✅</td>
</tr>
<tr>
  <td>Implementar validação de chaves retornadas pelo frontend</td>
  <td>Req.NF. 16.2</td>
  <td>Back-end</td>
  <td>Implementar validação de chaves retornadas pelo frontend, para que, caso o tipo seja diferente do esperado pelo backend, seja retornado um erro.</td>
  <td align=center>✅</td>
</tr>

<tr></tr>
<tr>
  <th colspan=5><h2>Requisito Macro 17 -> Deleção de usuários já existentes</h2></th>
</tr>

<tr>
  <td>Montagem do modal de deleção de usuário já existente</td>
  <td>Req.F. 17.1</td>
  <td>Front-end</td>
  <td>Implementar a montagem do modal de deleção de usuário já existente, para que o administrador possa deletar um usuário já existente.</td>
  <td align=center>✅</td>
</tr>
<tr>
  <td>Integração do backend com o modal de deleção de usuário já existente</td>
  <td>Req.F. 17.2</td>
  <td>Front-end</td>
  <td>Implementar a integração do modal de deleção de usuário já existente, para que o administrador possa deletar um usuário de forma 100% funcional.</td>
  <td align=center>✅</td>
</tr>
<tr>
  <td>Implementar endpoints para deleção de usuário já existente</td>
  <td>Req.NF. 17.1</td>
  <td>Back-end</td>
  <td>Implementar endpoints para deleção de usuário já existente, permitindo a funcionalidade do front-end.</td>
  <td align=center>✅</td>
</tr>
<tr>
  <td>Implementar validação de chaves retornadas pelo frontend</td>
  <td>Req.NF. 17.2</td>
  <td>Back-end</td>
  <td>Implementar validação de chaves retornadas pelo frontend, para que, caso o tipo seja diferente do esperado pelo backend, seja retornado um erro.</td>
  <td align=center>✅</td>
</tr>
</table>
