const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://crud-livid-beta.vercel.app/"
    : "http://localhost:3000";

export default BASE_URL;
