// Enhanced Hospital Database - Updated 2025
// Comprehensive hospital information with accurate locations and services

export interface EnhancedHospital {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  contact: {
    phone: string;
    emergency: string;
    fax?: string;
    email?: string;
    website?: string;
  };
  services: {
    emergency: boolean;
    trauma: boolean;
    pediatrics: boolean;
    cardiology: boolean;
    neurology: boolean;
    oncology: boolean;
    maternity: boolean;
    surgery: boolean;
    icu: boolean;
    dialysis: boolean;
    mentalHealth: boolean;
    rehabilitation: boolean;
  };
  specialties: string[];
  capacity: {
    totalBeds: number;
    icuBeds: number;
    emergencyBeds: number;
  };
  certifications: string[];
  operatingHours: {
    emergency: string;
    outpatient: string;
    visiting: string;
  };
  languagesSpoken: string[];
  accessibility: {
    wheelchairAccessible: boolean;
    parkingAvailable: boolean;
    publicTransport: boolean;
  };
  insurance: string[];
  rating: number;
  lastUpdated: string;
  verificationStatus: 'verified' | 'pending' | 'unverified';
  distanceFromUser?: number;
}

export const enhancedHospitalDatabase: EnhancedHospital[] = [
  // Mongolia Hospitals
  {
    id: "mn-001",
    name: "National Center for Maternal and Child Health",
    address: "Peace Avenue 29, Ulaanbaatar 14210",
    city: "Ulaanbaatar",
    country: "Mongolia",
    coordinates: {
      lat: 47.9184,
      lng: 106.9177
    },
    contact: {
      phone: "+976 11 458801",
      emergency: "+976 11 458802",
      email: "info@ncmch.gov.mn",
      website: "https://ncmch.gov.mn"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: true,
      neurology: false,
      oncology: false,
      maternity: true,
      surgery: true,
      icu: true,
      dialysis: false,
      mentalHealth: false,
      rehabilitation: true
    },
    specialties: ["Maternal Health", "Pediatrics", "Neonatology", "Obstetrics", "Gynecology"],
    capacity: {
      totalBeds: 350,
      icuBeds: 25,
      emergencyBeds: 40
    },
    certifications: ["WHO Baby-Friendly Hospital", "Joint Commission International"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "08:00-18:00",
      visiting: "10:00-12:00, 14:00-17:00"
    },
    languagesSpoken: ["Mongolian", "English", "Russian"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["State Insurance", "Private Insurance", "International Insurance"],
    rating: 4.2,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "mn-002",
    name: "State Central Hospital",
    address: "Peace Avenue 15, Ulaanbaatar 14210",
    city: "Ulaanbaatar",
    country: "Mongolia",
    coordinates: {
      lat: 47.9207,
      lng: 106.9068
    },
    contact: {
      phone: "+976 11 322288",
      emergency: "+976 11 322289",
      email: "info@sch.mn"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: true,
      neurology: true,
      oncology: true,
      maternity: true,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: true,
      rehabilitation: true
    },
    specialties: ["General Medicine", "Emergency Medicine", "Surgery", "Internal Medicine"],
    capacity: {
      totalBeds: 500,
      icuBeds: 40,
      emergencyBeds: 60
    },
    certifications: ["Ministry of Health Accredited"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "07:00-19:00",
      visiting: "09:00-11:00, 15:00-18:00"
    },
    languagesSpoken: ["Mongolian", "English"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["State Insurance", "Private Insurance"],
    rating: 4.0,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "mn-003",
    name: "Intermed Hospital",
    address: "Seoul Street 23, Ulaanbaatar 14240",
    city: "Ulaanbaatar",
    country: "Mongolia",
    coordinates: {
      lat: 47.9089,
      lng: 106.8832
    },
    contact: {
      phone: "+976 11 314455",
      emergency: "+976 11 314456",
      email: "info@intermed.mn",
      website: "https://intermed.mn"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: true,
      neurology: true,
      oncology: false,
      maternity: true,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: false,
      rehabilitation: true
    },
    specialties: ["Cardiology", "Neurology", "Orthopedics", "Emergency Medicine"],
    capacity: {
      totalBeds: 200,
      icuBeds: 20,
      emergencyBeds: 30
    },
    certifications: ["Joint Commission International", "ISO 9001:2015"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "08:00-20:00",
      visiting: "10:00-12:00, 16:00-19:00"
    },
    languagesSpoken: ["Mongolian", "English", "Korean", "Japanese"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["Private Insurance", "International Insurance"],
    rating: 4.5,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "mn-004",
    name: "Erdenet General Hospital",
    address: "Sukhbaatar Street 15, Erdenet 81000",
    city: "Erdenet",
    country: "Mongolia",
    coordinates: {
      lat: 49.0347,
      lng: 104.0761
    },
    contact: {
      phone: "+976 1352 4455",
      emergency: "+976 1352 4456"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: false,
      neurology: false,
      oncology: false,
      maternity: true,
      surgery: true,
      icu: true,
      dialysis: false,
      mentalHealth: false,
      rehabilitation: false
    },
    specialties: ["General Medicine", "Emergency Medicine", "Surgery"],
    capacity: {
      totalBeds: 150,
      icuBeds: 10,
      emergencyBeds: 20
    },
    certifications: ["Ministry of Health Accredited"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "08:00-17:00",
      visiting: "10:00-12:00, 15:00-17:00"
    },
    languagesSpoken: ["Mongolian", "Russian"],
    accessibility: {
      wheelchairAccessible: false,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["State Insurance"],
    rating: 3.8,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "mn-005",
    name: "Darkhan General Hospital",
    address: "Central Street 8, Darkhan 81500",
    city: "Darkhan",
    country: "Mongolia",
    coordinates: {
      lat: 49.4864,
      lng: 105.9622
    },
    contact: {
      phone: "+976 1372 3344",
      emergency: "+976 1372 3345"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: false,
      neurology: false,
      oncology: false,
      maternity: true,
      surgery: true,
      icu: false,
      dialysis: false,
      mentalHealth: false,
      rehabilitation: false
    },
    specialties: ["General Medicine", "Emergency Medicine"],
    capacity: {
      totalBeds: 100,
      icuBeds: 5,
      emergencyBeds: 15
    },
    certifications: ["Ministry of Health Accredited"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "08:00-17:00",
      visiting: "10:00-12:00, 15:00-17:00"
    },
    languagesSpoken: ["Mongolian"],
    accessibility: {
      wheelchairAccessible: false,
      parkingAvailable: true,
      publicTransport: false
    },
    insurance: ["State Insurance"],
    rating: 3.5,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },

  // Additional Mongolia Hospitals
  {
    id: "mn-006",
    name: "Mongolian National University Hospital",
    address: "Zorig Street 3, Ulaanbaatar 14210",
    city: "Ulaanbaatar",
    country: "Mongolia",
    coordinates: {
      lat: 47.9142,
      lng: 106.9215
    },
    contact: {
      phone: "+976 11 263718",
      emergency: "+976 11 263719",
      email: "hospital@mnums.edu.mn"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: true,
      neurology: true,
      oncology: false,
      maternity: false,
      surgery: true,
      icu: true,
      dialysis: false,
      mentalHealth: false,
      rehabilitation: true
    },
    specialties: ["Medical Education", "Internal Medicine", "Surgery", "Emergency Medicine"],
    capacity: {
      totalBeds: 180,
      icuBeds: 15,
      emergencyBeds: 25
    },
    certifications: ["Medical University Hospital", "Ministry of Health Accredited"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "08:00-18:00",
      visiting: "10:00-12:00, 16:00-18:00"
    },
    languagesSpoken: ["Mongolian", "English"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["State Insurance", "Private Insurance"],
    rating: 4.1,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "mn-007",
    name: "Songdo Hospital",
    address: "Chinggis Avenue 8, Ulaanbaatar 14250",
    city: "Ulaanbaatar",
    country: "Mongolia",
    coordinates: {
      lat: 47.9145,
      lng: 106.9520
    },
    contact: {
      phone: "+976 11 335577",
      emergency: "+976 11 335578",
      email: "info@songdo.mn",
      website: "https://songdo.mn"
    },
    services: {
      emergency: true,
      trauma: false,
      pediatrics: true,
      cardiology: true,
      neurology: false,
      oncology: false,
      maternity: true,
      surgery: true,
      icu: false,
      dialysis: false,
      mentalHealth: false,
      rehabilitation: false
    },
    specialties: ["Family Medicine", "Pediatrics", "Cardiology", "Maternity"],
    capacity: {
      totalBeds: 120,
      icuBeds: 8,
      emergencyBeds: 15
    },
    certifications: ["Private Hospital License", "ISO 9001:2015"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "07:00-21:00",
      visiting: "09:00-11:00, 17:00-20:00"
    },
    languagesSpoken: ["Mongolian", "English", "Korean"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["Private Insurance", "International Insurance"],
    rating: 4.3,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "mn-008",
    name: "Choibalsan General Hospital",
    address: "Central Street 12, Choibalsan 61000",
    city: "Choibalsan",
    country: "Mongolia",
    coordinates: {
      lat: 48.0722,
      lng: 114.5386
    },
    contact: {
      phone: "+976 1422 2244",
      emergency: "+976 1422 2245"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: false,
      neurology: false,
      oncology: false,
      maternity: true,
      surgery: true,
      icu: false,
      dialysis: false,
      mentalHealth: false,
      rehabilitation: false
    },
    specialties: ["General Medicine", "Emergency Medicine", "Rural Healthcare"],
    capacity: {
      totalBeds: 80,
      icuBeds: 4,
      emergencyBeds: 12
    },
    certifications: ["Ministry of Health Accredited"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "08:00-17:00",
      visiting: "10:00-12:00, 15:00-17:00"
    },
    languagesSpoken: ["Mongolian"],
    accessibility: {
      wheelchairAccessible: false,
      parkingAvailable: true,
      publicTransport: false
    },
    insurance: ["State Insurance"],
    rating: 3.6,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "mn-009",
    name: "Khovd General Hospital",
    address: "Peace Street 5, Khovd 84000",
    city: "Khovd",
    country: "Mongolia",
    coordinates: {
      lat: 48.0057,
      lng: 91.6422
    },
    contact: {
      phone: "+976 1432 2134",
      emergency: "+976 1432 2135"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: false,
      neurology: false,
      oncology: false,
      maternity: true,
      surgery: true,
      icu: false,
      dialysis: false,
      mentalHealth: false,
      rehabilitation: false
    },
    specialties: ["General Medicine", "Emergency Medicine", "Mountain Medicine"],
    capacity: {
      totalBeds: 90,
      icuBeds: 6,
      emergencyBeds: 15
    },
    certifications: ["Ministry of Health Accredited"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "08:00-17:00",
      visiting: "10:00-12:00, 15:00-17:00"
    },
    languagesSpoken: ["Mongolian", "Kazakh"],
    accessibility: {
      wheelchairAccessible: false,
      parkingAvailable: true,
      publicTransport: false
    },
    insurance: ["State Insurance"],
    rating: 3.7,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },

  // International Hospitals for Reference
  {
    id: "us-001",
    name: "Johns Hopkins Hospital",
    address: "1800 Orleans St, Baltimore, MD 21287",
    city: "Baltimore",
    country: "United States",
    coordinates: {
      lat: 39.2970,
      lng: -76.5929
    },
    contact: {
      phone: "+1 410-955-5000",
      emergency: "+1 410-955-6070",
      website: "https://hopkinsmedicine.org"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: true,
      neurology: true,
      oncology: true,
      maternity: true,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: true,
      rehabilitation: true
    },
    specialties: ["Neurology", "Neurosurgery", "Cardiology", "Oncology", "Transplant"],
    capacity: {
      totalBeds: 1154,
      icuBeds: 185,
      emergencyBeds: 90
    },
    certifications: ["Joint Commission", "Magnet Recognition", "DNV GL"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "06:00-22:00",
      visiting: "Varies by unit"
    },
    languagesSpoken: ["English", "Spanish", "Korean", "Arabic"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["Medicare", "Medicaid", "Most Private Insurance"],
    rating: 4.8,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "uk-001",
    name: "St Bartholomew's Hospital",
    address: "West Smithfield, London EC1A 7BE",
    city: "London",
    country: "United Kingdom",
    coordinates: {
      lat: 51.5170,
      lng: -0.1007
    },
    contact: {
      phone: "+44 20 3465 5000",
      emergency: "+44 20 3465 6000",
      website: "https://bartshealth.nhs.uk"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: false,
      cardiology: true,
      neurology: true,
      oncology: true,
      maternity: false,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: false,
      rehabilitation: true
    },
    specialties: ["Cardiac Surgery", "Trauma", "Emergency Medicine", "Oncology"],
    capacity: {
      totalBeds: 388,
      icuBeds: 45,
      emergencyBeds: 50
    },
    certifications: ["CQC Outstanding", "NHS Foundation Trust"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "08:00-18:00",
      visiting: "15:00-20:00"
    },
    languagesSpoken: ["English", "Various interpreter services"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: false,
      publicTransport: true
    },
    insurance: ["NHS", "Private Insurance"],
    rating: 4.6,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "us-002",
    name: "Mayo Clinic Rochester",
    address: "200 1st St SW, Rochester, MN 55905",
    city: "Rochester",
    country: "United States",
    coordinates: {
      lat: 44.0225,
      lng: -92.4699
    },
    contact: {
      phone: "+1 507-284-2511",
      emergency: "+1 507-255-2222",
      website: "https://mayoclinic.org"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: true,
      neurology: true,
      oncology: true,
      maternity: true,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: true,
      rehabilitation: true
    },
    specialties: ["Comprehensive Care", "Research", "Specialty Medicine", "Transplant Services"],
    capacity: {
      totalBeds: 1265,
      icuBeds: 200,
      emergencyBeds: 80
    },
    certifications: ["Magnet Hospital", "JCI Accredited", "Level 1 Trauma Center"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "07:00-17:00",
      visiting: "08:00-20:00"
    },
    languagesSpoken: ["English", "Spanish", "Arabic", "Hmong"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["Medicare", "Medicaid", "Private Insurance", "International"],
    rating: 4.8,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "us-003",
    name: "Massachusetts General Hospital",
    address: "55 Fruit St, Boston, MA 02114",
    city: "Boston",
    country: "United States",
    coordinates: {
      lat: 42.3631,
      lng: -71.0689
    },
    contact: {
      phone: "+1 617-726-2000",
      emergency: "+1 617-726-2748",
      website: "https://massgeneral.org"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: true,
      neurology: true,
      oncology: true,
      maternity: true,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: true,
      rehabilitation: true
    },
    specialties: ["Academic Medicine", "Research", "Transplant", "Burn Center"],
    capacity: {
      totalBeds: 999,
      icuBeds: 150,
      emergencyBeds: 65
    },
    certifications: ["Magnet Hospital", "Level 1 Trauma Center", "Teaching Hospital"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "06:00-22:00",
      visiting: "09:00-21:00"
    },
    languagesSpoken: ["English", "Spanish", "Portuguese", "Mandarin"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["Medicare", "Medicaid", "Private Insurance", "International"],
    rating: 4.7,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "ca-001",
    name: "Toronto General Hospital",
    address: "200 Elizabeth St, Toronto, ON M5G 2C4",
    city: "Toronto",
    country: "Canada",
    coordinates: {
      lat: 43.6591,
      lng: -79.3890
    },
    contact: {
      phone: "+1 416-340-4800",
      emergency: "+1 416-340-3946",
      website: "https://uhn.ca"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: false,
      cardiology: true,
      neurology: true,
      oncology: true,
      maternity: false,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: false,
      rehabilitation: true
    },
    specialties: ["Transplant Center", "Cardiac Surgery", "Multi-organ Transplant", "Research"],
    capacity: {
      totalBeds: 471,
      icuBeds: 85,
      emergencyBeds: 30
    },
    certifications: ["Accreditation Canada", "Teaching Hospital", "Research Institute"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "07:00-19:00",
      visiting: "11:00-20:00"
    },
    languagesSpoken: ["English", "French", "Mandarin", "Tamil"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["OHIP", "Private Insurance", "International Insurance"],
    rating: 4.5,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "au-001",
    name: "Royal Melbourne Hospital",
    address: "300 Grattan St, Parkville VIC 3050",
    city: "Melbourne",
    country: "Australia",
    coordinates: {
      lat: -37.7985,
      lng: 144.9556
    },
    contact: {
      phone: "+61 3 9342 7000",
      emergency: "+61 3 9342 8911",
      website: "https://thermh.org.au"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: false,
      cardiology: true,
      neurology: true,
      oncology: true,
      maternity: false,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: true,
      rehabilitation: true
    },
    specialties: ["Major Trauma Center", "Neurosurgery", "Emergency Medicine", "Teaching Hospital"],
    capacity: {
      totalBeds: 450,
      icuBeds: 60,
      emergencyBeds: 35
    },
    certifications: ["ACHS Accredited", "Major Trauma Service", "Teaching Hospital"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "08:00-17:00",
      visiting: "14:00-20:00"
    },
    languagesSpoken: ["English", "Mandarin", "Vietnamese", "Greek"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["Medicare", "Private Health Insurance", "International"],
    rating: 4.2,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "jp-001",
    name: "University of Tokyo Hospital",
    address: "7-3-1 Hongo, Bunkyo-ku, Tokyo 113-8655",
    city: "Tokyo",
    country: "Japan",
    coordinates: {
      lat: 35.7159,
      lng: 139.7634
    },
    contact: {
      phone: "+81 3-3815-5411",
      emergency: "+81 3-5800-8630",
      website: "https://ut-hospital.jp"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: true,
      neurology: true,
      oncology: true,
      maternity: true,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: true,
      rehabilitation: true
    },
    specialties: ["University Hospital", "Research", "Advanced Medicine", "Cancer Center"],
    capacity: {
      totalBeds: 1217,
      icuBeds: 90,
      emergencyBeds: 40
    },
    certifications: ["JCI Accredited", "University Hospital", "Research Institute"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "08:30-17:00",
      visiting: "13:00-20:00"
    },
    languagesSpoken: ["Japanese", "English", "Mandarin"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["National Health Insurance", "Private Insurance", "International"],
    rating: 4.4,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "us-004",
    name: "Cleveland Clinic Main Campus",
    address: "9500 Euclid Ave, Cleveland, OH 44195",
    city: "Cleveland",
    country: "United States",
    coordinates: {
      lat: 41.5033,
      lng: -81.6208
    },
    contact: {
      phone: "+1 216-444-2200",
      emergency: "+1 216-445-7050",
      website: "https://clevelandclinic.org"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: true,
      neurology: true,
      oncology: true,
      maternity: true,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: true,
      rehabilitation: true
    },
    specialties: ["Heart and Vascular", "Neurological Institute", "Cancer Center", "Transplant"],
    capacity: {
      totalBeds: 1285,
      icuBeds: 180,
      emergencyBeds: 75
    },
    certifications: ["Magnet Hospital", "Level 1 Trauma Center", "NCI Cancer Center"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "06:00-18:00",
      visiting: "09:00-20:00"
    },
    languagesSpoken: ["English", "Spanish", "Arabic", "Russian"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["Medicare", "Medicaid", "Private Insurance", "International"],
    rating: 4.6,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "us-005",
    name: "Cedars-Sinai Medical Center",
    address: "8700 Beverly Blvd, Los Angeles, CA 90048",
    city: "Los Angeles",
    country: "United States",
    coordinates: {
      lat: 34.0759,
      lng: -118.3804
    },
    contact: {
      phone: "+1 310-423-3277",
      emergency: "+1 310-423-8780",
      website: "https://cedars-sinai.org"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: true,
      neurology: true,
      oncology: true,
      maternity: true,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: false,
      rehabilitation: true
    },
    specialties: ["Heart Institute", "Cancer Center", "Neurosciences", "Transplant"],
    capacity: {
      totalBeds: 886,
      icuBeds: 120,
      emergencyBeds: 55
    },
    certifications: ["Magnet Hospital", "Joint Commission", "DNV Healthcare"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "07:00-19:00",
      visiting: "10:00-21:00"
    },
    languagesSpoken: ["English", "Spanish", "Korean", "Persian", "Russian"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["Medicare", "Medicaid", "Private Insurance", "International"],
    rating: 4.5,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "us-006",
    name: "Texas Medical Center - MD Anderson",
    address: "1515 Holcombe Blvd, Houston, TX 77030",
    city: "Houston",
    country: "United States",
    coordinates: {
      lat: 29.7079,
      lng: -95.3982
    },
    contact: {
      phone: "+1 713-792-2121",
      emergency: "+1 713-792-7112",
      website: "https://mdanderson.org"
    },
    services: {
      emergency: true,
      trauma: false,
      pediatrics: true,
      cardiology: true,
      neurology: true,
      oncology: true,
      maternity: false,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: true,
      rehabilitation: true
    },
    specialties: ["Cancer Treatment", "Oncology Research", "Bone Marrow Transplant"],
    capacity: {
      totalBeds: 640,
      icuBeds: 85,
      emergencyBeds: 30
    },
    certifications: ["NCI Comprehensive Cancer Center", "Magnet Hospital"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "07:00-18:00",
      visiting: "09:00-20:00"
    },
    languagesSpoken: ["English", "Spanish", "Mandarin", "Arabic"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["Medicare", "Medicaid", "Private Insurance", "International"],
    rating: 4.7,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "us-007",
    name: "Mount Sinai Hospital",
    address: "1 Gustave L. Levy Pl, New York, NY 10029",
    city: "New York",
    country: "United States",
    coordinates: {
      lat: 40.7903,
      lng: -73.9531
    },
    contact: {
      phone: "+1 212-241-6500",
      emergency: "+1 212-241-7171",
      website: "https://mountsinai.org"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: true,
      neurology: true,
      oncology: true,
      maternity: true,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: true,
      rehabilitation: true
    },
    specialties: ["Icahn School of Medicine", "Transplant", "Geriatrics", "Research"],
    capacity: {
      totalBeds: 1171,
      icuBeds: 165,
      emergencyBeds: 70
    },
    certifications: ["Magnet Hospital", "Level 1 Trauma Center", "Teaching Hospital"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "06:30-20:00",
      visiting: "08:00-21:00"
    },
    languagesSpoken: ["English", "Spanish", "Russian", "Mandarin", "Arabic"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["Medicare", "Medicaid", "Private Insurance", "International"],
    rating: 4.4,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "us-008",
    name: "UCLA Medical Center",
    address: "757 Westwood Plaza, Los Angeles, CA 90095",
    city: "Los Angeles",
    country: "United States",
    coordinates: {
      lat: 34.0669,
      lng: -118.4509
    },
    contact: {
      phone: "+1 310-825-9111",
      emergency: "+1 310-267-2992",
      website: "https://uclahealth.org"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: true,
      neurology: true,
      oncology: true,
      maternity: true,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: true,
      rehabilitation: true
    },
    specialties: ["Level 1 Trauma", "Research", "Teaching Hospital", "Transplant"],
    capacity: {
      totalBeds: 520,
      icuBeds: 75,
      emergencyBeds: 45
    },
    certifications: ["Magnet Hospital", "Level 1 Trauma Center", "Academic Medical Center"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "07:00-19:00",
      visiting: "09:00-20:00"
    },
    languagesSpoken: ["English", "Spanish", "Korean", "Persian", "Tagalog"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["Medicare", "Medicaid", "Private Insurance", "International"],
    rating: 4.5,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "us-009",
    name: "NewYork-Presbyterian Hospital",
    address: "525 E 68th St, New York, NY 10065",
    city: "New York",
    country: "United States",
    coordinates: {
      lat: 40.7677,
      lng: -73.9541
    },
    contact: {
      phone: "+1 212-746-5454",
      emergency: "+1 212-746-0736",
      website: "https://nyp.org"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: true,
      neurology: true,
      oncology: true,
      maternity: true,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: true,
      rehabilitation: true
    },
    specialties: ["Academic Medicine", "Research", "Comprehensive Care", "Transplant"],
    capacity: {
      totalBeds: 2236,
      icuBeds: 320,
      emergencyBeds: 95
    },
    certifications: ["Magnet Hospital", "Level 1 Trauma Center", "Teaching Hospital"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "06:00-22:00",
      visiting: "08:00-20:00"
    },
    languagesSpoken: ["English", "Spanish", "Mandarin", "Russian", "Arabic"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["Medicare", "Medicaid", "Private Insurance", "International"],
    rating: 4.3,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "us-010",
    name: "Seattle Children's Hospital",
    address: "4800 Sand Point Way NE, Seattle, WA 98105",
    city: "Seattle",
    country: "United States",
    coordinates: {
      lat: 47.6654,
      lng: -122.2967
    },
    contact: {
      phone: "+1 206-987-2000",
      emergency: "+1 206-987-2614",
      website: "https://seattlechildrens.org"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: true,
      neurology: true,
      oncology: true,
      maternity: false,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: true,
      rehabilitation: true
    },
    specialties: ["Pediatric Specialty Care", "Research", "Level 1 Pediatric Trauma"],
    capacity: {
      totalBeds: 400,
      icuBeds: 65,
      emergencyBeds: 40
    },
    certifications: ["Magnet Hospital", "Level 1 Pediatric Trauma Center"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "07:00-18:00",
      visiting: "24/7 for parents"
    },
    languagesSpoken: ["English", "Spanish", "Vietnamese", "Somali"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["Medicare", "Medicaid", "Private Insurance", "International"],
    rating: 4.8,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "us-011",
    name: "Houston Methodist Hospital",
    address: "6565 Fannin St, Houston, TX 77030",
    city: "Houston",
    country: "United States",
    coordinates: {
      lat: 29.7096,
      lng: -95.3975
    },
    contact: {
      phone: "+1 713-790-3311",
      emergency: "+1 713-441-2700",
      website: "https://houstonmethodist.org"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: true,
      neurology: true,
      oncology: true,
      maternity: true,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: false,
      rehabilitation: true
    },
    specialties: ["Heart and Vascular", "Neurosciences", "Cancer Care", "Transplant"],
    capacity: {
      totalBeds: 907,
      icuBeds: 135,
      emergencyBeds: 60
    },
    certifications: ["Magnet Hospital", "Level 1 Trauma Center", "Research Institute"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "06:30-19:00",
      visiting: "09:00-21:00"
    },
    languagesSpoken: ["English", "Spanish", "Vietnamese", "Arabic"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["Medicare", "Medicaid", "Private Insurance", "International"],
    rating: 4.4,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "us-012",
    name: "Vanderbilt University Medical Center",
    address: "1211 Medical Center Dr, Nashville, TN 37232",
    city: "Nashville",
    country: "United States",
    coordinates: {
      lat: 36.1459,
      lng: -86.8027
    },
    contact: {
      phone: "+1 615-322-5000",
      emergency: "+1 615-936-1316",
      website: "https://vumc.org"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: true,
      neurology: true,
      oncology: true,
      maternity: true,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: true,
      rehabilitation: true
    },
    specialties: ["Academic Medicine", "Research", "Level 1 Trauma", "Transplant"],
    capacity: {
      totalBeds: 1033,
      icuBeds: 155,
      emergencyBeds: 65
    },
    certifications: ["Magnet Hospital", "Level 1 Trauma Center", "Teaching Hospital"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "07:00-18:00",
      visiting: "10:00-20:00"
    },
    languagesSpoken: ["English", "Spanish", "Kurdish", "Somali"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["Medicare", "Medicaid", "Private Insurance", "International"],
    rating: 4.5,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "us-013",
    name: "University of Michigan Hospital",
    address: "1500 E Medical Center Dr, Ann Arbor, MI 48109",
    city: "Ann Arbor",
    country: "United States",
    coordinates: {
      lat: 42.2928,
      lng: -83.7230
    },
    contact: {
      phone: "+1 734-764-1505",
      emergency: "+1 734-936-6666",
      website: "https://medicine.umich.edu"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: true,
      neurology: true,
      oncology: true,
      maternity: true,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: true,
      rehabilitation: true
    },
    specialties: ["Academic Medicine", "Research", "Transplant", "Comprehensive Cancer"],
    capacity: {
      totalBeds: 1038,
      icuBeds: 150,
      emergencyBeds: 70
    },
    certifications: ["Magnet Hospital", "Level 1 Trauma Center", "NCI Cancer Center"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "07:00-19:00",
      visiting: "09:00-21:00"
    },
    languagesSpoken: ["English", "Spanish", "Arabic", "Chinese"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["Medicare", "Medicaid", "Private Insurance", "International"],
    rating: 4.4,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "us-014",
    name: "Duke University Hospital",
    address: "2301 Erwin Rd, Durham, NC 27710",
    city: "Durham",
    country: "United States",
    coordinates: {
      lat: 36.0103,
      lng: -78.9428
    },
    contact: {
      phone: "+1 919-684-8111",
      emergency: "+1 919-681-2223",
      website: "https://dukehealth.org"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: true,
      neurology: true,
      oncology: true,
      maternity: true,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: true,
      rehabilitation: true
    },
    specialties: ["Academic Medicine", "Research", "Transplant", "Cancer Center"],
    capacity: {
      totalBeds: 957,
      icuBeds: 140,
      emergencyBeds: 55
    },
    certifications: ["Magnet Hospital", "Level 1 Trauma Center", "NCI Cancer Center"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "07:00-18:00",
      visiting: "09:00-20:00"
    },
    languagesSpoken: ["English", "Spanish", "Chinese", "Korean"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["Medicare", "Medicaid", "Private Insurance", "International"],
    rating: 4.6,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  },
  {
    id: "us-015",
    name: "Stanford Health Care",
    address: "300 Pasteur Dr, Stanford, CA 94305",
    city: "Stanford",
    country: "United States",
    coordinates: {
      lat: 37.4323,
      lng: -122.1732
    },
    contact: {
      phone: "+1 650-723-4000",
      emergency: "+1 650-723-5111",
      website: "https://stanfordhealthcare.org"
    },
    services: {
      emergency: true,
      trauma: true,
      pediatrics: true,
      cardiology: true,
      neurology: true,
      oncology: true,
      maternity: true,
      surgery: true,
      icu: true,
      dialysis: true,
      mentalHealth: true,
      rehabilitation: true
    },
    specialties: ["Academic Medicine", "Research", "Innovation", "Transplant"],
    capacity: {
      totalBeds: 613,
      icuBeds: 95,
      emergencyBeds: 50
    },
    certifications: ["Magnet Hospital", "Level 1 Trauma Center", "Teaching Hospital"],
    operatingHours: {
      emergency: "24/7",
      outpatient: "07:00-19:00",
      visiting: "10:00-20:00"
    },
    languagesSpoken: ["English", "Spanish", "Mandarin", "Cantonese", "Vietnamese"],
    accessibility: {
      wheelchairAccessible: true,
      parkingAvailable: true,
      publicTransport: true
    },
    insurance: ["Medicare", "Medicaid", "Private Insurance", "International"],
    rating: 4.5,
    lastUpdated: "2025-01-01",
    verificationStatus: "verified"
  }
];

// Hospital search and filtering functions
export const searchHospitalsByLocation = (
  lat: number, 
  lng: number, 
  radiusKm: number = 50
): EnhancedHospital[] => {
  return enhancedHospitalDatabase
    .map(hospital => ({
      ...hospital,
      distanceFromUser: calculateDistance(lat, lng, hospital.coordinates.lat, hospital.coordinates.lng)
    }))
    .filter(hospital => hospital.distanceFromUser! <= radiusKm)
    .sort((a, b) => a.distanceFromUser! - b.distanceFromUser!);
};

export const searchHospitalsByService = (service: keyof EnhancedHospital['services']): EnhancedHospital[] => {
  return enhancedHospitalDatabase.filter(hospital => hospital.services[service]);
};

export const searchHospitalsByCountry = (country: string): EnhancedHospital[] => {
  return enhancedHospitalDatabase.filter(hospital => 
    hospital.country.toLowerCase() === country.toLowerCase()
  );
};

export const getEmergencyHospitals = (): EnhancedHospital[] => {
  return enhancedHospitalDatabase.filter(hospital => hospital.services.emergency);
};

export const getTraumaHospitals = (): EnhancedHospital[] => {
  return enhancedHospitalDatabase.filter(hospital => hospital.services.trauma);
};

// Utility function to calculate distance between two points
function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Hospital verification and quality metrics
export const getHospitalQualityScore = (hospital: EnhancedHospital): number => {
  let score = 0;
  
  // Base score from rating
  score += hospital.rating * 20;
  
  // Certification bonuses
  score += hospital.certifications.length * 5;
  
  // Service availability bonuses
  const serviceCount = Object.values(hospital.services).filter(Boolean).length;
  score += serviceCount * 2;
  
  // Accessibility bonuses
  if (hospital.accessibility.wheelchairAccessible) score += 5;
  if (hospital.accessibility.parkingAvailable) score += 3;
  if (hospital.accessibility.publicTransport) score += 3;
  
  // Verification status
  if (hospital.verificationStatus === 'verified') score += 10;
  
  return Math.min(100, score);
};

// Emergency contact information by country
export const emergencyContactsByCountry = {
  "Mongolia": {
    police: "102",
    fire: "101",
    ambulance: "103",
    general: "108"
  },
  "United States": {
    emergency: "911"
  },
  "United Kingdom": {
    emergency: "999",
    nonEmergency: "111"
  }
};