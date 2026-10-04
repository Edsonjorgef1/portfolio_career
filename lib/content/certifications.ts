import type { L } from "@/types/content";

export type Certification = { name: string; issuer: string; issuedPt: string; issuedEn: string; credentialId?: string; skills?: string[] };

export const CERTIFICATION_GROUPS: { name: L; items: Certification[] }[] = [
      {
        name: { pt: "Liderança & Empreendedorismo",
          en: "Leadership & Entrepreneurship" },
        items: [
          { name: "SPRINT 2025 For Founders", issuer: "Renew Capital", issuedPt: "Jun 2025", issuedEn: "Jun 2025", credentialId: "67d3dd8f858088cb7500cfab" },
          { name: "Digital Transformation", issuer: "Simplilearn", issuedPt: "Out 2022", issuedEn: "Oct 2022", credentialId: "3895492", skills: ["ICT", "Database Applications"] },
          { name: "Entrepreneurial Mindset", issuer: "DIO", issuedPt: "Set 2020", issuedEn: "Sep 2020", credentialId: "557AA050" },
          { name: "Fundamentals of Intrapreneurship", issuer: "DIO", issuedPt: "Set 2020", issuedEn: "Sep 2020", credentialId: "A9199A0E" },
          { name: "Bootcamp: Become Remote", issuer: "DIO", issuedPt: "Ago 2020", issuedEn: "Aug 2020", credentialId: "09961A90" },
          { name: "Linguagem Corporal no Mundo Digital", issuer: "LinkedIn", issuedPt: "Jan 2022", issuedEn: "Jan 2022", credentialId: "Ae5QfeQBZT3V31MMj0sLjEX_D30_" },
        ],
      },
      {
        name: { pt: "Segurança & IT",
          en: "Security & IT" },
        items: [
          { name: "Cybersecurity & IT Awareness Training: Data Protection, GDPR and Information Security", issuer: "Internal / Professional Training", issuedPt: "2024", issuedEn: "2024" },
          { name: "Microsoft Office 365: Administração", issuer: "LinkedIn", issuedPt: "Nov 2021", issuedEn: "Nov 2021", credentialId: "AR6R2h0OHbqbB08f5ENpRSA3wFsh", skills: ["ICT", "Office 365"] },
          { name: "Linux: An Introduction to the Operating System", issuer: "DIO", issuedPt: "Ago 2020", issuedEn: "Aug 2020", credentialId: "84432FDF", skills: ["Linux", "Ubuntu"] },
          { name: "Container Orchestration with Docker", issuer: "DIO", issuedPt: "Out 2020", issuedEn: "Oct 2020", credentialId: "1C224546", skills: ["Docker"] },
        ],
      },
      {
        name: { pt: "Qualidade & Testes de Software",
          en: "Software Quality & Testing" },
        items: [
          { name: "LambdaTest Software Testing Professional Certificate", issuer: "LambdaTest (TestMu AI)", issuedPt: "Dez 2024", issuedEn: "Dec 2024", skills: ["Agile Testing", "QA"] },
          { name: "Succeeding in Software Testing", issuer: "LinkedIn", issuedPt: "Dez 2024", issuedEn: "Dec 2024" },
          { name: "Agile Testing", issuer: "LinkedIn", issuedPt: "Dez 2024", issuedEn: "Dec 2024", skills: ["Agile Testing"] },
          { name: "Software Testing Tips Weekly", issuer: "LinkedIn", issuedPt: "Dez 2024", issuedEn: "Dec 2024" },
          { name: "Programming Foundations: Software Testing/QA", issuer: "LinkedIn", issuedPt: "Dez 2024", issuedEn: "Dec 2024", skills: ["QA", "Software Testing"] },
        ],
      },
      {
        name: { pt: "Cloud, DevOps & Infraestrutura",
          en: "Cloud, DevOps & Infrastructure" },
        items: [
          { name: "Cloud Practitioner Essentials Day (Live Training)", issuer: "Amazon Web Services (AWS)", issuedPt: "Fev 2022", issuedEn: "Feb 2022" },
          { name: "Developing CI/CD Solutions with Azure DevOps", issuer: "LinkedIn", issuedPt: "Jan 2022", issuedEn: "Jan 2022", credentialId: "AeeNALPRYzRqydQoSycazQFtjAUV" },
          { name: "DevOps with AWS", issuer: "LinkedIn", issuedPt: "Jan 2022", issuedEn: "Jan 2022", credentialId: "ARQFPtTdji622fA-D5biwS356y1B", skills: ["Nginx", "AWS"] },
          { name: "Nail Your DevOps Interview", issuer: "LinkedIn", issuedPt: "Jan 2022", issuedEn: "Jan 2022" },
          { name: "Succeeding in DevOps", issuer: "LinkedIn", issuedPt: "Jan 2022", issuedEn: "Jan 2022", credentialId: "AVnNBCo-6RTMozrLdAiCcoRTeam0", skills: ["DevOps", "Infrastructure"] },
          { name: "Bootcamp Immersão AWS com Docker", issuer: "Oregon EAD", issuedPt: "Out 2022", issuedEn: "Oct 2022", credentialId: "6aa3015e6aeaa118abd18597e57d0a54", skills: ["AWS"] },
          { name: "Bootcamp: Cloud Computing & Serverless", issuer: "DIO", issuedPt: "Jul 2020", issuedEn: "Jul 2020", credentialId: "FF38E074", skills: ["Linux", "Cloud"] },
          { name: "Software Development with Azure Static Web Apps and GitHub Actions", issuer: "DIO", issuedPt: "Jul 2020", issuedEn: "Jul 2020", credentialId: "DFA04622" },
        ],
      },
      {
        name: { pt: "Desenvolvimento de Software",
          en: "Software Development" },
        items: [
          { name: "Better Eloquent Performance (Laravel)", issuer: "LaravelDaily", issuedPt: "Jan 2022", issuedEn: "Jan 2022", credentialId: "cert_9xxwvhhy", skills: ["Laravel", "OOP"] },
          { name: "10+ Laravel Refactoring Examples", issuer: "LaravelDaily", issuedPt: "Jan 2022", issuedEn: "Jan 2022", credentialId: "cert_t8h9nshq", skills: ["Laravel", "OOP"] },
          { name: "Building RESTful APIs in Laravel", issuer: "LinkedIn", issuedPt: "Dez 2021", issuedEn: "Dec 2021", credentialId: "ASori9KjieJ-wZo4vh6b2UIPKKeK", skills: ["REST", "Laravel"] },
          { name: "Datatables in Laravel", issuer: "LaravelDaily", issuedPt: "Dez 2021", issuedEn: "Dec 2021", credentialId: "cert_qnqvtpnn", skills: ["Laravel"] },
          { name: "Advanced development in PHP", issuer: "DIO", issuedPt: "Jul 2021", issuedEn: "Jul 2021", credentialId: "8007FEEA" },
          { name: "Bootcamp: SPTech Back-end Developer", issuer: "DIO", issuedPt: "Jul 2021", issuedEn: "Jul 2021", credentialId: "D4E37578" },
          { name: "Introdução ao Vue.js 3", issuer: "EspecializaTi", issuedPt: "Abr 2021", issuedEn: "Apr 2021", credentialId: "kZG39yFq13" },
          { name: "Bootcamp: HTML Web Developer", issuer: "DIO", issuedPt: "Fev 2021", issuedEn: "Feb 2021", credentialId: "6E37CE6B" },
          { name: "JavaScript as a Second Language", issuer: "LinkedIn", issuedPt: "Jan 2022", issuedEn: "Jan 2022", credentialId: "ARWtOTi0-0x4SB14S5Ry1edPeX9e", skills: ["JavaScript"] },
          { name: "Concepts and Best Practices with PostgreSQL", issuer: "DIO", issuedPt: "Jul 2021", issuedEn: "Jul 2021", credentialId: "84276A7E", skills: ["PostgreSQL"] },
        ],
      },
      {
        name: { pt: "Formação Técnica & Educação",
          en: "Technical Training & Education" },
        items: [
          { name: "Programming and Webdesign Technical Course", issuer: "Above Moçambique", issuedPt: "Out 2015", issuedEn: "Oct 2015" },
          { name: "Course in General and Financial Accounting with Applied Informatics", issuer: "Lusac CFL", issuedPt: "Dez 2015", issuedEn: "Dec 2015" },
          { name: "Third Level of English Course", issuer: "Centro Cultural Padre Cirilo (Jesuítas)", issuedPt: "Set 2013", issuedEn: "Sep 2013" },
        ],
      },
];
