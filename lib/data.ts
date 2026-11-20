export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  overview: string;
  responsibilities: string[];
  achievements: string[];
  description: string;
  kpis: { label: string; val: string }[];
  skills: string[];
}

export interface EndorsementEntry {
  id: string;
  tag: string;
  domain: string;
  author: string;
  role: string;
  organization: string;
  relationship: string;
  highlight: string;
  quote: string;
}

export interface MilestoneEntry {
  id: string;
  category: 'QUALITY' | 'PRODUCTION' | 'SUPPLY CHAIN';
  date: string;
  title: string;
  description: string;
  impact: string;
  metrics?: string;
  points?: { label: string; description: string }[];
  sopRef?: string;
}

export interface DecisionLogEntry {
  id: string;
  date: string;
  title: string;
  status: 'COMPLETED' | 'IN PROGRESS';
  keyDecision: string;
  actionPlan: string[];
  reflection: string;
  relatedProject: string;
}

export interface QcCaseEntry {
  id: string;
  date: string;
  status: string;
  issue: string;
  rootCause: string;
  action: string;
  result: string;
  sopChange: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  items: {
    name: string;
    description: string;
    badge?: string;
    metrics?: string;
  }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Muhammad Hafizh Maulidan",
    shortName: "Hafizh Maulidan",
    title: "Dairy Manufacturing · Production & Quality",
    company: "Rumah Susu Indonesia · Mitrayasa Dairy Natural",
    unit: "Tasikmalaya Production Hub",
    location: "Tasikmalaya / Bogor, West Java, Indonesia",
    email: "mhafizh.maulidan@gmail.com",
    linkedin: "https://www.linkedin.com/in/hafizhmaulidan/",
    linkedinHandle: "linkedin.com/in/hafizhmaulidan",
    statusBadge: "Operational · Two Units, One Quality Standard",
    bio: "Operations leader with a dual background in dairy manufacturing process engineering and technology systems. I currently lead a dairy production unit end-to-end: daily production, quality management, inventory, and distribution. I built the Tasikmalaya plant from the ground up — assembling the core production team, standardizing 12 SOPs from milk intake to cheese vat pasteurization, holding a 0.35% reject rate, and running multi-city cold chain distribution across West Java. My focus sits on the systems behind the output: clear procedures, organized workflows, and simple digital tools — inventory dashboards, production monitoring, QC workflows — that make daily operations easier to run and easier to scale.",
    quote: "Driven by data, grounded in reality. Quality aligned, waste minimized, teams led with purpose.",
    supervisorTestimonial: {
      quote: "When an over-salting issue affected cheese texture while I was off-site, Hafizh resolved it independently with impressive technical intuition. He executed a double-rinse using potable water to balance salinity and restore curd elasticity without compromising final quality.",
      author: "Trie Haryanto",
      role: "Cheese Consultant (8+ Years Exp)",
      relationship: "Technical Advisor & R&D Partner"
    }
  },

  endorsements: [
    {
      id: "cheese-consultant",
      tag: "Cheese Consultant",
      domain: "R&D & Cheese Chemistry",
      author: "Trie Haryanto",
      role: "Cheese Consultant with 8 Years Exp",
      organization: "Artisanal Dairy Specialist",
      relationship: "Technical Advisor & R&D Partner",
      highlight: "Double-rinse technical intuition restored curd elasticity without compromising quality",
      quote: "When an over-salting issue affected cheese texture while I was off-site, Hafizh resolved it independently with impressive technical intuition. He executed a double-rinse using potable water to balance salinity and restore curd elasticity without compromising final quality. His hands-on troubleshooting and solid grasp of cheese chemistry prove he is a highly capable, adaptable operations leader."
    },
    {
      id: "supply-partner",
      tag: "Supply Partner",
      domain: "Farm-to-Factory Supply Chain",
      author: "Fariz Amroeni",
      role: "Kepala Koperasi Mitrayasa",
      organization: "Koperasi Mitrayasa",
      relationship: "Dairy Supply Chain Partner",
      highlight: "Digitized raw milk supply data to create clear, real-time visibility",
      quote: "Hafizh stands out for his keen eye on raw milk quality and his relentless drive to master the entire dairy chain from farm to factory. He transformed our supply operations by digitizing raw data to create clear, real-time visibility across the board. Far beyond executing routine tasks, his deep curiosity and end-to-end perspective make him an exceptional partner."
    }
  ],

  keyMetrics: [
    {
      value: "≈1.05M",
      unit: "L",
      label: "Milk Processed",
      detail: "RSI 52,378 L logged + Mitrayasa ≈1.0M L, ramped to 50K L/week over the last 3 months",
      highlight: true
    },
    {
      value: "1.67K",
      unit: "pcs",
      label: "Mozzarella Total",
      detail: "First market-ready cheese line at RSI Tasikmalaya",
      highlight: false
    },
    {
      value: "0.35%",
      unit: "",
      label: "Reject Rate",
      detail: "Strict quality pass (Target < 1.00%)",
      highlight: true
    },
    {
      value: "12+",
      unit: "SOPs",
      label: "Standardized Procedures",
      detail: "Intake, cheese vat, QC, and cold chain distribution",
      highlight: false
    }
  ],

  liveFloorStatus: {
    facility: "Unit Pengolahan Susu · RSI Tasikmalaya",
    location: "Tasikmalaya, Jawa Barat (UTC+7)",
    currentShift: "Shift Siang · Pasteurization & Packaging",
    nextShiftCountdown: "Ready for Dispatch",
    lineStatus: "Optimal Running · Temperature 2–8°C Controlled",
    lastBatchId: "MZ-160626-01",
    latestVolumeIntake: "1,308 L · latest intake 02 Nov 2026",
    cleanInPlaceStatus: "Verified & Neutralized"
  },

  managerialPrinciples: [
    {
      index: "01",
      title: "Alignment",
      description: "Clear SOPs and unequivocal shift ownership. Every operator knows the exact temperature, timing, and sanitation threshold—eliminating guesswork."
    },
    {
      index: "02",
      title: "Accountability",
      description: "Discipline in execution on the floor. Lactoscan parameters, pH, hygiene logs, and cold-chain temperature readings are permanently logged and personally owned."
    },
    {
      index: "03",
      title: "Improvement",
      description: "Treating production trials as structured learning loops. Yield variance, stretch characteristics, and curd formation data directly inform the next SOP revision."
    },
    {
      index: "04",
      title: "Reliability",
      description: "Zero-compromise verification prior to dispatch. Pre-trip ratchet tension checks and continuous temperature logging ensure every delivery arrives intact."
    }
  ],

  experience: [
    {
      role: "Head of Unit",
      company: "Rumah Susu Indonesia",
      location: "Tasikmalaya, West Java (On-Site)",
      period: "Mar 2026 – Present",
      type: "Full-Time · Operations Leadership",
      kpis: [
        { label: "SOPs Enforced", val: "12" },
        { label: "Reject Rate", val: "0.35%" },
        { label: "Mozzarella Scale", val: "1,000 pcs" }
      ],
      overview: "Directed end-to-end dairy facility operations, overseeing production targets, raw milk supply chain, team performance, and facility assets while coordinating directly with central management.",
      description: "Directed end-to-end dairy facility operations, overseeing production targets, raw milk supply chain, team performance, and facility assets while coordinating directly with central management.",
      responsibilities: [
        "Managed production planning, raw milk supply coordination with local dairy cooperatives, and on-time distribution logistics.",
        "Enforced 12 core SOPs for production, food safety, hygiene, and pre-distribution quality control (Lactoscan, Anti-AB, Peroxide).",
        "Oversaw team performance, cold storage management, asset preservation, and unit cleanliness."
      ],
      achievements: [
        "Built a custom web dashboard (React + Google Sheets API) for real-time reporting on production, stock, and distribution to central management.",
        "Scaled mozzarella production to 1,000 pieces per commercial batch and led cheddar R&D to achieve a 113.8% yield.",
        "Maintained a reject rate of just 0.35% and kept waste under 3% while optimizing cold storage loading workflows."
      ],
      skills: ["Operations Management", "React + Google Sheets API", "SOP Architecture", "Production Planning", "Lactoscan & Anti-AB QC", "Cold Chain Logistics"]
    },
    {
      role: "Production Assistant",
      company: "Mitrayasa Dairy Natural",
      location: "Tasikmalaya, West Java (On-Site)",
      period: "Mar 2026 – Present",
      type: "Concurrent · Production Floor & Receiving QC",
      kpis: [
        { label: "Weekly Intake", val: "10–50K L" },
        { label: "Reception Tests", val: "6 per load" },
        { label: "Tenure", val: "8 mo" }
      ],
      overview: "Concurrent role at the supplying dairy cooperative, running production floor operations and container-level raw milk reception testing alongside the processing unit at Rumah Susu Indonesia.",
      description: "Concurrent role at the supplying dairy cooperative, running production floor operations and container-level raw milk reception testing alongside the processing unit at Rumah Susu Indonesia.",
      responsibilities: [
        "Ran daily production floor operations handling 10,000–50,000 litres of raw milk per week.",
        "Performed reception testing on every incoming milk container: pH, peroxide and carbonate adulteration screening, antibiotic residue, and mastitis screening.",
        "Ran bacterial testing on each milk container before it entered the production line."
      ],
      achievements: [
        "Sustained container-by-container testing across 8 months of operation at weekly intake volumes of 10,000–50,000 litres.",
        "Moved quality gatekeeping to the point of entry, so deviations were flagged before pasteurisation rather than after a batch was already committed.",
        "Coordinated daily scheduling with the cooperative head so weekly volume reached the line without holding raw milk beyond its stability window."
      ],
      skills: ["Raw Milk Reception", "Adulteration Screening", "Antibiotic Residue Testing", "Mastitis Screening", "Bacterial Testing", "Floor Operations"]
    },
    {
      role: "Web Project Lead",
      company: "PT Matra Kreasi Mandiri",
      location: "Bogor, West Java (Hybrid)",
      period: "Sep 2025 – Dec 2025",
      type: "Freelance · Technical Lead",
      kpis: [
        { label: "Platform Uptime", val: "99.8%" },
        { label: "API Integrations", val: "WhatsApp" },
        { label: "Design", val: "Mobile-First" }
      ],
      overview: "Led the full lifecycle of the NanoRobotic web platform from concept to deployment, serving as project lead and sole frontend developer.",
      description: "Led the full lifecycle of the NanoRobotic web platform from concept to deployment, serving as project lead and sole frontend developer.",
      responsibilities: [
        "Managed the full project lifecycle, from initial UI/UX concept and technical requirements to final deployment.",
        "Engineered a mobile-first, responsive interface using Bootstrap, HTML5, and CSS3.",
        "Implemented semantic HTML, meta-tag strategies, and asset optimization for improved SEO and page load speed."
      ],
      achievements: [
        "Developed a custom WhatsApp API integration connecting contact forms directly to instant operational messaging.",
        "Delivered 100% cross-browser compatibility and visual stability through systematic testing and debugging.",
        "Delivered the project on schedule, successfully translating complex client requirements into a functional digital solution."
      ],
      skills: ["Project Management", "Full-Lifecycle Web Dev", "WhatsApp API", "JavaScript", "Responsive UI/UX", "SEO Optimization"]
    },
    {
      role: "Internet of Things Engineer",
      company: "PT Matra Kreasi Mandiri",
      location: "Bogor, West Java (On-Site)",
      period: "Aug 2024 – Nov 2024",
      type: "Internship · Engineering",
      kpis: [
        { label: "Hardware Calibrated", val: "24+" },
        { label: "Latency", val: "<1s" },
        { label: "Systems", val: "Device-to-Cloud" }
      ],
      overview: "Developed and maintained IoT-driven automation systems, integrating sensors, microcontrollers, and cloud-based monitoring tools.",
      description: "Developed and maintained IoT-driven automation systems, integrating sensors, microcontrollers, and cloud-based monitoring tools.",
      responsibilities: [
        "Designed monitoring solutions for real-time data collection, system diagnostics, and device-to-cloud communication.",
        "Conducted hardware testing, calibration, and wiring validation to ensure system reliability.",
        "Implemented automation features such as relay control, alert notifications, and technical documentation workflows."
      ],
      achievements: [
        "Improved system uptime and diagnostic responsiveness across active IoT monitoring setups.",
        "Standardized testing protocols and technical documentation to streamline onboarding and hardware troubleshooting."
      ],
      skills: ["IoT Automation", "ESP32 & Sensors", "Relay Control", "Hardware Calibration", "Device-to-Cloud", "Firmware Updates"]
    },
    {
      role: "Exchange Student",
      company: "Politeknik Mersing",
      location: "Johor, Malaysia (On-Site)",
      period: "May 2022 – Jun 2022",
      type: "Contract · ASEAN SEAMEO TVET",
      kpis: [
        { label: "Cohort Selected", val: "Top 800+" },
        { label: "Participating Nations", val: "6 ASEAN" },
        { label: "Core Scope", val: "Cybersecurity" }
      ],
      overview: "Selected for the regional SEAMEO TVET Student Exchange program, gaining cross-border technical exposure to networking and cybersecurity.",
      description: "Selected for the regional SEAMEO TVET Student Exchange program, gaining cross-border technical exposure to networking and cybersecurity.",
      responsibilities: [
        "Participated in hands-on technical labs with engineering peers from six ASEAN countries.",
        "Executed packet inspection, protocol analysis, and traffic monitoring using Wireshark.",
        "Configured local development and test server environments utilizing XAMPP."
      ],
      achievements: [
        "Selected among 800+ university applicants representing Indonesia in regional technical exchange.",
        "Completed cross-cultural technical coursework and practical cybersecurity fundamentals."
      ],
      skills: ["Wireshark", "Network Analysis", "XAMPP", "Cybersecurity Basics", "International Collaboration"]
    }
  ],

  certifications: [
    {
      title: "Responsible Use of Antibiotics in Livestock",
      issuer: "FAO (Food and Agriculture Organization)",
      validity: "Oct 2026",
      credentialId: "8919176492MM"
    },
    {
      title: "Science and Risk Analysis in Codex",
      issuer: "FAO (Food and Agriculture Organization)",
      validity: "Nov 2026"
    },
    {
      title: "Hardware Installation Supervisor",
      issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
      validity: "Sep 2025 – 2028",
      credentialId: "213/LSP.928.1/IX/2025"
    },
    {
      title: "Integrated Speaking English",
      issuer: "Language Center",
      validity: "Nov 2025",
      credentialId: "NO. 2864 / IS / XI / 2025"
    }
  ],

  education: [
    {
      institution: "Institut Pertanian Bogor (IPB University)",
      school: "IPB University",
      degree: "Bachelor of Technology",
      field: "Computer Engineering Technology",
      period: "Aug 2021 – Aug 2025",
      location: "Bogor, West Java, Indonesia",
      focus: [
        "Database Systems",
        "Data Mining",
        "Machine Learning",
        "IoT Project",
        "Cloud Technology",
        "Software Engineering"
      ]
    }
  ],

  projects: [
    {
      id: "admigre",
      name: "Admigre — Automated Microgreen Monitoring System",
      context: "IoT · Automation · Embedded Systems",
      description:
        "IoT-based automation tool for microgreen cultivation, pairing ESP32 sensing with relay control and cloud monitoring, plus a front-end dashboard for daily monitoring.",
      stack: ["ESP32", "Relay Control", "Cloud Monitoring", "Front-End"]
    },
    {
      id: "flood-detection",
      name: "Flood Detection & Monitoring System",
      context: "IoT · Early Warning",
      description:
        "Water-level detection and monitoring prototype built on ESP32 and Arduino Cloud, with threshold-based alert notifications for early warning.",
      stack: ["ESP32", "Arduino Cloud", "Alert Notifications"]
    },
    {
      id: "banana-ripeness",
      name: "Advanced Banana Ripeness Detection System",
      context: "IoT · Sensor Analytics",
      description:
        "Sensor-based banana ripeness detection prototype using ESP32 and Arduino IDE, logging readings for repeatable ripeness classification.",
      stack: ["ESP32", "Arduino IDE", "Sensor Analytics"]
    },
    {
      id: "fuzzy-rice",
      name: "Fuzzy Logic Rice Production Forecasting",
      context: "Data Science · Modeling",
      description:
        "Applied fuzzy logic modeling in Python to predict rice production quantity in Bogor Regency from agricultural indicators.",
      stack: ["Python", "Fuzzy Logic", "Data Analysis"]
    }
  ],

  leadershipJournal: [
    {
      id: "J-01",
      date: "June 23, 2026",
      title: "First Mozzarella Commercial Shipment to Bogor",
      status: "COMPLETED",
      keyDecision: "Shipped 211 pcs avg (422 total @200g, 42.2kg total) to Zarafa Bogor via insulated box truck with frozen styrofoam thermal packing.",
      actionPlan: [
        "Tempered cheese out of freezer H-1 to stabilize core temperature.",
        "Vacuum sealed and loaded in corrugated styrofoam blocks.",
        "Personally assisted unloading and temperature verification upon arrival in Bogor."
      ],
      reflection: "First RSI mozzarella reached end consumers in top physical condition. Noted slight surface variance on initial stretch; calibrated stretching water temperature for upcoming batches.",
      relatedProject: "Commercial Mozzarella Rollout"
    },
    {
      id: "J-02",
      date: "June 11, 2026",
      title: "Production Method Decision: Direct Cheese Vat vs PHE",
      status: "COMPLETED",
      keyDecision: "Adopted direct cheese vat pasteurization for artisanal mozzarella instead of Plate Heat Exchanger (PHE), saving 80L milk waste per CIP cycle and preventing sanitizing chemical carryover.",
      actionPlan: [
        "Briefed operators on vat temperature curve logging (63°C for 30 minutes).",
        "Logged curd cutting and whey drainage intervals precisely.",
        "Validated fuel and milk conservation on trial batches MZ-160626."
      ],
      reflection: "Decisive operational win. Direct vat method eliminated product holdup in pipes and delivered higher curd yield per batch with lower operating costs.",
      relatedProject: "Thermal Efficiency & Process SOP"
    },
    {
      id: "J-03",
      date: "June 9, 2026",
      title: "Taste Deviation Investigation & Transition to Mineral Water",
      status: "COMPLETED",
      keyDecision: "Identified trace sanitizer residue from boiler steam jacket causing bitter taste notes in curd; mandated direct certified mineral water for all curd washing and stretching operations.",
      actionPlan: [
        "Halted use of steam condensate boiler water for direct food contact.",
        "Procured certified sealed mineral water gallons for cheese floor.",
        "Conducted sensory alignment with operators Kodir and Awal."
      ],
      reflection: "Clear water is not always pure. Invisible sanitizer in boiler loops can compromise an entire cheese batch. Food safety requires absolute isolation of processing water.",
      relatedProject: "Food Safety & Sensory QC"
    },
    {
      id: "J-04",
      date: "May 12, 2026",
      title: "Mozzarella Production Kickoff & Facility Procurement",
      status: "COMPLETED",
      keyDecision: "Selected whole milk Mozzarella as RSI Tasikmalaya's foundational artisanal cheese product, partnering with cheese specialist Pak Trie Haryanto.",
      actionPlan: [
        "Audited existing factory plant floor and utilities in Tasikmalaya.",
        "Procured missing food-grade equipment: gas regulators, stainless vats, curd knives, cooling trays.",
        "Contracted raw milk supply from high-fat local farmer cooperatives."
      ],
      reflection: "A strong triumvirate: Pak Trie (technical cheese craft), myself (plant operations & SOPs), and Pak Rio (executive management). Foundation set for rapid scaling.",
      relatedProject: "Plant Commissioning"
    }
  ],

  achievements: [
    {
      id: "ACH-01",
      category: "QUALITY",
      date: "July 2026",
      title: "Milk Quality Digitalization & Cooperative Supplier Selection",
      description: "Engineered a digital recording system for raw milk intake across supplier cooperatives (Karya Nugraha, Kemuning, Larasati). Automatically logs Fat percentage, SNF, protein, and alcohol stability directly into an operational dashboard.",
      points: [
        {
          label: "Digitalized Raw Milk Intake",
          description: "Built a real-time dashboard logging fat %, SNF, protein, and alcohol stability across supplier cooperatives (Karya Nugraha, Kemuning, Larasati), replacing manual paper tallies."
        },
        {
          label: "Optimized Yield & Sourcing",
          description: "Enabled data-driven prioritization of high-fat milk suppliers, preventing curd coagulation failures and maximizing cheese yield per liter."
        },
        {
          label: "Verified Outcome",
          description: "Logged 52.4K liters of raw milk across 30 deliveries with zero intake discrepancy."
        }
      ],
      impact: "Replaced manual paper tallying with objective data. Enabled prioritisation of high-fat milk suppliers, reducing curd coagulation failures and optimizing cheese yield per liter.",
      metrics: "52.4K liters logged across 30 deliveries",
      sopRef: "SOP-QC-INTAKE-04"
    },
    {
      id: "ACH-02",
      category: "PRODUCTION",
      date: "June 2026",
      title: "First Commercial Mozzarella Production at RSI Tasikmalaya",
      description: "Successfully processed the inaugural 500L raw milk batch into 42.2kg of packaged mozzarella (211 pcs @200g). Managed procurement from ground zero, solved inverter electrical trip failures, and stabilized curd stretch elasticity.",
      points: [
        {
          label: "Commercial Scale-Up",
          description: "Processed the inaugural 500L raw milk batch into 42.2 kg (211 pcs @200g) of packaged mozzarella, resolving inverter electrical trips and stabilizing curd stretch elasticity."
        },
        {
          label: "Zero-Loss Logistics",
          description: "Shipped 100% of production volume to Bogor retail channels with zero transit spoilage."
        },
        {
          label: "Verified Outcome",
          description: "Achieved a consistent 10% curd yield from fresh raw milk."
        }
      ],
      impact: "Established RSI's flagship cheese product, shipped 100% of volume to Bogor retail channels with zero transit spoilage.",
      metrics: "10% curd yield from fresh raw milk",
      sopRef: "SOP-PROD-MOZZ-01"
    },
    {
      id: "ACH-03",
      category: "QUALITY",
      date: "June 2026",
      title: "Mozzarella SOP Architecture & Standardized Shift Forms",
      description: "Formalized the complete operational workflow following batch MZ-160626-01: drafted personal hygiene standards, equipment sterilization protocol, Lactoscan calibration, stretch testing rubrics, vacuum packaging, and cold holding parameters.",
      points: [
        {
          label: "Full SOP Suite Formalization",
          description: "Drafted and deployed 12 core operational SOPs covering operator hygiene, equipment sterilization, Lactoscan calibration, stretch testing, vacuum sealing, and cold holding."
        },
        {
          label: "Autonomous Execution",
          description: "Enabled shift operators to run repeatable batches independently without senior supervision, creating an auditable data trail."
        },
        {
          label: "Verified Outcome",
          description: "12 active SOP documents fully integrated on the factory floor."
        }
      ],
      impact: "Shift operators now execute repeatable batches autonomously without senior supervision, establishing an auditable data trail for continuous yield optimization.",
      metrics: "12 SOP documents active on the production floor",
      sopRef: "SOP-SUITE-RSI-2026"
    },
    {
      id: "ACH-04",
      category: "SUPPLY CHAIN",
      date: "June 2026",
      title: "Ratchet Cargo Securing Protocol for Inter-City Cold Chain",
      description: "Formulated the cargo loading standard for insulated trucks traveling Tasikmalaya to Bogor. Codified stacking limits (Box Biru: max 5 layers, 4 stacks/ratchet; Trays: max 15 levels), corner protectors, and pre-departure strap tensioning.",
      points: [
        {
          label: "Standardized Cold Logistics",
          description: "Established cargo loading protocols for insulated trucks (Tasikmalaya to Bogor), codifying stacking limits (Box Biru: max 5 layers; Trays: max 15 levels) and pre-departure strap tensioning."
        },
        {
          label: "Transit Risk Elimination",
          description: "Prevented crate displacement and product crushing over uneven inter-city routes, guaranteeing product integrity."
        },
        {
          label: "Verified Outcome",
          description: "100% intact delivery rate with 0 crates lost across 15+ inter-city trips."
        }
      ],
      impact: "Eliminated product crushing and crate displacement over uneven roads, achieving 100% intact delivery rate on regional transit routes.",
      metrics: "0 crates lost to transit tipping across 15+ trips",
      sopRef: "SOP-DIST-RATCHET-02"
    }
  ],

  qcCaseFiles: [
    {
      id: "CF-01",
      date: "07 Jun 2026",
      status: "CLOSED",
      issue:
        "Mozzarella batch lost stretch and turned rubbery in the cooker.",
      rootCause:
        "Target pH was missed during acidification, so the casein matrix never formed properly.",
      action:
        "Re-blended 20% failed mozzarella curd into an 80% cheddar base instead of discarding the batch.",
      result:
        "100% of the failed batch recovered, pressed into cheddar and sold as a different grade — zero waste.",
      sopChange:
        "Rework matrix defining which failed product can be safely blended into which base."
    },
    {
      id: "CF-02",
      date: "07 Sep 2026",
      status: "CLOSED",
      issue:
        "150 L raw milk failed the alcohol stability test after temperature exposure and was flagged for disposal.",
      rootCause:
        "Cold storage temperature fluctuated because the door was cycled repeatedly for cheese handling.",
      action:
        "Trialled 2.5 L into a mozzarella cook, then processed the remaining 147.5 L once the curd behaved normally.",
      result:
        "98% of the flagged volume recovered; 14.7 kg mozzarella produced and released with a special batch label.",
      sopChange:
        "Separate cold storage for raw milk and in-process cheese to stop the door cycle."
    },
    {
      id: "CF-03",
      date: "19 Sep 2026",
      status: "CLOSED · ESCALATED",
      issue:
        "Milk from the 14 Sep run showed a fishy, bloody off-odor and a yellowish tint.",
      rootCause:
        "Vat temperature drifted from 62 °C down to 58 °C before recovering to the low 60s, producing inconsistent heat treatment.",
      action:
        "Reworked the PHE, held hot water at 90 °C, and re-ran the batch at ~70 °C under logged temperature curves.",
      result:
        "Odor and color deviation eliminated before release; no compromised batch reached distribution.",
      sopChange:
        "Temperature-gate log (water + milk) signed before milk enters pasteurization."
    },
    {
      id: "CF-04",
      date: "14 Oct 2026",
      status: "CLOSED",
      issue:
        "A 400 L cook yielded only ~25 kg, with salt at roughly 2× the standard recipe and weak elasticity.",
      rootCause:
        "Curd break from weak agitation during citric acid dosing; pH ran at ~5.2 against a 5.8 target.",
      action:
        "Re-cooked with ~2 L demineralized water to draw out excess salt and restore elasticity.",
      result:
        "Salinity reduced and elasticity restored; yield came in at ~6% against a 10% target, but the batch was recovered instead of scrapped.",
      sopChange:
        "Salt dosed by weight, with a pH 5.8 gate before stretching."
    }
  ] satisfies QcCaseEntry[],

  skillsData: [
    {
      title: "Dairy Operations & Factory Floor",
      subtitle: "Hands-on manufacturing, quality assurance, cold chain logistics, and supply chain management.",
      items: [
        {
          name: "R&D & Cheese Development",
          description: "Led first commercial Mozzarella and Cheddar formulation from trial batches to standardized floor production.",
          badge: "Cheese Vat Process"
        },
        {
          name: "SOP Architecture & Standardization",
          description: "Authored 12+ standard operating procedures covering milk intake, pasteurization, hygiene, and transit securing.",
          badge: "Full Plant Suite"
        },
        {
          name: "Cold Chain Management",
          description: "Maintained 2–8°C thermal integrity across chilling tanks, cold storage, and refrigerated delivery trucks to Bogor & Sukabumi.",
          badge: "2°C – 8°C Strict"
        },
        {
          name: "Quality Control & Lab Testing",
          description: "Lactoscan multi-parameter testing, alcohol coagulation, peroxide adulteration screening, pH monitoring, and 3-batch retention.",
          badge: "Reject < 1%"
        },
        {
          name: "Supplier Intelligence (KPS)",
          description: "Data-driven supplier evaluation analyzing Fat, SNF, and volume trends across Karya Nugraha, Kemuning, and Larasati cooperatives.",
          badge: "Intake Analytics"
        },
        {
          name: "Food Safety & AMR Compliance",
          description: "FAO-certified on responsible antibiotic use in livestock, applied to milk intake screening and supplier hygiene standards.",
          badge: "FAO Certified"
        },
        {
          name: "Inventory & Stock Control",
          description: "Raw material receiving, packaging stock counts, batch traceability records, and cold storage rotation controls.",
          badge: "Batch Traceability"
        },
        {
          name: "Team Leadership & Shift Ownership",
          description: "Direct management of floor operators, daily shift briefs, sanitation discipline, and skill matrix development.",
          badge: "Floor Leadership"
        }
      ]
    },
    {
      title: "Systems, IoT & Code",
      subtitle: "Bridging physical factory floor operations with digital telemetry, automation, and analytics.",
      items: [
        {
          name: "IoT & Embedded Telemetry",
          description: "ESP32 and Arduino firmware, MQTT data streaming, industrial relay automation, and IP65 field-ready sensor housings.",
          badge: "5+ Field Deployments"
        },
        {
          name: "Data Analytics & ML Models",
          description: "Python (Pandas, NumPy, Scikit-Learn) for milk quality grading classification (Random Forest / XGBoost) and financial screener tooling.",
          badge: "Python / Data Science"
        },
        {
          name: "Modern Web Engineering",
          description: "React, Next.js, TypeScript, and Tailwind CSS for high-performance operational dashboards, attendance systems, and company portfolios.",
          badge: "Next.js / TypeScript"
        },
        {
          name: "Hardware & Networking",
          description: "BNSP Certified Hardware Supervisor, Cisco network routing & switching, Kominfo DTS Junior Network Engineer.",
          badge: "BNSP & Cisco Certified"
        }
      ]
    }
  ],

  weeklyQualityTrend: [
    { day: "Mon", volumeL: 9200, avgFat: 4.02, avgSnf: 8.28, rejectRate: 0.31 },
    { day: "Tue", volumeL: 9450, avgFat: 4.05, avgSnf: 8.32, rejectRate: 0.28 },
    { day: "Wed", volumeL: 9100, avgFat: 3.98, avgSnf: 8.22, rejectRate: 0.35 },
    { day: "Thu", volumeL: 9600, avgFat: 4.08, avgSnf: 8.36, rejectRate: 0.30 },
    { day: "Fri", volumeL: 9350, avgFat: 4.04, avgSnf: 8.29, rejectRate: 0.38 },
    { day: "Sat", volumeL: 9150, avgFat: 4.01, avgSnf: 8.25, rejectRate: 0.42 },
    { day: "Sun", volumeL: 8900, avgFat: 4.06, avgSnf: 8.34, rejectRate: 0.33 }
  ],

  faqs: [
    {
      q: "How do you lead operational teams on the production floor?",
      a: "By setting unequivocal SOPs, defining clear shift ownership, and practicing daily visual alignment. Operators know exactly what is expected and have full visibility over temperature logs and sanitation protocols, minimizing micro-management."
    },
    {
      q: "What is your process for developing and rolling out new SOPs?",
      a: "I observe real factory workflows alongside operators, draft the preliminary procedure, test it over live trial batches, iterate based on operator feedback, and then formalize the document. Every SOP incorporates hygiene, step-by-step actions, and QC verification gates."
    },
    {
      q: "How do you ensure zero cold-chain degradation during distribution?",
      a: "Through disciplined multi-stage controls: pre-cooling storage tanks to 2–4°C, verifying transport truck insulation, using certified food-grade styrofoam containers with ice packs, and enforcing ratchet cargo securing standards to prevent transit shifting."
    },
    {
      q: "Are you open to operations consulting or full-time relocation?",
      a: "Yes. I am available for full-time production leadership, plant setup, and operations consulting roles across Indonesia and internationally. I typically respond to all inquiries within 24 hours."
    }
  ]
};
