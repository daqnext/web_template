import React from "react";

class SideBar extends React.Component {

  
    checkactive(prefix) {
        if(window.location.pathname.startsWith(prefix)){
            return true;
        }
        return false;
    }

    constructor(props) {
      super(props);

      this.state=
      {
        
      }      
    }

    render() {return (
                        <div className="sidebar py-3" id="sidebar">
                            <h6 className="sidebar-heading">Main</h6>
                            <ul className="list-unstyled">

                                <li className="sidebar-list-item">
                                    <a className={"sidebar-link text-muted "+ (this.checkactive("/document") ? "active":"") } href="/document/index">
                                        <i className="fas fa-book"></i><span className="sidebar-link-title">Document</span>
                                    </a>
                                </li>

                                <li className="sidebar-list-item">
                                    <a className="sidebar-link text-muted" href="#" data-bs-target="#pageDropDown" data-bs-toggle="collapse"> 
                                        <i className="fas fa-pager"></i><span className="sidebar-link-title">Demo Pages</span>
                                    </a>
                                    <ul className={"sidebar-menu list-unstyled "+ (this.checkactive("/demopage") ? "":"collapse")}  id="pageDropDown">
                                        <li className="sidebar-list-item"><a className={"sidebar-link text-muted "+ (this.checkactive("/demopage/signup") ? "active":"")} href="/demopage/signup"><i className="far fa-registered"></i>Sign Up</a></li>
                                        <li className="sidebar-list-item"><a className={"sidebar-link text-muted "+ (this.checkactive("/demopage/signin") ? "active":"")} href="/demopage/signin"><i className="fas fa-key"></i>Sign In</a></li>  
                                    </ul>
                                </li>

                            </ul>
                        </div>
            );         
        }
}

export default SideBar;


 



 