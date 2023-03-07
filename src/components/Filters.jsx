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
    ProvinceWiseLandfilter,
  } = props;
  //   console.log(props);

  return (
    <>
      <MainContainer>
        {ProvinceWiseLandfilter ? (
          ""
        ) : (
          <EachContainer>
            <p>बाली प्रकार:</p>

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
        )}
        <EachContainer>
          <p>प्रदेश:</p>

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
          <p>जिल्ला:</p>

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
          <p>पालिका:</p>

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
          <p>वार्ड नम्बर:</p>

          <Input
            placeholder="Enter ward number"
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
            लोड
          </Button>
        </EachContainer>
      </MainContainer>
    </>
  );
}

export default Filters;

const MainContainer = styled.div`
  /* -webkit-justify-content: "left"; */
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  /* margin-bottom: 14px; */
  background-color: white;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 6%;
  margin-bottom: 20px;
  border-radius: 4px;
  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 6px -4px lightgrey;
`;

const EachContainer = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-bottom: 15px;
  margin-right: 14px;
  p {
    font-size: 12px;
    font-weight: 500;
    text-align: left;
  }
`;
