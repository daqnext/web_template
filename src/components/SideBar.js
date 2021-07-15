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
                                    <a className={"sidebar-link text-muted "+ (this.checkactive("/blank") ? "active":"") } href="/blank">
                                        <i className="far fa-sticky-note"/><span className="sidebar-link-title">Blank Page</span>
                                    </a>
                                </li>


                                <li className="sidebar-list-item">
                                    <a className="sidebar-link text-muted" href="#" data-bs-target="#documentDropDown" data-bs-toggle="collapse"> 
                                        <i className="fas fa-book"></i><span className="sidebar-link-title">Document</span>
                                    </a>
                                    <ul className={"sidebar-menu list-unstyled "+ (this.checkactive("/document") ? "":"collapse")}  id="documentDropDown">
                                        <li className="sidebar-list-item"><a className={"sidebar-link text-muted "+ (this.checkactive("/document/showcase") ? "active":"")} href="/document/showcase"><i className="fas fa-bomb"></i>Show Case</a></li>
                                        <li className="sidebar-list-item"><a className={"sidebar-link text-muted "+ (this.checkactive("/document/icon") ? "active":"")} href="/document/icon"><i className="fas fa-icons"></i>Icons</a></li>
                                    </ul>
                                </li>

                                

                                <li className="sidebar-list-item">
                                    <a className="sidebar-link text-muted" href="#" data-bs-target="#demopageDropDown" data-bs-toggle="collapse"> 
                                        <i className="fas fa-pager"></i><span className="sidebar-link-title">Demo Pages</span>
                                    </a>
                                    <ul className={"sidebar-menu list-unstyled "+ (this.checkactive("/demopage") ? "":"collapse")}  id="demopageDropDown">
                                        <li className="sidebar-list-item"><a className={"sidebar-link text-muted "+ (this.checkactive("/demopage/signup") ? "active":"")} href="/demopage/signup"><i className="far fa-registered"></i>Sign Up</a></li>
                                        <li className="sidebar-list-item"><a className={"sidebar-link text-muted "+ (this.checkactive("/demopage/signin") ? "active":"")} href="/demopage/signin"><i className="fas fa-key"></i>Sign In</a></li>  
                                    </ul>
                                </li>


                                <li className="sidebar-list-item">
                                    <a className="sidebar-link text-muted" href="#" data-bs-target="#componentsDropDown" data-bs-toggle="collapse"> 
                                        <i className="fas fa-cogs"></i><span className="sidebar-link-title">Components</span>
                                    </a>
                                    <ul className={"sidebar-menu list-unstyled "+ (this.checkactive("/components") ? "":"collapse")}  id="componentsDropDown">
                                        <li className="sidebar-list-item"><a className={"sidebar-link text-muted "+ (this.checkactive("/components/notify") ? "active":"")} href="/components/notify"><i className="fas fa-comment-dots"></i> Notify</a></li>
                                        <li className="sidebar-list-item"><a className={"sidebar-link text-muted "+ (this.checkactive("/components/pageloader") ? "active":"")} href="/components/pageloader"><i className="fas fa-spinner"></i>Page Loader</a></li>
                                    </ul>
                                </li>


                            </ul>
                        </div>
            );         
        }
}

export default SideBar;


 



 