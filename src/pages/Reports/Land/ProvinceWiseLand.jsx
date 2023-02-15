import { Table } from "antd";
import { useEffect, useState } from "react";
import { TableContainer } from "../../../common/CommonStyledComponents";
import Filters from "../../../components/Filters";
import Header from "../../../components/Header";
import { GetProvinceWiseLandReportDetailsApi } from "../../../services/Appservices/AgricultureServices";

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
    title: "FarmType",
    dataIndex: "FarmType",
  },
  {
    title: "KittaNumber",
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

const ProvienceWiseLand = () => {
  const [provinceWiseLandList, setProvinceWiseLandList] = useState();

  useEffect(() => {
    const data = {
      provinceId: 1,
      districtId: 1,
      vdc: 1,
      ward: 1,
      iscultivated: true,
    };
    GetProvinceWiseLandReportDetailsApi(data, (res) => {
      console.log(res);
      if (res.length > 0) {
        console.log(res, "this is res");
        setProvinceWiseLandList(res);
      }
    });
  }, []);
  return (
    <>
      <Header title={"Provience wise land report"} />
      <TableContainer>
        <Filters />
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
