import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                title="ABOUT US"
              />
              <p>We envisions to develop a society based on legitimate rights, equity, justice, honesty, social sensitivity and a culture of service in which all are self-reliant.</p>
            </TableBox>
            <TableBox>
              <PricingTable
                title="INITIATIVES" 
              />
              <ul>
                <li>Khel Sanghathan.</li>
                <li>Sukoo Parikhan.</li>
                <li>Simmi Olympiads.</li>
                <li>Kalaakar Manch.</li>
              </ul>
            </TableBox>
            <TableBox>
              <PricingTable
                title="HAVE QUESTIONS?"
              />
              <ul>
                <li>479, Baspadamka, Tehsil Pataudi, Gurugram, Haryana - 122503, India</li><br></br>
                <li>(+91) 70152 - 95025</li><br></br>
                <li>	support@simmifoundation.org</li>
              </ul>
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




