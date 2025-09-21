export type CareerDataType = {
  id: number;
  company: {
    name: string;
    position: string;
    location: string;
  };
  time: {
    from: {
      year: number;
      month: number;
      day: number;
    };
    until: {
      now: boolean;
      year: number;
      month: number;
      day: number;
    };
  };
  career: {
    role: string;
    skills: string;
    description: string;
  };
};

export type EducationDataType = {
  id: number;
  university: {
    name: string;
    location: string;
  };
  time: {
    from: {
      year: number;
      month: number;
    };
    until: {
      now: boolean;
      year: number;
      month: number;
    };
  };
  education: {
    degree: string;
    status: string;
    major: string;
    skills: string;
    description: string;
  };
};

export type ProjectDataType = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  thumbnail: string[];
  organization: string;
  time: {
    from: {
      year: number;
      month: number;
      day: number;
    };
    until: {
      now: boolean;
      year: number;
      month: number;
      day: number;
    };
  };
  description: string;
  descriptionPartial: { image: string | null; text: string }[];
  skills: string[];
  contribution: string[];
  url: string;
};
