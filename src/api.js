import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

class Api {
    // static token;

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ` };
        const params = method === "get" ? data : {};

        try {
            return await axios({ url, method, data, params, headers });
        } catch (err) {
            console.error("API Error:", err);
            let message = err;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async getMural(id) {
        let res = await this.request(`/murals/mural/${id}`);
        return res.mural;
    }

    static async getActiveMurals() {
        let res = await this.request(`/murals/active`);
        return res.mural;
    }
}

export default Api;
