import api from "../utils/api";

export const getAllTicket = () => {
  return api.get("/ticket");
}