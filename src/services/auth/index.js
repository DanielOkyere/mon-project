import axios from "axios";

const db_Url = `${process.env.REACT_APP_SERVER_URL}`;


/**
 * authSignin - Service to sign in user
 * @param {Object} data -data containing user email and password
 * Returns: Promise | Error - resolves data from user or error
 */
const authSignin = async (data) => {
    let userData;
   await axios
        .post(`${db_Url}/admin/auth/login`, {
            ...data,
        })
        .then((response) => {
            userData= response.data
        })
        .catch((error) => {
            console.log(error);
        });
    return userData;
};
export {
    authSignin,
};

