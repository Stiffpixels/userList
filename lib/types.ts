export type User = {
  id: number;
  createdAt: Date;
  avatar: string;
  Bio: string;
  jobTitle: string;
  profile: {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
  };
};
