import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

const options = {
  ignoreHeaders: true
};

const client = applyCaseMiddleware(
  axios.create({
    baseURL: "https://api.rainforestapi.com"
  }),
  options
);

// Get All Data
async function fetchData(dataSource) {
  try {
    const res = await client.get(dataSource);
    const dataJSON = await res.data();
    console.log("dataJSON DATA:", dataJSON);

    if (dataJSON) {
      return await { data: dataJSON, error: false };
    }
  } catch (error) {
    return { data: false, error: error.message };
  }
}

// Add

// Update

// Delete

const Api = {
  fetchData
};

export { Api as default };
