type Gender = "male" | "female";
type Status = "active" | "inactive";

type User = {
  id: number;
  name: string;
  email: string;
  gender: Gender;
  status: Status;
};

type CreateUser = {
  name: string;
  email: string;
  gender: Gender;
  status: Status;
};
