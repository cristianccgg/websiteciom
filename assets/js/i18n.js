document.addEventListener("DOMContentLoaded", function () {
  const resources = {
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

        // Crowdsourcing

        crowdsourcing_title: "Crowdsourcing",
        crowdsourcing_btn_start: "Comenzar",
        crowdsourcing_description:
          "Son personas independientes que están dispuestas a realizar sus tareas en calidad de prestadores de servicios independientes. Usted no tendrá que gestionarlos, la app se encarga de todo.",
        crowdsourcing_description_item: "Imparciales",
        crowdsourcing_description_item_1: "Objetivos",
        crowdsourcing_description_item_2: "24 x 7 los 365 días",
        crowdsourcing_description_item_3: "100% a resultado",
        crowdsourcing_swiper_title: "Obtenga las manos que siempre quizo tener",
        crowdsourcing_delegue_title:
          "Obtenga las manos que siempre quizo tener",
        crowdsourcing_delegue_btn: "Comenzar",
        crowdsourcing_capacidad_title:
          "La capacidad operativa que cualquier negocio soñaría con tener",
        crowdsourcing_capacidad_item:
          "Al disponibilizar sus tareas en el sistema ciom la red de CIOMERS se irá nutriendo de personas interesadas en prestarle los servicios que demanda en cada punto geográfico que lo necesita. Al lograr la cobertura completa su compañía pasará a tener una capacidad operativa bajo demanda nunca antes vista",
        crowdsourcing_capacidad_item_1:
          "Usando Ciom en todo momento usted tendrá el total y completo control de todo. La información resultante será toda de su propiedad. Podrá administrar fácilmente la ejecución (arrancar, parar, modificar) así como también podrá saber el progreso y evolución en tiempo real.",
        crowdsourcing_capacidad_item_2:
          "Usted y su equipo solo se enfocarán en trabajar sobre los resultados que los prestadores de servicios generarán. No tendrá que supervisar, gestionar o contactar personas. El sistema se encarga de gestionar todas las tareas de forma automatiza, ahorrándole horas de trabajo y problemas.",
        crowdsourcing_capacidad_item_3:
          "El modelo Ciom le permite a su compañía alcanzar la máxima eficiencia en el uso de sus recursos ya que no admite costos adicionales por parte del prestador de servicios y solo liberará sus fondos si recibe la tarea solicitada de forma completa y correcta. (Quality Assurance)",
        crowdsourcing_empresas_title: "Sky is the limit",
        crowdsourcing_empresas_item: "5X VECES",
        crowdsourcing_empresas_item_lower: "mas dinamico",
        crowdsourcing_empresas_item_1: "10X VECES",
        crowdsourcing_empresas_item_1_lower: "mas simple y eficiente",
        crowdsourcing_empresas_item_2: "19 PAISES",
        crowdsourcing_empresas_item_2_lower: "con cobertura y creciendo",
        crowdsourcing_empresas_item_3: "27k CIOMERS",
        crowdsourcing_empresas_item_3_lower: "listos para ayudarle",
        crowdsourcing_empresas_item_4: "100% CUSTOMIZABLE",
        crowdsourcing_empresas_item_4_lower: "para su compañía y necesidad",
        auditoria_empresas_btn: "Comenzar",
        auditoria_delegue_btn: "Comenzar",
        crowdsourcing_mejorar_title: "Qué necesita para mejorar?",
        crowdsourcing_mejorar_cliente_btn: "CLIENTE MISTERIOSO",
        crowdsourcing_mejorar_auditoria_btn: "AUDITORIA/INSPECCION",
        crowdsourcing_mejorar_monitoreo_btn: "MONITOREO DE COMPETENCIA",

        // Quiero ser Ciomer

        ciomers_title:
          "Descubre la libertad de generar ingresos a tu propio ritmo",
        ciomers_description_title: "Quienes pueden ser Ciomer",
        ciomers_description:
          "Las personas que deciden actuar como contratistas (prestadores de servicios independientes) para realizar tareas simples de terceros en sus tiempos libres en base a sus habilidades y experiencia.",
        ciomers_description_subtitle: "Requisitos",
        ciomers_description_item: "Ser mayor de edad",
        ciomers_description_item_1: "Mantener una calidad mayor al 95%",
        ciomers_libera_title:
          " Libera tu potencial y conquista tu propio destino Conviértete en tu propio jefe y descubre la libertad de ganar a tu ritmo",

        ciomers_pre_ronda_title: "La herramienta que estabas buscando",
        ciomers_pre_ronda_item: "Satisfacción",
        ciomers_pre_ronda_item_lower:
          " Mantenemos una línea abierta para ayudarte con tus primeros servicios.",
        ciomers_pre_ronda_item_1: "Sin fronteras",
        ciomers_pre_ronda_item_1_lower:
          "En el país o ciudad que encuentres un servicio puedes prestarlo.",
        ciomers_pre_ronda_item_2: "Tranferencias",
        ciomers_pre_ronda_item_2_lower:
          "1 vez al mes te llegará el dinero de todos los servicios prestados exitosamente.",
        ciomers_pre_ronda_item_3: "Ingresos",
        ciomers_pre_ronda_item_3_lower:
          " Podrá aumentarlos a su ritmo media vez haya servicios para realizar en su zona",
        ciomers_swiper_title: "Tareas simples que podrás aprender facilmente",

        ciomers_app_title: "Qué necesita para mejorar?",
        ciomers_app_p: "CLIENTE MISTERIOSO",

        // Nosotros

        nosotros_title: "Queremos contribuir a la mejora de su negocio",
        nosotros_description_title: "Qué y Cómo",
        nosotros_description_1:
          "Somos una compañía que está revolucionando la forma de medir y visualizar indicadores de performance de las compañías y negocios (KPIs). Operamos en 19 países y contamos con un equipo de profesionales con amplia trayectoria y experiencia en la materia que quiere cambiar el mundo.",
        nosotros_description_2:
          "CIOM es una plataforma innovadora, única en el mercado, basada en software de desarrollo propio, que permite a sus clientes recopilar información valiosa de forma muy simple y eficiente para visualizar e identificar en tiempo real oportunidades de mejora.",
        nosotros_description_3:
          "La plataforma permite a sus clientes realizar las mediciones con su app personalizada, a través de sus colaboradores o los de sus proveedores, así como también pedir ayuda a una fuerza de prestadores de servicios independientes (CIOMERS) que están dispuestos a realizar sus tareas operativas por una paga (modelo uber).",

        nuestro_trabajo:
          "Nuestro trabajo estará completo cuando cada compañía haya Revolucionado su forma de Operar",

        nosotros_team_title: "This is us",

        // Inversionistas

        inversionistas_title:
          "El SaaS para el Canal B2B que está revolucionando la forma de operar de las compañías",
        victorinox_title: "Somos la victorinox de las compañías",
        victorinox_item_lower: "Reviews",
        victorinox_item_1_lower: "Paises",
        victorinox_item_2_lower: "Descargas",
        victorinox_item_3_lower: "Vendido 2024",
        victorinox_item_4_lower: "Mediciones",

        inversionistas_maximiza_title:
          "CIOM maximiza el potencial de crecimiento de las empresas Simplificando su operación y empoderando a sus equipos",

        inversionistas_pre_ronda_title: "Pre - Ronda A CIOM U$ 750,000.00",
        inversionistas_pre_ronda_item: "Use of founds<",
        inversionistas_pre_ronda_item_lower:
          "Estamos en una etapa de aceleración via marketing",
        inversionistas_pre_ronda_item_1: "Pre - Ronda A 750k",
        inversionistas_pre_ronda_item_1_lower:
          "Llevamos levantado mas del 40%.",
        inversionistas_pre_ronda_item_2: "Founders Equity",
        inversionistas_pre_ronda_item_2_lower: "Un equipo altamente motivado.",
        inversionistas_pre_ronda_item_3: "Vehicle",
        inversionistas_pre_ronda_item_3_lower:
          "SAFE para su tranquilidad. Con un CAP de 15M.",

        inversionistas_ticket_title: "Hagamos un x 5 en 2025",
        inversionistas_ticket_sub: "Ticket:  U$25,500.00",

        // PQR

        pqr_title: "FAQ",

        pqr_question: "¿Cómo puedo mejorar mi negocio?",
        pqr_answer:
          "En CIOM lo que va a encontrar es: La metodología, las herramientas, el conocimiento y la capacidad para lograr las mejoras que harán crecer su negocio. Pero es usted quien sabe que se debe mejorar para que su negocio crezca. Puede usar CIOM para mejorar de dos formas:",
        pqr_answer_li:
          "a) Como herramienta de gestión para mejorar a través de indicadores",
        pqr_answer_li_2:
          "b) Como una fuerza operativa bajo demanda para que se realicen sus tareas",

        pqr_question_2: "¿Cómo CIOM me ayuda a mejorar mis indicadores?",
        pqr_answer_2_li:
          "(1) Le da una herramienta para tener indicadores SIMPLES y DINAMICOS",
        pqr_answer_2_li_1:
          "(2) Permite que su equipo, proveedores o terceros le hagan las mediciones para alimentar los indicadores.",
        pqr_answer_2_li_2:
          "(3) Le permite ver muy facilmente las oportunidades de mejora.",
        pqr_answer_2_li_3:
          "(4) La plataforma tiene la capacidad de informar a los responsables de sus oportunidades.",
        pqr_question_3: "¿Entre Auditoría e Inspección qué me recomendarían?",
        pqr_answer_3:
          "Las inspecciones son mucho más amigables.Si bien generan un poco más de ansiedad en el equipo porque no pueden opinar, al final del camino eliminan el estress más grande que es que el responsable se sienta mal en todo el proceso de auditoría. Desde nuestro punto de vista las inspecciones son mas objetivas, simples dinámicas y permiten al equipo enfocarse en las oportunidades de mejora y no en las explicaciones o justificativos por los cuales las cosas no están como deberían. Ambos van a hacer que su empresa mejore.",
        pqr_question_4: "¿Cuál es la diferencia entre Auditoría e Inspección?",
        pqr_answer_4:
          "La Auditoría suele ser un poco más profunda o incisiva. En una Auditoría generalmente se pide al responsable que acompañe al Auditor durante la Auditoría para que vaya viendo las oportunidades y que vaya tomando nota de las mejoras a realizar. La Inspección por el otro lado le da libertad al inspector para que revice de forma independiente y que produzca la información necesaria. De esta forma el inspector logra identificar oportunidades de una forma más rápida, simple para que posteriormente el responsable y el equipo pueda conocer las oportunidades encontradas.",
        pqr_question_5: "¿En qué consiste Medir | Corregir | Mejorar?",
        pqr_answer_5:
          "Esta es la metodología ampliamente utilizada por las empresas exitosas.  Consiste en identificar una variable crítica para su negocio y armar un indicador el cual le permitirá ir gestionando hacia la mejora necesaria para el crecimiento de su empresa. Estos indicadores son alimentados por información la cual puede venir de mediciones o de su propio sistema.",
        pqr_question_6: "¿Necesito usar CIOM?",
        pqr_answer_6_li:
          "Si tienes iniciativas que no puedes llevar adelante por falta de tiempo, dinero o capacidad",
        pqr_answer_6_li_1:
          "Si tus indicadores de gestión están todos por arriba de 90% de efectividad.",
        pqr_answer_6_li_2:
          "Si todo parece estar bien, pero usted sabe que no está todo bien",
        pqr_answer_6_li_3: "Si consideras que tienes métricas de vanidad",
        pqr_answer_6_li_4:
          "CIOM es el próximo paso en el crecimiento de tu compañía",
        pqr_question_7: "¿De qué me sirve una fuerza operativa bajo demanda?",
        pqr_answer_7:
          "Seguramente hay infinidades de iniciativas que no puede llevar adelante por tiempo, dinero, geografía, clima, etc. Una fuera operativa bajo demanda con las capacidades de la tecnología de hoy en día le permite a usted tener en cualquier momento esa mano extra que siempre necesita. Haga realidad sus ideas, invierta en Crowdsourcing y olvidese de contratar, despedir y manejar personal.",
        pqr_question_8: "¿Cuándo usar Crowdsourcing?",
        pqr_answer_8_li:
          "Quiere que su equipo deje de tener la dificil tarea de ser Juez y Parte.",
        pqr_answer_8_li_1:
          "Se necesita más objetividad e Imparcialidad en las mediciones.",
        pqr_answer_8_li_2: "Busca aumentar la trazabilidad de la información.",
        pqr_question_9: "¿Qué gano usando Crowdsourcing?",
        pqr_answer_9_li: "Se eliminan costos, riesgos, tiempos muertos, etc.",
        pqr_answer_9_li_1:
          "Desaparece el stress operativo de liderar, supervizar y ejecutar mediciones / relevamientos.",
        pqr_answer_9_li_2:
          "Desarrolla una red de proveedores que le permitirá alcanzar niveles operativos nunca antes pensados.",
        pqr_question_10: "¿Cuál es la desventaja del modelo Crowdsourcing?",
        pqr_answer_10:
          "Como la persona que Mide / Releva es externa no le afecta el resultado.  Esto hace que los datos sean Objetivos, Fríos y Directos.  Lo cual suele ser estresante al principio para las organizaciones que estaban acostumbradas a medir de forma interna, en donde el..",
        pqr_question_11: "¿Estas personas trabajarán para mí?",
        pqr_answer_11:
          "Desde todos los principios NO. La plataforma disponibiliza las tareas suyas y de todas las otras empresas. Ellos son prestadores de servicio que no entran en contacto con usted. Adicionalmente, salvo que sea necesario o se especifique, las personas no saben para quien es la tarea que realizan.",

        // testimonios

        testimonials_title: "¿Listo para capitalizar tus oportunidades?",
        testimonial:
          "“...Tecnología en su máxima expresión...” Permite ver cosas que antes no veíamos.",
        testimonial_1:
          "“...Muy simple de usar...” Consolidamos todas las mediciones",
        testimonial_2:
          "“...Ideal para relevar en competidores..” Podemos generar la data que necesitamos",
        testimonial_3:
          "“...Aplicamos mejora continua...” Medir, Corregir, Mejorar hecho simple",
        testimonial_4:
          "“...Tecnología en su máxima expresión...” Permite ver cosas que antes no veíamos.",
        testimonial_5:
          "“...Estandaricé todo el caribe...Una sola herramienta para toda una región",
        testimonial_6:
          "“...Estandarizamos la Imagen de la cadena...Un nuevo logro para nuestro equipo",
        testimonial_7:
          "“...Opero como una multinacional...Tengo indicadores simples para accionar",
        testimonial_8:
          "“...Logramos un cambio radical en 18 m... Pasamos a ser el mejor país de la cadena",

        // testimonios Ciomers

        testimonials_ciomers_title:
          "¿Listo para capitalizar tus oportunidades?",
        testimonial_ciomers:
          "Buenas tarde muy contento por el objetivo logrado si estuve un poco nervioso pero tranqui y también agradecer al soporte por ser un buen instructor me guío de la mejor manera y muy buena la atención gracias",
        testimonial_ciomers_1:
          "La aplicación me contacto para que les colaborará con un servicio el cual acepte , me pareció una experiencia muy buena,y ellos muy cumplidos con lo que prometieron , espero podercolaborar con ellos más adelante.",
        testimonial_ciomers_2:
          "Increíble esto. Hacer auditorías de estaciones de servicio en tus horarios libres y que te paguen re bien no me lo esperaba. Además está App tel o hace super fácil y más con el apoyo por Whatsapp. Lo recomiendo 110%",
        testimonial_ciomers_3:
          "Buenas tardes, excelente atención y predisposición por parte de Daniel, muy buena ayuda y seguimiento antes las dudas. Tengo que mejorar algunos aspectos que hacen a la práctica. Muchas gracias",
        testimonial_ciomers_4:
          "Muy buena la experiencia y fácil de utilizar la app, es una buena opción para generar ingresos extras, también se destaca el acompañamiento por parte de soporte en el proceso de certificación, muy atenta la asesora.",
        testimonial_ciomers_5:
          "La asesoría y la comunicación que nos dan es muy fluida. Es una empresa confiable. Solo es de seguir instrucciones y cumplir a cabalidad sencillos pasos y de forma ordenada. No he tenido problemas con los pagos.",
        testimonial_ciomers_6:
          "Hermosa experiencia y destaco el acompañamiento y seguimiento del soporte en este proceso de certificación. Es imprescindible generar un vínculo de confianza para sentirse cómodo en la práctica, frente a lo nuevo y desconocido, que en esta oportunidad con el rol de soporte se logró.",
        testimonial_ciomers_7:
          "Le doy 5 estrellas 🤩 me encanto, x ser la primera vez estuve re tranquila. Igual el soporte muy buena honda me explico bien detallado como lo tenía q hacer. Me gustó mucho su atención. No sabía q existía está aplicación, se siente interesante formar parte de este equipo. Muchas gracias",
        testimonial_ciomers_8:
          "Excelente aplicación, mejor aún la empresa... ofrece oportunidades para generar ingresos, y siempre te brindan apoyo desde soporte técnico. Muy agradecido y conforme.",

        // capitalize

        capitalize_title: "¿Listo para capitalizar tus oportunidades?",
        capitalize_btn: "Empezá ahora",

        // ayuda

        help_title: "¿Necesitas ayuda?",
        help_description: "Estamos para solucionar sus dudas.",

        // "cookies_message" : "Al hacer clic en 'Aceptar', usted acepta que las cookies se guarden en su dispositivo para mejorar la navegación del sitio y analizar el uso del mismo.",
        // "cookies_accept" :"Aceptar"

        // "currency": "Moneda: {{currency}}"
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
