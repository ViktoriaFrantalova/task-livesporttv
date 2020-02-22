import axios from "axios";

const fetchData = async url => await axios.get(url);

export { fetchData };
