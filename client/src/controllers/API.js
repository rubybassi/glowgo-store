// ======== refactor to include error and status state
const API = {
  fetch: async (url, body) => {
    try {
      const fetchParams = {
        method: "GET",
      };
      if (body) {
        fetchParams.method = "POST";
        fetchParams.body = JSON.stringify(body);
        fetchParams.headers = { " Content-Type": "application/json" };
      }
      const response = await fetch(url, fetchParams);
      if (response.ok) {
        const payload = await response.json();
        return payload;
      }
    } catch (error) {
      throw error;
    }
  },
};

export default API;
