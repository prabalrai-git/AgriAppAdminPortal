import { Table } from "antd";
import { useEffect, useState } from "react";
import { TableContainer } from "../../../common/CommonStyledComponents";
import Filters from "../../../components/Filters";
import Header from "../../../components/Header";
import {
  GetlistofDisctrictByStateIdApi,
  GetListOfStateApi,
  GetListOfVDCByDistrictIdApi,
  GetProvinceWiseLandReportDetailsApi,
} from "../../../services/Appservices/AgricultureServices";

const columns = [
  {
    title: "Name",
    dataIndex: "FullName",
    width: 150,
  },
  {
    title: "Crop Type",
    dataIndex: "CTypName",
    width: 150,
  },
  {
    title: "Farm Type",
    dataIndex: "FarmType",
  },
  {
    title: "Kitta No.",
    dataIndex: "KittaNumber",
  },
  {
    title: "Land Owner",
    dataIndex: "LandOwner",
  },
  {
    title: "District",
    dataIndex: "District",
  },
  {
    title: "Farm Name",
    dataIndex: "frmName",
  },
  {
    title: "Farm Location",
    dataIndex: "frmLocation",
  },
  {
    title: "VDC/Mun",
    dataIndex: "VDCMun",
  },
  // {
  //   title: "IsCultivated",
  //   dataIndex: "IsCultivated",
  // },
];

const ProvienceWiseLand = () => {
  const [provinceWiseLandList, setProvinceWiseLandList] = useState();

  // dropdown lists data

  const [provienceList, setProvienceList] = useState();
  const [districtList, setDistrictList] = useState();
  const [vdcList, setVdcList] = useState();

  // data states

  const [provience, setProvience] = useState();
  const [district, setDistrict] = useState();
  const [vdc, setVdc] = useState();
  const [ward, setWard] = useState();

  useEffect(() => {
    GetListOfStateApi((res) => {
      const data = res.map((item) => ({
        value: item.StateId,
        label: item.StateName,
      }));
      setProvienceList(data);
    });
  }, []);

  const onSubmit = () => {
    setProvinceWiseLandList();
    const data = {
      provinceId: provience,
      districtId: district,
      vdc: vdc,
      ward: ward,
      iscultivated: true,
    };
    console.log(data);
    GetProvinceWiseLandReportDetailsApi(data, (res) => {
      console.log(res);
      if (res.length > 0) {
        // console.log(res, "this is res");
        setProvinceWiseLandList(res);
      }
    });
  };

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
  return (
    <>
      <Header title={"Provience Wise Land Report"} />
      <TableContainer>
        <Filters
          ProvinceWiseLandfilter={true}
          provienceList={provienceList}
          onSelectState={onSelectState}
          districtList={districtList}
          onSelectDistrict={onSelectDistrict}
          vdcList={vdcList}
          setVdc={setVdc}
          setWard={setWard}
          onSubmit={onSubmit}
        />
        <Table
          columns={columns}
          dataSource={provinceWiseLandList}
          scroll={{
            y: 360,
          }}
        />
      </TableContainer>
    </>
  );
};

export default ProvienceWiseLand;
