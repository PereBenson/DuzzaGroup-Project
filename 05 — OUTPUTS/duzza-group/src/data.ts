export type Business = {
  title: string
  eyebrow: string
  description: string
  href: string
  status: 'active' | 'soon'
}

export type Service = {
  title: string
  description: string
  points: string[]
}

export type Showcase = Service & {
  id: string
  image: string
  label: string
  note?: string
}

export type EquipmentCategory = {
  id: string
  title: string
  description: string
  use: string
  enquiryLabel: string
  image: string
}

export type EquipmentQuestion = {
  name: string
  label: string
  type: 'text' | 'select' | 'textarea'
  options?: string[]
  placeholder?: string
}

export type EquipmentItem = {
  id: string
  categoryId: string
  name: string
  manufacturer: string
  image: string
  summary: string
  details: string[]
  specs: { label: string; value: string }[]
  credit: string
  source: string
  questions: EquipmentQuestion[]
}

export type BrandingProject = {
  id: string
  title: string
  category: string
  image: string
  summary: string
  brief: string
  executed: string[]
  results: string[]
  gallery: string[]
}

export type FormOption = {
  value: string
  label: string
  hint?: string
}

export type FormField = {
  name: string
  label: string
  type: 'text' | 'email' | 'phone' | 'textarea' | 'select' | 'file' | 'checkboxes' | 'date'
  required?: boolean
  full?: boolean
  placeholder?: string
  hint?: string
  options?: FormOption[]
  accept?: string
  maxSizeMB?: number
  prefillFromQuery?: string
}

export type FormConfig = {
  id: string
  eyebrow: string
  title: string
  intro: string
  nextStep: string
  fields: FormField[]
}

export const whatsapp = {
  enabled: false,
  href: '',
  number: '',
  label: 'Chat on WhatsApp',
  inactiveLabel: 'Chat on WhatsApp'
}

export const businesses: Business[] = [
  {
    title: 'DUZZA Projects',
    eyebrow: 'Engineering and field services',
    description: 'Project support across engineering, construction, oil and gas, marine survey, equipment hire and general supply.',
    href: '/businesses/projects/',
    status: 'active'
  },
  {
    title: 'DUZZA Branding',
    eyebrow: 'Brand and creative services',
    description: 'Identity systems, executive branding, websites, app design, UGC content, AI product imagery, photography and branded merchandise.',
    href: '/businesses/branding/',
    status: 'active'
  },
  {
    title: 'Fashion',
    eyebrow: 'Consumer direction in development',
    description: 'Boutique clothing, English and Ankara pieces, and customised branded apparel concepts.',
    href: '/businesses/fashion/',
    status: 'soon'
  },
  {
    title: 'Food',
    eyebrow: 'Consumer direction in development',
    description: 'Bakery, pastry, confectionery and eatery concepts taking shape for future release.',
    href: '/businesses/food/',
    status: 'soon'
  }
]

export const homeProjects: Showcase[] = [
  {
    id: 'engineering-construction',
    title: 'Engineering and construction',
    label: 'Built environment',
    image: '/assets/construction-team.webp',
    description: 'From site requirements to coordinated delivery, we shape practical support for engineering and construction work.',
    points: ['Scope and site requirements', 'Engineering support', 'Construction coordination', 'General supply where required']
  },
  {
    id: 'marine-survey',
    title: 'Marine and hydrographic survey',
    label: 'Survey and marine',
    image: '/assets/survey-vessel-fugro.webp',
    description: 'Survey coordination and hydro-spatial support for marine projects, with deliverables defined around the brief.',
    points: ['Survey scoping', 'Hydro-spatial coordination', 'Marine project support', 'Equipment requirement review']
  },
  {
    id: 'equipment-hire',
    title: 'Equipment hire and supply',
    label: 'Field-ready support',
    image: '/assets/side-scan-unit.webp',
    description: 'Requirements-led access to survey, positioning and marine support equipment, with each catalogue item clearly detailed.',
    points: ['Category selection', 'Exact equipment selection', 'Project-specific requirements', 'Procurement support']
  },
  {
    id: 'branding-creative',
    title: 'Brand and creative work',
    label: 'Identity and digital',
    image: '/assets/website-mockup.webp',
    description: 'Brand systems, digital products and campaign content designed to work together across every customer touchpoint.',
    points: ['Identity systems', 'Web and app design', 'Campaign content', 'Product photography']
  }
]

export const projectsServices: Service[] = [
  {
    title: 'Engineering and construction',
    description: 'Practical project support for built-environment work, from early requirements through coordination and handover.',
    points: ['Requirement review and scope definition', 'Engineering and site support', 'Construction coordination', 'General supply linked to the work']
  },
  {
    title: 'Oil and gas',
    description: 'Project and technical support for oil and gas-related requirements, with commercial detail agreed after scoping.',
    points: ['Project coordination', 'Technical support', 'Site and stakeholder liaison', 'Supply requirements where needed']
  },
  {
    title: 'Marine and hydrographic survey',
    description: 'Hydro-spatial and survey support shaped around project purpose, coverage, location and required outputs.',
    points: ['Survey scoping', 'Survey coordination', 'Marine project support', 'Deliverables defined in the brief']
  },
  {
    title: 'Equipment hire',
    description: 'Requirements-led selection of hydrographic navigation, positioning and marine survey support equipment.',
    points: ['Equipment category and model selection', 'Application and duration review', 'Mobilisation and support needs', 'Dedicated equipment enquiry route']
  },
  {
    title: 'General supply and procurement',
    description: 'Sourcing and supply support for project materials, merchandise and operational requirements.',
    points: ['Requirements gathering', 'Sourcing support', 'Merchandise trading', 'Project-linked supply coordination']
  }
]

export const surveyCapabilities: Service[] = [
  {
    title: 'Hydro-spatial support',
    description: 'Survey support organized around the purpose of the work, project location and the outputs your team needs.',
    points: ['Project scoping', 'Survey purpose and coverage review', 'Coordination with project stakeholders', 'Deliverables discussed per enquiry']
  },
  {
    title: 'Navigation and positioning equipment',
    description: 'Selection support for hydrographic navigation and positioning equipment, with requirements reviewed before any commitment.',
    points: ['Equipment category and model selection', 'Application and environment review', 'Duration and mobilisation needs', 'Dedicated equipment enquiry route']
  },
  {
    title: 'Procurement and supply',
    description: 'Support for general supply and merchandise trading requirements connected to marine and project work.',
    points: ['Sourcing requirements', 'Supply enquiries', 'Project coordination', 'Documentation where required']
  }
]

export const equipmentCategories: EquipmentCategory[] = [
  {
    id: 'hydrographic-navigation-equipment',
    title: 'Hydrographic navigation equipment',
    description: 'Multibeam echo sounders and side-scan sonar systems used to see, measure and interpret the seabed.',
    use: 'Bathymetry, seabed classification and navigation support.',
    enquiryLabel: 'Explore equipment catalogue',
    image: '/assets/equipment-odom-mb1.webp'
  },
  {
    id: 'positioning-equipment',
    title: 'Positioning equipment',
    description: 'GNSS, acoustic positioning and handheld navigation systems that anchor field data to dependable coordinates.',
    use: 'Survey positioning, vessel tracking and field navigation.',
    enquiryLabel: 'Explore equipment catalogue',
    image: '/assets/equipment-trimble-r980.webp'
  },
  {
    id: 'marine-survey-support-equipment',
    title: 'Marine survey support equipment',
    description: 'ROVs and uncrewed surface vessels that extend survey reach into difficult or repetitive marine environments.',
    use: 'Subsea inspection, surface data collection and remote survey support.',
    enquiryLabel: 'Explore equipment catalogue',
    image: '/assets/equipment-bluerov2.webp'
  },
  {
    id: 'procurement-and-general-supply',
    title: 'Procurement and general supply',
    description: 'Field-ready cases and practical equipment that keep instruments, tools and data protected on site.',
    use: 'Transport, protection and general project supply.',
    enquiryLabel: 'Explore equipment catalogue',
    image: '/assets/equipment-pelican-1510.webp'
  }
]

export const equipmentItems: EquipmentItem[] = [
  {
    id: 'teledyne-odom-mb1',
    categoryId: 'hydrographic-navigation-equipment',
    name: 'Teledyne Odom MB1 Multibeam Echo Sounder',
    manufacturer: 'Teledyne Odom Hydrographic',
    image: '/assets/equipment-odom-mb1.webp',
    summary: 'A compact multibeam system built for accurate swath bathymetry in shallow to moderate water depths.',
    details: [
      'Selectable swath coverage from 10° to 120° for different survey conditions.',
      'Up to 512 beams with phase and amplitude bottom detection.',
      'Titanium and acetal construction for marine working environments.',
      'Sounding capability to approximately 240 m at nadir.'
    ],
    specs: [
      { label: 'Beams', value: 'Up to 512' },
      { label: 'Swath', value: '10°–120° selectable' },
      { label: 'Depth', value: '≈240 m at nadir' },
      { label: 'Build', value: 'Titanium and acetal' }
    ],
    credit: 'Wikimedia Commons, CC BY-SA, Mredmayne',
    source: 'https://bluezonegroup.com.au/product-catalogue/ras/rov-subsea-equipment/sonars-rov-subsea-equipment/teledyne-odom-p/',
    questions: [
      { name: 'targetDepth', label: 'Target water depth', type: 'text', placeholder: 'e.g. 40 m' },
      { name: 'swathRequirement', label: 'Preferred swath coverage', type: 'select', options: ['10°–60°', '60°–120°', 'Review during scoping'] },
      { name: 'motionSensor', label: 'Motion sensor integration needs', type: 'textarea', placeholder: 'Describe existing motion or positioning systems' }
    ]
  },
  {
    id: 'odom-es3m',
    categoryId: 'hydrographic-navigation-equipment',
    name: 'Odom ES3M Multibeam Echo Sounder',
    manufacturer: 'Odom Hydrographic Systems / Teledyne Odom',
    image: '/assets/equipment-odom-es3m.webp',
    summary: 'An integrated multibeam and motion-sensing package for high-resolution shallow-water survey work.',
    details: [
      '240 kHz operating frequency for detailed shallow-water coverage.',
      '480 beams by default, with 240 or 120 beam modes.',
      'Nominal 120° × 3° transmit and receive swath.',
      'Integrates the ES3 multibeam with a Teledyne TSS DMS motion sensor.'
    ],
    specs: [
      { label: 'Frequency', value: '240 kHz' },
      { label: 'Beams', value: '480 default / 240 / 120' },
      { label: 'Swath', value: '120° × 3° nominal' },
      { label: 'Integration', value: 'Teledyne TSS DMS motion sensor' }
    ],
    credit: 'Wikimedia Commons, CC BY 3.0, Mredmayne',
    source: 'https://www.vhs-survey.com/_files/ugd/ea0c2f_3f2f48af7b7946bcbe9c8004f503eb06.pdf',
    questions: [
      { name: 'surveyDepth', label: 'Survey depth range', type: 'text', placeholder: 'e.g. 5–50 m' },
      { name: 'beamMode', label: 'Preferred beam mode', type: 'select', options: ['480 beams', '240 beams', '120 beams', 'Advise during scoping'] },
      { name: 'existingSensors', label: 'Existing sensors to integrate', type: 'textarea', placeholder: 'List motion, GNSS or sound velocity systems' }
    ]
  },
  {
    id: 'klein-system-3000',
    categoryId: 'hydrographic-navigation-equipment',
    name: 'Klein System 3000 Towfish',
    manufacturer: 'Klein Marine Systems',
    image: '/assets/equipment-klein-3000.webp',
    summary: 'A dual-frequency side-scan towfish used for seabed imaging, object detection and route surveys.',
    details: [
      'Dual-frequency operation at 100 kHz and 500 kHz.',
      '40° vertical beam angle.',
      '300 PSI pressure sensor.',
      '35 m Kevlar-reinforced tow cable with SonarPro logging workflow.'
    ],
    specs: [
      { label: 'Frequencies', value: '100 / 500 kHz' },
      { label: 'Vertical beam', value: '40°' },
      { label: 'Pressure sensor', value: '300 PSI' },
      { label: 'Tow cable', value: '35 m Kevlar-reinforced' }
    ],
    credit: 'NOAA Ocean Exploration, U.S. Government work',
    source: 'https://data.ngdc.noaa.gov/platforms/ocean/nos/DAPRs/S-A906-NRT5-12_DAPR.pdf',
    questions: [
      { name: 'frequency', label: 'Preferred operating frequency', type: 'select', options: ['100 kHz', '500 kHz', 'Both frequencies'] },
      { name: 'towLength', label: 'Tow cable length required', type: 'text', placeholder: 'e.g. 35 m' },
      { name: 'targets', label: 'Seabed targets or survey purpose', type: 'textarea', placeholder: 'Describe the object detection or classification need' }
    ]
  },
  {
    id: 'trimble-r980',
    categoryId: 'positioning-equipment',
    name: 'Trimble R980 GNSS System',
    manufacturer: 'Trimble',
    image: '/assets/equipment-trimble-r980.webp',
    summary: 'A multi-constellation GNSS receiver for high-accuracy RTK and correction-based positioning.',
    details: [
      '672 channels across GPS, GLONASS, Galileo, BeiDou, NavIC, QZSS and SBAS.',
      'RTK precision of 8 mm horizontal and 15 mm vertical.',
      'CenterPoint RTX precision of 2 cm horizontal and 3 cm vertical.',
      'Dual-band 450/900 MHz UHF radio, 4G LTE modem and 1.13 kg receiver weight.'
    ],
    specs: [
      { label: 'Channels', value: '672' },
      { label: 'RTK', value: '8 mm H / 15 mm V' },
      { label: 'Corrections', value: 'RTK, RTX, UHF, 4G' },
      { label: 'Weight', value: '1.13 kg' }
    ],
    credit: 'Wikimedia Commons, CC0, Best Tech Nick 25',
    source: 'https://geospatial.trimble.com/en/products/hardware/trimble-r980',
    questions: [
      { name: 'correctionSource', label: 'Correction source required', type: 'select', options: ['RTK base', 'CenterPoint RTX', 'PPP', 'Review during scoping'] },
      { name: 'connectivity', label: 'Connectivity needs', type: 'select', options: ['UHF radio', '4G LTE', 'Both', 'Advise during scoping'] },
      { name: 'tiltCompensation', label: 'Tilt compensation requirement', type: 'text', placeholder: 'Describe pole or instrument setup' }
    ]
  },
  {
    id: 'kongsberg-hipap-502',
    categoryId: 'positioning-equipment',
    name: 'Kongsberg HiPAP 502 Acoustic Positioning System',
    manufacturer: 'Kongsberg Maritime',
    image: '/assets/equipment-hipap.webp',
    summary: 'A high-precision USBL/SSBL acoustic positioning system for tracking subsea transponders and vehicles.',
    details: [
      'Medium-frequency operation from 21 to 31 kHz.',
      'Spherical transducer with 241 elements in the 500-series system.',
      'Angular accuracy of 0.06° at 20 dB signal-to-noise ratio.',
      'Typical maximum range of 2,000–5,000 m depending on transponder.'
    ],
    specs: [
      { label: 'Frequency', value: '21–31 kHz' },
      { label: 'Elements', value: '241' },
      { label: 'Angular accuracy', value: '0.06°' },
      { label: 'Typical range', value: '2,000–5,000 m' }
    ],
    credit: 'Wikimedia Commons, public domain, BoH',
    source: 'https://www.kongsberg.com/globalassets/kongsberg/1.-what-we-do/2.-ocean-space/6.-navigation--positioning/hipap/documents/400578f-hipap-pd.pdf',
    questions: [
      { name: 'trackingRange', label: 'Required tracking range', type: 'text', placeholder: 'e.g. 3,000 m' },
      { name: 'transponderCount', label: 'Number of transponders or beacons', type: 'text', placeholder: 'e.g. 4' },
      { name: 'vesselInterface', label: 'Vessel or vehicle interface', type: 'textarea', placeholder: 'Describe bridge, ROV or survey system integration' }
    ]
  },
  {
    id: 'garmin-gpsmap-64s',
    categoryId: 'positioning-equipment',
    name: 'Garmin GPSMAP 64s',
    manufacturer: 'Garmin',
    image: '/assets/equipment-garmin-64s.webp',
    summary: 'A rugged handheld GNSS navigator for field waypoints, route tracking and backup navigation.',
    details: [
      '2.6-inch sunlight-readable transflective colour display.',
      'High-sensitivity GPS and GLONASS receiver with quad-helix antenna.',
      '3-axis electronic compass and barometric altimeter.',
      'IPX7 water rating with up to 16 hours on two AA batteries.'
    ],
    specs: [
      { label: 'Display', value: '2.6-inch colour' },
      { label: 'Satellites', value: 'GPS + GLONASS' },
      { label: 'Water rating', value: 'IPX7' },
      { label: 'Battery', value: 'Up to 16 hours' }
    ],
    credit: 'Wikimedia Commons, CC BY-SA 4.0, Virgilinojuca',
    source: 'https://www8.garmin.com/manuals/webhelp/gpsmap64/EN-US/GUID-7FE46E77-6E7C-414B-AD42-9CDECBC5B048.html',
    questions: [
      { name: 'fieldUse', label: 'Primary field use', type: 'text', placeholder: 'e.g. waypoint navigation' },
      { name: 'mappingNeeds', label: 'Mapping or route data needed', type: 'textarea', placeholder: 'Describe maps, tracks or waypoint formats' },
      { name: 'batteryPreference', label: 'Power preference', type: 'select', options: ['AA batteries', 'Rechargeable kit', 'No preference'] }
    ]
  },
  {
    id: 'bluerov2',
    categoryId: 'marine-survey-support-equipment',
    name: 'Blue Robotics BlueROV2',
    manufacturer: 'Blue Robotics',
    image: '/assets/equipment-bluerov2.webp',
    summary: 'A compact remotely operated vehicle for inspection, observation and light subsea survey tasks.',
    details: [
      'Six-thruster vectored configuration, expandable to eight thrusters.',
      '1080p/30 fps tilt-mounted low-light camera.',
      'Depth rating of 100 m with acrylic enclosures or 300 m with aluminium enclosures.',
      'BlueOS onboard computer running open-source ArduSub.'
    ],
    specs: [
      { label: 'Thrusters', value: '6 vectored / 8 optional' },
      { label: 'Camera', value: '1080p/30 fps' },
      { label: 'Depth', value: '100 m / 300 m' },
      { label: 'Control', value: 'BlueOS, ArduSub, Cockpit' }
    ],
    credit: 'Wikimedia Commons, CC BY-SA 4.0, Yoleeth',
    source: 'https://bluerobotics.com/store/rov/bluerov2/',
    questions: [
      { name: 'operatingDepth', label: 'Required operating depth', type: 'select', options: ['Up to 100 m', '100–300 m', 'Review during scoping'] },
      { name: 'cameraPayload', label: 'Camera or sensor payload needs', type: 'textarea', placeholder: 'Describe imaging, lighting or sensor requirements' },
      { name: 'controlSetup', label: 'Preferred control setup', type: 'text', placeholder: 'e.g. laptop and gamepad' }
    ]
  },
  {
    id: 'saildrone-explorer',
    categoryId: 'marine-survey-support-equipment',
    name: 'Saildrone Explorer',
    manufacturer: 'Saildrone',
    image: '/assets/equipment-saildrone.webp',
    summary: 'A wind-and-solar powered uncrewed surface vessel built for long-duration ocean data collection.',
    details: [
      '7 m length, 5 m wing height and 2 m draft.',
      'Wind-powered propulsion with solar-powered sensors.',
      'More than 12 months endurance with effectively unlimited range.',
      'Carries meteorological and oceanographic sensor suites.'
    ],
    specs: [
      { label: 'Length', value: '7 m' },
      { label: 'Wing height', value: '5 m' },
      { label: 'Endurance', value: '12+ months' },
      { label: 'Speed', value: '1–3 knots average' }
    ],
    credit: 'U.S. Navy, public domain, MC2 Dawson Roth',
    source: 'https://www.saildrone.com/platform/explorer',
    questions: [
      { name: 'missionDuration', label: 'Mission duration', type: 'text', placeholder: 'e.g. 30 days' },
      { name: 'sensorSuite', label: 'Meteorological or oceanographic sensors', type: 'textarea', placeholder: 'List the data types to collect' },
      { name: 'operatingArea', label: 'Operating area', type: 'text', placeholder: 'Region or water body' }
    ]
  },
  {
    id: 'xocean-xo450',
    categoryId: 'marine-survey-support-equipment',
    name: 'XOCEAN XO-450 USV',
    manufacturer: 'XOCEAN',
    image: '/assets/equipment-xocean.webp',
    summary: 'A hybrid-powered uncrewed surface vessel designed for repeatable offshore hydrographic data collection.',
    details: [
      '4.5 m composite wave-piercing catamaran.',
      '750 kg displacement with up to 100 kg sensor payload.',
      'Solar deck, lithium-ion batteries and micro diesel generator.',
      '18-day endurance and approximately 1,512 nm range.'
    ],
    specs: [
      { label: 'Length', value: '4.5 m' },
      { label: 'Payload', value: 'Up to 100 kg' },
      { label: 'Endurance', value: '18 days' },
      { label: 'Range', value: '≈1,512 nm' }
    ],
    credit: 'Wikimedia Commons, CC BY-SA 4.0, Johnny Savage',
    source: 'https://www.sonardyne.com/unmanned-offshore-data-harvesting-in-the-north-sea/',
    questions: [
      { name: 'sensorPayload', label: 'Sensor payload to carry', type: 'textarea', placeholder: 'List sonar, GNSS or other payload items' },
      { name: 'surveyDuration', label: 'Planned survey duration', type: 'text', placeholder: 'e.g. 12 days' },
      { name: 'launchLocation', label: 'Launch and recovery location', type: 'text', placeholder: 'Port, beach or vessel' }
    ]
  },
  {
    id: 'pelican-1510',
    categoryId: 'procurement-and-general-supply',
    name: 'Pelican 1510 Protector Carry-On Case',
    manufacturer: 'Pelican Products',
    image: '/assets/equipment-pelican-1510.webp',
    summary: 'A watertight transport case for protecting instruments, cameras and field documentation in transit.',
    details: [
      'IP67 watertight, crushproof and dustproof construction.',
      'Polypropylene body with O-ring seal and pressure-equalisation valve.',
      'Exterior dimensions of 55.88 × 35.08 × 22.86 cm.',
      'Polyurethane wheels with stainless bearings.'
    ],
    specs: [
      { label: 'Rating', value: 'IP67' },
      { label: 'Exterior', value: '55.88 × 35.08 × 22.86 cm' },
      { label: 'Weight', value: '5.44 kg empty' },
      { label: 'Temperature', value: '−40 °C to 87 °C' }
    ],
    credit: 'Wikimedia Commons, CC BY 2.0, MIKI Yoshihito',
    source: 'https://www.pelican.com/us/en/product/cases/1510',
    questions: [
      { name: 'interiorLayout', label: 'Interior configuration needed', type: 'select', options: ['Foam', 'Padded divider', 'Custom insert', 'Advise during scoping'] },
      { name: 'itemsToProtect', label: 'Items to protect', type: 'textarea', placeholder: 'List instruments, cameras or documents' },
      { name: 'transportMode', label: 'Transport mode', type: 'select', options: ['Air travel', 'Vehicle', 'Vessel', 'Mixed'] }
    ]
  }
]

export const brandingProjects: BrandingProject[] = [
  {
    id: 'unified-identity-system',
    title: 'Unified identity for a multi-service operator',
    category: 'Brand Identity',
    image: '/assets/project-brand-identity.webp',
    summary: 'A complete visual language that brought a broad service portfolio into one recognisable system.',
    brief: 'The organisation had grown across several service lines and needed an identity that could hold them together without losing the character of each offer. The work started with positioning, audience clarity and a practical audit of every place the brand appeared.',
    executed: [
      'Positioning workshops and visual direction',
      'Wordmark, monogram and supporting graphic devices',
      'Typographic hierarchy, palette and layout rules',
      'Proposal, presentation and digital identity applications'
    ],
    results: [
      'A single identity language across services and touchpoints',
      'Clearer recognition in proposals, presentations and digital channels',
      'Reusable brand rules that made day-to-day application faster'
    ],
    gallery: ['/assets/project-brand-identity.webp', '/assets/branding-team.webp', '/assets/designer-studio.webp']
  },
  {
    id: 'service-website-experience',
    title: 'Website experience for a service-led business',
    category: 'Digital Experience',
    image: '/assets/ux-sketch.webp',
    summary: 'A responsive website structure built around real user journeys, clear service routes and useful enquiries.',
    brief: 'The existing digital presence did not make the service range easy to understand. The project focused on structure, content hierarchy and an enquiry journey that captured the right information from the first interaction.',
    executed: [
      'Information architecture and page hierarchy',
      'User journeys for businesses, services and enquiries',
      'Wireframes, interface design and responsive behaviour',
      'Content design, front-end delivery and cross-device QA'
    ],
    results: [
      'A clearer path from service discovery to enquiry',
      'Consistent page structure across every service area',
      'A responsive interface that reads well on desktop, tablet and mobile'
    ],
    gallery: ['/assets/ux-sketch.webp', '/assets/wireframe.webp', '/assets/creative-studio.webp']
  },
  {
    id: 'seasonal-campaign-system',
    title: 'Campaign system for a seasonal launch',
    category: 'Campaign & Content',
    image: '/assets/ugc-creator-2.webp',
    summary: 'A flexible campaign language that carried one idea across stills, motion and social formats.',
    brief: 'A seasonal launch needed a visual system that could move quickly across channels while keeping a consistent tone. The work began with a campaign idea, then translated it into a kit that could be used by internal and external teams.',
    executed: [
      'Campaign concept and key visual development',
      'Still and motion content direction',
      'Social, web and presentation adaptations',
      'Asset kit with usage notes and export formats'
    ],
    results: [
      'One recognisable campaign language across multiple channels',
      'A reusable library of launch assets',
      'Faster turnaround for follow-up content'
    ],
    gallery: ['/assets/ugc-creator-2.webp', '/assets/ugc-unboxing.webp', '/assets/ai-product.webp']
  },
  {
    id: 'product-image-library',
    title: 'Product image library for a consumer brand',
    category: 'Product Imagery',
    image: '/assets/product-imagery.webp',
    summary: 'A directed image library designed to make products feel clear, desirable and consistent everywhere they appear.',
    brief: 'The brand needed product imagery that could work across a website, social channels and campaign materials. The focus was on a repeatable direction rather than a one-off set of attractive images.',
    executed: [
      'Shot list and visual direction',
      'Studio and location image capture',
      'Retouching, colour consistency and channel-ready crops',
      'Image library structure and naming system'
    ],
    results: [
      'A consistent product image language across channels',
      'Reusable crops for web, social and campaign use',
      'A clearer visual story for the product range'
    ],
    gallery: ['/assets/product-imagery.webp', '/assets/ai-product.webp', '/assets/fashion-woman-ankara.webp']
  }
]

export const brandingServices: Service[] = [
  {
    title: 'Executive branding',
    description: 'Clear, credible identity systems for executives, founders and leadership teams.',
    points: ['Positioning and visual direction', 'Portrait and profile guidance', 'Branded collateral', 'Executive presence assets']
  },
  {
    title: 'Corporate and digital branding',
    description: 'Identity and digital design that holds together across web, social, presentations and print.',
    points: ['Identity systems and guidelines', 'Digital brand assets', 'Campaign visuals', 'Design systems for consistent use']
  },
  {
    title: 'Website design and development',
    description: 'Editorial, image-led websites designed for clarity, responsiveness and real content structures.',
    points: ['Information architecture', 'Wireframes and user journeys', 'Interface design', 'Responsive front-end development and QA']
  },
  {
    title: 'App and product design',
    description: 'Product interfaces shaped around tasks, content hierarchy and consistent interaction patterns.',
    points: ['Product discovery', 'User flows and wireframes', 'Interface systems', 'Interactive prototypes']
  },
  {
    title: 'UGC content',
    description: 'Creator-led video and stills built for social, launches and always-on brand content.',
    points: ['UGC direction and shot planning', 'Creator-style video and stills', 'Platform-ready edits and crops', 'Content calendars where required']
  },
  {
    title: 'AI product imagery',
    description: 'AI-assisted product and lifestyle visuals, art-directed and retouched for commercial use.',
    points: ['Product and scene direction', 'AI-assisted image development', 'Colour, retouching and clean-up', 'Web, social and campaign exports']
  },
  {
    title: 'Product photography',
    description: 'Image direction and product shoots for brands that need clean, useful commercial assets.',
    points: ['Shot planning', 'Studio or location direction', 'Retouching and exports', 'Web and social crops']
  },
  {
    title: 'Campaigns and sports/lifestyle creative',
    description: 'Campaign concepts and visual systems for launches, activations and lifestyle-led storytelling.',
    points: ['Campaign direction', 'Key visuals', 'Social and digital adaptations', 'Launch asset kits']
  },
  {
    title: 'Merchandising',
    description: 'Branded and customised items connected to a wider visual system.',
    points: ['Branded items', 'Customised pieces', 'Artwork preparation', 'Production support']
  }
]

export const processSteps: Service[] = [
  {
    title: 'Brief',
    description: 'Share the requirement, scope, location, timing and the outcome you need.',
    points: ['Enquiry form or conversation', 'Requirements reviewed', 'Questions captured early']
  },
  {
    title: 'Scope',
    description: 'The work, deliverables and commercial boundaries are defined around the brief.',
    points: ['Deliverables clarified', 'Assumptions checked', 'Next steps agreed']
  },
  {
    title: 'Deliver',
    description: 'Work is completed against the agreed scope with clear review points.',
    points: ['Progress updates', 'Review and refinement', 'Final handover']
  },
  {
    title: 'Support',
    description: 'Follow-up questions and future requirements are handled after delivery.',
    points: ['Feedback captured', 'Additional needs discussed', 'Long-term support where relevant']
  }
]

export const countryOptions: FormOption[] = [
  { value: 'NG', label: 'Nigeria' },
  { value: 'GH', label: 'Ghana' },
  { value: 'US', label: 'United States' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'AE', label: 'United Arab Emirates' },
  { value: 'ZA', label: 'South Africa' },
  { value: 'OTHER', label: 'Other' }
]

const serviceInterestOptions: FormOption[] = [
  { value: 'engineering', label: 'Engineering and construction' },
  { value: 'oil-gas', label: 'Oil and gas' },
  { value: 'marine-survey', label: 'Marine and hydrographic survey' },
  { value: 'equipment-hire', label: 'Equipment hire' },
  { value: 'general-supply', label: 'General supply and procurement' }
]

const brandingInterestOptions: FormOption[] = [
  { value: 'executive', label: 'Executive branding' },
  { value: 'corporate', label: 'Corporate and digital branding' },
  { value: 'website', label: 'Website design and development' },
  { value: 'app', label: 'App and product design' },
  { value: 'creative', label: 'Creative media and UGC' },
  { value: 'photography', label: 'Product photography' },
  { value: 'campaign', label: 'Campaign and sports/lifestyle creative' },
  { value: 'merchandising', label: 'Merchandising' },
  { value: 'other', label: 'Other' }
]

export const enquiryForms: Record<string, FormConfig> = {
  projects: {
    id: 'projects-enquiry',
    eyebrow: 'Projects enquiry',
    title: 'Request a project quote',
    intro: 'Tell us what you need and where the work is happening.',
    nextStep: 'Your enquiry has been prepared for review.',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true },
      { name: 'organisation', label: 'Organisation', type: 'text' },
      { name: 'email', label: 'Email address', type: 'email', required: true },
      { name: 'phone', label: 'Phone / WhatsApp', type: 'phone', required: true },
      { name: 'country', label: 'Country', type: 'select', required: true, options: countryOptions },
      { name: 'projectLocation', label: 'Project location', type: 'text', required: true },
      {
        name: 'serviceInterest',
        label: 'Service required',
        type: 'checkboxes',
        required: true,
        full: true,
        options: serviceInterestOptions
      },
      { name: 'timeline', label: 'Preferred start or timeline', type: 'text', required: true },
      { name: 'budgetRange', label: 'Budget range', type: 'text', hint: 'Optional' },
      { name: 'scope', label: 'Scope of work', type: 'textarea', required: true, full: true },
      { name: 'attachments', label: 'Scope documents', type: 'file', full: true, accept: '.pdf,.doc,.docx,.jpg,.jpeg,.png', maxSizeMB: 10, hint: 'PDF, Word or image files up to 10MB.' }
    ]
  },
  survey: {
    id: 'survey-enquiry',
    eyebrow: 'Survey enquiry',
    title: 'Discuss a marine survey requirement',
    intro: 'Share the survey purpose, location and outputs you need.',
    nextStep: 'Your survey enquiry has been prepared for review.',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true },
      { name: 'organisation', label: 'Organisation', type: 'text' },
      { name: 'email', label: 'Email address', type: 'email', required: true },
      { name: 'phone', label: 'Phone / WhatsApp', type: 'phone', required: true },
      { name: 'country', label: 'Country', type: 'select', required: true, options: countryOptions },
      { name: 'siteLocation', label: 'Survey location', type: 'text', required: true },
      { name: 'surveyType', label: 'Survey type or purpose', type: 'text', required: true },
      { name: 'coverage', label: 'Approximate area or coverage', type: 'text' },
      { name: 'deliverables', label: 'Required deliverables', type: 'textarea', required: true, full: true },
      { name: 'timeline', label: 'Timeline', type: 'text', required: true },
      { name: 'constraints', label: 'Site, vessel or access constraints', type: 'textarea', full: true },
      { name: 'attachments', label: 'Supporting files', type: 'file', full: true, accept: '.pdf,.doc,.docx,.jpg,.jpeg,.png', maxSizeMB: 10 }
    ]
  },
  equipment: {
    id: 'equipment-enquiry',
    eyebrow: 'Equipment enquiry',
    title: 'Request equipment hire information',
    intro: 'Choose the exact equipment you need and add the project details that shape the request.',
    nextStep: 'Your equipment request has been prepared for review.',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true },
      { name: 'organisation', label: 'Organisation', type: 'text' },
      { name: 'email', label: 'Email address', type: 'email', required: true },
      { name: 'phone', label: 'Phone / WhatsApp', type: 'phone', required: true },
      { name: 'country', label: 'Country', type: 'select', required: true, options: countryOptions },
      {
        name: 'equipment',
        label: 'Equipment category',
        type: 'select',
        required: true,
        prefillFromQuery: 'item',
        options: equipmentCategories.map((item) => ({ value: item.title, label: item.title }))
      },
      {
        name: 'equipmentModel',
        label: 'Equipment name',
        type: 'select',
        required: true,
        prefillFromQuery: 'model',
        options: equipmentItems.map((item) => ({ value: item.name, label: `${item.name} — ${item.manufacturer}` }))
      },
      { name: 'equipmentContext', label: 'Project-specific equipment details', type: 'textarea', full: true, hint: 'The fields below adapt to the equipment selected.' },
      { name: 'quantity', label: 'Quantity or systems required', type: 'text' },
      { name: 'application', label: 'Intended application', type: 'textarea', required: true, full: true },
      { name: 'location', label: 'Project location', type: 'text', required: true },
      { name: 'startDate', label: 'Hire start date', type: 'date' },
      { name: 'duration', label: 'Estimated duration', type: 'text' },
      { name: 'supportNeeds', label: 'Mobilisation, installation or support needs', type: 'textarea', full: true }
    ]
  },
  branding: {
    id: 'branding-enquiry',
    eyebrow: 'Branding brief',
    title: 'Start a branding project',
    intro: 'Tell us about the brand, the work needed and the outcome you want.',
    nextStep: 'Your branding brief has been prepared for review.',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true },
      { name: 'company', label: 'Company or agency', type: 'text' },
      { name: 'email', label: 'Email address', type: 'email', required: true },
      { name: 'phone', label: 'Phone / WhatsApp', type: 'phone', required: true },
      { name: 'country', label: 'Country', type: 'select', required: true, options: countryOptions },
      {
        name: 'services',
        label: 'Services required',
        type: 'checkboxes',
        required: true,
        full: true,
        options: brandingInterestOptions
      },
      { name: 'objective', label: 'Project objective', type: 'textarea', required: true, full: true },
      { name: 'deliverables', label: 'Deliverables needed', type: 'textarea', full: true },
      { name: 'audience', label: 'Target audience', type: 'text' },
      { name: 'channels', label: 'Platforms or channels', type: 'text' },
      { name: 'timeline', label: 'Timeline', type: 'text', required: true },
      { name: 'budgetRange', label: 'Budget range', type: 'text', hint: 'Optional' },
      { name: 'references', label: 'Reference links', type: 'text', full: true },
      { name: 'attachments', label: 'Brand assets or references', type: 'file', full: true, accept: '.pdf,.doc,.docx,.jpg,.jpeg,.png,.mp4', maxSizeMB: 10 }
    ]
  },
  general: {
    id: 'general-enquiry',
    eyebrow: 'General enquiry',
    title: 'Contact DUZZA GROUP',
    intro: 'Use this form for partnerships, press and questions that do not fit another route.',
    nextStep: 'Your message has been prepared for review.',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true },
      { name: 'organisation', label: 'Organisation', type: 'text' },
      { name: 'email', label: 'Email address', type: 'email', required: true },
      { name: 'phone', label: 'Phone / WhatsApp', type: 'phone', required: true },
      { name: 'country', label: 'Country', type: 'select', required: true, options: countryOptions },
      {
        name: 'enquiryType',
        label: 'Enquiry type',
        type: 'select',
        required: true,
        options: [
          { value: 'partnership', label: 'Partnership' },
          { value: 'press', label: 'Press' },
          { value: 'careers', label: 'Careers' },
          { value: 'other', label: 'Other' }
        ]
      },
      { name: 'message', label: 'Message', type: 'textarea', required: true, full: true }
    ]
  }
}

export const legalCopy: Record<string, { title: string; intro: string; sections: { heading: string; body: string }[] }> = {
  privacy: {
    title: 'Privacy notice',
    intro: 'This notice explains how information submitted through this website is handled.',
    sections: [
      { heading: 'Information submitted', body: 'Enquiry fields collect only the information needed to prepare a response. Enquiry details are prepared in the browser and are not stored by this website.' },
      { heading: 'Storage', body: 'This website does not store form submissions in a database or analytics tool.' },
      { heading: 'Before delivery integration', body: 'A final privacy notice will reflect the confirmed recipient systems, analytics, storage locations and retention periods.' }
    ]
  },
  terms: {
    title: 'Terms of use',
    intro: 'These terms cover the use of this website.',
    sections: [
      { heading: 'Website content', body: 'Content is maintained as approved business information, project evidence and portfolio material are supplied.' },
      { heading: 'Enquiries', body: 'Completing a form prepares an enquiry for review. It does not create a contract or confirm availability.' },
      { heading: 'External services', body: 'No email, payment or third-party account is required to browse this website.' }
    ]
  },
  cookies: {
    title: 'Cookie notice',
    intro: 'This website does not use analytics or advertising cookies.',
    sections: [
      { heading: 'Current state', body: 'The website does not set analytics, advertising or tracking cookies.' },
      { heading: 'Consent', body: 'If analytics, pixel tracking or embedded social content are introduced, cookie notices and consent controls will be updated to match.' }
    ]
  }
}

export const imageCredits = [
  { source: 'Wikimedia Commons', file: 'Construction workers at a site on Södra Hamngatan, Gothenburg.jpg', use: 'Engineering and construction imagery', url: 'https://commons.wikimedia.org/wiki/File:Construction_workers_at_a_site_on_S%C3%B6dra_Hamngatan,_Gothenburg.jpg' },
  { source: 'Wikimedia Commons', file: 'SV Fugro Gauss - IMO 7824883.jpg', use: 'Marine survey imagery', url: 'https://commons.wikimedia.org/wiki/File:SV_Fugro_Gauss_-_IMO_7824883.jpg' },
  { source: 'Wikimedia Commons', file: 'Wesseling Refinery at Dusk, March 2018.jpg', use: 'Oil and gas imagery', url: 'https://commons.wikimedia.org/wiki/File:Wesseling_Refinery_at_Dusk,_March_2018.jpg' },
  { source: 'Wikimedia Commons', file: 'Side Scan Sonar.jpg', use: 'Equipment and survey imagery', url: 'https://commons.wikimedia.org/wiki/File:Side_Scan_Sonar.jpg' },
  { source: 'Wikimedia Commons', file: 'Graphic designer Rafael Esquer in his New York design studio 2021.jpg', use: 'Branding studio imagery', url: 'https://commons.wikimedia.org/wiki/File:Graphic_designer_Rafael_Esquer_in-his-New-York-design-studio-2021.jpg' },
  { source: 'Wikimedia Commons', file: 'Rough mobile UX sketch.jpg', use: 'Digital design imagery', url: 'https://commons.wikimedia.org/wiki/File:Rough_mobile_UX_sketch.jpg' },
  { source: 'Wikimedia Commons', file: "'title of work' store interior.jpg", use: 'Fashion imagery', url: 'https://commons.wikimedia.org/wiki/File:%27title_of_work%27_store_interior.jpg' },
  { source: 'Wikimedia Commons', file: 'Pastries on display.jpg', use: 'Food imagery', url: 'https://commons.wikimedia.org/wiki/File:Pastries_on_display.jpg' },
  { source: 'Wikimedia Commons', file: 'A boardroom dialogue session at the 2011 Horasis Global Arab Business Meeting.jpg', use: 'About and corporate imagery', url: 'https://commons.wikimedia.org/wiki/File:A_boardroom_dialogue_session_at_the_2011_Horasis_Global_Arab_Business_Meeting_(6247249028).jpg' },
  { source: 'Wikimedia Commons', file: 'Container depot.jpg', use: 'Procurement and supply imagery', url: 'https://commons.wikimedia.org/wiki/File:Container_depot.jpg' },
  { source: 'Pexels', file: 'Pictures of Brand Strategy and Design (7598019)', use: 'Branding strategy hero imagery', url: 'https://www.pexels.com/photo/7598019/' },
  { source: 'Pexels', file: 'Office Team Having a Meeting in the Room (7495291)', use: 'About hero imagery', url: 'https://www.pexels.com/photo/7495291/' },
  { source: 'Pexels', file: 'Diverse team of African women collaborating in an office meeting (3869649)', use: 'About structure and team imagery', url: 'https://www.pexels.com/photo/3869649/' },
  { source: 'Pexels', file: 'Black female engineer at a construction site (8486920)', use: 'Projects team imagery', url: 'https://www.pexels.com/photo/8486920/' },
  { source: 'Pexels', file: 'African businessman working on a laptop in a modern office (34690061)', use: 'Branding team imagery', url: 'https://www.pexels.com/photo/34690061/' },
  { source: 'Pexels', file: 'African woman chef outdoors (30255515)', use: 'Food team imagery', url: 'https://www.pexels.com/photo/30255515/' },
  { source: 'Client-supplied references', file: 'Reference Images folder', use: 'Editorial and creative direction', url: '' }
]

export function getEquipmentCategory(id: string | null): EquipmentCategory | undefined {
  if (!id) return undefined
  return equipmentCategories.find((item) => item.id === id)
}

export function getEquipmentItems(categoryId: string | null): EquipmentItem[] {
  if (!categoryId) return []
  return equipmentItems.filter((item) => item.categoryId === categoryId)
}

export function getEquipmentItemByName(name: string | null): EquipmentItem | undefined {
  if (!name) return undefined
  return equipmentItems.find((item) => item.name === name)
}

export function getBrandingProject(id: string | null): BrandingProject | undefined {
  if (!id) return undefined
  return brandingProjects.find((item) => item.id === id)
}
