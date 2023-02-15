import { Table } from "antd";
import { useEffect, useState } from "react";
import { TableContainer } from "../../../common/CommonStyledComponents";
import Filters from "../../../components/Filters";
import Header from "../../../components/Header";
import {
  GetAgriTypeApi,
  GetBaaliProductionDetailsByLocationApi,
  GetFarmTypeApi,
  GetlistofDisctrictByStateIdApi,
  GetListOfStateApi,
  GetListOfVDCByDistrictIdApi,
} from "../../../services/Appservices/AgricultureServices";

const columns = [
  {
    title: "Name",
    dataIndex: "FullName",
  },
  {
    title: "Crop Type",
    dataIndex: "CTypName",
  },
  {
    title: "FarmType",
    dataIndex: "FarmType",
  },
  {
    title: "Kitta no.",
    dataIndex: "KittaNumber",
  },
  {
    title: "LandOwner",
    dataIndex: "LandOwner",
  },
  {
    title: "District",
    dataIndex: "District",
  },
  {
    title: "frmName",
    dataIndex: "frmName",
  },
  {
    title: "frmLocation",
    dataIndex: "frmLocation",
  },
  {
    title: "VDCMun",
    dataIndex: "VDCMun",
  },
  // {
  //   title: "IsCultivated",
  //   dataIndex: "IsCultivated",
  // },
];

const BaaliByLocation = () => {
  const [baaliProductionByLocationList, setBaaliProductionByLocationList] =
    useState();

  // filter states

  const [provienceList, setProvienceList] = useState();
  const [districtList, setDistrictList] = useState();
  const [vdcList, setVdcList] = useState();
  const [baaliTypeList, setBaaliTypeList] = useState();

  // get request states
  const [provience, setProvience] = useState();
  const [district, setDistrict] = useState();
  const [vdc, setVdc] = useState();
  const [baaliType, setBaaliType] = useState();
  const [ward, setWard] = useState();

  useEffect(() => {
    GetListOfStateApi((res) => {
      const data = res.map((item) => ({
        value: item.StateId,
        label: item.StateName,
      }));
      setProvienceList(data);
    });

    const AgriData = {
      aId: 0,
    };
    GetAgriTypeApi(
      AgriData,
      (res) => {
        const data = res.map((item) => ({
          value: item.CtypID,
          label: item.CTypName,
        }));
        setBaaliTypeList(data);
      }
      //     {
      //     const data = res.map((item))
      // }
    );
  }, []);

  const onSelectState = (id) => {
    setProvience(id);
    const data = {
      stateId: id,
    };

    GetlistofDisctrictByStateIdApi(data, (res) => {
      //   console.log(res);
      const data = res.map((item) => ({
        value: item.DId,
        label: item.District,
      }));
      setDistrictList(data);
    });
  };
  const onSelectDistrict = (id) => {
    setDistrict(id);
    const data = {
      districtId: id,
    };

    GetListOfVDCByDistrictIdApi(data, (res) => {
      //   console.log(res);
      const data = res.map((item) => ({
        value: item.VdcID,
        label: item.Name,
      }));
      setVdcList(data);
    });
  };

  const onSubmit = () => {
    setBaaliProductionByLocationList();
    const data = {
      provinceId: provience,
      districtId: district,
      vdc: vdc,
      ward: ward,
      baaliType: baaliType,
    };
    console.log(data);

    GetBaaliProductionDetailsByLocationApi(data, (res) => {
      //   console.log(res);
      if (res.length > 0) {
        // console.log(res, "this is res");
        setBaaliProductionByLocationList(res);
      }
    });
  };

  return (
    <>
      <Header title={"Baali Details By Location"} />
      <TableContainer>
        <Filters
          baaliTypeList={baaliTypeList}
          provienceList={provienceList}
          onSelectState={onSelectState}
          districtList={districtList}
          onSelectDistrict={onSelectDistrict}
          vdcList={vdcList}
          setBaaliType={setBaaliType}
          setVdc={setVdc}
          setWard={setWard}
          onSubmit={onSubmit}
        />
        <Table
          columns={columns}
          dataSource={baaliProductionByLocationList}
          scroll={{
            y: 360,
          }}
        />
      </TableContainer>
    </>
  );
};

export default BaaliByLocation;
