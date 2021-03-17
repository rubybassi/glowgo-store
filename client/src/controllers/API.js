// ======== refactor to include error and status state
const API = {
  fetch: async (url) => {
    const response = await fetch(url);
    if (response.ok) {
      const payload = await response.json();
      return payload;
    }
    return [];
  }
};

export default API;
