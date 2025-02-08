import { Education, Award, Certification } from '@/types/publications';

export const educationData: Education[] = [
  {
    degree: "PhD, Population & Public Health",
    institution: "University of British Columbia",
    location: "Vancouver, Canada",
    period: "2013 - 2021",
    focus: "Digital Health & Population Studies"
  },
  {
    degree: "MPH, Global Health",
    institution: "Simon Fraser University",
    location: "Burnaby, Canada",
    period: "2007 - 2009",
    focus: "Global Health Systems"
  },
  {
    degree: "BSc, Microbiology",
    institution: "University of Guelph",
    location: "Guelph, Canada",
    period: "2003 - 2007",
    focus: "Molecular Biology"
  }
];

export const certifications: Certification[] = [
  {
    title: "Leadership & Partnership Development in Global Health",
    organization: "Clinton Global University, Clinton Health Access Initiative"
  },
  {
    title: "Project Management for Health Research",
    organization: "Vancouver Coastal Health"
  },
  {
    title: "Collaborative Scientific Writing in Global Health Research",
    organization: "Grand Challenges"
  }
];

export const awards: Award[] = [
  {
    title: "David Sackett Clinical Trial of the Year Award",
    organization: "Society for Clinical Trials",
    year: "2021",
    description: "For the investigative team of the TOGETHER Trial"
  }
];