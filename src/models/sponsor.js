import api from "../utils/api";

export const getAllSponsor = () => {
  return api.get("/sponsor/all");
}