import "./infoContainer.scss"
import React from "react";

const infoContainer = () => {

    setTimeout(() => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        const tabs = $$(".infoPage__container--tab-item");
        const panes = $$(".infoPage__container--content-group");

        const tabActive = $(".active1");
        const line = $(".infoPage__container--tab-line");

        line.style.left = tabActive.offsetLeft + "px";
        line.style.width = tabActive.offsetWidth + "px";

        tabs.forEach((tab, index) => {
            const pane = panes[index];

            tab.onclick = function () {
                $(".active1").classList.remove("active1");
                $(".active2").classList.remove("active2");

                line.style.left = this.offsetLeft + "px";
                line.style.width = this.offsetWidth + "px";

                this.classList.add("active1");
                pane.classList.add("active2");
            };
        })
    }, 500);

    return (
        <div className="container-fluid infoPage col-xl-12">
            <div className="container-fluid infoPage__content col-xl-9 col-lg-10 col-11" >

                <div className="infoPage__header">
                    <h1 className="infoPage__header--title">
                        Website trao đổi đồ cũ
                    </h1>
                </div>

                <div className="infoPage__container--tab">
                    <div className="infoPage__container--tab-item active1">Thông tin website</div>
                    <div className="infoPage__container--tab-item">Sản phẩm hướng đến</div>
                    <div className="infoPage__container--tab-item">Đăng tải sản phẩm</div>
                    <div className="infoPage__container--tab-item">Trụ sở công ty</div>
                    <div className="infoPage__container--tab-line"/>
                </div>

                <div className="infoPage__container--content">
                    <div className="infoPage__container--content-group active2">
                        <h2>Thông tin website</h2>
                        <p>↪️Old items exchange là một trang web hoàn toàn miễn phí giúp bạn tìm được những thứ mà mình muốn😍.
                            Đó là công cụ để bạn khai thác giá trị từ những món đồ cũ của mình, đồng thời giúp bạn tiết kiệm tiền bạc💵,
                            giảm thiểu lượng khí thải🌫 và kết nối với mọi người👨‍👨‍👧‍👦.</p>
                        <div/>
                    </div>
                    <div className="infoPage__container--content-group">
                        <h2>Sản phẩm hướng đến</h2>
                        <p>↪️Bạn có thể đăng tải rất nhiều thứ từ quần áo👚👕️👖, giầy dép, trang sức👟👠, máy tính💻, điện thoại📱, các thiết bị điện tử🖨🎮📸, đồ nội thất🏚🏘,
                            đồ chơi️🔫, sách vở📖📙, dụng cụ thể thao🎾️🏓, đồ sưu tầm như tem, thẻ,.... Có rất nhiều thứ đang chờ bạn trao đổi !</p>
                        <div/>
                    </div>
                    <div className="infoPage__container--content-group">
                        <h2>Đăng tải sản phẩm</h2>
                        <p>↪️Làm theo các bước sau : <br />
                            Bước 1. Đăng tải sản phẩm bằng cách chụp vài bức ảnh và viết mô. <br />
                            Bước 2. Chọn sản phẩm bạn muốn trao đổi. <br />
                            Bước 3. Đợi xác nhận từ người đăng tải và liên hệ để thương lượng hợp lý.</p>
                        <div/>
                    </div>
                    <div className="infoPage__container--content-group">
                        <h2>Trụ sở công ty</h2>
                        <p>↪️Hãy liên hệ với chúng tôi để nhận được phản hồi sớm nhất nhé ! <br />
                            Email: HoangcosNy@gmail.com <br />
                            Số điện thoại: 0326226666 <br />
                            Địa chỉ liên hệ: Đại học Công nghệ, 144 Xuân Thủy - Cầu giấy - Hà nội.</p>
                        <div/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default infoContainer

