import { useEffect, useState } from "react"
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBFooter, MDBRow } from 'mdb-react-ui-kit'
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom"

function Dashbroad(params) {
    const user = useLoaderData();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [screenHeight, setScreenHeight] = useState(window.innerHeight)
    const handleChangeWidth = () => {
        setScreenWidth(window.innerWidth)
        // setScreenHeight()
    }
    useEffect(() => {
        window.addEventListener('resize', handleChangeWidth);
        return () => {
            window.removeEventListener('resize', handleChangeWidth);
        };
    }, [])
    if (user.isLogin) {
        return (
            <>
                <div id='adminDashbroad' style={{ height: screenHeight < 500 ? "500px" : screenHeight * 0.8 }}>
                    <div id="sidebar">
                        <nav>
                            <ul>
                                <li key={1}>
                                    <NavLink className="sidebarOption" to={'desginlist'}>
                                        <i>Design</i>
                                    </NavLink>
                                </li>
                                <li key={3}>
                                    <NavLink className="sidebarOption" to={'booklist'}>
                                        <i>Book</i>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div id="itemTable">
                        <Outlet />
                    </div>
                </div>
            </>
        )
    } else {
        window.location.pathname = '/'
    }
}
export default Dashbroad;