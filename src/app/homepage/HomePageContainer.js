import React from 'react'
import "./HomePageContainer.scss"

const HomePageContainer = (props) => {

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


    var counter = 1;
    setInterval(() => {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 5) {
            counter = 1;
        }
    }, 3000);

    return (
        <div className="container-fluid homePage">
            <div className="homePage__container col-11 col-xl-10 row">
                <div className="homePage__container--tab col-xl-7 col-12">
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
                                <div class="homePage__container--tab-title-line"></div>
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

                <div className="homePage__container--slider col-xl-5 col-12">
                    <div className="homePage__container--slider-slides">
                        <input type="radio" name="radio-btn" id="radio1"></input>
                        <input type="radio" name="radio-btn" id="radio2"></input>
                        <input type="radio" name="radio-btn" id="radio3"></input>
                        <input type="radio" name="radio-btn" id="radio4"></input>
                        <input type="radio" name="radio-btn" id="radio5"></input>

                        <div class="homePage__container--slider-slides-slide first">
                            <div class="homePage__container--slider-slides-slide-1"></div>
                        </div>
                        <div class="homePage__container--slider-slides-slide">
                            <div class="homePage__container--slider-slides-slide-2"></div>
                        </div>
                        <div class="homePage__container--slider-slides-slide">
                            <div class="homePage__container--slider-slides-slide-3"></div>
                        </div>
                        <div class="homePage__container--slider-slides-slide">
                            <div class="homePage__container--slider-slides-slide-4"></div>
                        </div>
                        <div class="homePage__container--slider-slides-slide">
                            <div class="homePage__container--slider-slides-slide-5"></div>
                        </div>

                        <div class="homePage__container--slider-slides-navigation">
                            <div class="homePage__container--slider-slides-navigation-btn1"></div>
                            <div class="homePage__container--slider-slides-navigation-btn2"></div>
                            <div class="homePage__container--slider-slides-navigation-btn3"></div>
                            <div class="homePage__container--slider-slides-navigation-btn4"></div>
                            <div class="homePage__container--slider-slides-navigation-btn5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePageContainer