export type Location = {
  location: string;
  room: string;
  testers: number;
  startTime: string;
  endTime: string;
  weekend: string;
};

export const data = [
  {
    location: "Abington",
    room: "10th Floor, Suite 1001",
    testers: 2,
    startTime: "7 AM",
    endTime: "5 PM",
    weekend: "Yes",
  },
  {
    location: "Bucks",
    room: "1st Floor, Room 2",
    testers: 4,
    startTime: "7 AM",
    endTime: "7 PM",
    weekend: "No",
  },
  {
    location: "Cherry Hill",
    room: "7th Floor, Room 3",
    testers: 2,
    startTime: "5 AM",
    endTime: "5 PM",
    weekend: "Yes",
  },
];
