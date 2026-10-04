# Olá, eu sou Edson Francisco 👋

**IT Manager | Software Engineer | Empreendedor Tecnológico** 📍 Beira, Moçambique

Sou um profissional focado em transformar desafios complexos em soluções digitais de alto impacto. Com sólida experiência em liderança técnica e desenvolvimento de sistemas (Web, Mobile e Desktop), minha missão é impulsionar a transformação digital em Moçambique através de inovação estratégica.

### 🎯 Áreas de Atuação & Especialidades

* **🏦 Fintech:** Desenvolvimento de soluções SaaS para inclusão financeira e gestão de poupanças comunitárias (xtiques), com integração de mobile money e sistemas bancários.
* **🏥 HealthTech:** Criação de plataformas digitais para gestão de saúde e bem-estar (ex: DoaMOZ), focadas na eficiência e acessibilidade de serviços críticos.
* **🌾 AgroTech:** Desenvolvimento de tecnologias para o setor agrário, visando o aumento da produtividade e o desenvolvimento económico regional.
* **🎓 EduTech:** Implementação de ferramentas e sistemas que facilitam o acesso ao conhecimento e a gestão de instituições de ensino.
* **🏨 Hospitality & Tourism:** Soluções de transformação digital para hotéis e restaurantes, abrangendo desde infraestrutura de rede (Starlink/Ruijie) até automação de pedidos e presença online.

### 🛠️ Core Stack & Skills

* **Engenharia de Software:** Desenvolvimento Full-stack, arquitetura de sistemas e soluções escaláveis.
* **Liderança Técnica:** Gestão de equipas ágeis, alinhamento estratégico com gestão sénior e entrega de resultados incontestáveis.
* **Infraestrutura:** Redes WiFi de alta performance e suporte informático corporativo.
* **Processos:** Documentação técnica rigorosa, roadmaps de produto e organização via GitHub.

### 📈 Visão & Compromisso
Atuo como a ponte entre a visão de negócio e a execução técnica. Minha abordagem prioriza a **simplicidade, clareza no fluxo de utilização e impacto social direto**.

---

### 📫 Vamos conectar?
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](SEU_LINK_DO_LINKEDIN)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/edsonjorgef1)

*"Tecnologia para promover o desenvolvimento em Moçambique."*

---

## 🛠️ Tecnologias do Portfolio

Este portfólio foi construído com:

- **Next.js 15** (App Router, páginas geradas estaticamente por idioma)
- **TypeScript**
- **Tailwind CSS 3** com tokens próprios (tema escuro "minimal premium", contraste WCAG AA)
- **Geist** (via `next/font`)

Sem bibliotecas de animação nem de UI: movimento só em CSS e desligado com `prefers-reduced-motion`.

## 📋 Requisitos

- Node.js 20+ ou 22+
- npm 10+

## 🚀 Como rodar localmente

```bash
npm install
npm run dev
# http://localhost:3000
```

## 📁 Estrutura do Projeto

```
app/
├── [locale]/                # pt | en
│   ├── layout.tsx           # <html lang>, fontes
│   ├── page.tsx             # Página inicial
│   ├── projects/[slug]/     # Página de cada projecto
│   ├── now/                 # Página "Agora"
│   └── cv/                  # CV imprimível (origem dos PDFs em public/cv)
├── sitemap.ts
components/site/             # Componentes do site
lib/content/                 # Todo o conteúdo PT/EN
├── projects/*.ts            # Projectos (um ficheiro por grupo)
├── profile.ts               # Hero, sobre, experiência, "Agora"
├── categories.ts            # Áreas e nomes de tecnologias (filtros)
└── ui.ts                    # Textos da interface
public/work/<slug>/          # Capturas (WebP, ≤ 1600 px, < 300 KB)
public/cv/                   # CV em PDF (PT e EN)
middleware.ts                # "/" → /pt ou /en; links antigos → /pt
```

## 🌐 Rotas

- `/` – redirecciona para `/pt` ou `/en` (idioma do browser)
- `/pt`, `/en` – página inicial
- `/pt/projects/[slug]`, `/en/projects/[slug]` – projecto
- `/pt/now`, `/en/now` – o que estou a fazer agora
- `/pt/cv`, `/en/cv` – CV imprimível

## 🔧 Comandos Úteis

```bash
npm run build   # build de produção
npm run start   # servir o build
npm run lint
```

## 🔁 Actualizar o conteúdo

Ver `PORTFOLIO_NOTAS.md` (lista de projectos, fontes das capturas, regras de autoria e números) e `LINKEDIN.md`.

## ☁️ Deploy

Projeto pronto para deploy na Vercel.
