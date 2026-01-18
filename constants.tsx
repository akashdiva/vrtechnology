
import React from 'react';
import { 
  Settings, 
  Wind, 
  Droplets, 
  Wrench, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Package, 
  Users, 
  Factory,
  CheckCircle2,
  HardHat,
  Zap,
  Leaf
} from 'lucide-react';
import { NavItem, ServiceItem, GalleryItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Asset Lifecycle', href: '#lifecycle' },
  { label: 'Allied Services', href: '#allied' },
  { label: 'Contact', href: '#contact' },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    title: 'Dry Cooling Solutions',
    description: 'Specializing in ACHE, AFC, FFC,ACC and APH systems with high thermal performance and energy efficiency.',
    icon: <Wind className="w-8 h-8 text-blue-500" />,
    tags: ['AIR COOLED HEAT EXCHANGER', 'AIR FIN COOLER', 'FIN FAN COOLER', 'AIR COOLED CONDENSER','AIR PRE HEATERS']
  },
  {
    title: 'Projects & Field Services',
    description: 'End-to-end EPC solutions including design support modular assembly, subcontracting services on-site fabrication , and installation of Dry Cooling Heat Exchangers (ACHE, APH, and ACC).',
    icon: <Settings className="w-8 h-8 text-blue-500" />,
    tags: ['DESIGN SUPPORT', 'PROJECT MANAGEMENT', 'INSTALLATION','COMMISSIONING','SHUTDOWNS']
  },
  {
    title: 'Maintenance & Overhauls',
    description: 'Precision maintenance of rotating equipment including fans, motors, gearboxes, and vibration analysis.',
    icon: <Wrench className="w-8 h-8 text-blue-500" />,
    tags: ['Overhaul', 'Alignment', 'Dynamic Balancing']
  },
  {
    title: 'Performance Audits',
    description: 'Data-driven on-site energy audits and CFD modeling to identify bottlenecks and optimize thermal processes.',
    icon: <Activity className="w-8 h-8 text-blue-500" />,
    tags: ['Energy Audit', 'CFD Modeling', 'Analysis']
  },
  {
    title: 'Inspection & Testing',
    description: 'Comprehensive NDT services (RT, UT, MPT, DPT) to ASNT Level II standards for asset integrity.',
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
    tags: ['NDT', 'ASNT LEVEL II', 'ASSET INTEGRITY']
  },
  {
    title: 'OEM Spares',
    description: 'Comprehensive supply of OEM and OEM-equivalent components ensuring system compatibility and long service life.',
    icon: <Package className="w-8 h-8 text-blue-500" />,
    tags: ['TUBEBUNDLE PLUGS & GASKETS','FAN HUBS,BLADES & ACCESSORIES','V & TIMING PULLEYS','V & TIMING BELTS','BEARINGS','LOUVER SPARES', 'HALF-TUBE SUPPORTS','FIN COMPONENTS','INSTRUMENTS','FASTENERS']
  }
];

export const INDUSTRIES = [
  { name: 'Oil & Gas', image: '/oil-gas.jpg' },
  { name: 'Refinery', image: '/Refinery-plant.jpg' },
  { name: 'Petrochemical', image: '/petrochemical.jpg' },
  { name: 'Steel Plants', image: '/steelplants.jpg' },
  { name: 'Power Sector', image: '/power-sector.jpg' },
  { name: 'LNG Terminals', image: '/building.jpg' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { title: 'Forced Draft Air Fin Cooler', category: 'DRY COOLING', imageUrl: 'fourth.jpeg' },
  { title: 'Induced Draft Air Fin Cooler', category: 'DRY COOLING', imageUrl: 'air-fin.jpg' },
  { title: 'Offshore Air Fin Cooler', category: 'DRY COOLING', imageUrl: 'offshore.jpg' },
  { title: 'Steel Plant Fin Fan Cooler', category: 'DRY COOLING', imageUrl: 'first.jpeg' },
  { title: 'Engine Air Cooler', category: 'DRY COOLING', imageUrl: 'third.jpeg' },
  { title: 'Closed Loop Air Cooler', category: 'DRY COOLING', imageUrl: 'closed-loop.jpg' },
      { title: 'Rotating Equipment Maintenance', category: 'MAINTENANCE', imageUrl: 'rotating-equipment.jpeg' },
       { title: 'Motor & Gearbox Overhaul', category:'MAINTENANCE' , imageUrl: 'motor.jpeg' },
        { title: 'Fan Assembly work', category:'MAINTENANCE' , imageUrl: 'fan-assembly.jpeg' },
        { title: 'NDT Inspection Services', category: 'INSPECTION', imageUrl: 'ndt-inspection.jpeg' },
        { title: 'Quality Testing', category:'INSPECTION' , imageUrl: 'quality-testing.jpeg' },
        { title:'Asset Integrity Check', category: 'INSPECTION', imageUrl: 'asset-integrity.jpeg' },
        { title:'PEB Godown Structure', category: 'STRUCTURAL STEEL', imageUrl: '/steel.jpg' },
        { title:'PEB Office Building', category: 'STRUCTURAL STEEL', imageUrl: '/building.jpg' },
        { title:'Industrial shed', category: 'STRUCTURAL STEEL', imageUrl: '/shed.jpg' },
];

export const ALLIED_SERVICES = [
  {
    title: "Industrial Fabrications",
    desc: "Expertise in fabrication of bellow Expansion Joints (CS/SS),pressure parts,skid modules,and all types of equipment.",
    image: "/fan-assembly.jpeg",
  },
  {
    title: "Structural Steel",
    desc: "All kinds of steel structural works and PEB solutions for warehouses and factories with customized engineering. Expertise in all kinds of industrial shed sheeting works.",
    image: "/steel.jpg",
  },
  {
    title: "Piping Works",
    desc: "All kinds of piping works, including high-pressure piping modifications and fire-fighting system installation.",
    image: "/motor.jpeg",
  },
  {
    title: "Technical Staffing & Manpower Supply",
    desc: "Specialized supply AFC/ACC field engineers, Supervisors, Fabricators, Millwrights, Stuctural fitters, and skilled Welders (TTS,TIG, MIG, SAW,and ARC), Grinders, Riggers and Helpers.",
    image: "/staff.jpeg",
  },
];
