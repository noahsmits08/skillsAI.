const carData = {

    // ════════════════════════════════════════════
    //  BMW
    // ════════════════════════════════════════════

    "bmw-7-series-2022": {
        name: "7 Series", year: "2022", category: "Sedan", brand: "BMW",
        overview: "The 2022 BMW 7 Series marks a bold new generation of BMW's flagship luxury sedan. It introduced an all-new design language with split headlights and a large kidney grille, paired with cutting-edge technology including a massive Theatre Screen in the rear.",
        highlights: ["Available as 740i, 760i xDrive, and electric i7", "48V mild hybrid system on combustion models", "Optional 31.3-inch rear Theatre Screen", "Up to 536 hp in the M760i xDrive"]
    },
    "bmw-3-series-2023": {
        name: "3 Series", year: "2023", category: "Sedan", brand: "BMW",
        overview: "The 2023 BMW 3 Series received a mid-cycle refresh with updated styling, a new iDrive 8 infotainment system, and revised engine options. It remains one of the benchmark compact executive sedans in its class.",
        highlights: ["Refreshed front and rear styling", "New iDrive 8 with curved display", "Available as 320i, 330i, 330e PHEV, and M340i", "Optional M Sport package with sportier suspension"]
    },
    "bmw-5-series-2024": {
        name: "5 Series", year: "2024", category: "Sedan", brand: "BMW",
        overview: "The all-new 2024 BMW 5 Series (G60) represents a major leap forward for BMW's executive sedan. It comes in combustion, PHEV, and fully electric i5 variants on the same platform, offering a wide range of powertrain choices.",
        highlights: ["Available as 520i, 530i, 540i, 550e PHEV, and electric i5", "Curved iDrive 8.5 display as standard", "Level 2 hands-free driving assist available", "Built on updated CLAR platform"]
    },
    "bmw-2-series-gran-coupe-2024": {
        name: "2 Series Gran Coupé", year: "2024", category: "Sedan", brand: "BMW",
        overview: "The 2024 BMW 2 Series Gran Coupé is a compact four-door fastback sedan sitting at the entry level of the BMW lineup. It was refreshed for 2024 with updated styling and tech while retaining its front-wheel-drive platform.",
        highlights: ["Compact subcompact executive fastback", "Available in 218i, 220i, and M235i xDrive", "Updated iDrive 8 infotainment", "Sporty M235i puts out 306 hp"]
    },
    "bmw-7-series-2026": {
        name: "7 Series", year: "2026", category: "Sedan", brand: "BMW",
        overview: "The 2026 BMW 7 Series receives a significant mid-cycle update with revised powertrains, updated interior technology, and enhanced driver assistance systems. It continues as BMW's flagship luxury statement.",
        highlights: ["Updated powertrain lineup including i7 electric", "Enhanced BMW Personal CoPilot driver assist", "Revised exterior with updated lighting", "Available in standard and long-wheelbase versions"]
    },
    "bmw-x1-2023": {
        name: "X1", year: "2023", category: "SUV", brand: "BMW",
        overview: "The 2023 BMW X1 is an all-new generation that grows in size and capability while becoming more tech-forward. It's larger, boxier, and rides higher than before, making it one of the most practical entries in BMW's SUV lineup.",
        highlights: ["All-new third generation design", "Available as X1 and electric iX1", "New panoramic iDrive display", "X1 M35i with 313 hp hot variant"]
    },
    "bmw-x2-2024": {
        name: "X2", year: "2024", category: "SUV", brand: "BMW",
        overview: "The all-new second generation 2024 BMW X2 grows in size and boldness. It features a more dramatic coupe-like roofline and is now also available as the fully electric iX2, sharing its platform with the new X1.",
        highlights: ["Second generation with bolder styling", "Available as X2 and electric iX2", "Standard AWD on all models", "X2 M35i with 313 hp performance variant"]
    },
    "bmw-x3-2024": {
        name: "X3", year: "2024", category: "SUV", brand: "BMW",
        overview: "The 2024 BMW X3 enters its third generation with a fresh design, improved interior, and updated tech. BMW's best-selling model worldwide continues to balance everyday practicality with engaging driving dynamics.",
        highlights: ["All-new third generation", "Available in petrol, diesel, PHEV, and electric iX3", "iDrive 8.5 with curved display", "X3 M Competition with 530 hp available"]
    },
    "bmw-x5-2025": {
        name: "X5", year: "2025", category: "SUV", brand: "BMW",
        overview: "The 2025 BMW X5 continues as one of the most well-rounded mid-size luxury SUVs available. It blends genuine off-road capability with refined on-road dynamics, premium interiors, and a wide powertrain range.",
        highlights: ["Available as xDrive40i, xDrive50e PHEV, and M60i", "Optional third row seating", "Standard panoramic sunroof", "Up to 530 hp in M60i trim"]
    },
    "bmw-x6-2025": {
        name: "X6", year: "2025", category: "SUV", brand: "BMW",
        overview: "The 2025 BMW X6 puts a sleek coupe roofline on the X5's capable foundations. It sacrifices some practicality for a more dramatic silhouette and added presence, appealing to buyers who want style alongside SUV versatility.",
        highlights: ["Coupe-styled roofline on X5 platform", "Available as xDrive40i, xDrive50e PHEV, and M60i", "Adaptive M suspension standard on higher trims", "Iconic fastback rear design"]
    },
    "bmw-x7-2025": {
        name: "X7", year: "2025", category: "SUV", brand: "BMW",
        overview: "The 2025 BMW X7 is the brand's largest and most luxurious SUV, offering genuine seven-seat capacity with flagship-level refinement. Its split headlights and imposing grille make it instantly recognizable.",
        highlights: ["Three-row seating for up to 7 passengers", "Available as xDrive40i and M60i", "Available with M Sport Pro package", "Massive 14.9-inch iDrive touchscreen"]
    },
    "bmw-2-series-coupe-2022": {
        name: "2 Series Coupé", year: "2022", category: "Coupe", brand: "BMW",
        overview: "The all-new 2022 BMW 2 Series Coupé moved to a rear-wheel-drive platform, separating it from the front-wheel-drive Gran Coupé. It's a more focused and driver-oriented machine, keeping BMW's coupe heritage alive.",
        highlights: ["All-new RWD platform for 2022", "Available as 230i and M240i xDrive", "M240i produces 382 hp", "No convertible option in this generation"]
    },
    "bmw-4-series-coupe-2023": {
        name: "4 Series Coupé", year: "2023", category: "Coupe", brand: "BMW",
        overview: "The BMW 4 Series Coupé continues with its distinctive large kidney grille and low-slung proportions. The 2023 model year brought minor updates and the continued availability of the M4 Competition variant.",
        highlights: ["Available as 420i, 430i, and M440i xDrive", "M4 Competition with 503 hp also available", "Optional M Sport package", "8-speed automatic transmission standard"]
    },
    "bmw-4-series-gran-coupe-2024": {
        name: "4 Series Gran Coupé", year: "2024", category: "Coupe", brand: "BMW",
        overview: "The 2024 BMW 4 Series Gran Coupé combines coupe styling with the practicality of a liftback. Its refresh brought updated styling elements inline with the rest of the BMW range and a new iDrive 8 system.",
        highlights: ["Four-door liftback with coupe proportions", "Available as 420i, 430i, and M440i xDrive", "Also available as electric i4", "Updated iDrive 8 infotainment for 2024"]
    },
    "bmw-8-series-gran-coupe-2025": {
        name: "8 Series Gran Coupé", year: "2025", category: "Coupe", brand: "BMW",
        overview: "The 2025 BMW 8 Series Gran Coupé is BMW's premium four-door coupe, blending the presence of a grand tourer with rear-seat practicality. Only available in Competition trim, it offers potent V8 power.",
        highlights: ["Only available in M8 Competition trim", "4.4-litre twin-turbo V8 with 617 hp", "All-wheel-drive standard", "Merino leather interior standard"]
    },
    "bmw-z4-2026": {
        name: "Z4", year: "2026", category: "Coupe", brand: "BMW",
        overview: "The 2026 BMW Z4 keeps BMW's roadster tradition alive with a lightweight platform, sharp steering, and two turbocharged engine options. It's the most engaging open-top driving experience in BMW's lineup.",
        highlights: ["Available as sDrive20i and M40i", "M40i produces 382 hp from a 3.0-litre inline-six", "Soft-top convertible roof", "Co-developed with Toyota GR Supra"]
    },
    "bmw-i7-2022": {
        name: "i7", year: "2022", category: "Electric", brand: "BMW",
        overview: "The BMW i7 is the fully electric version of the new 7 Series, launched alongside it in 2022. It shares the same luxurious interior and technology as the combustion models while offering zero-emission driving.",
        highlights: ["Up to 318 miles of electric range", "Dual motor AWD as standard", "0-62 mph in 4.7 seconds", "Same luxurious interior as combustion 7 Series"]
    },
    "bmw-ix1-2022": {
        name: "iX1", year: "2022", category: "Electric", brand: "BMW",
        overview: "The BMW iX1 is the electric version of the all-new X1, launched simultaneously in 2022. It offers a practical and affordable entry point into BMW's electric SUV range with dual-motor AWD.",
        highlights: ["Up to 272 miles of electric range", "Dual motor xDrive30 AWD powertrain", "64.7 kWh usable battery capacity", "Shares platform with X1 and MINI Countryman"]
    },
    "bmw-ix2-2023": {
        name: "iX2", year: "2023", category: "Electric", brand: "BMW",
        overview: "The BMW iX2 is the electric version of the new X2, offering a sportier coupe-SUV silhouette with zero emissions. It launched in 2023 as part of BMW's rapidly expanding electric lineup.",
        highlights: ["Coupe-SUV body style with sloping roofline", "xDrive30 dual motor AWD powertrain", "Up to 280 miles of electric range", "iDrive 8 with curved display"]
    },
    "bmw-i4-2024": {
        name: "i4", year: "2024", category: "Electric", brand: "BMW",
        overview: "The BMW i4 is the fully electric 4 Series Gran Coupé, offering an impressive blend of range, performance, and everyday usability. The 2024 refresh brought updated styling and improved range.",
        highlights: ["Up to 307 miles of range in eDrive40 trim", "M50 xDrive variant with 536 hp", "Fast charging up to 210 kW DC", "Five-door liftback body with practical boot"]
    },
    "bmw-i5-2024": {
        name: "i5", year: "2024", category: "Electric", brand: "BMW",
        overview: "The BMW i5 is the fully electric 5 Series, available as both a sedan and a Touring estate. It was launched in 2024 as part of the all-new G60 5 Series generation, sharing its platform with combustion models.",
        highlights: ["Available as sedan and Touring estate", "eDrive40 RWD and xDrive40 AWD variants", "M60 xDrive with 601 hp performance version", "Up to 362 miles of electric range"]
    },
    "bmw-i3-neue-klasse-2026": {
        name: "i3 (Neue Klasse)", year: "2026", category: "Electric", brand: "BMW",
        overview: "The 2026 BMW i3 marks the beginning of BMW's next era — the Neue Klasse platform. This all-new electric sedan promises up to 440 miles of range, a completely new interior concept, and next-generation battery technology.",
        highlights: ["Up to 440 miles electric range", "Built on all-new Neue Klasse platform", "Next-generation circular economy interior", "First of several Neue Klasse models planned"]
    },
    "bmw-ix4-2026": {
        name: "iX4", year: "2026", category: "Electric", brand: "BMW",
        overview: "The 2026 BMW iX4 is a first-ever model for BMW, bringing the popular X4 coupe-SUV body style into the electric era. It is part of BMW's major 2026 product offensive and joins the growing i Series SUV family.",
        highlights: ["First-ever electric X4 variant", "Coupe-SUV body style with electric powertrain", "Part of BMW's 2026 product offensive", "Shares underpinnings with X4 platform"]
    },
    "bmw-m2-2023": {
        name: "M2", year: "2023", category: "Performance", brand: "BMW",
        overview: "The all-new 2023 BMW M2 is widely regarded as the last truly pure BMW M car — rear-wheel-drive only, with a manual transmission option and a focused, analogue driving character. It uses a detuned version of the M3/M4's S58 engine.",
        highlights: ["453 hp S58-derived 3.0-litre inline-six", "Available with 6-speed manual or 8-speed auto", "Rear-wheel-drive only", "Widened body with M-specific styling"]
    },
    "bmw-m3-competition-2023": {
        name: "M3 Competition", year: "2023", category: "Performance", brand: "BMW",
        overview: "The BMW M3 Competition continues to set the benchmark in the performance sedan class. From 2023, xDrive all-wheel-drive became optional alongside the traditional RWD setup, broadening its all-weather appeal.",
        highlights: ["510 hp S58 3.0-litre twin-turbo inline-six", "Available in RWD and xDrive AWD", "Also available as M3 Touring estate", "0-62 mph in 3.5 seconds (xDrive)"]
    },
    "bmw-m4-competition-2023": {
        name: "M4 Competition", year: "2023", category: "Performance", brand: "BMW",
        overview: "The BMW M4 Competition is available as a coupe and convertible, both with xDrive AWD as standard from 2023. It shares its S58 engine with the M3 and offers blistering performance wrapped in a striking body.",
        highlights: ["510 hp S58 twin-turbo inline-six", "Available as Coupé and Convertible", "xDrive AWD standard on Competition models", "Optional M Carbon ceramic brakes"]
    },
    "bmw-m5-2025": {
        name: "M5", year: "2025", category: "Performance", brand: "BMW",
        overview: "The all-new 2025 BMW M5 returns after a gap year with a radical change — it's now a plug-in hybrid, combining a twin-turbo V8 with an electric motor for a combined output of 717 hp. It's the most powerful M5 ever made.",
        highlights: ["717 hp combined from V8 + electric motor", "PHEV with electric-only driving mode", "xDrive AWD with M-specific tuning", "0-62 mph in 3.5 seconds despite its weight"]
    },
    "bmw-m2-xdrive-2025": {
        name: "M2 xDrive", year: "2025", category: "Performance", brand: "BMW",
        overview: "The BMW M2 gains an optional xDrive all-wheel-drive system for 2026, expanding its usability in wet and cold conditions while retaining the option to switch to RWD mode for a more focused driving experience.",
        highlights: ["xDrive AWD with RWD mode available", "Same 453 hp S58-derived engine as standard M2", "Improved all-weather traction", "Retains manual transmission option"]
    },
    "bmw-x3-m-2025": {
        name: "X3 M", year: "2025", category: "Performance", brand: "BMW",
        overview: "The BMW X3 M is the high-performance variant of the all-new third-generation X3. It carries over M-specific suspension, brakes, and powertrain tuning to deliver sports car levels of performance in a practical SUV package.",
        highlights: ["530 hp S58 twin-turbo inline-six in Competition trim", "M-specific xDrive AWD tuning", "Adaptive M suspension standard", "Available as X3 M and X3 M Competition"]
    },

    // ════════════════════════════════════════════
    //  AUDI
    // ════════════════════════════════════════════

    "audi-a3-2023": {
        name: "A3 Sedan", year: "2023", category: "Sedan", brand: "Audi",
        overview: "The 2023 Audi A3 Sedan is the sharp, tech-forward entry point into the Audi range. The refreshed model gained revised Matrix LED headlights, an updated 10.1-inch MMI touchscreen, and mild-hybrid assistance on petrol engines, keeping it highly competitive in the premium compact class.",
        highlights: ["Updated 10.1-inch MMI touch display", "Available as 35 TFSI, 40 TFSI, and 45 TFSI e PHEV", "Optional S3 with 310 hp turbocharged 2.0T", "Revised Matrix LED headlights as standard on higher trims"]
    },
    "audi-a4-2023": {
        name: "A4", year: "2023", category: "Sedan", brand: "Audi",
        overview: "The 2023 Audi A4 continues as one of the brand's core executive sedans. A subtle facelift introduced mild-hybrid technology across the petrol range, a revised front end, and updated connectivity, keeping the A4 fresh ahead of its full successor.",
        highlights: ["48V mild hybrid on all petrol variants", "Available as 35 TFSI, 40 TFSI, 40 TDI, and 45 TFSI", "Optional S4 with 341 hp diesel or petrol", "Virtual Cockpit Plus standard on Sport trim and above"]
    },
    "audi-a6-2023": {
        name: "A6", year: "2023", category: "Sedan", brand: "Audi",
        overview: "The 2023 Audi A6 sits at the heart of the brand's executive sedan range. Available as both a saloon and Avant estate, it combines sophisticated styling with 48V mild-hybrid powertrains and a luxurious, tech-rich cabin.",
        highlights: ["Available as Sedan and Avant estate", "48V mild hybrid across the petrol and diesel range", "12.3-inch Virtual Cockpit and 10.1-inch MMI touch", "Optional S6 with 444 hp turbocharged V8 mild hybrid"]
    },
    "audi-a8-2024": {
        name: "A8", year: "2024", category: "Sedan", brand: "Audi",
        overview: "The 2024 Audi A8 is Audi's flagship luxury sedan, combining a presidential interior with a suite of advanced technology. The updated model features a revised front end, a new MMI operating system, and updated predictive active suspension.",
        highlights: ["Available as A8 and long-wheelbase A8 L", "Mild hybrid and PHEV powertrains available", "Predictive active suspension with camera-based road scanning", "Optional rear executive package with massage and footrest"]
    },
    "audi-a5-2025": {
        name: "A5", year: "2025", category: "Sedan", brand: "Audi",
        overview: "The all-new 2025 Audi A5 replaces both the old A4 and A5 nameplates, positioning itself as a modern executive sedan on a new platform. It blends sharp styling with a completely overhauled interior featuring a large curved display.",
        highlights: ["Replaces the outgoing A4 nameplate", "Available as Sedan and Avant estate", "New curved MMI panoramic display standard", "Available as 35 TFSI, 40 TFSI, 45 TFSI, and S5"]
    },
    "audi-q3-2023": {
        name: "Q3", year: "2023", category: "SUV", brand: "Audi",
        overview: "The 2023 Audi Q3 is the brand's entry-level luxury SUV, offering a blend of everyday practicality, premium interior quality, and a range of efficient turbocharged engines. Minor updates for 2023 kept its tech suite current.",
        highlights: ["Compact premium crossover with sliding rear bench", "Available as Q3 and sporty Q3 Sportback", "35 TFSI, 40 TFSI, 35 TDI engine options", "Digital Cockpit and MMI navigation standard"]
    },
    "audi-q5-2024": {
        name: "Q5", year: "2024", category: "SUV", brand: "Audi",
        overview: "The all-new 2024 Audi Q5 enters its third generation with bold new styling, an overhauled interior, and a new curved display. It remains one of the most important models in Audi's lineup and sets a new benchmark in the premium mid-size SUV segment.",
        highlights: ["All-new third generation with redesigned interior", "New curved MMI display as standard", "Available as Q5 and Q5 Sportback", "PHEV 55 TFSI e with over 50 miles electric range"]
    },
    "audi-q7-2025": {
        name: "Q7", year: "2025", category: "SUV", brand: "Audi",
        overview: "The 2025 Audi Q7 is the brand's large three-row luxury SUV, combining genuine seven-seat practicality with a refined, tech-forward interior. Updated for 2025, it gains a revised MMI system and enhanced driver assistance features.",
        highlights: ["Three-row seating for up to seven passengers", "Available as 55 TFSI and 60 TFSI e PHEV", "Air suspension with adaptive dampers standard on S line", "SQ7 with 507 hp V8 mild hybrid available"]
    },
    "audi-q8-2025": {
        name: "Q8", year: "2025", category: "SUV", brand: "Audi",
        overview: "The 2025 Audi Q8 is a sleek five-seat coupe-SUV sitting above the Q7. Its sloping roofline and upmarket interior make it a style statement, while a broad powertrain lineup — including a PHEV — gives it everyday versatility.",
        highlights: ["Coupe-style five-seat SUV silhouette", "Available as 55 TFSI, 60 TFSI e PHEV, and RS Q8", "RS Q8 produces 600 hp from a twin-turbo V8", "Adaptive air suspension standard across the range"]
    },
    "audi-tt-2023": {
        name: "TT", year: "2023", category: "Coupe", brand: "Audi",
        overview: "The 2023 Audi TT is the final model year of the iconic TT nameplate before its discontinuation. It remains a beautifully styled coupe with a driver-focused cockpit, available in both Coupé and Roadster form, and marks the end of an era for Audi.",
        highlights: ["Final generation of the iconic TT nameplate", "Available as Coupé and Roadster", "TTS with 320 hp 2.0 TFSI engine", "Fully digital cockpit with no traditional centre screen"]
    },
    "audi-r8-2023": {
        name: "R8", year: "2023", category: "Coupe", brand: "Audi",
        overview: "The 2023 Audi R8 is the final iteration of Audi's mid-engine supercar before the nameplate was retired. It uses a naturally aspirated 5.2-litre V10 engine and remains one of the last great analogue supercars from a major manufacturer.",
        highlights: ["5.2-litre naturally aspirated V10 engine", "570 hp in standard trim, 620 hp in Performance", "Available as Coupé and Spyder", "Last generation before R8 nameplate retirement"]
    },
    "audi-e-tron-gt-2023": {
        name: "e-tron GT", year: "2023", category: "Electric", brand: "Audi",
        overview: "The 2023 Audi e-tron GT is a stunning electric grand tourer sharing its platform with the Porsche Taycan. It combines supercar-rivalling performance with a practical four-door fastback body and up to 298 miles of range.",
        highlights: ["Up to 298 miles of electric range", "Available as e-tron GT and RS e-tron GT", "RS variant produces 598 hp", "800V charging architecture for rapid top-ups"]
    },
    "audi-q4-e-tron-2023": {
        name: "Q4 e-tron", year: "2023", category: "Electric", brand: "Audi",
        overview: "The Audi Q4 e-tron is Audi's mass-market electric SUV, based on the Volkswagen Group's MEB platform. It offers a spacious interior, a choice of rear or all-wheel drive, and up to 341 miles of range in its most efficient configuration.",
        highlights: ["Available as Q4 e-tron and Q4 Sportback e-tron", "Up to 341 miles of electric range", "Rear-wheel drive and quattro AWD options", "Augmented reality head-up display available"]
    },
    "audi-q6-e-tron-2024": {
        name: "Q6 e-tron", year: "2024", category: "Electric", brand: "Audi",
        overview: "The all-new 2024 Audi Q6 e-tron is built on the Premium Platform Electric (PPE) architecture co-developed with Porsche. It represents a major step up from the Q4 e-tron, with up to 381 miles of range, 800V charging, and a cutting-edge interior.",
        highlights: ["Built on new PPE platform shared with Porsche Macan EV", "Up to 381 miles of electric range", "800V architecture enabling 270 kW DC fast charging", "New curved MMI panoramic display as standard"]
    },
    "audi-rs3-2023": {
        name: "RS 3", year: "2023", category: "Performance", brand: "Audi",
        overview: "The 2023 Audi RS 3 is a compact performance car like no other, powered by a unique five-cylinder turbocharged engine producing 400 hp. Its torque vectoring rear differential makes it astonishingly capable on track while remaining practical for everyday use.",
        highlights: ["400 hp 2.5-litre five-cylinder turbo engine", "Torque-vectoring rear differential", "Available as Sedan and Sportback", "0-62 mph in 3.8 seconds"]
    },
    "audi-rs6-avant-2024": {
        name: "RS 6 Avant", year: "2024", category: "Performance", brand: "Audi",
        overview: "The 2024 Audi RS 6 Avant is the ultimate performance estate, combining a 630 hp twin-turbo V8 mild hybrid with the practicality of a full estate body. Updated for 2024 with a revised front end and improved standard equipment, it remains the definitive fast wagon.",
        highlights: ["630 hp 4.0-litre twin-turbo V8 with 48V mild hybrid", "0-62 mph in 3.4 seconds", "All-wheel steering standard on Performance trim", "Available as RS 6 and RS 6 Performance"]
    },

    // ════════════════════════════════════════════
    //  MERCEDES-BENZ
    // ════════════════════════════════════════════

    "mercedes-a-class-2023": {
        name: "A-Class", year: "2023", category: "Sedan", brand: "Mercedes-Benz",
        overview: "The 2023 Mercedes-Benz A-Class is the brand's entry-level compact car, available as a hatchback and sedan. A mid-cycle update brought a revised interior, updated MBUX infotainment, and new driver assistance systems to keep it fresh in the competitive segment.",
        highlights: ["Available as hatchback and sedan body styles", "Updated MBUX with larger 10.25-inch screens", "AMG A 35 with 306 hp and AMG A 45 S with 421 hp", "Optional augmented reality navigation standard on AMG Line"]
    },
    "mercedes-c-class-2023": {
        name: "C-Class", year: "2023", category: "Sedan", brand: "Mercedes-Benz",
        overview: "The all-new 2023 Mercedes-Benz C-Class brings S-Class levels of technology and refinement to the compact executive segment. Its vertical portrait touchscreen, available rear-wheel steering, and wide PHEV range make it one of the most advanced cars in its class.",
        highlights: ["New vertical 11.9-inch portrait MBUX display", "Available as Sedan, Estate, Coupé, and Cabriolet", "C 300 e PHEV with over 60 miles electric range", "Optional rear-wheel steering for improved agility"]
    },
    "mercedes-e-class-2024": {
        name: "E-Class", year: "2024", category: "Sedan", brand: "Mercedes-Benz",
        overview: "The all-new 2024 Mercedes-Benz E-Class is a technological tour de force, featuring a massive Superscreen dashboard with up to three displays. It introduces the next generation of MBUX and is available in sedan, estate, and plug-in hybrid configurations.",
        highlights: ["Optional three-screen Superscreen dashboard", "New MBUX with AI-powered voice assistant", "Available as E 200, E 220 d, E 300 e PHEV, and more", "Level 2+ hands-free driving function available"]
    },
    "mercedes-s-class-2024": {
        name: "S-Class", year: "2024", category: "Sedan", brand: "Mercedes-Benz",
        overview: "The 2024 Mercedes-Benz S-Class continues its reign as the definitive luxury flagship sedan. Updated with the latest MBUX Superscreen technology and enhanced Energizing comfort systems, it remains the car by which all others are judged.",
        highlights: ["Available in standard and long-wheelbase Maybach spec", "MBUX Hyperscreen optional across the range", "Active suspension with road preview standard", "S 580 e PHEV with 510 hp combined output"]
    },
    "mercedes-cla-2026": {
        name: "CLA", year: "2026", category: "Sedan", brand: "Mercedes-Benz",
        overview: "The all-new 2026 Mercedes-Benz CLA is built on the new MMA platform and is available as both a combustion and a fully electric model from launch. Its dramatic styling and next-generation MBUX make it one of the most significant new cars of 2026.",
        highlights: ["Built on new MMA platform", "Available as combustion and electric CLA EQ", "Next-generation MBUX with AI assistant", "Electric CLA targets over 466 miles of range"]
    },
    "mercedes-glb-2023": {
        name: "GLB", year: "2023", category: "SUV", brand: "Mercedes-Benz",
        overview: "The 2023 Mercedes-Benz GLB is a compact SUV unique in its class for offering optional seven-seat configuration. Updated MBUX infotainment and revised styling keep the boxy, practical GLB competitive as a family-focused luxury crossover.",
        highlights: ["Optional seven-seat configuration in a compact SUV", "Available as GLB 200, GLB 220 d, and GLB 250 e PHEV", "Updated MBUX with new 10.25-inch screens", "AMG GLB 35 with 306 hp also available"]
    },
    "mercedes-glc-2023": {
        name: "GLC", year: "2023", category: "SUV", brand: "Mercedes-Benz",
        overview: "The all-new 2023 Mercedes-Benz GLC raises the bar for premium mid-size SUVs. Its new portrait MBUX display, standard PHEV option, and optional rear-wheel steering bring C-Class levels of technology into a more practical SUV body.",
        highlights: ["All-new second generation with portrait MBUX display", "Standard 48V mild hybrid across the range", "Available as GLC 300 e and GLC 400 e PHEVs", "Optional seven-seat version available in some markets"]
    },
    "mercedes-gle-2024": {
        name: "GLE", year: "2024", category: "SUV", brand: "Mercedes-Benz",
        overview: "The 2024 Mercedes-Benz GLE is updated with revised styling and the latest MBUX infotainment generation. It offers a broad powertrain range from efficient diesels to a powerful AMG variant, with optional seven-seat capacity.",
        highlights: ["Available with optional seven seats", "Updated MBUX with larger screens", "GLE 450 e PHEV with electric-only driving", "AMG GLE 53 and GLE 63 S performance variants available"]
    },
    "mercedes-gls-2024": {
        name: "GLS", year: "2024", category: "SUV", brand: "Mercedes-Benz",
        overview: "The 2024 Mercedes-Benz GLS is the brand's flagship full-size SUV, offering three rows of genuine luxury and a wide range of powertrains. Updated with E-Active Body Control suspension and the latest MBUX system, it competes directly with the BMW X7 and Range Rover.",
        highlights: ["Full-size three-row luxury SUV for up to seven", "Available as GLS 450, GLS 580, and AMG GLS 63", "E-Active Body Control suspension with curve lean function", "AMG GLS 63 produces 630 hp from a V8 mild hybrid"]
    },
    "mercedes-amg-gt-2024": {
        name: "AMG GT", year: "2024", category: "Coupe", brand: "Mercedes-Benz",
        overview: "The all-new 2024 Mercedes-AMG GT is now a four-door coupe, replacing the two-door sports car of the previous generation. Based on the same platform as the SL, it is available with powerful inline-six and V8 powertrains in a grand touring body.",
        highlights: ["Four-door coupe grand tourer body style", "AMG GT 55 with 476 hp inline-six", "AMG GT 63 with 585 hp V8", "Optional AMG Ride Control+ active suspension"]
    },
    "mercedes-sl-2023": {
        name: "SL", year: "2023", category: "Coupe", brand: "Mercedes-Benz",
        overview: "The 2023 Mercedes-AMG SL is a pure AMG product from the ground up, developed entirely within the performance division. It features a soft-top convertible roof, a rear-biased AWD system, and is available with both inline-six and V8 engines.",
        highlights: ["Fully developed by Mercedes-AMG", "Available as SL 43, SL 55, and SL 63", "Soft-top convertible with optional rear seats", "AMG Performance 4MATIC+ AWD standard"]
    },
    "mercedes-eqb-2023": {
        name: "EQB", year: "2023", category: "Electric", brand: "Mercedes-Benz",
        overview: "The Mercedes-Benz EQB is an electric compact SUV based on the GLB, offering the unique option of seven seats in an electric package. It is one of the most practical entries in Mercedes's EQ electric range.",
        highlights: ["Available with optional seven-seat configuration", "Up to 260 miles of electric range", "EQB 250+ and EQB 350 4MATIC variants", "11 kW AC on-board charger standard"]
    },
    "mercedes-eqe-suv-2023": {
        name: "EQE SUV", year: "2023", category: "Electric", brand: "Mercedes-Benz",
        overview: "The 2023 Mercedes-Benz EQE SUV shares its EVA2 platform with the EQE sedan, bringing electric luxury to a five-seat SUV body. It offers a broad range, optional MBUX Hyperscreen, and AMG-tuned variants for performance buyers.",
        highlights: ["Up to 305 miles of electric range", "Optional MBUX Hyperscreen across the dashboard", "AMG EQE 53 4MATIC+ with 617 hp", "Available as rear-wheel and all-wheel drive"]
    },
    "mercedes-eqs-2024": {
        name: "EQS", year: "2024", category: "Electric", brand: "Mercedes-Benz",
        overview: "The 2024 Mercedes-Benz EQS is the brand's flagship electric sedan, offering exceptional range, a class-leading interior, and the optional MBUX Hyperscreen spanning the entire dashboard. It is the electric equivalent of the S-Class in every meaningful way.",
        highlights: ["Up to 453 miles of electric range in EQS 450+", "Optional MBUX Hyperscreen with 56-inch display", "Available as sedan and SUV body styles", "Air suspension with active noise cancellation standard"]
    },
    "mercedes-amg-c63-2023": {
        name: "AMG C 63 S E Performance", year: "2023", category: "Performance", brand: "Mercedes-Benz",
        overview: "The 2023 Mercedes-AMG C 63 S E Performance marks a controversial but technically remarkable shift — replacing the beloved V8 with a turbocharged 2.0-litre four-cylinder paired with an electric motor for a combined 671 hp and F1-derived battery technology.",
        highlights: ["671 hp combined from 2.0T four-cylinder and electric motor", "F1-derived high-voltage battery in the boot", "AMG Performance 4MATIC+ AWD", "0-62 mph in 3.4 seconds"]
    },
    "mercedes-amg-e53-2024": {
        name: "AMG E 53 Hybrid", year: "2024", category: "Performance", brand: "Mercedes-Benz",
        overview: "The 2024 Mercedes-AMG E 53 Hybrid combines a turbocharged 3.0-litre inline-six with an integrated starter-generator and a rear axle electric motor for a combined 603 hp. It is the top performance variant of the all-new E-Class range.",
        highlights: ["603 hp combined from inline-six and electric motor", "Available as Sedan and Estate", "AMG RIDE CONTROL+ active suspension standard", "0-62 mph in 3.5 seconds"]
    },

    // ════════════════════════════════════════════
    //  VOLKSWAGEN
    // ════════════════════════════════════════════

    "vw-polo-2023": {
        name: "Polo", year: "2023", category: "Hatchback", brand: "Volkswagen",
        overview: "The 2023 Volkswagen Polo received a mid-cycle update with revised front styling, improved connectivity via a new infotainment system, and expanded driver assistance features. It remains one of Europe's best-selling superminis, balancing quality, practicality, and efficiency.",
        highlights: ["Revised front styling with new matrix LED headlights", "Updated 6.5- to 9.2-inch infotainment system", "Available as 1.0 TSI in multiple power outputs", "GTI variant with 207 hp turbocharged engine"]
    },
    "vw-golf-2023": {
        name: "Golf", year: "2023", category: "Hatchback", brand: "Volkswagen",
        overview: "The 2023 Volkswagen Golf continues as Europe's benchmark compact hatchback. The ongoing Mk8 generation received a significant mid-life refresh addressing earlier software criticisms, bringing a revised interior with physical buttons restored and updated infotainment.",
        highlights: ["Revised interior with physical climate controls restored", "Available in petrol, diesel, hybrid, and PHEV", "Golf GTI with 265 hp, Golf R with 333 hp", "Travel Assist hands-on lane keep available"]
    },
    "vw-golf-r-2023": {
        name: "Golf R", year: "2023", category: "Hatchback", brand: "Volkswagen",
        overview: "The 2023 Volkswagen Golf R is the performance flagship of the Golf range, producing 333 hp from a 2.0-litre turbocharged engine. With 4MOTION all-wheel drive and a torque vectoring rear axle, it's one of the most driver-focused hot hatches available.",
        highlights: ["333 hp 2.0-litre turbocharged four-cylinder", "4MOTION AWD with torque vectoring rear axle", "0-62 mph in 4.6 seconds", "Special Edition Akrapovič exhaust available"]
    },
    "vw-passat-2024": {
        name: "Passat", year: "2024", category: "Estate", brand: "Volkswagen",
        overview: "The all-new 2024 Volkswagen Passat makes a bold decision — it's now estate only, dropping the saloon body entirely. Built on the MQB Evo platform, it grows in size, practicality, and technology, with a plug-in hybrid variant as the headline powertrain.",
        highlights: ["Estate-only body style in the new generation", "Available as 1.5 TSI eHybrid PHEV and 2.0 TDI diesel", "eHybrid offers up to 100 km of electric range", "Digital Cockpit Pro and 12.9-inch infotainment standard"]
    },
    "vw-arteon-2024": {
        name: "Arteon", year: "2024", category: "Estate", brand: "Volkswagen",
        overview: "The 2024 Volkswagen Arteon is a premium fastback occupying a unique niche in VW's lineup. Its sleek fastback body, available as both a sedan-style fastback and Shooting Brake estate, gives it strong visual appeal alongside good practicality.",
        highlights: ["Available as Fastback and Shooting Brake estate", "eHybrid PHEV and 2.0 TDI options available", "R variant with 320 hp and 4MOTION AWD", "Premium interior with 9.2-inch infotainment"]
    },
    "vw-tiguan-2024": {
        name: "Tiguan", year: "2024", category: "SUV", brand: "Volkswagen",
        overview: "The all-new 2024 Volkswagen Tiguan enters its third generation with a larger footprint, a completely redesigned interior, and a standard plug-in hybrid powertrain option. It remains one of Europe's top-selling SUVs and sets a new standard for the segment.",
        highlights: ["All-new third generation with redesigned interior", "eHybrid PHEV with up to 100 km electric range", "Optional seven-seat configuration", "12.9-inch infotainment with ChatGPT integration"]
    },
    "vw-t-roc-2024": {
        name: "T-Roc", year: "2024", category: "SUV", brand: "Volkswagen",
        overview: "The 2024 Volkswagen T-Roc benefits from a mid-cycle update introducing revised styling, updated infotainment technology, and an improved driver assistance package. It remains a popular compact crossover offering a sporty character at an accessible price.",
        highlights: ["Revised front and rear styling for 2024", "Updated infotainment with wireless smartphone mirroring", "Available as T-Roc and T-Roc Cabriolet", "R variant with 300 hp and 4MOTION AWD"]
    },
    "vw-touareg-2024": {
        name: "Touareg", year: "2024", category: "SUV", brand: "Volkswagen",
        overview: "The 2024 Volkswagen Touareg is VW's flagship SUV, combining genuine luxury with sophisticated engineering. Updated for 2024 with the latest Innovision Cockpit and enhanced driver assistance, it continues to punch above its price point in refinement and capability.",
        highlights: ["Innovision Cockpit with 15-inch infotainment display", "Available as V6 TFSI, TDI, and eHybrid PHEV", "Optional air suspension with terrain management", "R variant with 462 hp V8 TFSI hybrid"]
    },
    "vw-id3-2023": {
        name: "ID.3", year: "2023", category: "Electric", brand: "Volkswagen",
        overview: "The 2023 Volkswagen ID.3 received a comprehensive facelift addressing the original's software shortcomings. With a refreshed interior featuring improved physical controls, updated software, and a new 12-inch touchscreen, the ID.3 facelift marked a major improvement over its predecessor.",
        highlights: ["Facelifted interior with improved ergonomics", "New 12-inch touchscreen with faster software", "Available in 45 kWh, 58 kWh, and 77 kWh battery options", "Up to 347 miles of range in Pro S trim"]
    },
    "vw-id4-2023": {
        name: "ID.4", year: "2023", category: "Electric", brand: "Volkswagen",
        overview: "The 2023 Volkswagen ID.4 brings the software improvements and updated interface of the ID.3 facelift to VW's bestselling electric SUV. It remains one of the most practical and well-rounded electric family SUVs available, offered in rear and all-wheel drive.",
        highlights: ["Available in rear-wheel drive and AWD ID.4 GTX", "Up to 342 miles of range in rear-wheel drive form", "New 12-inch infotainment display", "ID.4 GTX with 299 hp dual-motor AWD"]
    },
    "vw-id7-2024": {
        name: "ID.7", year: "2024", category: "Electric", brand: "Volkswagen",
        overview: "The 2024 Volkswagen ID.7 is VW's flagship electric sedan, built on the MEB platform. It targets traditional executive sedan buyers with a spacious, premium interior, excellent range, and available estate body in the form of the ID.7 Tourer.",
        highlights: ["Available as Sedan and ID.7 Tourer estate", "Up to 435 miles of electric range", "15-inch infotainment with augmented reality HUD", "GTX variant with 340 hp dual-motor AWD"]
    },
    "vw-id-buzz-2024": {
        name: "ID. Buzz", year: "2024", category: "Electric", brand: "Volkswagen",
        overview: "The 2024 Volkswagen ID. Buzz is an iconic modern reinterpretation of the classic VW Microbus, now fully electric. Available in five-seat short wheelbase and seven-seat long wheelbase versions, it is one of the most distinctive and characterful EVs on sale.",
        highlights: ["Available as 5-seat SWB and 7-seat LWB versions", "Up to 262 miles of electric range", "77 kWh battery with 170 kW fast charging", "GTX variant with dual-motor AWD available on LWB"]
    },
    "vw-gti-mk8-5-2025": {
        name: "Golf GTI", year: "2025", category: "Performance", brand: "Volkswagen",
        overview: "The 2025 Volkswagen Golf GTI Mk8.5 is a significant mid-life update to the iconic hot hatch. Power rises to 265 hp, it gains a new torque vectoring front differential, and the updated interior finally addresses the ergonomic criticisms of the original Mk8.",
        highlights: ["265 hp 2.0-litre turbocharged four-cylinder", "New torque vectoring front differential", "Revised interior with physical climate controls", "0-62 mph in 5.9 seconds"]
    },
    "vw-golf-r-2025": {
        name: "Golf R Mk8.5", year: "2025", category: "Performance", brand: "Volkswagen",
        overview: "The 2025 Volkswagen Golf R Mk8.5 updates the performance flagship with 333 hp maintained but improved chassis tuning, a revised Drift mode, and updated interior in line with the refreshed Golf range. It remains the definitive all-weather performance hatchback.",
        highlights: ["333 hp 2.0-litre turbocharged engine retained", "Updated 4MOTION AWD with improved torque vectoring", "Revised Drift and Special modes", "Updated interior matching Golf GTI Mk8.5 refresh"]
    },

    "volvo-s60-2023": {
        name: "S60", year: "2023", category: "Sedan", brand: "Volvo",
        overview: "The 2023 Volvo S60 is a refined and understated compact executive sedan offering a serene Scandinavian interior, strong safety credentials, and a plug-in hybrid powertrain as the headline option. It competes directly with the BMW 3 Series and Audi A4.",
        highlights: ["Available as B4, B5 mild hybrid, and T8 Recharge PHEV", "T8 Recharge produces 455 hp combined output", "Google-based infotainment with 9-inch portrait screen", "Class-leading safety systems as standard"]
    },
    "volvo-s90-2024": {
        name: "S90", year: "2024", category: "Sedan", brand: "Volvo",
        overview: "The 2024 Volvo S90 is Volvo's flagship executive sedan, offering a long-wheelbase option, a beautifully crafted Scandinavian interior, and a powerful plug-in hybrid powertrain. Updated for 2024 with a new Google-based infotainment system and revised exterior details.",
        highlights: ["Available as B5 mild hybrid and T8 Recharge PHEV", "T8 Recharge with 455 hp combined output", "Available in standard and long-wheelbase versions", "Bowers & Wilkins audio system available"]
    },
    "volvo-xc40-2023": {
        name: "XC40", year: "2023", category: "SUV", brand: "Volvo",
        overview: "The 2023 Volvo XC40 is Volvo's entry-level SUV, available with mild hybrid, plug-in hybrid, and fully electric powertrains under one roof. A minor update refreshed its tech suite and kept it competitive in the crowded compact premium SUV segment.",
        highlights: ["Available as mild hybrid, PHEV, and fully electric Recharge", "Google-based infotainment as standard", "Recharge Pure Electric with up to 260 miles range", "Distinctive Scandinavian interior design"]
    },
    "volvo-xc60-2024": {
        name: "XC60", year: "2024", category: "SUV", brand: "Volvo",
        overview: "The 2024 Volvo XC60 is Volvo's best-selling model worldwide, updated with a new Google-based infotainment system and revised interior. It remains one of the most well-rounded premium mid-size SUVs available, blending safety, comfort, and Scandinavian style.",
        highlights: ["Updated Google-based portrait infotainment", "Available as B4, B5, B6 mild hybrid and T8 Recharge PHEV", "T8 Recharge with 455 hp combined output", "Pilot Assist semi-autonomous driving standard"]
    },
    "volvo-xc90-2025": {
        name: "XC90", year: "2025", category: "SUV", brand: "Volvo",
        overview: "The 2025 Volvo XC90 enters a new generation as one of the most significant Volvo launches in years. Built on a new platform, it is available exclusively as a plug-in hybrid or fully electric, reflecting Volvo's commitment to electrification.",
        highlights: ["Available as T8 Recharge PHEV and fully electric", "New platform with updated interior and tech", "Three-row seating for up to seven passengers", "Ultra trim with full Bowers & Wilkins audio and air suspension"]
    },
    "volvo-ex30-2024": {
        name: "EX30", year: "2024", category: "Electric", brand: "Volvo",
        overview: "The 2024 Volvo EX30 is Volvo's smallest and most affordable electric car, punching well above its price point with a premium interior, impressive safety technology, and up to 298 miles of range. It became an instant hit upon launch as one of the most complete small EVs on the market.",
        highlights: ["Up to 298 miles of electric range", "Available in single and dual motor AWD variants", "Twin Motor Performance with 428 hp", "Smallest carbon footprint of any Volvo ever built"]
    },
    "volvo-ex40-2024": {
        name: "EX40", year: "2024", category: "Electric", brand: "Volvo",
        overview: "The 2024 Volvo EX40 is the fully electric version of the XC40, renamed to reflect its pure EV status. It shares its platform and body with the XC40 Recharge but gets updated branding and interior tweaks aligned with Volvo's new electric-focused design language.",
        highlights: ["Up to 335 miles of electric range", "Available as single and twin motor AWD", "Twin Motor with 408 hp combined output", "Google-based infotainment with wireless updates"]
    },
    "volvo-ex90-2025": {
        name: "EX90", year: "2025", category: "Electric", brand: "Volvo",
        overview: "The 2025 Volvo EX90 is Volvo's flagship all-electric SUV, replacing the XC90 as the brand's technological showcase. It features LiDAR and radar safety sensors, a stunning Scandinavian interior, and is designed from the ground up as an electric-first vehicle.",
        highlights: ["Up to 380 miles of electric range", "LiDAR sensor for enhanced safety and future autonomy", "Twin motor AWD with 510 hp", "Seven-seat configuration available"]
    },
    "volvo-c40-2024": {
        name: "C40 Recharge", year: "2024", category: "Electric", brand: "Volvo",
        overview: "The 2024 Volvo C40 Recharge is the coupe-SUV sibling of the XC40 Recharge, featuring a sloping roofline for added style. It shares its electric platform with the EX40 and offers a compelling blend of practicality and sportier aesthetics.",
        highlights: ["Up to 335 miles of electric range", "Coupe-SUV body with sloping roofline", "Available in single and twin motor AWD", "Google-based infotainment standard"]
    },
    "volvo-s60-recharge-2023": {
        name: "S60 Recharge", year: "2023", category: "Performance", brand: "Volvo",
        overview: "The 2023 Volvo S60 Recharge T8 is the performance flagship of the S60 range, combining a turbocharged and supercharged petrol engine with an electric motor for 455 hp. It offers genuine performance credentials wrapped in Volvo's signature understated styling.",
        highlights: ["455 hp combined from petrol engine and electric motor", "0-62 mph in 4.4 seconds", "AWD via electric rear axle", "Up to 41 miles of electric-only range"]
    },
    "volvo-xc60-recharge-2024": {
        name: "XC60 Recharge T8", year: "2024", category: "Performance", brand: "Volvo",
        overview: "The 2024 Volvo XC60 Recharge T8 is the high-performance plug-in hybrid variant of the XC60, delivering 455 hp and the ability to cover short journeys on electric power alone. It combines practical SUV versatility with performance car acceleration.",
        highlights: ["455 hp combined from petrol and electric motors", "0-62 mph in 4.9 seconds", "Up to 38 miles of electric-only range", "AWD via front petrol and rear electric motors"]
    }
};