import React from "react"
import "./homePageContainer.scss"

const homePageAdmin = () => {

    const onSearch = (e) => {
        e.preventDefault()
    }

    return (
        <div className="container-fluid homePageAdmin">
            <div className="homePageAdmin--content ">

                <div className="homePageAdmin--header">
                    <div className="homePageAdmin-navbar">
                        <div className="homePageAdmin-navbar-title col-xl-6 col-6">
                            <i className="fas fa-tasks" />
                            Quản lý hệ thống
                        </div>
                        <form className="form-inline homePageAdmin-navbar-search col-xl-4 col-6"
                              onSubmit={(e) => onSearch(e)}>
                            <span className="homePageAdmin-navbar-search-group">
                                <input className="homePageAdmin-navbar-search-group-input" type="search" placeholder="Nhập để tìm kiếm"
                                       aria-label="Search" id="navbar-search"/>
                                <i className="fa fa-search" />
                            </span>
                        </form>
                    </div>
                </div>

                <div className="homePageAdmin--container">

                    <div className="homePageAdmin--container-quantity">

                        <div className="homePageAdmin-quantity-group">
                            <div className="homePageAdmin-quantity-title">
                                <div className="homePageAdmin-quantity-title-number">
                                    10
                                </div>
                                <div className="homePageAdmin-quantity-title-name">
                                    Người dùng
                                </div>
                            </div>
                            <div className="homePageAdmin-quantity-icon">
                                <i className="fas fa-users"/>
                            </div>
                        </div>

                        <div className="homePageAdmin-quantity-group">
                            <div className="homePageAdmin-quantity-title">
                                <div className="homePageAdmin-quantity-title-number">
                                    20
                                </div>
                                <div className="homePageAdmin-quantity-title-name">
                                    Sản phẩm
                                </div>
                            </div>
                            <div className="homePageAdmin-quantity-icon">
                                <i className="fab fa-product-hunt" />
                            </div>
                        </div>

                        <div className="homePageAdmin-quantity-group">
                            <div className="homePageAdmin-quantity-title">
                                <div className="homePageAdmin-quantity-title-number">
                                    30
                                </div>
                                <div className="homePageAdmin-quantity-title-name">
                                    Giao dịch
                                </div>
                            </div>
                            <div className="homePageAdmin-quantity-icon">
                                <i className="fas fa-sync-alt" />
                            </div>
                        </div>

                        <div className="homePageAdmin-quantity-group">
                            <div className="homePageAdmin-quantity-title">
                                <div className="homePageAdmin-quantity-title-number">
                                    12.5K
                                </div>
                                <div className="homePageAdmin-quantity-title-name">
                                    Lượt xem
                                </div>
                            </div>
                            <div className="homePageAdmin-quantity-icon">
                                <i className="fas fa-eye" />
                            </div>
                        </div>

                    </div>

                    <div className="recent-grid">
                        <div className="projects">
                            <div className="card">
                                <div className="card-header">
                                    <h2>Recent Project</h2>
                                    <button> See all <i className="fas fa-arrow-right" /> </button>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table style={{width: "100%"}}>
                                            <thead>
                                            <tr>
                                                <td>Project Title</td>
                                                <td>Department</td>
                                                <td>Status</td>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            <tr>
                                                <td>UI/UX Design</td>
                                                <td>UI Team</td>
                                                <td>
                                                    <span className="status purple" />
                                                    review
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Web development</td>
                                                <td>Frontend</td>
                                                <td>
                                                    <span className="status pink" />
                                                    in progress
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Hshop app</td>
                                                <td>Mobile Team</td>
                                                <td>
                                                    <span className="status orange" />
                                                    pending
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>UI/UX Design</td>
                                                <td>UI Team</td>
                                                <td>
                                                    <span className="status purple" />
                                                    review
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Web development</td>
                                                <td>Frontend</td>
                                                <td>
                                                    <span className="status pink" />
                                                    in progress
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Hshop app</td>
                                                <td>Mobile Team</td>
                                                <td>
                                                    <span className="status orange" />
                                                    pending
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>UI/UX Design</td>
                                                <td>UI Team</td>
                                                <td>
                                                    <span className="status purple" />
                                                    review
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Web development</td>
                                                <td>Frontend</td>
                                                <td>
                                                    <span className="status pink" />
                                                    in progress
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Hshop app</td>
                                                <td>Mobile Team</td>
                                                <td>
                                                    <span className="status orange" />
                                                    pending
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Web development</td>
                                                <td>Frontend</td>
                                                <td>
                                                    <span className="status pink" />
                                                    in progress
                                                </td>
                                            </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="customers">
                            <div className="card">
                                <div className="card-header">
                                    <h2>New customer</h2>
                                    <button> See all <i className="fas fa-arrow-right" /> </button>
                                </div>
                                <div className="card-body">

                                    <div className="customer">
                                        <div className="info">
                                            <img src="../../../images/avatar.png" alt="" style={{width: "40px", height: "40px"}}/>
                                            <div>
                                                <h4>Nguyen Duc Hoang</h4>
                                                <small>CEO Excerpt</small>
                                            </div>
                                        </div>
                                        <div className="contact">
                                            <i className="fas fa-user"/>
                                            <i className="fas fa-comment"/>
                                            <i className="fas fa-phone"/>
                                        </div>
                                    </div>

                                    <div className="customer">
                                        <div className="info">
                                            <img src="../../../images/avatar.png" alt="" style={{width: "40px", height: "40px"}}/>
                                            <div>
                                                <h4>Nguyen Duc Hoang</h4>
                                                <small>CEO Excerpt</small>
                                            </div>
                                        </div>
                                        <div className="contact">
                                            <i className="fas fa-user"/>
                                            <i className="fas fa-comment"/>
                                            <i className="fas fa-phone"/>
                                        </div>
                                    </div>

                                    <div className="customer">
                                        <div className="info">
                                            <img src="../../../images/avatar.png" alt="" style={{width: "40px", height: "40px"}}/>
                                            <div>
                                                <h4>Nguyen Duc Hoang</h4>
                                                <small>CEO Excerpt</small>
                                            </div>
                                        </div>
                                        <div className="contact">
                                            <i className="fas fa-user"/>
                                            <i className="fas fa-comment"/>
                                            <i className="fas fa-phone"/>
                                        </div>
                                    </div>

                                    <div className="customer">
                                        <div className="info">
                                            <img src="../../../images/avatar.png" alt="" style={{width: "40px", height: "40px"}}/>
                                            <div>
                                                <h4>Nguyen Duc Hoang</h4>
                                                <small>CEO Excerpt</small>
                                            </div>
                                        </div>
                                        <div className="contact">
                                            <i className="fas fa-user"/>
                                            <i className="fas fa-comment"/>
                                            <i className="fas fa-phone"/>
                                        </div>
                                    </div>

                                    <div className="customer">
                                        <div className="info">
                                            <img src="../../../images/avatar.png" alt="" style={{width: "40px", height: "40px"}}/>
                                            <div>
                                                <h4>Nguyen Duc Hoang</h4>
                                                <small>CEO Excerpt</small>
                                            </div>
                                        </div>
                                        <div className="contact">
                                            <i className="fas fa-user"/>
                                            <i className="fas fa-comment"/>
                                            <i className="fas fa-phone"/>
                                        </div>
                                    </div>

                                    <div className="customer">
                                        <div className="info">
                                            <img src="../../../images/avatar.png" alt="" style={{width: "40px", height: "40px"}}/>
                                            <div>
                                                <h4>Nguyen Duc Hoang</h4>
                                                <small>CEO Excerpt</small>
                                            </div>
                                        </div>
                                        <div className="contact">
                                            <i className="fas fa-user"/>
                                            <i className="fas fa-comment"/>
                                            <i className="fas fa-phone"/>
                                        </div>
                                    </div>

                                    <div className="customer">
                                        <div className="info">
                                            <img src="../../../images/avatar.png" alt="" style={{width: "40px", height: "40px"}}/>
                                            <div>
                                                <h4>Nguyen Duc Hoang</h4>
                                                <small>CEO Excerpt</small>
                                            </div>
                                        </div>
                                        <div className="contact">
                                            <i className="fas fa-user"/>
                                            <i className="fas fa-comment"/>
                                            <i className="fas fa-phone"/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default homePageAdmin
