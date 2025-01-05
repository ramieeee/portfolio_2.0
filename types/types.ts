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
