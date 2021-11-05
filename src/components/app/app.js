import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry';
import Header from '../header/header';
import MainPage from '../pages/main';
import Login from '../pages/login';
import NewsPage from '../pages/news';
import ProfilePage from '../pages/profile';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import { Redirect } from 'react-router';




function  requireAuth(nextState, replace) {
    const isAdmin = localStorage.getItem('isAdmin');

    if(isAdmin === "false") {

      String.toString().replace({
            pathname: '/login'
        });
        }
    
};



export default class App extends Component {


  
    render() {

   

        return (
            <ErrorBoundry >
                <Router>
                 <Header />
                <div className="test-app header text-success ">
               <Switch>
                <Route path="/"
                     render={() => <h2>Welcome to Test#1</h2>}
                     exact />
                <Route path="/news"
                 component={NewsPage} />


                <Route 
                path="/login" 
                render={() => (
                    <Login />
                )}/>
                <Route path="/main" component={MainPage} />


                
                <Route 
                 
                
                path="/profile" 
                render={() => (
                       requireAuth() ? (
                           <Redirect to="/login" />
                       ) : (
                           <ProfilePage />
                       )
                )} />




                <Route 
                render={() => (
                    <h2>Page not found</h2> 
                )} />
               </Switch>

                </div>
                </Router>
                
            </ErrorBoundry>
        );
    };
};
