import axios from "axios";
axios.defaults.baseURL = 'https://api-for-missions-and-railways.herokuapp.com';
export var setDefaultHeader = function (header) {
    Object.keys(header).forEach(function (key) { return axios.defaults.headers.common[key] = header[key]; });
};
//# sourceMappingURL=index.js.map