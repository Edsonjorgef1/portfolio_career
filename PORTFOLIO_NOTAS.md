# Notas do portefólio

Ponto de partida para a próxima actualização. Última revisão: **2026-09-30**.
Caminhos de repositórios são relativos a `~/DEV_SETUP/` (excepto os que começam por `/`).

## Como está organizado

- Conteúdo dos projectos: `lib/content/projects/*.ts` (tipos em `types/content.ts`), um ficheiro por grupo.
- Perfil, experiência, "Agora" e números do hero: `lib/content/profile.ts`. Certificações: `lib/content/certifications.ts`.
- Categorias e nomes canónicos de tecnologias (filtro da galeria): `lib/content/categories.ts`.
- Imagens: `public/work/<slug>/NN.webp` (≤ 1600 px, < 300 KB). A primeira imagem desktop é a capa do cartão.
- CV: página `/pt/cv` e `/en/cv` → PDF em `public/cv/` (gerar com o browser headless: `page.pdf`, A4, margens 14 mm).
- Texto para o LinkedIn: `LINKEDIN.md`.

## Decisões de 2026-10-04 (Edson)

- **Ocultos** (ficam no código com `hidden: true`, não aparecem no site): GrievanceSaaS, Alto Molócuè, MozLab Innovation Center.
- **Sem referências de GitHub no site**: não mostrar números de commits, notas de autoria nem fontes "git log/repositório". Manter só o período de actividade. Os campos `authorship` continuam nos dados mas não são mostrados.
- **Destaque na página inicial**: FAMS, JURIS, Kukura e os casos de sucesso MHC (mel) e OLIMAX (copra), ligados ao trabalho com a NIRAS (VaMoz Competir). Todos os projectos ficam em `/pt/projects` e `/en/projects`.
- **Posicionamento**: liderança técnica com perfil hands-on — gestão e coordenação (incl. projectos com coordenação internacional) sem largar o código: programação diária, revisão de código, integrações, decisões de arquitectura, pipelines e resolução de problemas em produção.
- **e-Acácia**: portal e app do Conselho Municipal de Maputo (eacacia.gov.mz; app da TechSolutions no Google Play, 500+ downloads em Out 2026); papel do Edson: revisão, testes e submissão às lojas.

- **Município do Dondo**: novas capturas (secretaria virtual, prestação de contas, departamentos; sem pessoas). Rodapé do site: "Desenvolvido por: Empoderando Moçambique". GIZ confirmado só no portal de transparência ("With support of GIZ/BGF-Mozambique"); a parceria GIZ no portal principal e na secretaria vem do Edson.
- **equipmoz.org/projects/tech-team e /other-apps**: fonte de AIDai (app de pontos de apoio pós-Idai, 2019), KULTUARE (registo de participantes em igrejas na COVID-19, 2020), HLink (origem no hackathon de 2020), e capturas de Consultare, Fonte da Vida, HLink, AIDai, KULTUARE. Downloads usados: Google Play (Fonte da Vida 50 mil+, JURIS 10 mil+, Out 2026); os contadores do equipmoz.org (80 000 e 30 000) não foram usados.

## Regras usadas (manter)

1. **Autoria (uso interno, não mostrar no site) = só `git log --all -i --author=edson`** (nomes Edson Famanda, Edson Jorge Francisco, edsonjorgef1; emails edson@equipmoz.org e Edsonjorgef1@gmail.com). O domínio `@equipmoz.org` é da equipa toda — não conta.
2. Nenhum número sem fonte. Cada `results[]` tem `source`. Números retirados em 2026-09 por falta de fonte: 100K+ utilizadores, 20.000 downloads JURIS, 50.000/80.000 Fonte da Vida, 55.000 produtores, 15+ empresas / 6 províncias, 16 profissionais liderados, 98–99,9% uptime, 70% menos dados.
3. Projectos com ~0 commits próprios aparecem como "team" com o papel real.
4. Capturas: nunca dados pessoais, emails, nomes de utentes/alunos/membros, tokens, IPs/MACs/números de série, barra de favoritos, caminhos com o nome de utilizador. Nunca logótipos de terceiros sem autorização.

## Projectos (46)

| Ordem | Slug | Nome | Período | Estado | Autoria | Imagens | Fonte |
|---|---|---|---|---|---|---|---|
| 1 | `fams` | FAMS – Farmer & Agent Management System | 2021–2026 | production | main | 6 | EQUIPMOZ/FAMS_Backend, EQUIPMOZ/fams-desktop (changelog.json), EQUIPMOZ/fams-mobile, EQUIPMOZ/fams-electron-desktop, fams-pwa-monorepo |
| 2 | `fams-mahala` | FAMS Mahala – plano gratuito multi-empresa | 2026 | production | contributor | 2 | EQUIPMOZ/fams-desktop (branch deploy/mahala), EQUIPMOZ/FAMS_Freemium |
| 3 | `fams-implementations` | Implementações do FAMS em clientes | 2024–2026 | production | consulting | 0 | sem repo — relatórios NIRAS/GIZ, CV |
| 4 | `vamoz-competir` | VaMoz Competir – GIZ / NIRAS | 2025–2026 | production | consulting | 0 | sem repo — relatório NIRAS |
| 5 | `proecon` | ProEcon – GIZ / COMO Consult | 2021–2023 | archived | consulting | 0 | sem repo — CV GIZ |
| 6 | `fams-website` | Site do FAMS | 2024–2026 | production | main | 3 | EQUIPMOZ/fams-website |
| 7 | `laravel-teams-logging` | laravel-teams-logging | 2022 | production | contributor | 2 | EDSON/GitHub/laravel-teams-logging (fork), Packagist |
| 20 | `funae-mgqr` | FUNAE – MGQR (Mecanismo de Gestão de Queixas e Reclamações) | 2025–2026 | archived | main | 5 | PROJECTOS_CLIENTES/TECHSOLUTIONS/FUNAE |
| 21 | `siga-ipp` | SIGA – Instituto Politécnico Planalto | 2026 | development | contributor | 3 | /Applications/MAMP/htdocs/ipp |
| 22 | `municipio-do-dondo` | Município do Dondo – Portal Oficial | 2019–2026 | production | consulting | 0 | sem repo — site público |
| 23 | `sigem-plus` | SIGEM+ – Sistema Integrado de Gestão de Membros | 2026 | prototype | contributor | 5 | PROJECTOS_CLIENTES/FRENTE (sigem-web, sigem-mobile) |
| 24 | `start-escolar` | Start Escolar | 2019–2022 | archived | main | 0 | EQUIPMOZ/Start%20Escolar |
| 25 | `djobar` | Djobar – Plataforma de Emprego | 2022 | archived | main | 0 | EDSON/GitHub/2 - WORK PROJECTS/djobar_platform |
| 26 | `library-access-analytics` | Biblioteca Beireano – Registo de Presenças | 2023–2026 | production | lead | 4 | sem repo — PORTFOLIO/BIBLIOTECA, app Vercel |
| 27 | `aem-controle-ponto` | AEM Controle de Ponto (CPonto) | 2025–2026 | development | contributor | 3 | EDSON/AEM_Controle-Ponto, PORTFOLIO/Cponto.vercel |
| 28 | `grievance-saas` | GrievanceSaaS | 2026 | concept | lead | 0 | PROJECTOS_CLIENTES/PESSOAL/grievance-saas |
| 29 | `absentify-teams` | Gestão de Ausências com Absentify e Microsoft Teams | 2024–2026 | production | consulting | 3 | sem repo — capturas em PORTFOLIO |
| 30 | `alto-molocue-website` | Alto Molócuè – Website Institucional | 2022 | prototype | lead | 4 | EDSON/alto_mulocue-website |
| 31 | `e-acacia` | E.Acacia – Pagamento de Taxas Municipais | 2025–2026 | archived | consulting | 0 | sem repo — CV |
| 40 | `consultare` | Consultare | 2019–2021 | production | main | 5 | EQUIPMOZ/consultare-api, PORTFOLIO/CONSULTAR |
| 41 | `juris` | JURIS | 2020–2024 | production | contributor | 5 | EQUIPMOZ/juris_api, EDSON/GitHub/4-FORKED_REPO/Juris_Website |
| 42 | `fonte-da-vida` | Fonte da Vida | 2021–2022 | production | main | 2 | EQUIPMOZ/fonte_api_laravel, EQUIPMOZ/FONTE-WHATSAPP |
| 43 | `kukura` | Kukura | 2024–2026 | production | contributor | 3 | EQUIPMOZ/DPT_Backend, EQUIPMOZ/Kukura_App, MOBILE_APPS/DPT_App |
| 44 | `hlink` | H-Link | 2021–2022 | archived | main | 0 | EQUIPMOZ/hlink-backend |
| 45 | `abastece` | Abastece | 2026 | production | contributor | 3 | EQUIPMOZ/Abastece_Marketing, Abastece_App, Abastece_Backend |
| 46 | `c-yanga` | C-Yanga | 2020–2021 | archived | contributor | 0 | EDSON/c-yanga_api, EDSON/c-yanga |
| 47 | `mozsaude` | MozSaúde | 2022–2025 | prototype | lead | 3 | EDSON/mozsaude_app, EDSON/Laravel_Admin_Panel/craftable_admin |
| 48 | `donante` | Donante | 2021 | prototype | main | 4 | EDSON/GitHub/3 - COLLABORATION PROJECTS/donante-marketplace |
| 49 | `doamoz` | DoaMoz | 2026 | concept | team | 4 | mozlab-innovation-center (conceito), PORTFOLIO/Doa |
| 50 | `kukanela` | Kukanela | 2021–2022 | prototype | team | 0 | EDSON/GitHub/3 - COLLABORATION PROJECTS/ko-kanela |
| 51 | `semmo` | SEMMO | 2021 | concept | team | 0 | sem repo — texto do site anterior |
| 52 | `aidai` | Aidai | 2019 | concept | team | 0 | sem repo — texto do site anterior |
| 53 | `kultuare` | KULTUARE | 2021 | concept | team | 0 | sem repo — texto do site anterior |
| 70 | `karibu-menu` | Karibu Menu | 2025–2026 | development | main | 6 | PROJECTOS_CLIENTES/PESSOAL/karibu-menu (antes Manna), PORTFOLIO/MANNA |
| 71 | `mygym` | MyGym (FF Gym) | 2025–2026 | development | lead | 2 | PROJECTOS_CLIENTES/HENRY/ffgym-mvp (+ ff_gym, ffgym-app, ffgym_app) |
| 72 | `hospitality-networks` | Redes Wi-Fi para hotelaria | 2024–2025 | production | consulting | 4 | sem repo — PORTFOLIO/RUIJIIE + TENDA |
| 73 | `edsonfrancisco-site` | edsonfrancisco.site | 2026 | production | lead | 2 | EDSON/edsonfrancisco-site |
| 74 | `casa-msika` | Casa Msika Lodge | 2022 | production | lead | 2 | sem repo — site público |
| 75 | `github-actions-template` | GitHub Actions Template | 2024 | archived | lead | 0 | EDSON/GitHub/4-FORKED_REPO/GitHub-Actions-Template |
| 76 | `sitehealth` | SiteHealth | 2022 | prototype | lead | 0 | EQUIPMOZ/SiteHealth |
| 77 | `perpi-dashboard` | Perpi Dashboard | 2025 | development | contributor | 0 | MOZ-Coders/perpi_desktop |
| 78 | `residencial-bendiak` | Residencial Bendiak | 2025 | prototype | contributor | 2 | MOZ-Coders/Residencial-Bendiak |
| 79 | `mozlab` | MozLab Innovation Center | 2026 | concept | lead | 0 | EQUIPMOZ/mozlab-innovation-center |
| 80 | `sms-usendit` | uSendIt PHP | 2022 | prototype | lead | 0 | EDSON/PHP_PACKAGES/SMS_uSendIt |
| 81 | `micacao-wallet` | MiCacao Wallet (estudo) | 2026 | development | contributor | 0 | EDSON/micacao-wallet (fork) |
| 82 | `learning-wisdom` | Learning Wisdom | 2026 | development | team | 0 | sem repo — texto do site anterior |

Fora do site (decisão 2026-09): Recall e SecureLink API (0 commits próprios), sysadmin-linux_tips, laravel-livewire_challenge, ePetition-API, Digital-Resume (capturas com email/telefone), FAMS Mobile e FAMS Electron como projectos separados (são da equipa; mencionados no estudo de caso FAMS).

## Fontes das capturas

- **Novas (2026-09-29/30):** browser headless (Playwright, Chromium) em 1440×900 e 390×844.
  - Sites públicos, sem login nem formulários: fams.co.mz, mahala.fams.co.mz, juris.co.mz, abastece.co.mz, fontedavida.org, consultare, kukura.co.mz, casamsika.com, edsonfrancisco.site, Packagist/GitHub (laravel-teams-logging), páginas públicas de login do SIGA.
  - Execução local sem base de dados: fams-website (`php -S`), SIGEM+ (dados demo em localStorage), MozSaúde (cópia no scratchpad), Kukura App (ecrã de login), Donante, Alto Molócuè, MyGym e Residencial Bendiak (ecrãs de login).
- **Existentes:** `~/DEV_SETUP/PORTFOLIO/**`, só as marcadas SAFE no inventário, ou recortadas e verificadas visualmente (ex.: barra de favoritos nas capturas FUNAE, faixa preta no mapa FAMS, linha de email no Packagist).
- **Não usar (UNSAFE):** QR attendance 03/04 (funcionários AEM), redes de hotelaria 03/04/05/06 (token `stok=`, SN, MAC), FAMS com nomes reais, FUNAE #01/#02 (emails) e #40 (email em queixa anónima), SIGEM+ `05.png`/`06.png` e dashboards com totais por província, Consultare login com autofill, dashboard JURIS com contagem de denúncias, capturas do Digital Resume, login de produção do FAMS (mostra o Laravel Debugbar), fotos/WhatsApp com pessoas privadas, Dondo (caras e nomes de beneficiários).

## Referências externas (verificadas em 2026-10-04)

- **VaMoz Competir** — ficha GIZ (Out 2025): BMZ, cofinanciado pela UE, 01.09.2023–31.03.2029, EUR 32,5 M, hubs Inhambane/Beira/Maputo/Nampula, linha de trabalho com "digital solutions for supply chain management". https://www.giz.de/sites/default/files/media/pkb-document/2025-12/giz2025-en-vamoz-competir-factsheet.pdf · NIRAS: implementado pela NIRAS com o MADER; 10 empresas-âncora, 70 MPME, 8 000 pequenas explorações (números do programa, não do FAMS). https://library.niras.com/capstat/agri/inclusive-resilient-agriculture-market-systems
- **Kulima ndi Malonda** (guia NIRAS/GIZ) — descreve o FAMS como desenvolvido pela ONG Empoderando com apoio da GIZ; no piloto (Nov 2022) a Luteari usou o FAMS para dados de base e notas dos técnicos. O "até 80% de produtividade" e os 1 500 produtores formados são resultados da formação KnM, **não** do FAMS — não atribuir ao FAMS. https://www.niras.com/media/cchl2swj/kulima-ndi-malonda_reduce-size.pdf
- **COMO Consult** — programa de promoção de empresas locais da GIZ (desde 2015, 40+ projectos locais; critérios de competitividade; códigos de barras para rastreabilidade). Não nomeia o ProEcon nem o FAMS: usado só como contexto. https://como-consult.de/en/cases/promotionoflocalcompaniesinmozambiqueandtheirsuppliers/
- Não usados: textos colados com "15+ agroindústrias" e "dezenas de milhares de produtores" — sem fonte primária.

## Relatórios internos usados (enviados pelo Edson a 2026-10-04)

- *Report_FAMS_NIRAS_Out2025-Jul2026* (relatório técnico geral para a NIRAS; dados dos painéis a 10 Set 2026) — fonte dos números VaMoz e implementações: 13 300+ produtores em 5 empresas; Thandizana 6 329 (2 937 em Fev 2026); Moz Agri 4 780 (72 em Jan 2026); ~150 duplicados corrigidos na Green Agro; 740 registos de presença GIZ/Reframe.
- *Trip_Report_FAMS_Missions_NIRAS_EN* (Jul 2026) e *Relatório de Viagem à Catandica* (MozAgri) — adopção: ~25 agentes, 11 usam a app, 1 sincroniza com regularidade.
- *Relatorio_Implementacao_FAMS_MHC* (30 Set 2026) — rastreabilidade do mel por balde.
- Deixado de fora de propósito: nomes de pessoas dos clientes, preços de equipamento, rendimentos de fábrica, cartas de conformidade/licenças e negociações, suspensões e decisões de saída de clientes, ajudas de custo, links do Google Photos, telefone.
- **Por confirmar:** a missão de seguimento MozAgri aparece como 20–23 Jun 2026 no relatório em português e 20–24 Jul 2026 nos relatórios consolidados (usou-se Jul 2026). A refactorização do módulo de Formações aparece como "prevista Ago–Set" no relatório de viagem e "concluída" no relatório geral (usou-se o mais recente).

## Informação dada pelo Edson (2026-10-04)

- **JURIS**: em produção; o Edson é supervisor do departamento técnico que o mantém; Juris Bot (sistema de chat no WhatsApp) lançado a 30 Set 2026. Sem repositório do bot localizado nem commits recentes na `juris_api` — a fonte destes factos é o próprio Edson; **não há** detalhes técnicos do bot no site. Para a próxima actualização: indicar o repositório do bot para se poder descrever o que ele faz.

- **Impacto do FAMS (todas as empresas)** — painel de impacto do FAMS, capturas enviadas pelo Edson a 2026-10-04: 55 422 agricultores digitalizados (alcançados: 1454); 27 997 mulheres (50,52%); 26 198,63 ha; volume total 8952,12 t (campo 5645,96 · fábrica 966,35); produção 2 339 800 kg; compras na fábrica 966 353,80 kg (339 fornecedores); 10 126 insumos distribuídos (343 distribuições, 321 produtores); rendimento aos agricultores 1 526 984,42 USD (97 552 190,24 MZN); valor total de compra 1 775 360,95 USD (113 419 853,54 MZN); 9 cadeias de valor (copra, algodão, milho, soja, gado caprino, arroz, gado bovino, mel Chimanimani, gado bovino macho); 7 províncias (Gaza, Niassa, Sofala, Zambézia, Nampula, Manica, Inhambane). Copra = 6293 t / 1 633 634 USD do total de compras. O painel não indica período: **não** dizer "por ano". Substitui os "60 000+ / até US$ 2M/ano" ditos de memória e os "55.000" retirados em 2026-09. O número da NIRAS (13 300+) continua só no caso VaMoz.

- **Juris Bot — imagens** (enviadas pelo Edson a 2026-10-04): campanha "Conhece os teus direitos", instruções de uso, banner de lançamento, cartaz com QR e foto do bolo do lançamento → `public/work/juris/06–10.webp`. Material de comunicação do próprio projecto (número do bot é o oficial, público).
- **Fontes no site**: o rótulo "Fonte/Source" deixou de aparecer; só se mostra o link quando a fonte é pública e verificável (`url` no Fact).
- **Capas e partilha**: capas tipográficas com fluxo do processo (MHC, OLIMAX) quando não há capturas; imagens Open Graph geradas no build (`app/[locale]/opengraph-image.tsx`, `lib/og.tsx`, fontes Geist em `assets/fonts`).

## Informação dada pelo Edson (2026-10-06)

- **Experiência desde 2018**: o hero passa de "2019–2026" para "2018 – hoje" (estágio ENSYS, Out 2018).
- **Consultorias NIRAS e GIZ** na experiência: NIRAS/VaMoz Competir (Out 2025 – Jul 2026, Especialista Técnico Nacional em Digitalização) e GIZ/ProEcon com COMO Consult (Fev 2021 – Nov 2023). Datas e papéis vêm dos casos `vamoz-competir` e `proecon`.
- **OLIMAX** (corrigido pelo Edson a 2026-10-08): FAMS implementado em **2024** — usar só o ano, sem mês (antes "Junho" e depois "Dezembro"), continua em uso, com melhorias nos relatórios de rastreabilidade e no painel de impacto com métricas; compras de copra no campo e na fábrica registadas desde então até hoje. **Sem valor em USD** no site (o "US$ 1 700 000" foi retirado) e **sem parceiros** no caso. Período 2024–2026.
- **Sociedade de Mutuali** (Edson, 2026-10-08): fábrica de fibra de algodão, 2023, no âmbito do ProEcon (GIZ) com a COMO Consult — registo de produtores, insumos a crédito, compra de algodão de 1.ª e 2.ª com abate de dívida, transporte, armazenamento, produção e classificação da qualidade. Sem números nem imagens; estado actual de uso não confirmado (marcado "archived").
- **Moz Agri** (Edson, 2026-10-08): página própria `moz-agri-fams-implementation` — compra de caprinos e de carne; missão 26–30 Jan 2026 (escritório, campo, fábrica, matadouro); 4 780 produtores (relatório NIRAS). Os "450–600 produtores" e "cadeia COPRA" do site antigo não foram usados.
- **Manna Software** (Edson, 2026-10-08): página própria `manna-software`, arquivado (Abr 2025 – Fev 2026), continuou como Karibu Menu. Sem imagens: as capturas antigas já são usadas no Karibu Menu e o dashboard antigo era um template com dados fictícios e barra do browser pessoal.
- **Imagens MHC e OLIMAX** → `public/work/mhc/01–13.webp` e `public/work/olimax/01–10.webp`. EXIF (incl. GPS) removido em todas.
  - MHC 01–10: fotos enviadas pelo Edson a 2026-10-06 (Zomba/Chimanimani e fábrica de Chimoio, 23–24 Set 2026), em ordem do processo: placa do centro de serviços de mel → compra e pesagem no campo → registo → terminal FAMS (recortado para excluir uma t-shirt de campanha política; crachá desfocado) → etiqueta do balde (nome do técnico desfocado) → baldes com código de barras no armazém → enchimento → palete → produtos finais (clareada). 11: ecrã da app (nome desfocado). 12–13: equipas FAMS + MHC (`~/Downloads/IMG_1702.heic`, `IMG_1698.heic`). **Não usada:** foto das apicultoras sentadas com crianças.
  - OLIMAX: `~/DEV_SETUP/EQUIPMOZ/fams-website/images/olimax/**`; nomes de utilizadores desfocados. Não usados: recibos impressos e lista de compras (nomes de produtores), perfil de utilizador, quadro branco com produção por linha, fichas em papel da MHC.
  - **Capas**: projectos com `flow` (MHC, OLIMAX) mostram sempre a capa tipográfica com as etapas digitalizadas — nos cartões (início e galeria) e no topo da página do projecto, com legenda "Etapas digitalizadas no FAMS". As fotos ficam na secção "Imagens" (antes "Capturas").
- **/now**: removido o ponto "A aprender React Native" (micacao-wallet). O projecto `micacao-wallet` continua na galeria.

## Informação dada pelo Edson (2026-10-08) — sectores e ODS

Contexto: análise para uma candidatura do FAMS, registada aqui como referência para futuros formulários.

**Sector principal:** "Traceability, Transparency & Resilient Value Chains" — rastreabilidade, códigos de barras, controlo de qualidade, compras, pagamentos, stock e histórico completo do produto (muito forte). **Secundários recomendados:** "Market Access, Aggregation & Farmer Platforms" (cadastro, agregação, pontos de recolha, ligação produtor–agronegócio) e, como terceiro, "Farm Productivity, Inputs & Precision Agriculture"; se a candidatura enfatizar pagamentos móveis e crédito, o terceiro passa a "Agri-Fintech & Farmer Financial Resilience" (M-Pesa, dívidas, reconciliação). Alinhamentos mais fracos: Supply Chain/Logistics (médio — não destacar cold chain, não há controlo de temperatura), Post-Harvest (médio), Data & Climate Intelligence (médio/forte), Food Security (indirecto), Climate-Smart (potencial, não principal), Water/Irrigation (fraco — sem funcionalidade central de água).

**ODS declarados na candidatura:** principais 2 (2.3, 2.4), 8 (8.2, 8.3, 8.10), 9 (9.3, 9.4, 9.c) e 12 (12.3, 12.6); complementares 1, 5, 10 e 16; ODS 13 só se houver funcionalidades climáticas concretas (hoje o contributo é apenas habilitador — dados de impactos, práticas resilientes, alertas por SMS; faltam previsões meteorológicas, alertas de seca, calendários climáticos e indicadores de solo).

**O que está no site:**
- FAMS: bloco ODS estruturado na página do projecto (4 principais: 2, 8, 9, 12; 5 complementares: 1, 5, 10, 16 e 13 como contributo apenas habilitador), e ponto na experiência (`profile.ts`). O antigo capítulo de ODS em prosa no estudo de caso foi substituído por este bloco, para não duplicar.
- Novo campo `sdgs` no tipo `Project` (`types/content.ts`), com títulos e cores oficiais em `lib/content/sdgs.ts`, renderizado na página do projecto (`components/site/project-page.tsx`) depois de "O que aprendi", com etiqueta "principal"/"complementar".
- ODS por projecto (2026-10-08): fams 2, 8, 9, 12 (principais) + 1, 5, 10, 16, 13 · fams-mahala 2, 8, 9 · fams-implementations 2, 8, 10 · mhc-honey-traceability 2, 12, 15 · olimax-copra 2, 12, 8 · mutuali-cotton 2, 8, 12 · moz-agri-fams-implementation 2, 8 · manna-software 8 · vamoz-competir 2, 9, 8 · proecon 2, 9 · funae-mgqr 16, 7 · siga-ipp 4, 9 · municipio-do-dondo 16, 11, 10 · e-acacia 16, 11 · start-escolar 4, 8 · djobar 8, 10 · consultare 3 · juris 16, 5 · kukura 17, 10 · hlink 3 · abastece 7 · mozsaude 3 · doamoz 3 · kukanela 10 · semmo 3 · aidai 11, 13 · kultuare 3 · karibu-menu 8 · mygym 8 · hospitality-networks 9 · micacao-wallet 15, 2.
- **Sem ODS** (de propósito): fams-website, laravel-teams-logging, github-actions-template, sitehealth, perpi-dashboard, residencial-bendiak, edsonfrancisco-site, casa-msika, aem-controle-ponto, c-yanga, fonte-da-vida, donante, sigem-plus (registo de membros de um partido — sem enquadramento defensável), grievance-saas e alto-molocue-website (ocultos), learning-wisdom, sms-usendit, mozlab.

## Para a próxima actualização

1. Correr o levantamento: procurar repositórios em `~/DEV_SETUP` e `/Applications/MAMP/htdocs`, contar commits com a regra 1 e comparar com a tabela acima.
2. Actualizar `NOW` em `lib/content/profile.ts` (cada ponto com evidência de commit recente) e o `PROOF` do hero (commits e versões do FAMS: `changelog.json`).
3. Regenerar os PDFs do CV depois de alterar experiência ou projectos.
4. Verificar em headless (desktop + mobile): 0 imagens partidas, 0 erros de consola, sem scroll horizontal, `lang` certo em /pt e /en.

## Por confirmar com o Edson

- FUNAE MGQR: está "arquivado" porque o domínio de produção não resolve — mudar se ainda estiver no ar.
- Reconhecimentos dos hackathons (C-Yanga 1.º lugar 2020, Donante 2.º lugar 2021): vêm do site anterior; o git do Donante mostra Out 2021 (o site dizia Nov 2021).
- SIGEM+: os commits estão com a identidade genérica "SIGEM Dev"; o repo está na conta do Edson.
- Biblioteca: autoria "lead" baseada no papel indicado no site anterior (não há repositório).
- Aidai, KULTUARE, SEMMO, Learning Wisdom, E.Acacia: só há texto do CV/site anterior — sem capturas nem repositório.
