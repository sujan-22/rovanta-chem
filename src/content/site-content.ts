export type BrandAccent = "copper" | "verdigris" | "sulphate" | "oxide" | "ink";

export interface NavigationItem {
    label: string;
    href: string;
    cta?: boolean;
}

export interface NavigationGroup {
    title: string;
    links: readonly NavigationItem[];
}

export interface ProductSpecification {
    label: string;
    value: string;
    pendingVerification?: boolean | undefined;
}

export interface ProductContent {
    slug: string;
    name: string;
    formula: string;
    cas: string | null;
    category: string;
    accent: BrandAccent;
    shortDescription: string;
    capacity: string;
    overview: string;
    applications: readonly string[];
    packaging: string;
    storage: string;
    specifications: ProductSpecification[];
}

export const PENDING_VERIFICATION = "Pending client verification";

export const siteContent = {
    company: {
        brandName: "ROVANTA",
        legalName: "ROVANTA PVT. LTD.",
        tagline: "Specialty Chemical Manufacturing",
        description:
            "Specialty inorganic chemical manufacturer focused on copper oxychloride, copper oxide, copper sulphate, agrochemical intermediates, pharmaceutical intermediates, specialty chemicals, and custom chemical manufacturing.",
        domain: "https://www.rovantachem.com",
        email: "info@rovantachem.com",
        salesEmail: "sales@rovantachem.com",
        purchaseEmail: "purchase@rovantachem.com",
        phoneDisplay: "+91 88666 36344",
        phoneHref: "+918866636344",
        whatsappNumber: "918866636344",
        linkedin: "https://www.linkedin.com/company/rovanta-pvt-ltd/",
        hours: "Monday–Saturday, 9:00–18:00 IST",
        address: {
            short: "Plot C-35, Laxmi Eco Industrial Park, NH-8, Hathoda, Surat, Gujarat 394405",
            full: "Plot No. C-35, Laxmi Eco Industrial Park, Block No. 481, Opp. Tulsi Hotel, National Highway NH-8, Hathoda, Ta. Mangrol, Dist. Surat, Gujarat 394405, India",
            street: "Plot No. C-35, Laxmi Eco Industrial Park, Opp. Tulsi Hotel, NH-8, Hathoda",
            city: "Mangrol, Surat",
            region: "Gujarat",
            postalCode: "394405",
            country: "India",
        },
        coordinates: {
            latitude: 21.415056,
            longitude: 72.975583,
            display: `21°24'54.20" N, 72°58'32.10" E`,
        },
        facts: [
            {
                label: "Incorporation",
                value: "Private Limited Company",
            },
            {
                label: "Venture type",
                value: "Greenfield specialty inorganic chemical project",
            },
            {
                label: "Regulatory category",
                value: `Schedule 5(f), Category "B" (MoEFCC EIA)`,
            },
            {
                label: "Site",
                value: "Plot C-35, Laxmi Eco Industrial Park, Hathoda, Surat, Gujarat 394405",
            },
            {
                label: "Plot area",
                value: "1,068.18 sq. yd (~893.14 m²)",
            },
            {
                label: "Installed capacity",
                value: "Copper Oxychloride 100 MT/annum · Copper Oxide 80 MT/annum",
            },
            {
                label: "Planned employment",
                value: "12–15 direct technical positions · 25–30 indirect roles",
            },
        ],
    },

    translations: {
        en: {
            tagline: "Specialty Chemical Manufacturing",
            navHome: "Home",
            navAbout: "About",
            navProducts: "Products",
            navIndustries: "Industries",
            navManufacturing: "Manufacturing",
            navQuality: "Quality",
            navSustainability: "Sustainability",
            navContact: "Contact",
            navQuote: "Request a Quote",
            heroEyebrow:
                "Surat · Gujarat · India · Zero Liquid Discharge Facility",
            heroKicker:
                "Reliable chemical manufacturing for demanding industries",
            heroTitlePrefix: "Copper chemistry,",
            heroTitleSuffix: "engineered for agriculture and industry.",
            heroDescription:
                "ROVANTA PVT. LTD. manufactures high-purity copper oxychloride, copper oxide and specialty inorganic compounds, converting secondary copper into standardized, quality-controlled chemical products for agrochemical, pharmaceutical, ceramic and coatings supply chains.",
            exploreProducts: "Explore Products",
            requestQuote: "Request a Quote",
        },
        hi: {
            tagline: "विशेष रसायन निर्माण",
            navHome: "होम",
            navAbout: "हमारे बारे में",
            navProducts: "उत्पाद",
            navIndustries: "उद्योग",
            navManufacturing: "निर्माण",
            navQuality: "गुणवत्ता",
            navSustainability: "स्थिरता",
            navContact: "संपर्क",
            navQuote: "कोटेशन प्राप्त करें",
            heroEyebrow:
                "सूरत · गुजरात · भारत · ज़ीरो लिक्विड डिस्चार्ज सुविधा",
            heroKicker: "मांग वाले उद्योगों के लिए विश्वसनीय रासायनिक निर्माण",
            heroTitlePrefix: "कृषि और उद्योग के लिए",
            heroTitleSuffix: "कॉपर रसायन।",
            heroDescription:
                "रोवंता प्रा. लि. उच्च शुद्धता वाले कॉपर ऑक्सीक्लोराइड, कॉपर ऑक्साइड और विशेष अकार्बनिक यौगिकों का निर्माण करती है, एग्रोकेमिकल, फार्मास्युटिकल, सिरेमिक और कोटिंग उद्योगों के लिए।",
            exploreProducts: "उत्पाद देखें",
            requestQuote: "कोटेशन प्राप्त करें",
        },
        gu: {
            tagline: "સ્પેશિયાલિટી કેમિકલ મેન્યુફેક્ચરિંગ",
            navHome: "હોમ",
            navAbout: "અમારા વિશે",
            navProducts: "પ્રોડક્ટ્સ",
            navIndustries: "ઉદ્યોગો",
            navManufacturing: "મેન્યુફેક્ચરિંગ",
            navQuality: "ગુણવત્તા",
            navSustainability: "ટકાઉપણું",
            navContact: "સંપર્ક",
            navQuote: "ક્વોટ મેળવો",
            heroEyebrow: "સુરત · ગુજરાત · ભારત · ઝીરો લિક્વિડ ડિસ્ચાર્જ સુવિધા",
            heroKicker: "માંગવાળા ઉદ્યોગો માટે વિશ્વસનીય રાસાયણિક ઉત્પાદન",
            heroTitlePrefix: "ખેતી અને ઉદ્યોગ માટે",
            heroTitleSuffix: "કોપર રસાયણશાસ્ત્ર.",
            heroDescription:
                "રોવંતા પ્રા. લિ. ઉચ્ચ શુદ્ધતાવાળા કોપર ઓક્સિક્લોરાઇડ, કોપર ઓક્સાઇડ અને સ્પેશિયાલિટી અકાર્બનિક સંયોજનોનું ઉત્પાદન કરે છે, એગ્રોકેમિકલ, ફાર્માસ્યુટિકલ, સિરામિક અને કોટિંગ સપ્લાય ચેઇન માટે.",
            exploreProducts: "પ્રોડક્ટ્સ જુઓ",
            requestQuote: "ક્વોટ મેળવો",
        },
    },

    /*
     * Header nav. Kept to six links plus the CTA so the full bar fits from the
     * lg breakpoint up; the rest of the site is reachable from /more and the
     * footer groups. `navigation` is the complete list used in the mobile sheet.
     */
    primaryNavigation: [
        { label: "About", href: "/about" },
        { label: "Products", href: "/products" },
        { label: "Industries", href: "/industries" },
        { label: "Manufacturing", href: "/manufacturing" },
        { label: "Quality", href: "/quality" },
        { label: "Contact", href: "/contact" },
        { label: "Request a Quote", href: "/quote", cta: true },
    ] satisfies readonly NavigationItem[],

    navigation: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Products", href: "/products" },
        { label: "Industries", href: "/industries" },
        { label: "Manufacturing", href: "/manufacturing" },
        { label: "Quality", href: "/quality" },
        { label: "Sustainability", href: "/sustainability" },
        { label: "More", href: "/more" },
        { label: "Contact", href: "/contact" },
        { label: "Request a Quote", href: "/quote", cta: true },
    ] satisfies readonly NavigationItem[],

    navigationGroups: [
        {
            title: "Company",
            links: [
                { label: "About Us", href: "/about" },
                { label: "Leadership", href: "/leadership" },
                { label: "Careers", href: "/careers" },
                { label: "Blog", href: "/blog" },
            ],
        },
        {
            title: "Capability",
            links: [
                { label: "Manufacturing", href: "/manufacturing" },
                { label: "Quality", href: "/quality" },
                {
                    label: "Research & Development",
                    href: "/research-development",
                },
                { label: "Sustainability", href: "/sustainability" },
                {
                    label: "Custom Manufacturing",
                    href: "/custom-manufacturing",
                },
            ],
        },
        {
            title: "Commercial",
            links: [
                { label: "Products", href: "/products" },
                { label: "Industries Served", href: "/industries" },
                { label: "Request a Quote", href: "/quote" },
                {
                    label: "Documents & Downloads",
                    href: "/downloads",
                },
                { label: "Contact", href: "/contact" },
                {
                    label: "Customer Portal",
                    href: "/customer-portal",
                },
                { label: "Admin Dashboard", href: "/admin" },
            ],
        },
    ] satisfies readonly NavigationGroup[],

    home: {
        hero: {
            eyebrow: "Surat · Gujarat · India · Zero Liquid Discharge Facility",
            kicker: "Reliable chemical manufacturing for demanding industries",
            titlePrefix: "Copper chemistry,",
            titleSuffix: "engineered for agriculture and industry.",
            description:
                "ROVANTA PVT. LTD. manufactures high-purity copper oxychloride, copper oxide and specialty inorganic compounds, converting secondary copper into standardized, quality-controlled chemical products for agrochemical, pharmaceutical, ceramic and coatings supply chains.",
            actions: [
                { label: "Explore Products", href: "/products" },
                { label: "Request a Quote", href: "/quote" },
            ],
            plates: [
                {
                    label: "Copper Oxychloride",
                    value: "100 MT/annum",
                },
                {
                    label: "Copper Oxide",
                    value: "80 MT/annum",
                },
                {
                    label: "Wastewater policy",
                    value: "100% ZLD",
                },
            ],
        },
        overview: {
            eyebrow: "Company overview",
            title: "A young, quality-driven copper chemistry venture in Gujarat's industrial heartland.",
            description:
                "ROVANTA PVT. LTD. is a newly established specialty chemical company, commencing manufacturing of copper oxychloride, copper oxide, copper sulphate and inorganic intermediates at its greenfield facility in Laxmi Eco Industrial Park on the NH-8 corridor, Surat. Modern glass-lined batch reactors, a well-equipped QC laboratory and a closed-loop water system deliver consistent quality with a minimal environmental footprint.",
            stats: [
                {
                    value: "180",
                    label: "MT/annum aggregate copper compound capacity",
                    accent: "copper",
                },
                {
                    value: "100%",
                    label: "Zero Liquid Discharge, closed-loop water management",
                    accent: "verdigris",
                },
                {
                    value: "~45 km",
                    label: "To Hazira deep-water port for export logistics",
                    accent: "sulphate",
                },
                {
                    value: "10%",
                    label: "Of project capital dedicated to environmental systems",
                    accent: "copper",
                },
            ],
        },
        productsIntro: {
            eyebrow: "Products",
            title: "The copper compound portfolio.",
            description:
                "Every lot ships with a certificate of analysis. Technical and safety data sheets are available on request.",
            actionLabel: "See all 8 product lines",
            actionHref: "/products",
        },
        industriesIntro: {
            eyebrow: "Industries served",
            title: "One chemistry, many supply chains.",
        },
        whyRovanta: {
            eyebrow: "Why choose ROVANTA",
            title: "Consistency you can formulate on.",
            description:
                "Formulators and industrial buyers depend on lot-to-lot uniformity. Our process design, in-process controls and QC lab exist for exactly that.",
            benefits: [
                "Purity and particle-size uniformity engineered to international standards",
                "Closed-loop water management for batch consistency and minimal waste",
                "COA with every dispatch; TDS and SDS documentation per product",
                "NH-8 corridor logistics: direct road, rail (Kim Jn. ~8.5 km) and port (Hazira ~45 km) access",
                "Customized manufacturing and technical support for customer-specific requirements",
            ],
            manufacturingCapabilities:
                "Glass-lined batch reactors · SS-316L basket centrifuges · electrical fluid-bed drying · indirect rotary calcination · dual-stage alkaline scrubbing · forced-circulation evaporator (ZLD).",
            qualityCommitment:
                "Quality-driven manufacturing, GMP-aligned production controls, and a 100% Zero Liquid Discharge water policy with clean electric process heating.",
        },
    },

    about: {
        hero: {
            eyebrow: "Company",
            title: "About ROVANTA PVT. LTD.",
            description:
                "A specialty chemical manufacturer committed to quality, consistency and environmentally responsible operations.",
        },
        paragraphs: [
            "ROVANTA PVT. LTD. is a newly incorporated specialty chemical venture at the beginning of its journey. Its greenfield plant at Laxmi Eco Industrial Park, Surat is currently being established. The company is dedicated to delivering high-quality, reliable and innovative chemical solutions to industries across domestic and international markets, specializing in Specialty Chemicals, Agrochemical Intermediates, Pharmaceutical Intermediates and Copper Compounds, serving a diverse range of industrial applications.",
            "Supported by a modern manufacturing facility, advanced processing equipment and a well-equipped quality control laboratory, ROVANTA ensures that every product meets stringent quality standards and customer specifications. The company follows a quality-driven manufacturing approach with continuous focus on process optimization, R&D, technical innovation and environmentally responsible operations.",
            "Driven by innovation, integrity and excellence, ROVANTA aims to become one of India's most trusted and globally recognized manufacturers of specialty chemicals, building long-term partnerships while contributing to the sustainable growth of the chemical industry.",
        ],
        businessAreas: [
            "Specialty Chemicals",
            "Agrochemical Intermediates",
            "Copper Compounds",
            "Pharmaceutical Intermediates",
            "Custom Chemical Manufacturing",
            "Process Development",
        ],
    },

    leadership: {
        hero: {
            eyebrow: "Company",
            title: "Leadership",
            description:
                "Industrial professionals with deep experience in resource management, trade networks and materials processing.",
        },
        people: [
            {
                name: "Mr. Chintan Rokad",
                role: "Founder & Director · Operations, Innovation & Finance",
                linkedin:
                    "https://www.linkedin.com/in/chintan-rokad-40864a2a5/",
                description:
                    "Founder of ROVANTA PVT. LTD., responsible for manufacturing operations, production planning, process innovation, financial oversight and operational excellence, combining technical expertise with strategic business acumen to ensure efficient plant operations and consistent product quality.",
                responsibilities: [
                    "Manufacturing and plant operations, capacity utilization and maintenance",
                    "Process improvement, new product development and cost optimization",
                    "GMP-aligned production quality and operational excellence",
                    "Finance and accounts oversight, budgeting and inventory control",
                ],
            },
            {
                name: "Mr. Biraj Rokad",
                role: "Director · Marketing & Business Development",
                linkedin: null,
                description:
                    "Co-leads the new venture’s strategic marketing, business development and market expansion. With a forward-thinking mindset and strong understanding of the specialty chemicals industry, he focuses on long-term client relationships, emerging market opportunities and customer-centric solutions.",
                responsibilities: [
                    "Strategic planning and market expansion across domestic and international markets",
                    "Customer relationship management and customized solution delivery",
                    "Quality, safety and regulatory compliance culture",
                    "Leadership of cross-functional, performance-driven teams",
                ],
            },
        ],
    },

    products: {
        hero: {
            eyebrow: "Products",
            title: "Product portfolio",
            description:
                "Eight product and manufacturing lines spanning copper compounds, agrochemical and pharmaceutical intermediates, specialty chemicals, and contract manufacturing.",
        },
        items: [
            {
                slug: "copper-oxychloride",
                name: "Copper Oxychloride",
                formula: "Cu₂(OH)₃Cl",
                cas: "1332-40-7",
                category: "Copper Compound",
                accent: "verdigris",
                shortDescription:
                    "Broad-spectrum agricultural fungicide active ingredient. Fine green technical-grade powder.",
                capacity: "100 MT/annum installed capacity",
                overview:
                    "Copper Oxychloride is manufactured at our Surat facility from high-purity secondary copper and finished as fine green crystals. The product is separated, dried, pulverized to a uniform technical grade and packed in moisture-proof bags. Production runs on a closed-loop, Zero Liquid Discharge system, and every lot is verified in our in-house QC laboratory before dispatch.",
                applications: [
                    "Broad-spectrum contact fungicide for cash crops, orchards and vegetable belts",
                    "Control of fungal infestations and bacterial blights",
                    "Base active ingredient for WP/SC fungicide formulations",
                    "Bordeaux-type protective sprays",
                ],
                packaging:
                    "25 kg moisture-proof HDPE bags with inner liner. Custom packaging available on request.",
                storage:
                    "Store in a cool, dry, ventilated area away from acids, food and feed. Keep bags sealed on pallets, off the floor. Refer to SDS for full handling guidance.",
                specifications: [
                    {
                        label: "Appearance",
                        value: "Fine green powder",
                    },
                    {
                        label: "Copper content (as Cu)",
                        value: PENDING_VERIFICATION,
                        pendingVerification: true,
                    },
                    {
                        label: "Moisture",
                        value: PENDING_VERIFICATION,
                        pendingVerification: true,
                    },
                    {
                        label: "Particle size",
                        value: PENDING_VERIFICATION,
                        pendingVerification: true,
                    },
                    {
                        label: "Grade",
                        value: "Technical",
                    },
                ] satisfies ProductSpecification[],
            },
            {
                slug: "copper-oxide",
                name: "Copper Oxide (CuO)",
                formula: "CuO",
                cas: "1317-38-0",
                category: "Copper Compound",
                accent: "oxide",
                shortDescription:
                    "Dense black cupric oxide for catalysts, ceramic colouring and marine anti-fouling coatings.",
                capacity: "80 MT/annum installed capacity",
                overview:
                    "Copper Oxide is produced as a dense, uniform cupric oxide on an indirectly heated calcination line. The product is milled to target particle-size profiles, checked for purity and particle size in our QC laboratory, and packed in secure industrial bags.",
                applications: [
                    "Catalyst in organic synthesis",
                    "Colouring agent for Gujarat’s ceramic tile clusters",
                    "Anti-fouling pigment in specialized marine coatings",
                    "Feedstock for other copper chemicals",
                ],
                packaging:
                    "25 kg HDPE bags; jumbo bags available for bulk industrial buyers. Custom packaging on request.",
                storage:
                    "Store sealed in a dry, ventilated warehouse away from reducing agents and acids. Refer to SDS.",
                specifications: [
                    {
                        label: "Appearance",
                        value: "Black to brownish-black powder",
                    },
                    {
                        label: "CuO content",
                        value: PENDING_VERIFICATION,
                        pendingVerification: true,
                    },
                    {
                        label: "Moisture",
                        value: PENDING_VERIFICATION,
                        pendingVerification: true,
                    },
                    {
                        label: "Particle size",
                        value: PENDING_VERIFICATION,
                        pendingVerification: true,
                    },
                    {
                        label: "Grade",
                        value: "Technical",
                    },
                ] satisfies ProductSpecification[],
            },
            {
                slug: "copper-sulphate",
                name: "Copper Sulphate",
                formula: "CuSO₄·5H₂O",
                cas: "7758-99-8",
                category: "Copper Compound",
                accent: "sulphate",
                shortDescription:
                    "Blue vitriol crystals for agriculture, animal feed supplement chains and industrial processing.",
                capacity: "Capacity data pending client verification",
                overview:
                    "Copper Sulphate (blue vitriol) forms part of the ROVANTA copper compounds portfolio. Detailed production capacity and specification data for this product line are being finalized and will be published following client verification.",
                applications: [
                    "Fungicide and bactericide component, including Bordeaux mixture",
                    "Micronutrient in fertilizer blends",
                    "Electroplating and industrial processing",
                    "Algaecide in water treatment",
                ],
                packaging:
                    "25/50 kg HDPE bags (indicative, pending client verification).",
                storage:
                    "Store in a cool, dry area away from metals and alkalis. Refer to SDS.",
                specifications: [
                    {
                        label: "Appearance",
                        value: "Blue crystals / crystalline powder",
                    },
                    {
                        label: "CuSO₄·5H₂O content",
                        value: PENDING_VERIFICATION,
                        pendingVerification: true,
                    },
                    {
                        label: "Cu content",
                        value: PENDING_VERIFICATION,
                        pendingVerification: true,
                    },
                    {
                        label: "Grade",
                        value: PENDING_VERIFICATION,
                        pendingVerification: true,
                    },
                ] satisfies ProductSpecification[],
            },
            {
                slug: "specialty-chemicals",
                name: "Specialty Chemicals",
                formula: "Custom",
                cas: null,
                category: "Specialty Chemicals",
                accent: "copper",
                shortDescription:
                    "Quality-controlled specialty formulations engineered to customer specification.",
                capacity: "Batch specialty processing",
                overview:
                    "Beyond our core copper compounds, ROVANTA develops and manufactures specialty chemical formulations to customer specification, supported by in-house process development, a well-equipped QC laboratory and flexible glass-lined batch reactors.",
                applications: [
                    "Customer-specific formulations",
                    "Performance chemicals for regional industry",
                    "Process intermediates",
                ],
                packaging: "As per customer specification.",
                storage: "Product-specific. Refer to the individual SDS.",
                specifications: [
                    {
                        label: "Portfolio",
                        value: "Customer-specific",
                    },
                    {
                        label: "Batch documentation",
                        value: "COA with every dispatch",
                    },
                    {
                        label: "Development support",
                        value: "In-house R&D and QC laboratory",
                    },
                ] satisfies ProductSpecification[],
            },
            {
                slug: "agrochemical-intermediates",
                name: "Agrochemical Intermediates",
                formula: "Various",
                cas: null,
                category: "Intermediates",
                accent: "verdigris",
                shortDescription:
                    "Copper-based and inorganic intermediates for fungicide and crop-protection formulators.",
                capacity: "Batch specialty processing",
                overview:
                    "ROVANTA supplies inorganic intermediates to agrochemical formulators, anchored by copper oxychloride technical, with consistent purity and particle-size uniformity engineered to match formulation requirements for WP, SC and granular crop-protection products.",
                applications: [
                    "Fungicide formulation (WP/SC/WG)",
                    "Integrated pest management programs",
                    "Crop-protection contract formulation supply",
                ],
                packaging: "25 kg HDPE bags or as agreed.",
                storage: "Product-specific. Refer to the individual SDS.",
                specifications: [
                    {
                        label: "Anchor product",
                        value: "Copper Oxychloride technical",
                    },
                    {
                        label: "Purity and particle size",
                        value: "Engineered to formulation requirements",
                    },
                    {
                        label: "Documentation",
                        value: "TDS / SDS / COA per lot",
                    },
                ] satisfies ProductSpecification[],
            },
            {
                slug: "pharmaceutical-intermediates",
                name: "Pharmaceutical Intermediates",
                formula: "Various",
                cas: null,
                category: "Intermediates",
                accent: "sulphate",
                shortDescription:
                    "Inorganic intermediates manufactured under quality-driven, documented batch processes.",
                capacity: "Batch specialty processing",
                overview:
                    "ROVANTA manufactures inorganic pharmaceutical intermediates under documented batch processes with full traceability, in-process controls and certificate of analysis per lot. Specific monographs, grades and regulatory documentation are shared under confidentiality with qualified buyers.",
                applications: [
                    "API manufacturing supply chains",
                    "Catalysis in organic synthesis",
                    "Laboratory and process chemistry",
                ],
                packaging: "As per customer and pharmacopeial requirement.",
                storage: "Product-specific. Refer to the individual SDS.",
                specifications: [
                    {
                        label: "Grades",
                        value: PENDING_VERIFICATION,
                        pendingVerification: true,
                    },
                    {
                        label: "Pharmacopeial compliance",
                        value: PENDING_VERIFICATION,
                        pendingVerification: true,
                    },
                    {
                        label: "Traceability",
                        value: "Full batch records and COA",
                    },
                ] satisfies ProductSpecification[],
            },
            {
                slug: "copper-compounds",
                name: "Copper Compounds",
                formula: "Cu-series",
                cas: null,
                category: "Copper Portfolio",
                accent: "copper",
                shortDescription:
                    "The full ROVANTA copper chemistry range: oxychloride, oxide, sulphate and derivatives.",
                capacity: "180 MT/annum aggregate (oxychloride + oxide)",
                overview:
                    "Copper chemistry is the core of ROVANTA. Our plant converts secondary copper scrap and wire into standardized, high-purity copper salts, a value-add model that also supports import substitution for technical-grade copper chemicals in India.",
                applications: [
                    "Agriculture: fungicides and micronutrients",
                    "Ceramics and pigments",
                    "Marine coatings",
                    "Catalysts and industrial chemistry",
                ],
                packaging: "Product-specific.",
                storage: "Product-specific. Refer to the individual SDS.",
                specifications: [
                    {
                        label: "Copper Oxychloride",
                        value: "100 MT/annum",
                    },
                    {
                        label: "Copper Oxide",
                        value: "80 MT/annum",
                    },
                    {
                        label: "Feedstock",
                        value: "Secondary copper scrap / wire",
                    },
                    {
                        label: "Water policy",
                        value: "100% Zero Liquid Discharge",
                    },
                ] satisfies ProductSpecification[],
            },
            {
                slug: "custom-chemical-manufacturing",
                name: "Custom Chemical Manufacturing",
                formula: "Your spec",
                cas: null,
                category: "Custom Manufacturing",
                accent: "ink",
                shortDescription:
                    "Contract and toll manufacturing of inorganic specialty chemicals on flexible batch assets.",
                capacity: "Glass-lined batch reactors, flexible batch sizes",
                overview:
                    "ROVANTA offers custom and contract manufacturing of inorganic specialty chemicals. Our flexible batch infrastructure, including glass-lined reactors, SS-316L basket centrifuges, fluid-bed drying and rotary calcination, supports process development, scale-up and repeat commercial supply under confidentiality agreements.",
                applications: [
                    "Toll / contract manufacturing",
                    "Process development and scale-up",
                    "Private-label technical products",
                ],
                packaging: "As per agreement.",
                storage: "Product-specific.",
                specifications: [
                    {
                        label: "Reactors",
                        value: "Glass-lined batch reactors with stirrers and jackets",
                    },
                    {
                        label: "Separation",
                        value: "SS-316L bottom-discharge basket centrifuges",
                    },
                    {
                        label: "Drying",
                        value: "Electrical fluid-bed dryer and indirect rotary calciner",
                    },
                    {
                        label: "Confidentiality",
                        value: "NDA-backed engagements",
                    },
                ] satisfies ProductSpecification[],
            },
        ] satisfies readonly ProductContent[],
    },

    industries: {
        hero: {
            eyebrow: "Markets",
            title: "Industries served",
            description:
                "From crop protection to marine coatings: standardized copper chemistry across supply chains in India and export markets.",
        },
        items: [
            {
                title: "Agriculture & Crop Protection",
                description:
                    "Copper oxychloride technical for broad-spectrum fungicides protecting cash crops, orchards and vegetable farming belts across India.",
            },
            {
                title: "Ceramics & Tiles",
                description:
                    "Technical-grade copper oxide as a colouring agent for Gujarat’s ceramic tile clusters and pigment formulators.",
            },
            {
                title: "Marine & Protective Coatings",
                description:
                    "Copper oxide anti-fouling pigment for specialized marine coating manufacturers.",
            },
            {
                title: "Pharmaceuticals",
                description:
                    "Inorganic intermediates and catalysts supplied under documented, traceable batch processes.",
            },
            {
                title: "Electronics & Pigments",
                description:
                    "High-purity copper compounds for electronic component and pigment formulation industries.",
            },
            {
                title: "Water Treatment & Feed",
                description:
                    "Copper sulphate applications in algaecide and micronutrient supply chains.",
            },
        ],
        exportReadiness: {
            eyebrow: "Export readiness",
            title: "Built for import substitution and export growth.",
            description:
                "India imports significant volumes of technical-grade specialty chemical salts. By converting local secondary copper into standardized formulations, ROVANTA supports import substitution, while processes engineered to international purity and particle-size standards position the company for export markets across South-East Asia, the Middle East and East African agricultural zones. Proximity to Hazira Port (~45 km) keeps export logistics competitive.",
        },
    },

    manufacturing: {
        hero: {
            eyebrow: "Operations",
            title: "Manufacturing",
            description:
                "A compact, high-efficiency greenfield plant engineered around controlled batch production, in-process quality control and a closed-loop, Zero Liquid Discharge water system.",
        },
        productionLines: [
            {
                number: "Line 01",
                formula: "Cu₂(OH)₃Cl",
                title: "Copper Oxychloride",
                capacity: "100 MT/annum",
                description:
                    "A dedicated glass-lined batch line finishing to fine green technical-grade powder. Every batch is separated, dried and milled to a controlled particle-size profile, then packed in moisture-proof bags. In-process checks run at each stage and every lot ships with a certificate of analysis.",
            },
            {
                number: "Line 02",
                formula: "CuO",
                title: "Copper Oxide",
                capacity: "80 MT/annum",
                description:
                    "An indirectly heated calcination line producing dense, uniform cupric oxide. The product is milled to target particle-size profiles, verified for purity and particle size in the in-house QC laboratory, and packed in secure industrial bags.",
            },
        ],
        infrastructure: [
            {
                title: "Reactor & separation train",
                description:
                    "Glass-lined batch reactors with stirrers and cooling jackets; AOD pumps; SS-316L bottom-discharge basket centrifuges; nutsche filtration.",
            },
            {
                title: "Clean electric heating",
                description:
                    "Drying and calcination run on electrical resistance and indirect induction heating, with no fuel-oil boilers, dramatically lowering stack emissions.",
            },
            {
                title: "Emission control",
                description:
                    "Dual-stage alkaline scrubbing tower with internal negative-draft ducting and GPCB-compliant exhaust stack.",
            },
            {
                title: "Corrosion engineering",
                description:
                    "PP/PVDF process piping, acid-resistant epoxy flooring, anti-corrosive lined storage tanks and 110% bunded acid containment.",
            },
            {
                title: "Power reliability",
                description:
                    "60 KVA grid connection (DGVCL) with a 45 KVA silent DG set on automatic transfer, keeping cooling pumps and scrubbers live through outages.",
            },
            {
                title: "Safety systems",
                description:
                    "Fire extinguisher network, hose reels and hydrant points, 5 KL firewater tank with pressure pump loop, eye-wash stations, drench showers and lime neutralization depots.",
            },
        ],
        logistics: [
            {
                label: "Road",
                value: "Adjacent to National Highway 8, giving direct Western Industrial Corridor transit without central Surat traffic",
            },
            {
                label: "Rail",
                value: "Kim Railway Station Junction ~8.5 km (Western Railway bulk freight)",
            },
            {
                label: "Sea",
                value: "Hazira Port Hub ~45 km, container and bulk handling for exports",
            },
            {
                label: "Air",
                value: "Surat International Airport (STV) ~36 km",
            },
        ],
    },

    quality: {
        hero: {
            eyebrow: "Assurance",
            title: "Quality",
            description:
                "Quality-driven manufacturing with in-process controls, GMP-aligned practices and a certificate of analysis with every lot.",
        },
        checkpoints: [
            "Well-equipped in-house quality control laboratory with analytical testing instruments",
            "In-process controls at every production stage, from charge through to packing",
            "Certificate of Analysis issued with every dispatch",
            "Technical Data Sheets and Safety Data Sheets maintained per product",
            "Good Manufacturing Practices-aligned production controls",
            "Particle-size and purity uniformity engineered to international standards",
        ],
        certificationNote:
            "Formal certifications such as ISO are pending client confirmation and must only be published once verified.",
        documents: [
            {
                title: "Technical Data Sheet",
                abbreviation: "TDS",
                status: "PDF · pending upload",
            },
            {
                title: "Safety Data Sheet",
                abbreviation: "SDS",
                status: "PDF · pending upload",
            },
            {
                title: "Certificate of Analysis",
                abbreviation: "COA",
                status: "Issued per lot",
            },
        ],
    },

    researchDevelopment: {
        hero: {
            eyebrow: "Innovation",
            title: "Research & Development",
            description:
                "Continuous process optimization, new product development and technical support for customer applications.",
        },
        items: [
            {
                title: "Process development",
                description:
                    "Continuous optimization of production parameters for yield, purity and energy efficiency, backed by in-house analytical capability.",
            },
            {
                title: "New product development",
                description:
                    "Extension of the copper compound range and customer-specific specialty formulations, developed from lab bench through to commercial batch scale.",
            },
            {
                title: "Application support",
                description:
                    "Technical collaboration with formulators on particle size, dispersion behaviour and formulation compatibility for WP/SC crop-protection products.",
            },
        ],
    },

    sustainability: {
        hero: {
            eyebrow: "Responsibility",
            title: "Sustainability",
            description:
                "A Zero Liquid Discharge plant with clean electric heating and 10% of project capital dedicated to environmental systems.",
        },
        metrics: [
            {
                value: "0",
                label: "Litres of industrial wastewater discharged · 100% ZLD",
                accent: "verdigris",
            },
            {
                value: "₹6 L",
                label: "Dedicated environmental CAPEX (10% of project investment)",
                accent: "copper",
            },
            {
                value: "4.5",
                label: "KLD total freshwater demand, minimized by closed-loop reuse",
                accent: "sulphate",
            },
            {
                value: "20%",
                label: "Of the site reserved as high-density greenbelt buffer",
                accent: "copper",
            },
        ],
        initiatives: [
            {
                title: "Closed-loop water",
                description:
                    "Process water is recovered and returned to production. Wash and rinse streams are neutralized, coagulated and separated in a forced-circulation evaporator; condensed water is reused in cooling systems and salts are isolated for authorized hazardous-waste disposal.",
            },
            {
                title: "Clean energy profile",
                description:
                    "Electric resistance and induction heating replace fuel-oil boilers, cutting direct stack emissions. A dual-stage alkaline scrubber treats process exhaust before a GPCB-compliant stack.",
            },
            {
                title: "Circular feedstock",
                description:
                    "The plant converts secondary copper scrap and wire into high-value chemical products, a recycling-based, import-substituting model.",
            },
            {
                title: "Responsible waste handling",
                description:
                    "Dedicated hazardous solid-waste depot with bunded concrete floors, roofing and a manifest tracking system prior to authorized collection.",
            },
            {
                title: "Noise & safety",
                description:
                    "Acoustic enclosure on the DG set, anti-vibration equipment mountings, and continuous monitoring instruments budgeted within the EMP.",
            },
            {
                title: "Community & employment",
                description:
                    "12–15 direct technical jobs and 25–30 indirect roles across logistics and services in the Mangrol taluka, with zero displacement or R&R impact.",
            },
        ],
    },

    downloads: {
        hero: {
            eyebrow: "Resources",
            title: "Documents & Downloads",
            description:
                "Product documentation, company profile and regulatory information. Secure downloads are gated through the customer portal.",
        },
        publicDocuments: [
            {
                title: "Company Profile Brochure",
                status: "PDF · pending upload",
            },
            {
                title: "Product Range Overview",
                status: "PDF · pending upload",
            },
            {
                title: "Plant Layout & Fire Safety Plan",
                status: "PDF · pending upload",
            },
        ],
        gatedDocuments: [
            {
                title: "TDS for all products",
                status: "Customer portal",
            },
            {
                title: "SDS for all products",
                status: "Customer portal",
            },
            {
                title: "COA archive, per lot",
                status: "Customer portal",
            },
        ],
    },

    blog: {
        hero: {
            eyebrow: "Insights",
            title: "Blog",
            description:
                "Technical notes and market perspectives from the ROVANTA team. Posts below are editorial drafts pending client approval.",
        },
        posts: [
            {
                category: "Crop protection",
                title: "Why copper oxychloride remains a backbone of integrated pest management",
                description:
                    "A look at contact fungicide chemistry, resistance management and where Cu₂(OH)₃Cl fits in modern IPM programs.",
                status: "Pending client review",
            },
            {
                category: "Sustainability",
                title: "Inside a Zero Liquid Discharge chemical plant",
                description:
                    "How closed-loop water reuse, neutralization and forced-circulation evaporation eliminate wastewater discharge at small scale.",
                status: "Pending client review",
            },
            {
                category: "Markets",
                title: "Copper compounds and India's import substitution opportunity",
                description:
                    "Converting secondary copper into technical-grade salts: the economics and the export corridors through Hazira.",
                status: "Pending client review",
            },
        ],
    },

    careers: {
        hero: {
            eyebrow: "Join us",
            title: "Careers",
            description:
                "Build India’s next specialty chemical story. 12–15 direct technical positions across operations, quality and safety.",
        },
        openings: [
            {
                title: "Process Operator, Chemical Plant",
                department: "Operations",
                location: "Hathoda, Surat",
            },
            {
                title: "Quality Control Analyst / Chemist",
                department: "QC Laboratory",
                location: "Hathoda, Surat",
            },
            {
                title: "Maintenance Technician",
                department: "Engineering",
                location: "Hathoda, Surat",
            },
            {
                title: "Environmental, Health & Safety Officer",
                department: "EHS",
                location: "Hathoda, Surat",
            },
        ],
        note: "Openings shown are indicative of the planned staffing structure; live vacancies and application workflow activate with the admin careers module.",
    },

    contact: {
        hero: {
            eyebrow: "Reach us",
            title: "Contact",
            description:
                "Plot No. C-35, Laxmi Eco Industrial Park, Opp. Tulsi Hotel, NH-8, Hathoda, Ta. Mangrol, Dist. Surat, Gujarat 394405.",
        },
        transport: [
            {
                label: "Road",
                value: "Adjacent to NH-8, Hathoda",
            },
            {
                label: "Nearest rail",
                value: "Kim Railway Station Junction ~8.5 km",
            },
            {
                label: "Nearest port / airport",
                value: "Hazira Port ~45 km · Surat International Airport ~36 km",
            },
        ],
        whatsappMessage:
            "Hello Rovanta, I would like to discuss a product or manufacturing requirement.",
    },

    quote: {
        hero: {
            eyebrow: "Commercial",
            title: "Request a Quote",
            description:
                "Tell us the product, grade, quantity and destination. Our team responds with pricing, documentation and lead times.",
        },
        requestTypes: ["Quotation", "Sample", "Quotation + Sample"],
        workflow: [
            "Enquiry lands in the quote-management dashboard and is assigned to sales",
            "Technical review against product specifications; TDS and SDS shared",
            "Quotation with pricing, packing, lead time and logistics terms",
            "Sample dispatch where requested; COA accompanies every commercial lot",
        ],
    },

    customerPortal: {
        hero: {
            eyebrow: "Secure area",
            title: "Customer Portal",
            description:
                "Registered customers download TDS, SDS and COA documents, track quotations and view order history.",
        },
        disclaimer:
            "The current route is a front-end demonstration. Production requires authentication, authorization, a database, protected APIs, and signed document downloads.",
        tabs: [
            {
                title: "My documents",
                description: "Secure TDS, SDS and lot-specific COA downloads.",
            },
            {
                title: "My quotations",
                description:
                    "Quotation references, products, quantities and status.",
            },
            {
                title: "Order history",
                description: "Commercial order and dispatch history.",
            },
        ],
    },

    adminDashboard: {
        hero: {
            eyebrow: "Internal",
            title: "Admin Dashboard",
            description:
                "Role-based back office for products, documents, enquiries, careers, blog, users, analytics, certifications and site content.",
        },
        disclaimer:
            "The current route is an information-architecture demonstration only. Production requires secure authentication, role-based authorization, protected APIs, and persistent data.",
        modules: [
            "Overview",
            "Enquiries & Quotes",
            "Products",
            "Documents",
            "Blog CMS",
            "Careers",
            "Users & Roles",
            "Certifications",
            "Content",
            "Analytics",
        ],
        overviewMetrics: [
            { value: "14", label: "Open enquiries" },
            { value: "8", label: "Products live" },
            { value: "3", label: "Blog drafts" },
            { value: "2", label: "Career postings" },
        ],
    },

    footer: {
        summary:
            "Quality-driven manufacturer of specialty inorganic copper compounds, agrochemical and pharmaceutical intermediates. Zero Liquid Discharge greenfield facility in Surat, Gujarat.",
        productLinks: [
            {
                label: "Copper Oxychloride",
                href: "/products/copper-oxychloride",
            },
            {
                label: "Copper Oxide",
                href: "/products/copper-oxide",
            },
            {
                label: "Copper Sulphate",
                href: "/products/copper-sulphate",
            },
            {
                label: "Agrochemical Intermediates",
                href: "/products/agrochemical-intermediates",
            },
            {
                label: "Custom Manufacturing",
                href: "/products/custom-chemical-manufacturing",
            },
        ],
        companyLinks: [
            { label: "About Us", href: "/about" },
            { label: "Leadership", href: "/leadership" },
            {
                label: "Research & Development",
                href: "/research-development",
            },
            { label: "Careers", href: "/careers" },
            { label: "Blog", href: "/blog" },
            {
                label: "Documents & Downloads",
                href: "/downloads",
            },
            {
                label: "Customer Portal",
                href: "/customer-portal",
            },
            { label: "Admin Dashboard", href: "/admin" },
        ],
        legalLinks: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Use", href: "/terms" },
        ],
    },
} as const;

/*
 * Routes for features that are not built yet. Each either needs authentication,
 * a database and protected APIs before it can do anything real, or has no page
 * behind it at all. The page files stay in the repo so the work is not lost:
 * `isRouteHidden` makes each route 404, and the helpers below drop it from the
 * header, footer, /more index and sitemap.
 *
 * To ship one of these, delete its entry here (and, for /privacy and /terms,
 * build the page first).
 */
export const hiddenRoutes = [
    // Needs auth, a database, protected APIs and signed document downloads.
    "/customer-portal",
    // Needs auth, role-based authorization and persistent data.
    "/admin",
    // Every document is still "pending upload" and the rest sits behind the portal.
    "/downloads",
    // Posts are unwritten drafts; real posts need the blog CMS.
    "/blog",
    // Linked in the footer since launch, but no page was ever built for either.
    "/privacy",
    "/terms",
] as const;

export function isRouteHidden(href: string): boolean {
    return (hiddenRoutes as readonly string[]).includes(href);
}

/** Drops links pointing at not-yet-built routes. */
export function visibleLinks<T extends { href: string }>(
    links: readonly T[],
): T[] {
    return links.filter((link) => !isRouteHidden(link.href));
}

const allRoutes = [
    "/",
    "/about",
    "/leadership",
    "/products",
    ...siteContent.products.items.map((product) => `/products/${product.slug}`),
    "/industries",
    "/manufacturing",
    "/quality",
    "/research-development",
    "/sustainability",
    "/custom-manufacturing",
    "/downloads",
    "/blog",
    "/careers",
    "/contact",
    "/quote",
    "/more",
    "/customer-portal",
    "/admin",
    "/privacy",
    "/terms",
] as const;

/** Routes advertised in sitemap.xml. Hidden routes are excluded. */
export const allPublicRoutes: string[] = allRoutes.filter(
    (route) => !isRouteHidden(route),
);

export interface StaticPageSection {
    title: string;
    description?: string;
    items?: readonly string[];
}

export interface StaticPageContent {
    eyebrow: string;
    title: string;
    description: string;
    sections: readonly StaticPageSection[];
    cta?: {
        title: string;
        description: string;
        label: string;
        href: string;
    };
}

export const staticPageContent = {
    leadership: {
        eyebrow: "Leadership",
        title: "Focused leadership for a specialized manufacturing business.",
        description:
            "Rovanta is guided by a practical commitment to process discipline, product quality, responsible operations, and long-term customer relationships.",
        sections: [
            {
                title: "Technical direction",
                description:
                    "Manufacturing and product decisions are shaped around controlled chemistry, repeatable processes, and customer-specific requirements.",
            },
            {
                title: "Commercial responsibility",
                description:
                    "The company prioritizes clear communication, realistic commitments, and dependable execution throughout the inquiry and supply process.",
            },
            {
                title: "Responsible growth",
                description:
                    "Rovanta aims to grow its product portfolio and manufacturing capability without compromising quality or operational responsibility.",
            },
        ],
        cta: {
            title: "Connect with Rovanta",
            description:
                "Contact the team for company introductions, commercial discussions, or technical requirements.",
            label: "Contact Us",
            href: "/contact",
        },
    },

    careers: {
        eyebrow: "Careers",
        title: "Build specialized chemical manufacturing capability with Rovanta.",
        description:
            "Rovanta welcomes professionals interested in chemical operations, quality control, process development, maintenance, safety, and commercial growth.",
        sections: [
            {
                title: "Production and operations",
                description:
                    "Roles may include process operation, batch monitoring, material handling, equipment operation, and production documentation.",
            },
            {
                title: "Quality control",
                description:
                    "Quality roles may support incoming material testing, in-process analysis, finished-product inspection, and document preparation.",
            },
            {
                title: "Technical and commercial",
                description:
                    "Future requirements may include process development, application support, procurement, sales, and customer coordination.",
            },
        ],
        cta: {
            title: "Submit your profile",
            description:
                "Send your résumé and preferred area of work to Rovanta for future consideration.",
            label: "Email Your Résumé",
            href: "mailto:info@rovantachem.com?subject=Career%20application%20for%20Rovanta",
        },
    },

    blog: {
        eyebrow: "Insights",
        title: "Technical and company updates from Rovanta.",
        description:
            "This section will publish product information, process insights, company updates, application notes, and responsible manufacturing developments.",
        sections: [
            {
                title: "Product knowledge",
                description:
                    "Practical information about copper compounds, product handling, applications, and technical documentation.",
            },
            {
                title: "Manufacturing updates",
                description:
                    "Updates covering manufacturing capability, quality systems, process development, and new product activity.",
            },
            {
                title: "Industry insights",
                description:
                    "Articles relevant to agriculture, industrial chemistry, ceramics, pigments, coatings, and pharmaceutical supply chains.",
            },
        ],
    },

    researchDevelopment: {
        eyebrow: "Research & Development",
        title: "Process optimization and customer-focused product development.",
        description:
            "Rovanta’s technical approach focuses on improving process consistency, product performance, manufacturing efficiency, and customer application support.",
        sections: [
            {
                title: "Process development",
                description:
                    "Evaluation and optimization of production, drying, milling and material-recovery parameters.",
            },
            {
                title: "New product development",
                description:
                    "Development of copper compounds, inorganic intermediates, and customer-specific specialty chemical requirements.",
            },
            {
                title: "Application support",
                description:
                    "Technical collaboration around product characteristics, particle size, formulation compatibility, handling, and performance expectations.",
            },
        ],
        cta: {
            title: "Discuss a development requirement",
            description:
                "Share the target product, required characteristics, annual demand, and intended application.",
            label: "Start a Discussion",
            href: "/quote",
        },
    },

    sustainability: {
        eyebrow: "Sustainability",
        title: "Responsible operations designed around material and process efficiency.",
        description:
            "Rovanta’s sustainability approach focuses on responsible water management, material recovery, efficient processing, safe operations, and continuous improvement.",
        sections: [
            {
                title: "Water management",
                description:
                    "Process water and liquid outputs are managed through controlled treatment and recovery practices appropriate to the manufacturing operation.",
            },
            {
                title: "Material efficiency",
                description:
                    "Process development considers recovery, reuse, yield improvement, and waste reduction wherever technically practical.",
            },
            {
                title: "Energy awareness",
                description:
                    "Manufacturing decisions consider heating efficiency, equipment performance, batch planning, and avoidable energy loss.",
            },
            {
                title: "Safe operations",
                description:
                    "Operational procedures emphasize responsible chemical handling, employee safety, storage controls, and appropriate disposal practices.",
            },
        ],
    },

    customManufacturing: {
        eyebrow: "Custom Manufacturing",
        title: "Customer-specific chemical manufacturing from requirement to repeatable production.",
        description:
            "Rovanta evaluates specialty chemical and intermediate opportunities based on chemistry, process fit, required specifications, commercial volume, safety, and documentation needs.",
        sections: [
            {
                title: "1. Requirement review",
                description:
                    "The process begins with the target chemistry, specification, expected volume, application, packaging, and regulatory requirements.",
            },
            {
                title: "2. Technical evaluation",
                description:
                    "The team assesses process feasibility, raw materials, equipment compatibility, analytical methods, safety, and scale requirements.",
            },
            {
                title: "3. Trial and validation",
                description:
                    "Where appropriate, development or trial batches are evaluated against agreed quality and performance criteria.",
            },
            {
                title: "4. Commercial production",
                description:
                    "Approved requirements move into documented batch production, testing, packaging, and dispatch planning.",
            },
        ],
        cta: {
            title: "Have a manufacturing requirement?",
            description:
                "Share the product, chemistry, quantity, specification, application, and expected delivery schedule.",
            label: "Request Evaluation",
            href: "/quote",
        },
    },

    downloads: {
        eyebrow: "Documents",
        title: "Technical and quality documents available upon request.",
        description:
            "Product documents are provided to qualified customers according to the product, grade, intended use, and commercial inquiry.",
        sections: [
            {
                title: "Technical Data Sheets",
                description:
                    "Product descriptions, typical characteristics, handling information, applications, packaging, and storage guidance.",
            },
            {
                title: "Safety Data Sheets",
                description:
                    "Safety, handling, storage, exposure, transportation, and emergency information for the applicable product.",
            },
            {
                title: "Certificates of Analysis",
                description:
                    "Batch-specific quality results supplied where applicable with commercial dispatches.",
            },
        ],
        cta: {
            title: "Request a product document",
            description:
                "Include the product, intended application, company name, and document type required.",
            label: "Request Documents",
            href: "/quote",
        },
    },

    privacy: {
        eyebrow: "Legal",
        title: "Privacy Policy",
        description:
            "This page explains how Rovanta may collect, use, and protect information submitted through its website.",
        sections: [
            {
                title: "Information submitted by visitors",
                description:
                    "Rovanta may receive information such as names, business email addresses, phone numbers, company details, product requirements, quantities, and messages submitted through inquiry channels.",
            },
            {
                title: "How information is used",
                description:
                    "Submitted information may be used to respond to inquiries, prepare quotations, provide documents, evaluate requirements, maintain business records, and improve customer communication.",
            },
            {
                title: "Sharing and retention",
                description:
                    "Information should only be shared with service providers or business partners when necessary to support the inquiry or comply with applicable obligations. Records may be retained for reasonable business and legal purposes.",
            },
            {
                title: "Contact",
                description:
                    "Privacy-related questions may be sent to info@rovantachem.com.",
            },
        ],
    },

    terms: {
        eyebrow: "Legal",
        title: "Terms of Use",
        description:
            "These terms govern general use of the Rovanta website and its published information.",
        sections: [
            {
                title: "Website information",
                description:
                    "Website content is provided for general business information. Product availability, specifications, packaging, pricing, and suitability must be confirmed directly with Rovanta.",
            },
            {
                title: "Technical information",
                description:
                    "Website descriptions are not substitutes for approved technical documents, safety data, certificates, contracts, or application-specific professional review.",
            },
            {
                title: "Acceptable use",
                description:
                    "Visitors may not misuse the website, interfere with its operation, attempt unauthorized access, or reproduce protected content without permission.",
            },
            {
                title: "Changes",
                description:
                    "Rovanta may revise website content, these terms, products, and services when required.",
            },
        ],
    },
} satisfies Record<string, StaticPageContent>;
