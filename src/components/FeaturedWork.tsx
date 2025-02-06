"use client";

import { ProjectCarousel } from "@/components/ui/project-carousel";

const projects = [
  {
    title: "The Momentum Health Study",
    period: "2011 - 2015",
    image: "/projects/momentum-health.png",
    description: "Canada's largest gay men's health study, investigating the social and behavioral factors influencing HIV transmission and prevention among gay, bisexual, and other men who have sex with men in Vancouver.",
    expandedDescription: "Led the coordination of this groundbreaking cohort study as its first project coordinator, managing complex data collection, participant engagement, and stakeholder relationships. The study integrated biological testing with comprehensive behavioral and social network data collection to understand the evolving HIV epidemic among urban gay men.",
    impact: "The study's findings directly informed HIV prevention strategies in British Columbia and provided the foundation for my doctoral research on the role of social networking technologies in sexual health. Research outputs contributed to policy changes in HIV testing frequency recommendations and PrEP implementation guidelines.",
    link: "https://www.momentumstudy.ca"
  },
  {
    title: "Global Fund Program Evaluations",
    period: "2016 - 2018",
    image: "/projects/global-fund.png",
    description: "Co-led comprehensive evaluations of HIV, TB, and Malaria program service delivery in Guyana, Haiti, and Cameroon, focusing on key population access and program effectiveness.",
    expandedDescription: "Conducted in-depth assessments of national health programs supported by the Global Fund, examining service delivery models, access barriers, and program outcomes. The evaluations involved extensive stakeholder engagement, data analysis, and field visits to understand implementation challenges and opportunities.",
    impact: "Evaluation findings led to significant improvements in program design and implementation, resulting in enhanced service delivery for key populations. Recommendations were incorporated into subsequent funding cycles and national strategic plans."
  },
  {
    title: "Rwanda Health Analytics Platform",
    period: "2017 - 2019",
    image: "/projects/rwanda-health.png",
    description: "Led the development and implementation of a Gates Foundation-funded data visualization platform integrating multiple health data sources to facilitate evidence-based decision-making in Rwanda.",
    expandedDescription: "Directed the technical development and stakeholder engagement process for this innovative platform, which unified disparate health data sources into a comprehensive analytics tool. The project involved close collaboration with the Ministry of Health and local health facilities to ensure relevance and sustainability.",
    impact: "The platform transformed Rwanda's health data ecosystem, enabling real-time monitoring of health indicators and improved resource allocation. It continues to support evidence-based policy making at the national level."
  },
  {
    title: "TOGETHER Trial",
    period: "2020 - 2022",
    image: "/projects/together-trial.png",
    description: "Contributed to the adaptive platform randomized clinical trial for COVID-19 therapeutics in Brazil, evaluating multiple treatment options including Fluvoxamine and Interferon Lambda.",
    expandedDescription: "The trial pioneered an adaptive platform design that allowed for rapid evaluation of multiple COVID-19 treatments while maintaining rigorous scientific standards. This innovative approach enabled faster identification of effective treatments during the pandemic.",
    impact: "The trial's findings on Fluvoxamine and Interferon Lambda provided crucial evidence for COVID-19 treatment options, particularly in resource-limited settings. Results were published in leading medical journals and influenced treatment guidelines.",
    link: "https://www.togethertrial.com"
  },
  {
    title: "ACTIVATE Africa Initiative",
    period: "2023 - Present",
    image: "/projects/activate-africa.png",
    description: "An ongoing partnership initiative working with governments, industry, and academia to build sustainable capacity for clinical research and data science across Africa.",
    expandedDescription: "This collaborative project aims to strengthen the foundation for clinical research and data science capabilities within African institutions. The initiative focuses on sustainable capacity development through partnership-based approaches and local ownership.",
    impact: "While still in its early stages, the initiative has established key partnerships and begun developing frameworks for long-term capacity building in clinical research and data science across participating African countries."
  }
];

export function FeaturedWork() {
  return (
    <section className="py-20" id="work">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold">Project Highlights</h2>
          <p className="text-content-muted max-w-2xl mx-auto">
            A selection of impactful research and public health initiatives spanning global health, 
            clinical trials, and data science innovation.
          </p>
        </div>
        
        <ProjectCarousel projects={projects} />
      </div>
    </section>
  );
}