import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const BreadcrumbHook = props => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <Navlink to="/">Home</Navlink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Navlink to="/about" activeStyle={{ color: "#C4964B" }}>About</Navlink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Navlink to="/occasions" activeStyle={{ color: "#C4964B" }}>Occasions</Navlink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Navlink to="/offers" activeStyle={{ color: "#C4964B" }}>Offers</Navlink>
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

const Navlink = styled(NavLink)`
    font-family: Josefin Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 22px;
    text-transform: uppercase;
    color: #C4C9D2;
    text-decoration: none;
    :hover {
        text-decoration: none;
    }
`;

export {BreadcrumbHook}
