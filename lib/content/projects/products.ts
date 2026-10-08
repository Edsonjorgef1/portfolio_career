import type { Project } from "@/types/content";

export const projects: Project[] = [
  // ───────────────────────────────────────────── Karibu Menu
  {
    slug: "karibu-menu",
    name: "Karibu Menu",
    tagline: {
      pt: "Menu digital por QR Code e pedidos à mesa para restaurantes e pequenos negócios (antes Manna Software).",
      en: "QR-code digital menu and table ordering for restaurants and small businesses (formerly Manna Software).",
    },
    period: "2025–2026",
    status: "development",
    categories: ["hospitality", "saas"],
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Docker"],
    role: {
      pt: "Líder técnico e co-criador do produto",
      en: "Technical lead and product co-creator",
    },
    authorship: "main",
    problem: {
      pt: "Restaurantes e pequenos negócios em Moçambique reimprimem a carta sempre que muda um preço e não têm visão sobre os pedidos à mesa. As soluções estrangeiras assumem pagamento por cartão e cortam o serviço quando a mensalidade falha.",
      en: "Restaurants and small businesses in Mozambique reprint the menu every time a price changes and have no view of table orders. Foreign tools assume card payments and cut the service when a subscription payment fails.",
    },
    solution: {
      pt: "Plataforma SaaS multi-empresa em Laravel: cada negócio gere o seu catálogo, gera QR Codes por mesa e recebe pedidos em tempo real. O cliente acompanha o estado do pedido (recebido, em preparo, pronto, entregue) no telemóvel, em PT ou EN. Produto co-detido; o nome Manna Software passou a Karibu Menu em 2026.",
      en: "Multi-tenant Laravel SaaS: each business manages its catalogue, generates per-table QR codes and receives orders in real time. The customer follows the order status (received, preparing, ready, delivered) on their phone, in PT or EN. Co-owned product; the Manna Software name became Karibu Menu in 2026.",
    },
    decisions: [
      {
        title: {
          pt: "\"Modo Mahala\" em vez de bloquear o menu",
          en: "\"Mahala mode\" instead of locking the menu",
        },
        body: {
          pt: "Uma licença suspensa ou expirada não desliga o menu: mostra um número limitado de produtos e um aviso discreto. Um QR morto na mesa prejudica o dono à frente dos clientes e torna a cobrança mais difícil, não mais fácil.",
          en: "A suspended or expired licence does not switch the menu off: it shows a limited number of products and a discreet notice. A dead QR code on the table hurts the owner in front of customers and makes collecting payment harder, not easier.",
        },
      },
      {
        title: {
          pt: "Uma única fonte de verdade para os planos",
          en: "One source of truth for plans",
        },
        body: {
          pt: "A matriz de funcionalidades por plano vive em config/plans.php, é lida em runtime por um PlanResolver e aplicada por middleware. A cache é invalidada quando a licença muda, por isso mudar um plano não exige tocar em controllers.",
          en: "The per-plan feature matrix lives in config/plans.php, is read at runtime by a PlanResolver and enforced by middleware. The cache is invalidated when the licence changes, so changing a plan never means touching controllers.",
        },
      },
      {
        title: {
          pt: "Licenciamento manual em vez de gateway de pagamento",
          en: "Manual licensing instead of a payment gateway",
        },
        body: {
          pt: "O gateway de pagamento foi retirado: os pagamentos (M-Pesa, transferência, dinheiro) são confirmados fora do sistema e registados pelo super-admin, com histórico na tabela de pagamentos. Ficaram contratos de gateway para ligar um fornecedor mais tarde.",
          en: "The payment gateway was removed: payments (M-Pesa, bank transfer, cash) are confirmed outside the system and recorded by the super-admin, with history kept in the payments table. Gateway contracts remain so a provider can be plugged in later.",
        },
      },
      {
        title: {
          pt: "Migração aditiva de \"restaurante\" para \"negócio\"",
          en: "Additive migration from \"restaurant\" to \"business\"",
        },
        body: {
          pt: "Para servir lojas e outros negócios, o domínio foi generalizado com migrações aditivas e aliases para as rotas antigas, cobertos por testes. Nenhum URL ou ID existente partiu e nunca foi preciso recriar a base de dados.",
          en: "To serve shops and other businesses, the domain was generalised with additive migrations and aliases for the old routes, covered by tests. No existing URL or ID broke and the database never had to be rebuilt.",
        },
      },
      {
        title: {
          pt: "Pedidos em tempo real com Server-Sent Events",
          en: "Real-time orders with Server-Sent Events",
        },
        body: {
          pt: "O painel do negócio recebe novos pedidos e mudanças de estado por um stream SSE alimentado por eventos Laravel. É um canal só de ida, suficiente para este caso e sem servidor de WebSockets para manter.",
          en: "The business dashboard receives new orders and status changes through an SSE stream fed by Laravel events. It is a one-way channel, enough for this case, with no WebSocket server to run.",
        },
      },
    ],
    results: [
      {
        value: "73",
        label: { pt: "migrações de base de dados", en: "database migrations" },
        source: {
          pt: "database/migrations, repositório karibu-menu",
          en: "database/migrations, karibu-menu repository",
        },
      },
      {
        value: "37",
        label: {
          pt: "ficheiros de teste (a auditoria de Ago 2026 só encontrou o teste de exemplo)",
          en: "test files (the Aug 2026 audit found only the example test)",
        },
        source: {
          pt: "tests/ e docs/AUDIT_AND_PLAN.md, repositório karibu-menu",
          en: "tests/ and docs/AUDIT_AND_PLAN.md, karibu-menu repository",
        },
      },
      {
        value: "26",
        label: { pt: "modelos de dados", en: "data models" },
        source: {
          pt: "app/Models, repositório karibu-menu",
          en: "app/Models, karibu-menu repository",
        },
      },
    ],
    learnings: {
      pt: "Num mercado onde o pagamento é muitas vezes manual, a regra de negócio certa foi degradar o serviço com suavidade em vez de o cortar. E generalizar um domínio que já está em uso só é seguro com migrações aditivas e testes escritos antes.",
      en: "In a market where payment is often manual, the right business rule was to degrade the service gently instead of cutting it. And generalising a domain that is already in use is only safe with additive migrations and tests written first.",
    },
    sdgs: [
      {
        goal: 8,
        primary: true,
        contribution: {
          pt: "Carta digital, pedidos à mesa e controlo de estado do pedido dão a pequenos restaurantes e negócios ferramentas que antes só existiam em soluções estrangeiras caras.",
          en: "A digital menu, table ordering and order-status tracking give small restaurants and businesses tools that used to exist only in expensive foreign products.",
        },
      },
    ],
    images: [
      {
        src: "/work/karibu-menu/01.webp",
        alt: {
          pt: "Estado do pedido no telemóvel do cliente: \"Em preparo\", mesa, hora, tempo estimado de preparo e selector PT/EN",
          en: "Order status on the customer's phone: \"Preparing\", table, time, estimated preparation time and PT/EN selector",
        },
        width: 862,
        height: 1766,
        device: "mobile",
      },
      {
        src: "/work/karibu-menu/02.webp",
        alt: {
          pt: "Detalhe do pedido no telemóvel com número, mesa, pratos, quantidades e preços em meticais",
          en: "Order detail on a phone with order number, table, dishes, quantities and prices in meticais",
        },
        width: 980,
        height: 1814,
        device: "mobile",
      },
      {
        src: "/work/karibu-menu/03.webp",
        alt: {
          pt: "Cartão de pedido \"Em preparo\" com pratos locais, observações (\"sem sal\") e total em meticais",
          en: "\"Preparing\" order card with local dishes, notes (\"no salt\") and total in meticais",
        },
        width: 1240,
        height: 1258,
        device: "desktop",
      },
      {
        src: "/work/karibu-menu/04.webp",
        alt: {
          pt: "Cartão de pedido com o estado \"Entregue\" e a lista de itens",
          en: "Order card with the \"Delivered\" status and the item list",
        },
        width: 1252,
        height: 1294,
        device: "desktop",
      },
      {
        src: "/work/karibu-menu/05.webp",
        alt: {
          pt: "Cartão de pedido com o estado \"Pronto\" e o total",
          en: "Order card with the \"Ready\" status and the total",
        },
        width: 1284,
        height: 922,
        device: "desktop",
      },
      {
        src: "/work/karibu-menu/06.webp",
        alt: {
          pt: "Cartão de pedido com o estado \"Recebido\" antes de a cozinha o aceitar",
          en: "Order card with the \"Received\" status before the kitchen accepts it",
        },
        width: 1290,
        height: 1058,
        device: "desktop",
      },
    ],
    links: [],
    order: 70,
  },

  // ───────────────────────────────────────────── MyGym / FF Gym
  {
    slug: "mygym",
    name: "MyGym (FF Gym)",
    tagline: {
      pt: "Gestão de membros, mensalidades, pagamentos e check-in por QR Code para um ginásio na Beira.",
      en: "Member, subscription, payment and QR check-in management for a gym in Beira.",
    },
    period: "2025–2026",
    status: "development",
    categories: ["hospitality"],
    tech: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    role: {
      pt: "Programador full-stack (projecto individual)",
      en: "Full-stack developer (solo project)",
    },
    authorship: "lead",
    client: "FF Gym",
    problem: {
      pt: "O ginásio geria membros e pagamentos à mão. Era difícil saber quem estava em dívida, controlar a assiduidade e fechar o mês.",
      en: "The gym managed members and payments by hand. It was hard to know who owed money, track attendance and close the month.",
    },
    solution: {
      pt: "Aplicação web com membros, planos em meticais, pagamentos (M-Pesa, e-Mola, mKesh, dinheiro, transferência), check-in por QR Code, avisos de vencimento e relatórios exportáveis em Excel e PDF. Chegou-se aqui depois de quatro versões em cerca de três meses.",
      en: "Web app with members, plans priced in meticais, payments (M-Pesa, e-Mola, mKesh, cash, transfer), QR check-in, expiry reminders and reports exported to Excel and PDF. It came after four versions in about three months.",
    },
    decisions: [
      {
        title: {
          pt: "Quatro tentativas até uma stack única",
          en: "Four attempts before settling on one stack",
        },
        body: {
          pt: "React/Vite com Express, depois Flutter com Supabase, depois Ionic/Angular com backend próprio (com um documento a comparar Ionic e Flutter), e por fim Next.js com Prisma. Uma só base de código full-stack web foi o que permitiu entregar: o núcleo (auth, membros, check-in, painel) ficou pronto num dia.",
          en: "React/Vite with Express, then Flutter with Supabase, then Ionic/Angular with its own backend (with a written Ionic vs Flutter comparison), and finally Next.js with Prisma. A single full-stack web codebase is what made delivery possible: the core (auth, members, check-in, dashboard) was built in one day.",
        },
      },
      {
        title: {
          pt: "Modelo de dados com os meios de pagamento locais",
          en: "Data model with local payment methods",
        },
        body: {
          pt: "O schema Prisma tem um enum com M-Pesa, e-Mola, mKesh, dinheiro, transferência e cartão, e os pacotes reais do ginásio (inscrição, mensal, estudante, semanal). Os relatórios somam por meio de pagamento sem campos de texto livre.",
          en: "The Prisma schema has an enum with M-Pesa, e-Mola, mKesh, cash, transfer and card, plus the gym's real packages (registration, monthly, student, weekly). Reports total by payment method without free-text fields.",
        },
      },
      {
        title: {
          pt: "Check-out automático por cron",
          en: "Automatic check-out by cron",
        },
        body: {
          pt: "Os membros raramente fazem check-out. Um cron horário fecha check-ins abertos há mais de 4 horas e, se o dia mudou, fecha-os às 23:59:59, para que as estatísticas de assiduidade façam sentido.",
          en: "Members rarely check out. An hourly cron closes check-ins open for more than 4 hours and, if the day has changed, closes them at 23:59:59, so attendance statistics make sense.",
        },
      },
      {
        title: {
          pt: "Estado do membro calculado, não escrito à mão",
          en: "Member status computed, not typed in",
        },
        body: {
          pt: "Activo, inactivo, suspenso ou irregular é derivado das mensalidades e mostrado a cores nos relatórios, e um cron diário gera os avisos de vencimento.",
          en: "Active, inactive, suspended or irregular is derived from subscriptions and shown in colour in reports, and a daily cron creates the expiry reminders.",
        },
      },
    ],
    results: [
      {
        value: "6",
        label: { pt: "modelos Prisma", en: "Prisma models" },
        source: {
          pt: "prisma/schema.prisma, repositório ffgym-mvp",
          en: "prisma/schema.prisma, ffgym-mvp repository",
        },
      },
      {
        value: "12",
        label: { pt: "grupos de rotas de API", en: "API route groups" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
    ],
    learnings: {
      pt: "Mudar de stack três vezes custou semanas. A lição foi escrever a comparação antes de começar e escolher a opção que deixa entregar o MVP mais cedo, deixando a app móvel para depois.",
      en: "Switching stacks three times cost weeks. The lesson was to write the comparison before starting and pick the option that ships the MVP soonest, leaving the mobile app for later.",
    },
    sdgs: [
      {
        goal: 8,
        primary: true,
        contribution: {
          pt: "Membros, mensalidades e check-in por QR substituem cadernos e folhas de cálculo num pequeno ginásio, com relatórios e meios de pagamento locais (M-Pesa, e-Mola, mKesh).",
          en: "Members, subscriptions and QR check-in replace notebooks and spreadsheets at a small gym, with reports and local payment methods (M-Pesa, e-Mola, mKesh).",
        },
      },
    ],
    images: [
      {
        src: "/work/mygym/01.webp",
        alt: {
          pt: "Ecrã de entrada do MyGym com email e senha",
          en: "MyGym sign-in screen with email and password",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/mygym/02.webp",
        alt: {
          pt: "Ecrã de entrada do MyGym no telemóvel",
          en: "MyGym sign-in screen on a phone",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
    ],
    links: [],
    order: 71,
  },

  // ───────────────────────────────────────────── Hospitality networks
  {
    slug: "hospitality-networks",
    name: { pt: "Redes Wi-Fi para hotelaria", en: "Wi-Fi networks for hotels" },
    tagline: {
      pt: "Starlink, gateways e repetidores Ruijie e routers Tenda para cobrir hotéis inteiros com Wi-Fi gerido na cloud.",
      en: "Starlink, Ruijie gateways and repeaters and Tenda routers to cover whole hotels with cloud-managed Wi-Fi.",
    },
    period: "2024–2025",
    status: "production",
    categories: ["hospitality"],
    tech: ["Networking"],
    role: {
      pt: "Consultor técnico (instalação, configuração e manutenção)",
      en: "Technical consultant (installation, configuration and maintenance)",
    },
    authorship: "consulting",
    partners: ["Bella Villa", "Garden Hotel", "Hotel Ananga"],
    problem: {
      pt: "Hotéis fora das cidades têm vários blocos espalhados, pouca ou nenhuma fibra e Wi-Fi que só chega à recepção. Hóspedes, salas de conferência e piscina partilhavam a mesma rede sem controlo.",
      en: "Hotels outside the cities have several spread-out blocks, little or no fibre, and Wi-Fi that only reaches the reception. Guests, conference rooms and the pool shared one uncontrolled network.",
    },
    solution: {
      pt: "Instalação de Starlink como ligação principal, um gateway Ruijie na recepção e repetidores mesh por bloco, com access points no exterior e na piscina. SSIDs separados por zona (hóspedes, quartos, conferência, piscina) e gestão remota pela Ruijie Cloud, que permite ver clientes e tráfego e resolver falhas sem deslocação.",
      en: "Starlink as the main uplink, a Ruijie gateway at reception and mesh repeaters per block, with access points outdoors and at the pool. Separate SSIDs per zone (guests, rooms, conference, pool) and remote management through Ruijie Cloud, which shows clients and traffic and allows fixing issues without a site visit.",
    },
    decisions: [
      {
        title: {
          pt: "Mesh sem fios entre blocos em vez de cabo",
          en: "Wireless mesh between blocks instead of cable",
        },
        body: {
          pt: "Passar cabo entre blocos separados por jardins e caminhos era caro e lento. Repetidores Ruijie em cadeia a partir do gateway da recepção cobrem cada bloco e podem ser trocados um a um.",
          en: "Running cable between blocks separated by gardens and paths was costly and slow. Ruijie repeaters chained from the reception gateway cover each block and can be replaced one at a time.",
        },
      },
      {
        title: {
          pt: "Um SSID por zona",
          en: "One SSID per zone",
        },
        body: {
          pt: "Separar hóspedes, quartos, conferência e piscina mostra onde está o tráfego e permite limitar uma zona sem afectar as outras.",
          en: "Separating guests, rooms, conference and pool shows where the traffic is and allows limiting one zone without affecting the others.",
        },
      },
      {
        title: {
          pt: "Gestão na cloud para manutenção à distância",
          en: "Cloud management for remote maintenance",
        },
        body: {
          pt: "Os hotéis ficam a horas de estrada. Com a Ruijie Cloud, a topologia, os clientes e o tráfego ficam visíveis de qualquer lugar e muitas falhas resolvem-se sem viagem.",
          en: "The hotels are hours away by road. With Ruijie Cloud, topology, clients and traffic are visible from anywhere and many issues are fixed without a trip.",
        },
      },
    ],
    results: [
      {
        value: "1 + 7",
        label: {
          pt: "gateway e repetidores Ruijie instalados na Bella Villa",
          en: "Ruijie gateway and repeaters installed at Bella Villa",
        },
        source: {
          pt: "relatório de instalação nos hotéis",
          en: "hotel installation report",
        },
      },
      {
        value: "709",
        label: {
          pt: "dispositivos ligados ao Wi-Fi do Garden Hotel numa semana",
          en: "devices connected to the Garden Hotel Wi-Fi in one week",
        },
        source: {
          pt: "painel Ruijie Cloud, 12–18 Mai 2025",
          en: "Ruijie Cloud dashboard, 12–18 May 2025",
        },
      },
    ],
    sdgs: [
      {
        goal: 9,
        primary: true,
        contribution: {
          pt: "Starlink como ligação principal e redes Wi-Fi geridas na cloud levam conectividade a hotéis fora das cidades, onde a fibra não chega.",
          en: "Starlink as the main uplink and cloud-managed Wi-Fi bring connectivity to hotels outside the cities, where fibre does not reach.",
        },
      },
    ],
    images: [
      {
        src: "/work/hospitality-networks/01.webp",
        alt: {
          pt: "Painel Ruijie Cloud do Garden Hotel com clientes, tráfego de 7 dias e ranking por SSID",
          en: "Garden Hotel Ruijie Cloud dashboard with clients, 7-day traffic and ranking by SSID",
        },
        width: 1600,
        height: 982,
        device: "desktop",
      },
      {
        src: "/work/hospitality-networks/02.webp",
        alt: {
          pt: "Topologia da rede da Bella Villa: gateway na recepção e repetidores em cadeia por bloco, piscina e exterior",
          en: "Bella Villa network topology: gateway at reception and chained repeaters per block, pool and outdoors",
        },
        width: 758,
        height: 1558,
        device: "desktop",
      },
      {
        src: "/work/hospitality-networks/03.webp",
        alt: {
          pt: "Mapa do Garden Hotel com a posição dos access points por bloco e a Starlink na recepção",
          en: "Garden Hotel map with access point positions per block and Starlink at reception",
        },
        width: 1600,
        height: 612,
        device: "desktop",
      },
      {
        src: "/work/hospitality-networks/04.webp",
        alt: {
          pt: "Mapa de access points de um hotel: restaurante, conferência, cozinha, piscina e tendas",
          en: "Hotel access point map: restaurant, conference, kitchen, pool and tents",
        },
        width: 1032,
        height: 1272,
        device: "desktop",
      },
    ],
    links: [],
    order: 72,
  },

  // ───────────────────────────────────────────── edsonfrancisco.site
  {
    slug: "edsonfrancisco-site",
    name: "edsonfrancisco.site",
    tagline: {
      pt: "Página pessoal bilingue e escura que encaminha cada visitante para o portfólio, o CV ou uma reunião.",
      en: "Bilingual, dark personal page that sends each visitor to the portfolio, the CV or a meeting.",
    },
    period: "2026",
    status: "production",
    categories: [],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    role: { pt: "Autor (produto, design e código)", en: "Author (product, design and code)" },
    authorship: "lead",
    problem: {
      pt: "Parceiros, clientes e programadores chegavam por links diferentes e encontravam páginas diferentes. Faltava um ponto de entrada curto que dissesse quem é o Edson e para onde ir a seguir.",
      en: "Partners, clients and developers arrived through different links and found different pages. There was no short entry point saying who Edson is and where to go next.",
    },
    solution: {
      pt: "Uma página única em Next.js 16, escura por omissão, em PT e EN, com perfil, disponibilidade, cartões para portfólio, CV e agenda, foco actual e vídeos. Foi feita em seis sprints documentados, com agentes de IA a trabalhar em branches separados.",
      en: "A single Next.js 16 page, dark by default, in PT and EN, with profile, availability, cards for portfolio, CV and scheduling, current focus and videos. It was built in six documented sprints, with AI agents working on separate branches.",
    },
    decisions: [
      {
        title: {
          pt: "Tokens compatíveis com shadcn/ui",
          en: "shadcn/ui-compatible tokens",
        },
        body: {
          pt: "As cores são tokens semânticos com os nomes que o shadcn/ui espera, para que novos componentes entrem sem remapear estilos. Ficou registado num ADR.",
          en: "Colours are semantic tokens named the way shadcn/ui expects, so new components drop in without remapping styles. It is recorded in an ADR.",
        },
      },
      {
        title: {
          pt: "Só modo escuro na v1, com caminho para o claro",
          en: "Dark only in v1, with a path to light mode",
        },
        body: {
          pt: "Lançar só o tema escuro reduziu o trabalho de design; uma variante CSS já prevista permite acrescentar o claro sem refactor.",
          en: "Shipping only the dark theme cut design work; a CSS variant already in place lets light mode be added without a refactor.",
        },
      },
      {
        title: {
          pt: "Fontes auto-alojadas",
          en: "Self-hosted fonts",
        },
        body: {
          pt: "A Geist é servida pelo próprio site com next/font/local: sem pedido ao Google Fonts e sem salto de layout ao carregar.",
          en: "Geist is served by the site itself through next/font/local: no Google Fonts request and no layout shift on load.",
        },
      },
    ],
    results: [
      {
        value: "6",
        label: { pt: "sprints documentados", en: "documented sprints" },
        source: {
          pt: "pasta sprints/, repositório edsonfrancisco-site",
          en: "sprints/ folder, edsonfrancisco-site repository",
        },
      },
    ],
    images: [
      {
        src: "/work/edsonfrancisco-site/01.webp",
        alt: {
          pt: "Página inicial escura com nome, título, selector PT/EN e cartões para portfólio, CV e reunião",
          en: "Dark home page with name, title, PT/EN selector and cards for portfolio, CV and meeting",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/edsonfrancisco-site/02.webp",
        alt: {
          pt: "A mesma página no telemóvel, numa só coluna",
          en: "The same page on a phone, in a single column",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
    ],
    links: [
      { label: { pt: "Ver o site", en: "Visit the site" }, href: "https://www.edsonfrancisco.site" },
    ],
    order: 73,
  },

  // ───────────────────────────────────────────── Casa Msika
  {
    slug: "casa-msika",
    name: "Casa Msika Lodge",
    tagline: {
      pt: "Website em WordPress para um lodge de natureza, pesca e descanso em Manica.",
      en: "WordPress website for a nature, fishing and rest-camp lodge in Manica.",
    },
    period: "2022",
    status: "production",
    categories: ["hospitality"],
    tech: ["WordPress"],
    role: {
      pt: "Product Owner e implementação do website",
      en: "Product owner and website implementation",
    },
    authorship: "lead",
    client: "Casa Msika Lodge",
    problem: {
      pt: "O lodge precisava de uma presença online que mostrasse a reserva natural e o acampamento e que levasse os visitantes a contactar para reservar.",
      en: "The lodge needed an online presence that showed the nature reserve and camp and led visitors to get in touch to book.",
    },
    solution: {
      pt: "Website em WordPress com Elementor, com imagem de fundo grande, apresentação do lodge e páginas Sobre e Contacto.",
      en: "WordPress website built with Elementor, with a large hero image, lodge presentation, and About and Contact pages.",
    },
    decisions: [
      {
        title: {
          pt: "WordPress com Elementor em vez de código à medida",
          en: "WordPress with Elementor instead of custom code",
        },
        body: {
          pt: "Um site de apresentação muda sobretudo em textos e fotografias. Um construtor visual deixa o cliente fazer essas mudanças sozinho, e o tema leve hello-elementor evita peso desnecessário.",
          en: "A brochure site mostly changes in text and photos. A visual builder lets the client make those changes alone, and the lightweight hello-elementor theme avoids unnecessary weight.",
        },
      },
    ],
    results: [],
    images: [
      {
        src: "/work/casa-msika/01.webp",
        alt: {
          pt: "Página inicial no telemóvel com o logótipo do lodge e o título \"Private conservancy, fishing and rest camp\"",
          en: "Home page on a phone with the lodge logo and the heading \"Private conservancy, fishing and rest camp\"",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
      {
        src: "/work/casa-msika/02.webp",
        alt: {
          pt: "Página inicial no computador com menu, contactos no topo e secção de boas-vindas",
          en: "Home page on desktop with menu, contact details at the top and welcome section",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
    ],
    links: [{ label: { pt: "Ver o site", en: "Visit the site" }, href: "https://casamsika.com" }],
    order: 74,
  },

  // ───────────────────────────────────────────── GitHub Actions template
  {
    slug: "github-actions-template",
    name: "GitHub Actions Template",
    tagline: {
      pt: "Workflows de CI/CD reutilizáveis para PHP, Laravel, Go e sites estáticos, com deploy por SSH.",
      en: "Reusable CI/CD workflows for PHP, Laravel, Go and static sites, with SSH deployment.",
    },
    period: "2024",
    status: "archived",
    categories: ["reliability"],
    tech: ["GitHub Actions", "PHP", "Laravel"],
    role: { pt: "Autor", en: "Author" },
    authorship: "lead",
    problem: {
      pt: "Cada novo projecto começava com um pipeline de CI copiado de outro e ajustado à pressa. Os passos de teste e de deploy variavam de repositório para repositório.",
      en: "Every new project started with a CI pipeline copied from another one and adjusted in a hurry. Test and deploy steps varied from repository to repository.",
    },
    solution: {
      pt: "Cinco workflows prontos a copiar: PHP, PHP com testes e deploy por SSH para um servidor próprio, Laravel, Go e site estático para GitHub Pages.",
      en: "Five ready-to-copy workflows: PHP, PHP with tests and SSH deployment to your own server, Laravel, Go, and a static site to GitHub Pages.",
    },
    decisions: [
      {
        title: {
          pt: "Deploy só depois de os testes passarem",
          en: "Deploy only after tests pass",
        },
        body: {
          pt: "No workflow PHP com testes, o passo de deploy por SSH depende do job de testes, por isso código partido não chega ao servidor.",
          en: "In the PHP-with-tests workflow, the SSH deploy step depends on the test job, so broken code never reaches the server.",
        },
      },
      {
        title: {
          pt: "Permissões mínimas no deploy para Pages",
          en: "Least privilege for the Pages deploy",
        },
        body: {
          pt: "O workflow estático pede só pages: write e id-token: write e usa concurrency para não haver dois deploys ao mesmo tempo.",
          en: "The static workflow requests only pages: write and id-token: write and uses concurrency so two deploys never run at once.",
        },
      },
      {
        title: {
          pt: "Segredos só por referência",
          en: "Secrets by reference only",
        },
        body: {
          pt: "Host, utilizador e chave SSH vêm de secrets do repositório; o template não tem nenhum valor escrito.",
          en: "Host, user and SSH key come from repository secrets; the template contains no hard-coded value.",
        },
      },
    ],
    results: [
      {
        value: "5",
        label: { pt: "workflows reutilizáveis", en: "reusable workflows" },
        source: {
          pt: "ficheiros .yml, repositório GitHub-Actions-Template",
          en: ".yml files, GitHub-Actions-Template repository",
        },
      },
    ],
    images: [],
    links: [
      {
        label: { pt: "Repositório no GitHub", en: "GitHub repository" },
        href: "https://github.com/Edsonjorgef1/GitHub-Actions-Template",
      },
    ],
    order: 75,
  },

  // ───────────────────────────────────────────── SiteHealth
  {
    slug: "sitehealth",
    name: "SiteHealth",
    tagline: {
      pt: "Scripts Bash que verificam a integridade de sites WordPress num servidor cPanel e repõem o último backup.",
      en: "Bash scripts that check the integrity of WordPress sites on a cPanel server and restore the latest backup.",
    },
    period: "2022",
    status: "prototype",
    categories: ["reliability"],
    tech: ["Bash", "WordPress"],
    role: { pt: "Autor (ferramenta interna)", en: "Author (internal tool)" },
    authorship: "lead",
    problem: {
      pt: "Vários sites WordPress de clientes no mesmo servidor partilhado podiam ser comprometidos por malware. Detectar e repor cada um à mão era lento.",
      en: "Several client WordPress sites on the same shared server could be compromised by malware. Detecting and restoring each one by hand was slow.",
    },
    solution: {
      pt: "Um colega escreveu o primeiro rascunho para um só site; o Edson transformou-o num conjunto de scripts para vários sites. Um script verifica os checksums oficiais do WordPress; outro, pensado para correr por cron, regista cada falha, escolhe o backup cPanel certo e troca a pasta pública. É um protótipo: o último commit diz que faltava testar no servidor.",
      en: "A colleague wrote the first draft for a single site; Edson turned it into a set of scripts for many sites. One script checks the official WordPress checksums; another, meant to run from cron, logs each failure, picks the right cPanel backup and swaps the public folder. It is a prototype: the last commit says it still had to be tested on the server.",
    },
    decisions: [
      {
        title: {
          pt: "Checksums oficiais em vez de antivírus",
          en: "Official checksums instead of antivirus",
        },
        body: {
          pt: "O WP-CLI compara os ficheiros do core com os checksums publicados pelo WordPress. É rápido, não precisa de assinaturas de malware e dá uma resposta clara: saudável ou não.",
          en: "WP-CLI compares core files with the checksums published by WordPress. It is fast, needs no malware signatures and gives a clear answer: healthy or not.",
        },
      },
      {
        title: {
          pt: "Backup escolhido pelo dia da semana",
          en: "Backup chosen by day of the week",
        },
        body: {
          pt: "O script segue a rotação do cPanel (diário, semanal) para ir buscar o backup mais recente que ainda existe.",
          en: "The script follows the cPanel rotation (daily, weekly) to fetch the most recent backup that still exists.",
        },
      },
      {
        title: {
          pt: "Guardar a versão comprometida",
          en: "Keep the compromised copy",
        },
        body: {
          pt: "Antes de repor, a pasta pública infectada é movida para o lado em vez de apagada, para se poder analisar o que aconteceu.",
          en: "Before restoring, the infected public folder is moved aside instead of deleted, so what happened can be analysed.",
        },
      },
    ],
    results: [
      {
        value: "9",
        label: {
          pt: "instalações WordPress na lista monitorizada",
          en: "WordPress installations on the monitored list",
        },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
    ],
    learnings: {
      pt: "Automatizar uma reposição é fácil de escrever e difícil de provar. Hoje começaria por testar num servidor de ensaio e por enviar um alerta antes de trocar qualquer pasta.",
      en: "Automating a restore is easy to write and hard to prove. Today it would start with a test server and send an alert before swapping any folder.",
    },
    images: [],
    links: [],
    order: 76,
  },

  // ───────────────────────────────────────────── Perpi Dashboard
  {
    slug: "perpi-dashboard",
    name: "Perpi Dashboard",
    tagline: {
      pt: "Containerização e deploy self-hosted em Coolify para o painel Angular/Ionic de uma equipa.",
      en: "Containerisation and self-hosted Coolify deployment for a team's Angular/Ionic dashboard.",
    },
    period: "2025",
    status: "development",
    categories: ["reliability"],
    tech: ["Docker", "Coolify", "Angular", "Ionic", "Supabase"],
    role: {
      pt: "DevOps e documentação de deploy",
      en: "DevOps and deployment documentation",
    },
    authorship: "contributor",
    problem: {
      pt: "O painel de gestão de produtos, compras e membros da equipa funcionava em modo de desenvolvimento, mas não havia forma documentada de o construir e publicar.",
      en: "The team's dashboard for products, purchases and members ran in development mode, but there was no documented way to build and publish it.",
    },
    solution: {
      pt: "A aplicação é da equipa; a parte do Edson foi o deploy. Escreveu um Dockerfile multi-stage, a configuração Nixpacks para o Coolify, um guia de deploy com as duas vias, uma checklist e um README completo.",
      en: "The application is the team's; Edson's part was the deployment. He wrote a multi-stage Dockerfile, the Nixpacks configuration for Coolify, a deployment guide covering both paths, a checklist and a full README.",
    },
    decisions: [
      {
        title: {
          pt: "Imagem final só com os ficheiros estáticos",
          en: "Final image with static files only",
        },
        body: {
          pt: "O build corre numa imagem Node e a imagem final só serve a pasta www, com health check. A imagem fica pequena e não leva o toolchain.",
          en: "The build runs in a Node image and the final image only serves the www folder, with a health check. The image stays small and does not ship the toolchain.",
        },
      },
      {
        title: {
          pt: "Fallback de SPA sem nginx",
          en: "SPA fallback without nginx",
        },
        body: {
          pt: "O http-server com --proxy devolve o index.html para qualquer rota, por isso os links directos funcionam sem configurar um servidor web à parte.",
          en: "http-server with --proxy returns index.html for any route, so deep links work without configuring a separate web server.",
        },
      },
      {
        title: {
          pt: "Duas vias de deploy documentadas",
          en: "Two documented deployment paths",
        },
        body: {
          pt: "Nixpacks como via recomendada no Coolify e Docker como alternativa, para a equipa não ficar presa a uma só forma de publicar.",
          en: "Nixpacks as the recommended path on Coolify and Docker as the alternative, so the team is not tied to a single way of publishing.",
        },
      },
    ],
    results: [
      {
        value: "+1 082",
        label: {
          pt: "linhas de infraestrutura e documentação de deploy",
          en: "lines of infrastructure and deployment docs",
        },
        source: {
          pt: "git show --stat, repositório perpi_desktop",
          en: "git show --stat, perpi_desktop repository",
        },
      },
    ],
    images: [],
    links: [],
    order: 77,
  },

  // ───────────────────────────────────────────── Residencial Bendiak
  {
    slug: "residencial-bendiak",
    name: "Residencial Bendiak",
    tagline: {
      pt: "PWA de check-in de hóspedes, quartos e finanças para uma residencial em Lichinga.",
      en: "Guest check-in, rooms and finance PWA for a guesthouse in Lichinga.",
    },
    period: "2025",
    status: "prototype",
    categories: ["hospitality"],
    tech: ["Next.js", "Supabase", "TypeScript"],
    role: {
      pt: "Contribuidor: autenticação, ambiente local e migração de dados",
      en: "Contributor: authentication, local environment and data migration",
    },
    authorship: "contributor",
    client: "Residencial Bendiak",
    problem: {
      pt: "A residencial registava hóspedes em papel. Precisava de check-in digital, visão da ocupação dos quartos e controlo financeiro.",
      en: "The guesthouse recorded guests on paper. It needed digital check-in, a view of room occupancy and financial control.",
    },
    solution: {
      pt: "A aplicação foi construída por um colega. O Edson passou a página de login a verificar a sessão no servidor, montou o ambiente Supabase local e escreveu os scripts e o guia para copiar todos os dados de um projecto Supabase para outro.",
      en: "The application was built by a colleague. Edson made the login page check the session on the server, set up the local Supabase environment and wrote the scripts and guide to copy all data from one Supabase project to another.",
    },
    decisions: [
      {
        title: {
          pt: "Sessão verificada no servidor antes do login",
          en: "Session checked on the server before login",
        },
        body: {
          pt: "A página de login passou a server component que lê a sessão Supabase e redirecciona para o painel quem já está autenticado, sem o formulário aparecer e desaparecer.",
          en: "The login page became a server component that reads the Supabase session and redirects signed-in users to the dashboard, without the form flashing on screen.",
        },
      },
      {
        title: {
          pt: "SQL que gera SQL para migrar dados",
          en: "SQL that writes SQL to migrate data",
        },
        body: {
          pt: "Sem pg_dump no projecto gerido, os scripts correm no SQL Editor e geram os INSERT com format('%L'), que escapa os valores. O guia define a ordem exacta dos scripts de schema no destino.",
          en: "With no pg_dump on the managed project, the scripts run in the SQL Editor and generate the INSERTs with format('%L'), which escapes values. The guide sets the exact order of schema scripts on the target.",
        },
      },
    ],
    results: [
      {
        value: "870",
        label: {
          pt: "linhas de scripts e guia de migração de dados",
          en: "lines of data-migration scripts and guide",
        },
        source: {
          pt: "git show --stat, repositório Residencial-Bendiak",
          en: "git show --stat, Residencial-Bendiak repository",
        },
      },
    ],
    images: [
      {
        src: "/work/residencial-bendiak/01.webp",
        alt: {
          pt: "Ecrã de entrada do sistema de gestão da Residencial Bendiak com email e senha",
          en: "Residencial Bendiak management system sign-in screen with email and password",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/residencial-bendiak/02.webp",
        alt: {
          pt: "O mesmo ecrã de entrada no telemóvel",
          en: "The same sign-in screen on a phone",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
    ],
    links: [],
    order: 78,
  },

  // ───────────────────────────────────────────── MozLab
  {
    slug: "mozlab",
    hidden: true,
    name: "MozLab Innovation Center",
    tagline: {
      pt: "Documentação de um venture studio: portfólio de ideias por sector e arquitectura de um sistema de transporte.",
      en: "Documentation for a venture studio: a portfolio of ideas by sector and the architecture of a transport system.",
    },
    period: "2026",
    status: "concept",
    categories: ["govtech"],
    tech: [],
    role: { pt: "Autor", en: "Author" },
    authorship: "lead",
    problem: {
      pt: "As ideias de produto surgiam soltas, sem forma de as comparar nem de decidir qual avançar. Um projecto maior, de fiscalização do transporte rodoviário, precisava de arquitectura antes de qualquer código.",
      en: "Product ideas came up loose, with no way to compare them or decide which to pursue. A larger project, for road transport enforcement, needed architecture before any code.",
    },
    solution: {
      pt: "Um repositório só de documentação: fichas de projecto por sector, uma matriz de decisão e um roadmap. Para o SIT-MZ (sistema de transporte), a documentação de engenharia completa: arquitectura, modelo de dados, ADRs, normas de branching, versionamento de API, testes e releases. Não há código.",
      en: "A documentation-only repository: project sheets by sector, a decision matrix and a roadmap. For SIT-MZ (a transport system), full engineering documentation: architecture, data model, ADRs, branching, API versioning, testing and release rules. There is no code.",
    },
    decisions: [
      {
        title: {
          pt: "Monólito modular em Laravel",
          en: "Laravel modular monolith",
        },
        body: {
          pt: "O ADR-001 escolhe Laravel porque permite avançar depressa com uma só pessoa, organizado em módulos para se poderem extrair serviços mais tarde.",
          en: "ADR-001 picks Laravel because it lets one person move fast, organised in modules so services can be extracted later.",
        },
      },
      {
        title: {
          pt: "Registo de auditoria no modelo de dados",
          en: "Audit log in the data model",
        },
        body: {
          pt: "Num sistema de fiscalização, cada alteração tem de ter autor e data. O registo de auditoria foi desenhado como parte do modelo, não como extra.",
          en: "In an enforcement system every change needs an author and a timestamp. The audit log was designed as part of the model, not as an add-on.",
        },
      },
      {
        title: {
          pt: "Regras de negócio escritas antes do código",
          en: "Business rules written before code",
        },
        body: {
          pt: "A política de pontos na carta de condução e as regras de licença de viagem estão em documentos próprios, para serem validadas antes de virarem código.",
          en: "The driving-licence points policy and trip-licence rules have their own documents, so they can be validated before becoming code.",
        },
      },
    ],
    results: [
      {
        value: "116",
        label: { pt: "documentos Markdown", en: "Markdown documents" },
        source: {
          pt: "git ls-files, repositório mozlab-innovation-center",
          en: "git ls-files, mozlab-innovation-center repository",
        },
      },
      {
        value: "54",
        label: { pt: "fichas de projecto em 10 sectores", en: "project sheets across 10 sectors" },
        source: {
          pt: "pasta projects/, repositório mozlab-innovation-center",
          en: "projects/ folder, mozlab-innovation-center repository",
        },
      },
      {
        value: "3",
        label: { pt: "ADRs (Laravel, PostgreSQL, Flutter)", en: "ADRs (Laravel, PostgreSQL, Flutter)" },
        source: {
          pt: "docs/architecture/decisions, repositório mozlab-innovation-center",
          en: "docs/architecture/decisions, mozlab-innovation-center repository",
        },
      },
    ],
    images: [],
    links: [],
    order: 79,
  },

  // ───────────────────────────────────────────── SMS uSendIt
  {
    slug: "sms-usendit",
    name: "uSendIt PHP",
    tagline: {
      pt: "Pacote Composer que reúne as chamadas à API do gateway moçambicano de SMS uSendIt.",
      en: "Composer package that wraps the API of the Mozambican SMS gateway uSendIt.",
    },
    period: "2022",
    status: "prototype",
    categories: [],
    tech: ["PHP"],
    role: { pt: "Autor do pacote", en: "Package author" },
    authorship: "lead",
    problem: {
      pt: "A API do uSendIt é SOAP e vem documentada num PDF com exemplos. Cada projecto que precisava de enviar SMS copiava esses exemplos à sua maneira.",
      en: "The uSendIt API is SOAP and comes documented in a PDF with examples. Every project that needed to send SMS copied those examples its own way.",
    },
    solution: {
      pt: "Os exemplos do fornecedor foram reorganizados num pacote PSR-4 com uma classe por operação: envio simples e em lote, contagem de caracteres, créditos, contas e agenda. O pacote não chegou a ser publicado no Packagist e não tem testes.",
      en: "The vendor's examples were reorganised into a PSR-4 package with one class per operation: single and bulk sending, character count, credits, accounts and schedule. The package was never published on Packagist and has no tests.",
    },
    decisions: [
      {
        title: {
          pt: "Converter acentos para ASCII antes de enviar",
          en: "Convert accents to ASCII before sending",
        },
        body: {
          pt: "Um só \"ç\" ou \"ã\" obriga o SMS a Unicode, que custa mais e só leva 70 caracteres. O pacote converte o texto para ASCII antes do envio.",
          en: "A single \"ç\" or \"ã\" forces the SMS into Unicode, which costs more and fits only 70 characters. The package converts the text to ASCII before sending.",
        },
      },
      {
        title: {
          pt: "Troca entre teste e produção por parâmetro",
          en: "Test/production switch by parameter",
        },
        body: {
          pt: "Um parâmetro escolhe entre a API de teste e a de produção do fornecedor, para se poder desenvolver sem gastar créditos.",
          en: "A parameter chooses between the vendor's test and production APIs, so development does not spend credits.",
        },
      },
      {
        title: {
          pt: "Envio em lote com ID de campanha",
          en: "Bulk sending with a campaign ID",
        },
        body: {
          pt: "O envio para vários números leva um identificador de evento, para as mensagens de uma campanha poderem ser seguidas juntas.",
          en: "Sending to many numbers carries an event identifier, so the messages of one campaign can be tracked together.",
        },
      },
    ],
    results: [
      {
        value: "15",
        label: { pt: "classes, uma por operação da API", en: "classes, one per API operation" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
    ],
    images: [],
    links: [],
    order: 80,
  },

  // ───────────────────────────────────────────── MiCacao Wallet
  {
    slug: "micacao-wallet",
    name: { pt: "MiCacao Wallet (estudo)", en: "MiCacao Wallet (study)" },
    tagline: {
      pt: "Estudo e contribuição de documentação para uma carteira open-source de rastreabilidade de cacau.",
      en: "Study and documentation contribution to an open-source cocoa traceability wallet.",
    },
    period: "2026",
    status: "development",
    categories: ["agritech"],
    tech: ["React Native", "TypeScript"],
    role: {
      pt: "Estudo / contribuição de documentação",
      en: "Study / documentation contribution",
    },
    authorship: "contributor",
    partners: ["Identi"],
    problem: {
      pt: "A MiCacao é uma carteira em React Native que regista a rastreabilidade do cacau numa blockchain, para cumprir o regulamento europeu contra a desflorestação (EUDR). O projecto não tinha material de entrada em português e exige React Native, TypeScript e Verus ao mesmo tempo.",
      en: "MiCacao is a React Native wallet that records cocoa traceability on a blockchain, to comply with the EU deforestation regulation (EUDR). The project had no Portuguese onboarding material and requires React Native, TypeScript and Verus at the same time.",
    },
    solution: {
      pt: "Um fork para estudo, com um guia de imersão em português: plano de 13 dias úteis com um entregável por dia, auto-teste e resumo de ES6, TypeScript e JSX centrado nas partes reais do código. O código da aplicação não é do Edson.",
      en: "A fork for study, with a Portuguese immersion guide: a 13-working-day plan with one deliverable per day, self-checks and an ES6, TypeScript and JSX cheat sheet focused on the real parts of the code. The application code is not Edson's.",
    },
    decisions: [
      {
        title: {
          pt: "Sem entregável, não se avança",
          en: "No deliverable, no next step",
        },
        body: {
          pt: "Cada dia do guia termina com algo que se pode verificar. O objectivo é provar o que se aprendeu, não só ler.",
          en: "Each day of the guide ends with something that can be checked. The goal is to prove what was learned, not just read.",
        },
      },
      {
        title: {
          pt: "Começar pelos problemas de build reais",
          en: "Start with the real build problems",
        },
        body: {
          pt: "Os primeiros exercícios são as falhas de build conhecidas do projecto (dependências Gradle antigas, WASM na assinatura de transacções), porque é aí que um novo contribuidor fica preso.",
          en: "The first exercises are the project's known build failures (old Gradle dependencies, WASM in transaction signing), because that is where a new contributor gets stuck.",
        },
      },
    ],
    results: [
      {
        value: "+214",
        label: { pt: "linhas de guia de onboarding", en: "lines of onboarding guide" },
        source: {
          pt: "git show --stat, fork micacao-wallet",
          en: "git show --stat, fork micacao-wallet",
        },
      },
    ],
    sdgs: [
      {
        goal: 15,
        primary: true,
        contribution: {
          pt: "A rastreabilidade do cacau em blockchain existe para cumprir o regulamento europeu contra a desflorestação (EUDR): cada lote tem de provar que não vem de áreas desflorestadas.",
          en: "Cocoa traceability on a blockchain exists to comply with the EU deforestation regulation (EUDR): every batch must prove it does not come from deforested areas.",
        },
      },
      {
        goal: 2,
        contribution: {
          pt: "A prova de origem liga os produtores de cacau a mercados que cada vez mais exigem cadeias de abastecimento rastreadas e sem desflorestação.",
          en: "Proof of origin links cocoa farmers to markets that increasingly require traced, deforestation-free supply chains.",
        },
      },
    ],
    images: [],
    links: [
      {
        label: { pt: "Fork com o guia", en: "Fork with the guide" },
        href: "https://github.com/Edsonjorgef1/micacao-wallet",
      },
      {
        label: { pt: "Projecto original", en: "Original project" },
        href: "https://github.com/Identi-OpenSource/micacao-wallet",
      },
    ],
    order: 81,
  },

  // ───────────────────────────────────────────── Learning Wisdom
  {
    slug: "learning-wisdom",
    name: "Learning Wisdom",
    tagline: {
      pt: "Plataforma de aprendizagem online de uma equipa, com supervisão técnica do Edson.",
      en: "A team's online learning platform, with technical supervision by Edson.",
    },
    period: "2026",
    status: "development",
    categories: ["community"],
    tech: [],
    role: {
      pt: "Supervisor de tecnologia (suporte técnico e feedback)",
      en: "Technology supervisor (technical support and feedback)",
    },
    authorship: "team",
    problem: {
      pt: "Conteúdos de formação precisavam de chegar aos formandos de forma organizada, com acompanhamento do progresso.",
      en: "Training content needed to reach learners in an organised way, with progress tracking.",
    },
    solution: {
      pt: "Plataforma com cursos, módulos e acompanhamento do progresso dos formandos, construída pela equipa de desenvolvimento. O papel do Edson foi supervisionar o departamento de tecnologia: dar suporte técnico e feedback à equipa durante o desenvolvimento.",
      en: "Platform with courses, modules and learner progress tracking, built by the development team. Edson's role was supervising the technology department: giving technical support and feedback to the team during development.",
    },
    decisions: [],
    results: [],
    images: [],
    links: [],
    order: 82,
  },
];
