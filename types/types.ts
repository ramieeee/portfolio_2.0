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
    skills: string[];
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
    skills: [];
    description: string;
  };
};
