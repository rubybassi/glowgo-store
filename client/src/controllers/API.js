// ======== refactor to include error and status state
const API = {
  fetch: async (url) => {
    try {
      const response = await fetch(url);
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
