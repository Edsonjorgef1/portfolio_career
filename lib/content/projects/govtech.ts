import type { Project } from "@/types/content";

export const projects: Project[] = [
  // ───────────────────────── FUNAE MGQR (case study) ─────────────────────────
  {
    slug: "funae-mgqr",
    name: { pt: "FUNAE – MGQR (Mecanismo de Gestão de Queixas e Reclamações)", en: "FUNAE – MGQR (Grievance Redress Mechanism)" },
    tagline: {
      pt: "Plataforma onde cidadãos submetem queixas, reclamações e sugestões ao FUNAE, com encaminhamento automático para técnicos e painéis por perfil.",
      en: "Platform where citizens submit grievances, complaints and suggestions to FUNAE, with automatic routing to officers and role-based dashboards.",
    },
    period: "2025–2026",
    status: "archived",
    categories: ["govtech"],
    tech: ["Laravel", "PHP", "MySQL", "Vue", "Inertia.js", "Tailwind CSS"],
    role: {
      pt: "Programador full-stack e maior contribuidor da equipa (atribuição automática, notificações, login, perfis, frontend)",
      en: "Full-stack developer and largest contributor on the team (automatic assignment, notifications, login, roles, frontend)",
    },
    authorship: "main",
    client: "FUNAE – Fundo de Energia, FP",
    partners: ["TechSolutions", "Enabel"],
    problem: {
      pt: "Os projectos de energia do FUNAE financiados pela Enabel exigem um mecanismo formal de queixas e reclamações (GRM). Era preciso registar submissões identificadas ou anónimas, encaminhá-las para a equipa certa, controlar prazos e dar relatórios à direcção.",
      en: "FUNAE's Enabel-funded energy projects require a formal grievance redress mechanism (GRM). Submissions, identified or anonymous, had to be recorded, routed to the right team, tracked against deadlines and reported to management.",
    },
    solution: {
      pt: "Aplicação Laravel 12 + Inertia + Vue 3 desenvolvida por uma equipa da TechSolutions. Escrevi o serviço de atribuição automática, o serviço de notificações, o login multicanal, o perfil de Gestor Adjunto e grande parte dos painéis em Vue. Colegas fizeram o esqueleto inicial, os prazos legais e o pipeline de CI/CD.",
      en: "A Laravel 12 + Inertia + Vue 3 application built by a TechSolutions team. I wrote the automatic assignment service, the notification service, multichannel login, the Deputy Manager role and much of the Vue dashboards. Colleagues built the initial scaffold, the legal deadlines and the CI/CD pipeline.",
    },
    decisions: [
      {
        title: {
          pt: "Atribuição por capacidade, com recurso ao gestor",
          en: "Capacity-based assignment with a human fallback",
        },
        body: {
          pt: "Uma regra simples: só atribui a um técnico do mesmo projecto, disponível e abaixo de 50% da capacidade. Se ninguém cumpre, a submissão fica \"em análise\" para o gestor decidir, em vez de sobrecarregar alguém.",
          en: "A simple rule: assign only to an available officer on the same project who is below 50% of capacity. If nobody qualifies, the submission goes to \"under review\" for the manager to decide, instead of overloading someone.",
        },
      },
      {
        title: {
          pt: "Observer que nunca bloqueia a submissão",
          en: "An observer that never blocks the submission",
        },
        body: {
          pt: "Ao criar uma submissão, o observer regista o histórico, notifica e tenta a atribuição, cada passo isolado em try/catch. Uma falha de email ou de atribuição não impede o cidadão de submeter.",
          en: "When a submission is created, the observer logs history, notifies and attempts assignment, each step isolated in try/catch. An email or assignment failure never stops the citizen from submitting.",
        },
      },
      {
        title: {
          pt: "Máquina de estados explícita",
          en: "Explicit state machine",
        },
        body: {
          pt: "submetida → em análise → atribuída → em progresso → pendente de aprovação → resolvida/rejeitada/fechada. O técnico pede a conclusão e o gestor aprova ou devolve.",
          en: "submitted → under review → assigned → in progress → pending approval → resolved/rejected/closed. The officer requests closure and the manager approves or sends it back.",
        },
      },
      {
        title: {
          pt: "Notificações com registo e nova tentativa",
          en: "Notifications with a log and retries",
        },
        body: {
          pt: "Cada envio fica numa tabela própria; um comando agendado volta a tentar as notificações falhadas.",
          en: "Every send is stored in its own table; a scheduled command retries failed notifications.",
        },
      },
      {
        title: {
          pt: "Paginação no servidor testada com dados de carga",
          en: "Server-side pagination tested with load data",
        },
        body: {
          pt: "O painel do gestor passou a paginar no servidor, validado com um seeder de 500 utentes, 20 técnicos e 2 000 reclamações.",
          en: "The manager dashboard moved to server-side pagination, checked against a seeder with 500 citizens, 20 officers and 2,000 complaints.",
        },
      },
    ],
    results: [
      {
        value: "7",
        label: { pt: "papéis de acesso (Utente a Admin)", en: "access roles (Citizen to Admin)" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
      {
        value: "214",
        label: { pt: "componentes Vue na aplicação", en: "Vue components in the application" },
        source: { pt: "contagem de ficheiros em resources/js", en: "file count in resources/js" },
      },
      {
        value: "9",
        label: { pt: "tipos de email transaccional", en: "transactional email types" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
    ],
    learnings: {
      pt: "Numa equipa de nove programadores no mesmo repositório, issues numeradas e uma divisão clara de áreas valem mais do que qualquer ferramenta. E uma regra de atribuição simples, com saída para um humano, é mais fácil de explicar ao cliente do que um algoritmo sofisticado.",
      en: "With nine developers in one repository, numbered issues and clear ownership of areas matter more than any tool. And a simple assignment rule with a way out to a human is easier to explain to a client than a clever algorithm.",
    },
    images: [
      {
        src: "/work/funae-mgqr/01.webp",
        alt: {
          pt: "Ecrã de entrada do sistema de gestão de reclamações e sugestões do FUNAE",
          en: "Sign-in screen of FUNAE's grievance and suggestion management system",
        },
        width: 1600,
        height: 872,
        device: "desktop",
      },
      {
        src: "/work/funae-mgqr/02.webp",
        alt: {
          pt: "Formulário de nova submissão em três passos, com escolha entre modo identificado e anónimo",
          en: "Three-step new submission form with a choice between identified and anonymous mode",
        },
        width: 1452,
        height: 1266,
        device: "desktop",
      },
      {
        src: "/work/funae-mgqr/03.webp",
        alt: {
          pt: "Painel do gestor com totais em aberto, urgentes e submissões atribuídas (dados de teste)",
          en: "Manager dashboard with open and urgent totals and assigned submissions (test data)",
        },
        width: 1600,
        height: 871,
        device: "desktop",
      },
      {
        src: "/work/funae-mgqr/04.webp",
        alt: {
          pt: "Painel de administração com utilizadores, departamentos, projectos e estado do sistema",
          en: "Admin dashboard with users, departments, projects and system status",
        },
        width: 1600,
        height: 910,
        device: "desktop",
      },
      {
        src: "/work/funae-mgqr/05.webp",
        alt: {
          pt: "Painel do utente com contagem de reclamações, queixas e sugestões por estado",
          en: "Citizen dashboard counting complaints, grievances and suggestions by status",
        },
        width: 1600,
        height: 908,
        device: "desktop",
      },
    ],
    links: [
      {
        label: {
          pt: "Notícia TechSolutions: capacitação dos quadros do FUNAE",
          en: "TechSolutions news: FUNAE staff training",
        },
        href: "https://techsolutions.co.mz/techsolutions-capacita-quadros-do-funae-em-gestao-de-sistemas-e-plataformas-web/",
      },
    ],
    caseStudy: [
      {
        heading: { pt: "Contexto", en: "Context" },
        paragraphs: [
          {
            pt: "O FUNAE – Fundo de Energia executa projectos de electrificação financiados pela Enabel. O financiador exige um mecanismo de gestão de queixas e reclamações (GRM): qualquer pessoa afectada por um projecto tem de poder queixar-se, e a queixa tem de ter resposta dentro de prazos definidos.",
            en: "FUNAE – Fundo de Energia runs electrification projects funded by Enabel. The funder requires a grievance redress mechanism (GRM): anyone affected by a project must be able to complain, and the complaint must be answered within set deadlines.",
          },
          {
            pt: "A TechSolutions ganhou o desenvolvimento e formou uma equipa de nove programadores. Abri o repositório com a documentação, os milestones e as issues, e fui o programador com mais trabalho entregue entre Novembro de 2025 e Abril de 2026.",
            en: "TechSolutions won the development contract and put together a team of nine developers. I opened the repository with the documentation, milestones and issues, and was the developer who delivered the most work between November 2025 and April 2026.",
          },
        ],
      },
      {
        heading: { pt: "O percurso de uma reclamação", en: "The life of a complaint" },
        paragraphs: [
          {
            pt: "O cidadão escolhe se se identifica ou fica anónimo, descreve o caso e anexa evidências. O sistema gera uma referência pública no formato GRM-AAAA-XXXXXXXX para ele acompanhar o estado.",
            en: "The citizen chooses to be identified or anonymous, describes the case and attaches evidence. The system generates a public reference in the GRM-YYYY-XXXXXXXX format so they can track its status.",
          },
          {
            pt: "A partir daí a submissão passa por estados explícitos: em análise, atribuída, em progresso, pendente de aprovação e, por fim, resolvida, rejeitada ou fechada. O técnico não fecha sozinho: pede a conclusão e o gestor aprova ou devolve. Cada mudança fica no histórico da submissão.",
            en: "From there the submission moves through explicit states: under review, assigned, in progress, pending approval and finally resolved, rejected or closed. The officer cannot close it alone: they request closure and the manager approves or sends it back. Every change is kept in the submission's history.",
          },
        ],
      },
      {
        heading: { pt: "Atribuição automática: uma regra de capacidade", en: "Automatic assignment: a capacity rule" },
        paragraphs: [
          {
            pt: "Escrevi o serviço que decide quem trata cada submissão. Não é um algoritmo complexo, e isso foi intencional. Procura um técnico do mesmo projecto, disponível, cuja carga actual mais o peso da nova submissão caiba na capacidade e que esteja abaixo de 50% dela. Se houver, atribui dentro de uma transacção e dispara um evento para notificar.",
            en: "I wrote the service that decides who handles each submission. It is not a complex algorithm, on purpose. It looks for an available officer on the same project whose current workload plus the new submission's weight fits their capacity, and who is below 50% of it. If there is one, it assigns inside a transaction and fires an event to send notifications.",
          },
          {
            pt: "Se ninguém cumpre a regra, a submissão fica \"em análise\" e vai para o gestor. Preferimos uma decisão humana a encher a fila de quem já está ocupado. Dois comandos agendados completam o serviço: um tenta atribuir as submissões pendentes e outro reequilibra a carga.",
            en: "If nobody meets the rule, the submission stays \"under review\" and goes to the manager. We preferred a human decision to piling work on someone who is already busy. Two scheduled commands complete the service: one retries pending submissions and the other rebalances workload.",
          },
        ],
      },
      {
        heading: { pt: "Notificações e login multicanal", en: "Notifications and multichannel login" },
        paragraphs: [
          {
            pt: "O serviço de notificações envia emails ao técnico e ao gestor na atribuição e no pedido de conclusão, com nove modelos de email. Cada envio fica registado, e um comando volta a tentar os que falharam. A integração de SMS ficou por fazer.",
            en: "The notification service emails the officer and the manager on assignment and on closure requests, using nine email templates. Every send is logged, and a command retries the failed ones. SMS integration was left for later.",
          },
          {
            pt: "Muitos utentes não usam email. O login aceita email, telefone ou nome de utilizador, detecta qual foi escrito e normaliza o número de telefone antes de o procurar.",
            en: "Many citizens do not use email. The login accepts an email, a phone number or a username, detects which one was typed and normalises the phone number before looking it up.",
          },
        ],
      },
      {
        heading: { pt: "Perfis e permissões", en: "Roles and permissions" },
        paragraphs: [
          {
            pt: "O acesso usa spatie/laravel-permission com sete papéis: Utente, Técnico, Gestor, Gestor Adjunto, Director, PCA e Admin. Criei o perfil de Gestor Adjunto de ponta a ponta (migração, seeders, controladores, middleware e ecrãs) e juntei os antigos Super Admin e Admin num só papel.",
            en: "Access uses spatie/laravel-permission with seven roles: Citizen, Officer, Manager, Deputy Manager, Director, Board Chair and Admin. I built the Deputy Manager role end to end (migration, seeders, controllers, middleware and screens) and merged the old Super Admin and Admin into one role.",
          },
          {
            pt: "Cada papel tem o seu painel. Fiz boa parte do frontend em Vue: painéis, galeria de anexos, formulário de submissão e modo escuro, além de correcções de produção como o erro 419 no primeiro login e a localização de projectos por província, distrito e posto administrativo.",
            en: "Each role has its own dashboard. I did much of the Vue frontend: dashboards, attachment gallery, submission form and dark mode, plus production fixes such as the 419 error on first login and project location by province, district and administrative post.",
          },
        ],
      },
      {
        heading: { pt: "O que foi feito por colegas", en: "What colleagues built" },
        paragraphs: [
          {
            pt: "O esqueleto Laravel foi feito por um colega. Os prazos legais (10 dias úteis para reconhecer e 20 para responder, com estados \"em atraso\" e \"a vencer\") foram implementados por outro colega. O pipeline de CI/CD em GitHub Actions (lint, build e testes) também é trabalho de um colega. Os relatórios em PDF e Excel foram maioritariamente de outros autores.",
            en: "The Laravel scaffold was set up by a colleague. The legal deadlines (10 working days to acknowledge and 20 to respond, with \"overdue\" and \"due soon\" states) were implemented by another colleague. The GitHub Actions CI/CD pipeline (lint, build and tests) is also a colleague's work. The PDF and Excel reports were mostly by other authors.",
          },
        ],
      },
      {
        heading: { pt: "Capacitação e números verificáveis", en: "Training and verifiable numbers" },
        paragraphs: [
          {
            pt: "No mesmo período, a TechSolutions conduziu um programa de capacitação dos quadros do FUNAE em gestão de sistemas e plataformas web, para que a equipa interna consiga operar e manter as plataformas. Participei como formador; a notícia pública da TechSolutions está nos links.",
            en: "In the same period, TechSolutions ran a training programme for FUNAE staff on managing systems and web platforms, so the in-house team can operate and maintain them. I took part as a trainer; TechSolutions' public news item is in the links.",
          },
          {
            pt: "Em números: 214 componentes Vue, 50 migrações, 7 papéis e 11 ficheiros de testes PHPUnit. O endereço de produção já não responde, por isso não há link para a aplicação.",
            en: "In numbers: 214 Vue components, 50 migrations, 7 roles and 11 PHPUnit test files. The production address no longer responds, so there is no link to the application.",
          },
        ],
      },
    ],
    order: 8,
  },

  // ───────────────────────── SIGA IPP ─────────────────────────
  {
    slug: "siga-ipp",
    name: "SIGA – Instituto Politécnico Planalto",
    tagline: {
      pt: "Manutenção e modernização de um sistema académico e financeiro herdado, em PHP, sem o reescrever.",
      en: "Maintaining and modernising an inherited PHP academic and finance system, without rewriting it.",
    },
    period: "2026",
    status: "development",
    categories: ["reliability"],
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "Coolify"],
    role: {
      pt: "Mantenedor e responsável pela evolução do sistema (segurança, módulo financeiro, base de dados e deploy)",
      en: "Maintainer responsible for evolving the system (security, finance module, database and deployment)",
    },
    authorship: "contributor",
    client: "Instituto Politécnico Planalto (IPP)",
    problem: {
      pt: "O IPP gere inscrições, matrículas, turmas, estágios, propinas e a conta do estudante num SIGA em PHP procedural que não foi escrito por mim. O sistema tinha falhas de segurança, colações misturadas na base de dados e regras financeiras inconsistentes em multas, propinas e depósitos.",
      en: "IPP runs enrolment, registration, classes, internships, fees and student accounts on a procedural PHP system I did not write. It had security flaws, mixed collations in the database and inconsistent finance rules for fines, fees and deposits.",
    },
    solution: {
      pt: "Assumi a manutenção: importei a base herdada para git e trabalho os pedidos da instituição em lotes numerados. Fiz uma auditoria de segurança e corrigi falhas de autenticação e de SQL injection, escrevi testes para o módulo financeiro, normalizei a base de dados e passei o deploy para Coolify. Entre as entregas estão o pagamento de propinas pelo saldo da conta, a conferência de depósitos pela Secretaria e o portal do estudante com inscrição online.",
      en: "I took over maintenance: I imported the inherited code into git and handle the institution's requests in numbered batches. I ran a security audit and fixed authentication and SQL injection flaws, wrote tests for the finance module, normalised the database and moved deployment to Coolify. Deliveries include paying fees from the account balance, deposit checks by the registry office and a student portal with online enrolment.",
    },
    decisions: [
      {
        title: {
          pt: "Corrigir em vez de reescrever",
          en: "Fix instead of rewrite",
        },
        body: {
          pt: "O sistema mexe com dinheiro de estudantes e está em uso. Reescrever pararia a instituição; corrigir por módulos, com testes, deixa-a a funcionar enquanto melhora.",
          en: "The system handles student money and is in daily use. A rewrite would stall the institution; fixing it module by module, with tests, keeps it running while it improves.",
        },
      },
      {
        title: {
          pt: "Suite de testes própria para o módulo financeiro",
          en: "A dedicated test suite for the finance module",
        },
        body: {
          pt: "Scripts PHP de linha de comando cobrem estornos, abatimentos, pagamento com saldo, anti-duplicação de talões e recibos provisórios, e saem com código 0/1 para poderem correr em CI. Os testes encontraram multas perdoadas indevidamente e uma geração de facturas em lote que estava partida.",
          en: "Command-line PHP scripts cover refunds, deductions, balance payments, duplicate-slip prevention and provisional receipts, and exit 0/1 so they can run in CI. The tests found wrongly waived fines and a broken batch invoice generator.",
        },
      },
      {
        title: {
          pt: "Uma só colação: utf8mb4 e InnoDB",
          en: "One collation: utf8mb4 and InnoDB",
        },
        body: {
          pt: "Migrações versionadas padronizaram a base para utf8mb4_unicode_ci e InnoDB, o que acabou com os erros \"Illegal mix of collations\" entre o MySQL 8 local e o MariaDB do servidor. Os ENUMs com acentos foram convertidos antes da mudança de charset.",
          en: "Versioned migrations standardised the database on utf8mb4_unicode_ci and InnoDB, ending the \"Illegal mix of collations\" errors between local MySQL 8 and the server's MariaDB. Accented ENUMs were converted before the charset change.",
        },
      },
      {
        title: {
          pt: "Deploy moderno para PHP sem framework",
          en: "Modern deployment for framework-less PHP",
        },
        body: {
          pt: "Um nixpacks.toml e um router.php põem o PHP puro a correr em Coolify, forçando o provider PHP. Os uploads passaram a ter uma raiz única persistente para sobreviver aos deploys.",
          en: "A nixpacks.toml and a router.php run plain PHP on Coolify, forcing the PHP provider. Uploads moved to a single persistent root so they survive redeploys.",
        },
      },
    ],
    results: [
      {
        value: "317",
        label: { pt: "casos numa execução da suite de testes financeiros", en: "cases in one run of the finance test suite" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
      {
        value: "26",
        label: { pt: "migrações SQL versionadas", en: "versioned SQL migrations" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
    ],
    learnings: {
      pt: "Num sistema herdado, reproduzir o erro com uma cópia local da base vale mais do que adivinhar. E muitas vezes o problema está nos dados (anos a NULL, facturas duplicadas) e não no código.",
      en: "In an inherited system, reproducing the bug against a local copy of the database beats guessing. And the problem is often in the data (NULL years, duplicated invoices) rather than the code.",
    },
    images: [
      {
        src: "/work/siga-ipp/01.webp",
        alt: {
          pt: "Entrada do novo Portal do Estudante do IPP, com acesso por número de BI ou código de estudante",
          en: "Sign-in page of IPP's new Student Portal, using an ID number or student code",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/siga-ipp/02.webp",
        alt: {
          pt: "Entrada do novo SIGA no telemóvel, com aviso de área restrita e indicação para estudantes usarem o portal",
          en: "New SIGA sign-in on a phone, with a restricted-area notice pointing students to the portal",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
      {
        src: "/work/siga-ipp/03.webp",
        alt: {
          pt: "Entrada do novo SIGA para funcionários, versão desktop",
          en: "New SIGA staff sign-in, desktop version",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
    ],
    links: [],
    order: 21,
  },

  // ───────────────────────── Município do Dondo ─────────────────────────
  {
    slug: "municipio-do-dondo",
    name: { pt: "Município do Dondo – Portal Oficial", en: "Dondo Municipality – Official Portal" },
    tagline: {
      pt: "Portal institucional do Município do Dondo, com a Secretaria Municipal Virtual para pedir serviços sem ir ao balcão, implementado em parceria com a GIZ e mantido desde 2019.",
      en: "The Dondo Municipality's institutional website, with a Virtual Municipal Secretariat for requesting services without visiting the counter, built in partnership with GIZ and maintained since 2019.",
    },
    period: "2019–2026",
    status: "production",
    categories: ["govtech"],
    tech: ["WordPress"],
    role: {
      pt: "Implementação e manutenção do portal e da Secretaria Municipal Virtual, com o Município do Dondo (Empoderando Moçambique)",
      en: "Implementation and maintenance of the portal and the Virtual Municipal Secretariat, with the Dondo Municipality (Empoderando Moçambique)",
    },
    authorship: "consulting",
    client: "Conselho Autárquico do Dondo",
    partners: ["Equip Moçambique", "GIZ"],
    problem: {
      pt: "O município precisava de um sítio oficial para publicar notícias, editais e contas, e de uma forma de os munícipes pedirem serviços sem terem de se deslocar várias vezes ao Conselho Municipal. Precisava também de alguém que mantivesse o domínio, o alojamento e o conteúdo a funcionar ao longo dos anos.",
      en: "The municipality needed an official website to publish news, notices and accounts, and a way for residents to request services without repeated trips to the Municipal Council. It also needed someone to keep the domain, hosting and content working over the years.",
    },
    solution: {
      pt: "O portal e a Secretaria Municipal Virtual foram implementados em parceria com a GIZ, e a nossa organização implementa e mantém o sítio institucional juntamente com o Município do Dondo. Na Secretaria Municipal Virtual, o munícipe pede regularização ou atribuição de terreno, atestados, licença de construção e a sua renovação, trespasse de benfeitorias e audiências, por e-mail ou WhatsApp. O sítio reúne ainda os pelouros, notícias, o jornal municipal, a prestação de contas e a ligação ao Portal Transparência.",
      en: "The portal and the Virtual Municipal Secretariat were built in partnership with GIZ, and our organisation implements and maintains the institutional website together with the Municipality of Dondo. Through the Virtual Secretariat, residents request land regularisation or allocation, certificates, building permits and their renewal, transfer of property improvements and audiences, by email or WhatsApp. The site also brings together the municipal departments, news, the municipal newspaper, public accounts and a link to the Transparency Portal.",
    },
    decisions: [
      {
        title: {
          pt: "WordPress para uma equipa sem programadores",
          en: "WordPress for a team without developers",
        },
        body: {
          pt: "Quem publica no município não programa. Um CMS conhecido permite-lhes publicar notícias e editais sem depender de mim para cada alteração.",
          en: "The people publishing at the municipality are not developers. A well-known CMS lets them post news and notices without needing me for every change.",
        },
      },
      {
        title: {
          pt: "Domínio .gov.mz gerido de forma contínua",
          en: "A .gov.mz domain managed continuously",
        },
        body: {
          pt: "O domínio oficial e o alojamento são renovados e acompanhados todos os anos, para o portal não cair por uma renovação esquecida.",
          en: "The official domain and hosting are renewed and monitored every year, so the portal does not go down over a forgotten renewal.",
        },
      },
      {
        title: {
          pt: "Secretaria virtual sobre canais que o munícipe já usa",
          en: "A virtual secretariat on channels residents already use",
        },
        body: {
          pt: "Em vez de obrigar a criar conta numa plataforma nova, a Secretaria Municipal Virtual apresenta os serviços no sítio e recebe os pedidos por e-mail, chamada, SMS ou WhatsApp. Isto baixa a barreira de entrada para quem só tem telemóvel.",
          en: "Rather than making residents sign up to a new platform, the Virtual Municipal Secretariat lists the services on the site and takes requests by email, call, SMS or WhatsApp. That lowers the barrier for people who only have a phone.",
        },
      },
    ],
    results: [],
    images: [
      {
        src: "/work/municipio-do-dondo/01.webp",
        alt: {
          pt: "Página da Secretaria Municipal Virtual com os serviços disponíveis: regularização e atribuição de terreno, atestados, licença de construção, trespasse de benfeitorias e audiências",
          en: "Virtual Municipal Secretariat page listing the available services: land regularisation and allocation, certificates, building permits, transfer of improvements and audiences",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/municipio-do-dondo/02.webp",
        alt: {
          pt: "Secção de prestação de contas na página inicial, com ligações ao Portal Transparência, ao plano e orçamento, aos relatórios de gerência e à Secretaria Municipal Virtual",
          en: "Public accounts section on the home page, linking to the Transparency Portal, the budget plan, management reports and the Virtual Municipal Secretariat",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/municipio-do-dondo/03.webp",
        alt: {
          pt: "Grelha de pelouros do município na página inicial, cada um com ícone e ligação para a sua página",
          en: "Grid of municipal departments on the home page, each with an icon and a link to its page",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/municipio-do-dondo/04.webp",
        alt: {
          pt: "Secretaria Municipal Virtual no telemóvel, com os serviços em cartões empilhados",
          en: "Virtual Municipal Secretariat on a phone, with the services shown as stacked cards",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
    ],
    links: [
      {
        label: { pt: "municipiododondo.gov.mz", en: "municipiododondo.gov.mz" },
        href: "https://www.municipiododondo.gov.mz/",
      },
    ],
    order: 22,
  },

  // ───────────────────────── SIGEM+ ─────────────────────────
  {
    slug: "sigem-plus",
    name: { pt: "SIGEM+ – Sistema Integrado de Gestão de Membros", en: "SIGEM+ – Integrated Member Management System" },
    tagline: {
      pt: "Protótipo web e mobile de recenseamento de membros, pensado para agentes de campo sem internet.",
      en: "Web and mobile prototype for member registration, designed for field agents without internet.",
    },
    period: "2026",
    status: "prototype",
    categories: ["offline-first", "govtech"],
    tech: ["Quasar", "Vue", "TypeScript"],
    role: {
      pt: "Arquitecto de soluções e programador",
      en: "Solutions architect and developer",
    },
    authorship: "contributor",
    client: "FRELIMO",
    problem: {
      pt: "O recenseamento de membros é feito em papel. Os agentes de célula trabalham em zonas rurais sem rede, e os registos têm de ser validados por níveis (distrito, província, nacional) com auditoria de cada alteração.",
      en: "Member registration is done on paper. Cell agents work in rural areas without a network, and records must be validated level by level (district, province, national) with every change audited.",
    },
    solution: {
      pt: "Protótipo desenvolvido para a FRELIMO: uma app mobile para os agentes registarem membros e uma app web para os gestores validarem, ambas em Quasar e Vue 3 com dados de demonstração. A documentação técnica define o contrato de sincronização offline, o modelo de permissões por território e o plano do backend, que ainda não foi construído.",
      en: "A prototype built for FRELIMO: a mobile app for agents to register members and a web app for managers to validate them, both in Quasar and Vue 3 with demo data. The technical docs define the offline sync contract, the territory-scoped permission model and the backend plan, which has not been built yet.",
    },
    decisions: [
      {
        title: {
          pt: "Contrato de sincronização idempotente",
          en: "Idempotent sync contract",
        },
        body: {
          pt: "Cada operação offline leva um UUID, uma versão local e as dependências, e o servidor responde por operação: aplicada, rejeitada ou em conflito. Reenviar o mesmo lote não duplica membros. É um desenho documentado; no protótipo a sincronização é simulada.",
          en: "Each offline operation carries a UUID, a local version and its dependencies, and the server answers per operation: applied, rejected or conflicted. Re-sending a batch never duplicates members. This is a documented design; in the prototype, sync is simulated.",
        },
      },
      {
        title: {
          pt: "Permissões sempre limitadas a um território",
          en: "Permissions always scoped to a territory",
        },
        body: {
          pt: "Cada papel (admin provincial, distrital, agente de célula, auditor) só vê a sua unidade da estrutura, e os conflitos são resolvidos por um utilizador do nível acima.",
          en: "Each role (provincial or district admin, cell agent, auditor) only sees its own unit of the structure, and conflicts are resolved by a user one level up.",
        },
      },
      {
        title: {
          pt: "Estados do membro com histórico",
          en: "Member states with history",
        },
        body: {
          pt: "Pendente, em revisão, aprovado, activo ou rejeitado, com o histórico de cada passo visível no detalhe do membro e um ecrã de auditoria.",
          en: "Pending, under review, approved, active or rejected, with each step's history shown on the member page and an audit screen.",
        },
      },
      {
        title: {
          pt: "Duas apps, dois contextos",
          en: "Two apps, two contexts",
        },
        body: {
          pt: "A app de campo (offline) e a de gestão (online) têm layouts separados. O plano troca o localStorage por SQLite via Capacitor na versão real.",
          en: "The field app (offline) and the management app (online) have separate layouts. The plan swaps localStorage for SQLite via Capacitor in the real version.",
        },
      },
    ],
    results: [
      {
        value: "9 + 7",
        label: { pt: "ecrãs no protótipo web e mobile", en: "screens in the web and mobile prototypes" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
    ],
    images: [
      {
        src: "/work/sigem-plus/01.webp",
        alt: {
          pt: "Detalhe de um membro de demonstração com dados pessoais, estrutura e histórico até ao estado activo",
          en: "Demo member detail with personal data, structure and history up to the active state",
        },
        width: 1600,
        height: 1434,
        device: "desktop",
      },
      {
        src: "/work/sigem-plus/02.webp",
        alt: {
          pt: "Formulário web de registo de novo membro, com estrutura organizativa e aviso de validação hierárquica",
          en: "Web form to register a new member, with organisational structure and a hierarchical validation notice",
        },
        width: 1600,
        height: 1000,
        device: "desktop",
      },
      {
        src: "/work/sigem-plus/03.webp",
        alt: {
          pt: "App mobile: detalhe de um membro activo com identificador QR",
          en: "Mobile app: active member detail with a QR identifier",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
      {
        src: "/work/sigem-plus/04.webp",
        alt: {
          pt: "App mobile: formulário de registo de membro para o agente de campo",
          en: "Mobile app: member registration form for the field agent",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
      {
        src: "/work/sigem-plus/05.webp",
        alt: {
          pt: "Gestão de utilizadores com papel e âmbito territorial de cada um",
          en: "User management showing each user's role and territorial scope",
        },
        width: 1600,
        height: 1000,
        device: "desktop",
      },
    ],
    links: [],
    order: 23,
  },

  // ───────────────────────── Start Escolar ─────────────────────────
  {
    slug: "start-escolar",
    name: "Start Escolar",
    tagline: {
      pt: "Gestão escolar multi-escola com matrículas, notas, pagamentos e presenças por cartão com código de barras ou QR.",
      en: "Multi-school management with enrolment, grades, payments and barcode or QR card attendance.",
    },
    period: "2019–2022",
    status: "archived",
    categories: ["saas"],
    tech: ["Laravel", "PHP", "MySQL", "JavaScript"],
    role: {
      pt: "Programador principal",
      en: "Lead developer",
    },
    authorship: "main",
    problem: {
      pt: "As escolas geriam alunos, turmas, notas, propinas e presenças em papel ou folhas de cálculo. O controlo de entradas de alunos e funcionários era manual.",
      en: "Schools managed students, classes, grades, fees and attendance on paper or spreadsheets. Student and staff check-ins were tracked by hand.",
    },
    solution: {
      pt: "Aplicação Laravel em que várias escolas partilham a mesma instalação. Fiz a API para o leitor de cartões, recibos e facturas com logo da escola e NUIT, avaliações e lançamento de notas, pagamentos com histórico financeiro e o ano lectivo nas matrículas. Construí também o módulo C-PRES: presenças de alunos, professores e funcionários por cartão com código de barras e, depois, QR.",
      en: "A Laravel application where several schools share one installation. I built the card-reader API, receipts and invoices with the school logo and tax number (NUIT), assessments and grade entry, payments with financial history and the school year on enrolments. I also built the C-PRES module: attendance for students, teachers and staff by barcode card and, later, QR.",
    },
    decisions: [
      {
        title: {
          pt: "escola_id em todas as tabelas operacionais",
          en: "school_id on every operational table",
        },
        body: {
          pt: "Presenças, pontos, matrículas e pagamentos levam a escola, para várias escolas usarem a mesma instalação sem verem os dados umas das outras.",
          en: "Attendance, check-ins, enrolments and payments carry the school, so several schools can share one installation without seeing each other's data.",
        },
      },
      {
        title: {
          pt: "Endpoints próprios para o leitor de cartões",
          en: "Dedicated endpoints for the card reader",
        },
        body: {
          pt: "O dispositivo lê o cartão e chama a API para registar a entrada do aluno ou do funcionário, e há uma rota para sincronizar registos. Foi preciso corrigir entradas duplicadas no mesmo dia.",
          en: "The device reads the card and calls the API to log the student's or staff member's entry, with a route to sync records. Same-day duplicate entries had to be fixed.",
        },
      },
      {
        title: {
          pt: "Códigos de barras e QR gerados no servidor",
          en: "Barcodes and QR codes generated on the server",
        },
        body: {
          pt: "Os cartões são impressos a partir do próprio sistema, com milon/barcode e simple-qrcode, sem ferramentas externas.",
          en: "Cards are printed from the system itself, using milon/barcode and simple-qrcode, with no external tools.",
        },
      },
      {
        title: {
          pt: "Ano lectivo introduzido com dados já em uso",
          en: "School year added while data was already live",
        },
        body: {
          pt: "O ano lectivo entrou nas matrículas e nos filtros de turmas depois de o sistema já ter dados, com migração manual documentada e correcção de duplicados.",
          en: "The school year was added to enrolments and class filters after the system already had data, with a documented manual migration and duplicate clean-up.",
        },
      },
    ],
    results: [
      {
        value: "30",
        label: { pt: "modelos de domínio (aluno, matrícula, nota, presença…)", en: "domain models (student, enrolment, grade, attendance…)" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
    ],
    learnings: {
      pt: "Foi o meu primeiro contacto com hardware ligado a uma aplicação web: o leitor de cartões obriga a pensar em duplicados, falhas de rede e sincronização desde o início.",
      en: "This was my first time connecting hardware to a web app: a card reader forces you to think about duplicates, network failures and syncing from day one.",
    },
    images: [],
    links: [],
    order: 24,
  },

  // ───────────────────────── Djobar ─────────────────────────
  {
    slug: "djobar",
    name: { pt: "Djobar – Plataforma de Emprego", en: "Djobar – Jobs Platform" },
    tagline: {
      pt: "Plataforma de emprego e recrutamento com vagas, perfis de candidatos, provas cronometradas e alertas por SMS.",
      en: "Job and recruitment platform with vacancies, candidate profiles, timed tests and SMS alerts.",
    },
    period: "2022",
    status: "archived",
    categories: ["saas"],
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "Twilio", "Docker"],
    role: {
      pt: "Programador full-stack e maior contribuidor",
      en: "Full-stack developer and largest contributor",
    },
    authorship: "main",
    client: "TechSolutions",
    problem: {
      pt: "Empresas moçambicanas precisavam de publicar vagas, filtrar e avaliar candidatos. Os candidatos precisavam de um perfil único e de ser avisados de vagas por SMS, porque muitos não usam email.",
      en: "Mozambican companies needed to post vacancies and filter and assess candidates. Candidates needed a single profile and job alerts by SMS, since many do not use email.",
    },
    solution: {
      pt: "Aplicação Laravel com Blade, produto da TechSolutions, que entrei a desenvolver depois de um colega ter montado a base. Construí o módulo de testes e provas cronometradas ligadas a vagas, filtros e convites de candidatos, prevenção de candidaturas duplicadas, vagas expiradas, o blog e a tradução para português.",
      en: "A Laravel and Blade application, a TechSolutions product, which I joined after a colleague had set up the base. I built the timed test module linked to vacancies, candidate filters and invitations, duplicate-application prevention, expired vacancies, the blog and the Portuguese translation.",
    },
    decisions: [
      {
        title: {
          pt: "SMS e email em filas",
          en: "SMS and email on queues",
        },
        body: {
          pt: "Nove jobs em fila tratam boas-vindas, alertas de vagas e notificações às empresas, com SMS via Twilio registados numa tabela própria. O pedido do utilizador não espera pelo envio.",
          en: "Nine queued jobs handle welcome messages, job alerts and company notifications, with Twilio SMS logged in their own table. The user's request never waits for a send.",
        },
      },
      {
        title: {
          pt: "Provas cronometradas por vaga",
          en: "Timed tests per vacancy",
        },
        body: {
          pt: "Testes, questões e respostas são modelos próprios associados a uma vaga, com temporizador e actualização automática. O candidato só vê testes públicos e cada empresa só gere os seus.",
          en: "Tests, questions and answers are their own models attached to a vacancy, with a timer and automatic refresh. Candidates only see public tests and each company only manages its own.",
        },
      },
      {
        title: {
          pt: "Importação de utilizadores por Excel",
          en: "User import from Excel",
        },
        body: {
          pt: "Com maatwebsite/excel é possível criar contas em massa a partir de uma folha, em vez de as registar uma a uma.",
          en: "maatwebsite/excel lets accounts be created in bulk from a spreadsheet instead of one by one.",
        },
      },
    ],
    results: [
      {
        value: "9",
        label: { pt: "jobs em fila para SMS e email", en: "queued jobs for SMS and email" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
    ],
    learnings: {
      pt: "Foi o meu primeiro projecto Laravel grande em equipa: filas, integrações externas e um domínio de recursos humanos extenso.",
      en: "My first large team Laravel project: queues, external integrations and a broad HR domain.",
    },
    images: [],
    links: [],
    order: 25,
  },

  // ───────────────────────── Library access analytics ─────────────────────────
  {
    slug: "library-access-analytics",
    name: { pt: "Biblioteca Beireano – Registo de Presenças", en: "Biblioteca Beireano – Visitor Log" },
    tagline: {
      pt: "Registo de visitas em três toques (género, faixa etária, propósito) e estatísticas para a gestão da biblioteca.",
      en: "Visit logging in three taps (gender, age group, purpose) and statistics for library management.",
    },
    period: "2023–2026",
    status: "production",
    categories: ["community"],
    tech: ["Supabase"],
    role: {
      pt: "Programador do sistema e análise de dados",
      en: "System developer and data analysis",
    },
    authorship: "lead",
    client: "Biblioteca Beireano",
    problem: {
      pt: "A biblioteca não sabia quem a visitava nem para quê. Sem números, era difícil planear serviços ou mostrar o impacto a parceiros.",
      en: "The library did not know who visited or why. Without numbers it was hard to plan services or show impact to partners.",
    },
    solution: {
      pt: "Uma aplicação web em que o visitante se regista em três passos (género, faixa etária e propósito da visita), com nome opcional. A gestão vê o resumo por género, idade e propósito, filtra por data e exporta os registos para Excel.",
      en: "A web app where visitors check in in three steps (gender, age group and purpose of visit), with an optional name. Management sees totals by gender, age and purpose, filters by date and exports records to Excel.",
    },
    decisions: [
      {
        title: {
          pt: "Nome opcional",
          en: "Name is optional",
        },
        body: {
          pt: "O registo pede só o necessário para as estatísticas. O nome pode ficar em branco, o que torna o registo rápido e evita guardar dados pessoais sem necessidade.",
          en: "Check-in asks only for what the statistics need. The name can be left blank, which keeps check-in fast and avoids storing personal data unnecessarily.",
        },
      },
      {
        title: {
          pt: "Três passos com botões grandes",
          en: "Three steps with large buttons",
        },
        body: {
          pt: "Género, faixa etária e propósito escolhem-se com um toque cada, pensado para um tablet ou telemóvel à entrada.",
          en: "Gender, age group and purpose are each one tap, designed for a tablet or phone at the entrance.",
        },
      },
      {
        title: {
          pt: "Exportação para Excel",
          en: "Excel export",
        },
        body: {
          pt: "A equipa da biblioteca trabalha em folhas de cálculo; exportar os registos filtrados encaixa no processo que já tinha.",
          en: "The library team works in spreadsheets; exporting filtered records fits the process it already had.",
        },
      },
    ],
    results: [],
    images: [
      {
        src: "/work/library-access-analytics/01.webp",
        alt: {
          pt: "Resumo de visitas por género, faixa etária e propósito, com filtros e lista de registos",
          en: "Visit summary by gender, age group and purpose, with filters and a list of records",
        },
        width: 1600,
        height: 920,
        device: "desktop",
      },
      {
        src: "/work/library-access-analytics/02.webp",
        alt: {
          pt: "Primeiro passo do registo de presença: escolha do género, com nome opcional",
          en: "First check-in step: choosing gender, with an optional name",
        },
        width: 1600,
        height: 920,
        device: "desktop",
      },
      {
        src: "/work/library-access-analytics/03.webp",
        alt: {
          pt: "Terceiro passo: propósito da visita (ler, computador, jogo, pintura)",
          en: "Third step: purpose of the visit (reading, computer, games, painting)",
        },
        width: 1600,
        height: 919,
        device: "desktop",
      },
      {
        src: "/work/library-access-analytics/04.webp",
        alt: {
          pt: "Registo de presença no telemóvel, passo do género",
          en: "Check-in on a phone, gender step",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
    ],
    links: [],
    order: 26,
  },

  // ───────────────────────── AEM Controle de Ponto ─────────────────────────
  {
    slug: "aem-controle-ponto",
    name: "AEM Controle de Ponto (CPonto)",
    tagline: {
      pt: "Registo de ponto com quiosque público por código ou leitura, e área de gestão com presenças e horários.",
      en: "Time and attendance with a public kiosk by code or scan, and an admin area for attendance and schedules.",
    },
    period: "2025–2026",
    status: "development",
    categories: ["reliability"],
    tech: ["Ionic", "Angular", "Capacitor", "Supabase", "TypeScript"],
    role: {
      pt: "Configuração de ambientes e deploy; a aplicação foi desenvolvida por um colega",
      en: "Environment configuration and deployment; the application was built by a colleague",
    },
    authorship: "contributor",
    problem: {
      pt: "A organização controlava presenças à mão e não sabia com facilidade quem chegou, quem se atrasou e quantas horas cada pessoa trabalhou.",
      en: "The organisation tracked attendance by hand and could not easily tell who arrived, who was late and how many hours each person worked.",
    },
    solution: {
      pt: "Uma app Ionic + Angular com backend Supabase, escrita por um colega. O funcionário identifica-se num quiosque por código interno ou leitura, confirma entrada ou saída, e a gestão vê presentes, atrasados e ausentes. A minha parte foi tirar as chaves do código para variáveis de ambiente e preparar o deploy.",
      en: "An Ionic + Angular app with a Supabase backend, written by a colleague. Staff identify themselves at a kiosk by internal code or scan, confirm check-in or check-out, and managers see who is present, late or absent. My part was moving keys out of the code into environment variables and preparing deployment.",
    },
    decisions: [
      {
        title: {
          pt: "Configuração por variáveis de ambiente",
          en: "Configuration through environment variables",
        },
        body: {
          pt: "Os valores fixos nos ficheiros de ambiente foram substituídos por variáveis lidas no build, com valores de exemplo só para desenvolvimento local.",
          en: "Hard-coded values in the environment files were replaced by variables read at build time, with placeholder values for local development only.",
        },
      },
      {
        title: {
          pt: "Quiosque separado da área de gestão",
          en: "Kiosk separate from the admin area",
        },
        body: {
          pt: "O terminal de ponto tem rota própria e a área de gestão fica protegida por guard, para o quiosque não precisar de sessão de administrador.",
          en: "The attendance terminal has its own route and the admin area is behind a guard, so the kiosk never needs an admin session.",
        },
      },
      {
        title: {
          pt: "Confirmação antes de gravar",
          en: "Confirmation before saving",
        },
        body: {
          pt: "Depois de ler o código, a app mostra nome, hora e tipo (entrada ou saída) e pede confirmação, o que reduz registos errados.",
          en: "After reading the code, the app shows the name, time and type (in or out) and asks for confirmation, which cuts down wrong entries.",
        },
      },
    ],
    results: [],
    images: [
      {
        src: "/work/aem-controle-ponto/01.webp",
        alt: {
          pt: "Quiosque no telemóvel: campo para código interno e botão para escanear código",
          en: "Kiosk on a phone: internal code field and a scan button",
        },
        width: 876,
        height: 1902,
        device: "mobile",
      },
      {
        src: "/work/aem-controle-ponto/02.webp",
        alt: {
          pt: "Confirmação de registo de entrada com nome e hora",
          en: "Check-in confirmation with name and time",
        },
        width: 876,
        height: 1902,
        device: "mobile",
      },
      {
        src: "/work/aem-controle-ponto/03.webp",
        alt: {
          pt: "Confirmação de registo de saída",
          en: "Check-out confirmation",
        },
        width: 876,
        height: 1902,
        device: "mobile",
      },
    ],
    links: [],
    order: 27,
  },

  // ───────────────────────── Grievance SaaS (concept) ─────────────────────────
  {
    slug: "grievance-saas",
    hidden: true,
    name: "GrievanceSaaS",
    tagline: {
      pt: "Conceito de um SaaS multi-empresa de gestão de reclamações para entidades públicas e privadas.",
      en: "Concept for a multi-tenant grievance management SaaS for public and private organisations.",
    },
    period: "2026",
    status: "concept",
    categories: ["saas", "govtech"],
    tech: ["Laravel", "Vue", "Inertia.js", "Tailwind CSS", "PostgreSQL", "Docker"],
    role: {
      pt: "Autor do plano técnico e de produto",
      en: "Author of the technical and product plan",
    },
    authorship: "lead",
    problem: {
      pt: "Um mecanismo de reclamações costuma ser instalado à medida para cada entidade. Outras organizações, estatais com prazos legais e auditoria, ou privadas com marca e fluxos próprios, teriam de receber uma instalação dedicada.",
      en: "A grievance mechanism is usually installed one-off for each organisation. Others, public bodies with legal deadlines and audit trails or private firms with their own branding and workflows, would each need a dedicated install.",
    },
    solution: {
      pt: "Um plano, ainda sem código, para um produto partilhado por várias entidades, inspirado na experiência com mecanismos de queixas. Define o modelo de isolamento, a identificação da entidade, os requisitos diferentes para o sector público e privado e um roteiro por fases. A stack indicada é a planeada.",
      en: "A plan, with no code yet, for a product shared by many organisations, drawing on experience with grievance mechanisms. It defines the isolation model, how an organisation is identified, the different needs of public and private clients, and a phased roadmap. The stack listed is the planned one.",
    },
    decisions: [
      {
        title: {
          pt: "Uma base de dados por entidade",
          en: "One database per tenant",
        },
        body: {
          pt: "Isolamento máximo com stancl/tenancy, porque entidades estatais pedem garantias fortes de separação e auditoria.",
          en: "Maximum isolation with stancl/tenancy, because public bodies ask for strong guarantees of separation and auditability.",
        },
      },
      {
        title: {
          pt: "Entidade identificada por subdomínio",
          en: "Tenant identified by subdomain",
        },
        body: {
          pt: "Cada entidade tem o seu subdomínio (ou caminho), o que mantém a marca própria e simplifica o encaminhamento.",
          en: "Each organisation gets its own subdomain (or path), which keeps its branding and simplifies routing.",
        },
      },
      {
        title: {
          pt: "Requisitos separados por tipo de cliente",
          en: "Requirements split by client type",
        },
        body: {
          pt: "Prazos legais e trilhas de auditoria para o sector público; marca, fluxos configuráveis e integrações para o privado.",
          en: "Legal deadlines and audit trails for the public sector; branding, configurable workflows and integrations for private clients.",
        },
      },
    ],
    results: [],
    images: [],
    links: [],
    order: 28,
  },

  // ───────────────────────── Absentify + Teams ─────────────────────────
  {
    slug: "absentify-teams",
    name: { pt: "Gestão de Ausências com Absentify e Microsoft Teams", en: "Absence Management with Absentify and Microsoft Teams" },
    tagline: {
      pt: "Pedidos de férias e ausências dentro do Microsoft Teams, em vez de folhas de cálculo.",
      en: "Leave and absence requests inside Microsoft Teams, instead of spreadsheets.",
    },
    period: "2024–2026",
    status: "production",
    categories: ["community"],
    tech: [],
    role: {
      pt: "Responsável pela implementação",
      en: "Implementation lead",
    },
    authorship: "consulting",
    client: "Equip Moçambique",
    problem: {
      pt: "A escala de férias vivia numa folha Excel partilhada. Os pedidos e aprovações passavam por mensagens, e ninguém tinha uma visão clara de quem estava ausente.",
      en: "The leave schedule lived in a shared Excel sheet. Requests and approvals went through messages, and nobody had a clear view of who was away.",
    },
    solution: {
      pt: "Configurei o Absentify dentro do Microsoft Teams da organização: tipos de ausência (férias, dispensa, falta, doença, maternidade/paternidade, viagem de trabalho), regras de aprovação e ligação aos saldos de férias. Migrei a escala que estava em Excel e acompanhei a adopção pela equipa.",
      en: "I set up Absentify inside the organisation's Microsoft Teams: absence types (holiday, leave of absence, unexcused absence, sickness, parental leave, business travel), approval rules and links to holiday allowances. I migrated the Excel schedule and supported the team's adoption.",
    },
    decisions: [
      {
        title: {
          pt: "Dentro do Teams, onde a equipa já está",
          en: "Inside Teams, where the team already works",
        },
        body: {
          pt: "Em vez de mais uma ferramenta com login próprio, os pedidos e aprovações acontecem no Teams que todos já usam.",
          en: "Instead of yet another tool with its own login, requests and approvals happen in the Teams everyone already uses.",
        },
      },
      {
        title: {
          pt: "Aprovação só onde faz sentido",
          en: "Approval only where it matters",
        },
        body: {
          pt: "Férias e dispensas pedem aprovação e as férias descontam do saldo; os outros tipos ficam registados sem esse passo.",
          en: "Holidays and leave of absence need approval and holidays come out of the allowance; other types are recorded without that step.",
        },
      },
    ],
    results: [],
    images: [
      {
        src: "/work/absentify-teams/01.webp",
        alt: {
          pt: "Tendência anual de ausências por tipo, dentro do Microsoft Teams",
          en: "Annual absence trend by type, inside Microsoft Teams",
        },
        width: 1600,
        height: 944,
        device: "desktop",
      },
      {
        src: "/work/absentify-teams/02.webp",
        alt: {
          pt: "Tipos de ausência configurados, com indicação de aprovação e desconto no saldo",
          en: "Configured absence types, showing which need approval and use the allowance",
        },
        width: 1600,
        height: 994,
        device: "desktop",
      },
      {
        src: "/work/absentify-teams/03.webp",
        alt: {
          pt: "Tipos de ausência no tema escuro",
          en: "Absence types in dark theme",
        },
        width: 1600,
        height: 1001,
        device: "desktop",
      },
    ],
    links: [],
    order: 29,
  },

  // ───────────────────────── Alto Molócuè ─────────────────────────
  {
    slug: "alto-molocue-website",
    hidden: true,
    name: { pt: "Alto Molócuè – Website Institucional", en: "Alto Molócuè – District Website" },
    tagline: {
      pt: "Protótipo de site institucional para o distrito de Alto Molócuè, com notícias, anúncios oficiais e informação do distrito.",
      en: "Prototype institutional website for Alto Molócuè district, with news, official notices and district information.",
    },
    period: "2022",
    status: "prototype",
    categories: ["govtech"],
    tech: ["HTML/CSS", "JavaScript"],
    role: {
      pt: "Programador e coordenação do trabalho por pull requests",
      en: "Developer and coordination of the work through pull requests",
    },
    authorship: "lead",
    problem: {
      pt: "O distrito não tinha um sítio único online para divulgar concursos públicos, vagas, notícias e informação institucional.",
      en: "The district had no single place online to publish public tenders, vacancies, news and institutional information.",
    },
    solution: {
      pt: "Um site estático de seis páginas, feito numa semana a partir de um template livre: início, município, distrito, notícias, anúncios e contactos. Adaptei o template e criei as páginas; um colega fez a página do distrito, integrada por pull request.",
      en: "A six-page static site, built in a week from a free template: home, municipality, district, news, notices and contacts. I adapted the template and built the pages; a colleague did the district page, merged through a pull request.",
    },
    decisions: [
      {
        title: {
          pt: "Site estático, sem backend",
          en: "Static site, no backend",
        },
        body: {
          pt: "HTML, CSS e jQuery podem ser alojados de graça e não precisam de manutenção de servidor.",
          en: "HTML, CSS and jQuery can be hosted for free and need no server maintenance.",
        },
      },
      {
        title: {
          pt: "Filtros por separadores nos anúncios",
          en: "Tab filters on notices",
        },
        body: {
          pt: "Concursos e vagas separam-se por separadores em JavaScript, sem recarregar a página.",
          en: "Tenders and vacancies are split into JavaScript tabs, without reloading the page.",
        },
      },
      {
        title: {
          pt: "Branches e pull requests mesmo num projecto pequeno",
          en: "Branches and pull requests even on a small project",
        },
        body: {
          pt: "Cinco pull requests para integrar o trabalho de dois programadores sem pisar o trabalho um do outro.",
          en: "Five pull requests to merge two developers' work without overwriting each other.",
        },
      },
    ],
    results: [
    ],
    images: [
      {
        src: "/work/alto-molocue-website/01.webp",
        alt: {
          pt: "Página inicial com foto da vila e filtros de natureza, desenvolvimento e turismo",
          en: "Home page with a photo of the town and nature, development and tourism filters",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/alto-molocue-website/02.webp",
        alt: {
          pt: "Página inicial no telemóvel",
          en: "Home page on a phone",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
      {
        src: "/work/alto-molocue-website/03.webp",
        alt: {
          pt: "Página do governo do distrito de Alto Molócuè",
          en: "Alto Molócuè district government page",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/alto-molocue-website/04.webp",
        alt: {
          pt: "Anúncios governamentais no telemóvel, com separadores de concursos e vagas",
          en: "Government notices on a phone, with tenders and vacancies tabs",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
    ],
    links: [],
    order: 30,
  },

  // ───────────────────────── E.Acacia ─────────────────────────
  {
    slug: "e-acacia",
    name: { pt: "e-Acácia – Portal do Munícipe de Maputo", en: "e-Acácia – Maputo Citizen Portal" },
    tagline: {
      pt: "Portal e app oficiais do Conselho Municipal de Maputo para pagar impostos autárquicos e tratar de pedidos municipais sem filas.",
      en: "Maputo City Council's official portal and app for paying municipal taxes and handling municipal requests without queues.",
    },
    period: "2025–2026",
    status: "production",
    categories: ["govtech"],
    tech: [],
    role: {
      pt: "Consultor de software (TechSolutions): revisão, testes e submissão da app na App Store e no Google Play",
      en: "Software consultant (TechSolutions): review, testing and App Store / Google Play submission of the app",
    },
    authorship: "consulting",
    client: "Conselho Municipal de Maputo",
    partners: ["TechSolutions"],
    problem: {
      pt: "Pagar impostos autárquicos em Maputo obrigava a deslocações e filas. O município queria que munícipes e empresas pudessem consultar cobranças, pagar e acompanhar pedidos a qualquer hora, e que os gestores tivessem indicadores de arrecadação.",
      en: "Paying municipal taxes in Maputo meant trips and queues. The council wanted citizens and companies to check charges, pay and track requests at any time, and managers to have revenue indicators.",
    },
    solution: {
      pt: "O e-Acácia junta, no portal e na app, o Imposto Predial Autárquico (consulta de imóveis, cálculo automático, pagamento e pedidos de isenção), o Imposto Autárquico de Veículos (pagamento, transferência de titularidade e histórico), a Taxa por Actividade Económica, o licenciamento de transporte público, o agendamento de vistorias e a verificação da autenticidade de documentos emitidos pelo município. Pela TechSolutions, fiz a revisão e os testes da app e preparei a sua submissão nas lojas.",
      en: "In the portal and app, e-Acácia brings together the municipal property tax (property lookup, automatic calculation, payment and exemption requests), the municipal vehicle tax (payment, ownership transfer and history), the economic activity fee, public transport licensing, inspection booking and verification of documents issued by the council. Through TechSolutions, I reviewed and tested the app and prepared its store submission.",
    },
    decisions: [
      {
        title: { pt: "Autenticação com código OTP", en: "Authentication with an OTP code" },
        body: {
          pt: "Além da palavra-passe, a app pede um código de verificação, porque trata pagamentos e dados fiscais de munícipes e empresas.",
          en: "On top of the password, the app asks for a verification code, because it handles payments and tax data for citizens and companies.",
        },
      },
      {
        title: { pt: "Importação em lote por Excel para gestores", en: "Bulk Excel import for managers" },
        body: {
          pt: "Gestores municipais podem carregar veículos e viaturas de transporte por ficheiro Excel, em vez de registar um a um.",
          en: "Council managers can load vehicles and public transport fleets from an Excel file instead of registering them one by one.",
        },
      },
      {
        title: { pt: "Eliminação de conta pelo próprio utilizador", en: "Self-service account deletion" },
        body: {
          pt: "O munícipe pode pedir a eliminação da conta na própria app ou por email, como exigem as lojas e a protecção de dados.",
          en: "Citizens can request account deletion in the app itself or by email, as the stores and data protection rules require.",
        },
      },
    ],
    results: [
      {
        value: "500+",
        label: { pt: "downloads da app no Google Play", en: "app downloads on Google Play" },
        source: { pt: "página da app no Google Play (Out 2026)", en: "Google Play app page (Oct 2026)" },
        url: "https://play.google.com/store/apps/details?id=mz.cmmaputo.eacacia",
      },
    ],
    images: [
      {
        src: "/work/e-acacia/01.webp",
        alt: {
          pt: "Página inicial do Portal do Munícipe e-Acácia: \"Serviços municipais na sua mão\", com botões para criar conta e ver serviços",
          en: "e-Acácia Citizen Portal home page: \"Municipal services in your hand\", with buttons to create an account and see services",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
    ],
    links: [
      { label: { pt: "Portal e-Acácia", en: "e-Acácia portal" }, href: "https://www.eacacia.gov.mz/" },
      { label: { pt: "App no Google Play", en: "App on Google Play" }, href: "https://play.google.com/store/apps/details?id=mz.cmmaputo.eacacia" },
    ],
    order: 31,
  },
];
