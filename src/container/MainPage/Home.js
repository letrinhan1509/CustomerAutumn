import React, { useEffect } from "react";
import { Row, Col, Carousel } from 'antd';
import { useHistory } from "react-router-dom";
import "container/components-css/Home.scss";
import cookies from "react-cookies";
import Sale from 'components/Sale';
import HomeBestseller from "components/HomeBestseller";
import firebase from 'firebase';

//import ProductDetail from "./Product-detail";





const Home = (props) => {

    const history = useHistory();
    useEffect(() => {
        if (!cookies.load('jwt')) {
            history.push('/')
            //window.location.reload()
        }
    })


    return (
        <>
            {/* <button onClick={() => firebase.auth().signOut()}>SIGH - OUT</button> */}
            <Carousel className="slider__bg" autoplay dots={false}>
                <div className="box-img">
                    <img src="https://firebasestorage.googleapis.com/v0/b/fashionshop-c6610.appspot.com/o/slider%2Fcarousel2.jpg?alt=media&token=48ac36ae-ad14-44b7-9c27-745fe10fc763" alt="slider" />
                </div>
                <div className="box-img">
                    <img src="https://firebasestorage.googleapis.com/v0/b/fashionshop-c6610.appspot.com/o/slider%2Fcarousel3.jpeg?alt=media&token=7389555d-5d73-456b-bfcd-8ef30a2d242f" alt="slider" />
                </div>
                <div className="box-img">
                    <img src="https://firebasestorage.googleapis.com/v0/b/fashionshop-c6610.appspot.com/o/slider%2Fcarousel1.jpg?alt=media&token=df295154-7497-4597-8714-bb3871b375c1" alt="slider" />
                </div>
            </Carousel>
            <Row>
                <Col span={22} offset={1}>
                    <Sale />
                </Col>
                <Col span={22} offset={1}>
                    <HomeBestseller ProductHomeS={props.ListProductHome} Thongbao_Them={props.Thongbao_Them} />
                </Col>
            </Row>
            <Row>
                <Col className="four">
                    <div className="box">
                        {/* <div className="h_light">
                            <p>THE WINTER</p>
                        </div> */}
                        <h1>THE WINTER</h1>
                        <p>COLLECTION-2021</p>
                        <div className="button-wrapper"><button className="btn10">Xem</button></div>
                    </div>

                </Col>
            </Row>
        </>
    )
}
export default Home;

