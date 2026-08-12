import type { ProjectTranslation } from "./projects";

/** Portuguese project copy, keyed by slug. Missing keys fall back to English. */
export const PROJECTS_PT: Record<string, ProjectTranslation> = {
  "b2b-manufacturing-portal-development": {
    title: "Portal B2B para um fabricante industrial de configuração sob encomenda",
    excerpt:
      "Ampliação de um portal de manufatura legado com autoatendimento para clientes, digitalização do fluxo de armazém e visibilidade de produção, sem interromper a operação ao vivo.",
    client: "Fabricante B2B norte-americano de sistemas industriais modulares sob encomenda (NDA)",
    duration: "2024 – em andamento",
    challenge:
      "O portal existente era estável, mas os fluxos principais ainda dependiam de atualizações manuais e planilhas. Os clientes precisavam de suporte interno para alterar pedidos e configurar produtos, e as equipes de armazém dependiam de etapas manuais para estoque e preparação de envios. As paradas de produção não tinham acompanhamento estruturado, limitando a visibilidade dos gargalos.",
    solution: [
      "Configurador de produto voltado ao cliente para configurar, precificar e recomprar de forma autônoma.",
      "Rastreamento de entradas no armazém com leitura de código de barras e estoque em tempo real.",
      "Documentação de envio automatizada e integração com operadores logísticos.",
      "Registro de paradas de produção por máquina, área, duração e motivo.",
      "Controle de acesso por perfil e monitoramento de integrações em sete sistemas conectados.",
      "Entrega incremental para preservar a estabilidade do sistema de produção.",
    ],
    resultLabels: [
      "Menos etapas manuais",
      "Módulos críticos entregues",
      "Integrações implantadas",
      "Paradas de produção nas entregas",
    ],
    outcomes: [
      "As integrações cobrem Stripe, APIs de transportadoras, conciliação bancária, SharePoint, Office 365 e Google Analytics.",
    ],
  },

  "kentico-13-to-xperience-migration": {
    title:
      "Migração de um portal B2B com milhares de SKUs do Kentico 13 para o Xperience by Kentico",
    excerpt:
      "Um fabricante global de materiais de construção migrou para o Xperience by Kentico um portal com mais de 350 distribuidores em 18 países, preservando mais de 12.000 SKUs e todas as integrações.",
    client: "Fabricante global B2B de materiais de construção (NDA)",
    duration: "05/2025 — 12/2025",
    challenge:
      "A arquitetura do portal tornou-se arriscada e lenta, com mais de 40 tipos de página personalizados e mais de 80 widgets fortemente interdependentes. A sincronização com ERP e CRM dependia de planilhas manuais, gerando preços e estoque desatualizados. Cada nova campanha exigia ciclos de desenvolvimento de 10 a 12 semanas, e a autenticação de distribuidores estava fragmentada entre portal, Salesforce e ERP.",
    solution: [
      "Três migrações de ensaio completas em ambiente não produtivo para validar a fidelidade do conteúdo e a integridade dos redirecionamentos.",
      "Frontend em ASP.NET Core com separação clara entre lógica de domínio, integrações e apresentação.",
      "Commerce headless com Shopify Plus via conectores oficiais do Xperience.",
      "Integração REST sob medida com o ERP e tarefas agendadas para preços contratuais e estoque ao vivo.",
      "SSO com Salesforce e Azure AD B2C para unificar a identidade dos distribuidores.",
      "Assistente de IA AIRA habilitado para redação editorial e tradução multilíngue.",
    ],
    resultLabels: [
      "Ciclos de campanha mais curtos",
      "Mais sessões de distribuidores autenticados",
      "Menos conciliação manual ERP/CRM",
      "Catálogo mais rápido",
    ],
    outcomes: [
      "Os ciclos de campanha com parceiros caíram de 10–12 semanas para 6–8 semanas.",
      "O tempo de carregamento do catálogo melhorou de 3,1 s para 2,0 s.",
    ],
  },

  "custom-employee-recognition-platform": {
    title: "Plataforma de reconhecimento de funcionários sob medida em 8 semanas",
    excerpt:
      "Uma empresa de tecnologia do Texas substituiu seu SaaS de reconhecimento fechado por uma plataforma própria com recompensas, gamificação e analytics de RH, construída em oito semanas.",
    client: "Empresa de tecnologia do Texas, mais de 200 funcionários",
    duration: "02/2026 — 04/2026 (8 semanas)",
    challenge:
      "A ferramenta existente não permitia personalização e não dava ao RH dados de engajamento nem analytics. O fornecedor bloqueava mudanças na lógica de recompensas, e o custo recorrente de 6.000 a 7.200 USD por ano não incluía propriedade intelectual nem controle do roadmap.",
    solution: [
      "Frontend em React com atualizações em tempo real de reconhecimentos, rankings e saldos.",
      "Backend em Node.js para transações concorrentes, fluxos automatizados e atualizações por WebSocket.",
      "Sistema de moeda dupla (Kudos para Coins) com rastreabilidade completa das transações.",
      "Mais de 15 selos, ranking por percentil e recompensas automáticas em aniversários e datas de admissão.",
      "Painel de analytics para RH com relatórios por período.",
      "Interface responsiva otimizada para mobile sem uma base de código separada.",
    ],
    resultLabels: [
      "Adoção no primeiro mês",
      "Módulos em produção no lançamento",
      "Mensalidades SaaS eliminadas por ano",
      "Implantação sem rollback",
    ],
    outcomes: [],
  },

  "kentico-cms-for-koni": {
    title: "Solução B2B escalável em Kentico para a Koni",
    excerpt:
      "A KONI saiu de um site preso a templates para uma arquitetura de widgets em Kentico que suporta vários sites B2B regionais, com editores montando páginas sem desenvolvedores.",
    client: "KONI (parte do grupo ITT), fabricante de amortecedores hidráulicos ajustáveis",
    duration: "Janeiro 2023 — Abril 2024",
    challenge:
      "O site desatualizado da KONI não refletia mais a marca atual, não escalava para múltiplas propriedades e era difícil de manter por perfis não técnicos. Também precisava se alinhar à padronização em Kentico do grupo ITT enquanto atendia parceiros e distribuidores B2B.",
    solution: [
      "Mudança de uma arquitetura baseada em templates para uma baseada em widgets, permitindo que editores montem páginas sem desenvolvimento.",
      "Vue.js com renderização no servidor para melhorar SEO e desempenho de carregamento.",
      "Biblioteca de widgets reutilizáveis implantável em vários sites B2B sem novos ciclos de desenvolvimento.",
      "Entrega iterativa com feedback do cliente e testes de aceitação ao longo do projeto.",
      "Kentico Xperience sobre .NET Core com ASP.NET MVC e infraestrutura Amazon.",
    ],
    resultLabels: [
      "Mais visualizações de página",
      "Mais visualizações de produto",
      "Mais cliques em navegação e CTA",
      "Sites B2B sobre uma arquitetura",
    ],
    outcomes: [
      "A arquitetura foi estendida para três sites B2B distintos sem reconstruir do zero.",
    ],
  },

  "pj-our-way": {
    title: "Plataforma escalável de apoio ao letramento judaico",
    excerpt:
      "Reconstrução da plataforma PJ Our Way para a Harold Grinspoon Foundation, com interface dupla para crianças e pais e capacidade para 5.000 sessões simultâneas.",
    client: "Harold Grinspoon Foundation",
    challenge:
      "O site original do PJ Our Way era lento e difícil de manter, e não atendia às expectativas de uma experiência interativa. A plataforma precisava suportar até 50.000 usuários e 5.000 sessões simultâneas, atendendo dois públicos distintos — crianças e pais — com interfaces, conteúdos e permissões diferentes.",
    solution: [
      "Arquitetura Kentico MVC com web farms e cache em camadas para melhorar o desempenho.",
      "Interface dividida que permite alternar entre modo criança e modo pai com conteúdos próprios.",
      "Gamificação com selos por atividade de leitura e lógica de backend sob medida.",
      "Módulos administrativos sob medida para gerenciar livros, eventos e dados de usuários.",
      "Integração com o ERP Microsoft Dynamics NAV por meio de uma API própria.",
      "Staging de conteúdo, versionamento, tour de boas-vindas e melhorias de acessibilidade.",
    ],
    resultLabels: [
      "Usuários simultâneos no pico",
      "Taxa de sucesso em implantação para 50.000 pessoas",
    ],
    outcomes: [
      "Menor carga administrativa com gestão de conteúdo simplificada.",
      "Mais engajamento e experiências mais claras para crianças e pais.",
    ],
  },

  "dynamic-document": {
    title: "Sistema de gestão documental para cliente de manufatura",
    excerpt:
      "Sistema documental corporativo sob medida para um fabricante global, que eliminou a documentação em papel e criou uma única fonte de verdade em mais de 50 países.",
    client: "Fabricante global de materiais de construção e interiores comerciais (NDA)",
    duration: "Mais de 2 anos",
    challenge:
      "Várias divisões mantinham padrões documentais separados, o que levava ao uso frequente de materiais desatualizados na produção e na instalação em campo. Isso gerava retrabalho caro, reclamações de clientes, exposição regulatória, custos excessivos de impressão e atrasos por aprovações espalhadas entre departamentos e marcas.",
    solution: [
      "Gerador dinâmico que monta documentos em tempo real com a marca, logos e avisos legais corretos conforme quem solicita.",
      "Automação de fluxos e aprovações com múltiplos aprovadores, delegação e aprovação em paralelo.",
      "Motor de regras de retenção que aposenta documentos automaticamente por tipo e política de conformidade.",
      "Visualizador seguro que impede download ou cópia de materiais sensíveis.",
      "Recurso de «Livros» para que cada funcionário agrupe os documentos que mais usa.",
    ],
    resultLabels: [
      "Redução de custos de impressão",
      "Até a adoção em toda a empresa",
      "Menos erros de documentação",
      "Documentos de produto gerenciados",
    ],
    outcomes: ["O repositório centralizado atende equipes em mais de 50 países."],
  },

  "anderson-tuftex-enterprise-cms-transformation": {
    title: "Transformação do site da Anderson Tuftex com um CMS corporativo",
    excerpt:
      "A Anderson Tuftex renovou seu site de e-commerce de pisos com um template reutilizável de Kentico Xperience 13 e ferramentas avançadas, eliminando a dependência de desenvolvimento no dia a dia.",
    client:
      "Anderson Tuftex (parte da Shaw Industries), fabricante de pisos de madeira, Dalton, Geórgia",
    duration: "Março 2024 — em andamento",
    challenge:
      "A Anderson Tuftex precisava modernizar o site para atender à demanda por uma melhor experiência de compra. A plataforma existente não oferecia gestão de conteúdo flexível e exigia desenvolvimento para mudanças rotineiras, limitando a autonomia do marketing e atrasando o lançamento de novos sites de marca.",
    solution: [
      "Template reutilizável de Kentico Xperience 13 para lançar sites de marca de forma rápida e consistente.",
      "Recursos avançados de e-commerce com filtragem dinâmica de produtos e páginas de detalhe personalizáveis.",
      "Integração de 8 ferramentas externas: Cybersource, AudioEye, OneTrust, Genesys Chat, Bazaarvoice, SharpSpring, Roomvo e Calendly.",
      "Permissões por perfil para que editores e gestores de marca conduzam seus próprios fluxos.",
      "Componentes em React para layouts flexíveis com suporte de backend em .NET.",
    ],
    resultLabels: [
      "Mais cliques em CTA",
      "Mais visualizações de página",
      "Mais visualizações de produto",
    ],
    outcomes: [
      "Zero dependência de desenvolvimento para atualizações de conteúdo e fluxos de e-commerce do dia a dia.",
    ],
  },

  "flaga-energy-management-platform": {
    title: "Modernização web da plataforma de gestão de energia FLAGA",
    excerpt:
      "Site multilíngue em Umbraco Cloud para a FLAGA, principal fornecedora de gás liquefeito da Áustria, com gestão de conteúdo autônoma e busca de distribuidores por localização.",
    client:
      "FLAGA, principal fornecedora de gás liquefeito da Áustria, com mais de 65 anos de atuação",
    challenge:
      "A FLAGA precisava de recursos multilíngues para uma base de clientes diversa, melhores ferramentas de edição para reduzir a dependência de desenvolvimento, uma solução de newsletter integrada e uma busca de distribuidores por localização para melhorar a conveniência e a eficiência operacional.",
    solution: [
      "Umbraco Cloud com widgets modulares para que o marketing publique sem desenvolvimento.",
      "Integração do Newsletter Studio para gestão de campanhas de e-mail.",
      "Busca por localização para que clientes encontrem o fornecedor de gás mais próximo.",
      "Layouts flexíveis que permitem designs diferentes a partir de templates idênticos.",
    ],
    resultLabels: [],
    outcomes: [
      "Mais tráfego e melhores taxas de conversão com a interface multilíngue e um design mais usável.",
      "Menores custos operacionais ao reduzir o suporte contínuo de desenvolvimento.",
      "Melhor comunicação com clientes via newsletter integrada.",
      "Presença online mais profissional e maior confiança na marca.",
    ],
  },

  coretec: {
    title: "Desenvolvimento de plataforma de e-commerce para uma marca premium de pisos",
    excerpt:
      "O site da COREtec Floors foi reconstruído sobre Kentico 13 e React, dando autonomia ao marketing para montar páginas e elevando tráfego e conversão.",
    client: "Shaw Industries (marca premium de pisos COREtec Floors)",
    challenge:
      "A equipe precisava equilibrar tecnologia avançada com facilidade de gestão: um backend robusto para a operação do negócio e, ao mesmo tempo, permitir que o marketing atualizasse conteúdo sem depender de desenvolvimento.",
    solution: [
      "Kentico Xperience 13 com MVC Core para modernizar o stack, melhorar a segurança e simplificar o escalonamento.",
      "React com renderização no servidor para melhorar a experiência de frontend.",
      "Kentico Page Builder com 5 templates específicos e 1 genérico para que editores construam páginas.",
      "Integração de pagamentos CyberSource, acessibilidade AudioEye, privacidade OneTrust, Genesys Chat, avaliações Bazaarvoice e visualização de ambientes Roomvo.",
    ],
    resultLabels: ["Mais tráfego no site", "Mais conversão"],
    outcomes: [
      "Menores custos da equipe de desenvolvimento graças a ferramentas de administração completas.",
      "Melhor experiência de usuário e mais confiança na marca COREtec Floors.",
    ],
  },

  "blockchain-dashboard": {
    title: "Dashboard de blockchain",
    excerpt:
      "Dashboard analítico em tempo real que processa e visualiza grandes volumes de dados do mercado cripto — transações, carteiras e NFTs — sobre uma infraestrutura escalável na AWS.",
    client: "Empresa de analytics de blockchain (NDA)",
    challenge:
      "O projeto enfrentava três obstáculos centrais: gerenciar com eficiência enormes volumes de dados distribuídos entre múltiplos nós, garantir atualizações contínuas em tempo real conforme o mercado evolui, e executar consultas intensivas que exigem recursos computacionais robustos.",
    solution: [
      "Pipeline de ingestão na AWS a partir de fontes confiáveis como a Infura.",
      "Motor de processamento em tempo real para análise de transações e tendências.",
      "Infraestrutura escalável na AWS para armazenamento, streaming e processamento.",
      "Visualização clara de métricas complexas de blockchain.",
      "Análise de transações em tempo real e rastreamento de carteiras.",
      "Indicadores de mercado básicos e avançados para interpretar tendências.",
    ],
    resultLabels: [],
    outcomes: [
      "Pipeline eficiente que dá acesso fluido aos dados de blockchain.",
      "Análise de transações em tempo real, rastreamento de carteiras e indicadores de mercado.",
      "Visualização que torna métricas complexas interpretáveis para perfis não especializados.",
    ],
  },

  "time-series-analysis-and-forecasting-for-cryptocur": {
    title: "Sistema automatizado para prever tendências do mercado de criptomoedas",
    excerpt:
      "Plataforma automatizada de previsão com machine learning para tendências de cripto, ações e títulos, com modelos adaptativos e pipelines de dados paralelizados.",
    client: "Eudaimonia, especialistas em tecnologias robustas de previsão de mercado",
    challenge:
      "A alta volatilidade exigia modelos adaptativos e os dados brutos demandavam engenharia de atributos complexa. O cliente também precisava de pipelines paralelizados eficientes, um sistema centralizado para testar múltiplos modelos de séries temporais, garantias de qualidade de dados e suporte a diferentes esquemas de previsão.",
    solution: [
      "Solução de previsão de séries temporais com modelos adaptativos para mercados voláteis.",
      "Engenharia de atributos rigorosa para melhorar a precisão e capturar tendências.",
      "Sistema centralizado para testar e desenvolver modelos de previsão diversos.",
      "Arquitetura de microsserviços com UI administrativa, UI de usuário e API para clientes.",
      "Integração da API da Polygon para dados históricos, Google Cloud Vertex AI para deploy de modelos e Azure Functions para pós-processamento.",
    ],
    resultLabels: [],
    outcomes: [
      "A plataforma permite acompanhar tendências de mercado e analisar dados históricos.",
      "Os usuários podem criar cenários de previsão próprios para diversificar carteiras e otimizar retornos.",
      "Um conjunto de ferramentas que ajuda investidores a decidir com melhor informação.",
    ],
  },

  "accounts-payable-and-invoicing-process-automation": {
    title: "Automação de faturamento para uma empresa líder em compras",
    excerpt:
      "Plataforma com IA que automatiza contas a pagar e faturamento para uma empresa líder em compras, com conformidade PEPPOL e integração com Ariba e SAP.",
    client:
      "Empresa líder de soluções de compras na Austrália, atendendo grandes marcas na Ásia-Pacífico",
    challenge:
      "A plataforma precisava se integrar a vários sistemas de faturamento, incluindo Ariba e SAP, suportar formatos diversos — PDFs, imagens e documentos eletrônicos —, implementar regras de negócio configuráveis e gerenciar dados de fornecedores com diferentes métodos de identificação.",
    solution: [
      "Integração fluida com plataformas de faturamento populares como Ariba e SAP.",
      "Processamento de faturas com IA e extração inteligente de dados em múltiplos formatos.",
      "Motor de regras flexível para configurar exceções, alertas e atribuição de aprovadores.",
      "Gestão robusta de fornecedores com identificadores únicos, incluindo o ABN.",
      "Aplicação multi-tenant com entrada por e-mail, API e upload de arquivos.",
      "Conformidade com o padrão PEPPOL para interoperabilidade futura.",
    ],
    resultLabels: [
      "Satisfação dos usuários",
      "Pagamentos processados",
      "Redução do tempo de ciclo",
    ],
    outcomes: [],
  },

  "door-services": {
    title: "Soluções web e mobile integradas para uma empresa de serviços de portas",
    excerpt:
      "Plataforma web e mobile integrada para a Door Services Corporation, agilizando a busca de serviços por localização, a gestão de conteúdo multimarca e a informação de produto.",
    client: "Door Services Corporation, empresa canadense de serviços de portas automáticas",
    challenge:
      "O negócio precisava de um sistema que permitisse aos clientes encontrar facilmente a unidade de serviço mais próxima segundo regras de negócio. A gestão de conteúdo precisava equilibrar conteúdo compartilhado entre submarcas com personalização por marca, e era necessário um módulo complexo de gestão de produtos alinhado aos processos internos.",
    solution: [
      "Plataforma web e mobile com busca por localização de centros de serviço.",
      "Kentico CMS para gestão de conteúdo multimarca e autonomia dos editores.",
      "Sistema PIM com modelagem de dados, importação/exportação e fluxos de trabalho.",
      "Camada de dados conectando o PIM a ERP, CRM e e-commerce.",
      "Interface responsiva otimizada para desktop e mobile com navegação intuitiva.",
    ],
    resultLabels: [],
    outcomes: [
      "Menores custos operacionais com ferramentas intuitivas para editores e equipes de loja.",
      "Mais visitantes e melhor jornada digital, levando a visitas às lojas.",
      "Gestão de conteúdo sem intervenção de desenvolvimento em todas as marcas e unidades.",
    ],
  },

  "ml-based-saas": {
    title: "SaaS com machine learning para previsão de matrículas de estudantes",
    excerpt:
      "Plataforma SaaS com machine learning que permite às universidades acompanhar matrículas e prever a probabilidade de inscrição a partir de dados integrados de data warehouse e CRM.",
    client:
      "Zenuit Consulting Services, consultoria de TI norte-americana em cibersegurança e machine learning aplicado",
    challenge:
      "O sistema precisava integrar data warehouses mantendo integridade e exatidão, sincronizar com o Salesforce apesar de esquemas de tabela em mudança contínua, e lidar com requisitos complexos de gestão de dados entre instituições.",
    solution: [
      "Serviço web multi-tenant com recursos administrativos robustos para integração de warehouses.",
      "Tarefas agendadas para atualizar informações e esquemas conforme os requisitos do administrador.",
      "Plataforma centralizada para gerenciar dados de admissão, analytics e consultas.",
      "Integração fluida entre sistemas de CRM e data warehouse.",
      "Upload de dados históricos para previsão de matrículas.",
    ],
    resultLabels: [],
    outcomes: [
      "Redução significativa do tempo do processo de admissão com uma plataforma centralizada.",
      "Indicadores de matrícula personalizados e prioridades diárias de contato.",
      "Análise de funil personalizada para agilizar os esforços de captação.",
    ],
  },

  "customer-churn": {
    title: "Previsão de churn de clientes",
    excerpt:
      "Modelo dinâmico de previsão de churn para uma instituição financeira líder do Azerbaijão, identificando clientes de crédito em risco e orientando a retenção.",
    client: "Instituição financeira líder no Azerbaijão",
    challenge:
      "O modelo precisava se adaptar a mudanças no comportamento dos clientes e nas condições econômicas, extrair conclusões acionáveis de conjuntos de dados diversos — histórico de transações, demografia e tendências de mercado — e personalizar produtos de crédito em escala numa base de clientes muito ampla.",
    solution: [
      "Modelo dinâmico de previsão de churn adaptado a comportamentos e condições de mercado em evolução.",
      "Extração de sinais a partir de histórico transacional, demografia e tendências de mercado.",
      "Refinamento e personalização da oferta de crédito com base na análise comportamental.",
      "Integração das previsões aos fluxos de marketing e CRM para retenção proativa.",
    ],
    resultLabels: [],
    outcomes: [
      "Redução do churn de clientes com o modelo preditivo.",
      "Captação de novos clientes via estratégias de marketing orientadas por dados.",
      "Melhor oferta de crédito, com mais satisfação e oportunidades de venda cruzada.",
    ],
  },

  "gat-flooring": {
    title: "Redesign do site de uma empresa de pisos com e-commerce",
    excerpt:
      "Redesign UI/UX do site de e-commerce da GAT Flooring em torno de uma nova identidade de marca, com navegação reestruturada e um fluxo dedicado de seleção de produtos.",
    client:
      "GAT Flooring, importadora e distribuidora australiana de materiais de construção premium",
    challenge:
      "O site precisava de um redesign completo alinhado à identidade de marca atualizada, criando ao mesmo tempo uma interface moderna e intuitiva. O design também precisava acomodar conteúdo escalável para catálogos variáveis sem sobrecarregar o usuário com texto puro.",
    solution: [
      "Migração da navegação de um painel lateral para um menu superior.",
      "Página dedicada à seleção de produtos.",
      "Seções na home destacando informações-chave com hierarquia visual clara.",
      "Separação de unidades e informações de contato em páginas distintas.",
      "Prioridade às melhorias estruturais junto com a atualização visual.",
      "Abordagem de design moderna e minimalista.",
    ],
    resultLabels: [],
    outcomes: ["Aumento do tráfego do site.", "Melhor conversão de visitante em cliente."],
  },

  kenticomigration: {
    title: "Migração para Kentico Xperience 13 Core para uma agência estadual",
    excerpt:
      "Uma agência estadual migrou do Kentico 12 Portal Engine, já sem suporte, para o Xperience 13 Core, reduzindo o tempo médio de resposta em 93,7 % com menos de 10 minutos de indisponibilidade visível.",
    client: "Agência estadual de proteção ambiental dos EUA (NDA)",
    challenge:
      "A implementação em Kentico 12 tornou-se complexa, com widgets sob medida e grandes blocos de conteúdo que degradavam o desempenho em picos de tráfego. A plataforma chegou ao fim de vida, com o risco de segurança e conformidade associado, enquanto os editores enfrentavam inconsistências de acessibilidade e dependiam de desenvolvimento para mudanças rotineiras de layout.",
    solution: [
      "Avaliação detalhada de tipos de página, templates, widgets, bibliotecas de mídia e padrões de URL.",
      "Camada de migração automatizada entre a base do Kentico 12 e o Xperience 13 Core, com log para detectar anomalias.",
      "Migração de widgets embutidos em texto rico por meio de parsing e substituição por componentes estruturados.",
      "Redesenho com um modelo de conteúdo baseado em componentes reutilizáveis.",
      "Preservação de mais de 95 % das URLs, com redirecionamentos para o restante, protegendo o SEO.",
      "Corte agendado fora do horário de pico, com validação em staging e plano de rollback.",
    ],
    resultLabels: [
      "Menor tempo médio de resposta",
      "Melhoria no percentil 90",
      "Atualizações sem desenvolvimento",
      "Indisponibilidade visível ao usuário",
    ],
    outcomes: [
      "O tempo médio de resposta caiu de 2,23 s para 0,141 s.",
      "Zero regressões críticas de acessibilidade após o lançamento.",
    ],
  },

  "asp-guard": {
    title: "App web de despacho para gerenciar agentes de travessia escolar",
    excerpt:
      "Aplicação web de despacho para a A.S.P. Incorporated que gerencia escala, alocação e rastreamento em tempo real de agentes de travessia escolar em Toronto.",
    client: "A.S.P. Incorporated, prestadora de serviços de segurança e portaria",
    challenge:
      "O site existente precisava de melhor experiência de uso e novas funcionalidades para substituir planilhas manuais de Excel por relatórios automatizados. O processamento de grandes volumes de informação causava problemas de desempenho e deixava o sistema lento para a equipe administrativa que gerencia a operação em toda a cidade.",
    solution: [
      "Alocação inteligente de agentes considerando disponibilidade, feriados, distância até as zonas e turnos existentes.",
      "Painel em tempo real com presença, horários de entrada e saída e localização.",
      "Rastreamento de localização com geocercas e visualização de trajetos.",
      "Relatórios de presença, análise de cobertura e status de alocação de turnos.",
      "Apresentação de dados por perfil, otimizada para cada tipo de usuário.",
    ],
    resultLabels: [],
    outcomes: [
      "Redução significativa do tempo gasto gerenciando agentes e coletando dados.",
      "Mais eficiência operacional com planejamento intuitivo de equipe.",
      "Melhor visibilidade do desempenho dos funcionários por meio de análise detalhada.",
    ],
  },

  "asp-guard-mobile-app": {
    title: "App mobile de despacho para gestão de agentes de travessia",
    excerpt:
      "O aplicativo mobile de despacho XGuard para a ASP Security Services, que automatiza o rastreamento de agentes com localização confiável em iOS e Android.",
    client: "A.S.P. Incorporated (ASP Security Services)",
    challenge:
      "O app anterior tinha rastreamento de localização impreciso e travamentos frequentes, o que dificultava a manutenção e atrasava atualizações. A interface não era intuitiva e o sistema precisava suportar iOS e Android com atualização de dados em segundo plano.",
    solution: [
      "Arquitetura estável e sustentável com novo design UI/UX para iOS e Android.",
      "Rastreamento de localização confiável como núcleo da gestão de turnos.",
      "Atualização de dados em segundo plano para exibir informações atuais sem recarregar manualmente.",
      "Interface responsiva fiel às especificações de design em diferentes tamanhos de tela.",
      "Funções de triagem COVID-19, entrada e saída, gestão de turnos e comunicação com supervisores.",
    ],
    resultLabels: [],
    outcomes: [
      "Uma ferramenta única para a equipe gerenciar alocações e presença.",
      "Suporte a iOS e Android com mais estabilidade e melhor experiência de uso.",
      "Rastreamento automatizado que permite à gestão analisar presença e gerar relatórios.",
    ],
  },

  "leak-control": {
    title: "Identificação de vazamentos em válvulas submarinas de segurança ambiental",
    excerpt:
      "Sistema de IA e machine learning que detecta precocemente vazamentos em válvulas submarinas de segurança, evitando falhas de equipamento e danos ambientais em operações offshore.",
    client: "Empresa multinacional de energia em petróleo e gás presente em mais de 70 países",
    challenge:
      "O cliente precisava detectar precocemente vazamentos em válvulas de segurança de subsuperfície para mitigar o risco de falha, minimizar o tempo improdutivo com modelagem preditiva e proteger ecossistemas marinhos reduzindo o custo de inspeção física.",
    solution: [
      "Captura de dados de sonar volumétrico 3D para avaliação abrangente das condições submarinas.",
      "Machine learning e IA para interpretar dados de sonar complexos e construir modelos preditivos.",
      "Análise de fluxo de fluidos e pressão para desenvolver indicadores precoces de vazamento.",
      "Redução significativa da frequência de inspeções físicas.",
    ],
    resultLabels: [],
    outcomes: [
      "Menor risco de falha do equipamento de segurança com detecção precoce.",
      "Mais receita ao reduzir tempo improdutivo e custos operacionais.",
      "Menor impacto ambiental sobre ecossistemas e fauna marinha.",
    ],
  },

  naoo: {
    title: "Desenvolvimento de app mobile de serviços automotivos para a Naoo",
    excerpt:
      "App mobile de assistência na estrada para a Naoo, plataforma australiana de serviços veiculares, que permite comparar preços de combustível e chamar mecânica e reboque.",
    client: "Naoo",
    challenge:
      "O app exigia um sistema de pagamentos configurável com vários provedores, notificações push, chat integrado entre clientes e central de atendimento, rastreamento de localização para identificar serviços próximos e um mapa multifuncional com faixas de preço de combustível por região.",
    solution: [
      "App mobile com React Native, TypeScript e Redux, usando recursos nativos do aparelho e Google Maps.",
      "Arquitetura de mapas sob medida com bibliotecas específicas para visualizar preços de combustível.",
      "CRM para que funcionários gerenciem solicitações e as respostas das equipes de serviço.",
      "Gateway de pagamento configurável pelo painel administrativo.",
      "Serviços de CI/CD e certificação nas lojas de iOS e Android.",
    ],
    resultLabels: [],
    outcomes: [
      "App funcional de assistência conectando clientes a serviços de reparo e reboque.",
      "Monitoramento de preços de combustível em tempo real para encontrar as melhores tarifas próximas.",
      "Ecossistema completo: painel administrativo, apps iOS/Android e loja integrada.",
    ],
  },

  "kustom-printing": {
    title: "Sistema de gestão de pedidos sob medida para a Kustom Printing",
    excerpt:
      "Progressive Web App para a Kustom Printing Products que gerencia pedidos de manutenção e reparo de impressoras, funcionando offline em áreas de baixa cobertura.",
    client: "Kustom Printing Products",
    challenge:
      "A empresa precisava de uma aplicação de gestão de pedidos capaz de funcionar offline em áreas com internet ruim ou inexistente. A equipe precisava acessar informações de clientes e gerenciar pedidos em locais remotos mantendo o armazenamento de dados seguro.",
    solution: [
      "Sistema administrativo com React e .NET Core, usando tecnologia PWA para acesso offline.",
      "Calendário sob medida para agendar compromissos e tarefas.",
      "Assinatura manual para aprovações digitais de clientes.",
      "Cronômetro próprio para registrar horas trabalhadas.",
      "Monitoramento e distribuição de pedidos em tempo real pelos administradores.",
    ],
    resultLabels: [],
    outcomes: [
      "Gestão de pedidos offline em todas as unidades.",
      "Fluxo de trabalho mais ágil com supervisão em tempo real.",
      "Notificações, alertas e analytics para acompanhar o desempenho.",
      "Captura de assinatura digital que elimina aprovações em papel.",
    ],
  },

  timeoutdoors: {
    title:
      "Reconstrução de uma plataforma de eventos ao ar livre com autogestão de parceiros em Kentico",
    excerpt:
      "A TimeOutdoors reconstruiu sua plataforma de eventos sobre Kentico Xperience 13 para permitir publicação autônoma de parceiros, com 17 % mais tráfego e onboarding 75 % mais rápido.",
    client: "TimeOutdoors",
    duration: "Outubro 2021 — Março 2022",
    challenge:
      "O catálogo de eventos cresceu além da capacidade interna de publicação: cada listagem exigia suporte de desenvolvimento. Os parceiros não podiam gerenciar seus próprios conteúdos, o marketing gastava tempo em operações de conteúdo, a lógica de rotas de eventos estava fragmentada e o desempenho do servidor de origem se degradava conforme o inventário crescia.",
    solution: [
      "Interface de edição para parceiros com controles simplificados para gerenciar suas listagens.",
      "Camada unificada de rotas que resolve URLs de eventos pela árvore de conteúdo com fallback dinâmico.",
      "Módulo de e-commerce integrado para carrinho, pedidos e pagamentos.",
      "Personalização por segmentação para destacar eventos relevantes.",
      "Automação de fluxos que reduz tarefas manuais de marketing.",
      "Entrega de mídia por CDN com cache em múltiplos níveis para suportar o crescimento do catálogo.",
    ],
    resultLabels: [
      "Mais tráfego no site",
      "Mais vendas",
      "Onboarding de parceiros mais rápido",
      "Eventos ativos publicados",
    ],
    outcomes: ["O onboarding de parceiros caiu de 12 dias para 3 dias."],
  },

  "grocery-delivery": {
    title: "Design UI/UX para entrega de mercado",
    excerpt:
      "Design UI/UX para uma plataforma de entrega de mercado, que levou o cliente de vender apenas pelo Instagram a uma loja automatizada baseada em fluxos de usuário pesquisados.",
    challenge:
      "O cliente precisava de um site atual, porém simples e minimalista, para aumentar os pedidos. Muitos clientes abandonavam o processo de compra, então o design exigiu pesquisa ampla — análise de concorrentes, estudo do público-alvo e testes com usuários — para garantir navegação fácil.",
    solution: [
      "Análise do público-alvo: mulheres e homens de 20 a 35 anos que buscam compras rápidas e de qualidade.",
      "Mapa do site com 7 seções principais: produtos, carrinho, conta, sobre, entrega/pagamento, perguntas frequentes e contato.",
      "Fluxos de usuário estabelecendo caminhos de compra lógicos e completos.",
      "Wireframes de baixa fidelidade para eliminar distrações e depois de alta fidelidade com conteúdo.",
      "Protótipo interativo em Figma com versão mobile adaptativa.",
      "Testes com usuários nos protótipos antes do desenvolvimento.",
    ],
    resultLabels: [],
    outcomes: [
      "Transição de pedidos apenas pelo Instagram para uma plataforma automatizada.",
      "Menor tempo de espera do cliente por resposta ao pedido.",
      "Mais volume de pedidos com menos equipe necessária.",
    ],
  },

  "productivity-mobile-app": {
    title: "Design UI/UX para app mobile de produtividade",
    excerpt:
      "Design multiplataforma para um app de produtividade baseado no método Getting Things Done, que ajuda a organizar e priorizar tarefas.",
    challenge:
      "Criar um design de app mobile multiplataforma que fosse intuitivo tanto para usuários de iOS quanto de Android, implementando os fundamentos do método GTD.",
    solution: [
      "Mockups e protótipo criados no Figma.",
      "Análise de concorrentes para identificar recursos úteis além do básico do GTD.",
      "Marcação de tarefas sem exigir cadastro.",
      "Subtarefas e visualização das tarefas em calendário.",
      "Documentação completa dos fluxos de usuário e wireframes de todas as telas.",
    ],
    resultLabels: [],
    outcomes: [
      "O app conquistou popularidade entre usuários focados em organização de tarefas e produtividade.",
    ],
  },

  vivad: {
    title: "Automação do sistema de gestão de pedidos",
    excerpt:
      "Automação do processamento de pedidos da Vivad, dividindo pedidos em tarefas por centro de trabalho com rastreabilidade por QR code e status em tempo real para o cliente.",
    client: "Vivad, empresa australiana de impressão digital de grande formato e banners",
    challenge:
      "O sistema precisava lidar com lógica de negócio complexa para dividir pedidos em tarefas gerenciáveis e distribuí-las entre centros de trabalho, integrando-se aos sistemas existentes e mantendo a sincronização de dados em todos os pontos de contato.",
    solution: [
      "Plataforma de processamento de pedidos totalmente automatizada com interface intuitiva.",
      "Painel adaptado a mobile onde os operadores veem suas tarefas priorizadas.",
      "Navegação por QR code para rastreabilidade de cada trabalho.",
      "Visualização do fluxo com status do pedido em tempo real para clientes e equipe.",
      "Gestão de filas de trabalho para minimizar tempo ocioso de produção.",
    ],
    resultLabels: [],
    outcomes: [
      "Redução significativa da carga operacional da equipe da Vivad.",
      "Monitoramento de produção em tempo real e priorização de tarefas.",
      "Mais transparência para o cliente com o acompanhamento do pedido.",
    ],
  },

  dasparts: {
    title: "Sistema de e-commerce para um vendedor de autopeças e acessórios",
    excerpt:
      "Plataforma de e-commerce para a DasParts, varejista canadense de peças Volkswagen e Audi, com gestão de estoque e processamento automatizado de pedidos sobre Kentico.",
    client: "DasParts",
    challenge:
      "O projeto avançava sob pressão de prazo para implementar os templates de design, exigia migrar o banco de dados para um CMS flexível para futuras atualizações e precisava de recursos modernos de engajamento para impulsionar as vendas.",
    solution: [
      "Arquitetura de e-commerce sobre Kentico com busca automatizada de peças.",
      "Integração da Scandit para leitura de código de barras e gestão de estoque no armazém.",
      "Conexão com o QuickBooks para sincronizar estoque, vendas e faturas em tempo real.",
      "Integração com a transportadora Flagship para entrega dos pedidos.",
      "Automação do processamento manual de pedidos e da gestão do catálogo.",
    ],
    resultLabels: ["Crescimento de vendas"],
    outcomes: [
      "Menos trabalho manual de estoque e processamento de pedidos.",
      "Mais consistência de dados entre sistemas.",
      "Pedidos em autoatendimento sem intervenção da equipe.",
    ],
  },

  lavelio: {
    title: "Desenvolvimento de SaaS para uma plataforma de IA em redes sociais",
    excerpt:
      "Plataforma SaaS multi-tenant que permite a marcas de moda, beleza e joias analisar dados de redes sociais e entender as preferências do consumidor com IA.",
    client: "Lavelio",
    challenge:
      "O projeto exigia desenvolvimento de baixo custo dentro de um orçamento apertado, construindo ao mesmo tempo uma solução SaaS multi-tenant capaz de escalar para múltiplos clientes sem gasto de infraestrutura proporcional.",
    solution: [
      "Boilerplate em .NET Core para minimizar o desenvolvimento de funcionalidades de baixo nível.",
      "Template de UI em React fornecido pelo cliente para reduzir o esforço de interface.",
      "Arquitetura multi-tenant com separação de banco de dados por inquilino.",
      "Sistema administrativo por perfis para gerenciar inquilinos e usuários.",
      "Dashboard e portal de analytics intuitivos para análise de redes sociais.",
    ],
    resultLabels: [],
    outcomes: [
      "Plataforma SaaS simples que entrega insights de marketing em redes sociais.",
      "Solução de baixo custo que atende às necessidades do cliente mantendo a rentabilidade.",
      "Infraestrutura escalável que comporta novos clientes sem investimento adicional relevante.",
    ],
  },

  prorank: {
    title: "Desenvolvimento de marketplace para construtoras e subempreiteiros",
    excerpt:
      "Marketplace de construção onde construtoras e subempreiteiros se conectam, contratam e transacionam digitalmente, mantendo padrões de qualidade com reputação e avaliações.",
    client:
      "Empresa líder mundial de construção e serviços, com mais de 6 bilhões de USD em contratos anuais",
    challenge:
      "O projeto exigia desenvolvimento intensivo — multi-tenancy com bancos separados, faturamento e pagamentos, gestão de assinaturas com cobrança recorrente e dashboards com relatórios — atendendo simultaneamente às necessidades de construtoras e subempreiteiros.",
    solution: [
      "Uso do framework ASP.NET Zero para focar no negócio e não em infraestrutura de baixo nível.",
      "Arquitetura multi-tenant com separação de banco de dados para escalar.",
      "Sistema completo de faturamento, pagamentos e gestão de assinaturas.",
      "Experiência intuitiva tanto para publicar projetos quanto para se candidatar a eles.",
      "Sistema de reputação e avaliações que incentiva trabalho de qualidade.",
    ],
    resultLabels: [],
    outcomes: [
      "A plataforma foi lançada em poucos meses.",
      "Várias empresas líderes entraram com múltiplos subempreiteiros.",
      "Negócios foram fechados com sucesso na primeira semana após o lançamento.",
    ],
  },

  "shaw-pro": {
    title: "Sistema de e-commerce para distribuidores de um fabricante de carpetes",
    excerpt:
      "A Shaw Industries reconstruiu seu portal B2B de distribuidores sobre Kentico MVC, modernizando uma plataforma com muito conteúdo e melhorando aquisição de usuários e desempenho.",
    client: "Shaw Industries Group, Inc.",
    challenge:
      "O antigo Portal Engine não oferecia o desempenho nem os recursos exigidos por um site com muito conteúdo. Migrar para Kentico MVC implicava reconstruir funcionalidades antes fornecidas por web parts e widgets sem suporte nativo na nova plataforma.",
    solution: [
      "Migração para Kentico MVC para mais controle do HTML e marcação mais limpa e favorável ao SEO.",
      "Widgets sob medida substituindo recursos do Portal Engine sem limitações de desenvolvimento.",
      "Arquitetura moderna que acelera significativamente o carregamento das páginas.",
      "Integração da gestão de conteúdo com estoque interno e serviços de imagem.",
      "Interface responsiva pensada para múltiplos tipos de dispositivo.",
    ],
    resultLabels: [
      "Mais usuários novos",
      "Crescimento total de usuários",
      "Mais sessões",
      "Menor taxa de rejeição",
    ],
    outcomes: [],
  },

  staalduinen: {
    title: "Sistema de pedidos e app web para um distribuidor de flores no Canadá",
    excerpt:
      "Plataforma de pedidos B2B para a Staalduinen Floral que permite aos clientes navegar, pedir e pagar em autoatendimento, com preços e estoque do ERP em tempo real.",
    client: "Staalduinen Floral Limited",
    challenge:
      "Todos os dados de clientes, produtos e pedidos viviam no ERP e exigiam sincronização em tempo real de preços e estoque sem degradar o desempenho da plataforma. A complexidade da integração foi o principal obstáculo técnico.",
    solution: [
      "Sincronização agendada de dados de produto — nomes, imagens, atributos — para o Kentico CMS.",
      "Endpoints de API dedicados para consultar preços e estoque em tempo real.",
      "Portal de autoatendimento que reduz a carga de processamento de pedidos da equipe.",
      "Integração com os sistemas de ERP existentes.",
      "Trabalho colaborativo com a agência parceira e o cliente final.",
    ],
    resultLabels: [],
    outcomes: [
      "Ciclo de vendas mais curto.",
      "Menor carga de trabalho da equipe com o autoatendimento.",
      "Sincronização fluida e em tempo real entre o CMS e os sistemas de backend.",
    ],
  },

  digitron: {
    title: "Sistema de estoque e gestão de conteúdo em Kentico MVC",
    excerpt:
      "A Digitron Semiconductors modernizou seu site com um sistema de estoque dinâmico sobre Kentico, com 136 % mais tráfego e editores capazes de ampliar o catálogo sem código.",
    client: "Digitron Semiconductors",
    challenge:
      "O site anterior não permitia ampliar o estoque com novos tipos de produto sem desenvolvimento significativo. A plataforma também não era responsiva, tinha problemas de desempenho e falhas de validação que causavam quedas quando editores inseriam dados inválidos.",
    solution: [
      "Módulos sob medida em Kentico para que editores criem tipos de produto e gerenciem campos, filtros, unidades e visibilidade pelo painel, sem código.",
      "Templates dinâmicos que geram listagens e filtros a partir da configuração e não de templates fixos.",
      "Migração de milhares de produtos para fora da árvore de conteúdo para melhorar o desempenho.",
      "Estratégias de cache e compressão de conteúdo para acelerar o site.",
      "Indexação de busca sob medida e integração do parsing de documentação em PDF.",
    ],
    resultLabels: ["Mais tráfego ano a ano"],
    outcomes: [
      "Melhor experiência do editor, com menos erros de validação e quedas.",
      "Meta de navegação em cinco cliques para encontrar produtos alcançada.",
      "Melhor adaptação a dispositivos móveis.",
    ],
  },

  "fit-factory-clubs": {
    title: "Aplicativo mobile e serviço web de fitness",
    excerpt:
      "Redesign do site de uma rede de academias que reforçou a presença de marca e simplificou a jornada do usuário, com mais de 1.000 novas matrículas em poucos meses.",
    client: "Fit Factory Clubs",
    challenge:
      "O site precisava representar melhor a marca e simplificar a jornada do consumidor, melhorando a navegação de quem buscava informações sobre a experiência de estúdio premium.",
    solution: [
      "Redesign completo do site com forte foco em experiência de usuário.",
      "Melhor navegação e acesso à informação.",
      "Fluxos otimizados para editores de conteúdo e marketing.",
      "Integração ampla com os sistemas internos do cliente.",
    ],
    resultLabels: ["Matrículas vendidas em poucos meses"],
    outcomes: [],
  },

  totaltechschool: {
    title: "Digitalização da Total Tech School",
    excerpt:
      "A Total Tech School digitalizou processos offline com uma plataforma de LMS e e-commerce, eliminando a digitação manual e permitindo a compra de cursos online.",
    client: "Total Tech School",
    challenge:
      "A escola precisava automatizar um volume considerável de trabalho manual e eliminar o controle em planilhas de inscrições, pagamentos, aulas e notas. O sistema exigia arquitetura modular para acompanhar mudanças rápidas de processo conforme a escola crescia.",
    solution: [
      "Site de e-commerce sobre Kentico CMS para compra de cursos e webinars.",
      "Avaliação e certificação online.",
      "Sistema de gestão de aprendizagem para programas, turmas e horários.",
      "Acompanhamento de trabalhos e gestão de notas.",
      "Assinatura eletrônica de documentos.",
      "Medidas de segurança para impedir o compartilhamento dos webinars.",
    ],
    resultLabels: [],
    outcomes: [
      "O tempo de inscrição em um evento caiu de 1–2 dias para processamento imediato.",
      "Eliminação da digitação manual e dos processos em papel.",
      "Melhor acesso à informação para a equipe administrativa.",
    ],
  },

  "transition-to-trades": {
    title: "Sistema educacional de transição para a Hiller",
    excerpt:
      "O sistema de gestão em Excel do Transition to Trades virou uma aplicação web automatizada, eliminando processos manuais e aumentando a eficiência dos coordenadores.",
    client:
      "Transition to Trades, da Hiller Plumbing, Heating, Cooling & Electrical e da guarnição do Exército dos EUA em Fort Campbell",
    challenge:
      "O cliente controlava todos os processos em planilhas de Excel, o que obrigava a fazer alterações em vários lugares, validar manualmente e conviver com inconsistências de dados. Essa abordagem manual era um peso considerável que limitava a eficiência operacional.",
    solution: [
      "Conversão do modelo em uma aplicação web com fluxos automatizados.",
      "Validação de entradas e construção de relações entre dados.",
      "Listas de tarefas geradas automaticamente para que os coordenadores não percam ações.",
      "Abstração de alto nível que permite estender o sistema com pouco desenvolvimento.",
      "Entrevistas e acompanhamento de contratação, gestão de eventos, reserva de turmas, mentoria, relatórios e relatórios de autorização estadual.",
    ],
    resultLabels: [],
    outcomes: [
      "Economia significativa de custos pela maior eficiência dos coordenadores.",
      "Eliminação de erros humanos que exigiam muito tempo de correção.",
      "Menos ações manuais e processos globalmente mais rápidos.",
    ],
  },

  "trutech-test": {
    title: "Ferramenta de recrutamento para avaliação de candidatos",
    excerpt:
      "SaaS de recrutamento que permite a empresas de serviços avaliar o conhecimento dos candidatos e identificar lacunas de treinamento: 160 empresas assinantes no primeiro mês.",
    client: "Hiller Plumbing, Heating, Cooling & Electrical",
    challenge:
      "A aplicação precisava atender múltiplas empresas com fluxos e perspectivas distintas mantendo o isolamento de dados. Exigia arquitetura de nível corporativo para cumprir os requisitos de SaaS multi-tenant sem perder responsividade em todos os dispositivos.",
    solution: [
      "Backend em .NET Core e frontend em React para desenvolvimento ágil com estabilidade corporativa.",
      "Interface limpa e intuitiva, com navegação e funções evidentes.",
      "Avaliação automatizada dos resultados, reduzindo quase 100 % do tempo de correção manual.",
      "Isolamento de dados multi-tenant para a segurança e privacidade de cada assinante.",
      "Otimização de responsividade em todos os dispositivos e tamanhos de tela.",
    ],
    resultLabels: [
      "Empresas assinantes no primeiro mês",
      "Testes em grupo e individuais realizados",
    ],
    outcomes: [
      "Um grupo de teste confirmou que a aplicação é rápida e responsiva.",
      "Os responsáveis avaliaram a interface como limpa e fácil de usar.",
    ],
  },

  "college-navigator": {
    title: "Software de navegação para estudantes universitários",
    excerpt:
      "Plataforma de tour virtual do campus que permite a futuros estudantes explorar remotamente uma universidade litorânea por meio de panorâmicas 360° e pontos interativos.",
    client: "Instituição de ensino privada perto de Boston",
    challenge:
      "Criar um sistema de navegação virtual fácil de usar que integrasse fotografia 360° a pontos interativos dentro das panorâmicas, garantindo uma experiência fluida em todos os dispositivos.",
    solution: [
      "Panorâmicas interativas projetadas sobre esferas 3D para tours imersivos e realistas.",
      "Fotografia 360° adaptada para mostrar o campus com pontos de informação clicáveis.",
      "Mapa interativo do campus com marcadores que revelam detalhes de prédios, fotos, vídeos e informações de cursos.",
      "Interface limpa e acessível com ferramentas de navegação e design responsivo.",
      "Infraestrutura de backend robusta que gerencia imagens de alta resolução para carregamento rápido e transições suaves.",
    ],
    resultLabels: [
      "Mais tráfego no site da universidade",
      "Menor rejeição nas páginas do tour",
      "Mais contatos de futuros estudantes",
      "Países alcançados",
    ],
    outcomes: [],
  },

  "notification-center": {
    title: "Desenvolvimento de aplicação para uma empresa de hipotecas",
    excerpt:
      "Ferramenta de comparação de hipotecas em React, com cálculos em tempo real e comparação lado a lado, integrada a um aplicativo mobile existente.",
    client: "Mortgage Apps",
    challenge:
      "Criar do zero uma ferramenta de hipotecas única e integrá-la a um app mobile existente, entregando uma experiência poderosa mas simplificada para encontrar opções de financiamento.",
    solution: [
      "Plataforma em React com filtros e facetas em tempo real.",
      "Comparação inteligente lado a lado.",
      "Integração com o ecossistema da aplicação mobile existente.",
      "Interface centrada no usuário com resposta imediata a cada digitação.",
      "Motor de cálculo em tempo real para descobrir produtos de financiamento.",
    ],
    resultLabels: [],
    outcomes: [
      "Melhor experiência de usuário com uma interface intuitiva.",
      "Comparação de produtos de financiamento lado a lado.",
      "Resultados atualizados em tempo real conforme o usuário digita.",
    ],
  },

  "driver-dispatch": {
    title: "Software de automação de rastreamento de cargas para a Cargo Bee",
    excerpt:
      "Rastreamento de cargas e despacho de motoristas automatizados que substituíram a gestão por e-mail e telefone, multiplicando por dez a capacidade sem contratar administradores.",
    client: "Cargo Bee",
    challenge:
      "O rastreamento manual de cargas pela caixa de entrada obrigava os gestores a ligar para motoristas oferecendo as cargas mais rentáveis, gerando atrasos e imprecisões. O processo consumia muito tempo e travava a escalabilidade.",
    solution: [
      "Firebase com a API do Gmail e Cloud Functions para capturar automaticamente as cargas recebidas por e-mail.",
      "App multiplataforma em React Native para que motoristas vejam cargas disponíveis por geolocalização.",
      "Candidatura a cargas e notificações push sobre oportunidades próximas ao ponto de coleta.",
      "Eliminação do rastreamento manual e menos comunicação telefônica entre administração e motoristas.",
    ],
    resultLabels: ["Aumento da capacidade de carga"],
    outcomes: [
      "Automação de etapas administrativas manuais e menos sobrecarga de comunicação.",
      "Eliminação de erros humanos no rastreamento e na alocação de cargas.",
    ],
  },

  "workplace-budget-tool": {
    title: "Ferramenta de visualização e orçamento de escritórios para uma empresa de mobiliário",
    excerpt:
      "Ferramenta de visualização e orçamento que permite aos vendedores gerar propostas de espaços de trabalho sob medida, com visualização e preços em minutos.",
    client: "Office Environments of New England / BKM Total Office and Business Interiors (NDA)",
    challenge:
      "A solução exigia uma lógica de cálculo de orçamento complexa com dezenas de variáveis, já que a oferta altamente configurável do cliente tornava orçamentos precisos lentos e difíceis.",
    solution: [
      "Visualização interativa da planta, do layout aos detalhes de decoração.",
      "Cálculo de orçamento em tempo real e geração da proposta comercial.",
      "Jornada intuitiva que permite experimentar opções de configuração.",
      "Envio por e-mail da oferta detalhada diretamente ao cliente.",
      "Processo de vendas mais ágil com capacidade de orçamento rápido.",
    ],
    resultLabels: [],
    outcomes: [
      "Ciclos de venda mais rápidos e fechamentos mais ágeis.",
      "O tempo de geração de propostas caiu de horas para minutos.",
    ],
  },

  "philadelphia-commercial": {
    title: "Integração de Kentico MVC para o e-commerce de um fabricante de tapetes",
    excerpt:
      "A Philadelphia Commercial migrou do Kentico Portal Engine para o Kentico MVC, modernizando sua plataforma de e-commerce com marcação mais limpa e maior engajamento.",
    client: "Shaw Industries Group, Inc. (Philadelphia Commercial)",
    challenge:
      "A migração exigia recriar inúmeros recursos do Portal Engine ausentes no Kentico MVC, incluindo web parts e widgets dos quais o cliente dependia, aproveitando ao mesmo tempo os recursos da nova plataforma.",
    solution: [
      "Uso do controle superior do HTML no Kentico MVC para gerar marcação mais limpa e leve.",
      "Widgets sob medida substituindo a funcionalidade ausente do Portal Engine.",
      "Sistema de gestão de conteúdo integrado ao catálogo de produtos.",
      "Integração com o estoque interno e o serviço de imagens.",
      "Configuração de web farm para escalar.",
    ],
    resultLabels: [
      "Mais usuários novos",
      "Crescimento total de usuários",
      "Mais sessões",
      "Visualizações de página",
    ],
    outcomes: ["A taxa de rejeição caiu de 42 % para 1,03 %."],
  },

  "mortgage-calculator": {
    title: "Ferramenta de simulação de hipoteca para uma instituição financeira",
    excerpt:
      "Calculadora de hipoteca mobile-first que permite estimativas rápidas de financiamento para clientes e consultores, com notificação automática ao gestor a cada solicitação.",
    challenge:
      "A instituição financeira precisava oferecer a usuários e representantes comerciais uma calculadora de financiamento rápida e fácil de usar para aumentar a conversão e agilizar o processo de vendas.",
    solution: [
      "Calculadora mobile-first para o usuário estimar custos conforme sua situação financeira e as condições.",
      "Estimativa de opções de refinanciamento com envio de solicitação integrado.",
      "Notificação automática aos gestores e armazenamento das solicitações no sistema interno.",
      "Interface eficiente que mantém as informações-chave de decisão em uma única tela.",
      "Ferramentas para que consultores simulem e consultem o histórico de cada cliente.",
    ],
    resultLabels: [],
    outcomes: [
      "Processamento mais rápido de solicitações com armazenamento centralizado.",
      "Mais vendas e maior captação de novos clientes.",
    ],
  },

  "eurobank-cyprus": {
    title: "Transformação digital do Eurobank Cyprus",
    excerpt:
      "O Eurobank Cyprus redesenhou seu site bancário sobre Kentico, somando calculadoras financeiras e infraestrutura balanceada e pronta para conformidade.",
    client: "Eurobank Cyprus (Eurobank Group)",
    challenge:
      "O banco precisava migrar de um site legado para um CMS maduro com gestão avançada de conteúdo, multimídia, navegação dinâmica e carregamento eficiente, sobre infraestrutura .NET, IIS e MS SQL Server adequada à conformidade e em um sistema seguro com balanceamento de carga.",
    solution: [
      "Kentico CMS para gestão de conteúdo segura e escalável.",
      "Ferramentas financeiras: calculadora de empréstimos, conversor de moedas e calculadora de IBAN.",
      "Arquitetura de web farm para alta disponibilidade.",
      "Suporte a conteúdo multilíngue para a operação internacional.",
      "Interface amigável a editores que reduz a dependência de desenvolvimento.",
    ],
    resultLabels: ["Aumento de tráfego"],
    outcomes: [
      "Melhor desempenho do site e melhor experiência de usuário.",
      "Requisitos de conformidade e de marketing atendidos simultaneamente.",
    ],
  },

  "trutech-tracker": {
    title: "Career Growth Tracker — TruTech",
    excerpt:
      "SaaS de acompanhamento de desenvolvimento de carreira que substitui planilhas por dados centralizados para a progressão de técnicos, reduzindo em 40 % o esforço dos supervisores.",
    client: "Hiller Plumbing, Heating, Cooling & Electrical",
    challenge:
      "A equipe precisava construir um SaaS multi-tenant que suportasse fluxos de usuário diversos isolando os dados de cada assinante, migrar de processos legados em Excel, automatizar o acompanhamento de progresso entre faixas de inscrição e criar uma interface intensiva acessível de qualquer dispositivo.",
    solution: [
      "Os técnicos se inscrevem sozinhos conforme o cargo atual para concorrer a uma promoção.",
      "Notificações automáticas avisam supervisores sobre mudanças de status dos mentorados.",
      "Painel centralizado que filtra dados por múltiplos critérios com visibilidade do progresso.",
      "Arquitetura multi-tenant que isola os dados entre empresas assinantes.",
      "Materiais de aprendizagem e definição de metas para mentores e mentorados.",
    ],
    resultLabels: ["Menos tempo e esforço de supervisão"],
    outcomes: [
      "Eliminação de centenas de planilhas de inscrições e de milhares de registros históricos.",
      "Qualquer registro histórico é recuperado rapidamente dentro da aplicação.",
    ],
  },

  "pj-library-ua": {
    title: "Sistema de gestão de conteúdo e usuários para a PJ Library",
    excerpt:
      "Sistema de gestão de conteúdo e usuários que permite ao programa PJ Library distribuir livros gratuitos a famílias judaicas na Ucrânia, com fluxos de envio automatizados.",
    client: "Harold Grinspoon Foundation",
    challenge:
      "A fundação precisava lançar o programa PJ Library na Ucrânia com um sistema capaz de gerenciar cadastros, processar dados de famílias, gerar listas de envio e automatizar a entrega de livros minimizando erros manuais.",
    solution: [
      "Cadastro e inscrição de famílias para matricular as crianças no programa.",
      "Processamento automatizado de dados para gerar listas de envio a partir dos cadastros.",
      "Integração com sistemas de transporte para eliminar erros de digitação manual.",
      "Fluxos automatizados de postagem e entrega aos assinantes.",
      "Painéis de relatórios e analytics com informações do programa.",
    ],
    resultLabels: ["Famílias inscritas em um ano"],
    outcomes: [
      "Milhares de famílias judaicas passaram a ter acesso a livros gratuitos e de alta qualidade.",
      "O programa foi lançado com sucesso na Ucrânia.",
    ],
  },

  "vet-pharma-sales-tool": {
    title: "Ferramenta de orçamento para farmacêutica veterinária",
    excerpt:
      "Ferramenta de precificação que permite aos gestores comerciais de uma farmacêutica veterinária calcular preços competitivos e processar pedidos com dependências complexas entre componentes.",
    challenge:
      "A aplicação precisava lidar com dependências rígidas entre componentes médicos com requisitos de compatibilidade complexos, e cálculos de preço intrincados em que o custo de cada componente variava conforme sua combinação com outros.",
    solution: [
      "Análise do conteúdo do carrinho para sugerir componentes compatíveis.",
      "Pipeline de cálculo de preços complexo que considera as interdependências.",
      "Preços exatos e detalhamento completo para a equipe comercial.",
      "Resposta rápida às solicitações de preço dos clientes.",
    ],
    resultLabels: [],
    outcomes: [
      "Mais vendas com resposta rápida e um modelo de preços competitivo.",
      "Vantagem competitiva sólida a partir de uma estratégia de preços mais sofisticada.",
    ],
  },

  "tour-booking-module": {
    title: "Sistema de agendamento de visitas para uma usina de reciclagem australiana",
    excerpt:
      "Uma usina de reciclagem australiana substituiu agendamentos por telefone e e-mail por um módulo de autoatendimento em Kentico, com mais de 500 reservas em seis meses.",
    client: "Usina regional australiana de reciclagem e recuperação de recursos",
    duration: "8 semanas",
    challenge:
      "A usina gerenciava as reservas por telefone, e-mail e planilhas, obrigando a equipe a verificar manualmente a disponibilidade de quatro tipos de visita com restrições complexas: espaços compartilhados, limites de lotação, feriados e sessões vinculadas que podiam conflitar. Na alta temporada isso consumia até 12 horas semanais de trabalho administrativo.",
    solution: [
      "Extensão sob medida do Kentico 12 com um serviço de agendamento em .NET baseado em regras.",
      "Interface pública de reserva com disponibilidade em tempo real e prevenção automática de conflitos.",
      "Painel administrativo para gerenciar visitas recorrentes, lotação, fechamentos e dependências.",
      "E-mails de confirmação automáticos e armazenamento centralizado das reservas.",
      "Validação no servidor, controle de acesso por perfil e log de auditoria.",
    ],
    resultLabels: [
      "Reservas nos primeiros seis meses",
      "Menos tempo de administração",
      "Tempo médio para concluir uma reserva",
      "Reservas duplicadas nos primeiros 60 dias",
    ],
    outcomes: [],
  },

  "sales-price-book": {
    title: "Catálogo de preços para uma empresa de serviços residenciais e reparos",
    excerpt:
      "Catálogo de vendas adaptado a mobile que permite aos gestores de campo montar ofertas filtradas, funcionando offline em áreas de baixa cobertura.",
    client:
      "Hiller, prestadora de serviços residenciais e comerciais no Tennessee, sul do Kentucky e norte do Alabama",
    challenge:
      "O cliente precisava atualizar o catálogo de produtos a partir de uma planilha, controlar quais colunas eram filtráveis e manter o app operante em locais com conexão fraca ou inexistente.",
    solution: [
      "Leitura direta do arquivo Excel com cache no backend, em vez de implementar um banco de dados.",
      "Definição das colunas filtráveis dentro do próprio Excel para facilitar as atualizações.",
      "Modo offline usando o Service Worker do Angular para operar sem internet.",
    ],
    resultLabels: [],
    outcomes: [
      "Preparação mais rápida de ofertas para os vendedores em campo.",
      "Mais negócios fechados com sucesso.",
      "Maior satisfação do cliente.",
    ],
  },

  "org-chart": {
    title: "Software de diretório de funcionários para uma empresa de manufatura",
    excerpt:
      "Aplicação web que reflete a estrutura organizacional completa de mais de 20.000 funcionários, com busca preditiva, contato integrado e diretório de unidades.",
    challenge:
      "Manter os dados atualizados para mais de 20.000 funcionários exigia sincronização contínua com o Active Directory corporativo, onde toda a informação de pessoal é mantida.",
    solution: [
      "Aplicação web que exibe a estrutura organizacional completa de mais de 20.000 funcionários.",
      "Busca preditiva para encontrar pessoas rapidamente.",
      "Navegação simples para cima e para baixo pelos ramos da estrutura.",
      "Envio de e-mails e chamadas a partir da própria aplicação.",
      "Diretório de unidades da empresa com indicações de como chegar.",
    ],
    resultLabels: ["Funcionários no diretório"],
    outcomes: [
      "Melhor compreensão da estrutura e navegação mais rápida até cada pessoa.",
      "Melhor acesso às informações de contato dos funcionários.",
      "O diretório de unidades economiza tempo ao localizar sedes e rotas.",
    ],
  },

  "site-builder": {
    title: "Construtor de sites com templates para um cliente de manufatura",
    excerpt:
      "Construtor de sites corporativo que permite a uma rede de concessionárias gerenciar múltiplos sites promocionais a partir de uma única plataforma, mantendo a coerência de marca.",
    challenge:
      "O cliente industrial precisava gerenciar todos os sites promocionais de suas concessionárias em um só lugar e que fossem fáceis de atualizar por perfis não técnicos. Gerenciar uma rede em que cada unidade exige seu próprio site, mantendo a consistência do conteúdo, apresenta desafios significativos.",
    solution: [
      "Vários designs de site com templates e diferentes temas de cor.",
      "Recursos adicionais como catálogo de produtos e opções de domínio próprio.",
      "Produção de conteúdo centralizada e compartilhada entre todos os sites.",
      "Construído sobre Kentico, .NET, React e SASS.",
      "Menores custos de manutenção com uma abordagem de construir uma vez e reutilizar.",
    ],
    resultLabels: [],
    outcomes: [
      "Economia em marketing com a produção centralizada de conteúdo.",
      "Informação consistente em todos os sites das concessionárias.",
      "Redução significativa de custos de manutenção e desenvolvimento de recursos.",
    ],
  },

  "rug-calculator": {
    title: "Configurador de tapetes sob medida para um fabricante dos EUA",
    excerpt:
      "Configurador de tapetes que permite projetar tapetes personalizados com precificação dinâmica, elevando em 37 % as vendas de tapetes sob medida.",
    challenge:
      "A equipe precisava implementar um algoritmo de preços complexo capaz de lidar com inúmeras configurações — material, tamanho, formato, base e bordas — e projetar uma interface que estimulasse a personalização criativa em vez da compra de produtos prontos.",
    solution: [
      "Backend em Microsoft .NET para uma arquitetura flexível, extensível e personalizável.",
      "Frontend em AngularJS com jornada passo a passo e visualização do tapete.",
      "Aplicação web leve e responsiva que funciona em todos os dispositivos.",
      "Injeção dinâmica de configuração para ajustar a lógica de preços.",
    ],
    resultLabels: ["Mais vendas de tapetes sob medida"],
    outcomes: [
      "Novas capacidades e experiências para o cliente.",
      "Tempo liberado da equipe, já que os clientes montam seus tapetes sozinhos.",
    ],
  },

  "current-choice": {
    title: "Current Choice: marketplace de fornecedores de energia elétrica",
    excerpt:
      "Marketplace que permite aos consumidores comparar fornecedores de energia e trocar de plano por meio de análise conta a conta e dados de consumo em tempo real.",
    client: "Current Choice",
    challenge:
      "A plataforma precisava integrar múltiplas APIs de terceiros — fornecedores e distribuidoras — para obter dados de consumo, planos disponíveis e preços, e processar as trocas, gerenciando ainda as restrições de disponibilidade por área de atendimento.",
    solution: [
      "Unificação de múltiplas interfaces de terceiros por trás de uma única interface genérica.",
      "Adaptadores próprios para cada serviço de terceiros.",
      "Injeção de dependências e padrões de projeto para uma arquitetura flexível e extensível.",
      "Migração de todo o processo de troca para o canal online, reduzindo o trabalho manual.",
    ],
    resultLabels: ["Crescimento anual ao longo de vários anos"],
    outcomes: [
      "Mais receita com trocas residenciais para outros fornecedores e distribuidoras.",
      "Redução significativa das horas necessárias para conduzir o processo de troca.",
    ],
  },
};
