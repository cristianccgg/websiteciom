document.addEventListener("DOMContentLoaded", function () {
  const resources = {
    en: {
      translation: {
        header_menu_measures: "Measurements",
        header_menu_additional_service: "Crowdsourcing",
        header_menu_prices: "Prices",
        header_menu_mentions: "About Us",
        header_menu_investors: "About Us",
        header_login: "Login",
        header_btn: "Get Started",

        home_title_sub: "MEASURE | CORRECT | IMPROVE",
        home_title: "The platform to measure and improve in real-time",
        home_item_1: "Improves the execution of your field strategies",
        home_item_2: "Increases compliance with your internal processes",
        home_item_3: "Elevates customer satisfaction",
        home_item_4: "Refines pricing, promotions, and offers strategies",
        home_btn: "Get Started",

        webApp1_title: "How it works",
        webApp1_item_1_title_sub: "IDENTIFY",
        webApp1_item_1_title: "What needs improvement?",
        webApp1_item_1_text:
          "Aspects that would improve your sales and/or profitability if improved.",
        webApp1_item_2_title_sub: "DESIGN",
        webApp1_item_2_title: "How are we going to measure it?",
        webApp1_item_2_text:
          "We create a simple measurement to feed your continuous improvement indicator.",
        webApp1_item_3_title_sub: "IMPROVE",
        webApp1_item_3_title: "How do you achieve the improvement?",
        webApp1_item_3_text:
          "Your teams will start to objectively evidence opportunities and will be able to track improvements.",

        fortune500:
          "Used by companies from the <span style='font-weight: 600;'>Fortune 500</span> to <span style='font-weight: 600;'>family businesses</span>",

        webApp2_title: "The app your team and suppliers will love",
        webApp2_item_1_title: "Acts in real-time",
        webApp2_item_1_description: "Designed to process and inform instantly",
        webApp2_item_2_title: "Consolidates all your information",
        webApp2_item_2_description: "To be used by your team and suppliers",
        webApp2_item_3_title: "Provides peace of mind and security",
        webApp2_item_3_description:
          "Date, time, GPS, and multimedia back up every data point",
        webApp2_item_4_title: "Saves work hours",
        webApp2_item_4_description:
          "Designed to simplify measurement work at the POS",

        webApp3_title: "Simplicity and power in a single web application",
        webApp3_item_1_title: "Improves your business",
        webApp3_item_1_description: "Automates the management of your teams",
        webApp3_item_2_title: "Offers more help",
        webApp3_item_2_description:
          "Customizable reporting for the entire organization",
        webApp3_item_3_title: "Completely independent",
        webApp3_item_3_description:
          "You can create and manage your indicators easily",
        webApp3_item_4_title: "Accelerates your path to growth",
        webApp3_item_4_description:
          "It's very simple to identify more and better opportunities",

        statistics_title: "Risks you could avoid with good indicators",
        statistics_item_1:
          "of your customers will not return after a bad experience",
        statistics_item_2:
          "of customers will choose another brand if your product is not available",
        statistics_item_3: "of consumers prefer a well-standardized brand",
        statistics_item_4:
          "of customers will choose another brand with a better offer",
        statistics_item_5:
          "of products not found were due to operational issues at the POS",
        statistics_btn: "Get Started",

        measures_title_sub: "TOP 5",
        measures_title: "Types of Measurement to improve your profitability",
        measures_item_1_title: "EVALUATIONS",
        measures_item_1_1: "Mystery Shopper",
        measures_item_1_2: "Sales",
        measures_item_1_3: "Knowledge",
        measures_item_2_title: "AUDITS",
        measures_item_2_1: "Image",
        measures_item_2_2: "Execution",
        measures_item_2_3: "Availability",
        measures_item_3_title: "INSPECTIONS",
        measures_item_3_1: "Safety",
        measures_item_3_2: "Maintenance",
        measures_item_3_3: "Cleaning",
        measures_item_4_title: "SURVEYS",
        measures_item_4_1: "Satisfaction",
        measures_item_4_2: "Value Proposition",
        measures_item_4_3: "Work Environment",
        measures_item_5_title: "BENCHMARKING",
        measures_item_5_1: "Prices",
        measures_item_5_2: "Offers",
        measures_item_5_3: "Service",

        methodology_title: "The methodology used by successful companies",
        methodology_item_1:
          "By focusing your company on continuous improvement processes, you will achieve Tangible Results.",
        methodology_item_2:
          "By measuring and correcting, you avoid waste and optimize your resources, making you more agile and competitive.",
        methodology_item_3:
          "Success is the ability to go from one failure to another without losing enthusiasm. - Henry Ford",
        methodology_btn: "Get Started",

        additional_title:
          "A specialized team ready to facilitate your improvement process",
        additional_item_1:
          "Helping you define simple and effective indicators to improve your business",
        additional_item_2:
          "Supporting you with the initial system setup to save you time",
        additional_item_3:
          "Accompanying you in your improvement process for as long as you need",
        additional_item_4:
          "Adapt and Execute the Comprehensive Improvement Program by",
        additional_item_5:
          "CIOMERS (Uber model, independents who perform your field tasks)",
        additional_btn: "Contact Sales",

        prices_title: "Choose the plan that best suits your company",
        "prices_btn-monthly": "Monthly Payment",
        "prices_btn-annual": "Annual Payment",
        prices_saving: "(Save up to 25%)",
        prices_item_basic_title: "BASIC",
        prices_item_basic_description:
          "Eliminate all disputes by being able to support decisions with objective data",
        prices_item_basic_item_info_1: "Annual billing",
        prices_item_basic_item_info_2: "Per user, per month",
        prices_item_basic_item_info_3: "Includes 3 users",
        prices_item_basic_item_1: "2 Improvement Indicators",
        prices_item_basic_item_2: "",
        prices_item_basic_item_3: "Simple tutorials",
        prices_item_basic_item_extra_1: "Desk & Dashboard + Power BI",
        prices_item_basic_btn: "Hire",
        prices_item_advance_title: "ADVANCED",
        prices_item_advance_description:
          "Works like the big ones with simple and practical KPIs to improve your business results.",
        prices_item_advance_item_info_1: "Annual billing",
        prices_item_advance_item_info_2: "Per user, per month",
        prices_item_advance_item_info_3: "Includes 6 users",
        prices_item_advance_item_1: "4 Improvement Indicators",
        prices_item_advance_item_2: "",
        prices_item_advance_item_3: "Automated support",
        prices_item_advance_item_extra_1: "Web Analytics",
        prices_item_advance_btn: "Hire",
        prices_item_profesional_title: "PROFESSIONAL",
        prices_item_profesional_description:
          "Acts in real-time, simplifies your team's work, and gains efficiency.",
        prices_item_profesional_item_info_1: "Annual billing",
        prices_item_profesional_item_info_2: "Per user, per month",
        prices_item_profesional_item_info_3: "Includes 19 users",
        prices_item_profesional_item_1: "6 Improvement Indicators",
        prices_item_profesional_item_2: "",
        prices_item_profesional_item_3: "Online advisor",
        prices_item_profesional_item_extra_1: "Branded app",
        prices_item_profesional_btn: "Hire",
        prices_item_corporate_title: "CORPORATE",
        prices_item_corporate_description:
          "Take control of your information and consolidate all your measurements.",
        prices_item_corporate_item_info_1: "Price based on your needs",
        prices_item_corporate_item_1:
          "Special and customized functionalities for your corporation.",
        prices_item_corporate_btn: "Contact Sales",

        help1_title: "Need help?",
        help1_description: "We are here to solve your doubts",
        help1_btn: "Frequently Asked Questions",

        mentions_title_sub: "SUCCESS CASES",
        mentions_title: "What those who used CIOM to improve said",

        help2_title: "Ready to capitalize on your opportunities?",
        help2_btn: "Frequently Asked Questions",

        capitalize_title: "Are you ready to capitalize your oportunities?",
        capitalize_btn: "Start now",

        footer_description:
          "We have positioned ourselves as the leading company in measurements to feed continuous improvement indicators. What do you want to improve?",
        footer_menu_title: "Menu",
        footer_menu_measures: "Measurements",
        footer_menu_additional_service: "Additional Services",
        footer_menu_prices: "Prices",
        footer_menu_mentions: "Success Cases",
        footer_item2_title: "Contact Us",
        footer_sales: "Sales",
        footer_support: "Support",
        footer_conditions: "Terms and Conditions",
        footer_privacy: "Privacy Notice",
      },
    },
    es: {
      translation: {
        navbarDropdownMenuLink: "Principales Indicadores",
        dropdown_item_1: "Cliente Misterioso",
        dropdown_item_2: "Auditorias/Inspecciones",
        dropdown_item_3: "Monitoreo de competencia",
        header_menu_crowdsourcing: "Crowdsourcing",
        header_menu_ciomers: "Quiero ser CIOMER",
        header_menu_prices: "Precios",
        header_menu_mentions: "Nostros",
        header_menu_investors: "Inversionistas",
        header_login: "Iniciar sesión",
        header_btn: "Comenzar",

        home_title_sub: "MIDA | CORRIJA | MEJORE",
        home_title: "La plataforma para medir y mejorar en tiempo real",
        home_item_1: "Mejora la ejecución de sus estrategias en campo",
        home_item_2: "Aumenta el cumplimiento de sus procesos internos",
        home_item_3: "Eleva la satisfacción de sus clientes",
        home_item_4: "Afina estrategias de precios, promociones y ofertas",
        home_btn: "Comenzar",

        webApp1_title: "Cómo funciona",
        webApp1_item_1_title_sub: "IDENTIFIQUE",
        webApp1_item_1_title: "¿Qué tiene que mejorar?",
        webApp1_item_1_text:
          "Aspectos que mejorarían sus ventas y/o rentabilidad si los logra mejorar.",
        webApp1_item_2_title_sub: "DISEÑE",
        webApp1_item_2_title: "¿Cómo lo vamos a medir?",
        webApp1_item_2_text:
          "Creamos una medición simple para alimentar su indicador de mejora continua.",
        webApp1_item_3_title_sub: "MEJORE",
        webApp1_item_3_title: "¿Cómo logra la mejora?",
        webApp1_item_3_text:
          "Sus equipos comenzarán a evidenciar objetivamente las oportunidades y podrán dar trazabilidad a la mejora.",

        fortune500:
          "Usado desde compañías del <span style='font-weight: 600;'>fortune 500</span> hasta <span style='font-weight: 600;'>empresas familiares</span>",

        webApp2_title: "La app que su equipo y proveedores amaran",
        webApp2_item_1_title: "Acciona en tiempo real",
        webApp2_item_1_description:
          "Diseñada para procesar e informar al instante",
        webApp2_item_2_title: "Consolida toda su información",
        webApp2_item_2_description:
          "Para ser usada por su equipo y proveedores",
        webApp2_item_3_title: "Gana tranquilidad y seguridad",
        webApp2_item_3_description:
          "Fecha, hora, gps y una multimedia respaldan cada dato",
        webApp2_item_4_title: "Ahorra horas de trabajo",
        webApp2_item_4_description:
          "Pensada para simplificar el trabajo de medición en el PDV",

        webApp3_title: "Simplicidad y poder en una sola aplicación web",
        webApp3_item_1_title: "Mejorará su negocio",
        webApp3_item_1_description: "Se automatiza la gestion de sus equipos",
        webApp3_item_2_title: "Cuenta con mas ayuda",
        webApp3_item_2_description:
          "Informará customizadamente a toda la organización",
        webApp3_item_3_title: "Se independizará por completo",
        webApp3_item_3_description:
          "Podrá crear y administrar sus indicadores facilmente",
        webApp3_item_4_title: "Acelera su camino al crecimiento",
        webApp3_item_4_description:
          "Será muy simple identificar más y mejores oportunidades",

        statistics_title:
          "Los riesgos que podría evitar con buenos indicadores",
        statistics_item_1:
          "de sus clientes no regresarán luego de una mala experiencia",
        statistics_item_2:
          "de clientes elegirán otra marca si su producto no está",
        statistics_item_3:
          "de los consumidores prefieren una marca bien estandarizada",

        measures_title_sub: "TOP 5",
        measures_title: "Tipos de Medición para mejorar su rentabilidad",
        measures_item_1_title: "EVALUACIONES",
        measures_item_1_1: "Servicios",
        measures_item_1_2: "Ventas",
        measures_item_1_3: "Conocimientos",
        measures_item_2_title: "AUDITORIAS",
        measures_item_2_1: "Imagen",
        measures_item_2_2: "Ejecución",
        measures_item_2_3: "Disponibilidad",
        measures_item_3_title: "INSPECCIONES",
        measures_item_3_1: "Seguridad",
        measures_item_3_2: "Mantenimiento",
        measures_item_3_3: "Limpieza",
        measures_item_4_title: "ENCUESTAS",
        measures_item_4_1: "Satisfacción",
        measures_item_4_2: "Oferta de Valor",
        measures_item_4_3: "Clima Laboral",
        measures_item_5_title: "BENCHMARKETING",
        measures_item_5_1: "Precios",
        measures_item_5_2: "Ofertas",
        measures_item_5_3: "Servicio",

        methodology_title: "La metodología empleada por las empresas exitosas",
        methodology_item_1:
          "Al enfocar a su compañía a procesos de mejora continua a través de indicadores de gestión usted va a conseguir Resultados Tangibles.",
        methodology_item_2:
          "Al medir y corregir evita desperdicios y optimiza sus recursos, lo que lo hace más ágil y competitivo.",
        methodology_item_3:
          "El éxito es la habilidad de ir de un fracaso en otro sin perder el entusiasmo.  Henry Ford",
        methodology_btn: "Comenzar",

        additional_title:
          "Un equipo especializado listo para facilitarle el proceso de mejora",
        additional_item_1:
          "Ayudarlos a definir indicadores simples y efectivos para que mejore su negocio",
        additional_item_2:
          "Apoyarlos con la configuración inicial del sistema para que ahorren tiempo",
        additional_item_3:
          "Acompañarlos en su proceso de mejora por el tiempo que lo necesiten",
        additional_item_4:
          " Adaptar y Ejecutar el Programa Integral de Mejora by",
        additional_item_5:
          "CIOMERS (Modelo Uber, independientes que le hacen sus tareas de campo)",
        additional_btn: "Contactar con ventas",

        prices_title: "Elija el plan que mejor se adapta a su empresa",
        "prices_btn-monthly": "Pago mensual",
        "prices_btn-annual": "Pago anual",
        prices_saving: "(Ahorre hasta un 25%)",
        prices_item_basic_title: "FAMILIAR",
        prices_item_basic_description:
          "Elimina todas las disputas al poder acompañar las decisiones con datos objetivos",
        prices_item_basic_item_info_1: "Facturación anual",
        prices_item_basic_item_info_2: "Por usuario, por mes",
        prices_item_basic_item_info_3: "Incluye 3 usuarios",
        prices_item_basic_item_1: "2 Indicadores de mejora",
        prices_item_basic_item_2: "",
        prices_item_basic_item_3: "Tutoriales simples",
        prices_item_basic_item_extra_1: "Desk & Dashboard + Power Bi",
        prices_item_basic_btn: "Contratar",
        prices_item_advance_title: "AVANZADO",
        prices_item_advance_description:
          "Trabaja como los grandes KPIs simples y prácticos para mejorar el resultado de su negocio.",
        prices_item_advance_item_info_1: "Facturación anual",
        prices_item_advance_item_info_2: "Por usuario, por mes",
        prices_item_advance_item_info_3: "Incluye 6 usuarios",
        prices_item_advance_item_1: "4 Indicadores de mejora",
        prices_item_advance_item_2: "",
        prices_item_advance_item_3: "Soporte automatizado",
        prices_item_advance_item_extra_1: "Analitycs Web",
        prices_item_advance_btn: "Contratar",
        prices_item_profesional_title: "PROFESIONAL",
        prices_item_profesional_description:
          "Acciona en tiempo real, Simplifica el trabajo de su equipo y ganara eficiencia.",
        prices_item_profesional_item_info_1: "Facturación anual",
        prices_item_profesional_item_info_2: "Por usuario, por mes",
        prices_item_profesional_item_info_3: "Incluye 19 usuarios",
        prices_item_profesional_item_1: "6 Indicadores de mejora",
        prices_item_profesional_item_2: "",
        prices_item_profesional_item_3: "Asesor en linea",
        prices_item_profesional_item_extra_1: "App brandeada",
        prices_item_profesional_btn: "Contratar",
        prices_item_corporate_title: "CORPORATIVO",
        prices_item_corporate_description:
          "Toma el control de su información y consolida todas sus mediciones.",
        prices_item_corporate_item_info_1: "Precio en base a sus necesidades",
        prices_item_corporate_item_1:
          "Funcionalidades especiales y costumizadas para su corporacion.",
        prices_item_corporate_btn: "Contactar con ventas",

        help1_title: "¿Necesitas ayuda?",
        help1_description: "Estamos para solucionar sus dudas",
        help1_btn: "Preguntas frecuentes",

        capitalize_title: "¿Listo para capitalizar tus oportunidades?",
        capitalize_btn: "Empezá ahora",

        mentions_title_sub: "CASOS DE EXITO",
        mentions_title: "Qué dijeron quienes usaron CIOM para mejorar",

        help2_title: "¿Listo para capitalizar sus oportunidades?",
        help2_btn: "Preguntas frecuentes",

        footer_description:
          "Nos hemos posicionado como la empresa líder en mediciones para alimentar indicadores de mejora contínua. ¿Qué quieren mejorar?",
        footer_menu_title: "Menu",
        footer_menu_prices: "Precios",
        footer_menu_investments: "Inversiones",
        footer_item2_title: "Contactenos",
        footer_sales: "Ventas",
        footer_support: "Soporte",
        footer_conditions: "Terminos y condiciones",
        footer_privacy: "Aviso de privacidad",

        // Cliente Misterioso

        cliente_misterioso_title: "Cliente Misterioso",
        cliente_btn_start: "Comenzar",
        cliente_misterioso_description:
          "Técnica altamente efectiva en donde una persona preparada experimenta su servicio y le transmite información objetiva y clara que le permitirá identificar oportunidades de mejora.",
        cliente_misterioso_description_item: "Mejora la atención al cliente.",
        cliente_misterioso_description_item_1:
          "Aumenta la satisfacción del cliente.",
        cliente_misterioso_description_item_2:
          "Incrementa la fidelización a su marca.",
        cliente_misterioso_description_item_3:
          "Eleva el ofrecimiento de ofertas.",
        cliente_misterioso_swiper_title:
          "La felicidad del cliente es el verdadero activo de su empresa",
        cliente_misterioso_empresas_title:
          "Empresa #1 a nivel Latinoamérica para Cliente Misterioso",
        cliente_misterioso_empresas_item: "Industrias Diferentes",
        cliente_misterioso_empresas_item_1: "Paises Cubiertos",
        cliente_misterioso_empresas_item_2: "Clientes misteriosos",
        cliente_misterioso_empresas_item_3: "Visitas mensuales",
        empresas_btn: "Comenzar",
        mejorar_title: "Qué necesita para mejorar?",
        mejorar_cliente_btn: "CLIENTE MISTERIOSO",
        mejorar_auditoria_btn: "AUDITORIA/INSPECCION",
        mejorar_monitoreo_btn: "MONITOREO DE COMPETENCIA",

        // Auditorias

        auditorias_title: "Auditorias/Inspecciones",
        auditorias_btn_start: "Comenzar",
        auditorias_description:
          "Son dos tipos de evaluaciones simples en donde se observa o revisa el cumplimiento de prácticas, procesos, normas o estándares de su negocio para identificar oportunidades de mejora.",
        auditorias_description_item: "Aumenta la estandarización.",
        auditorias_description_item_1: "Mejora la seguridad.",
        auditorias_description_item_2: "Incrementa la vida útil de equipos.",
        auditorias_description_item_3: "Acelera su crecimiento.",
        auditorias_swiper_title:
          "Auditoría e Inspecciones,una garantía de éxito",
        auditorias_empresas_title:
          "App móvil líder en la industria para Auditar e Inspeccionar",
        auditorias_empresas_item: "Geoposicionamiento",
        auditorias_empresas_item_1: "Trabajo sin Conexión",
        auditorias_empresas_item_2: "Respaldo Multimedia",
        auditorias_empresas_item_3: "Tiempo Real",
        auditorias_empresas_btn: "Comenzar",
        auditorias_mejorar_title: "Qué necesita para mejorar?",
        auditorias_mejorar_cliente_btn: "CLIENTE MISTERIOSO",
        auditorias_mejorar_auditoria_btn: "AUDITORIA/INSPECCION",
        auditorias_mejorar_monitoreo_btn: "MONITOREO DE COMPETENCIA",

        // Monitoreo

        monitoreo_title: "Monitoreo de competencia",
        monitoreo_btn_start: "Comenzar",
        monitoreo_description:
          "Consiste en observar las actividades, estrategias y desempeño de las empresas que compiten con usted. Conocerá sus productos o servicios, precios, ofertas, tácticas de marketing, etc.",
        monitoreo_description_item: "Mejora su propuesta de valor",
        monitoreo_description_item_1: "Incrementa su rentabilidad",
        monitoreo_description_item_2: "Acelera su crecimiento",
        monitoreo_description_item_3: "Eleva su competitividad",
        monitoreo_swiper_title: "Obtenga la ventaja que necesita",
        monitoreo_empresas_title:
          "App móvil líder para monitoreo de sus competidores",
        monitoreo_empresas_item: "Geoposicionamiento",
        monitoreo_empresas_item_1: "Trabajo sin Conexión",
        monitoreo_empresas_item_2: "Respaldo Multimedia",
        monitoreo_empresas_item_3: "Tiempo Real",
        auditoria_empresas_btn: "Comenzar",
        monitoreo_mejorar_title: "Qué necesita para mejorar?",
        monitoreo_mejorar_cliente_btn: "CLIENTE MISTERIOSO",
        monitoreo_mejorar_auditoria_btn: "AUDITORIA/INSPECCION",
        monitoreo_mejorar_monitoreo_btn: "MONITOREO DE COMPETENCIA",

        // capitalize

        capitalize_title: "¿Listo para capitalizar tus oportunidades?",
        capitalize_btn: "Empezá ahora",

        // "cookies_message" : "Al hacer clic en 'Aceptar', usted acepta que las cookies se guarden en su dispositivo para mejorar la navegación del sitio y analizar el uso del mismo.",
        // "cookies_accept" :"Aceptar"

        // "currency": "Moneda: {{currency}}"
      },
    },
    pt: {
      translation: {
        header_menu_measures: "Medições",
        header_menu_additional_service: "Serviços Adicionais",
        header_menu_prices: "Preços",
        header_menu_mentions: "Casos de Sucesso",
        header_menu_investors: "Investidores",
        header_login: "Entrar",
        header_btn: "Começar",

        home_title_sub: "MEDIR | CORRIGIR | MELHORAR",
        home_title: "A plataforma para medir e melhorar em tempo real",
        home_item_1: "Melhora a execução das suas estratégias em campo",
        home_item_2: "Aumenta a conformidade com os seus processos internos",
        home_item_3: "Eleva a satisfação dos seus clientes",
        home_item_4: "Aprimora estratégias de preços, promoções e ofertas",
        home_btn: "Começar",

        webApp1_title: "Como funciona",
        webApp1_item_1_title_sub: "IDENTIFICAR",
        webApp1_item_1_title: "O que precisa melhorar?",
        webApp1_item_1_text:
          "Aspectos que melhorariam suas vendas e/ou rentabilidade se melhorados.",
        webApp1_item_2_title_sub: "DESENHAR",
        webApp1_item_2_title: "Como vamos medir?",
        webApp1_item_2_text:
          "Criamos uma medição simples para alimentar seu indicador de melhoria contínua.",
        webApp1_item_3_title_sub: "MELHORAR",
        webApp1_item_3_title: "Como alcançar a melhoria?",
        webApp1_item_3_text:
          "Suas equipes começarão a evidenciar objetivamente as oportunidades e poderão rastrear as melhorias.",

        fortune500:
          "Usado desde empresas da <span style='font-weight: 600;'>Fortune 500</span> até <span style='font-weight: 600;'>negócios familiares</span>",

        webApp2_title: "O app que sua equipe e fornecedores vão amar",
        webApp2_item_1_title: "Ação em tempo real",
        webApp2_item_1_description:
          "Projetado para processar e informar instantaneamente",
        webApp2_item_2_title: "Consolida todas as suas informações",
        webApp2_item_2_description:
          "Para ser usado por sua equipe e fornecedores",
        webApp2_item_3_title: "Garante tranquilidade e segurança",
        webApp2_item_3_description:
          "Data, hora, GPS e multimídia respaldam cada dado",
        webApp2_item_4_title: "Economiza horas de trabalho",
        webApp2_item_4_description:
          "Projetado para simplificar o trabalho de medição no PDV",

        webApp3_title: "Simplicidade e poder em uma única aplicação web",
        webApp3_item_1_title: "Melhora o seu negócio",
        webApp3_item_1_description: "Automatiza a gestão das suas equipes",
        webApp3_item_2_title: "Oferece mais ajuda",
        webApp3_item_2_description:
          "Informes personalizáveis para toda a organização",
        webApp3_item_3_title: "Completamente independente",
        webApp3_item_3_description:
          "Você pode criar e gerenciar seus indicadores facilmente",
        webApp3_item_4_title: "Acelera o seu caminho para o crescimento",
        webApp3_item_4_description:
          "É muito simples identificar mais e melhores oportunidades",

        statistics_title: "Riscos que você poderia evitar com bons indicadores",
        statistics_item_1:
          "dos seus clientes não retornarão após uma má experiência",
        statistics_item_2:
          "dos clientes escolherão outra marca se seu produto não estiver disponível",
        statistics_item_3:
          "dos consumidores preferem uma marca bem padronizada",
        statistics_item_4:
          "dos clientes escolherão outra marca diante de uma melhor oferta",
        statistics_item_5:
          "dos produtos não encontrados foram por problemas operacionais no PDV",
        statistics_btn: "Começar",

        measures_title_sub: "TOP 5",
        measures_title: "Tipos de Medição para melhorar sua rentabilidade",
        measures_item_1_title: "AVALIAÇÕES",
        measures_item_1_1: "Cliente Misterioso",
        measures_item_1_2: "Vendas",
        measures_item_1_3: "Conhecimento",
        measures_item_2_title: "AUDITORIAS",
        measures_item_2_1: "Imagem",
        measures_item_2_2: "Execução",
        measures_item_2_3: "Disponibilidade",
        measures_item_3_title: "INSPEÇÕES",
        measures_item_3_1: "Segurança",
        measures_item_3_2: "Manutenção",
        measures_item_3_3: "Limpeza",
        measures_item_4_title: "PESQUISAS",
        measures_item_4_1: "Satisfação",
        measures_item_4_2: "Proposta de Valor",
        measures_item_4_3: "Ambiente de Trabalho",
        measures_item_5_title: "BENCHMARKING",
        measures_item_5_1: "Preços",
        measures_item_5_2: "Ofertas",
        measures_item_5_3: "Serviço",

        methodology_title: "A metodologia usada por empresas de sucesso",
        methodology_item_1:
          "Ao focar sua empresa em processos de melhoria contínua, você alcançará Resultados Tangíveis.",
        methodology_item_2:
          "Ao medir e corrigir, você evita desperdícios e otimiza seus recursos, tornando-se mais ágil e competitivo.",
        methodology_item_3:
          "O sucesso é a habilidade de ir de um fracasso a outro sem perder o entusiasmo. - Henry Ford",
        methodology_btn: "Começar",

        additional_title:
          "Uma equipe especializada pronta para facilitar seu processo de melhoria",
        additional_item_1:
          "Ajudá-lo a definir indicadores simples e eficazes para melhorar seu negócio",
        additional_item_2:
          "Apoiá-lo com a configuração inicial do sistema para economizar tempo",
        additional_item_3:
          "Acompanhá-lo em seu processo de melhoria pelo tempo que precisar",
        additional_item_4:
          "Adaptar e Executar o Programa Integral de Melhoria by",
        additional_item_5:
          "CIOMERS (modelo Uber, independentes que realizam suas tarefas de campo)",
        additional_btn: "Contatar Vendas",

        prices_title: "Escolha o plano que melhor se adapta à sua empresa",
        "prices_btn-monthly": "Pagamento Mensal",
        "prices_btn-annual": "Pagamento Anual",
        prices_saving: "(Economize até 25%)",
        prices_item_basic_title: "BÁSICO",
        prices_item_basic_description:
          "Elimine todas as disputas ao poder apoiar as decisões com dados objetivos",
        prices_item_basic_item_info_1: "Faturamento anual",
        prices_item_basic_item_info_2: "Por usuário, por mês",
        prices_item_basic_item_info_3: "Inclui 3 usuários",
        prices_item_basic_item_1: "2 Indicadores de Melhoria",
        prices_item_basic_item_2: "",
        prices_item_basic_item_3: "Tutoriais simples",
        prices_item_basic_item_extra_1: "Desk & Dashboard + Power BI",
        prices_item_basic_btn: "Contratar",
        prices_item_advance_title: "AVANÇADO",
        prices_item_advance_description:
          "Trabalha como os grandes com KPIs simples e práticos para melhorar os resultados do seu negócio.",
        prices_item_advance_item_info_1: "Faturamento anual",
        prices_item_advance_item_info_2: "Por usuário, por mês",
        prices_item_advance_item_info_3: "Inclui 6 usuários",
        prices_item_advance_item_1: "4 Indicadores de Melhoria",
        prices_item_advance_item_2: "",
        prices_item_advance_item_3: "Suporte automatizado",
        prices_item_advance_item_extra_1: "Web Analytics",
        prices_item_advance_btn: "Contratar",
        prices_item_profesional_title: "PROFISSIONAL",
        prices_item_profesional_description:
          "Ação em tempo real, simplifica o trabalho da sua equipe e ganha eficiência.",
        prices_item_profesional_item_info_1: "Faturamento anual",
        prices_item_profesional_item_info_2: "Por usuário, por mês",
        prices_item_profesional_item_info_3: "Inclui 19 usuários",
        prices_item_profesional_item_1: "6 Indicadores de Melhoria",
        prices_item_profesional_item_2: "",
        prices_item_profesional_item_3: "Consultor online",
        prices_item_profesional_item_extra_1: "App personalizada",
        prices_item_profesional_btn: "Contratar",
        prices_item_corporate_title: "CORPORATIVO",
        prices_item_corporate_description:
          "Tome o controle de suas informações e consolide todas as suas medições.",
        prices_item_corporate_item_info_1:
          "Preço de acordo com suas necessidades",
        prices_item_corporate_item_1:
          "Funcionalidades especiais e personalizadas para sua corporação.",
        prices_item_corporate_btn: "Contatar Vendas",

        help1_title: "Precisa de ajuda?",
        help1_description: "Estamos aqui para resolver suas dúvidas",
        help1_btn: "Perguntas Frequentes",

        mentions_title_sub: "CASOS DE SUCESSO",
        mentions_title: "O que disseram aqueles que usaram CIOM para melhorar",

        help2_title: "Pronto para capitalizar suas oportunidades?",
        help2_btn: "Perguntas Frequentes",

        capitalize_title: "Pronto para capitalizar suas oportunidades?",
        capitalize_btn: "Comece agora",

        footer_description:
          "Nos posicionamos como a empresa líder em medições para alimentar indicadores de melhoria contínua. O que você quer melhorar?",
        footer_menu_title: "Menu",
        footer_menu_measures: "Medições",
        footer_menu_additional_service: "Serviços Adicionais",
        footer_menu_prices: "Preços",
        footer_menu_mentions: "Casos de Sucesso",
        footer_item2_title: "Contate-nos",
        footer_sales: "Vendas",
        footer_support: "Suporte",
        footer_conditions: "Termos e Condições",
        footer_privacy: "Aviso de Privacidade",
      },
    },
    fr: {
      translation: {
        header_menu_measures: "Mesures",
        header_menu_additional_service: "Services supplémentaires",
        header_menu_prices: "Tarifs",
        header_menu_mentions: "Études de cas",
        header_menu_investors: "Investisseurs",
        header_login: "Se connecter",
        header_btn: "Commencer",

        home_title_sub: "MESURER | CORRIGER | AMÉLIORER",
        home_title: "La plateforme pour mesurer et améliorer en temps réel",
        home_item_1: "Améliore l'exécution de vos stratégies sur le terrain",
        home_item_2: "Augmente la conformité de vos processus internes",
        home_item_3: "Augmente la satisfaction de vos clients",
        home_item_4: "Affiner les stratégies de prix, promotions et offres",
        home_btn: "Commencer",

        webApp1_title: "Comment ça fonctionne",
        webApp1_item_1_title_sub: "IDENTIFIER",
        webApp1_item_1_title: "Que faut-il améliorer ?",
        webApp1_item_1_text:
          "Aspects qui amélioreraient vos ventes et/ou rentabilité si améliorés.",
        webApp1_item_2_title_sub: "CONCEVOIR",
        webApp1_item_2_title: "Comment allons-nous mesurer ?",
        webApp1_item_2_text:
          "Nous créons une mesure simple pour alimenter votre indicateur d'amélioration continue.",
        webApp1_item_3_title_sub: "AMÉLIORER",
        webApp1_item_3_title: "Comment réaliser l'amélioration ?",
        webApp1_item_3_text:
          "Vos équipes commenceront à identifier objectivement les opportunités et pourront suivre les améliorations.",

        fortune500:
          "Utilisé par des entreprises du <span style='font-weight: 600;'>Fortune 500</span> jusqu'aux <span style='font-weight: 600;'>entreprises familiales</span>",

        webApp2_title:
          "L'application que votre équipe et vos fournisseurs vont adorer",
        webApp2_item_1_title: "Action en temps réel",
        webApp2_item_1_description:
          "Conçu pour traiter et informer instantanément",
        webApp2_item_2_title: "Consolide toutes vos informations",
        webApp2_item_2_description:
          "Pour être utilisé par votre équipe et vos fournisseurs",
        webApp2_item_3_title: "Gagne en tranquillité et sécurité",
        webApp2_item_3_description:
          "Date, heure, GPS et multimédia soutiennent chaque donnée",
        webApp2_item_4_title: "Économise des heures de travail",
        webApp2_item_4_description:
          "Conçu pour simplifier le travail de mesure sur le PDV",

        webApp3_title: "Simplicité et puissance dans une seule application web",
        webApp3_item_1_title: "Améliore votre entreprise",
        webApp3_item_1_description: "Automatise la gestion de vos équipes",
        webApp3_item_2_title: "Offre plus d'aide",
        webApp3_item_2_description:
          "Informer de manière personnalisée toute l'organisation",
        webApp3_item_3_title: "Totalement indépendant",
        webApp3_item_3_description:
          "Vous pourrez créer et gérer vos indicateurs facilement",
        webApp3_item_4_title: "Accélère votre chemin vers la croissance",
        webApp3_item_4_description:
          "Il sera très simple d'identifier plus et de meilleures opportunités",

        statistics_title:
          "Les risques que vous pourriez éviter avec de bons indicateurs",
        statistics_item_1:
          "de vos clients ne reviendront pas après une mauvaise expérience",
        statistics_item_2:
          "des clients choisiront une autre marque si votre produit n'est pas disponible",
        statistics_item_3:
          "des consommateurs préfèrent une marque bien standardisée",
        statistics_item_4:
          "des clients choisiront une autre marque devant une meilleure offre",
        statistics_item_5:
          "des produits non trouvés étaient dus à des problèmes opérationnels au PDV",
        statistics_btn: "Commencer",

        measures_title_sub: "TOP 5",
        measures_title: "Types de mesures pour améliorer votre rentabilité",
        measures_item_1_title: "ÉVALUATIONS",
        measures_item_1_1: "Client Mystère",
        measures_item_1_2: "Ventes",
        measures_item_1_3: "Connaissances",
        measures_item_2_title: "AUDITS",
        measures_item_2_1: "Image",
        measures_item_2_2: "Exécution",
        measures_item_2_3: "Disponibilité",
        measures_item_3_title: "INSPECTIONS",
        measures_item_3_1: "Sécurité",
        measures_item_3_2: "Maintenance",
        measures_item_3_3: "Nettoyage",
        measures_item_4_title: "ENQUÊTES",
        measures_item_4_1: "Satisfaction",
        measures_item_4_2: "Offre de valeur",
        measures_item_4_3: "Climat de travail",
        measures_item_5_title: "BENCHMARKING",
        measures_item_5_1: "Prix",
        measures_item_5_2: "Offres",
        measures_item_5_3: "Service",

        methodology_title:
          "La méthodologie utilisée par les entreprises à succès",
        methodology_item_1:
          "En focalisant votre entreprise sur des processus d'amélioration continue, vous obtiendrez des résultats tangibles.",
        methodology_item_2:
          "En mesurant et corrigeant, vous évitez les gaspillages et optimisez vos ressources, vous rendant plus agile et compétitif.",
        methodology_item_3:
          "Le succès, c'est la capacité d'aller d'échec en échec sans perdre son enthousiasme. - Henry Ford",
        methodology_btn: "Commencer",

        additional_title:
          "Une équipe spécialisée prête à faciliter votre processus d'amélioration",
        additional_item_1:
          "Vous aider à définir des indicateurs simples et efficaces pour améliorer votre entreprise",
        additional_item_2:
          "Vous assister dans la configuration initiale du système pour économiser du temps",
        additional_item_3:
          "Vous accompagner dans votre processus d'amélioration aussi longtemps que nécessaire",
        additional_item_4:
          "Adapter et exécuter le programme d'amélioration intégrale par",
        additional_item_5:
          "CIOMERS (modèle Uber, indépendants qui réalisent vos tâches sur le terrain)",
        additional_btn: "Contacter les ventes",

        prices_title:
          "Choisissez le plan qui convient le mieux à votre entreprise",
        "prices_btn-monthly": "Paiement mensuel",
        "prices_btn-annual": "Paiement annuel",
        prices_saving: "(Économisez jusqu'à 25%)",
        prices_item_basic_title: "BASIQUE",
        prices_item_basic_description:
          "Élimine tous les litiges en pouvant accompagner les décisions de données objectives",
        prices_item_basic_item_info_1: "Facturation annuelle",
        prices_item_basic_item_info_2: "Par utilisateur, par mois",
        prices_item_basic_item_info_3: "Inclut 3 utilisateurs",
        prices_item_basic_item_1: "2 indicateurs d'amélioration",
        prices_item_basic_item_2: "",
        prices_item_basic_item_3: "Tutoriels simples",
        prices_item_basic_item_extra_1: "Bureau & Tableau de bord + Power BI",
        prices_item_basic_btn: "Souscrire",
        prices_item_advance_title: "AVANCÉ",
        prices_item_advance_description:
          "Travaillez comme les grandes entreprises avec des KPI simples et pratiques pour améliorer les résultats de votre entreprise.",
        prices_item_advance_item_info_1: "Facturation annuelle",
        prices_item_advance_item_info_2: "Par utilisateur, par mois",
        prices_item_advance_item_info_3: "Inclut 6 utilisateurs",
        prices_item_advance_item_1: "4 indicateurs d'amélioration",
        prices_item_advance_item_2: "",
        prices_item_advance_item_3: "Support automatisé",
        prices_item_advance_item_extra_1: "Analytique Web",
        prices_item_advance_btn: "Souscrire",
        prices_item_profesional_title: "PROFESSIONNEL",
        prices_item_profesional_description:
          "Action en temps réel, simplifie le travail de votre équipe et gagne en efficacité.",
        prices_item_profesional_item_info_1: "Facturation annuelle",
        prices_item_profesional_item_info_2: "Par utilisateur, par mois",
        prices_item_profesional_item_info_3: "Inclut 19 utilisateurs",
        prices_item_profesional_item_1: "6 indicateurs d'amélioration",
        prices_item_profesional_item_2: "",
        prices_item_profesional_item_3: "Conseiller en ligne",
        prices_item_profesional_item_extra_1: "Application de marque",
        prices_item_profesional_btn: "Souscrire",
        prices_item_corporate_title: "CORPORATIF",
        prices_item_corporate_description:
          "Prenez le contrôle de vos informations et consolidez toutes vos mesures.",
        prices_item_corporate_item_info_1: "Prix en fonction de vos besoins",
        prices_item_corporate_item_1:
          "Fonctionnalités spéciales et personnalisées pour votre entreprise.",
        prices_item_corporate_btn: "Contacter les ventes",

        help1_title: "Besoin d'aide ?",
        help1_description: "Nous sommes là pour répondre à vos questions",
        help1_btn: "Questions fréquentes",

        mentions_title_sub: "CAS DE SUCCÈS",
        mentions_title:
          "Ce que disent ceux qui ont utilisé CIOM pour améliorer",

        help2_title: "Prêt à capitaliser sur vos opportunités ?",
        help2_btn: "Questions fréquentes",

        capitalize_title: "Prêt à capitaliser sur vos opportunités ?",
        capitalize_btn: "Commencez maintenant",

        footer_description:
          "Nous nous sommes positionnés comme le leader des entreprises de mesure pour alimenter des indicateurs d'amélioration continue. Que souhaitez-vous améliorer ?",
        footer_menu_title: "Menu",
        footer_menu_measures: "Mesures",
        footer_menu_additional_service: "Services supplémentaires",
        footer_menu_prices: "Tarifs",
        footer_menu_mentions: "Études de cas",
        footer_item2_title: "Contactez-nous",
        footer_sales: "Ventes",
        footer_support: "Support",
        footer_conditions: "Termes et conditions",
        footer_privacy: "Avis de confidentialité",
      },
    },
  };

  i18next.use(i18nextBrowserLanguageDetector).init(
    {
      resources,
      fallbackLng: "es",
      detection: {
        order: [
          "querystring",
          "cookie",
          "localStorage",
          "navigator",
          "htmlTag",
          "path",
          "subdomain",
        ],
        caches: ["localStorage", "cookie"],
      },
      interpolation: {
        escapeValue: false,
      },
    },
    function (err, t) {
      if (err) return console.error(err);
      updateContent();
    }
  );

  function updateContent() {
    document.getElementById("header_menu_prices").innerText =
      i18next.t("header_menu_prices");
    document.getElementById("header_login").innerText =
      i18next.t("header_login");

    Object.keys(resources.es.translation).forEach((key) => {
      if (document.getElementById(key)) {
        document.getElementById(key).innerHTML = i18next.t(key);
      }
    });
  }

  window.changeLanguage = function (lng) {
    i18next.changeLanguage(lng, updateContent);
  };
});
