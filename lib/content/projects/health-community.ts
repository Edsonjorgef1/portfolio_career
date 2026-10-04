import type { Project } from "@/types/content";

export const projects: Project[] = [
  // ───────────────────────── Consultare ─────────────────────────
  {
    slug: "consultare",
    name: "Consultare",
    tagline: {
      pt: "API e back-office da app de primeiros socorros Consultare, desenhados para funcionar offline.",
      en: "API and back-office for the Consultare first-aid app, designed to work offline.",
    },
    period: "2019–2021",
    status: "production",
    categories: ["health", "offline-first"],
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "Azure DevOps"],
    role: {
      pt: "Programador principal do backend e do back-office",
      en: "Lead developer of the backend and back-office",
    },
    authorship: "main",
    client: "EQUIP Moçambique",
    partners: ["Associação Empoderando Moçambique"],
    problem: {
      pt: "Perante acidentes domésticos comuns (mordeduras, queimaduras, traumatismos, intoxicações) falta informação fiável de primeiros socorros, muitas vezes sem internet. A app precisava de conteúdo médico estruturado e de o ter disponível no telemóvel mesmo offline.",
      en: "For common household accidents (bites, burns, injuries, poisoning) reliable first-aid information is scarce, and often there is no internet. The app needed structured medical content that stays available on the phone offline.",
    },
    solution: {
      pt: "Construí a API JSON consumida pela app móvel e pela web app: categorias, incidentes com sintomas, tratamentos passo-a-passo e prevenções, destaques e informações de saúde pública. O back-office em Blade permite à equipa de conteúdo gerir tudo isto, ordenar passos e publicar ou despublicar sem apagar. A app mobile e a web app são da equipa.",
      en: "I built the JSON API used by the mobile app and the web app: categories, incidents with symptoms, step-by-step treatments and prevention, featured items and public-health information. The Blade back-office lets the content team manage all of it, reorder steps and publish or unpublish without deleting. The mobile and web apps were built by the team.",
    },
    decisions: [
      {
        title: {
          pt: "Rota única com todo o conteúdo para a app guardar localmente",
          en: "One route that returns all content for local storage",
        },
        body: {
          pt: "`incidentes/all` devolve o conteúdo completo num só pedido, para a app o guardar e funcionar sem rede.",
          en: "`incidentes/all` returns the full content in a single request, so the app can store it and work without a network.",
        },
      },
      {
        title: {
          pt: "Ícones SVG embebidos em Base64 no JSON",
          en: "SVG icons embedded as Base64 in the JSON",
        },
        body: {
          pt: "Os ícones de categorias e destaques seguem dentro da resposta, o que permite um \"pacote de ícones\" descarregável e ilustrações offline.",
          en: "Category and featured-item icons travel inside the response, enabling a downloadable \"icon pack\" and offline illustrations.",
        },
      },
      {
        title: {
          pt: "Endpoint de \"última actualização\"",
          en: "\"Last updated\" endpoint",
        },
        body: {
          pt: "A app pergunta a data da última alteração e só volta a sincronizar quando há conteúdo novo.",
          en: "The app asks for the last change date and only re-syncs when there is new content.",
        },
      },
      {
        title: {
          pt: "Prevenções ligadas a vários incidentes (N:M)",
          en: "Prevention tips linked to many incidents (N:M)",
        },
        body: {
          pt: "Uma tabela pivot evita duplicar a mesma prevenção em cada incidente.",
          en: "A pivot table avoids duplicating the same prevention tip for every incident.",
        },
      },
      {
        title: {
          pt: "Estado activo/inactivo em vez de apagar",
          en: "Active/inactive flag instead of deletion",
        },
        body: {
          pt: "Categorias e incidentes podem ser retirados da app sem perder o conteúdo revisto.",
          en: "Categories and incidents can be removed from the app without losing reviewed content.",
        },
      },
    ],
    results: [
      {
        value: "158",
        label: { pt: "incidentes no back-office (80 activos)", en: "incidents in the back-office (80 active)" },
        source: {
          pt: "painel de administração, captura de Julho 2024",
          en: "admin dashboard, July 2024 screenshot",
        },
      },
      {
        value: "366",
        label: { pt: "ícones inseridos", en: "icons uploaded" },
        source: {
          pt: "painel de administração, captura de Julho 2024",
          en: "admin dashboard, July 2024 screenshot",
        },
      },
    ],
    learnings: {
      pt: "Desenhar uma API para uma app offline: payload completo, recursos embebidos e uma data de actualização para decidir quando sincronizar.",
      en: "Designing an API for an offline app: a full payload, embedded assets and an update date to decide when to sync.",
    },
    images: [
      {
        src: "/work/consultare/01.webp",
        alt: {
          pt: "Página inicial do Consultare com três telemóveis a mostrar categorias de incidentes e um tratamento passo-a-passo",
          en: "Consultare home page with three phones showing incident categories and a step-by-step treatment",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/consultare/02.webp",
        alt: {
          pt: "Painel do back-office com contagens de ícones, categorias, incidentes e destaques, e menu de gestão de conteúdo",
          en: "Back-office dashboard with counts of icons, categories, incidents and featured items, plus the content menu",
        },
        width: 1600,
        height: 915,
        device: "desktop",
      },
      {
        src: "/work/consultare/03.webp",
        alt: {
          pt: "Web app num portátil com incidentes em destaque: COVID-19, cólera, HIV/SIDA, malária e diabetes",
          en: "Web app on a laptop showing featured topics: COVID-19, cholera, HIV/AIDS, malaria and diabetes",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/consultare/04.webp",
        alt: {
          pt: "Secção do site que apresenta a versão móvel e a versão web do Consultare",
          en: "Site section presenting the Consultare mobile and web versions",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/consultare/05.webp",
        alt: {
          pt: "Web app no telemóvel com o aviso de uso offline e o botão para descarregar o pacote de ícones",
          en: "Mobile web app with the offline notice and the button to download the icon pack",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
      {
        src: "/work/consultare/06.webp",
        alt: {
          pt: "Quatro ecrãs da app Consultare: incidentes, tipos de queimadura, pesquisa por incidente e doenças transmissíveis, com ícones grandes",
          en: "Four Consultare app screens: incidents, burn types, incident search and communicable diseases, with large icons",
        },
        width: 1600,
        height: 739,
        device: "desktop",
      },
    ],
    links: [
      { label: { pt: "Site do Consultare", en: "Consultare website" }, href: "https://consultare.app" },
      { label: { pt: "Web app", en: "Web app" }, href: "https://web.consultare.app" },
      { label: { pt: "Consultare no Google Play", en: "Consultare on Google Play" }, href: "https://play.google.com/store/apps/details?id=org.equipmoz.consultare" },
      { label: { pt: "Página do projecto na Equip Moçambique", en: "Project page at Equip Mozambique" }, href: "https://equipmoz.org/projects/tech-team/consultare-health-app/" },
    ],
    featured: false,
    order: 40,
  },

  // ───────────────────────── JURIS ─────────────────────────
  {
    slug: "juris",
    name: "JURIS",
    tagline: {
      pt: "A lei moçambicana em linguagem simples, com denúncias anónimas e, desde 30 de Setembro de 2026, o Juris Bot no WhatsApp — construí grande parte da API e do painel e hoje supervisiono a equipa técnica.",
      en: "Mozambican law in plain language, with anonymous reporting and, since 30 September 2026, the Juris Bot on WhatsApp — I built much of the API and admin panel and now supervise the technical team.",
    },
    period: "2020–2026",
    status: "production",
    categories: ["govtech"],
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS", "GitHub Actions"],
    role: {
      pt: "Supervisor do departamento técnico que mantém o projecto; antes, programador backend (API REST e painel de administração) e primeira versão do website",
      en: "Supervisor of the technical department that maintains the project; earlier, backend developer (REST API and admin panel) and first version of the website",
    },
    authorship: "contributor",
    client: "EQUIP Moçambique",
    partners: ["AMAC", "Woord en Daad", "Mozilla IRL Fund", "African Union Civic Tech Fund 2.0"],
    problem: {
      pt: "Grande parte da população não conhece as leis que a protegem, e os textos legais são difíceis de ler. Quem sofre uma injustiça precisa de a poder denunciar sem se expor.",
      en: "Much of the population does not know the laws that protect them, and legal texts are hard to read. People facing injustice need a way to report it without exposing themselves.",
    },
    solution: {
      pt: "Fui o primeiro programador a seguir ao arranque do repositório: autenticação da API, CRUD de leis, categorias e perguntas com ilustração e áudio, curiosidades, quiz, e o módulo de denúncias com código de acompanhamento. Acrescentei notificações por email e no painel, e endpoints para o bot de WhatsApp. No website fiz a newsletter, o formulário de contacto e, em 2024, o deploy automático. Hoje supervisiono o departamento técnico que mantém o JURIS em produção. O projecto ganhou novas proporções com o Juris Bot, um novo sistema de chat no WhatsApp lançado a 30 de Setembro de 2026.",
      en: "I was the first developer after the repository bootstrap: API authentication, CRUD for laws, categories and Q&A with illustrations and audio, trivia, quizzes, and the reporting module with tracking codes. I added email and in-panel notifications, and endpoints for the WhatsApp bot. On the website I built the newsletter, contact form and, in 2024, automated deployment. Today I supervise the technical department that keeps JURIS in production. The project took on new proportions with Juris Bot, a new chat system on WhatsApp launched on 30 September 2026.",
    },
    decisions: [
      {
        title: {
          pt: "Sincronização incremental para a app",
          en: "Incremental sync for the app",
        },
        body: {
          pt: "`GET /api/data` devolve a data da última alteração em leis, categorias, perguntas, ícones e curiosidades — a app só descarrega quando há novidades.",
          en: "`GET /api/data` returns the latest change date across laws, categories, questions, icons and trivia — the app only downloads when something changed.",
        },
      },
      {
        title: {
          pt: "Denúncias anónimas com código de acompanhamento",
          en: "Anonymous reports with a tracking code",
        },
        body: {
          pt: "Rotas públicas sem autenticação para submeter e consultar uma denúncia pelo código `Ymd_XXXXX`, sem ligar a denúncia a uma conta.",
          en: "Public, unauthenticated routes to submit and check a report by its `Ymd_XXXXX` code, without tying the report to an account.",
        },
      },
      {
        title: {
          pt: "Notificações em dois canais",
          en: "Two-channel notifications",
        },
        body: {
          pt: "Tabela de notificações com sino no painel e email aos envolvidos, com email como alternativa quando o SMS falha.",
          en: "A notifications table with an in-panel bell and email to those involved, with email as fallback when SMS fails.",
        },
      },
      {
        title: {
          pt: "Estado por contacto para o bot de WhatsApp",
          en: "Per-contact state for the WhatsApp bot",
        },
        body: {
          pt: "A API guarda o passo em que cada contacto está, para o bot retomar a conversa onde ficou.",
          en: "The API stores each contact's current step so the bot can resume the conversation where it left off.",
        },
      },
      {
        title: {
          pt: "Seeders idempotentes para o quiz",
          en: "Idempotent quiz seeders",
        },
        body: {
          pt: "O script de inserção verifica se a pergunta já existe, para se poder correr várias vezes sem duplicar conteúdo.",
          en: "The insertion script checks whether a question already exists, so it can run repeatedly without duplicating content.",
        },
      },
    ],
    results: [
      {
        value: "30 Set 2026",
        label: { pt: "lançamento do Juris Bot, o novo sistema de chat no WhatsApp", en: "launch of Juris Bot, the new chat system on WhatsApp" },
        source: { pt: "informação do Edson, supervisor técnico do projecto (4 Out 2026)", en: "information from Edson, the project's technical supervisor (4 Oct 2026)" },
      },
      {
        value: "10 mil+",
        label: { pt: "downloads da app Android", en: "Android app downloads" },
        source: { pt: "Google Play, página da app (Out 2026)", en: "Google Play, app page (Oct 2026)" },
      },
      {
        value: "43",
        label: { pt: "migrations na API", en: "migrations in the API" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
    ],
    learnings: {
      pt: "Passar de CRUD simples para um sistema com notificações, controlo de acesso e sincronização para uma app offline; e o meu primeiro pipeline de CI/CD.",
      en: "Moving from plain CRUD to a system with notifications, access control and sync for an offline app; and my first CI/CD pipeline.",
    },
    images: [
      {
        src: "/work/juris/01.webp",
        alt: {
          pt: "Página inicial do Juris: \"Lei de forma Simplificada\", com botões para baixar a app e ver campanhas",
          en: "Juris home page: \"Law made simple\", with buttons to download the app and view campaigns",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/juris/02.webp",
        alt: {
          pt: "Secção \"Sobre o Projecto Juris\" com a app num telemóvel a mostrar uma pergunta ilustrada sobre direito à terra",
          en: "\"About the Juris project\" section with the app on a phone showing an illustrated land-rights question",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/juris/03.webp",
        alt: {
          pt: "Grelha de leis disponíveis: família, terra, trabalho, consumidor, violência doméstica e uniões prematuras",
          en: "Grid of available laws: family, land, labour, consumer, domestic violence and early marriage",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/juris/04.webp",
        alt: {
          pt: "Secção de download da app Juris para iOS e Android",
          en: "Juris app download section for iOS and Android",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/juris/05.webp",
        alt: {
          pt: "Página inicial do Juris no telemóvel",
          en: "Juris home page on a phone",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
    ],
    links: [
      { label: { pt: "Site do Juris", en: "Juris website" }, href: "https://juris.co.mz" },
      { label: { pt: "JURIS no Google Play", en: "JURIS on Google Play" }, href: "https://play.google.com/store/apps/details?id=org.equipmoz.juris" },
      { label: { pt: "Página do projecto na Equip Moçambique", en: "Project page at Equip Mozambique" }, href: "https://equipmoz.org/projects/tech-team/juris-law-rights-app/" },
    ],
    featured: true,
    order: 2,
  },

  // ───────────────────────── Fonte da Vida ─────────────────────────
  {
    slug: "fonte-da-vida",
    name: "Fonte da Vida",
    tagline: {
      pt: "Recursos cristãos gratuitos em línguas africanas — fui o programador principal da API e do painel Laravel.",
      en: "Free Christian resources in African languages — I was the main developer of the Laravel API and admin panel.",
    },
    period: "2021–2022",
    status: "production",
    categories: ["community"],
    tech: ["Laravel", "PHP", "MySQL", "Livewire", "JavaScript", "Node.js", "WhatsApp Cloud API", "GitHub Actions"],
    role: {
      pt: "Programador principal da API e do painel de administração (2021–22)",
      en: "Main developer of the API and admin panel (2021–22)",
    },
    authorship: "main",
    client: "EQUIP Moçambique",
    problem: {
      pt: "Igrejas e pregadores precisavam de publicar pregações e recursos para a app móvel, e a equipa precisava de gerir países, línguas, organizações e licenças. O sistema anterior em Yii já não servia.",
      en: "Churches and preachers needed to publish sermons and resources for the mobile app, and the team needed to manage countries, languages, organisations and licences. The previous Yii system no longer fit.",
    },
    solution: {
      pt: "Migrei o modelo de dados do sistema Yii para Laravel 8 e construí a API v1 e o painel: pregações por pastor e organização, upload de áudio com duração, fotos e ficheiros, geolocalização da igreja, e páginas CRUD para línguas, recursos, vídeos e licenças. Os pregadores entram pela app com uma autenticação separada. O bot de WhatsApp, que envia a Bíblia em áudio pela WhatsApp Cloud API da Meta, é da equipa; o meu contributo aí foi o workflow de deploy de teste.",
      en: "I migrated the data model from the Yii system to Laravel 8 and built the v1 API and admin panel: sermons per pastor and organisation, audio upload with duration, photos and files, church geolocation, and CRUD pages for languages, resources, videos and licences. Preachers sign in through the app with separate authentication. The WhatsApp bot, which sends the audio Bible through Meta's WhatsApp Cloud API, is the team's work; my part there was the test deployment workflow.",
    },
    decisions: [
      {
        title: {
          pt: "Guard separado para pregadores na app",
          en: "A separate guard for preachers in the app",
        },
        body: {
          pt: "O painel usa sessão (`web`) e a app usa um guard `mobile` sobre a tabela de pregadores, com Sanctum — contas de pregador e de administrador nunca se misturam.",
          en: "The panel uses sessions (`web`) and the app uses a `mobile` guard over the preachers table with Sanctum — preacher and admin accounts never mix.",
        },
      },
      {
        title: {
          pt: "Logout em todos os dispositivos",
          en: "Logout from all devices",
        },
        body: {
          pt: "Ao sair, a app revoga todas as sessões do pregador, o que simplifica o suporte quando um telemóvel se perde.",
          en: "On logout the app revokes all of the preacher's sessions, which simplifies support when a phone is lost.",
        },
      },
      {
        title: {
          pt: "Migração do legado Yii em vez de recomeçar",
          en: "Migrating the Yii legacy instead of starting over",
        },
        body: {
          pt: "Importei a base de dados existente para manter livros, pregações e recursos já publicados.",
          en: "I imported the existing database to keep books, sermons and resources already published.",
        },
      },
      {
        title: { pt: "API versionada", en: "Versioned API" },
        body: {
          pt: "Prefixo `v1` e rotas protegidas por token, para a app poder evoluir sem partir versões antigas.",
          en: "A `v1` prefix and token-protected routes, so the app can evolve without breaking older versions.",
        },
      },
    ],
    results: [
      {
        value: "15",
        label: { pt: "línguas listadas na documentação da API", en: "languages listed in the API docs" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
      {
        value: "50 mil+",
        label: { pt: "downloads da app Android", en: "Android app downloads" },
        source: { pt: "Google Play, página da app (Out 2026)", en: "Google Play, app page (Oct 2026)" },
      },
    ],
    learnings: {
      pt: "Autenticação com vários guards para clientes móveis, e migrar dados de um sistema legado sem perder conteúdo.",
      en: "Multi-guard authentication for mobile clients, and migrating data from a legacy system without losing content.",
    },
    images: [
      {
        src: "/work/fonte-da-vida/01.webp",
        alt: {
          pt: "Página inicial da Fonte da Vida: Bíblia em áudio com texto sincronizado, com um telemóvel a mostrar Mateus 1",
          en: "Fonte da Vida home page: audio Bible with synced text, with a phone showing Matthew 1",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/fonte-da-vida/02.webp",
        alt: {
          pt: "Página inicial da Fonte da Vida no telemóvel",
          en: "Fonte da Vida home page on a phone",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
      {
        src: "/work/fonte-da-vida/03.webp",
        alt: {
          pt: "Ecrã inicial da app Fonte da Vida com o devocional do dia e atalhos para eventos, vídeos e favoritos",
          en: "Fonte da Vida app home screen with the daily devotional and shortcuts to events, videos and favourites",
        },
        width: 1080,
        height: 1728,
        device: "mobile",
      },
      {
        src: "/work/fonte-da-vida/04.webp",
        alt: {
          pt: "Imagem da loja de apps: mais de 10 línguas, incluindo português, inglês, chewa, chopi, lomwe, macua, ndau e ronga",
          en: "App store image: more than 10 languages, including Portuguese, English, Chewa, Chopi, Lomwe, Makhuwa, Ndau and Ronga",
        },
        width: 1080,
        height: 1920,
        device: "mobile",
      },
    ],
    links: [
      { label: { pt: "Site da Fonte da Vida", en: "Fonte da Vida website" }, href: "https://fontedavida.org" },
      { label: { pt: "Fonte da Vida no Google Play", en: "Fonte da Vida on Google Play" }, href: "https://play.google.com/store/apps/details?id=com.equipmozambique.fontedavida" },
      { label: { pt: "Página do projecto na Equip Moçambique", en: "Project page at Equip Mozambique" }, href: "https://equipmoz.org/projects/tech-team/fountain-of-life-bible-app/" },
    ],
    order: 42,
  },

  // ───────────────────────── Kukura ─────────────────────────
  {
    slug: "kukura",
    name: "Kukura",
    tagline: {
      pt: "Plataforma para organizações comunitárias provarem impacto e captarem fundos — backend, deploy e verificação de contas.",
      en: "A platform for community organisations to prove impact and raise funds — backend, deployment and account verification.",
    },
    period: "2024–2026",
    status: "production",
    categories: ["community"],
    tech: ["Laravel", "PHP", "MySQL", "Ionic", "Angular", "Capacitor", "Twilio", "Docker", "GitHub Actions"],
    role: {
      pt: "Backend e DevOps: criei o repositório da API, o deploy automático e a verificação por email/SMS; revisão e merge de PRs",
      en: "Backend and DevOps: created the API repository, automated deployment and email/SMS verification; PR review and merging",
    },
    authorship: "contributor",
    client: "EQUIP Moçambique",
    partners: ["ECO-MICAIA"],
    problem: {
      pt: "Organizações da sociedade civil em Moçambique têm dificuldade em formalizar processos, mostrar impacto e chegar a doadores. Precisam de uma ferramenta simples, no telemóvel.",
      en: "Civil-society organisations in Mozambique struggle to formalise processes, show impact and reach donors. They need a simple tool on the phone.",
    },
    solution: {
      pt: "A app Ionic/Angular é da equipa: perfil da organização, questionário de avaliação, biblioteca de recursos e causas. Eu criei o repositório do backend Laravel em 2024, montei o CI/CD de deploy e testes, e implementei o registo com verificação por email e SMS e a recuperação de senha. Revejo e faço merge dos PRs do backend. O projecto começou como protótipo \"Doar Para Transformar\" (DPT App), feito por um colega, e foi renomeado Kukura.",
      en: "The Ionic/Angular app is the team's work: organisation profile, assessment questionnaire, resource library and causes. I created the Laravel backend repository in 2024, set up deployment and test CI/CD, and implemented sign-up with email and SMS verification and password recovery. I review and merge backend PRs. The project started as the \"Doar Para Transformar\" prototype (DPT App), built by a colleague, and was renamed Kukura.",
    },
    decisions: [
      {
        title: {
          pt: "Verificação por email e SMS em paralelo",
          en: "Email and SMS verification in parallel",
        },
        body: {
          pt: "O código de verificação segue pelos dois canais (SMS via Twilio); se um falhar, o outro chega. O email sozinho não era fiável em produção.",
          en: "The verification code goes out on both channels (SMS via Twilio); if one fails, the other arrives. Email alone was not reliable in production.",
        },
      },
      {
        title: {
          pt: "Normalização de números moçambicanos para E.164",
          en: "Normalising Mozambican numbers to E.164",
        },
        body: {
          pt: "`843216789` passa a `+258843216789` antes do envio, porque os utilizadores escrevem o número de várias formas.",
          en: "`843216789` becomes `+258843216789` before sending, because users type their number in many formats.",
        },
      },
      {
        title: {
          pt: "Deploy por SSH para alojamento partilhado",
          en: "SSH deployment to shared hosting",
        },
        body: {
          pt: "GitHub Actions com modo de manutenção, `composer install`, migrations, caches e testes depois do deploy — sem precisar de servidor dedicado.",
          en: "GitHub Actions with maintenance mode, `composer install`, migrations, caches and post-deploy tests — no dedicated server needed.",
        },
      },
      {
        title: {
          pt: "Biblioteca de recursos gerada a partir de JSON partilhado",
          en: "Resource library seeded from shared JSON",
        },
        body: {
          pt: "Os mesmos ficheiros JSON alimentam os seeders do backend e a app, para os recursos não divergirem.",
          en: "The same JSON files feed the backend seeders and the app, so the resources never drift apart.",
        },
      },
    ],
    results: [
      {
        value: "56",
        label: { pt: "migrations no backend", en: "migrations in the backend" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
    ],
    learnings: {
      pt: "Fiabilidade do email em produção pede um segundo canal; e CI/CD em alojamento partilhado exige muitas iterações até ficar estável.",
      en: "Email reliability in production calls for a second channel; and CI/CD on shared hosting takes many iterations to get stable.",
    },
    images: [
      {
        src: "/work/kukura/01.webp",
        alt: {
          pt: "Página inicial do Kukura: \"A Sua Comunidade Precisa de Si Agora\", com links para Google Play e App Store",
          en: "Kukura home page: \"Your community needs you now\", with Google Play and App Store links",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/kukura/02.webp",
        alt: {
          pt: "Página inicial do Kukura no telemóvel",
          en: "Kukura home page on a phone",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
      {
        src: "/work/kukura/03.webp",
        alt: {
          pt: "Ecrã de login da app Kukura com email, senha e opção de criar conta",
          en: "Kukura app login screen with email, password and create-account option",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
    ],
    links: [{ label: { pt: "Site do Kukura", en: "Kukura website" }, href: "https://kukura.co.mz" }],
    featured: true,
    order: 3,
  },

  // ───────────────────────── H-Link ─────────────────────────
  {
    slug: "hlink",
    name: "H-Link",
    tagline: {
      pt: "API para referenciar pacientes entre unidades sanitárias, com filtro por camas, testes e ventiladores disponíveis.",
      en: "An API to refer patients between health facilities, filtered by available beds, tests and ventilators.",
    },
    period: "2021–2022",
    status: "archived",
    categories: ["health"],
    tech: ["Laravel", "PHP", "MySQL", "Ionic"],
    role: {
      pt: "Programador principal do backend e do painel de administração",
      en: "Main developer of the backend and admin panel",
    },
    authorship: "main",
    client: "EQUIP Moçambique",
    problem: {
      pt: "Durante a COVID-19, profissionais de saúde e agentes comunitários precisavam de encontrar depressa uma unidade com cama, teste ou ventilador disponível, e de referir o paciente de forma rastreável. Hospitais, clínicas e farmácias quase não comunicam entre si, por isso quem não é atendido num sítio é mandado de porta em porta. A ideia nasceu em 2020, quando a equipa técnica participou num hackathon global lançado pelo MIT sobre sistemas de saúde africanos na pandemia.",
      en: "During COVID-19, health workers and community health agents needed to quickly find a facility with a free bed, test or ventilator, and refer the patient in a traceable way. Hospitals, clinics and pharmacies barely communicate, so people turned away in one place are sent from door to door. The idea started in 2020, when the tech team took part in a global MIT-initiated hackathon on African health systems during the pandemic.",
    },
    solution: {
      pt: "API v1 em Laravel 8 consumida por uma app Ionic da equipa: registo e login com Sanctum, lista de unidades por país e por distância, criação da referência com os dados do paciente, e confirmação pela unidade receptora, que então vê a localização de origem e destino. Um painel permite aprovar utilizadores novos e gerir as unidades sanitárias.",
      en: "A Laravel 8 v1 API used by the team's Ionic app: sign-up and login with Sanctum, facilities by country and distance, referral creation with patient data, and confirmation by the receiving facility, which then sees origin and destination locations. An admin panel approves new users and manages facilities.",
    },
    decisions: [
      {
        title: {
          pt: "Só a unidade receptora confirma a referência",
          en: "Only the receiving facility can confirm a referral",
        },
        body: {
          pt: "A regra está no controlador, não só na interface: um utilizador de outra unidade não consegue aceitar a referência.",
          en: "The rule lives in the controller, not just the UI: a user from another facility cannot accept the referral.",
        },
      },
      {
        title: {
          pt: "Contas pendentes até aprovação",
          en: "Accounts pending until approved",
        },
        body: {
          pt: "Quem se regista pela app só entra depois de um administrador aprovar, com email de aprovação ou rejeição — os dados são de pacientes.",
          en: "Users registering through the app can only sign in after an admin approves them, with an approval or rejection email — the data is patient data.",
        },
      },
      {
        title: {
          pt: "Filtro por recursos e distância",
          en: "Filtering by resources and distance",
        },
        body: {
          pt: "As unidades são filtradas por disponibilidade de cama, teste e ventilador e ordenadas pela distância ao utilizador.",
          en: "Facilities are filtered by bed, test and ventilator availability and ordered by distance from the user.",
        },
      },
      {
        title: {
          pt: "Cache de modelos e queries com campos explícitos",
          en: "Model caching and queries with explicit columns",
        },
        body: {
          pt: "Cache de modelos e `select()` explícitos para manter as listas rápidas sobre o conjunto de unidades.",
          en: "Model caching and explicit `select()` calls to keep lists fast over the facility dataset.",
        },
      },
      {
        title: { pt: "API versionada e multi-país", en: "Versioned, multi-country API" },
        body: {
          pt: "Prefixo `v1` e filtro por código de país, para poder crescer além de Moçambique sem mudar o contrato.",
          en: "A `v1` prefix and a country-code filter, so it could grow beyond Mozambique without changing the contract.",
        },
      },
    ],
    results: [
      {
        value: "1 589",
        label: { pt: "unidades sanitárias no conjunto de dados", en: "health facilities in the dataset" },
        source: { pt: "código-fonte do projecto", en: "project source code" },
      },
    ],
    learnings: {
      pt: "Autorização por regra de negócio, optimização de queries com cache, e integração com um cliente Ionic em Android.",
      en: "Business-rule authorisation, query optimisation with caching, and integration with an Ionic client on Android.",
    },
    images: [
      {
        src: "/work/hlink/01.webp",
        alt: {
          pt: "Maqueta da app H-Link: lista das unidades sanitárias mais próximas, com distância e botão para referir",
          en: "H-Link app mockup: list of the nearest health facilities, with distance and a refer button",
        },
        width: 540,
        height: 960,
        device: "mobile",
      },
    ],
    links: [
      { label: { pt: "Página \"Other Apps\" na Equip Moçambique", en: "\"Other Apps\" page at Equip Mozambique" }, href: "https://equipmoz.org/projects/tech-team/other-apps/" },
    ],
    order: 44,
  },

  // ───────────────────────── Abastece ─────────────────────────
  {
    slug: "abastece",
    name: "Abastece",
    tagline: {
      pt: "Que postos têm combustível e fila, reportado pela comunidade — fiz o site com dados em tempo real e o mapa público.",
      en: "Which fuel stations have fuel and queues, reported by the community — I built the site with live data and the public map.",
    },
    period: "2026",
    status: "production",
    categories: ["community"],
    tech: ["JavaScript", "HTML/CSS"],
    role: {
      pt: "Site de marketing e mapa público: integração com a API, cache offline, pinos por estado e PT/EN",
      en: "Marketing site and public map: API integration, offline cache, status pins and PT/EN",
    },
    authorship: "contributor",
    problem: {
      pt: "Em períodos de escassez, os condutores não sabem que postos têm gasolina ou gasóleo nem o tamanho da fila. O site precisava de mostrar os dados reais da comunidade, não uma lista fixa.",
      en: "During shortages, drivers don't know which stations have petrol or diesel, or how long the queue is. The site needed to show the community's real data, not a fixed list.",
    },
    solution: {
      pt: "Troquei a lista de postos escrita no código por pedidos à API do Abastece, com cache no navegador e fallback offline. Acrescentei filtros por estado (com combustível, sem combustível, com fila) com pinos verdes, vermelhos e amarelos, navegação interna até ao posto e o site em português e inglês. A app Ionic e o backend Laravel/PostGIS são da equipa.",
      en: "I replaced the hard-coded station list with requests to the Abastece API, with browser caching and an offline fallback. I added status filters (fuel, no fuel, queue) with green, red and yellow pins, in-site navigation to the station, and the site in Portuguese and English. The Ionic app and the Laravel/PostGIS backend are the team's work.",
    },
    decisions: [
      {
        title: {
          pt: "Sem build: HTML e JS com bibliotecas por CDN",
          en: "No build step: HTML and JS with CDN libraries",
        },
        body: {
          pt: "Leaflet e Ionicons carregados por CDN, sem bundler — página leve e deploy trivial.",
          en: "Leaflet and Ionicons loaded from a CDN, no bundler — a light page and trivial deployment.",
        },
      },
      {
        title: {
          pt: "Cache com TTL e fallback offline",
          en: "TTL cache with an offline fallback",
        },
        body: {
          pt: "Os postos ficam em `localStorage` durante 10 minutos; sem rede, o mapa mostra os últimos dados em vez de ficar vazio.",
          en: "Stations stay in `localStorage` for 10 minutes; with no network, the map shows the last data instead of going blank.",
        },
      },
      {
        title: {
          pt: "Estatísticas calculadas a partir da API",
          en: "Stats computed from the API",
        },
        body: {
          pt: "Total de postos, marcas e cobertura são calculados no cliente a partir da mesma resposta, sem números escritos à mão.",
          en: "Station totals, brands and coverage are computed client-side from the same response, with no hand-written numbers.",
        },
      },
      {
        title: {
          pt: "Traduções por atributos `data-i18n`",
          en: "Translations via `data-i18n` attributes",
        },
        body: {
          pt: "Um objecto de traduções simples, com português forçado no primeiro carregamento.",
          en: "A simple translations object, with Portuguese forced on first load.",
        },
      },
    ],
    results: [
      {
        value: "187",
        label: { pt: "postos no mapa público", en: "stations on the public map" },
        source: { pt: "abastece.co.mz/bombas, 29 Set 2026", en: "abastece.co.mz/bombas, 29 Sep 2026" },
      },
    ],
    learnings: {
      pt: "Passar um site de dados estáticos para uma API real sem piorar a experiência quando a rede falha.",
      en: "Moving a site from static data to a real API without hurting the experience when the network fails.",
    },
    images: [
      {
        src: "/work/abastece/01.webp",
        alt: {
          pt: "Página inicial do Abastece: \"A Bomba Certa, No Momento Certo\", com um telemóvel a mostrar o mapa de postos",
          en: "Abastece home page: \"The right pump, at the right time\", with a phone showing the station map",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/abastece/02.webp",
        alt: {
          pt: "Página inicial do Abastece no telemóvel, com links para App Store, Google Play e versão web",
          en: "Abastece home page on a phone, with App Store, Google Play and web version links",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
      {
        src: "/work/abastece/03.webp",
        alt: {
          pt: "Mapa de postos com filtros por estado e pinos verdes, vermelhos e amarelos em Moçambique",
          en: "Station map with status filters and green, red and yellow pins across Mozambique",
        },
        width: 590,
        height: 770,
        device: "desktop",
      },
    ],
    links: [
      { label: { pt: "Site do Abastece", en: "Abastece website" }, href: "https://abastece.co.mz" },
      { label: { pt: "Mapa de postos", en: "Station map" }, href: "https://abastece.co.mz/bombas/" },
    ],
    order: 45,
  },

  // ───────────────────────── C-Yanga ─────────────────────────
  {
    slug: "c-yanga",
    name: "C-Yanga",
    tagline: {
      pt: "App para igrejas partilharem eventos, cultos e avisos — escrevi toda a API.",
      en: "An app for churches to share events, services and notices — I wrote the whole API.",
    },
    period: "2020–2021",
    status: "archived",
    categories: ["community"],
    tech: ["Laravel", "PHP", "MySQL", "Docker", "Ionic", "Angular", "Azure DevOps"],
    role: {
      pt: "Autor da API Laravel; a app móvel é da equipa",
      en: "Author of the Laravel API; the mobile app is the team's",
    },
    authorship: "contributor",
    client: "EQUIP Moçambique",
    problem: {
      pt: "As igrejas comunicam horários, eventos e avisos de forma dispersa, em papel e grupos de mensagens. Parte dos membros não tem smartphone.",
      en: "Churches share schedules, events and notices in scattered ways, on paper and in message groups. Some members don't have a smartphone.",
    },
    solution: {
      pt: "Escrevi a API que alimenta a app Ionic da equipa, criada no contexto do #HACK2020: igrejas, actividades, links úteis e horários de cultos, com login social e autenticação por token. Cada recurso tem um campo para envio por SMS, preparado para quem não tem internet.",
      en: "I wrote the API behind the team's Ionic app, created during #HACK2020: churches, activities, useful links and service times, with social login and token authentication. Each resource has a field for SMS delivery, prepared for people without internet.",
    },
    decisions: [
      {
        title: {
          pt: "Troca de Passport por Sanctum",
          en: "Switching from Passport to Sanctum",
        },
        body: {
          pt: "A meio do projecto passei para Sanctum: tokens pessoais mais simples bastavam para uma app móvel.",
          en: "Midway I moved to Sanctum: simpler personal tokens were enough for a mobile app.",
        },
      },
      {
        title: { pt: "Login social com Socialite", en: "Social login with Socialite" },
        body: {
          pt: "Rotas de redirect/callback por provider, a par do login Google da app.",
          en: "Redirect/callback routes per provider, matching the app's Google sign-in.",
        },
      },
      {
        title: { pt: "UUID para identificar igrejas", en: "UUIDs to identify churches" },
        body: {
          pt: "Cada igreja tem uma chave aleatória para ser partilhada sem expor IDs sequenciais.",
          en: "Each church has a random key so it can be shared without exposing sequential IDs.",
        },
      },
      {
        title: { pt: "SMS preparado mas adiado", en: "SMS prepared but deferred" },
        body: {
          pt: "O campo `sms` existe nos modelos e a integração Twilio ficou pronta a ligar — adiei o custo do SMS até haver utilização real.",
          en: "The `sms` field exists in the models and the Twilio integration was ready to switch on — I deferred SMS costs until there was real usage.",
        },
      },
    ],
    results: [
    ],
    learnings: {
      pt: "A minha primeira API Laravel completa com autenticação por token e OAuth social, feita em equipa com PRs no Azure DevOps.",
      en: "My first complete Laravel API with token auth and social OAuth, built as a team with PRs on Azure DevOps.",
    },
    images: [],
    links: [],
    order: 46,
  },

  // ───────────────────────── MozSaúde ─────────────────────────
  {
    slug: "mozsaude",
    name: "MozSaúde",
    tagline: {
      pt: "App de informação de saúde pública com painel de administração — o meu Trabalho de Conclusão de Curso.",
      en: "A public-health information app with an admin panel — my university final project.",
    },
    period: "2022–2025",
    status: "prototype",
    categories: ["health"],
    tech: ["Ionic", "Angular", "Capacitor", "TypeScript", "Laravel", "PHP"],
    role: {
      pt: "Autor do painel de administração e da maior parte da app",
      en: "Author of the admin panel and most of the app",
    },
    authorship: "lead",
    client: "Universidade Zambeze",
    problem: {
      pt: "Tornar acessível informação básica de saúde pública: doenças comuns, prevenção e cuidados básicos, numa app simples para qualquer pessoa.",
      en: "Make basic public-health information accessible: common diseases, prevention and basic care, in a simple app for anyone.",
    },
    solution: {
      pt: "Um painel Laravel com Craftable para gerir doenças (causas, sintomas, prevenção, tratamento), dicas de saúde e informações, com uma API pública mínima. A app Ionic tem três separadores — Doenças, Dicas de Saúde e Sobre — com cartões e detalhe em modal. Trabalho de Conclusão de Curso (TCC) na Universidade Zambeze.",
      en: "A Laravel panel built with Craftable to manage diseases (causes, symptoms, prevention, treatment), health tips and information, with a minimal public API. The Ionic app has three tabs — Diseases, Health Tips and About — with cards and modal detail views. Final-year project (TCC) at Universidade Zambeze.",
    },
    decisions: [
      {
        title: {
          pt: "Conteúdo servido como JSON estático no GitHub Pages",
          en: "Content served as static JSON on GitHub Pages",
        },
        body: {
          pt: "A app lê ficheiros JSON publicados no GitHub Pages; o painel serve para editar e exportar. Não é preciso um servidor em produção e o alojamento custa zero.",
          en: "The app reads JSON files published on GitHub Pages; the panel is for editing and exporting. No production server is needed and hosting costs nothing.",
        },
      },
      {
        title: {
          pt: "Painel gerado com Craftable",
          en: "Admin panel generated with Craftable",
        },
        body: {
          pt: "CRUDs, permissões e media gerados pelo admin-generator, para concentrar o tempo no conteúdo e na app.",
          en: "CRUDs, permissions and media generated by the admin-generator, to spend the time on content and the app.",
        },
      },
      {
        title: {
          pt: "API mínima com campos explícitos",
          en: "Minimal API with explicit fields",
        },
        body: {
          pt: "Rotas curtas com `select()` dos campos expostos, para não publicar colunas internas.",
          en: "Short routes that `select()` the exposed fields, so internal columns aren't published.",
        },
      },
      {
        title: { pt: "Painel traduzido para português", en: "Panel translated to Portuguese" },
        body: {
          pt: "O painel foi traduzido para português para quem edita o conteúdo.",
          en: "The panel was translated into Portuguese for the people editing content.",
        },
      },
    ],
    results: [
      {
        value: "8 + 8",
        label: { pt: "doenças e dicas de saúde publicadas", en: "diseases and health tips published" },
        source: {
          pt: "doencas.json e informacoes.json no GitHub Pages, 30 Set 2026",
          en: "doencas.json and informacoes.json on GitHub Pages, 30 Sep 2026",
        },
      },
    ],
    learnings: {
      pt: "Para um projecto académico, JSON estático em vez de uma API em produção foi a escolha mais simples e barata de manter.",
      en: "For an academic project, static JSON instead of a production API was the simplest and cheapest option to maintain.",
    },
    images: [
      {
        src: "/work/mozsaude/01.webp",
        alt: {
          pt: "Separador Doenças com cartões de HIV/SIDA, malária, coronavírus e conjuntivite",
          en: "Diseases tab with cards for HIV/AIDS, malaria, coronavirus and conjunctivitis",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
      {
        src: "/work/mozsaude/02.webp",
        alt: {
          pt: "Separador Dicas de Saúde com orientações sobre COVID-19, higiene pessoal e actividade física",
          en: "Health Tips tab with guidance on COVID-19, personal hygiene and physical activity",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
      {
        src: "/work/mozsaude/03.webp",
        alt: {
          pt: "Separador Sobre: aplicativo informativo de saúde pública, TCC na Universidade Zambeze",
          en: "About tab: public-health information app, final project at Universidade Zambeze",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
    ],
    links: [],
    order: 47,
  },

  // ───────────────────────── Donante ─────────────────────────
  {
    slug: "donante",
    name: "Donante",
    tagline: {
      pt: "Protótipo de uma plataforma que liga doadores a pessoas e instituições com necessidades — 3 pessoas, 3 dias.",
      en: "A prototype platform connecting donors with people and institutions in need — 3 people, 3 days.",
    },
    period: "2021",
    status: "prototype",
    categories: ["community"],
    tech: ["HTML/CSS", "Bootstrap", "JavaScript"],
    role: {
      pt: "Montagem da base do protótipo, páginas de registo, tradução e integração dos PRs da equipa",
      en: "Set up the prototype base, registration pages, translation and merging the team's PRs",
    },
    authorship: "main",
    problem: {
      pt: "Pessoas vulneráveis e igrejas ou instituições não têm um canal organizado para publicar necessidades concretas, e os doadores não sabem onde ajudar com confiança.",
      en: "Vulnerable people and churches or institutions lack an organised channel to publish concrete needs, and donors don't know where to help with confidence.",
    },
    solution: {
      pt: "Em três dias, com dois colegas, construímos um protótipo navegável em HTML e Bootstrap. Adaptei o template base e fiz as páginas de registo de doador e de igreja/instituição, traduzi o conteúdo para português e integrei os PRs da equipa. Os colegas fizeram o login, o menu e os links de doação.",
      en: "In three days, with two colleagues, we built a clickable HTML and Bootstrap prototype. I adapted the base template and built the donor and church/institution registration pages, translated the content to Portuguese and merged the team's PRs. My colleagues built login, the menu and donation links.",
    },
    decisions: [
      {
        title: { pt: "Três perfis de registo", en: "Three registration profiles" },
        body: {
          pt: "Doador (com província e tipo de doador), igreja/instituição e solicitante de ajuda, cada um com o seu formulário.",
          en: "Donor (with province and donor type), church/institution and help requester, each with its own form.",
        },
      },
      {
        title: { pt: "Adaptado a Moçambique", en: "Adapted to Mozambique" },
        body: {
          pt: "Campo de província, telefone +258 e textos em português.",
          en: "Province field, +258 phone numbers and Portuguese copy.",
        },
      },
      {
        title: {
          pt: "Template gratuito + Bootstrap para ganhar tempo",
          en: "Free template + Bootstrap to save time",
        },
        body: {
          pt: "Com três dias, partir de um template permitiu gastar o tempo nos fluxos de registo.",
          en: "With three days, starting from a template let us spend the time on the registration flows.",
        },
      },
      {
        title: { pt: "Branches e PRs numa equipa de 3", en: "Branches and PRs in a team of 3" },
        body: {
          pt: "Cada pessoa trabalhou no seu ramo e eu integrei as alterações por PR.",
          en: "Each person worked on their own branch and I merged changes through PRs.",
        },
      },
    ],
    results: [],
    images: [
      {
        src: "/work/donante/01.webp",
        alt: {
          pt: "Formulário \"Novo Doador\" com nome, email, telemóvel, província e tipo de doador",
          en: "\"New Donor\" form with name, email, phone, province and donor type",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/donante/02.webp",
        alt: {
          pt: "Formulário \"Registo das Necessidades\" com dados do solicitante e género",
          en: "\"Needs registration\" form with requester details and gender",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/donante/03.webp",
        alt: {
          pt: "Página inicial do Donante: \"Vamos despertar para impactar vidas\"",
          en: "Donante home page: \"Let's wake up to impact lives\"",
        },
        width: 1440,
        height: 900,
        device: "desktop",
      },
      {
        src: "/work/donante/04.webp",
        alt: {
          pt: "Formulário de novo doador no telemóvel",
          en: "New donor form on a phone",
        },
        width: 780,
        height: 1688,
        device: "mobile",
      },
    ],
    links: [],
    order: 48,
  },

  // ───────────────────────── DoaMoz ─────────────────────────
  {
    slug: "doamoz",
    name: "DoaMoz",
    tagline: {
      pt: "Conceito de gestão de dadores de sangue com cartão digital do dador — documento de produto e protótipo de interface.",
      en: "A blood-donor management concept with a digital donor card — product document and UI prototype.",
    },
    period: "2026",
    status: "concept",
    categories: ["health"],
    tech: [],
    role: {
      pt: "Autor do documento de conceito, numa equipa de 3",
      en: "Author of the concept document, in a team of 3",
    },
    authorship: "team",
    problem: {
      pt: "A rede transfusional tem dados fragmentados, dificuldade em acompanhar dadores e baixa adesão comunitária. Os cartões de dador em papel perdem-se.",
      en: "The blood transfusion network has fragmented data, trouble tracking donors and low community uptake. Paper donor cards get lost.",
    },
    solution: {
      pt: "O conceito tem duas partes: gestão hospitalar em níveis (nível central, administração hospitalar e técnicos que registam dadores e doações) e uma app do dador com perfil, histórico, cartão digital com QR e calendário de elegibilidade. Existe o documento de produto e um protótipo de interface web e móvel; ainda não há código funcional.",
      en: "The concept has two parts: tiered hospital management (central level, hospital admins and technicians who record donors and donations) and a donor app with profile, history, a digital QR card and an eligibility calendar. What exists is the product document and a web and mobile UI prototype; there is no working code yet.",
    },
    decisions: [
      {
        title: {
          pt: "Multi-hospital por `hospital_id`",
          en: "Multi-hospital via `hospital_id`",
        },
        body: {
          pt: "Cada hospital vê só os seus dados; o nível central não pertence a nenhum hospital. (Proposta no documento.)",
          en: "Each hospital sees only its own data; the central level belongs to no hospital. (Proposed in the document.)",
        },
      },
      {
        title: {
          pt: "Elegibilidade por sexo: 90 ou 120 dias",
          en: "Eligibility by sex: 90 or 120 days",
        },
        body: {
          pt: "O calendário de retenção calcula a próxima doação possível segundo o intervalo para homens e mulheres. (Proposta no documento.)",
          en: "The retention calendar computes the next possible donation from the interval for men and women. (Proposed in the document.)",
        },
      },
      {
        title: {
          pt: "QR com hash em vez de dados em claro",
          en: "Hashed QR instead of plain data",
        },
        body: {
          pt: "O cartão digital não expõe dados pessoais no código QR. (Proposta no documento.)",
          en: "The digital card doesn't expose personal data in the QR code. (Proposed in the document.)",
        },
      },
      {
        title: {
          pt: "Fidelizar dadores antes de gerir stock",
          en: "Donor retention before stock management",
        },
        body: {
          pt: "A gestão de inventário de sangue fica para uma segunda fase; o MVP foca-se no fluxo de dadores.",
          en: "Blood inventory management is left for a second phase; the MVP focuses on the donor flow.",
        },
      },
    ],
    results: [],
    images: [
      {
        src: "/work/doamoz/01.webp",
        alt: {
          pt: "Protótipo da landing page do DoaMOZ: \"Junte-se a esta missão de salvar vidas\" e benefícios de ser dador",
          en: "DoaMOZ landing page prototype: \"Join this life-saving mission\" and donor benefits",
        },
        width: 1600,
        height: 920,
        device: "desktop",
      },
      {
        src: "/work/doamoz/02.webp",
        alt: {
          pt: "Protótipo do cartão digital do dador com tipo sanguíneo e espaço para o código QR (dados de demonstração)",
          en: "Digital donor card prototype with blood type and a QR code area (demo data)",
        },
        width: 916,
        height: 1862,
        device: "mobile",
      },
      {
        src: "/work/doamoz/03.webp",
        alt: {
          pt: "Protótipo do ecrã inicial do dador com estado de elegibilidade, pontos e resumo de doações (dados de demonstração)",
          en: "Donor home screen prototype with eligibility status, points and donation summary (demo data)",
        },
        width: 916,
        height: 1862,
        device: "mobile",
      },
      {
        src: "/work/doamoz/04.webp",
        alt: {
          pt: "Protótipo da secção \"Por que ser dador?\" com contadores de demonstração",
          en: "\"Why donate?\" section prototype with placeholder counters",
        },
        width: 1600,
        height: 920,
        device: "desktop",
      },
    ],
    links: [],
    featured: false,
    order: 49,
  },

  // ───────────────────────── Kukanela ─────────────────────────
  {
    slug: "kukanela",
    name: "Kukanela",
    tagline: {
      pt: "Ideia de app para apoiar a comunicação em língua gestual moçambicana; chegou a um esqueleto Ionic.",
      en: "An app idea to support communication in Mozambican sign language; it reached an Ionic scaffold.",
    },
    period: "2021–2022",
    status: "prototype",
    categories: ["community"],
    tech: ["Ionic", "Angular", "Capacitor"],
    role: {
      pt: "Co-criador da ideia (equipa); o código é de um colega",
      en: "Co-creator of the idea (team); the code is a colleague's",
    },
    authorship: "team",
    client: "EQUIP Moçambique",
    problem: {
      pt: "A comunicação entre ouvintes e pessoas surdas que usam língua gestual moçambicana é difícil no dia-a-dia, e há poucas ferramentas digitais para a apoiar.",
      en: "Everyday communication between hearing people and deaf people who use Mozambican sign language is hard, and few digital tools support it.",
    },
    solution: {
      pt: "O repositório tem o esqueleto de uma app Ionic/Angular com três separadores, feito por um colega. Existe também um vídeo de apresentação do conceito (2022). A tradução entre português e língua gestual não chegou a ser implementada.",
      en: "The repository holds an Ionic/Angular app scaffold with three tabs, built by a colleague. There is also a concept video (2022). Translation between Portuguese and sign language was never implemented.",
    },
    decisions: [],
    results: [],
    images: [],
    links: [],
    order: 50,
  },

  // ───────────────────────── SEMMO ─────────────────────────
  {
    slug: "semmo",
    name: "SEMMO",
    tagline: {
      pt: "Guia digital de protocolos de urgência obstétrica para profissionais de saúde.",
      en: "A digital guide to obstetric emergency protocols for health workers.",
    },
    period: "2021",
    status: "concept",
    categories: ["health"],
    tech: [],
    role: { pt: "Co-criador", en: "Co-creator" },
    authorship: "team",
    problem: {
      pt: "Em urgências de parto, as equipas precisam de aceder depressa aos protocolos clínicos, muitas vezes em unidades com poucos recursos.",
      en: "In childbirth emergencies, teams need fast access to clinical protocols, often in facilities with few resources.",
    },
    solution: {
      pt: "Uma aplicação que reúne protocolos obstétricos e guia a equipa passo a passo, pensada para acesso rápido e uso simples.",
      en: "An application that gathers obstetric protocols and guides the team step by step, designed for quick access and simple use.",
    },
    decisions: [],
    results: [],
    images: [],
    links: [],
    order: 51,
  },

  // ───────────────────────── Aidai ─────────────────────────
  {
    slug: "aidai",
    name: "Aidai",
    tagline: {
      pt: "App com mapa em tempo real que mostrava aos sobreviventes do ciclone Idai onde encontrar ajuda.",
      en: "An app with a live map showing Cyclone Idai survivors where to find relief.",
    },
    period: "2019",
    status: "archived",
    categories: ["community"],
    tech: [],
    role: {
      pt: "Arquitecto de soluções e coordenação tecnológica",
      en: "Solutions architect and technology coordination",
    },
    authorship: "team",
    problem: {
      pt: "O ciclone Idai devastou a região centro de Moçambique em Março de 2019. Clínicas improvisadas, pontos de distribuição de comida e abrigos em escolas mudavam de lugar constantemente, e os sobreviventes tinham dificuldade em encontrá-los.",
      en: "Cyclone Idai devastated central Mozambique in March 2019. Pop-up clinics, food distribution points and school shelters kept moving, and survivors struggled to find them.",
    },
    solution: {
      pt: "Mesmo sem electricidade e internet estáveis, a equipa técnica da Equip Moçambique criou e lançou rapidamente a AIDai, uma app com um mapa em tempo real dos pontos de ajuda (abrigos, clínicas, comida), além de guia e formulário de reporte. Segundo a Equip Moçambique, o Programa Alimentar Mundial referiu que a app era útil e que a usava também noutros desastres.",
      en: "Even without reliable electricity and internet, the Equip Mozambique tech team quickly built and launched AIDai, an app with a live map of relief points (shelters, clinics, food), plus a guide and a report form. According to Equip Mozambique, the World Food Programme said the app was useful and was using it for other disasters too.",
    },
    decisions: [],
    results: [],
    images: [
      {
        src: "/work/aidai/01.webp",
        alt: {
          pt: "App AIDai: mapa da Beira com marcadores de abrigos, clínicas e pontos de comida",
          en: "AIDai app: map of Beira with markers for shelters, clinics and food points",
        },
        width: 540,
        height: 960,
        device: "mobile",
      },
    ],
    links: [
      { label: { pt: "Página \"Other Apps\" na Equip Moçambique", en: "\"Other Apps\" page at Equip Mozambique" }, href: "https://equipmoz.org/projects/tech-team/other-apps/" },
    ],
    order: 52,
  },

  // ───────────────────────── KULTUARE ─────────────────────────
  {
    slug: "kultuare",
    name: "KULTUARE",
    tagline: {
      pt: "App de registo de fiéis para as igrejas cumprirem as regras de rastreio da COVID-19, feita em 3 semanas.",
      en: "An attendee registration app that helped churches meet COVID-19 contact-tracing rules, built in 3 weeks.",
    },
    period: "2020",
    status: "archived",
    categories: ["community"],
    tech: [],
    role: { pt: "Equipa técnica da Empoderando Moçambique", en: "Empoderando Moçambique tech team" },
    authorship: "team",
    problem: {
      pt: "Quando as igrejas reabriram em 2020, depois de meses fechadas pela pandemia, tinham de registar cada pessoa à entrada — idade, morada, contacto e outros dados — para o rastreio de contactos. Feito em papel, o registo era lento e pesado para as equipas de recepção.",
      en: "When churches reopened in 2020, after months closed by the pandemic, they had to register every person at the door — age, address, contact details and more — for contact tracing. Done on paper, registration was slow and tiring for the welcome teams.",
    },
    solution: {
      pt: "Dois membros da equipa técnica, que faziam esse registo nas suas igrejas, propuseram uma app; a direcção aprovou e a app foi desenvolvida e lançada em 3 semanas. Cada lista regista temperatura, nome, bairro e contacto de quem entra, e permite procurar membros já registados por código ou nome.",
      en: "Two tech team members who did this registration at their own churches proposed an app; leadership approved it and it was built and launched in 3 weeks. Each list records the temperature, name, neighbourhood and phone number of people entering, and lets the team look up already registered members by code or name.",
    },
    decisions: [],
    results: [
      {
        value: "1 h → ~10 min",
        label: { pt: "tempo de registo dos fiéis à entrada, do papel para a app", en: "time to register attendees at the door, from paper to app" },
        source: { pt: "equipmoz.org, página \"Other Apps\"", en: "equipmoz.org, \"Other Apps\" page" },
      },
    ],
    images: [
      {
        src: "/work/kultuare/01.webp",
        alt: {
          pt: "App KULTUARE: lista de registo com campos de temperatura, nome, bairro e telemóvel",
          en: "KULTUARE app: registration list with temperature, name, neighbourhood and phone fields",
        },
        width: 540,
        height: 960,
        device: "mobile",
      },
    ],
    links: [
      { label: { pt: "Página \"Other Apps\" na Equip Moçambique", en: "\"Other Apps\" page at Equip Mozambique" }, href: "https://equipmoz.org/projects/tech-team/other-apps/" },
    ],
    order: 53,
  },
];
