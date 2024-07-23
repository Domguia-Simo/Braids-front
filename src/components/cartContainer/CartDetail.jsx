import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow } from 'mdb-react-ui-kit'
import img22 from "../../assets/img/22.webp"
import img23 from "../../assets/img/23.webp"
import img24 from "../../assets/img/24.webp"
import img25 from "../../assets/img/25.webp"
import img26 from "../../assets/img/26.webp"
import img27 from "../../assets/img/27.webp"
import img2 from "../../assets/img/2.webp"
import img3 from "../../assets/img/3.webp"
import img4 from "../../assets/img/4.webp"
import img5 from "../../assets/img/5.webp"
import img6 from "../../assets/img/6.webp"
import img7 from "../../assets/img/7.webp"
const movieSlide = [
    {
        title: "this is the title 22",
        description: "This is the DECS",
        image: img2,
        prix: 231.000,
    }, {
        title: "this is the title 1",
        description: "This is the DECS",
        image: img3,
        prix: 231000,
    }, {
        title: "this is the title 24",
        description: "This is the DECS",
        image: img4,
        prix: 231.555000,
    }, {
        title: "this is the title 25",
        description: "This is the DECS",
        image: img5,
        prix: 231.12000,
    }, {
        title: "this is the title 26",
        description: "This is the DECS",
        image: img6,
        prix: 231.23000,
    }, {
        title: "this is the title 27",
        description: "This is the DECS",
        image: img7,
        prix: 231.155000,
    },
    {
        title: "this is the title 22",
        description: "This is the DECS",
        image: img22,
        prix: 231.000,
    }, {
        title: "this is the title 1",
        description: "This is the DECS",
        image: img23,
        prix: 231.000,
    }, {
        title: "this is the title 24",
        description: "This is the DECS",
        image: img24,
        prix: 231.000,
    }, {
        title: "this is the title 25",
        description: "This is the DECS",
        image: img25,
        prix: 231.000,
    }, {
        title: "this is the title 26",
        description: "This is the DECS",
        image: img26,
        prix: 231.000,
    }, {
        title: "this is the title 27",
        description: "This is the DECS",
        image: img27,
        prix: 231.000,
    },
    {
        title: "this is the title 22",
        description: "This is the DECS",
        image: img22,
        prix: 231.000,
    }, {
        title: "this is the title 1",
        description: "This is the DECS",
        image: img23,
        prix: 231.000,
    }, {
        title: "this is the title 24",
        description: "This is the DECS",
        image: img24,
        prix: 231.000,
    }
]
export default function CartDetail() {
    return (
        <div>
            <MDBRow className='row-cols-1 row-cols-md-3 g-3 '>
                {movieSlide.map((video, i) => (
                    <MDBCol>
                        <MDBCard
                            className="h-100"
                            style={{
                                background: "rgba(255, 255, 230, 0.9)",
                            }}
                        >
                            <MDBRow className=''>
                                <MDBCol >
                                    <MDBCardImage
                                        src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp'
                                        alt='...'
                                        // fluid
                                        height={"150px"}
                                    />
                                </MDBCol>
                                <MDBCol >
                                <MDBCardBody>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                        This
                                    </MDBCardText>
                                    <MDBCardText>
                                        <small className='text-muted'>Last updated 3 mins ago</small>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                ))}
            </MDBRow>
        </div>
    )
}
