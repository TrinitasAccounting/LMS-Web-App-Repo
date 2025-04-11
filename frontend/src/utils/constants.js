
import UserData from "../views/plugin/UserData";


export const API_BASE_URL = `http://127.0.0.1:8000/api/v1/`;     // upgrade this in production to our deployed backend url
export const userId = UserData()?.user_id;
// export const teacherId = UserData()?.teacher_id;
export const PAYPAL_CLIENT_ID = 'test';      // in production this needs to be updated to a real Paypal client id


