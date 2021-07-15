import React from 'react';
 
import DocuIndex from './pages/document/IndexPage';
import DashboardIndex from './pages/dashboard/IndexPage';
import SignInPage from './pages/demopage/SignInPage';
import SignUpPage from './pages/demopage/SignUpPage';

function App() {

    let router_map = {
         "/document/index":DocuIndex,
         "/demopage/signin":SignInPage,
         "/demopage/signup":SignUpPage
    };
     
    for (const urlkey in router_map) {
        if (window.location.pathname===urlkey) {
            const Page = router_map[urlkey];
            return <Page />;
        }
    }

    return <DashboardIndex />;
}

export default App;
