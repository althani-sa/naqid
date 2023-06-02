export interface GlobalProps {
  isArabic: boolean;
  screenWidth: number;
}

export interface AgendaDetail {
  days: string;
  title: string;
}

export interface ProgramDetail {
  icon: string;
  whiteIcon: string;
  title: string;
  subTitle: string;
  brief: string;
}

export interface Person {
  name: string;
  image: string;
  noBg?: boolean;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface HomepageProps {
  landingSupportingText: string;
  landingImage: string;
  aboutUsText: string;
  aboutUsSections: string[];
  goalsHeadline: string;
  goalsText: string;
  targetHeadline: string;
  targetText: string;
  durationHeadline: string;
  durationText: string;
  agendaHeadline: string;
  agendaText: string;
  agendaDetails: AgendaDetail[];
  conditionsHeadline: string;
  conditions: string[];
  conditionsImage: string;
  programSectionsHeadline: string;
  programSections: string[];
  programDetailsHeadline: string;
  programDetailsText: string;
  programDetails: ProgramDetail[];
  programOutputsHeadline: string;
  programOutputsText: string;
  committeeHeadline: string;
  committeeMembers: Person[];
  trainersTeamHeadline: string;
  trainersTeam: Person[];
  reviewersHeadline: string;
  reviewers: string[];
  cretiqueClerksHeadline: string;
  cretiqueClerks: string[];
  profileClerksHeadline: string;
  profileClerks: string[];
  faqsHeadline: string;
  faqs: Faq[];
}
