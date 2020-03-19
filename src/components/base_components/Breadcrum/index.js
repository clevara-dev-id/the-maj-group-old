import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'

const BreadcrumbHook = props => {
    return (
        <div style={{position: "relative"}}>
            <Breadcrumb>
                <BreadcrumbItem href="/" active={false}>HOME</BreadcrumbItem>
                <BreadcrumbItem>ABOUT US</BreadcrumbItem>
                <BreadcrumbItem>OCCASIONS</BreadcrumbItem>
                <BreadcrumbItem>OFFERS</BreadcrumbItem>
            </Breadcrumb>
        </div>
    )
}

export default BreadcrumbHook
