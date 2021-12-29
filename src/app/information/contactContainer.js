import React from "react";
import "./contactContainer.scss"

const contactContainer = () => {
    return (
        <div className="container-fluid contactBase">
            <div className="contactPage">
                <div className="contactPage__content">
                    <div className="contactPage__content--header">
                        <h1>Liên hệ với chúng tôi mỗi khi cần</h1>
                    </div>
                    <div className="contactPage__content--container">
                        <div className="contactPage__content--container-group">
                            <i className="fas fa-map-marker-alt group-icon" />
                            <div className="group-message">
                                Đại học Công nghệ, 144 Xuân Thủy, Cầu Giấy, Hà Nội. <br />
                                521 Cổ nhuế, Cổ nhuế 2, Bắc Từ Liêm, Hà Nội.
                            </div>
                        </div>
                        <div className="contactPage__content--container-group">
                            <i className="fas fa-envelope group-icon" />
                            <div className="group-message">
                                Besttopuet@gmail.com <br />
                                19020303@vnu.edu.vn
                            </div>
                        </div>
                        <div className="contactPage__content--container-group">
                            <i className="fas fa-phone group-icon" />
                            <div className="group-message">
                                0322662828 <br />
                                0966393939
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contactContainer