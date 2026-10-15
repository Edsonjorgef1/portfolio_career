import type { Project } from "@/types/content";

export const projects: Project[] = [
  // ───────────────────────────────────────────── FAMS (featured case study)
  {
    slug: "fams",
    name: "FAMS – Farmer & Agent Management System",
    tagline: {
      pt: "Plataforma Laravel para agronegócios gerirem produtores, compras no campo, stock e fábrica — com API para a app de campo offline.",
      en: "Laravel platform for agribusinesses to manage farmers, field purchases, stock and processing — with an API for the offline field app.",
    },
    period: "2021–2026",
    status: "production",
    categories: ["agritech", "offline-first"],
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "GitHub Actions", "M-Pesa", "Ionic", "Angular", "Capacitor"],
    role: {
      pt: "Cofundador e gestor de tecnologia e produto; maior contribuidor do backend Laravel, da API móvel e do CI/CD",
      en: "Co-founder and technology & product manager; largest contributor to the Laravel backend, the mobile API and CI/CD",
    },
    authorship: "main",
    partners: ["GIZ", "NIRAS", "COMO Consult"],
    problem: {
      pt: "Empresas agrícolas que trabalham com milhares de pequenos produtores geriam cadastros, pesagens, créditos de insumos e pagamentos em papel e Excel. Os técnicos de campo trabalham em zonas sem rede, e os financiadores pediam relatórios que ninguém conseguia produzir a tempo.",
      en: "Agribusinesses working with thousands of smallholders managed registrations, weighings, input credit and payments on paper and in Excel. Field staff work in areas without coverage, and funders asked for reports nobody could produce on time.",
    },
    solution: {
      pt: "Um sistema central em Laravel (web) com módulos base e plugins activáveis por empresa: produtores, agentes, compras, stock, fábrica, pagamentos M-Pesa e rastreabilidade. O mesmo backend expõe a API que a app Android da equipa usa para trabalhar offline e sincronizar. O Edson é o maior autor da API, das migrations, das vistas, dos testes e dos workflows de deploy.",
      en: "A central Laravel web system with core modules and per-company plugins: farmers, agents, purchases, stock, processing, M-Pesa payments and traceability. The same backend exposes the API the team's Android app uses to work offline and sync. Edson is the largest author of the API, migrations, views, tests and deploy workflows.",
    },
    decisions: [
      {
        title: {
          pt: "Núcleo comum + plugins activáveis por empresa",
          en: "Shared core + plugins switched on per company",
        },
        body: {
          pt: "Stock, Compras, Insumos, Fábrica, ePayment, SMS e rastreabilidade do mel vivem em controladores de plugin separados, com permissões Spatie por plugin. Cada cliente liga só o que usa, sem ramos de código por cliente.",
          en: "Stock, Purchases, Inputs, Factory, ePayment, SMS and honey traceability live in separate plugin controllers, with Spatie permissions per plugin. Each client enables only what it uses, with no per-client code branches.",
        },
      },
      {
        title: {
          pt: "API v1 com Sanctum e registo da última sincronização",
          en: "Sanctum-based v1 API that records the last sync",
        },
        body: {
          pt: "A app de campo autentica agentes e membros com tokens Sanctum, com limite de tentativas no login e no OTP. Um middleware grava a última sincronização de cada dispositivo, para o escritório saber quem está atrasado.",
          en: "The field app authenticates agents and members with Sanctum tokens, with rate limits on login and OTP. A middleware stores each device's last sync, so the office can see who is behind.",
        },
      },
      {
        title: {
          pt: "Auditoria em todos os dados operacionais",
          en: "Auditing on all operational data",
        },
        body: {
          pt: "83 modelos implementam Auditable (owen-it/laravel-auditing). Em compras e créditos a produtores é preciso saber quem alterou o quê e quando.",
          en: "83 models implement Auditable (owen-it/laravel-auditing). For purchases and farmer credit you need to know who changed what, and when.",
        },
      },
      {
        title: {
          pt: "Deploy por ramo com GitHub Actions",
          en: "Branch-based deploys with GitHub Actions",
        },
        body: {
          pt: "main vai para o servidor de testes e production para os servidores dos clientes, com um script que faz artisan down, composer --no-dev, migrate --force e up. O mesmo código serve vários deploys de clientes.",
          en: "main deploys to the test server and production to client servers, via a script that runs artisan down, composer --no-dev, migrate --force and up. The same code serves several client deployments.",
        },
      },
      {
        title: {
          pt: "Alertas de erro no Microsoft Teams",
          en: "Error alerts in Microsoft Teams",
        },
        body: {
          pt: "Em vez de montar uma stack de observabilidade, os erros de produção vão para um canal do Teams através de um pacote Composer que o Edson mantém (laravel-teams-logging).",
          en: "Instead of running an observability stack, production errors go to a Teams channel through a Composer package Edson maintains (laravel-teams-logging).",
        },
      },
    ],
    results: [
      {
        value: "55 422",
        label: { pt: "produtores digitalizados, 50,5% mulheres", en: "farmers digitised, 50.5% of them women" },
        source: { pt: "painel de impacto do FAMS (Out 2026)", en: "FAMS impact dashboard (Oct 2026)" },
      },
      {
        value: "US$ 1 526 984",
        label: {
          pt: "em rendimento pago aos agricultores (97,6 milhões de MZN)",
          en: "in income paid to farmers (MZN 97.6 million)",
        },
        source: { pt: "painel de impacto do FAMS (Out 2026)", en: "FAMS impact dashboard (Oct 2026)" },
      },
      {
        value: "US$ 1 775 361",
        label: { pt: "valor total de compras registadas no FAMS", en: "total purchase value recorded in FAMS" },
        source: { pt: "painel de impacto do FAMS (Out 2026)", en: "FAMS impact dashboard (Oct 2026)" },
      },
      {
        value: "10 126",
        label: {
          pt: "insumos distribuídos e rastreados, em 343 distribuições a 321 produtores",
          en: "inputs distributed and tracked, in 343 distributions to 321 farmers",
        },
        source: { pt: "painel de impacto do FAMS (Out 2026)", en: "FAMS impact dashboard (Oct 2026)" },
      },
      {
        value: "26 199 ha",
        label: { pt: "de área cultivada registada", en: "of cultivated land recorded" },
        source: { pt: "painel de impacto do FAMS (Out 2026)", en: "FAMS impact dashboard (Oct 2026)" },
      },
      {
        value: "9 · 7",
        label: {
          pt: "cadeias de valor (copra, algodão, milho, soja, mel, gado…) em 7 províncias",
          en: "value chains (copra, cotton, maize, soy, honey, livestock…) across 7 provinces",
        },
        source: { pt: "painel de impacto do FAMS (Out 2026)", en: "FAMS impact dashboard (Oct 2026)" },
      },
      {
        value: "99",
        label: { pt: "versões no changelog do produto (v10 → v114)", en: "versions in the product changelog (v10 → v114)" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
      {
        value: "61",
        label: { pt: "ficheiros de teste PHPUnit", en: "PHPUnit test files" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
      {
        value: "220",
        label: { pt: "migrations de base de dados", en: "database migrations" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
      {
        value: "14",
        label: { pt: "versões da app móvel documentadas (v50 → v103)", en: "documented mobile app versions (v50 → v103)" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
      {
        value: "KnM",
        label: {
          pt: "FAMS indicado como ferramenta de registo e monitoria de produtores no guia Kulima ndi Malonda",
          en: "FAMS named as the farmer registration and monitoring tool in the Kulima ndi Malonda guide",
        },
        source: {
          pt: "NIRAS / GIZ, guia \"Kulima ndi Malonda — Farming as a Business\", secções 4 e M&E",
          en: "NIRAS / GIZ, \"Kulima ndi Malonda — Farming as a Business\" guide, sections 4 and M&E",
        },
        url: "https://www.niras.com/media/cchl2swj/kulima-ndi-malonda_reduce-size.pdf",
      },
    ],
    learnings: {
      pt: "Manter um produto durante mais de cinco anos pede disciplina aborrecida: changelog versão a versão, deploy automático por ramo e testes para as regras de negócio que mais doem, como os créditos de campanha.",
      en: "Keeping a product alive for more than five years takes boring discipline: a changelog for every version, automatic branch deploys, and tests for the business rules that hurt most, such as seasonal credit.",
    },
    images: [
      {
        src: "/work/fams/00.webp",
        alt: {
          pt: "FAMS — recolha directa de dados no campo: registo de novos produtores, compras e insumos, com verificação na sede",
          en: "FAMS — direct data input in the field: onboarding new farmers, recording purchases and inputs, verified at headquarters",
        },
        width: 1600,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/fams/01.webp",
        alt: {
          pt: "Mapa do FAMS com pontos de colecta, produtores e áreas no Niassa, com totais agregados por ponto de colecta",
          en: "FAMS map with collection points, farmers and areas in Niassa, with totals aggregated per collection point",
        },
        width: 1600,
        height: 1003,
        device: "desktop",
      },
      {
        src: "/work/fams/02.webp",
        alt: {
          pt: "App de campo FAMS: activação do dispositivo com número de celular e código de activação",
          en: "FAMS field app: device activation with phone number and activation code",
        },
        width: 496,
        height: 880,
        device: "mobile",
      },
      {
        src: "/work/fams/03.webp",
        alt: {
          pt: "App FAMS, módulo de fábrica: lista de fardos produzidos com peso bruto e peso líquido",
          en: "FAMS app, factory module: list of produced bales with gross and net weight",
        },
        width: 790,
        height: 1710,
        device: "mobile",
      },
      {
        src: "/work/fams/04.webp",
        alt: {
          pt: "App FAMS, módulo de fábrica: notas de laboração com quantidades de semente e fibra por data",
          en: "FAMS app, factory module: processing notes with seed and fibre quantities by date",
        },
        width: 794,
        height: 1714,
        device: "mobile",
      },
      {
        src: "/work/fams/05.webp",
        alt: {
          pt: "App FAMS: lista de treinamentos agendados e realizados para produtores",
          en: "FAMS app: list of scheduled and completed farmer trainings",
        },
        width: 496,
        height: 880,
        device: "mobile",
      },
      {
        src: "/work/fams/06.webp",
        alt: {
          pt: "Página de entrada do FAMS Mahala, o plano gratuito multi-empresa, com registo de conta",
          en: "Landing page of FAMS Mahala, the free multi-tenant plan, with account sign-up",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
    ],
    videos: [
      {
        src: "/work/fams/video/fams-pt.mp4",
        poster: "/work/fams/video/fams-pt.webp",
        title: {
          pt: "O que é o FAMS: visão e benefícios, apresentado por Edson Famanda, gestor do sistema (português)",
          en: "What FAMS is: vision and benefits, presented by Edson Famanda, system manager (Portuguese)",
        },
        duration: "0:39",
      },
      {
        src: "/work/fams/video/fams-en.mp4",
        poster: "/work/fams/video/fams-en.webp",
        title: {
          pt: "O que é o FAMS: visão e benefícios, apresentado por Edson Famanda, gestor do sistema (inglês)",
          en: "What FAMS is: vision and benefits, presented by Edson Famanda, system manager",
        },
        duration: "0:40",
      },
      {
        src: "/work/fams/video/fams-demo-en.mp4",
        poster: "/work/fams/video/fams-demo-en.webp",
        title: {
          pt: "Vídeo de apresentação do FAMS (inglês): campo, sede, SMS, mapas e relatórios",
          en: "FAMS presentation video: field, headquarters, SMS, maps and reports",
        },
        duration: "2:01",
      },
      {
        src: "/work/fams/video/fams-edson-en.mp4",
        poster: "/work/fams/video/fams-edson-en.webp",
        title: {
          pt: "O Edson apresenta o FAMS (inglês)",
          en: "Edson presents FAMS",
        },
        duration: "0:58",
      },
    ],
    links: [
      { label: { pt: "Site do FAMS", en: "FAMS website" }, href: "https://fams.co.mz" },
      { label: { pt: "FAMS Mahala (plano gratuito)", en: "FAMS Mahala (free plan)" }, href: "https://mahala.fams.co.mz" },
      {
        label: { pt: "Guia Kulima ndi Malonda (NIRAS/GIZ, PDF) — refere o FAMS", en: "Kulima ndi Malonda guide (NIRAS/GIZ, PDF) — cites FAMS" },
        href: "https://www.niras.com/media/cchl2swj/kulima-ndi-malonda_reduce-size.pdf",
      },
      { label: { pt: "Página do FAMS na Equip Moçambique", en: "FAMS page at Equip Mozambique" }, href: "https://equipmoz.org/projects/tech-team/farmer-agent-management-system/" },
    ],
    caseStudy: [
      {
        heading: { pt: "Contexto: um sistema nascido num programa da GIZ", en: "Context: a system born in a GIZ programme" },
        paragraphs: [
          {
            pt: "Em 2020 a GIZ decidiu criar um software de gestão de produtores para as empresas parceiras dos programas ProEcon, ProMove e GIAE, depois de avaliar cerca de 20 empresas. O FAMS foi lançado oficialmente no fim de Fevereiro de 2021.",
            en: "In 2020 GIZ decided to build farmer-management software for the partner companies of its ProEcon, ProMove and GIAE programmes, after assessing around 20 companies. FAMS officially launched at the end of February 2021.",
          },
          {
            pt: "O problema era o mesmo em todas: cadastros de produtores, pesagens, créditos de insumos e pagamentos em papel ou Excel, feitos por técnicos em zonas sem rede, e relatórios difíceis de consolidar para financiadores.",
            en: "The problem was the same everywhere: farmer registries, weighings, input credit and payments on paper or in Excel, handled by field staff in areas without coverage, and reports that were hard to consolidate for funders.",
          },
          {
            pt: "Um guia de extensão agrária publicado pela NIRAS para a GIZ descreve o FAMS como uma plataforma desenvolvida pela ONG moçambicana Empoderando, com apoio da GIZ, para as empresas registarem e analisarem dados de formação de produtores, venda de insumos e compra da produção. No piloto Kulima ndi Malonda (2022–23), a Luteari usou o FAMS para recolher os dados de base e as notas dos técnicos depois de cada sessão de formação.",
            en: "An agricultural extension guide published by NIRAS for GIZ describes FAMS as a platform developed by the Mozambican NGO Empoderando, with GIZ support, for companies to record and analyse data on farmer training, input sales and produce purchases. In the Kulima ndi Malonda pilot (2022–23), Luteari used FAMS to collect baseline data and technicians' notes after each training session.",
          },
          {
            pt: "O Edson trabalha no backend desde Maio de 2021 e é, desde então, o responsável técnico do produto: código, revisão das contribuições da equipa, decisões de arquitectura e deploy.",
            en: "Edson has worked on the backend since May 2021 and has been the product's technical lead ever since: code, review of the team's contributions, architecture decisions and deployment.",
          },
        ],
      },
      {
        heading: { pt: "Arquitectura: backend Laravel e API para a app de campo", en: "Architecture: Laravel backend and an API for the field app" },
        paragraphs: [
          {
            pt: "O FAMS tem duas peças. O backend Laravel (web) é o sistema central usado nos escritórios e fábricas. A app Android, feita em Ionic, Angular e Capacitor, é usada pelos técnicos no terreno. A app móvel e uma versão de secretária em Electron foram escritas por colegas da equipa; a parte do Edson é o servidor e a API que elas consomem.",
            en: "FAMS has two parts. The Laravel web backend is the central system used in offices and factories. The Android app, built with Ionic, Angular and Capacitor, is used by field staff. The mobile app and an Electron desktop wrapper were written by teammates; Edson's part is the server and the API they consume.",
          },
          {
            pt: "A app guarda tudo localmente e envia quando volta a rede: produtores, inquéritos, treinos, compras, stock e pagamentos. Do lado do servidor, a API v1 usa tokens Sanctum, limita tentativas de login e OTP e regista a última sincronização de cada dispositivo. O Edson é autor da maioria dos commits em routes/api.php e nos controladores da API.",
            en: "The app stores everything locally and sends it when the network returns: farmers, surveys, trainings, purchases, stock and payments. On the server, the v1 API uses Sanctum tokens, rate-limits login and OTP, and records each device's last sync. Edson wrote most of the commits in routes/api.php and in the API controllers.",
          },
          {
            pt: "O modelo de dados cresceu para 220 migrations e 88 modelos, com 18 exportações PDF e Excel (livro de compras, rastreabilidade, créditos) e auditoria em 83 modelos.",
            en: "The data model grew to 220 migrations and 88 models, with 18 PDF and Excel exports (purchase ledger, traceability, credit) and auditing on 83 models.",
          },
        ],
      },
      {
        heading: { pt: "Plugins: do crédito de insumos à rastreabilidade do mel", en: "Plugins: from input credit to honey traceability" },
        paragraphs: [
          {
            pt: "Cada cliente tem uma cadeia de valor diferente, por isso o núcleo (produtores, agentes, campos, inquéritos) é comum e o resto são plugins: Stock, Compras, Insumos, Fábrica, ePayment com M-Pesa B2C em lote, SMS e visitas. A terminologia também muda por cliente, através de ficheiros de tradução sobrepostos.",
            en: "Every client has a different value chain, so the core (farmers, agents, fields, surveys) is shared and the rest are plugins: Stock, Purchases, Inputs, Factory, ePayment with bulk M-Pesa B2C, SMS and visits. Terminology also changes per client, through layered translation files.",
          },
          {
            pt: "O plugin mais recente é a rastreabilidade do mel: fichas de enchimento, formatos de mel, stock de favo e de produto final, livro de compras e um relatório de produção em PDF assinado. Foi desenvolvido pelo Edson em 2026.",
            en: "The newest plugin is honey traceability: filling records, honey formats, comb and finished-product stock, a purchase ledger and a signed PDF production report. Edson built it in 2026.",
          },
        ],
      },
      {
        heading: { pt: "Engenharia de releases: changelog, CI/CD e testes", en: "Release engineering: changelog, CI/CD and tests" },
        paragraphs: [
          {
            pt: "Todas as versões ficam em changelog.json, em português e inglês: 99 versões do sistema web, de v10 (Abril de 2021) a v114 (Setembro de 2026), e 14 da app móvel. O mesmo ficheiro alimenta a página pública de changelog do site.",
            en: "Every version is recorded in changelog.json, in Portuguese and English: 99 web releases, from v10 (April 2021) to v114 (September 2026), and 14 mobile releases. The same file feeds the public changelog page on the website.",
          },
          {
            pt: "Os workflows do GitHub Actions são quase todos do Edson: main vai para testes, production para os servidores dos clientes, com modo de manutenção e migrations automáticas. O repositório tem 61 ficheiros de teste PHPUnit, e o Edson é o maior autor na pasta de testes.",
            en: "The GitHub Actions workflows are almost all Edson's: main goes to the test server, production to client servers, with maintenance mode and automatic migrations. The repository has 61 PHPUnit test files, and Edson is the largest author in the tests folder.",
          },
        ],
      },
      {
        heading: { pt: "De um servidor por cliente a SaaS multi-empresa", en: "From one server per client to multi-tenant SaaS" },
        paragraphs: [
          {
            pt: "Até 2026 cada cliente tinha uma instalação própria, o que tornava caro servir cooperativas e empresas pequenas. O FAMS Mahala junta várias empresas numa só base de dados, separadas por company_id, com um plano gratuito e caminho para planos pagos.",
            en: "Until 2026 each client had its own installation, which made small cooperatives and companies expensive to serve. FAMS Mahala puts many companies in one database, separated by company_id, with a free plan and a path to paid plans.",
          },
          {
            pt: "A base multi-empresa (um global scope Eloquent) foi escrita por um colega. O Edson levou o ramo de deploy até produção: roles Spatie por empresa, troca de Company::first() pela empresa do utilizador autenticado em controladores e exportações, limites do plano com testes, e o registo self-service de empresas.",
            en: "The multi-tenant base (an Eloquent global scope) was written by a colleague. Edson took the deploy branch to production: per-company Spatie roles, replacing Company::first() with the authenticated user's company in controllers and exports, plan limits with tests, and self-service company sign-up.",
          },
        ],
      },
      {
        heading: { pt: "Próximo passo (proposta): PWA offline-first", en: "What's next (proposal): an offline-first PWA" },
        paragraphs: [
          {
            pt: "A app móvel actual assenta em Angular 11 e Ionic 5, difíceis de manter. O Edson escreveu uma proposta de arquitectura para uma PWA em Next.js com IndexedDB, sincronização por cursor e outbox, eventos idempotentes e detecção de conflitos por versão.",
            en: "The current mobile app runs on Angular 11 and Ionic 5, which are hard to maintain. Edson wrote an architecture proposal for a Next.js PWA with IndexedDB, cursor-based pull and outbox push sync, idempotent events and version-based conflict detection.",
          },
          {
            pt: "É só uma proposta: três documentos de desenho e um esqueleto de monorepo, sem código de aplicação. O âmbito do MVP é produtores, agentes e compras no campo.",
            en: "It is only a proposal: three design documents and a monorepo skeleton, with no application code. The MVP scope is farmers, agents and field purchases.",
          },
        ],
      },
    ],
    sdgs: [
      {
        goal: 2,
        primary: true,
        contribution: {
          pt: "Cadastro e acompanhamento georreferenciado de pequenos produtores, monitoria da produção, distribuição de insumos rastreados e formações no terreno (metas 2.3 e 2.4).",
          en: "Georeferenced registration and follow-up of smallholders, production monitoring, tracked input distribution and on-site trainings (targets 2.3 and 2.4).",
        },
      },
      {
        goal: 8,
        primary: true,
        contribution: {
          pt: "Operações digitalizadas em cooperativas e agronegócios, com pesos e pagamentos exactos e transparentes, menos fraude e menos custos administrativos (8.2, 8.3, 8.10).",
          en: "Digitised operations in cooperatives and agribusinesses, with accurate and transparent weights and payments, less fraud and lower administrative costs (8.2, 8.3, 8.10).",
        },
      },
      {
        goal: 9,
        primary: true,
        contribution: {
          pt: "Aplicações web e móvel com operação offline, ligação entre produtores, pontos de recolha, armazéns e fábricas, e API para integração com outros sistemas (9.3, 9.4, 9.c).",
          en: "Web and mobile apps that work offline, linking farmers, collection points, warehouses and factories, plus an API for integration with other systems (9.3, 9.4, 9.c).",
        },
      },
      {
        goal: 12,
        primary: true,
        contribution: {
          pt: "Stock, movimentações e rastreabilidade do produtor à indústria, com dados auditáveis para certificações e redução de perdas ao longo da cadeia (12.3, 12.6).",
          en: "Stock, movements and traceability from farmer to factory, with auditable data for certifications and to cut losses along the chain (12.3, 12.6).",
        },
      },
      {
        goal: 1,
        contribution: {
          pt: "Rendimento e registos financeiros dos produtores guardados no sistema, com histórico de compras, créditos de insumos e pagamentos.",
          en: "Farmer income and financial records kept in the system, with a history of purchases, input credit and payments.",
        },
      },
      {
        goal: 5,
        contribution: {
          pt: "Dados desagregados por género, quando o cliente os recolhe; no painel de impacto do FAMS, cerca de metade dos produtores digitalizados são mulheres.",
          en: "Gender-disaggregated data where the client collects it; in the FAMS impact dashboard, about half of the farmers digitised are women.",
        },
      },
      {
        goal: 10,
        contribution: {
          pt: "Inclusão de produtores antes informais e operação offline em zonas sem rede, com sincronização planeada quando volta a ligação.",
          en: "Inclusion of previously informal farmers and offline operation in areas without coverage, with planned sync once the connection returns.",
        },
      },
      {
        goal: 16,
        contribution: {
          pt: "Pesagens, compras e pagamentos auditáveis, com utilizadores, funções e permissões por empresa e histórico completo para prestação de contas.",
          en: "Auditable weighings, purchases and payments, with per-company users, roles and permissions and a full history for accountability.",
        },
      },
      {
        goal: 13,
        contribution: {
          pt: "Contributo apenas habilitador — recolha de dados no terreno e comunicação por SMS. O FAMS ainda não tem funcionalidades climáticas próprias.",
          en: "An enabling contribution only — field data collection and SMS communication. FAMS has no climate features of its own yet.",
        },
      },
    ],
    featured: true,
    order: 1,
  },

  // ───────────────────────────────────────────── FAMS Mahala (SaaS)
  {
    slug: "fams-mahala",
    name: { pt: "FAMS Mahala – plano gratuito multi-empresa", en: "FAMS Mahala – free multi-tenant tier" },
    tagline: {
      pt: "O FAMS como SaaS: registo self-service, dados isolados por empresa e limites por plano.",
      en: "FAMS as SaaS: self-service sign-up, per-company data isolation and plan limits.",
    },
    period: "2026",
    status: "production",
    categories: ["saas", "agritech"],
    tech: ["Laravel", "PHP", "MySQL", "GitHub Actions"],
    role: {
      pt: "Programador backend: roles por empresa, isolamento de dados, limites do plano, registo e deploy",
      en: "Backend developer: per-company roles, data isolation, plan limits, sign-up and deploy",
    },
    authorship: "contributor",
    problem: {
      pt: "Cada cliente FAMS precisava de um servidor e de uma instalação próprios. Para cooperativas e pequenas empresas isso era caro demais, e não havia forma de experimentar o sistema sem um projecto de implementação.",
      en: "Every FAMS client needed its own server and installation. For cooperatives and small companies that was too expensive, and there was no way to try the system without an implementation project.",
    },
    solution: {
      pt: "Uma única instalação partilhada, com cada empresa isolada por company_id e um plano gratuito com limites. As empresas registam-se sozinhas num formulário de dois passos. Quando crescem, há um caminho para exportar a empresa para uma instalação dedicada.",
      en: "A single shared installation, with each company isolated by company_id and a free plan with limits. Companies sign themselves up through a two-step form. When they grow, there is a path to export the company to a dedicated installation.",
    },
    decisions: [
      {
        title: { pt: "Esquema partilhado com company_id", en: "Shared schema with company_id" },
        body: {
          pt: "Em vez de uma base de dados por empresa, todas partilham tabelas com company_id e um global scope Eloquent (escrito por um colega) filtra as queries. Uma só migração serve todos os tenants.",
          en: "Instead of one database per company, all share tables with company_id, and an Eloquent global scope (written by a colleague) filters the queries. One migration serves every tenant.",
        },
      },
      {
        title: { pt: "Roles Spatie por empresa", en: "Per-company Spatie roles" },
        body: {
          pt: "O Edson estendeu o modelo Role do Spatie com company_id, para que cada empresa defina os seus próprios supervisores e técnicos sem ver os papéis das outras.",
          en: "Edson extended Spatie's Role model with company_id, so each company defines its own supervisors and technicians without seeing other companies' roles.",
        },
      },
      {
        title: { pt: "Limites do plano no servidor", en: "Plan limits enforced on the server" },
        body: {
          pt: "Um trait EnforcesPlanLimits e um PlanLimitService bloqueiam a criação de membros, agentes, campos e compras acima do plano, com HTTP 422 e mensagem traduzida. O serviço tem testes unitários.",
          en: "An EnforcesPlanLimits trait and a PlanLimitService block creating members, agents, fields and purchases beyond the plan, returning HTTP 422 with a translated message. The service has unit tests.",
        },
      },
      {
        title: { pt: "Retirar os atalhos de instalação única", en: "Removing single-install shortcuts" },
        body: {
          pt: "O código antigo assumia uma empresa por servidor (Company::first()). O Edson trocou essas chamadas pela empresa do utilizador autenticado em controladores, exportações e providers.",
          en: "The old code assumed one company per server (Company::first()). Edson replaced those calls with the authenticated user's company in controllers, exports and providers.",
        },
      },
    ],
    results: [
      {
        value: "500",
        label: { pt: "produtores no plano gratuito (até 2 utilizadores, 0 MZN)", en: "farmers on the free plan (up to 2 users, 0 MZN)" },
        source: { pt: "página pública mahala.fams.co.mz", en: "public page mahala.fams.co.mz" },
        url: "https://mahala.fams.co.mz",
      },
      {
        value: "24",
        label: { pt: "modelos com company_id", en: "models scoped by company_id" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
    ],
    learnings: {
      pt: "Passar de uma instalação por cliente para multi-empresa é sobretudo caçar pressupostos escondidos: cada Company::first() ou config de empresa era um sítio onde os dados de uma empresa podiam aparecer noutra.",
      en: "Moving from one install per client to multi-tenant is mostly hunting hidden assumptions: every Company::first() or company config value was a place where one company's data could leak into another's.",
    },
    sdgs: [
      {
        goal: 2,
        primary: true,
        contribution: {
          pt: "O plano gratuito leva o cadastro e o acompanhamento de pequenos produtores a cooperativas e pequenas empresas que não tinham orçamento para um servidor próprio.",
          en: "The free plan brings smallholder registration and follow-up to cooperatives and small companies that could not afford their own server.",
        },
      },
      {
        goal: 8,
        primary: true,
        contribution: {
          pt: "Empresas registam-se sozinhas em minutos e só pagam quando crescem, baixando o custo de digitalizar a operação e os pagamentos.",
          en: "Companies sign up on their own within minutes and only pay when they grow, lowering the cost of digitising operations and payments.",
        },
      },
      {
        goal: 9,
        contribution: {
          pt: "Uma só instalação multi-empresa partilha a mesma infra-estrutura digital entre muitas organizações, em vez de um servidor por cliente.",
          en: "A single multi-tenant installation shares one digital infrastructure across many organisations, instead of a server per client.",
        },
      },
    ],
    images: [
      {
        src: "/work/fams-mahala/01.webp",
        alt: {
          pt: "Página de entrada do FAMS Mahala com o slogan 'Do papel aos dados' e os limites do plano gratuito",
          en: "FAMS Mahala landing page with the 'From paper to data' headline and the free plan limits",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/fams-mahala/02.webp",
        alt: {
          pt: "Página de entrada do FAMS Mahala em telemóvel, com botões de criar conta e entrar",
          en: "FAMS Mahala landing page on a phone, with sign-up and sign-in buttons",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
    ],
    links: [
      { label: { pt: "FAMS Mahala", en: "FAMS Mahala" }, href: "https://mahala.fams.co.mz" },
      { label: { pt: "Página do Mahala no site", en: "Mahala page on the website" }, href: "https://fams.co.mz/mahala.html" },
    ],
    order: 11,
  },

  // ───────────────────────────────────────────── FAMS implementations
  {
    slug: "fams-implementations",
    name: { pt: "Implementações do FAMS em clientes", en: "FAMS client implementations" },
    tagline: {
      pt: "Configuração, importação de dados, formação no terreno e funcionalidades à medida para agronegócios como Thandizana, Moz Agri, DREAM Agro e Green Agro — com a OLIMAX, a MHC, a Sociedade de Mutuali e a Moz Agri em páginas próprias.",
      en: "Configuration, data import, on-site training and custom features for agribusinesses such as Thandizana, Moz Agri, DREAM Agro and Green Agro — with OLIMAX, MHC, Sociedade de Mutuali and Moz Agri on their own pages.",
    },
    period: "2024–2026",
    status: "production",
    categories: ["agritech"],
    tech: [],
    role: {
      pt: "Líder técnico de implementação e formador",
      en: "Technical implementation lead and trainer",
    },
    authorship: "consulting",
    partners: ["NIRAS", "GIZ"],
    problem: {
      pt: "Um sistema só serve se a empresa o usa. Cada cliente chega com listas de produtores em Excel, termos próprios e uma cadeia de valor diferente, e os técnicos de campo precisam de aprender a app no terreno.",
      en: "A system only helps if the company uses it. Every client arrives with farmer lists in Excel, its own terminology and a different value chain, and field staff need to learn the app on the ground.",
    },
    solution: {
      pt: "Missões de implementação com o mesmo roteiro: estruturar os dados para importação, configurar áreas, grupos, comunidades e formulários, activar os plugins necessários, formar utilizadores de escritório e de campo e validar o sistema em operação real. Onde o cliente precisou, o Edson desenvolveu também funcionalidades no FAMS.",
      en: "Implementation missions follow the same routine: structure the data for import, configure areas, groups, communities and forms, enable the needed plugins, train office and field users, and validate the system in real operation. Where a client needed it, Edson also built features in FAMS.",
    },
    decisions: [
      {
        title: { pt: "Thandizana: reembolsos e distribuição de dividendos", en: "Thandizana: repayments and dividend distribution" },
        body: {
          pt: "A Thandizana (Manica) dá crédito de insumos aos produtores e paga um bónus de comercialização. Em sessões semanais com o cliente, foram validadas em conjunto as regras — um produtor só recebe se ninguém do seu grupo estiver em dívida; o reembolso é a quantidade levada vezes o valor da campanha; o bónus depende dos quilos vendidos. O módulo de Reembolsos e Dividendos foi concluído e a primeira parte já está em uso.",
          en: "Thandizana (Manica) gives farmers input credit and pays a marketing bonus. In weekly sessions with the client the rules were validated together — a farmer is only paid if nobody in their group is in default; the repayment is the quantity taken times the campaign value; the bonus depends on kilos sold. The Repayments and Dividends module was completed and its first part is already in use.",
        },
      },
      {
        title: { pt: "Green Agro: alerta de duplicados na criação de produtores", en: "Green Agro: duplicate warning when creating farmers" },
        body: {
          pt: "O registo de produtores exige foto com localização GPS, como prova da visita, e as compras registam a humidade do milho. Na missão de Julho de 2026 foram desactivados cerca de 150 registos duplicados; em vez de limpar à mão de cada vez, o FAMS passou a avisar de possíveis duplicados no momento em que um produtor é criado.",
          en: "Farmer registration requires a GPS-tagged photo as proof of visit, and purchases record the maize moisture level. The July 2026 mission deactivated around 150 duplicate records; rather than cleaning by hand each time, FAMS now warns about likely duplicates at the moment a farmer is created.",
        },
      },
      {
        title: { pt: "Moz Agri: configurar para a operação real", en: "Moz Agri: configuring for the real operation" },
        body: {
          pt: "Cinco dias em Manica (26–30 de Janeiro de 2026) de configuração e formação, com validação no escritório, no campo e na fábrica. Depois, o registo de produtos foi alargado a gado bovino e caprino (macho e fêmea), porque o cliente também compra animais.",
          en: "Five days in Manica (26–30 January 2026) of configuration and training, with validation in the office, the field and the factory. Later the product register was extended to cattle and goats (male and female), because the client also buys livestock.",
        },
      },
      {
        title: { pt: "DREAM Agro: o ciclo completo antes de sair da formação", en: "DREAM Agro: the full cycle before leaving training" },
        body: {
          pt: "No Niassa, a formação terminou com uma simulação de ponta a ponta — registo do produtor, presença na formação, inquérito de visita e compra — e com a plotagem GPS de uma área de produção real, sincronizada com o servidor. Em Julho de 2026 a equipa já fazia sozinha o ciclo criar–editar–fotografar–sincronizar.",
          en: "In Niassa, training ended with an end-to-end simulation — farmer registration, training attendance, visit survey and purchase — and GPS plotting of a real production area, synced to the server. By July 2026 the team was running the create–edit–photograph–sync cycle on its own.",
        },
      },
    ],
    results: [
      {
        value: "6 329",
        label: { pt: "produtores da Thandizana no FAMS — eram 2 937 em Fev 2026", en: "Thandizana farmers in FAMS — up from 2,937 in Feb 2026" },
        source: { pt: "Relatório técnico geral do FAMS para a NIRAS (Out 2025 – Jul 2026), dados dos painéis a 10 Set 2026", en: "FAMS general technical report to NIRAS (Oct 2025 – Jul 2026), dashboard data as of 10 Sep 2026" },
      },
      {
        value: "4 780",
        label: { pt: "produtores da Moz Agri no FAMS — eram 72 em Jan 2026", en: "Moz Agri farmers in FAMS — up from 72 in Jan 2026" },
        source: { pt: "Relatório técnico geral do FAMS para a NIRAS (Out 2025 – Jul 2026), dados dos painéis a 10 Set 2026", en: "FAMS general technical report to NIRAS (Oct 2025 – Jul 2026), dashboard data as of 10 Sep 2026" },
      },
      {
        value: "1 532",
        label: { pt: "produtores da DREAM Agro no FAMS — eram 1 370 em Fev 2026", en: "DREAM Agro farmers in FAMS — up from 1,370 in Feb 2026" },
        source: { pt: "ficha de processo FAMS da DREAM Agro, painéis a 10 Set 2026", en: "FAMS process overview for DREAM Agro, dashboards as of 10 Sep 2026" },
      },
      {
        value: "~150",
        label: { pt: "registos duplicados corrigidos na Green Agro", en: "duplicate records fixed at Green Agro" },
        source: { pt: "Relatório técnico geral do FAMS para a NIRAS (Out 2025 – Jul 2026), dados dos painéis a 10 Set 2026", en: "FAMS general technical report to NIRAS (Oct 2025 – Jul 2026), dashboard data as of 10 Sep 2026" },
      },
    ],
    learnings: {
      pt: "Instalar não é adoptar. Numa missão de seguimento, de cerca de 25 agentes, 11 usavam a app no dispositivo e só 1 sincronizava com regularidade: o problema não era técnico, era de rotina e supervisão. A resposta foi de produto e de operação ao mesmo tempo — um painel com a última sincronização de cada agente, metas de uso, janelas de sincronização planeadas e partilha de hotspot no campo.",
      en: "Installing is not adopting. On one follow-up mission, of about 25 agents, 11 used the app on their device and only 1 synced regularly: the problem was not technical but routine and supervision. The answer was both product and operations — a dashboard with each agent's last sync, usage targets, planned sync windows and hotspot sharing in the field.",
    },
    sdgs: [
      {
        goal: 2,
        primary: true,
        contribution: {
          pt: "Cada implementação passa os produtores de listas em papel e Excel para registos digitais e georreferenciados, com formações, inquéritos e compras que a empresa e os financiadores conseguem acompanhar.",
          en: "Each rollout moves farmers from paper and Excel lists into georeferenced digital records, with trainings, surveys and purchases the company and its funders can follow.",
        },
      },
      {
        goal: 8,
        primary: true,
        contribution: {
          pt: "Configuração, migração de dados e formação no terreno profissionalizam a operação das empresas e dão mais previsibilidade aos créditos e pagamentos dos produtores.",
          en: "Configuration, data migration and on-site training professionalise the companies' operations and make farmer credit and payments more predictable.",
        },
      },
      {
        goal: 10,
        contribution: {
          pt: "As missões chegam a zonas com pouca rede — em Niassa, Manica e Zambézia — onde o registo offline e a sincronização por janelas planeadas são a única forma de os dados existirem.",
          en: "The missions reach areas with poor coverage — in Niassa, Manica and Zambézia — where offline capture and planned sync windows are the only way the data can exist at all.",
        },
      },
    ],
    images: [],
    links: [],
    order: 9,
  },

  // ───────────────────────────────────────────── MHC (Eco-Micaia)
  {
    slug: "mhc-honey-traceability",
    name: { pt: "MHC (Eco-Micaia) — mel rastreado do apicultor à garrafa", en: "MHC (Eco-Micaia) — honey traced from beekeeper to bottle" },
    tagline: {
      pt: "Cada balde de mel ligado ao apicultor no momento da compra e seguido pela filtração, prensagem e classificação por cor até ao produto engarrafado.",
      en: "Every bucket of honey linked to its beekeeper at the moment of purchase and followed through filtering, pressing and colour grading to the bottled product.",
    },
    period: "2026",
    status: "development",
    categories: ["agritech", "offline-first"],
    tech: ["Laravel", "PHP", "MySQL", "Ionic", "Angular", "Capacitor"],
    role: {
      pt: "Líder técnico da implementação e do desenvolvimento do plugin do mel, com a equipa da Empoderando Moçambique",
      en: "Technical lead for the rollout and the honey plugin development, with the Empoderando Moçambique team",
    },
    authorship: "lead",
    client: "Mozambique Honey Company (Eco-Micaia)",
    partners: ["NIRAS (VaMoz Competir)"],
    problem: {
      pt: "A MHC compra mel bruto a apicultores na província de Manica, processa-o na fábrica de Chimoio e vende-o engarrafado. Com o registo agregado, um problema de qualidade no produto final não dizia de que balde — nem de que apicultor — vinha.",
      en: "MHC buys raw honey from beekeepers in Manica province, processes it at its Chimoio factory and sells it bottled. With aggregate records, a quality problem in the final product could not be traced to a bucket — or a beekeeper.",
    },
    solution: {
      pt: "Entre 21 e 24 de Setembro de 2026, em Chimoio, o FAMS foi reconfigurado de raiz para a MHC, reaproveitando o plugin do mel com código de barras. Juntámos a equipa de campo e a da fábrica numa formação por módulos, mapeámos o fluxo completo em nove etapas — do apicultor à venda — e testámos no campo a ligação entre o código do balde e o apicultor. As falhas de processo encontradas num dia foram resolvidas no próprio dia e viraram o teste de campo do dia seguinte.",
      en: "Between 21 and 24 September 2026, in Chimoio, FAMS was reconfigured from scratch for MHC, reusing the barcode-based honey plugin. We brought the field and factory teams into module-based training, mapped the full flow in nine stages — from beekeeper to sale — and field-tested the link between bucket code and beekeeper. Process gaps found one day were fixed the same day and became the next day's field test.",
    },
    decisions: [
      {
        title: { pt: "Ligar o balde ao apicultor no acto da compra", en: "Linking the bucket to the beekeeper at purchase" },
        body: {
          pt: "O código do balde fica associado ao produtor no momento da compra e acompanha o balde até à fábrica, para identificar problemas de qualidade por balde e não só no produto final.",
          en: "The bucket code is tied to the producer at the moment of purchase and follows the bucket into the factory, so quality problems can be traced per bucket rather than only in the final product.",
        },
      },
      {
        title: { pt: "Confirmação de peso em vez de guia de transporte", en: "Weight confirmation instead of a waybill" },
        body: {
          pt: "Em vez de emitir guias de transporte, o rastreio passou a assentar na confirmação do peso de cada balde. Simplifica o trabalho no campo e elimina uma licença anual.",
          en: "Instead of issuing waybills, tracking now relies on confirming each bucket's weight. It simplifies field work and removes an annual licence.",
        },
      },
      {
        title: { pt: "Lotes de muitos-para-um na fábrica", en: "Many-to-one batches in the factory" },
        body: {
          pt: "Vários baldes alimentam um filtro e um lote prensado tem várias origens. O modelo cru → filtrado → prensado/misturado guarda essas origens, para que o mel classificado por cor (claro, médio, escuro) e a cera continuem rastreáveis até aos baldes iniciais.",
          en: "Several buckets feed one filter and a pressed batch has several sources. The raw → filtered → pressed/blended model keeps those sources, so colour-graded honey (light, medium, dark) and wax stay traceable back to the original buckets.",
        },
      },
      {
        title: { pt: "Colmeias como campos personalizados", en: "Hives as custom fields" },
        body: {
          pt: "O número de colmeias e os tipos (tradicional, KTB e Langstroth) ficam em campos personalizados do campo de produção, sem alterar o esquema da base de dados.",
          en: "The number of hives and their types (traditional, KTB and Langstroth) live in custom fields on the production field, without changing the database schema.",
        },
      },
      {
        title: { pt: "Pagamento e recibo para o apicultor", en: "Payment and receipt for the beekeeper" },
        body: {
          pt: "Cada compra regista o estado do pagamento (pendente → pago) e o método (e-Mola, M-Pesa ou dinheiro no campo), e o apicultor recebe um recibo impresso.",
          en: "Each purchase records payment status (pending → paid) and method (e-Mola, M-Pesa or cash in the field), and the beekeeper gets a printed receipt.",
        },
      },
    ],
    results: [
      {
        value: "9",
        label: { pt: "etapas mapeadas no FAMS, do apicultor à venda", en: "stages mapped in FAMS, from beekeeper to sale" },
        source: { pt: "relatório de implementação do FAMS na MHC (30 Set 2026)", en: "FAMS implementation report for MHC (30 Sep 2026)" },
      },
      {
        value: "21–24 Set 2026",
        label: { pt: "reconfiguração, formação e teste de campo em Chimoio", en: "reconfiguration, training and field test in Chimoio" },
        source: { pt: "relatório de implementação do FAMS na MHC (30 Set 2026)", en: "FAMS implementation report for MHC (30 Sep 2026)" },
      },
    ],
    learnings: {
      pt: "Desenhar o processo com o campo e a fábrica na mesma sala encurta tudo: as lacunas aparecem durante a formação, são resolvidas no mesmo dia e o teste de campo do dia seguinte já valida a solução.",
      en: "Designing the process with field and factory staff in the same room shortens everything: gaps surface during training, get fixed the same day, and the next day's field test already validates the fix.",
    },
    sdgs: [
      {
        goal: 2,
        primary: true,
        contribution: {
          pt: "Cada compra fica ligada ao apicultor, com peso confirmado e recibo impresso, para que o rendimento do mel chegue com pagamentos exactos e identificáveis.",
          en: "Every purchase is tied to its beekeeper, with confirmed weight and a printed receipt, so honey income arrives as accurate, identifiable payments.",
        },
      },
      {
        goal: 12,
        primary: true,
        contribution: {
          pt: "Rastreabilidade do balde à garrafa: humidade, açúcar (Brix), cor e lote permitem reduzir perdas e responder por cada fase do processamento, com relatórios de produção assinados.",
          en: "Traceability from bucket to bottle: moisture, sugar (Brix), colour and lot make it possible to cut losses and account for every processing stage, with signed production reports.",
        },
      },
      {
        goal: 15,
        contribution: {
          pt: "O centro de serviços de mel de Zomba fica na zona tampão do Parque Nacional de Chimanimani: dados auditáveis apoiam uma cadeia de mel compatível com a conservação.",
          en: "The Zomba honey service centre sits in the Chimanimani National Park buffer zone: auditable data supports a honey value chain compatible with conservation.",
        },
      },
    ],
    flow: [
      { pt: "Apicultor", en: "Beekeeper" },
      { pt: "Compra + código do balde", en: "Purchase + bucket code" },
      { pt: "Peso confirmado", en: "Weight confirmed" },
      { pt: "Filtração", en: "Filtering" },
      { pt: "Prensagem", en: "Pressing" },
      { pt: "Cor: claro · médio · escuro", en: "Colour: light · medium · dark" },
      { pt: "Garrafa", en: "Bottle" },
    ],
    images: [
      {
        src: "/work/mhc/01.webp",
        alt: {
          pt: "Placa do Centro de Serviços de Mel de Zomba, na zona tampão do Parque Nacional de Chimanimani, onde a MHC compra mel aos apicultores",
          en: "Sign at the Zomba Honey Service Centre, in the Chimanimani National Park buffer zone, where MHC buys honey from beekeepers",
        },
        width: 1600,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/mhc/02.webp",
        alt: {
          pt: "Dia de compra no campo: apicultores trazem os baldes de mel, que são pesados na balança e registados",
          en: "Field buying day: beekeepers bring their buckets of honey, which are weighed on the scale and recorded",
        },
        width: 1600,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/mhc/03.webp",
        alt: {
          pt: "Registo da compra junto à balança, com a lista em papel e o telemóvel lado a lado durante a transição para o FAMS",
          en: "Recording the purchase next to the scale, with the paper list and the phone side by side during the move to FAMS",
        },
        width: 1600,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/mhc/04.webp",
        alt: {
          pt: "Técnico de campo com o terminal móvel do FAMS a registar a compra junto aos baldes (crachá desfocado)",
          en: "Field technician using the FAMS handheld terminal to record a purchase next to the buckets (badge blurred)",
        },
        width: 1600,
        height: 753,
        device: "desktop",
      },
      {
        src: "/work/mhc/05.webp",
        alt: {
          pt: "Etiqueta do balde: data, lote, número, peso, área de origem, humidade, açúcar (Brix) e cor — os dados que o FAMS passa a ligar ao apicultor (nome do técnico desfocado)",
          en: "Bucket label: date, lot, number, weight, source area, moisture, sugar (Brix) and colour — the data FAMS now links to the beekeeper (technician's name blurred)",
        },
        width: 900,
        height: 1600,
        device: "mobile",
      },
      {
        src: "/work/mhc/06.webp",
        alt: {
          pt: "Baldes de mel bruto com código de barras no armazém de matéria-prima da fábrica de Chimoio, ao lado da balança e da prensa",
          en: "Raw honey buckets with barcodes in the raw-material store at the Chimoio factory, next to the scale and the press",
        },
        width: 900,
        height: 1600,
        device: "mobile",
      },
      {
        src: "/work/mhc/07.webp",
        alt: {
          pt: "Mel de lichia (edição especial) engarrafado na linha de enchimento da fábrica",
          en: "Lychee honey (special edition) bottled on the factory filling line",
        },
        width: 900,
        height: 1600,
        device: "mobile",
      },
      {
        src: "/work/mhc/08.webp",
        alt: {
          pt: "Embalagem de 500 g na linha de enchimento, com a equipa da fábrica ao fundo",
          en: "A 500 g bottle on the filling line, with the factory team in the background",
        },
        width: 900,
        height: 1600,
        device: "mobile",
      },
      {
        src: "/work/mhc/09.webp",
        alt: {
          pt: "Palete de mel embalado, pronto para expedição",
          en: "A pallet of packed honey, ready for shipping",
        },
        width: 900,
        height: 1600,
        device: "mobile",
      },
      {
        src: "/work/mhc/10.webp",
        alt: {
          pt: "Produtos finais da MHC: Mel de Chimanimani, Mozambican Honey e Mel do Miombo",
          en: "MHC's final products: Chimanimani Honey, Mozambican Honey and Miombo Honey",
        },
        width: 1600,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/mhc/11.webp",
        alt: {
          pt: "App FAMS configurada para a Mozambique Honey Company: Produtores, Formações, Inquéritos, Compras e Sincronização (nome do técnico desfocado)",
          en: "The FAMS app configured for Mozambique Honey Company: Farmers, Trainings, Surveys, Purchases and Sync (technician's name blurred)",
        },
        width: 720,
        height: 1600,
        device: "mobile",
      },
      {
        src: "/work/mhc/12.webp",
        alt: {
          pt: "Equipa do FAMS e equipa da MHC na fábrica de Chimoio, no fim da missão de implementação (Set 2026)",
          en: "The FAMS and MHC teams at the Chimoio factory at the end of the implementation mission (Sep 2026)",
        },
        width: 1600,
        height: 1200,
        device: "desktop",
      },
      {
        src: "/work/mhc/13.webp",
        alt: {
          pt: "Equipas do FAMS e da MHC na missão de implementação em Chimoio (Set 2026)",
          en: "The FAMS and MHC teams during the implementation mission in Chimoio (Sep 2026)",
        },
        width: 1600,
        height: 1200,
        device: "desktop",
      },
    ],
    links: [],
    featured: true,
    order: 4,
  },

  // ───────────────────────────────────────────── OLIMAX (ECOMOZ)
  {
    slug: "olimax-copra",
    name: { pt: "OLIMAX (ECOMOZ) — fábrica de óleo de copra", en: "OLIMAX (ECOMOZ) — copra oil factory" },
    tagline: {
      pt: "Da copra comprada no campo ao óleo embarcado: lotes, rendimento, acidez (FFA) e transporte rastreados no FAMS.",
      en: "From copra bought in the field to shipped oil: batches, yield, acidity (FFA) and transport traced in FAMS.",
    },
    period: "2024–2026",
    status: "production",
    categories: ["agritech"],
    tech: ["Laravel", "PHP", "MySQL"],
    role: {
      pt: "Líder técnico: levantamento, implementação e desenvolvimento do módulo de produção de copra",
      en: "Technical lead: requirements, rollout and development of the copra production module",
    },
    authorship: "lead",
    client: "OLIMAX (ECOMOZ)",
    problem: {
      pt: "A OLIMAX compra copra no campo e à porta da fábrica, transforma-a em óleo em várias linhas, guarda-o em depósitos e expede-o em camiões e contentores. Precisava de saber, por lote, de onde veio a copra, quanto óleo rendeu, com que qualidade e para onde foi.",
      en: "OLIMAX buys copra in the field and at the factory gate, turns it into oil on several lines, stores it in tanks and ships it in trucks and containers. It needed to know, per batch, where the copra came from, how much oil it yielded, at what quality and where it went.",
    },
    solution: {
      pt: "A OLIMAX foi o primeiro cliente a contratar o FAMS directamente, sem financiamento de doadores. O sistema foi implementado em 2024 para as compras de copra no campo e na fábrica, com a análise de qualidade do óleo (FFA), e continua em uso até hoje; em 2025 juntaram-se o registo do óleo produzido por linha, os depósitos e o transporte (camião, contentor, data de embarque e peso). Em Setembro de 2026 a produção de copra passou a módulo próprio, com rastreabilidade do lote redesenhada, relatórios da fábrica e um bloco no painel de controlo. As melhorias continuam nos relatórios de rastreabilidade e no painel de impacto com métricas.",
      en: "OLIMAX was the first client to contract FAMS directly, without donor funding. The system went live in 2024 for copra purchases in the field and at the factory, with oil quality analysis (FFA), and is still in use today; in 2025 came oil output per line, tanks and transport (truck, container, shipping date and weight). In September 2026 copra production became its own module, with redesigned batch traceability, factory reports and a dashboard block. Improvements continue on the traceability reports and the impact dashboard with metrics.",
    },
    decisions: [
      {
        title: { pt: "Rendimento esperado definido por empresa", en: "Expected yield set per company" },
        body: {
          pt: "O Super Admin define a faixa de rendimento esperado da fábrica (mínimo e máximo, em %). Sem ela vale a configuração da instalação e, sem esta, a mediana das produções com uma margem de 10 pontos. Os lotes fora da faixa são assinalados nos relatórios e no painel.",
          en: "The Super Admin sets the factory's expected yield range (minimum and maximum, in %). Without it the installation setting applies and, failing that, the median of past production with a 10-point margin. Batches outside the range are flagged in reports and on the dashboard.",
        },
      },
      {
        title: { pt: "Leituras de acidez impossíveis não entram nas médias", en: "Impossible acidity readings stay out of averages" },
        body: {
          pt: "Valores de FFA fora de 0–100% aparecem assinalados e são excluídos das médias, para que um erro de digitação não distorça a qualidade reportada.",
          en: "FFA values outside 0–100% are flagged and left out of averages, so a typo does not distort the reported quality.",
        },
      },
      {
        title: { pt: "Uma página para seguir o lote", en: "One page to follow a batch" },
        body: {
          pt: "Lê-se ou escreve-se o código do lote e aparecem o estado, a linha, as datas, a copra de entrada, o óleo, o rendimento e o FFA, o percurso com as áreas de origem e, em separadores, guias, compras, depósitos e medições — com impressão, Excel e PDF.",
          en: "Scan or type the batch code to see its status, line, dates, incoming copra, oil, yield and FFA, the path with its source areas and, in tabs, waybills, purchases, tanks and measurements — with print, Excel and PDF.",
        },
      },
      {
        title: { pt: "Produção de copra separada do stock partilhado", en: "Copra production apart from shared stock" },
        body: {
          pt: "A produção de copra passou a módulo próprio (controlo de produção, rastreabilidade e relatórios), separado da gestão de stock que outros clientes também usam.",
          en: "Copra production became its own module (production control, traceability and reports), separate from the stock management other clients also use.",
        },
      },
    ],
    results: [
      {
        value: "2024 →",
        label: {
          pt: "compras de copra registadas no FAMS — no campo e na fábrica — desde a implementação até hoje",
          en: "copra purchases recorded in FAMS — in the field and at the factory — from go-live until today",
        },
        source: { pt: "Edson (Out 2026)", en: "Edson (Oct 2026)" },
      },
      {
        value: "1.º",
        label: { pt: "cliente a contratar o FAMS directamente, sem doadores", en: "client to contract FAMS directly, without donors" },
        source: { pt: "CV do Edson; histórico de clientes do FAMS", en: "Edson's CV; FAMS client history" },
      },
    ],
    learnings: {
      pt: "Um cliente que paga directamente pede números em que pode confiar. Assinalar o que está fora do esperado — rendimento, acidez — valeu mais do que acrescentar gráficos.",
      en: "A client paying directly wants numbers it can trust. Flagging what falls outside expectations — yield, acidity — was worth more than adding charts.",
    },
    sdgs: [
      {
        goal: 2,
        primary: true,
        contribution: {
          pt: "As compras de copra ficam ligadas às áreas de origem e aos produtores que venderam, com registo de quanto entregou cada um, no campo e à porta da fábrica.",
          en: "Copra purchases are linked to their source areas and the farmers who sold, recording what each delivered, in the field and at the factory gate.",
        },
      },
      {
        goal: 12,
        primary: true,
        contribution: {
          pt: "Lote, rendimento, acidez (FFA) e embarque ficam rastreados do campo ao óleo expedido, para reduzir perdas e inconsistências entre linhas de produção e depósitos.",
          en: "Batch, yield, acidity (FFA) and shipping stay traced from the field to the shipped oil, cutting losses and inconsistencies across production lines and tanks.",
        },
      },
      {
        goal: 8,
        contribution: {
          pt: "Compras registadas em sistema desde 2024, no primeiro cliente a contratar o FAMS directamente, sem financiamento de doadores.",
          en: "Purchases recorded in the system since 2024, at the first client to contract FAMS directly, without donor funding.",
        },
      },
    ],
    flow: [
      { pt: "Copra no campo", en: "Copra in the field" },
      { pt: "Guia de transporte", en: "Waybill" },
      { pt: "Recepção na linha", en: "Line intake" },
      { pt: "Lote de produção", en: "Production batch" },
      { pt: "Óleo + FFA", en: "Oil + FFA" },
      { pt: "Depósito", en: "Tank" },
      { pt: "Embarque", en: "Shipment" },
    ],
    images: [
      {
        src: "/work/olimax/01.webp",
        alt: {
          pt: "Compra de copra no campo: sacos de copra junto a um camião da OLIMAX à beira da estrada",
          en: "Buying copra in the field: sacks of copra next to an OLIMAX truck by the road",
        },
        width: 1600,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/olimax/02.webp",
        alt: {
          pt: "Copra a secar em grelhas antes de seguir para a fábrica",
          en: "Copra drying on racks before going to the factory",
        },
        width: 1600,
        height: 1205,
        device: "desktop",
      },
      {
        src: "/work/olimax/03.webp",
        alt: {
          pt: "Exterior da fábrica de óleo da OLIMAX, com camiões no pátio",
          en: "Outside the OLIMAX oil factory, with trucks in the yard",
        },
        width: 1600,
        height: 1205,
        device: "desktop",
      },
      {
        src: "/work/olimax/04.webp",
        alt: {
          pt: "Sacos de copra recebidos no armazém da fábrica",
          en: "Sacks of copra received in the factory warehouse",
        },
        width: 1600,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/olimax/05.webp",
        alt: {
          pt: "Equipas do FAMS e da OLIMAX no armazém de copra",
          en: "The FAMS and OLIMAX teams in the copra warehouse",
        },
        width: 1600,
        height: 1200,
        device: "desktop",
      },
      {
        src: "/work/olimax/06.webp",
        alt: {
          pt: "Reunião de trabalho com a equipa da OLIMAX",
          en: "Working meeting with the OLIMAX team",
        },
        width: 1600,
        height: 1205,
        device: "desktop",
      },
      {
        src: "/work/olimax/07.webp",
        alt: {
          pt: "Equipa do FAMS com a equipa da OLIMAX no escritório da fábrica",
          en: "The FAMS team with the OLIMAX team at the factory office",
        },
        width: 1205,
        height: 1600,
        device: "mobile",
      },
      {
        src: "/work/olimax/08.webp",
        alt: {
          pt: "Preparação dos dispositivos: FAMS web no portátil e telemóveis novos para a equipa de campo",
          en: "Device setup: FAMS web on the laptop and new phones for the field team",
        },
        width: 1600,
        height: 1205,
        device: "desktop",
      },
      {
        src: "/work/olimax/09.webp",
        alt: {
          pt: "Página de rastreabilidade de um lote de produção no FAMS: linha, datas, copra de entrada, óleo produzido, rácio e separadores de compras no campo, compras na fábrica e FFA",
          en: "Batch traceability page in FAMS: line, dates, incoming copra, oil produced, ratio and tabs for field purchases, factory purchases and FFA",
        },
        width: 1600,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/olimax/10.webp",
        alt: {
          pt: "App FAMS com a marca OLIMAX em dois telemóveis da equipa (nomes desfocados)",
          en: "The OLIMAX-branded FAMS app on two team phones (names blurred)",
        },
        width: 900,
        height: 1600,
        device: "mobile",
      },
    ],
    links: [],
    featured: true,
    order: 5,
  },

  // ───────────────────────────────────────────── Sociedade de Mutuali (cotton)
  {
    slug: "mutuali-cotton",
    name: { pt: "Sociedade de Mutuali — fábrica de fibra de algodão", en: "Sociedade de Mutuali — cotton fibre factory" },
    tagline: {
      pt: "Do registo do produtor e dos insumos a crédito à fibra classificada: compra de algodão com abate de dívida, transporte, armazém e produção no FAMS.",
      en: "From farmer registration and inputs on credit to graded fibre: cotton purchases with debt deduction, transport, storage and production in FAMS.",
    },
    period: "2023",
    status: "archived",
    categories: ["agritech"],
    tech: ["Laravel", "PHP", "MySQL"],
    role: {
      pt: "Consultor e líder técnico do FAMS: implementação, configuração e formação",
      en: "Consultant and FAMS technical lead: rollout, configuration and training",
    },
    authorship: "consulting",
    client: "Sociedade de Mutuali",
    partners: ["GIZ – ProEcon", "COMO Consult"],
    problem: {
      pt: "A Sociedade de Mutuali trabalha com produtores de algodão a quem adianta insumos a crédito e de quem compra o algodão de primeira e de segunda qualidade, que depois transporta, armazena e transforma em fibra na fábrica. Precisava de ligar cada compra ao produtor e à dívida dele, e de seguir o algodão até à fibra classificada.",
      en: "Sociedade de Mutuali works with cotton farmers to whom it advances inputs on credit and from whom it buys first- and second-grade cotton, which it then transports, stores and processes into fibre at its factory. It needed to link each purchase to the farmer and their debt, and follow the cotton through to graded fibre.",
    },
    solution: {
      pt: "Em 2023, no âmbito do projecto ProEcon da GIZ com a COMO Consult, o FAMS foi implementado de ponta a ponta: registo de produtores, distribuição de insumos a crédito, compra de algodão de primeira e de segunda qualidade com abate da dívida, transporte, armazenamento, produção e classificação da qualidade do algodão.",
      en: "In 2023, within GIZ's ProEcon project with COMO Consult, FAMS was rolled out end to end: farmer registration, inputs distributed on credit, purchases of first- and second-grade cotton with debt deduction, transport, storage, production and cotton quality grading.",
    },
    decisions: [
      {
        title: { pt: "A dívida é abatida no acto da compra", en: "Debt is deducted at the moment of purchase" },
        body: {
          pt: "Os insumos entregues a crédito ficam ligados ao produtor; quando ele vende o algodão, o valor da dívida é abatido na própria compra, separando primeira e segunda qualidade.",
          en: "Inputs delivered on credit stay linked to the farmer; when they sell their cotton, the debt is deducted in the purchase itself, keeping first and second grade apart.",
        },
      },
    ],
    results: [
      {
        value: "2023",
        label: {
          pt: "implementação do campo à fábrica, no âmbito do ProEcon (GIZ) com a COMO Consult",
          en: "field-to-factory rollout, within GIZ's ProEcon with COMO Consult",
        },
        source: { pt: "Edson (Out 2026)", en: "Edson (Oct 2026)" },
      },
    ],
    sdgs: [
      {
        goal: 2,
        primary: true,
        contribution: {
          pt: "Os produtores de algodão ficam registados, com os insumos a crédito e as vendas de cada um ligadas ao seu perfil.",
          en: "Cotton farmers are registered, with each one's inputs on credit and sales linked to their profile.",
        },
      },
      {
        goal: 8,
        contribution: {
          pt: "O abate da dívida na compra torna transparente o que cada produtor recebeu e o que ainda devia pelos insumos.",
          en: "Deducting debt at purchase makes it transparent what each farmer received and what they still owed for inputs.",
        },
      },
      {
        goal: 12,
        contribution: {
          pt: "O algodão é seguido da compra ao armazém e à produção, com a qualidade classificada.",
          en: "Cotton is followed from purchase to storage and production, with its quality graded.",
        },
      },
    ],
    flow: [
      { pt: "Registo do produtor", en: "Farmer registration" },
      { pt: "Insumos a crédito", en: "Inputs on credit" },
      { pt: "Compra 1.ª / 2.ª + abate de dívida", en: "1st / 2nd grade purchase + debt deduction" },
      { pt: "Transporte", en: "Transport" },
      { pt: "Armazém", en: "Storage" },
      { pt: "Produção", en: "Production" },
      { pt: "Classificação da qualidade", en: "Quality grading" },
    ],
    images: [],
    links: [],
    order: 6,
  },

  // ───────────────────────────────────────────── Moz Agri (goats and meat)
  {
    slug: "moz-agri-fams-implementation",
    name: { pt: "Moz Agri — implementação do FAMS", en: "Moz Agri — FAMS implementation" },
    tagline: {
      pt: "Compra de caprinos e de carne no FAMS: produtores registados, animais por espécie e sexo, validação no campo, na fábrica e no matadouro.",
      en: "Goat and meat purchases in FAMS: registered farmers, animals by species and sex, validated in the field, the factory and the slaughterhouse.",
    },
    period: "2026",
    status: "production",
    categories: ["agritech"],
    tech: ["Laravel", "PHP", "MySQL"],
    role: {
      pt: "Implementador técnico e formador: configuração, formação no terreno e seguimento",
      en: "Technical implementer and trainer: configuration, on-site training and follow-up",
    },
    authorship: "consulting",
    client: "Moz Agri, LDA",
    partners: ["NIRAS (VaMoz Competir)"],
    problem: {
      pt: "A Moz Agri, em Chuala (Bárue, Manica), compra a pequenos produtores — incluindo cabritos e carne — e precisava de registar quem vende, o quê e quanto, ligando o campo à fábrica e ao matadouro.",
      en: "Moz Agri, in Chuala (Bárue, Manica), buys from smallholders — including goats and meat — and needed to record who sells what and how much, linking the field to the factory and the slaughterhouse.",
    },
    solution: {
      pt: "Missão presencial de cinco dias (26–30 de Janeiro de 2026) de configuração e formação, com validação em ambiente real: escritório, campo, fábrica e matadouro. Depois, o registo de produtos foi alargado a gado caprino e bovino (macho e fêmea), para que as compras de animais e de carne fiquem no FAMS. Seguiu-se uma missão de reforço e seguimento em Julho de 2026 e suporte por WhatsApp.",
      en: "A five-day on-site mission (26–30 January 2026) of configuration and training, validated in real settings: office, field, factory and slaughterhouse. Afterwards the product register was extended to goats and cattle (male and female), so that animal and meat purchases are recorded in FAMS. A reinforcement and follow-up mission followed in July 2026, with support over WhatsApp.",
    },
    decisions: [
      {
        title: { pt: "Animais registados por espécie e sexo", en: "Animals recorded by species and sex" },
        body: {
          pt: "Em vez de um produto genérico \"gado\", o registo de produtos distingue caprino e bovino, macho e fêmea, porque o preço e o destino do animal dependem disso.",
          en: "Instead of a generic \"livestock\" product, the product register tells goats from cattle, male from female, because the animal's price and destination depend on it.",
        },
      },
      {
        title: { pt: "Validar onde o trabalho acontece", en: "Validate where the work happens" },
        body: {
          pt: "A formação não ficou no escritório: o fluxo foi testado no campo, na fábrica e no matadouro, com os dados de treino limpos antes do arranque.",
          en: "Training did not stay in the office: the flow was tested in the field, the factory and the slaughterhouse, with training data cleaned before go-live.",
        },
      },
    ],
    results: [
      {
        value: "4 780",
        label: { pt: "produtores da Moz Agri no FAMS — eram 72 em Jan 2026", en: "Moz Agri farmers in FAMS — up from 72 in Jan 2026" },
        source: { pt: "Relatório técnico geral do FAMS para a NIRAS (Out 2025 – Jul 2026), dados dos painéis a 10 Set 2026", en: "FAMS general technical report to NIRAS (Oct 2025 – Jul 2026), dashboard data as of 10 Sep 2026" },
      },
      {
        value: "5",
        label: { pt: "dias de missão presencial em Manica, do escritório ao matadouro", en: "days of on-site mission in Manica, from office to slaughterhouse" },
        source: { pt: "Relatório de viagem (Jan 2026)", en: "Trip report (Jan 2026)" },
      },
    ],
    sdgs: [
      {
        goal: 2,
        primary: true,
        contribution: {
          pt: "Os produtores que vendem animais e carne à Moz Agri ficam registados, com o que cada um entregou.",
          en: "Farmers selling animals and meat to Moz Agri are registered, with what each one delivered.",
        },
      },
      {
        goal: 8,
        contribution: {
          pt: "Compras registadas em sistema dão transparência ao que cada produtor vende e recebe.",
          en: "Purchases recorded in the system make what each farmer sells and receives transparent.",
        },
      },
    ],
    flow: [
      { pt: "Registo do produtor", en: "Farmer registration" },
      { pt: "Compra de caprinos", en: "Goat purchase" },
      { pt: "Compra de carne", en: "Meat purchase" },
      { pt: "Fábrica e matadouro", en: "Factory and slaughterhouse" },
    ],
    images: [],
    links: [],
    order: 7,
  },

  // ───────────────────────────────────────────── VaMoz Competir
  {
    slug: "vamoz-competir",
    name: "VaMoz Competir – GIZ / NIRAS",
    tagline: {
      pt: "Componente de digitalização de um programa da GIZ: o FAMS implementado em cinco agronegócios em quatro províncias.",
      en: "Digitalisation component of a GIZ programme: FAMS rolled out to five agribusinesses across four provinces.",
    },
    period: "2025–2026",
    status: "production",
    categories: ["agritech"],
    tech: [],
    role: {
      pt: "Especialista Técnico Nacional em Digitalização (NIRAS/GIZ): implementação, formação e liderança técnica do FAMS",
      en: "National Short-Term Expert for Digitalisation (NIRAS/GIZ): FAMS implementation, training and technical lead",
    },
    authorship: "consulting",
    client: "GIZ",
    partners: ["NIRAS", "BMZ"],
    problem: {
      pt: "O VaMoz Competir (Fortalecimento da competitividade em cadeias de valor seleccionadas em Moçambique) é um projecto da GIZ encomendado pelo BMZ e cofinanciado pela UE, de Setembro de 2023 a Março de 2029, implementado pela NIRAS. Liga empresas-âncora do agronegócio a PME e pequenos produtores, e uma das suas linhas de trabalho apoia soluções digitais para a gestão da cadeia de abastecimento. Para ter crédito, compradores e relatórios fiáveis, as empresas apoiadas precisavam de dados digitais sobre os seus produtores e compras.",
      en: "VaMoz Competir (Strengthening competitiveness in selected value chains in Mozambique) is a GIZ project commissioned by BMZ and co-financed by the EU, running from September 2023 to March 2029 and implemented by NIRAS. It links lead agribusinesses with MSMEs and smallholder farmers, and one of its work streams supports digital solutions for supply chain management. To access credit, buyers and reliable reporting, the supported companies needed digital data on their farmers and purchases.",
    },
    solution: {
      pt: "Entre Outubro de 2025 e Julho de 2026 o Edson coordenou, pela Associação Empoderando Moçambique, a implementação do FAMS nas empresas apoiadas pela NIRAS, em duas fases: implementação inicial (Nov 2025 – Fev 2026) e missões de reforço e seguimento (Jul 2026). Liderou no terreno as missões na DREAM Agro (Lichinga/Lumbi), Green Agro Commodities (Nampula), PROIMAC (Maganja da Costa) e Moz Agri (Bárue); as restantes foram feitas por colegas da equipa. Em cada empresa: FAMS web e mobile, perfis de utilizador, módulos de Produtores, Formações, Inquéritos, Compras, Insumos e Crédito, e formação em registo de produtores com georreferenciação. A Companhia de Búzi não chegou a iniciar. A OLIMAX (copra) e a MHC (mel), também ligadas a este trabalho, têm estudos de caso próprios.",
      en: "Between October 2025 and July 2026 Edson coordinated, for Associação Empoderando Moçambique, the FAMS rollout to the companies supported by NIRAS, in two phases: initial implementation (Nov 2025 – Feb 2026) and reinforcement and follow-up missions (Jul 2026). He led the field missions at DREAM Agro (Lichinga/Lumbi), Green Agro Commodities (Nampula), PROIMAC (Maganja da Costa) and Moz Agri (Bárue); the others were run by team colleagues. At each company: FAMS web and mobile, user profiles, the Farmers, Trainings, Surveys, Purchases, Inputs and Credit modules, and training in farmer registration with georeferencing. Companhia de Búzi did not start. OLIMAX (copra) and MHC (honey), also linked to this work, have their own case studies.",
    },
    decisions: [
      {
        title: { pt: "Um roteiro igual para todas as empresas", en: "The same playbook for every company" },
        body: {
          pt: "Dados em Excel estruturados para importação, configuração, formação no local e validação com dados reais. Um processo repetível permitiu cobrir seis empresas em quatro províncias em poucos meses.",
          en: "Excel data structured for import, configuration, on-site training and validation with real data. A repeatable process made it possible to cover six companies in four provinces within a few months.",
        },
      },
      {
        title: { pt: "Medir a adopção, não só a instalação", en: "Measuring adoption, not just installation" },
        body: {
          pt: "A segunda fase foi desenhada para ver o uso real nas três empresas com mais operação. O que se encontrou — dados acumulados nos dispositivos, registos duplicados, pouca rede — virou backlog de produto: alerta de duplicados na criação de produtores, painel de sincronização por agente e melhorias ao módulo de Formações.",
          en: "The second phase was designed to check real usage at the three companies with the most activity. What it found — data piling up on devices, duplicate records, poor coverage — became product backlog: a duplicate warning when creating farmers, a per-agent sync dashboard and improvements to the Trainings module.",
        },
      },
      {
        title: { pt: "Integrar com a GIZ/Reframe sem API", en: "Integrating with GIZ/Reframe without an API" },
        body: {
          pt: "Para a análise de formações da GIZ/Reframe, acordou-se uma troca por modelo Excel em vez de uma ligação API: os técnicos lançam as listas de presença no FAMS e o sistema exporta o ficheiro consolidado. O FAMS ganhou uma matriz de presenças por produtor e por sessão, alinhada com o critério de conclusão (pelo menos 8 sessões).",
          en: "For GIZ/Reframe's training analysis, an Excel template exchange was agreed instead of an API connection: technicians enter attendance lists in FAMS and the system exports the consolidated file. FAMS gained an attendance matrix per farmer and per session, aligned with the completion criterion (at least 8 sessions).",
        },
      },
      {
        title: { pt: "Acesso directo para quem financia e monitoriza", en: "Direct access for funders and M&E" },
        body: {
          pt: "A NIRAS e a equipa de Monitoria e Avaliação da GIZ receberam acesso ao FAMS para ver produtores por empresa e listas de presença directamente, sem depender de extracções manuais.",
          en: "NIRAS and GIZ's Monitoring and Evaluation team were given FAMS access to see farmers per company and attendance lists directly, without relying on manual exports.",
        },
      },
    ],
    results: [
      {
        value: "5 + 1",
        label: { pt: "empresas implementadas, mais uma adiada", en: "companies implemented, plus one postponed" },
        source: { pt: "Relatório de Implementação do FAMS, NIRAS", en: "FAMS Implementation Report, NIRAS" },
      },
      {
        value: "4",
        label: { pt: "províncias: Niassa, Nampula, Zambézia e Manica", en: "provinces: Niassa, Nampula, Zambézia and Manica" },
        source: { pt: "Relatório de Implementação do FAMS, NIRAS", en: "FAMS Implementation Report, NIRAS" },
      },
      {
        value: "13 300+",
        label: { pt: "produtores registados no FAMS nas cinco empresas implementadas", en: "farmers registered in FAMS across the five companies where it was rolled out" },
        source: { pt: "Relatório técnico geral do FAMS para a NIRAS (Out 2025 – Jul 2026), dados dos painéis a 10 Set 2026", en: "FAMS general technical report to NIRAS (Oct 2025 – Jul 2026), dashboard data as of 10 Sep 2026" },
      },
      {
        value: "740",
        label: { pt: "registos de presença consolidados no FAMS nas 3 primeiras sessões (GIZ/Reframe)", en: "attendance records consolidated in FAMS for the first 3 sessions (GIZ/Reframe)" },
        source: { pt: "Relatório técnico geral do FAMS para a NIRAS (Out 2025 – Jul 2026), dados dos painéis a 10 Set 2026", en: "FAMS general technical report to NIRAS (Oct 2025 – Jul 2026), dashboard data as of 10 Sep 2026" },
      },
    ],
    sdgs: [
      {
        goal: 2,
        primary: true,
        contribution: {
          pt: "Cadastro georreferenciado de mais de 13 300 produtores nas cinco empresas implementadas, com formações, inquéritos e compras para acompanhar a produtividade e o rendimento dos pequenos produtores.",
          en: "Georeferenced registration of more than 13,300 farmers across the five companies where it was rolled out, with trainings, surveys and purchases to follow smallholder productivity and income.",
        },
      },
      {
        goal: 9,
        primary: true,
        contribution: {
          pt: "A linha de trabalho do programa de soluções digitais para a gestão da cadeia de abastecimento passou a assentar no FAMS: os dados dos produtores e das compras ficam acessíveis à NIRAS e à equipa de Monitoria e Avaliação da GIZ.",
          en: "The programme's work stream on digital solutions for supply chain management now rests on FAMS: farmer and purchase data are directly accessible to NIRAS and GIZ's Monitoring and Evaluation team.",
        },
      },
      {
        goal: 8,
        contribution: {
          pt: "Compras e créditos de insumos registados digitalmente nas empresas-âncora, para pagamentos mais exactos e relatórios fiáveis que sustentam o acesso a crédito e compradores.",
          en: "Purchases and input credit recorded digitally at the lead companies, for more accurate payments and reliable reports that support access to credit and buyers.",
        },
      },
    ],
    images: [],
    links: [
      { label: { pt: "Ficha do projecto VaMoz Competir (GIZ, PDF)", en: "VaMoz Competir project factsheet (GIZ, PDF)" }, href: "https://www.giz.de/sites/default/files/media/pkb-document/2025-12/giz2025-en-vamoz-competir-factsheet.pdf" },
      { label: { pt: "VaMoz Competir na NIRAS", en: "VaMoz Competir at NIRAS" }, href: "https://library.niras.com/capstat/agri/inclusive-resilient-agriculture-market-systems" },
    ],
    order: 8,
  },

  // ───────────────────────────────────────────── ProEcon
  {
    slug: "proecon",
    name: "ProEcon – GIZ / COMO Consult",
    tagline: {
      pt: "O programa da GIZ onde o FAMS nasceu: implementação em dez agronegócios de quatro cadeias de valor.",
      en: "The GIZ programme where FAMS was born: rollout to ten agribusinesses in four value chains.",
    },
    period: "2021–2023",
    status: "archived",
    categories: ["agritech"],
    tech: [],
    role: {
      pt: "Consultor, formador e líder técnico do FAMS",
      en: "Consultant, trainer and FAMS technical lead",
    },
    authorship: "consulting",
    client: "GIZ",
    partners: ["COMO Consult"],
    problem: {
      pt: "No programa de promoção de empresas locais da GIZ, em que a COMO Consult é parceira de implementação, cada parceria com uma empresa procura melhorar a competitividade e beneficiar os pequenos produtores que lhe vendem — e a COMO destaca a digitalização, como códigos de barras, para dar transparência e rastreabilidade às cadeias. As empresas parceiras do ProEcon trabalhavam com milhares de pequenos produtores, mas registavam tudo em papel. A GIZ decidiu em 2020 criar um software próprio para elas, depois de avaliar cerca de 20 empresas.",
      en: "In GIZ's local company promotion programme, with COMO Consult as implementing partner, each company partnership aims to improve competitiveness and benefit the smallholders who sell to it — and COMO highlights digital solutions, such as barcodes, for transparency and traceability in supply chains. ProEcon's partner companies worked with thousands of smallholders but recorded everything on paper. In 2020 GIZ decided to build its own software for them, after assessing around 20 companies.",
    },
    solution: {
      pt: "Desde o lançamento do FAMS em Fevereiro de 2021 até Novembro de 2023, o Edson levou o sistema a dez agronegócios: levantamento de requisitos, migração de dados, configuração, formação e suporte. Os pedidos destes clientes deram origem a módulos que ele próprio programou no backend — entre eles, em 2023, a fábrica de fibra de algodão da Sociedade de Mutuali.",
      en: "From the FAMS launch in February 2021 until November 2023, Edson took the system to ten agribusinesses: requirements, data migration, configuration, training and support. Requests from these clients became modules he built himself in the backend — among them, in 2023, the cotton fibre factory of Sociedade de Mutuali.",
    },
    decisions: [
      {
        title: { pt: "Implementar e programar na mesma equipa", en: "Implementing and coding in the same team" },
        body: {
          pt: "Como o implementador era também quem programava o backend, os pedidos do terreno passavam rapidamente para versões do produto, registadas no changelog.",
          en: "Because the implementer was also the person writing the backend, field requests quickly became product releases, recorded in the changelog.",
        },
      },
    ],
    results: [
      {
        value: "10",
        label: { pt: "agronegócios com o FAMS implementado", en: "agribusinesses with FAMS deployed" },
        source: { pt: "CV do Edson no formato GIZ", en: "Edson's CV in GIZ format" },
      },
      {
        value: "4",
        label: { pt: "cadeias de valor", en: "value chains" },
        source: { pt: "CV do Edson no formato GIZ", en: "Edson's CV in GIZ format" },
      },
      {
        value: "Fev 2021",
        label: { pt: "lançamento oficial do FAMS", en: "official FAMS launch" },
        source: { pt: "Nota da GIZ sobre o FAMS, 2023", en: "GIZ note on FAMS, 2023" },
      },
    ],
    sdgs: [
      {
        goal: 2,
        primary: true,
        contribution: {
          pt: "Dez agronegócios e quatro cadeias de valor passaram de registos em papel para o cadastro e acompanhamento digital dos pequenos produtores que lhes vendem.",
          en: "Ten agribusinesses in four value chains moved from paper records to digital registration and follow-up of the smallholders who sell to them.",
        },
      },
      {
        goal: 9,
        contribution: {
          pt: "O FAMS nasceu neste programa como infra-estrutura digital das empresas parceiras da GIZ, com rastreabilidade e códigos de barras para transparência na cadeia.",
          en: "FAMS was born in this programme as the digital infrastructure of GIZ's partner companies, with traceability and barcodes for transparency along the chain.",
        },
      },
    ],
    images: [],
    links: [
      {
        label: { pt: "COMO Consult — promoção de empresas locais em Moçambique e dos seus fornecedores", en: "COMO Consult — promoting local companies in Mozambique and their suppliers" },
        href: "https://como-consult.de/en/cases/promotionoflocalcompaniesinmozambiqueandtheirsuppliers/",
      },
    ],
    order: 12,
  },

  // ───────────────────────────────────────────── FAMS website
  {
    slug: "fams-website",
    name: { pt: "Site do FAMS", en: "FAMS website" },
    tagline: {
      pt: "Site comercial bilingue do FAMS, com planos, dispositivos, página do Mahala e changelog lido ao vivo da API.",
      en: "Bilingual FAMS marketing site, with plans, devices, a Mahala page and a changelog read live from the API.",
    },
    period: "2024–2026",
    status: "production",
    categories: ["agritech"],
    tech: ["HTML/CSS", "JavaScript", "Bootstrap", "PHP", "GitHub Actions"],
    role: {
      pt: "Maior contribuidor: redesenho, páginas PT/EN, SEO e deploy",
      en: "Main contributor: redesign, PT/EN pages, SEO and deploy",
    },
    authorship: "main",
    problem: {
      pt: "O FAMS precisava de uma montra para agronegócios — módulos, plugins, planos, dispositivos, newsletter e pedido de demonstração — separada da aplicação. Com o Mahala, precisava também de um caminho directo para o registo gratuito.",
      en: "FAMS needed a storefront for agribusinesses — modules, plugins, plans, devices, newsletter and demo requests — separate from the application. With Mahala, it also needed a direct path to free sign-up.",
    },
    solution: {
      pt: "Um site estático em HTML, CSS e JavaScript, com um pequeno backend PHP para o formulário de contacto. Em 2026 o Edson redesenhou as páginas em português e inglês, acrescentou a página do Mahala, meta tags e imagens Open Graph por idioma, e um workflow de deploy com regras de alojamento mais restritas.",
      en: "A static HTML, CSS and JavaScript site with a small PHP backend for the contact form. In 2026 Edson redesigned the Portuguese and English pages, added the Mahala page, per-language meta tags and Open Graph images, and a deploy workflow with stricter hosting rules.",
    },
    decisions: [
      {
        title: { pt: "Changelog lido da API da aplicação", en: "Changelog read from the application API" },
        body: {
          pt: "A página de changelog pede as versões à API do FAMS, com timeout de 8 s, validação do payload e um segundo servidor de reserva. O site nunca fica desactualizado face ao produto.",
          en: "The changelog page fetches releases from the FAMS API, with an 8 s timeout, payload validation and a fallback server. The site never falls behind the product.",
        },
      },
      {
        title: { pt: "Idiomas em árvores de ficheiros espelhadas", en: "Languages as mirrored file trees" },
        body: {
          pt: "Português na raiz e inglês em /en/, com as mesmas páginas. Sem build nem framework, qualquer pessoa da equipa consegue editar o texto.",
          en: "Portuguese at the root and English under /en/, with the same pages. With no build step or framework, anyone on the team can edit the copy.",
        },
      },
      {
        title: { pt: "Tema escuro sem piscar", en: "Dark theme without a flash" },
        body: {
          pt: "Um pequeno script no <head> aplica o tema guardado antes do primeiro paint.",
          en: "A small script in the <head> applies the saved theme before first paint.",
        },
      },
      {
        title: { pt: "Alojamento mais fechado", en: "Tighter hosting" },
        body: {
          pt: "O deploy bloqueia o acesso público a dotfiles e a vendor, recusa métodos HTTP desnecessários e acerta as permissões dos ficheiros.",
          en: "The deploy blocks public access to dotfiles and vendor, rejects unneeded HTTP methods and sets file permissions.",
        },
      },
    ],
    results: [
      {
        value: "2",
        label: { pt: "idiomas com páginas espelhadas (PT e EN)", en: "languages with mirrored pages (PT and EN)" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
      {
        value: "3",
        label: { pt: "edições da newsletter publicadas no site", en: "newsletter issues published on the site" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
    ],
    images: [
      {
        src: "/work/fams-website/01.webp",
        alt: {
          pt: "Página de dispositivos recomendados para o terreno, com filtros por pesagem e consumíveis",
          en: "Recommended field devices page, with filters for weighing and consumables",
        },
        width: 1440,
        height: 700,
        device: "desktop",
      },
      {
        src: "/work/fams-website/02.webp",
        alt: {
          pt: "Página de planos e preços do FAMS com o menu de navegação e o botão do FAMS Mahala",
          en: "FAMS plans and pricing page with the navigation menu and the FAMS Mahala button",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/fams-website/03.webp",
        alt: {
          pt: "Página de planos e preços do FAMS em telemóvel",
          en: "FAMS plans and pricing page on a phone",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
    ],
    links: [
      { label: { pt: "fams.co.mz", en: "fams.co.mz" }, href: "https://fams.co.mz" },
      { label: { pt: "Página do Mahala", en: "Mahala page" }, href: "https://fams.co.mz/mahala.html" },
    ],
    order: 13,
  },

  // ───────────────────────────────────────────── laravel-teams-logging
  {
    slug: "laravel-teams-logging",
    name: "laravel-teams-logging",
    tagline: {
      pt: "Fork mantido de um pacote Composer que envia os logs do Laravel para o Microsoft Teams, usado em produção pelo FAMS.",
      en: "Maintained fork of a Composer package that sends Laravel logs to Microsoft Teams, used in production by FAMS.",
    },
    period: "2022",
    status: "production",
    categories: ["reliability"],
    tech: ["PHP", "Laravel"],
    role: {
      pt: "Mantenedor do fork e publicação no Packagist",
      en: "Fork maintainer and Packagist publisher",
    },
    authorship: "contributor",
    problem: {
      pt: "A equipa do FAMS precisava de saber das excepções nos servidores dos clientes quando aconteciam, sem montar uma stack de observabilidade. O pacote original, de 2018, não servia a versão de Laravel que o FAMS usava.",
      en: "The FAMS team needed to know about exceptions on client servers as they happened, without running an observability stack. The original 2018 package did not support the Laravel version FAMS used.",
    },
    solution: {
      pt: "Em Novembro de 2022 o Edson fez fork do pacote de Sabar Tampubolon, mudou o namespace, corrigiu os tipos de retorno e o estilo dos cartões, refez os avatares por nível de log e publicou-o no Packagist. O FAMS usa-o como canal teams, ligado por uma flag de configuração.",
      en: "In November 2022 Edson forked Sabar Tampubolon's package, renamed the namespace, fixed return types and card styling, redid the per-level avatars and published it on Packagist. FAMS uses it as a teams channel, switched on by a config flag.",
    },
    decisions: [
      {
        title: { pt: "Canal Monolog personalizado", en: "Custom Monolog channel" },
        body: {
          pt: "Liga-se em config/logging.php com 'via' => LoggerChannel::class, sem mexer no código da aplicação.",
          en: "It plugs into config/logging.php with 'via' => LoggerChannel::class, without touching application code.",
        },
      },
      {
        title: { pt: "Cor e avatar por nível PSR-3", en: "Colour and avatar per PSR-3 level" },
        body: {
          pt: "Cada nível, de debug a emergency, tem cor e avatar próprios, para distinguir um aviso de uma falha no meio do chat.",
          en: "Each level, from debug to emergency, has its own colour and avatar, so a warning is easy to tell from a failure in the chat.",
        },
      },
      {
        title: { pt: "Activação por ambiente", en: "Enabled per environment" },
        body: {
          pt: "No FAMS o canal só entra na stack de logs quando a flag está ligada, para os servidores de teste não encherem o canal.",
          en: "In FAMS the channel only joins the log stack when the flag is on, so test servers don't flood the channel.",
        },
      },
    ],
    results: [
      {
        value: "113",
        label: { pt: "instalações no Packagist", en: "Packagist installs" },
        source: { pt: "packagist.org, consultado em 29/09/2026", en: "packagist.org, checked 29 Sep 2026" },
        url: "https://packagist.org/packages/edsonjorgef1/laravel-teams-logging",
      },
      {
        value: "FAMS",
        label: { pt: "usado em produção no backend", en: "used in production by the backend" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
    ],
    images: [
      {
        src: "/work/laravel-teams-logging/01.webp",
        alt: {
          pt: "Repositório laravel-teams-logging no GitHub, com a indicação de fork do projecto original",
          en: "laravel-teams-logging repository on GitHub, marked as a fork of the original project",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/laravel-teams-logging/02.webp",
        alt: {
          pt: "Página do pacote no Packagist com o comando composer require, dependências e estatísticas de instalação",
          en: "Package page on Packagist with the composer require command, dependencies and install statistics",
        },
        width: 1440,
        height: 790,
        device: "desktop",
      },
    ],
    links: [
      { label: { pt: "GitHub", en: "GitHub" }, href: "https://github.com/Edsonjorgef1/laravel-teams-logging" },
      { label: { pt: "Packagist", en: "Packagist" }, href: "https://packagist.org/packages/edsonjorgef1/laravel-teams-logging" },
    ],
    order: 14,
  },
];
