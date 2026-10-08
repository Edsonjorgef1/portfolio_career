import type { L } from "@/types/content";

export const SITE_URL = "https://portfolio.edsonfrancisco.site";

export const PERSON = {
  name: "Edson Francisco",
  title: { pt: "Digital Systems Architect", en: "Digital Systems Architect" } satisfies L,
  location: { pt: "Beira, Moçambique", en: "Beira, Mozambique" } satisfies L,
  email: "edsonjorgef1@gmail.com",
  github: "https://github.com/edsonjorgef1",
  linkedin: "https://www.linkedin.com/in/edsonjorgef1",
  site: "https://www.edsonfrancisco.site",
  languages: [
    { name: { pt: "Português", en: "Portuguese" }, level: { pt: "Nativo", en: "Native" } },
    { name: { pt: "Inglês", en: "English" }, level: { pt: "Avançado", en: "Advanced" } },
  ],
};

export const HERO = {
  eyebrow: {
    pt: "Digital Systems Architect · Cofundador do FAMS",
    en: "Digital Systems Architect · Co-founder of FAMS",
  } satisfies L,
  headline: {
    pt: "Desenho e construo sistemas que funcionam no terreno.",
    en: "I design and build systems that work in the field.",
  } satisfies L,
  intro: {
    pt: "Liderança técnica com perfil hands-on: coordeno equipas e projectos com parceiros internacionais e continuo no código todos os dias — backends, APIs e plataformas SaaS para agricultura, instituições públicas, saúde e comunidades em Moçambique, com apps que funcionam sem rede.",
    en: "Hands-on technical leadership: I coordinate teams and projects with international partners and stay in the code every day — backends, APIs and SaaS platforms for agriculture, public institutions, health and communities in Mozambique, with apps that work offline.",
  } satisfies L,
  commitment: {
    pt: "Comprometido em simultâneo com vários projectos privados, nacionais e internacionais de relevância e impacto socioeconómico — do sector privado e agronegócio a instituições públicas e programas de cooperação.",
    en: "Committed in parallel to multiple private, national and international projects of real relevance and socio-economic impact — from private companies and agribusiness to public institutions and development cooperation programmes.",
  } satisfies L,
};

export const ABOUT: { paragraphs: L[] } = {
  paragraphs: [
    {
      pt: "Sou engenheiro de software e arquitecto de sistemas digitais, baseado na Beira. Desde 2021 sou cofundador e responsável técnico do FAMS, a plataforma de gestão de produtores e agronegócio que nasceu de uma iniciativa da GIZ e que mantenho em produção: backend, API das apps de campo, testes e pipeline de deploy.",
      en: "I'm a software engineer and digital systems architect based in Beira, Mozambique. Since 2021 I've been co-founder and technical lead of FAMS, the farmer and agribusiness management platform that grew out of a GIZ initiative and which I keep in production: backend, the API behind the field apps, tests and deploy pipeline.",
    },
    {
      pt: "Antes e à volta do FAMS, construí e mantive APIs para informação legal (JURIS), primeiros socorros (Consultare), referência de pacientes (H-Link) e recursos cristãos (Fonte da Vida), uma plataforma de gestão de queixas para o FUNAE e, hoje, a modernização do sistema académico de um instituto politécnico.",
      en: "Before and around FAMS, I built and maintained APIs for legal information (JURIS), first aid (Consultare), patient referral (H-Link) and Christian resources (Fonte da Vida), a grievance management platform for FUNAE and, today, the modernisation of a polytechnic institute's academic system.",
    },
    {
      pt: "As minhas funções sempre exigiram gestão e coordenação — de equipas, de clientes e de projectos com parceiros como GIZ, NIRAS e Enabel — e nunca deixei a parte técnica. Programo no dia a dia, faço revisão de código, integrações e decisões de arquitectura, acompanho os pipelines de deploy e entro directamente na resolução de problemas em produção. Estou pronto para projectos com coordenação internacional.",
      en: "My roles have always required management and coordination — of teams, clients and projects with partners such as GIZ, NIRAS and Enabel — and I have never left the technical side. I code every day, review code, build integrations, make architecture decisions, watch deploy pipelines and step in directly to fix production problems. I'm ready for internationally coordinated projects.",
    },
    {
      pt: "Trabalho na fronteira entre produto e engenharia. Gosto de problemas complexos e de os resolver com decisões simples que aguentam anos de uso real — sincronização offline, isolamento de dados por empresa, releases pequenas e frequentes, e documentação que a próxima pessoa consegue seguir.",
      en: "I work where product meets engineering. I enjoy complex problems and solving them with simple decisions that survive years of real use — offline sync, per-company data isolation, small and frequent releases, and documentation the next person can follow.",
    },
  ],
};

export type ExperienceItem = {
  company: string;
  role: L;
  period: L;
  bullets: L[];
};

/** Career history as stated by Edson; metrics without a source were removed. */
export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "FAMS – Farmer & Agent Management System",
    role: {
      pt: "Cofundador · Director de Tecnologia e Produto · Programador líder",
      en: "Co-founder · Chief Technology & Product Officer · Lead developer",
    },
    period: { pt: "2021 – Presente", en: "2021 – Present" },
    bullets: [
      {
        pt: "Responsável técnico e principal programador do backend Laravel, da API mobile, das migrations, dos testes e do CI/CD.",
        en: "Technical lead and main developer of the Laravel backend, mobile API, migrations, tests and CI/CD.",
      },
      {
        pt: "99 versões publicadas entre Abril de 2021 e Setembro de 2026, com changelog em PT/EN visível para os clientes.",
        en: "99 releases shipped between April 2021 and September 2026, with a PT/EN changelog visible to customers.",
      },
      {
        pt: "Mais de 55 000 produtores digitalizados em 7 províncias e 9 cadeias de valor (metade mulheres), mais de 10 000 insumos distribuídos e rastreados e até US$ 1,7 milhões em pagamentos acumulados aos produtores, registados no FAMS.",
        en: "More than 55,000 farmers digitised across 7 provinces and 9 value chains (half of them women), over 10,000 inputs distributed and tracked, and up to US$1.7 million in cumulative payments to farmers, recorded in FAMS.",
      },
      {
        pt: "Contribui para os ODS 2, 8, 9 e 12 (e, de forma complementar, 1, 5, 10 e 16): produtividade e rendimento dos pequenos produtores, pagamentos transparentes, cadeias de valor digitais e rastreabilidade do produtor à indústria.",
        en: "Contributes to SDGs 2, 8, 9 and 12 (and, as complementary goals, 1, 5, 10 and 16): smallholder productivity and income, transparent payments, digital value chains and traceability from farmer to factory.",
      },
      {
        pt: "Casos de uso de rastreabilidade: mel (MHC), do apicultor ao lote processado, e copra (OLIMAX, desde 2024), da compra no campo e na fábrica ao óleo produzido, armazenado e expedido — incluindo importação de dados, relatórios de rastreabilidade e painel de impacto com métricas.",
        en: "Traceability use cases: honey (MHC), from beekeeper to processed batch, and copra (OLIMAX, since 2024), from field and factory-gate purchases to oil produced, stored and shipped — including data import, traceability reports and an impact dashboard with metrics.",
      },
      {
        pt: "Mapeamento georreferenciado dos campos de produção e dossiê do produtor, com cartão de identificação do produtor.",
        en: "Geo-referenced mapping of production fields and a farmer dossier, with a farmer ID card.",
      },
      {
        pt: "Evolução para SaaS multi-empresa (FAMS Mahala); em preparação, um sistema de credit score para os produtores.",
        en: "Move to multi-tenant SaaS (FAMS Mahala); a farmer credit-scoring system is planned next.",
      },
      {
        pt: "Implementação e formação no terreno para empresas de agronegócio, com parceiros como GIZ, NIRAS e COMO Consult.",
        en: "Field implementation and training for agribusiness companies, with partners such as GIZ, NIRAS and COMO Consult.",
      },
    ],
  },
  {
    company: "EQUIP Moçambique – Associação Empoderando Moçambique",
    role: { pt: "Gestor de TI · Líder do Departamento de Tecnologia", en: "IT Manager · Technology Department Lead" },
    period: { pt: "Nov 2022 – Presente", en: "Nov 2022 – Present" },
    bullets: [
      {
        pt: "Lidero a equipa de tecnologia que desenvolve e opera os produtos da associação (FAMS, Kukura, Abastece, JURIS, Fonte da Vida).",
        en: "Lead the technology team that builds and runs the association's products (FAMS, Kukura, Abastece, JURIS, Fonte da Vida).",
      },
      {
        pt: "Gestão e coordenação sem largar o código: programação diária, revisão de código, integrações, decisões de arquitectura, acompanhamento dos pipelines de deploy e resolução directa de problemas em produção.",
        en: "Management and coordination without leaving the code: daily programming, code review, integrations, architecture decisions, watching deploy pipelines and fixing production problems directly.",
      },
      {
        pt: "Supervisão técnica do JURIS em produção, incluindo o Juris Bot no WhatsApp (lançado a 30 Set 2026), e governação de TI: segurança, fornecedores e melhoria contínua.",
        en: "Technical supervision of JURIS in production, including Juris Bot on WhatsApp (launched 30 Sep 2026), and IT governance: security, vendors and continuous improvement.",
      },
      {
        pt: "Coordenação técnica de projectos com parceiros internacionais como GIZ, NIRAS e Enabel — por exemplo, a implementação do FAMS em seis agronegócios apoiados pela NIRAS no VaMoz Competir (2025–2026).",
        en: "Technical coordination of projects with international partners such as GIZ, NIRAS and Enabel — for example, the FAMS rollout to six agribusinesses supported by NIRAS under VaMoz Competir (2025–2026).",
      },
    ],
  },
  {
    company: "NIRAS – VaMoz Competir (GIZ) · consultoria",
    role: {
      pt: "Especialista Técnico Nacional em Digitalização",
      en: "National Short-Term Expert for Digitalisation",
    },
    period: { pt: "Out 2025 – Jul 2026", en: "Oct 2025 – Jul 2026" },
    bullets: [
      {
        pt: "Coordenação da implementação do FAMS nas empresas apoiadas pela NIRAS no VaMoz Competir, um projecto da GIZ encomendado pelo BMZ e cofinanciado pela UE.",
        en: "Coordinated the FAMS rollout to the companies supported by NIRAS under VaMoz Competir, a GIZ project commissioned by BMZ and co-financed by the EU.",
      },
      {
        pt: "Missões de campo na DREAM Agro, Green Agro Commodities, PROIMAC e Moz Agri: configuração, formação em registo de produtores com georreferenciação e seguimento da adopção.",
        en: "Field missions at DREAM Agro, Green Agro Commodities, PROIMAC and Moz Agri: configuration, training in farmer registration with georeferencing, and adoption follow-up.",
      },
      {
        pt: "Acesso directo da NIRAS e da equipa de Monitoria e Avaliação da GIZ aos dados do FAMS, e exportação das presenças para a análise GIZ/Reframe.",
        en: "Direct FAMS data access for NIRAS and GIZ's Monitoring and Evaluation team, and attendance exports for the GIZ/Reframe analysis.",
      },
    ],
  },
  {
    company: "TechSolutions, Lda (freelance)",
    role: { pt: "Programador e consultor técnico", en: "Developer & technical consultant" },
    period: { pt: "2025 – 2026", en: "2025 – 2026" },
    bullets: [
      {
        pt: "FUNAE — plataforma de gestão de queixas e reclamações (MGQR): atribuição automática, notificações, login multicanal e grande parte do frontend Vue.",
        en: "FUNAE — grievance redress platform (MGQR): automatic assignment, notifications, multichannel login and much of the Vue frontend.",
      },
      {
        pt: "E.Acacia — revisão, testes e submissão na App Store e Google Play de uma app de pagamento de taxas municipais.",
        en: "E.Acacia — review, testing and App Store / Google Play submission of a municipal fee payment app.",
      },
    ],
  },
  {
    company: "GIZ – ProEcon (com COMO Consult) · consultoria",
    role: { pt: "Consultor, formador e líder técnico do FAMS", en: "Consultant, trainer and FAMS technical lead" },
    period: { pt: "Fev 2021 – Nov 2023", en: "Feb 2021 – Nov 2023" },
    bullets: [
      {
        pt: "Implementação do FAMS em dez agronegócios de quatro cadeias de valor: levantamento de requisitos, migração de dados, configuração, formação e suporte.",
        en: "FAMS rollout to ten agribusinesses in four value chains: requirements, data migration, configuration, training and support.",
      },
      {
        pt: "Os pedidos destes clientes tornaram-se módulos que programei no backend; em 2022 a empresa foi seleccionada num concurso nacional da GIZ para implementar o FAMS.",
        en: "Requests from these clients became modules I built in the backend; in 2022 the company was selected in a GIZ national tender to implement FAMS.",
      },
      {
        pt: "Sociedade de Mutuali (2023) — fábrica de fibra de algodão: registo de produtores, insumos a crédito, compra de algodão de primeira e segunda qualidade com abate de dívida, transporte, armazenamento, produção e classificação da qualidade.",
        en: "Sociedade de Mutuali (2023) — cotton fibre factory: farmer registration, inputs on credit, first- and second-grade cotton purchases with debt deduction, transport, storage, production and quality grading.",
      },
    ],
  },
  {
    company: "TechSolutions, Lda",
    role: { pt: "Programador e analista de sistemas", en: "Programmer & systems analyst" },
    period: { pt: "Fev 2022 – Jun 2022", en: "Feb 2022 – Jun 2022" },
    bullets: [
      {
        pt: "Djobar — plataforma de recrutamento em Laravel: testes cronometrados a candidatos, SMS em fila, importação em massa e agendamento de entrevistas.",
        en: "Djobar — Laravel recruitment platform: timed candidate tests, queued SMS, bulk import and interview scheduling.",
      },
    ],
  },
  {
    company: "EQUIP Moçambique – Associação Empoderando Moçambique",
    role: {
      pt: "Técnico de implementação de sistemas e programador",
      en: "Systems implementation technician & software developer",
    },
    period: { pt: "Mai 2019 – Set 2022", en: "May 2019 – Sep 2022" },
    bullets: [
      {
        pt: "APIs e back-offices para Consultare, JURIS, H-Link, Fonte da Vida e Start Escolar.",
        en: "APIs and back-offices for Consultare, JURIS, H-Link, Fonte da Vida and Start Escolar.",
      },
      {
        pt: "Implementação de sistemas e suporte à operação dos serviços digitais da associação.",
        en: "System implementation and operational support for the association's digital services.",
      },
    ],
  },
  {
    company: "ENSYS (Enterprise Systems & Development), Lda",
    role: { pt: "Estágio em sistemas e monitoria digital", en: "Systems & digital monitoring intern" },
    period: { pt: "Out 2018 – Nov 2018", en: "Oct 2018 – Nov 2018" },
    bullets: [
      {
        pt: "Sistemas de controlo, monitoria e videovigilância de viaturas.",
        en: "Vehicle control, monitoring and video surveillance systems.",
      },
    ],
  },
];

export const EDUCATION: { degree: L; institution: string }[] = [
  {
    degree: {
      pt: "Licenciatura em Engenharia Informática (finalista, defesa de monografia pendente)",
      en: "BSc in Computer Engineering (finalist, thesis defence pending)",
    },
    institution: "Universidade Zambeze – Beira",
  },
];

export const AWARDS: { title: L; issuer: string; date: L; place: L }[] = [
  {
    title: { pt: "Concurso nacional GIZ — empresa seleccionada para implementar o FAMS", en: "GIZ national tender — company selected to implement FAMS" },
    issuer: "GIZ",
    date: { pt: "2022", en: "2022" },
    place: { pt: "Seleccionada", en: "Selected" },
  },
  {
    title: { pt: "C-YANGA — Melhor Tecnologia e Inovação", en: "C-YANGA — Best Technology and Innovation" },
    issuer: "#HACK Indigitous Beira",
    date: { pt: "Out 2020", en: "Oct 2020" },
    place: { pt: "1º lugar", en: "1st place" },
  },
  {
    title: { pt: "DONANTE — plataforma de ligação de doadores", en: "DONANTE — donor connection platform" },
    issuer: "#HACK Indigitous Beira",
    date: { pt: "Nov 2021", en: "Nov 2021" },
    place: { pt: "2º lugar", en: "2nd place" },
  },
];

/** "Now" page. Each item is backed by recent dated activity (`evidence`). */
export const NOW = {
  updated: "2026-10-08",
  items: [
    {
      title: { pt: "FAMS — novo website e FAMS Mahala (freemium)", en: "FAMS — new website and FAMS Mahala (freemium)" },
      body: {
        pt: "Trabalho contínuo no FAMS, agora focado no lançamento do novo website do FAMS e da plataforma freemium FAMS Mahala, o plano gratuito multi-empresa com caminho para planos pagos.",
        en: "Ongoing work on FAMS, now focused on launching the new FAMS website and the freemium FAMS Mahala platform, the free multi-tenant plan with a path to paid plans.",
      },
      evidence: { pt: "em curso, Out 2026", en: "in progress, Oct 2026" },
    },
    {
      title: { pt: "FAMS na MHC — em produção e no terreno", en: "FAMS at MHC — in production and in the field" },
      body: {
        pt: "O FAMS na Mozambique Honey Company (Eco-Micaia) já está em produção, em fase de deployment e uso efectivo no campo: cada balde ligado ao apicultor na compra e seguido até à garrafa. Falta apenas rever a parte de stock e controlo de produção na fábrica.",
        en: "FAMS at Mozambique Honey Company (Eco-Micaia) is already in production, being deployed and used in the field: each bucket linked to the beekeeper at purchase and followed to the bottle. Only stock and factory production control are still under review.",
      },
      evidence: { pt: "missão na MHC 21–24 Set 2026; v114 a 29 Set 2026", en: "MHC mission 21–24 Sep 2026; v114 on 29 Sep 2026" },
    },
    {
      title: { pt: "SIGA — sistema académico do Instituto Politécnico Planalto", en: "SIGA — academic system for Instituto Politécnico Planalto" },
      body: {
        pt: "Modernizar um sistema PHP herdado: segurança, testes automáticos às facturas e propinas, migração para utf8mb4 e deploy em Coolify.",
        en: "Modernising an inherited PHP system: security, automated tests for invoices and fees, utf8mb4 migration and a Coolify deploy.",
      },
      evidence: { pt: "actualização a 29 Set 2026", en: "updated on 29 Sep 2026" },
    },
    {
      title: { pt: "JURIS — Juris Bot no WhatsApp", en: "JURIS — Juris Bot on WhatsApp" },
      body: {
        pt: "Supervisão da equipa técnica que mantém o JURIS em produção, agora com o Juris Bot, um novo sistema de chat no WhatsApp lançado a 30 de Setembro de 2026.",
        en: "Supervising the technical team that keeps JURIS in production, now with Juris Bot, a new chat system on WhatsApp launched on 30 September 2026.",
      },
      evidence: { pt: "lançamento a 30 Set 2026", en: "launched on 30 Sep 2026" },
    },
  ],
};

/** Top 5 CliftonStrengths (Gallup), assessed 20 Jun 2024. Certificates in /public/cliftonstrengths-*.pdf. */
export const STRENGTHS: { name: L; summary: L }[] = [
  {
    name: { pt: "Estratégico", en: "Strategic" },
    summary: {
      pt: "cria caminhos alternativos e detecta rapidamente padrões e questões relevantes",
      en: "creates alternative ways forward and quickly spots relevant patterns and issues",
    },
  },
  {
    name: { pt: "Positivo", en: "Positivity" },
    summary: {
      pt: "entusiasmo contagiante que mobiliza as equipas",
      en: "contagious enthusiasm that gets teams moving",
    },
  },
  {
    name: { pt: "Carisma", en: "Woo" },
    summary: {
      pt: "gosta de conhecer pessoas novas e de criar ligação",
      en: "enjoys meeting new people and building connection",
    },
  },
  {
    name: { pt: "Organização", en: "Arranger" },
    summary: {
      pt: "organiza com flexibilidade pessoas e recursos para máxima produtividade",
      en: "arranges people and resources flexibly for maximum productivity",
    },
  },
  {
    name: { pt: "Excelência", en: "Maximizer" },
    summary: {
      pt: "transforma o que é bom em excelente",
      en: "turns something strong into something superb",
    },
  },
];
