import axios from "axios";
import Papa from "papaparse";

// import {Product} from "./types";

export default {
  list: async () => {
    return axios
      .get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSlXcul667sIwN8OIYGJEU28-s7F7dAaViyoxPV0-iQAkjsyZWG0QQ04gBLPHwH2zwnHKYDVxXf0t--/pub?output=csv",
        {
          responseType: "blob",
        },
      )
      .then((response) => {
        return new Promise((resolve, reject) => {
          Papa.parse(response.data, {
            header: true,
            complete: (results) => {
              const products = results.data;

              return resolve(
                products.map((product) => ({
                  ...product,
                  price: Number(product.price),
                })),
              );
            },
            error: (error) => reject(error.message),
          });
        });
      });
  },
};
