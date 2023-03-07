import { Calendar, Card, Col, Row } from "antd";
import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Bar,
  Bubble,
  Chart,
  Doughnut,
  Line,
  Pie,
  PolarArea,
  Radar,
  Scatter,
} from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import Header from "../../components/Header";
import {
  DashboardBarDataColors,
  DashboardDataColors,
} from "../../common/DashboardDataColors";
import { useState } from "react";
import { currentDate } from "../../common/currentdate";
import {
  GetBaaliSummaryDetailsbyBaaliTypeAndDateApi,
  GetBaaliSummaryDetailsbyBaaliTypeAndVDCMUNApi,
  GetLandStatusDetialByFarmTypeApi,
} from "../../services/Appservices/AgricultureServices";

//
function Dashboard() {
  ChartJS.register(...registerables);

  const [barLables, setBarLables] = useState();
  const [barData, setBarData] = useState();
  const [doughnutLables, setDoughnutLables] = useState();
  const [doughnutData, setDoughnutData] = useState();
  const [piechartData, setPieChartData] = useState();
  const [piechartDummyData, setPiechartDummyData] = useState();
  const [piechartDummyLables, setPiechartDummyLables] = useState();
  const [piechartLables, setPiechartLables] = useState();

  // useEffect(() => {
  //   console.log(barData, "this bar data");
  // }, [barData]);

  useEffect(() => {
    const data = {
      fromdate: "2021-1-1",
      todate: currentDate,
      baaliTypeId: 2,
    };
    const datadummy = {
      fromdate: "2021-1-1",
      todate: currentDate,
      baaliTypeId: 1,
    };

    GetBaaliSummaryDetailsbyBaaliTypeAndVDCMUNApi(data, (res) => {
      const lables = res.map((item) => item.VDCMun + "/ " + item.cropName);
      setBarLables(lables);
      const data = res.map((item) => item.Count);
      setBarData(data);
    });

    GetLandStatusDetialByFarmTypeApi((res) => {
      const data = res.map((item) => item.Count);
      // console.log(data, "data object");
      setPieChartData(data.slice(1, data.length + 1));
    });

    GetBaaliSummaryDetailsbyBaaliTypeAndDateApi(data, (res) => {
      const lables = res.map((item) => item.cropName);
      setDoughnutLables(lables);
      const data = res.map((item) => item.Count);
      setDoughnutData(data);
    });
    GetBaaliSummaryDetailsbyBaaliTypeAndDateApi(datadummy, (res) => {
      const lables = res.map((item) => item.cropName);
      setPiechartDummyLables(lables);
      const data = res.map((item) => item.Count);
      setPiechartDummyData(data);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
      title: {
        display: true,
        position: "top",
        text: "बाली प्रकार र नगरपालिका द्वारा बाली सारांश",
      },
    },
    interaction: {
      intersect: true,
    },
  };

  const doughOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      title: {
        display: true,
        position: "top",
        text: "खेतको प्रकार अनुसार भूमिको स्थिति",
      },
    },

    interaction: {
      intersect: true,
    },
  };

  const pieOptions = {
    responsive: true,

    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      title: {
        display: true,
        position: "top",
        text: "बालीको प्रकार द्वारा बाली सारांश",
      },
    },
    interaction: {
      intersect: true,
    },
  };
  const pieOptionsDummy = {
    responsive: true,

    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      title: {
        display: true,
        position: "top",
        text: "पशुपालन प्रकार द्वारा पशुपालन सारांश",
      },
    },
    interaction: {
      intersect: true,
    },
  };
  const data = {
    labels: barLables,

    datasets: [
      {
        labels: "hello",
        data: barData,
        backgroundColor: DashboardBarDataColors,
        hoverOffset: 4,
        borderWidth: 3,
        borderColor: "#f0ecec",
      },
    ],
  };
  const doughnutDataObject = {
    labels: doughnutLables,
    datasets: [
      {
        labels: "hello",
        data: doughnutData,
        backgroundColor: DashboardDataColors,
        hoverOffset: 4,
        borderWidth: 3,
        borderColor: "#f0ecec",
      },
    ],
  };
  const pieDummyDataObject = {
    labels: piechartDummyLables,
    datasets: [
      {
        labels: "hello",
        data: piechartDummyData,
        backgroundColor: DashboardDataColors,
        hoverOffset: 4,
        borderWidth: 3,
        borderColor: "#f0ecec",
      },
    ],
  };

  const pieDataObject = {
    labels: ["खेती नगरिएको", "खेती गरिएको"],
    datasets: [
      {
        labels: "hello",
        data: piechartData,
        backgroundColor: ["brown", "darkgreen"],
        hoverOffset: 4,
        borderWidth: 3,
        borderColor: "#f0ecec",
      },
    ],
  };

  return (
    <>
      <Header title={"ड्यासबोर्ड"} />
      <DashboardMainContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            flexWrap: "wrap",
            // aspectRatio: "3/0",
            objectFit: "fill",
          }}
        >
          <DoughnutChartContainer>
            <Row>
              <Col span={24}>
                <Card span={24} style={{ height: "280px" }}>
                  <Pie
                    options={doughOptions}
                    style={{ width: "100%", height: "130px" }}
                    data={pieDataObject}
                  />
                </Card>
              </Col>
            </Row>
          </DoughnutChartContainer>
          <DoughnutChartContainer>
            <Row>
              <Col span={24}>
                <Card span={24} style={{ height: "280px" }}>
                  <Pie
                    options={pieOptions}
                    style={{ width: "100%", height: "130px" }}
                    data={doughnutDataObject}
                  />
                </Card>
              </Col>
            </Row>
          </DoughnutChartContainer>

          <DoughnutChartContainer>
            <Row>
              <Col span={24}>
                <Card span={24} style={{ height: "280px" }}>
                  <Doughnut
                    options={pieOptionsDummy}
                    style={{ width: "100%", height: "140px" }}
                    data={pieDummyDataObject}
                  />
                </Card>
              </Col>
            </Row>
          </DoughnutChartContainer>

          <CalendarAndGreetingContainer>
            <img
              src="https://t4.ftcdn.net/jpg/02/31/56/61/360_F_231566167_DcxyiS11UCKdIoFpPdkXFpAzeVhh6qFA.jpg"
              style={{
                width: "100%",
                objectFit: "cover",
                // height: "41vh",
                height: "73%",
                borderRadius: "8px",
                borderEndEndRadius: "0px",
                borderEndStartRadius: "0px",
              }}
            />

            <h4>
              स्वागतम ! <br />{" "}
              <p style={{ fontSize: "14px", marginTop: "8px" }}>
                {new Date().toDateString()}
              </p>
            </h4>
            {/* <Calendar fullscreen={false} onSelect={(e) => console.log(e)} /> */}
          </CalendarAndGreetingContainer>
        </div>
        <BarChartContainer>
          <Row>
            <Col span={24}>
              <Card span={24}>
                <Bar options={options} style={{ width: "100%" }} data={data} />
              </Card>
            </Col>
          </Row>
        </BarChartContainer>
      </DashboardMainContainer>
      {/* <Row>
        <Col sm={24} md={12} lg={16}>
          <Row>
              <Col xs={24} md={12}>
                <Card span={24}>
                  <Doughnut options={pieOptions} data={data} />
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card span={24}>
                  <Pie options={pieOptions} data={data} />
                </Card>
              </Col>
            </Row>
        </Col>
              </Row> 
*/}
    </>
  );
}

export default Dashboard;

const DashboardMainContainer = styled.div`
  margin-top: 6%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: "wrap";
`;

const BarChartContainer = styled.div`
  width: 98%;
  /* height: 100%; */

  margin: 10px;
`;
const DoughnutChartContainer = styled.div`
  width: 23%;

  margin: 10px;
`;
const CalendarAndGreetingContainer = styled.div`
  /* width: 34%; */
  width: 23%;

  margin: 14px;
  h4 {
    text-align: center;
    background-color: white;
    padding: 8px;
    /* padding-bottom: 35px; */
    border-radius: 8px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    font-size: 20px;
  }
`;
