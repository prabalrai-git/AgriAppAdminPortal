import { setStateListToStore } from "../../store/features/StateList/stateListSlice";
import {
  GetAgriType,
  GetBaaliProductionDetailsByLocation,
  GetFarmType,
  GetLandStatusDetialByFarmType,
  GetlistofDisctrictByStateId,
  GetListOfState,
  GetListOfVDCByDistrictId,
  GetProvinceWiseLandReportDetails,
} from "../constants/url";
import { fetch, store } from "../utils/httpUtil";

// export const GetBaaliProductionDetailsByLocationApi = async (
//   data,
//   successCallback
// ) => {
//   //   let formData = generateUrlEncodedData(data);
//   // return
//   try {
//     const response = await store(
//       `${GetBaaliProductionDetailsByLocation}`,
//       data
//     );
//     if (response?.status === 200) {
//       successCallback(response?.data);
//     } else successCallback([]);
//   } catch (error) {
//     successCallback([]);
//   }
// };

export const GetBaaliProductionDetailsByLocationApi = async (
  data,
  successCallback
) => {
  try {
    const response = await fetch(
      `${GetBaaliProductionDetailsByLocation}?provinceId=${data.provinceId}&districtId=${data.districtId}&vdc=${data.vdc}&ward=${data.ward}&baaliType=${data.baaliType}`
    );
    if (response?.status === 200) {
      successCallback(response?.data.BaaliByLOcation);
    } else {
      successCallback([]);
    }
  } catch (errror) {
    successCallback([]);
  }
};
export const GetProvinceWiseLandReportDetailsApi = async (
  data,
  successCallback
) => {
  try {
    const response = await fetch(
      `${GetProvinceWiseLandReportDetails}?provinceId=${data.provinceId}&districtId=${data.districtId}&vdc=${data.vdc}&ward=${data.ward}&iscultivated=${data.iscultivated}`
    );
    if (response?.status === 200) {
      successCallback(response?.data.LandByLocation);
    } else {
      successCallback([]);
    }
  } catch (errror) {
    successCallback([]);
  }
};
export const GetlistofDisctrictByStateIdApi = async (data, successCallback) => {
  try {
    const response = await fetch(
      `${GetlistofDisctrictByStateId}?stateId=${data.stateId}`
    );
    if (response?.status === 200) {
      successCallback(response?.data.District);
    } else {
      successCallback([]);
    }
  } catch (errror) {
    successCallback([]);
  }
};
export const GetListOfVDCByDistrictIdApi = async (data, successCallback) => {
  try {
    const response = await fetch(
      `${GetListOfVDCByDistrictId}?districtId=${data.districtId}`
    );
    if (response?.status === 200) {
      successCallback(response?.data.VDCList);
    } else {
      successCallback([]);
    }
  } catch (errror) {
    successCallback([]);
  }
};
export const GetAgriTypeApi = async (data, successCallback) => {
  try {
    const response = await store(`${GetAgriType}?aId=${data.aId}`);
    if (response?.status === 200) {
      successCallback(response?.data.AgriTypes);
    } else {
      successCallback([]);
    }
  } catch (errror) {
    successCallback([]);
  }
};
export const GetLandStatusDetialByFarmTypeApi = async (
  data,
  successCallback
) => {
  try {
    const response = await store(
      `${GetLandStatusDetialByFarmType}?fromdate=${data.fromdate}&todate=${data.todate}&baaliTypeId=${data.baaliTypeId}`
    );
    if (response?.status === 200) {
      successCallback(response?.data.SummaryBaali);
    } else {
      successCallback([]);
    }
  } catch (errror) {
    successCallback([]);
  }
};
export const GetListOfStateApi = async (successCallback) => {
  // return async (dispatch) => {
  // };
  try {
    const response = await fetch(GetListOfState);

    if (response?.status === 200) {
      successCallback(response?.data.StateList);
      // dispatch(setStateListToStore(response?.data.StateList));
    } else {
      successCallback([]);
    }
  } catch (errror) {
    successCallback([]);
  }
};
export const GetFarmTypeApi = async (successCallback) => {
  // return async (dispatch) => {
  // };
  try {
    const response = await fetch(GetFarmType);

    if (response?.status === 200) {
      successCallback(response?.data);
      // dispatch(setStateListToStore(response?.data.StateList));
    } else {
      successCallback([]);
    }
  } catch (errror) {
    successCallback([]);
  }
};
