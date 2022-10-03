import React from "react";
import styled from "styled-components";
// import {Link} from 'react';
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";
import Education from "../../assets/img/add/Educator_re.png"; 
import Health from "../../assets/img/add/Health.png"; 
import Doctor from "../../assets/img/add/Doctor.png"; 
import Women from "../../assets/img/add/Women.png"; 

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Welcome to <b style={{color: '#f2b300'}} >Simmi Foundation</b></h1>
            <p className="font13">
            Smart India Multi Management Institute is a pan India NGO registered in Haryana, India; carrying out welfare projects on education, healthcare, livelihood and women empowerment. We believe that unless members of the civil society are involved proactively in the process of development, sustainable change will not happen. Based on this, Simmi Foundation sensitizes and engages the civil society, making it an active partner in all its welfare initiatives.
            </p>
          </HeaderInfo><br/><br/>

          <HeaderInfo><h1>OBJECTIFS</h1></HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <img src={Education} style={{ width: "200px" }} alt="office" />
              <h1>Education</h1>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat odio minus, quam voluptatibus veniam temporibus consequatur magni perferendis esse nam facilis adipisci dolor modi id consequuntur repellat explicabo mollitia.</small>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <img src={Health} style={{ width: "290px" }} alt="office" />
              <h1>Livelihood</h1>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat odio minus, quam voluptatibus veniam temporibus consequatur magni perferendis esse nam facilis adipisci dolor modi id consequuntur repellat explicabo mollitia.</small>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <img src={Doctor} style={{ width: "245px" }} alt="office" />
              <h1>Livelihood</h1>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat odio minus, quam voluptatibus veniam temporibus consequatur magni perferendis esse nam facilis adipisci dolor modi id consequuntur repellat explicabo mollitia.</small>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <img src={Women} style={{ width: "210px" }} alt="office" />
              <h1>Women and Youth Empowerment</h1>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat odio minus, quam voluptatibus veniam temporibus consequatur magni perferendis esse nam facilis adipisci dolor modi id consequuntur repellat explicabo mollitia.</small>
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">Your action can change the world</h4>
                <h2 className="font40 extraBold">How can you help us ?</h2>
                <p className="font12">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                  diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Donate Us" action={() => alert("clicked")} />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Contact Us" action={() => alert("clicked")} border />
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <a href='donations'>
                        <img src={AddImage1} alt="office" />
                      </a>
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <a href='donations'>
                        <img src={AddImage2} alt="office" />
                      </a>
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <a href='donations'>
                        <img src={AddImage3} alt="office" />
                      </a>
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <a href='donations'>
                        <img src={AddImage4} alt="office" />
                      </a>
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;