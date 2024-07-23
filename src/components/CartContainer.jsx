import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function CartContainer() {
    return (
        <div>
            <div style={{
                padding: '5px 30px',
                height: '50px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                // justifyContent: 'space-between',
                // width: "95%", margin: "0 auto"
            }}>
                <NavLink to="/cart">CARTS</NavLink>
                &nbsp;&nbsp;
                <NavLink to="books">BOOkS</NavLink>
            </div>
            <Outlet />
        </div>
    )
}
