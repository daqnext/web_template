import React from 'react';
 
import ShowcasePage from './pages/document/ShowcasePage';
import SignInPage from './pages/demopage/SignInPage';
import SignUpPage from './pages/demopage/SignUpPage';
import NotifyPage from './pages/components/NotifyPage';
import BlankPage from './pages/BlankPage';
import PageLoaderPage from './pages/components/PageLoaderPage';
import IconPage from './pages/document/IconPage';

function App() {

    let router_map = {
         "/document/showcase":ShowcasePage,
         "/document/icon":IconPage,
         "/demopage/signin":SignInPage,
         "/demopage/signup":SignUpPage,
         '/components/notify':NotifyPage,
         '/components/pageloader':PageLoaderPage
    };
     
    for (const urlkey in router_map) {
        if (window.location.pathname===urlkey) {
            const Page = router_map[urlkey];
            return <Page />;
        }
    }

    return <BlankPage />;
}

export default App;
