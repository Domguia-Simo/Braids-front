import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom'

import Login, { loginLoader } from './components/Login'


import './assets/fontawesome/css/all.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import Header from './components/Header'


import Home, { homeLoader } from './components/Home'
import Design from './components/Design'
import DesignDetail from './components/design/DesignDetail';
import DesignDetail2 from './components/design/DesignDetail2';
import Dashbroad from './components/Dashbroad';
import DashbroadBook, { dashboardBookLoader } from './components/Dasbroad/DashbroadBook';
import DashbroadDesign, { dashboardDesignLoader } from './components/Dasbroad/DashbroadDesign';
import { ViewsDetialError } from './components/error';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/"
                element={<Header />}
                loader={loginLoader}
            // loader={dashboardDesignLoader}
            // errorElement={<ViewsDetialError />}

            >
                <Route
                    // index
                    element={<Home />}
                    path='/'
                    loader={homeLoader}
                // loader={landingPageLoader}
                // errorElement={<ViewsDetialError />}
                >
                    <Route
                        path=":id"
                        element={<DesignDetail />}
                        loader={homeLoader}
                        errorElement={<ViewsDetialError />}
                    />
                </Route>

                <Route
                    path="design"
                    element={<Design />}
                    loader={homeLoader}
                // loader={landingPageLoader}
                // errorElement={<ViewsDetialError />}
                >
                    <Route
                        path=":id"
                        element={<DesignDetail2 />}
                        loader={homeLoader}
                    />
                </Route>
                <Route
                    path="dashbroad"
                    element={<Dashbroad />}
                    loader={loginLoader}
                // errorElement={<ViewsDetialError />}
                >
                    <Route
                        path='booklist'
                        element={<DashbroadBook />}
                        loader={dashboardBookLoader}
                    />
                    <Route
                        path='desginlist'
                        element={<DashbroadDesign />}
                        loader={dashboardDesignLoader}
                    />
                </Route>
                {/* <Route
                path="cart"
                element={<CartContainer />}
            // loader={landingPageLoader}
            // errorElement={<ViewsDetialError />}
            >
                <Route
                    index
                    element={<CartDetail />}
                // loader={landingPageLoader}
                // errorElement={<ViewsDetialError />}
                />
                <Route
                    path="books"
                    element={<Books />}
                // loader={landingPageLoader}
                // errorElement={<ViewsDetialError />}
                />
            </Route>
            <Route
                path="login"
                element={<Login />}
            // loader={loginLoader}
            /> */}
                <Route path="*" element={<>NotFound </>} />
            </Route>
            <Route
                path="login"
                element={<Login />}
            // loader={landingPageLoader}
            // errorElement={<ViewsDetialError />}
            />
        </>
    )
)
const App = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default App