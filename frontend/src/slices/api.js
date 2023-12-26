export const url = "https://e-commerce-ylbo.onrender.com/api";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
      "Access-Control-Allow-Origin": "*"
    },
  };

  return headers;
};
