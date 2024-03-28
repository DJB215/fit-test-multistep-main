export type User = {
  name: string;
  campusKey: string;
  accessLevel: string;
  location: string;
};

export const data = [
  {
    name: "John Doe",
    campusKey: "amc006",
    accessLevel: "Admin",
    location: "Abington",
  },
  {
    name: "Jane Doe",
    campusKey: "bns004",
    accessLevel: "General",
    location: "Bucks, Cherry Hill",
  },
  {
    name: "Bruce Wayne",
    campusKey: "bxb010",
    accessLevel: "General",
    location: "Bucks, Cherry Hill",
  },
];
