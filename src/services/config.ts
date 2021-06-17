const devBaseURL = "";
const proBaseURL = "";

export const BASE_URL =
  import.meta.env.MODE === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;
