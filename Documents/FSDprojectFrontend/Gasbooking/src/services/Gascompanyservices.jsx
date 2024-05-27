import { protectedInstance } from "./instance";

const Gascompanyservices = {
    getgasCompanies: async () => {
        return await protectedInstance.get('/gascompanies');
    }
}
export default Gascompanyservices;