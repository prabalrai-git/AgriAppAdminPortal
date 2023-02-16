import { AuthenticateUser } from "../constants/url";
import { fetch } from "../utils/httpUtil";

export const AuthenticateUserApi = async (data, successCallback) => {
  try {
    const response = await fetch(
      `${AuthenticateUser}?username=${data.username}&password=${data.password}`
    );
    if (response?.status === 200) {
      successCallback(response?.data.AuthenticateUser);
    } else {
      successCallback([]);
    }
  } catch (errror) {
    successCallback([]);
  }
};
