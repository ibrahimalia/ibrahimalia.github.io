import { ReactNode } from "react";

interface IColorNavbar {
  id: number;
  icon: ReactNode;
  color: string;
  url: string;
}
interface IModal {
  children: ReactNode;
  className?: string;
  hideOverlay?: boolean;
  onConfirm?: () => void;
}

interface ModalResult {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

interface IHome {
  texts: string[];
  name: string;
  personal_image: string;
  email: string;
  linkedIn: string;
  gitLap: string;
  cv: string;
}
interface IMe {
  title: string;
  description: string;
  projects_info: {
    total_project: number;
    finished_project: number;
    under_development: number;
    years_experience: number;
  };
  experience: { position: string; company: string }[];
  certificate: { name: string; source: string; link?: string }[];
}

interface ISkills {
  rate: number;
  name: string;
  color: string;
}

interface IProjects {
  id: number;
  name: string;
  short_description: string;
  link: string;
  main_image: string;
  images: string[];
  languages: ReactNode[];
}

export { IColorNavbar, IModal, ModalResult, IHome, IMe, ISkills, IProjects };
