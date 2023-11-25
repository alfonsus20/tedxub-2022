import ticketMocks from "../mocks/ticket-list.json";

export const getAllTicket = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ticketMocks);
    }, 1500);
  });
};
