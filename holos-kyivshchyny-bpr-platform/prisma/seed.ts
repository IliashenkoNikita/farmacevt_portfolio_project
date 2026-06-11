import { demoData } from "../src/lib/constants/demo-data";
console.log(
  JSON.stringify(
    {
      users: demoData.users.map((user) => user.email),
      events: demoData.events.map((event) => event.title),
      certificates: demoData.certificates.map((item) => item.certificateNumber),
    },
    null,
    2,
  ),
);
