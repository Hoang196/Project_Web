import "./FirstDirect.scss"
import Footer from "../homepage/Footer"
import { Spring, animated } from 'react-spring'
import paths from "../../router/paths";
import { MenuOutlined } from '@ant-design/icons';
import { List } from "antd";
import React, {useEffect, useState} from "react";
import PostDisplayCard from "../products/component/PostDisplayCard";
import {getAllPostData} from "../../services/api/PostData";

const FirstDirect = () => {

    const [overflow, setOverflow] = useState({overflow: "hidden"})
    const [postData, setPostData] = useState([])

    useEffect(() => {
        getPostData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSearch = (e) => {
        e.preventDefault()
        window.location.href = paths.Login;
    }

    const getPostData = async () => {
        const { data, success } = await getAllPostData(1)
        if (success) {
            setPostData(data.data.posts)
        }
    }

    let counter = 1;
    setInterval(() => {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }, 3000);

    const clickMenu = () => {

        if (overflow.overflow === "hidden") {
            setOverflow({overflow: ""})
        } else {
            setOverflow({overflow: "hidden"})
        }
    }

    return (
        <div>
            <div className="container-fluid basePage" >
                <div className="basePage__header col-12 row">

                    <div className="basePage__header--menu col-xl-9 col-12">

                        <div className="basePage__header--menu-logo">
                            <div className="basePage__header--menu-logo-img" />
                            <div className="basePage__header--menu-logo-name" >
                                <Spring
                                    loop
                                    from={{ opacity: 0, color: '#000' }}
                                    to={[
                                        { opacity: 1, color: '#141170' },
                                        { opacity: 0, color: '#340ff2' },
                                    ]}>
                                    {styles => (
                                        <animated.div style={styles}>Trao ?????i ????? c??</animated.div>
                                    )}
                                </Spring>
                            </div>
                        </div>

                        <div className="basePage__header--menu-list" style={overflow}>

                            <div className="basePage__header--menu-icon" onClick={() => clickMenu()}>
                                <MenuOutlined className="header__navbar-menu-icon-btn" />
                            </div>

                            <ul className="basePage__header--menu-list-items1">
                                <li className="basePage__header--menu-list-items1-field">
                                    <a href="/login" className="basePage__header--menu-list-items1-field-link basePage-active">Trang ch???</a>
                                </li>
                                <li className="basePage__header--menu-list-items1-field">
                                    <a href="/info" className="basePage__header--menu-list-items1-field-link">Gi???i thi???u</a>
                                </li>
                                <li className="basePage__header--menu-list-items1-field">
                                    <a href="/contact" className="basePage__header--menu-list-items1-field-link">Li??n h???</a>
                                </li>
                            </ul>

                            <ul className="basePage__header--menu-list-items2">
                                <div className="basePage__header--menu-list-items2-avatar"/>
                                <li className="basePage__header--menu-list-items2-direct direct--slug">
                                    <a href="/register" className="basePage__header--menu-list-items2-direct-link">????ng k??</a>
                                </li>
                                <li className="basePage__header--menu-list-items2-direct">
                                    <a href="/login" className="basePage__header--menu-list-items2-direct-link">????ng nh???p</a>
                                </li>
                            </ul>

                        </div>

                    </div>

                    <div className="basePage__header--background col-12">
                        <div className="basePage__header--background-img">
                            <h1 className="basePage__header--background-img-slogan1">?????ng v???t b???. H??y ????? ????? c?? t??m ch??? m???i</h1>
                            <h6 className="basePage__header--background-img-slogan2">Kh??ng ng???ng v????n l??n - Cho cu???c s???ng m??i xanh</h6>
                            <form className="form-inline basePage__header--background-img-search" onSubmit={(e) => onSearch(e)}>
                                <input className="basePage__header--background-img-search-input" type="search" placeholder="T??m ki???m ??? ????y"
                                       aria-label="Search"/>
                                <button className="basePage__header--background-img-search-btn" type="submit" >T??m ki???m</button>
                            </form>
                        </div>
                    </div>

                </div>

                <div className="basePage__container--sliders col-xl-12 col-12">
                    <div className="basePage__container--sliders-1 col-xl-9 col-11 row">
                        <div className="basePage__container--slider col-xl-8 col-12">
                            <div className="basePage__container--slider-slides">
                                <input type="radio" name="radio-btn" id="radio1" />
                                <input type="radio" name="radio-btn" id="radio2" />
                                <input type="radio" name="radio-btn" id="radio3" />
                                <input type="radio" name="radio-btn" id="radio4" />

                                <div class="basePage__container--slider-slides-slide first">
                                    <div class="basePage__container--slider-slides-slide-1" />
                                </div>
                                <div class="basePage__container--slider-slides-slide">
                                    <div class="basePage__container--slider-slides-slide-2" />
                                </div>
                                <div class="basePage__container--slider-slides-slide">
                                    <div class="basePage__container--slider-slides-slide-3" />
                                </div>
                                <div class="basePage__container--slider-slides-slide">
                                    <div class="basePage__container--slider-slides-slide-4" />
                                </div>

                                {/*<div class="basePage__container--slider-slides-navigation">*/}
                                {/*    <div class="basePage__container--slider-slides-navigation-btn1" />*/}
                                {/*    <div class="basePage__container--slider-slides-navigation-btn2" />*/}
                                {/*    <div class="basePage__container--slider-slides-navigation-btn3" />*/}
                                {/*    <div class="basePage__container--slider-slides-navigation-btn4" />*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <div class="basePage__container--slider-image col-xl-4 col-12">
                            <div class="basePage__container--slider-image-1 col-12">
                                <div class="basePage__container--slider-image-1-img col-4" />
                                <div class="basePage__container--slider-image-1-title col-8">??i???n tho???i Iphone c??n m???i</div>
                            </div>
                            <div class="basePage__container--slider-image-2 col-xl-12">
                                <div class="basePage__container--slider-image-2-img col-4" />
                                <div class="basePage__container--slider-image-2-title col-8">M?? t?? PKL Kawasaki c??n b???o h??nh</div>
                            </div>
                            <div class="basePage__container--slider-image-3 col-12">
                                <div class="basePage__container--slider-image-3-img col-4" />
                                <div class="basePage__container--slider-image-3-title col-8">Gi??y jordan b???n rep 1:1 m???i mua</div>
                            </div>
                            <div class="basePage__container--slider-image-4 col-12">
                                <div class="basePage__container--slider-image-4-img col-4" />
                                <div class="basePage__container--slider-image-4-title col-8">C??n h??? cao c???p (???nh m?? t???)</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="basePage__container">
                    <div class="basePage__container--grid col-xl-9 col-11">
                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div className="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-2-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Laptop</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div className="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-1-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">B???t ?????ng s???n</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div className="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-3-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Ph????ng ti???n</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div className="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-4-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Trang ph???c</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div className="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-5-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">????? gia d???ng</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div className="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-6-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">????? ??i???n t???</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div className="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-7-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Trang s???c</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div class="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-8-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Nh?? ???</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div class="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-9-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">M??y t??nh b???ng</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div class="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-10-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Ph??? ki???n</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div class="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-11-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">M??y t??nh b??n</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div class="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-12-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">M??y in</div>
                        </div>
                    </div>
                </div>

                <div className="basePage__container">
                    <div className="basePage__container--products col-xl-9 col-11">
                        <List
                            grid={{
                                gutter: 20,
                                xs: 3,
                                sm: 3,
                                md: 3,
                                lg: 4,
                                xl: 4,
                                xxl: 5,
                            }}
                            dataSource={postData}
                            renderItem={post => {
                                return (
                                    <List.Item>
                                        <PostDisplayCard isChoosing={true} postData={post} />
                                    </List.Item>
                                )
                            }}
                        />
                    </div>
                </div>

                <div className="basePage__container">
                    <div class="basePage__container--grid2 col-xl-9 col-11">
                        <div class="basePage__container--grid2-box col-xl-3 col-6" onClick={() => onSearch()}>
                            <div className="basePage__container--grid2-box-logo">
                                <div className="basePage__container--grid2-logo">
                                    <div className="basePage__container--grid2-1-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid2-title">Ti???t ki???m</div>
                        </div>

                        <div class="basePage__container--grid2-box col-xl-3 col-6" onClick={() => onSearch()}>
                            <div className="basePage__container--grid2-box-logo">
                                <div className="basePage__container--grid2-logo">
                                    <div className="basePage__container--grid2-2-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid2-title">An to??n</div>
                        </div>

                        <div class="basePage__container--grid2-box col-xl-3 col-6" onClick={() => onSearch()}>
                            <div className="basePage__container--grid2-box-logo">
                                <div className="basePage__container--grid2-logo">
                                    <div className="basePage__container--grid2-3-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid2-title">B???o v??? m??i tr?????ng</div>
                        </div>

                        <div class="basePage__container--grid2-box col-xl-3 col-6" onClick={() => onSearch()}>
                            <div className="basePage__container--grid2-box-logo">
                                <div className="basePage__container--grid2-logo">
                                    <div className="basePage__container--grid2-4-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid2-title">H???p t??c ph??t tri???n</div>
                        </div>
                    </div>
                </div>

                <div className="basePage__container">
                    <div className="basePage__container--footer col-xl-9 col-11">
                        <div className="basePage__container--footer-image1" onClick={() => onSearch()} />
                        <div className="basePage__container--footer-image2" onClick={() => onSearch()} />
                        <div className="basePage__container--footer-image3" onClick={() => onSearch()} />
                    </div>
                </div>
            </div>
            <div className="basePage__footer">
                <Footer />
            </div>
        </div>
    )
}
export default FirstDirect
