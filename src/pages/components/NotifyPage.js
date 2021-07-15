import React from "react";
import DashboardLayout from '../../layout/DashboardLayout';
import Prism from "prismjs" ;
import "../../prism.css";
 

class NotifyPage extends React.Component {
    constructor(props) {
      super(props);

      this.state=
      {
             
      }      
    }

    render() {return (
<DashboardLayout>
<div className="page-header"><h1 className="page-heading">Notify-Tutorial</h1></div>
<pre>
<code className="language-javascript" >
{`
// function window.notify(type,content="",title="") type = 'success'|'error'|'info'
// example:
window.notify('success','this is content','this is title');
window.notify('error','this is content','this is title');
window.notify('info','this is content','this is title');


`}
</code>
</pre>

</DashboardLayout>
);         
        }
}

export default NotifyPage;


 

 