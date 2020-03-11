import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import {
    AppAside,
    AppBreadcrumb,
    AppFooter,
    AppHeader,
    AppSidebar,
    AppSidebarFooter,
    AppSidebarForm,
    AppSidebarHeader,
    AppSidebarMinimizer,
    AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DefaultLayout extends Component {
    render() {
        console.log('remnder layout')
        return (
            <div className="app">
                <AppHeader fixed>
                    <DefaultHeader logout={this.onLogout}/>
                </AppHeader>
                <div className="app-body">
                <AppSidebar fixed display="lg">
                    <AppSidebarHeader />
                    <AppSidebarForm />
                    <AppSidebarNav navConfig={navigation} {...this.props} />
                    <AppSidebarFooter />
                    <AppSidebarMinimizer />
                </AppSidebar>
                <main className="main">
                    <AppBreadcrumb appRoutes={routes}/>
                    <Container fluid>
                        <Switch>
                            {routes.map((route, idx) => {
                                    return route.component ? (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={props => (
                                                <route.component {...props} />
                                            )}
                                        />
                                    )
                                    : (null);
                                },
                            )}
                            <Redirect from="/" to="/dashboard" />
                        </Switch>
                    </Container>
                </main>
                <AppAside fixed hidden>
                    <DefaultAside />
                </AppAside>
                </div>
                <AppFooter>
                    <DefaultFooter />
                </AppFooter>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);