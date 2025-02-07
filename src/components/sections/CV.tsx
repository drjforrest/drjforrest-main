"use client";

import { Building2, GraduationCap, BookOpen, Award, Binary } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { type CVEntryProps, type PublicationEntry, type AwardEntry, type SkillCategory } from "@/types/cv";

function CVEntry({ title, organization, period, description, index }: CVEntryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-surface-elevated/95 backdrop-blur mb-8 hover:elevation-2 transition-all duration-300">
        <CardContent>
          <h3 className="text-xl font-semibold text-content">{title}</h3>
          <div className="text-primary mb-2">{organization}</div>
          <div className="text-sm text-content-muted mb-2">{period}</div>
          <p className="text-content-muted">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function PublicationCard({ title, journal, year, citation, doi, impact }: PublicationEntry) {
  return (
    <Card className="bg-surface-elevated/95 backdrop-blur mb-6 hover:elevation-2 transition-all duration-300">
      <CardContent>
        <h4 className="text-lg font-medium text-content">{title}</h4>
        <div className="text-primary italic mb-2">{journal}</div>
        <div className="text-sm text-content-muted mb-2">{year}</div>
        <p className="text-content-muted text-sm">{citation}</p>
        {doi && (
          <a 
            href={`https://doi.org/${doi}`}
            target="_blank"
            rel="noopener noreferrer" 
            className="text-primary hover:underline text-sm mt-2 inline-block"
          >
            DOI: {doi}
          </a>
        )}
        {impact && (
          <div className="text-sm text-content-muted mt-2">
            Impact Factor: {impact}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function AwardCard({ title, organization, year, amount, description }: AwardEntry) {
  return (
    <Card className="bg-surface-elevated/95 backdrop-blur mb-6 hover:elevation-2 transition-all duration-300">
      <CardContent>
        <h4 className="text-lg font-medium text-content">{title}</h4>
        <div className="text-primary mb-1">{organization}</div>
        <div className="text-sm text-content-muted mb-2">{year}</div>
        {amount && (
          <div className="text-sm font-medium text-primary mb-2">{amount}</div>
        )}
        <p className="text-content-muted">{description}</p>
      </CardContent>
    </Card>
  );
}

function SkillsCard({ name, skills }: SkillCategory) {
  return (
    <Card className="bg-surface-elevated/95 backdrop-blur mb-6 hover:elevation-2 transition-all duration-300">
      <CardContent>
        <h4 className="text-lg font-medium text-content mb-4">{name}</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function CV() {
  const experience = [
    {
      title: "Research & Strategy Lead",
      organization: "Purpose Africa – Addis Ababa, Ethiopia | Vancouver, Canada (Remote)",
      period: "2023 - Present",
      description: "Leading strategic planning, resource mobilization, and results framework for pan-African clinical research and data science capacity-development initiative led by African country partners.",
    },
    {
      title: "Chief Partnerships Officer",
      organization: "Platform Life Sciences - Vancouver, Canada",
      period: "2021 - 2023",
      description: "Led strategic partnership expansion of the TOGETHER adaptive platform clinical trial for COVID-19 therapeutics.",
    },
    {
      title: "Director of Global Health Strategy",
      organization: "Cytel - Vancouver, Canada",
      period: "2019 - 2020",
      description: "Developed & implement strategic initiatives in clinical research with partners in East Africa, South Africa, and Brazil.",
    },
    {
      title: "Managing Director, East Africa",
      organization: "MTEK Sciences - Kigali, Rwanda",
      period: "2017 - 2020",
      description: "Expanded business operations into East Africa, delivering technical guidance & critical resources to government and implementing partners for initiatives optimizing data use for evidence-based decision-making.",
    },
  ];
  
  const education = [
    {
      title: "Ph.D. in Population & Public Health",
      organization: "University of British Columbia, Faculty of Medicine",
      period: "2017 - 2021",
      description: "Doctoral research on health and social networking technologies in harder-to-reach populations.",
    },
    {
      title: "M.P.H. in Global Health",
      organization: "Simon Fraser University, Faculty of Health Sciences",
      period: "2007 - 2009",
      description: "Practicum partnership with the Perinatal HIV Research Institute in Soweto, South Africa.",
    },
    {
      title: "B.Sc. in Microbiology",
      organization: "University of Guelph",
      period: "2003 - 2007",
      description: "Focus on molecular biology and immunology.",
    }
  ];

  const publications: PublicationEntry[] = [
    {
      title: "Resilient clinical trial infrastructure in response to the COVID-19 pandemic",
      journal: "American Journal of Hygiene and Tropical Medicine",
      year: "2022",
      citation: "Forrest et al. (2022). Resilient clinical trial infrastructure in response to the COVID-19 pandemic: Lessons learned from the TOGETHER randomized platform clinical trial. Am J Hyg Trop Med, 106(4), 1423-1431.",
      doi: "10.1093/ajhtm/example",
      impact: "5.432"
    },
    {
      title: "Effect of early treatment with fluvoxamine on risk of emergency care and hospitalization among patients with COVID-19",
      journal: "Lancet Global Health",
      year: "2021",
      citation: "Forrest et al. (2021). Effect of early treatment with fluvoxamine on risk of emergency care and hospitalization among patients with COVID-19. Lancet Glob Health, 9(12), e1741-e1750.",
      doi: "10.1016/example",
      impact: "26.763"
    }
  ];

  const awards: AwardEntry[] = [
    {
      title: "Clinton Global Initiative University Fellowship",
      organization: "Clinton Foundation",
      year: "2017",
      description: "Selected for leadership in global health partnerships and innovative approaches to health system strengthening."
    },
    {
      title: "Gates Foundation Global Health Research Grant",
      organization: "Bill & Melinda Gates Foundation",
      year: "2014",
      amount: "$1.5M",
      description: "Led a project on health data interoperability in Rwanda, focusing on maternal and child health outcomes."
    }
  ];

  const skills: SkillCategory[] = [
    {
      name: "Research Methods",
      skills: ["Clinical Trials", "Mixed Methods", "Epidemiology", "Biostatistics", "Qualitative Research"]
    },
    {
      name: "Technical Skills",
      skills: ["R", "Python", "SQL", "STATA", "REDCap", "DHIS2", "Data Visualization"]
    },
    {
      name: "Areas of Expertise",
      skills: ["Global Health", "Clinical Research", "Digital Health", "Health Systems", "Capacity Building"]
    }
  ];

  return (
    <section className="w-full py-20" id="cv">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-surface-elevated/95 backdrop-blur mb-12">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-16">Professional Experience & Education</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Professional Experience Column */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-primary" />
                    Professional Experience
                  </h3>
                  {experience.map((entry, index) => (
                    <CVEntry key={entry.title} {...entry} index={index} />
                  ))}
                </div>
                
                {/* Education Column */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    Education
                  </h3>
                  <div className="space-y-8">
                    {education.map((entry, index) => (
                      <CVEntry 
                        key={entry.title} 
                        {...entry} 
                        index={index + experience.length}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Publications Section */}
          <Card className="bg-surface-elevated/95 backdrop-blur mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                Selected Publications
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {publications.map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <PublicationCard {...pub} />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Awards & Grants Section */}
          <Card className="bg-surface-elevated/95 backdrop-blur mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Awards & Grants
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <AwardCard {...award} />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skills & Expertise Section */}
          <Card className="bg-surface-elevated/95 backdrop-blur">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Binary className="w-6 h-6 text-primary" />
                Skills & Expertise
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {skills.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <SkillsCard {...category} />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
