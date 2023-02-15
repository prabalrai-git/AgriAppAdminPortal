import { Button, Input, Select } from "antd";
import React from "react";
import styled from "styled-components";

function Filters(props) {
  const {
    provienceList,
    onSelectState,
    districtList,
    onSelectDistrict,
    vdcList,
    baaliTypeList,
    setBaaliType,
    setVdc,
    setWard,
    onSubmit,
  } = props;
  //   console.log(props);

  return (
    <>
      <MainContainer>
        <EachContainer>
          <p>Baali Type:</p>

          <Select
            onSelect={(id) => setBaaliType(id)}
            showSearch
            style={{
              width: "100%",
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={baaliTypeList}
          />
        </EachContainer>
        <EachContainer>
          <p>Provience:</p>

          <Select
            onSelect={(id) => onSelectState(id)}
            showSearch
            style={{
              width: "100%",
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={provienceList}
          />
        </EachContainer>
        <EachContainer>
          <p>District:</p>

          <Select
            onSelect={(id) => onSelectDistrict(id)}
            showSearch
            style={{
              width: "100%",
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={districtList}
          />
        </EachContainer>
        <EachContainer>
          <p>Municipality:</p>

          <Select
            onSelect={(id) => setVdc(id)}
            showSearch
            style={{
              width: "100%",
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={vdcList}
          />
        </EachContainer>
        <EachContainer>
          <p>Ward:</p>

          <Input
            placeholder="enter ward no"
            type={"number"}
            onChange={(e) => {
              setWard(e.target.value);
            }}
          />
        </EachContainer>
        <EachContainer>
          <Button
            type="primary"
            style={{
              marginTop: "26px",
              width: "40%",
              borderRadius: 2,
              fontWeight: "500 ",
            }}
            onClick={onSubmit}
          >
            Load
          </Button>
        </EachContainer>
      </MainContainer>
    </>
  );
}

export default Filters;

const MainContainer = styled.div`
  width: 98%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* margin-bottom: 14px; */
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 5%;
`;

const EachContainer = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  p {
    font-size: 12px;
    font-weight: 500;
    text-align: left;
  }
`;
