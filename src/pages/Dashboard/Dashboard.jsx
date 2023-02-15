import { Calendar, Card, Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import {
  Bar,
  Bubble,
  Doughnut,
  Line,
  Pie,
  PolarArea,
  Radar,
  Scatter,
} from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import Header from "../../components/Header";

//
function Dashboard() {
  ChartJS.register(...registerables);

  const options = {
    // legend: {
    //   position: "bottom",
    //   display: false,
    // },
    responsive: true,
    // maintainAspectRatio: false,
    // animation: false,
    offset: true,
  };
  return (
    <>
      <Header title={"Dashboard"} />
      <DashboardMainContainer>
        <Row>
          <Col sm={24} md={12} lg={16}>
            {/* <Row>
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
            </Row> */}
            <ChartsContainer>
              <Row>
                <Col span={24}>
                  <Card span={24}>
                    {/* <Line
                      datasetIdKey="id"
                      data={{
                        labels: ["Jun", "Jul", "Aug"],
                        datasets: [
                          {
                            id: 1,
                            label: "",
                            data: [5, 6, 7],
                          },
                          {
                            id: 2,
                            label: "",
                            data: [3, 2, 1],
                          },
                        ],
                      }}
                    /> */}

                    <Bar
                      // options={...}
                      data={{
                        labels: ["Jun", "Jul", "Aug"],
                        datasets: [
                          {
                            id: 1,
                            label: "",
                            data: [5, 6, 7],
                          },
                          {
                            id: 2,
                            label: "",
                            data: [3, 2, 1],
                          },
                          {
                            id: 2,
                            label: "",
                            data: [3, 2, 1],
                          },
                          {
                            id: 2,
                            label: "",
                            data: [3, 2, 1],
                          },
                        ],
                      }}
                    />
                    <Bubble
                      options={options}
                      data={{
                        labels: ["Jun", "Jul", "Aug"],
                        datasets: [
                          {
                            id: 1,
                            label: "",
                            data: [5, 6, 7],
                          },
                        ],
                      }}
                    />
                  </Card>
                </Col>
              </Row>
            </ChartsContainer>
          </Col>

          <Col sm={24} md={12} lg={8}>
            <CalendarAndGreetingContainer>
              <img
                src="https://images.pexels.com/photos/753772/pexels-photo-753772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  height: "30vh",
                  borderRadius: "10px",
                  borderEndEndRadius: 0,
                  borderEndStartRadius: 0,
                }}
              />

              <h4>
                Namaste! <br />{" "}
                <p style={{ fontSize: "14px", marginTop: "8px" }}>
                  {new Date().toDateString()}
                </p>
              </h4>
              <Calendar fullscreen={false} onSelect={(e) => console.log(e)} />
            </CalendarAndGreetingContainer>
          </Col>
        </Row>
      </DashboardMainContainer>
    </>
  );
}

export default Dashboard;

const DashboardMainContainer = styled.div`
  margin-top: 6%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const ChartsContainer = styled.div`
  width: 98%;
  margin: 10px;
`;
const CalendarAndGreetingContainer = styled.div`
  /* width: 100%; */
  margin: 10px;

  h4 {
    text-align: center;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    font-size: 20px;
  }
`;
