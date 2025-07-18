import config from "@/config/config";
import axios from "axios";

async function getProduct() {
  return await axios.get(`${config.apiUrl}/api/products`);
}

export { getProduct };
