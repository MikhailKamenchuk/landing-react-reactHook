import * as axios from "axios";

export default class StoreService {
    importAllImages = () => {
        const importAll = (r) => {
            return r.keys().map(r)
        };
        return importAll(
            require.context("../../src/img/services-icons", false, /\.(png|jpe?g|svg)$/)
        )
    };

    getServiceListItem = (id) => {
        axios.get("./fixtures/our-services-list.json")
            .then(res => res.data)
            .then(data => data.find(item => item.id == id))
            .catch(error => new Error(`Could not fetch ` +
                `, received ${error}`))}
}