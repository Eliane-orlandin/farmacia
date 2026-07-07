# Farma Li 💊

O **Farma Li** é uma aplicação web desenvolvida em React, TypeScript e Tailwind CSS que funciona como o painel de gerenciamento para uma farmácia. O projeto conta com rotas para navegação e integração com uma API backend para a realização do CRUD completo de **Categorias** de produtos.

---

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para construção de interfaces.
- **TypeScript** - Superconjunto de JavaScript que adiciona tipagem estática.
- **Vite** - Build tool rápida para desenvolvimento moderno.
- **Tailwind CSS v4** - Framework CSS utilitário para estilização rápida e responsiva.
- **React Router DOM v7** - Biblioteca para gerenciamento de rotas e navegação.
- **Axios** - Cliente HTTP para chamadas e integração com a API.
- **Phosphor Icons** - Biblioteca de ícones flexíveis e modernos.
- **React Spinners** - Componentes de loading animados.

---

## 🚀 Funcionalidades Principais

- **Página Inicial (Home)**: Banner de boas-vindas com design profissional e apresentação da marca.
- **Listagem de Categorias**: Busca em tempo real da API e renderização dos cards com nome e descrição de cada categoria.
- **Cadastro de Categoria**: Formulário estruturado com validação para envio e inserção de novas categorias no banco de dados.
- **Edição de Categoria**: Preenchimento automático do formulário a partir dos dados recuperados da API pelo ID, permitindo a atualização dos dados.
- **Exclusão de Categoria**: Tela de confirmação interativa para exclusão segura de categorias na base de dados.

---

## 📦 Como Instalar e Rodar o Projeto

Para executar o projeto localmente, siga os passos abaixo:

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passos
1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd farmacia/farmacia
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. Abra o navegador no endereço indicado no terminal (normalmente `http://localhost:5173`).

---

## 📁 Estrutura de Pastas Importantes

```bash
src/
├── assets/         # Imagens e mídias estáticas
├── components/     # Componentes estruturais e reutilizáveis
│   ├── footer/     # Rodapé do site
│   ├── navbar/     # Menu de navegação
│   └── categoria/  # CRUD de Categorias (Cards, Listagem, Formulário e Exclusão)
├── models/         # Definições de tipos/interfaces do TypeScript (ex: Categoria)
├── pages/          # Páginas principais (Home)
└── services/       # Configuração do Axios e chamadas HTTP com a API
```
