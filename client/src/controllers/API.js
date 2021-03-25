// ======== refactor to include error and status state
const API = {
  fetch: async (url, body, token) => {
    try {
      const fetchParams = {
        method: "GET",
      };
      if (body) {
        fetchParams.method = "POST";
        fetchParams.body = JSON.stringify(body);
        fetchParams.headers = {
          "Content-Type": "application/json",
          // "Authorization": "Bearer " + token,
          Authorization: token,
        };
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
  fetchGetToken: async (url, token) => {
    try {
      const fetchParams = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": "Bearer " + token,
          Authorization: token,
        },
      };
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
