import "./FirstDirect.scss"
import Footer from "../homepage/Footer"
import { Spring, animated } from 'react-spring'
import paths from "../../router/paths";
import { MenuOutlined } from '@ant-design/icons';

const FirstDirect = () => {

    const onSearch = (e) => {
        e.preventDefault()
        window.location.href = paths.Login;
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
        let menu = document.getElementById('basePage-menu');
        let style = window.getComputedStyle(menu)
        let isClose = style.getPropertyValue('overflow')
        console.log("ndh", typeof style.getPropertyValue('overflow'))

        if (isClose === "hidden") {
            console.log("YES")
            menu.style.removeProperty('overflow');
        } else {
            console.log("NO")
            menu.style.overflow = 'hidden';
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
                                        { opacity: 1, color: 'red' },
                                        { opacity: 0, color: 'orange' },
                                    ]}>
                                    {styles => (
                                        <animated.div style={styles}>Trao đổi đồ cũ</animated.div>
                                    )}
                                </Spring>
                            </div>
                        </div>

                        <div id="basePage-menu" className="basePage__header--menu-list">

                            <div className="basePage__header--menu-icon" onClick={() => clickMenu()}>
                                <MenuOutlined className="header__navbar-menu-icon-btn" />
                            </div>

                            <ul className="basePage__header--menu-list-items1">
                                <li className="basePage__header--menu-list-items1-field">
                                    <a href="/login" className="basePage__header--menu-list-items1-field-link">Sản phẩm</a>
                                </li>
                                <li className="basePage__header--menu-list-items1-field">
                                    <a href="/login" className="basePage__header--menu-list-items1-field-link">Người dùng</a>
                                </li>
                                <li className="basePage__header--menu-list-items1-field">
                                    <a href="/login" className="basePage__header--menu-list-items1-field-link">Giao dịch</a>
                                </li>
                            </ul>

                            <ul className="basePage__header--menu-list-items2">
                                <li className="basePage__header--menu-list-items2-direct direct--slug">
                                    <a href="/register" className="basePage__header--menu-list-items2-direct-link">Đăng ký</a>
                                </li>
                                <li className="basePage__header--menu-list-items2-direct direct--slug">
                                    <a href="/login" className="basePage__header--menu-list-items2-direct-link">Đăng nhập</a>
                                </li>
                                <li className="basePage__header--menu-list-items2-direct">
                                    <a href="/info" className="basePage__header--menu-list-items2-direct-link">Thông tin</a>
                                </li>
                            </ul>

                        </div>

                    </div>

                    <div className="basePage__header--background col-12">
                        <div className="basePage__header--background-img">
                            <h1 className="basePage__header--background-img-slogan1">Đừng vứt bỏ. Hãy để đồ cũ tìm chủ mới</h1>
                            <h6 className="basePage__header--background-img-slogan2">Không ngừng vươn lên - Cho cuộc sống mãi xanh</h6>
                            <form className="form-inline basePage__header--background-img-search" onSubmit={(e) => onSearch(e)}>
                                <input className="basePage__header--background-img-search-input" type="search" placeholder="Tìm kiếm ở đây"
                                       aria-label="Search"/>
                                <button className="basePage__header--background-img-search-btn" type="submit" >Tìm kiếm</button>
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
                                <div class="basePage__container--slider-image-1-title col-8">Điện thoại Iphone còn mới</div>
                            </div>
                            <div class="basePage__container--slider-image-2 col-xl-12">
                                <div class="basePage__container--slider-image-2-img col-4" />
                                <div class="basePage__container--slider-image-2-title col-8">Mô tô PKL Kawasaki còn bảo hành</div>
                            </div>
                            <div class="basePage__container--slider-image-3 col-12">
                                <div class="basePage__container--slider-image-3-img col-4" />
                                <div class="basePage__container--slider-image-3-title col-8">Giày jordan bản rep 1:1 mới mua</div>
                            </div>
                            <div class="basePage__container--slider-image-4 col-12">
                                <div class="basePage__container--slider-image-4-img col-4" />
                                <div class="basePage__container--slider-image-4-title col-8">Căn hộ cao cấp (Ảnh mô tả)</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="basePage__container">
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
                            <div className="basePage__container--grid-title">Bất động sản</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div className="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-3-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Phương tiện</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div className="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-4-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Trang phục</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div className="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-5-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Đồ gia dụng</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div className="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-6-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Đồ điện tử</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div className="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-7-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Trang sức</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div class="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-8-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Nhà ở</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div class="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-9-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Máy tính bảng</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div class="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-10-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Phụ kiện</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div class="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-11-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Máy tính bàn</div>
                        </div>

                        <div class="basePage__container--grid-box col-xl-2 col-4" onClick={() => onSearch()}>
                            <div class="basePage__container--grid-box-logo">
                                <div className="basePage__container--grid-logo">
                                    <div className="basePage__container--grid-12-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid-title">Máy in</div>
                        </div>
                    </div>
                </div>

                <div class="basePage__container">
                    <div class="basePage__container--grid2 col-xl-9 col-11">
                        <div class="basePage__container--grid2-box col-xl-3 col-6" onClick={() => onSearch()}>
                            <div className="basePage__container--grid2-box-logo">
                                <div className="basePage__container--grid2-logo">
                                    <div className="basePage__container--grid2-1-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid2-title">Tiết kiệm</div>
                        </div>

                        <div class="basePage__container--grid2-box col-xl-3 col-6" onClick={() => onSearch()}>
                            <div className="basePage__container--grid2-box-logo">
                                <div className="basePage__container--grid2-logo">
                                    <div className="basePage__container--grid2-2-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid2-title">An toàn</div>
                        </div>

                        <div class="basePage__container--grid2-box col-xl-3 col-6" onClick={() => onSearch()}>
                            <div className="basePage__container--grid2-box-logo">
                                <div className="basePage__container--grid2-logo">
                                    <div className="basePage__container--grid2-3-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid2-title">Bảo vệ môi trường</div>
                        </div>

                        <div class="basePage__container--grid2-box col-xl-3 col-6" onClick={() => onSearch()}>
                            <div className="basePage__container--grid2-box-logo">
                                <div className="basePage__container--grid2-logo">
                                    <div className="basePage__container--grid2-4-img" />
                                </div>
                            </div>
                            <div className="basePage__container--grid2-title">Hợp tác phát triển</div>
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
