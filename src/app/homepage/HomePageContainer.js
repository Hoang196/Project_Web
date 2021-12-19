import React from 'react'
import "./HomePageContainer.scss"

const HomePageContainer = () => {

    setTimeout(() => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        const tabs = $$(".homePage__container--tab-title-item");
        const panes = $$(".homePage__container--tab-content-pane");

        const tabActive = $(".active1");
        const line = $(".homePage__container--tab-title-line");

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
        });
    }, 500);



    // let counter = 1;
    // setInterval(() => {
    //     document.getElementById('radio' + counter).checked = true;
    //     counter++;
    //     if (counter > 5) {
    //         counter = 1;
    //     }
    // }, 3000);

    return (
        <div className="container-fluid homePage">

            <div className="homePage__bgr">
                <div id="carouselExampleIndicators" className="carousel slide col-xl-10 col-12" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="homePage__bgr--img1"/>
                        </div>
                        <div className="carousel-item">
                            <div className="homePage__bgr--img2"/>
                        </div>
                        <div className="carousel-item">
                            <div className="homePage__bgr--img3"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <div className="homePage__container">
                <div className="homePage__container--tab col-xl-10 col-12">
                    <div className="col-12 col-xl-11">
                        <div className="homePage__container--tabs">
                            <div class="homePage__container--tab-label">
                                Lợi ích của trao đổi đồ cũ
                            </div>

                            <div class="homePage__container--tab-title">
                                <div class="homePage__container--tab-title-item active1">An toàn</div>
                                <div class="homePage__container--tab-title-item">Tiết kiệm</div>
                                <div class="homePage__container--tab-title-item">Đơn giản</div>
                                <div class="homePage__container--tab-title-item">Kết nối</div>
                                <div class="homePage__container--tab-title-item">Phát triển</div>
                                <div class="homePage__container--tab-title-line"/>
                            </div>

                            <div class="homePage__container--tab-content">
                                <div class="homePage__container--tab-content-pane active2">
                                    <h2>An toàn</h2>
                                    <p>An toàn thông tin là sự bảo vệ thông tin và các hệ thống thông tin, tránh bị truy nhập, sử dụng, tiết lộ, gián đoạn, sửa đổi hoặc phá hoại trái phép nhằm bảo đảm tính nguyên vẹn, tính bảo mật và tính khả dụng của thông tin. Theo đó, an ninh thông tin là việc bảo đảm thông tin trên mạng không gây phương hại đến an ninh quốc gia, trật tự an toàn xã hội, bí mật nhà nước, quyền và lợi ích hợp pháp của tổ chức, cá nhân.</p>
                                </div>
                                <div class="homePage__container--tab-content-pane">
                                    <h2>Tiết kiệm</h2>
                                    <p>Tiết kiệm là quốc sách, bởi vì tiết kiệm đem lại lợi ích to lớn cho con người và xã hội. Đối với đất nước Việt Nam ta chưa phát triển, lại bị chiến tranh tàn phá nặng nề, hằng năm hứng chịu biết bao thiên tai.. thì phải tiết kiệm tiết kiệm để tích lũy vốn, phát triển sản xuất, góp phần đưa đất nước phát triển tiến lên, phồn vinh, thịnh vượng, cải thiện đời sống nhân dân. Tiết kiệm giúp đỡ gia đình làm giảm chi tiêu, gánh nặng cho gia đình.</p>
                                </div>
                                <div class="homePage__container--tab-content-pane">
                                    <h2>Đơn giản</h2>
                                    <p>Những điều đơn giản có mặt khắp nơi trong cuộc sống. Chúng ta áp dụng nó trong nhiều khía cạnh như học tập, giao tiếp hay công việc. Hãy nghĩ về sơ đồ mindmap và biểu đồ xương cá, chúng chính là hình ảnh khoa học của sự đơn giản. Hãy nghĩ về những bài báo cáo thực hiện trình chiếu bằng powerpoint thay cho từng tập tài liệu dày cộm đầy chữ đến phát ngán, người ta đã đơn giản hóa nội dung để mang đến cho người xem thông tin dễ hiểu hơn.</p>
                                </div>
                                <div class="homePage__container--tab-content-pane">
                                    <h2>Kết nối</h2>
                                    <p>Với mục đích Kết nối doanh nghiệp, cơ quan đoàn thể, tổ chức gắn với các hoạt động của nhà trường và triển khai gắn kết của nhà trường với cộng đồng, thể hiện trách nhiệm xã hội. Đây là cơ hội để nhà trường được quảng bá hoạt động đào tạo, phục vụ cộng đồng với doanh nghiệp may tại khu vực Hà Nội. Hoạt động kết nối và phục vụ cộng đồng là những hoạt động được thiết lập nhằm tạo sự gắn kết giữa nhà trường với doanh nghiệp, địa phương và các tổ chức quốc tế.</p>
                                </div>
                                <div class="homePage__container--tab-content-pane">
                                    <h2>Phát triển</h2>
                                    <p>Phát triển cũng là quá trình phát sinh và giải quyết các mâu thuẫn khách quan vốn có của sự vật, hiện tượng. Đây là quá trình thống nhất giữa phủ định các nhân tố tiêu cực và kế thừa để nâng cao nhân tố tích cực từ sự vật và những hiện tượng cũ trong hình thái của sự vật, hiện tượng mới. Tính khách quan của sự phát triển còn được biểu hiện trong nguồn gốc của sự vận động và phát triển.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homePage__container">
                <div className="homePage__container--content col-xl-10 col-12">
                    <div className="group-image row">
                        <div className="group-image-1st col-3" />
                        <div className="group-image-2nd col-3" />
                        <div className="group-image-3rd col-3" />
                        <div className="group-image-4th col-3" />
                        <div className="group-image-5th col-4" />
                        <div className="group-image-6th col-4" />
                        <div className="group-image-7th col-4" />
                        <div className="group-image-8th col-6" />
                        <div className="group-image-9th col-6" />
                    </div>
                </div>
            </div>

            <div className="homePage__container">
                <div className="homePage__container--warning col-xl-10 col-12">
                    <div className="homePage__container--warning-content col-xl-11 col-12">

                        <div className="warning-header">
                            <div className="warning-header-title">Cảnh báo lừa đảo</div>
                            <div className="warning-header-title2">
                                *Hiện tại một số đối tượng trên hệ thống đang có hành vi
                                <span style={{color: "#e71515", fontWeight: "500", fontSize: "19px"}}> lừa đảo </span>
                                bằng hình thức <span style={{color: "#e71515", fontWeight: "500", fontSize: "19px"}}>tặng, cho đồ cũ </span>
                                không dùng tới và <span style={{color: "#e71515", fontWeight: "500", fontSize: "19px"}}>thu trước phí ship </span>
                                cao của người nhẹ dạ cả tin, đang mong muốn có món đồ đó.
                            </div>
                            <div className="warning-header-title3">
                                *Chúng tôi kính mong quý khách hàng cảnh giác khi được cho một món đồ yêu cầu gửi
                                <span style={{color: "#e71515", fontWeight: "500", fontSize: "19px"}}> tiền ship trước. </span>
                            </div>
                            <div className="warning-header-title4">
                                *Nếu gặp phải trường hợp như vậy, mong quý khách vui lòng liên hệ với
                                <span style={{color: "#555", fontWeight: "700", fontSize: "24px"}}> Hotline Website: 1900 633833 </span>
                                để cung cấp thông tin đối tượng lừa đảo!
                            </div>
                            <div className="warning-header-title5">
                                *Mọi thông tin về lừa đảo, tặng đồ đều được thông báo chi tiết tên
                                <div className="warning-header-title5-contact">FANPAGE: FB.COM/TraoDoiDoCu</div>
                                <div className="warning-header-title5-contact">WEBSITE: TraoDoiDoCu.VN</div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePageContainer