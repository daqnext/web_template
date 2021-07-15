import React from "react";
import DashboardLayout from '../../layout/DashboardLayout';
 

class IndexPage extends React.Component {
    constructor(props) {
      super(props);

      this.state=
      {
             
      }      
    }

    render() {return (<DashboardLayout>
                         <div>this is dashboard index</div>
                      </DashboardLayout>);         
        }
}

export default IndexPage;


 