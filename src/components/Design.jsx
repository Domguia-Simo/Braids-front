import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCarousel, MDBCarouselCaption, MDBCarouselItem, MDBCol, MDBFooter, MDBRow } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
//service
import img5 from "../assets/realImages/fwdpioup/15.jpg"
import img6 from "../assets/realImages/fwdpioup/16.jpg"
import img8 from "../assets/realImages/fwdpioup/3.jpg"
//carousel
import img1 from "../assets/image/22.png"
import img2 from "../assets/image/22.jpg"
import img3 from "../assets/image/20.webp"

import img9 from "../assets/realImages/fwdpioup/3.jpg"
import img11 from "../assets/realImages/fwdpioup/2.jpg"
import img12 from "../assets/realImages/fwdpioup/3.jpg"

import imgM3 from "../assets/img/men/3.jpeg"
import imgM6 from "../assets/img/men/6.jpeg"
import imgM9 from "../assets/image/Passion_twist/passio twist.jpg"
//Boho Braids
import bohoBraids1 from "../assets/image/Boho braids/1.jpg"
import bohoBraids2 from "../assets/image/Boho braids/2.jpg"
//Knotless Braids
import knotlessBraids1 from "../assets/image/Knotless_braids/1.jpg"
import knotlessBraids2 from "../assets/image/Knotless_braids/2.jpg"
//Cornrows
import cornRows1 from "../assets/image/Cornrows/c.jpg"
import cornRows2 from "../assets/image/Cornrows/2.jpg"
//Box Braids
import boxBraids1 from "../assets/image/Box_braids/box braids2.jpg"
import boxBraids2 from "../assets/image/Box_braids/2.jpg"
//Two Strands twist
import twoStrandsTwist1 from "../assets/image/Two_strands/Tt.jpg"
//Crochet braids
import crochetBraids1 from "../assets/image/Crochet_braids/1.jpg"
//Install wigs
import installWig1 from "../assets/image/install_wigs/2.jpg"
import installWig2 from "../assets/image/install_wigs/1.jpg"
import installWig3 from "../assets/image/install_wigs/wig.jpg"
//Passion braids
import passionBraids1 from "../assets/image/Passion_twist/passion.jpg"

//Twist
import twist1 from "../assets/image/Twist/3.jpg"
//Sengalese twist
import sengaleseTwist from "../assets/image/Sengalese_twist/1.jpg"

const item = [
    {
        id: 0,
        title: "Install Wigs",
        description: " test mjaksjs askjs xnjjan xjsaj jashsjsajsa snjahsja sjadjhjdshalk bjsasjhcjhjas jbjk ahjhja shajk saghasgaks cjaj bsagjasa c ahsajkkjas bkajskasjk bsabkdsa",
        catagory: 'Women',
        image: [installWig3, installWig2, imgM3],
        prix: 120,
    },
    {
        id: 1,
        title: "Boho Braids",
        description: "This is the DECS title 1 mjaksjs askjs xnjjan xjsaj jashsjsajsa snjahsja sjadjhjdshalk bjsasjhcjhjas jbjk ahjhja shajk saghasgaks cjaj bsagjasa c ahsajkkjas bkajskasjk bsabkdsa",
        catagory: 'Women',
        image: [bohoBraids1, bohoBraids2, imgM3],
        prix: 220,
    },
    {
        id: 2,
        title: "Knotless Braids",
        description: "This is the DECS title 2 mjaksjs askjs xnjjan xjsaj jashsjsajsa snjahsja sjadjhjdshalk bjsasjhcjhjas jbjk ahjhja shajk saghasgaks cjaj bsagjasa c ahsajkkjas bkajskasjk bsabkdsa",
        catagory: 'Women',
        image: [knotlessBraids1, knotlessBraids2, imgM6],
        prix: 200,
    },
    {
        id: 3,
        title: "Cornrows",
        description: "This is the DECS title 3 mjaksjs askjs xnjjan xjsaj jashsjsajsa snjahsja sjadjhjdshalk bjsasjhcjhjas jbjk ahjhja shajk saghasgaks cjaj bsagjasa c ahsajkkjas bkajskasjk bsabkdsa",
        catagory: 'Women',
        image: [cornRows1, cornRows2, imgM9],
        prix: 180,
    },
    {
        id: 4,
        title: "Box Braids",
        description: "This is the DECS title 4 mjaksjs askjs xnjjan xjsaj jashsjsajsa snjahsja sjadjhjdshalk bjsasjhcjhjas jbjk ahjhja shajk saghasgaks cjaj bsagjasa c ahsajkkjas bkajskasjk bsabkdsa",
        catagory: 'Women',
        image: [boxBraids1, boxBraids2, img3],
        prix: 180,
    },
    {
        id: 5,
        title: "Two Strands twist",
        description: "This is the DECS title 5",
        catagory: 'Men',
        image: [twoStrandsTwist1, img5, img6],
        prix: 120,
    },
    {
        id: 6,
        title: "Crochet braids",
        description: "This is the DECS title 6",
        catagory: 'Women',
        image: [crochetBraids1, img8, img9],
        prix: 160,
    },
    {
        id: 7,
        title: "Passion twist",
        description: "This is the DECS title 6",
        catagory: 'Women',
        image: [passionBraids1, imgM9],
        prix: 200,
    },
    {
        id: 8,
        title: "Twist",
        description: "This is the DECS title 6",
        catagory: 'Men',
        image: [twist1, twist1, twist1],
        prix: 120,
    },
    {
        id: 9,
        title: "Senegalese twist",
        description: "This is the DECS title 7",
        catagory: 'Women',
        image: [sengaleseTwist, img11, img12],
        prix: 220,
    },

]

export default function Design() {
    const navigate = useNavigate();
    const item = useLoaderData();
    const [design, setDesign] = useState(item);

    const braidsDesign = design.map((braid, index) => {
        return (
            <MDBCard
                key={index}
                className='h-50'
                style={{
                    cursor: "pointer", color: "black",
                    border: 'solid 1px rgba(0,0,0,0.5)',
                    height: 'fit-content', width: 'fit-content',
                    boxShadow: '2px 2px 10px grey'
                }}
                onClick={() => {
                    // console.log(braid.designID);
                    let i = parseInt(braid.designID) - 1
                    navigate('/design/' + i)
                    // console.log("click");
                }}
            >
                {/* <a href='#detail'> */}
                    <div style={{ deisplay: 'flex', flexDirection: 'column' }}>
                        {/* <MDBCardImage
                    src={braid.image[0]}
                    alt='...'
                    position='top'
                    width={"200px"}
                    height={"200px"}
                /> */}
                        <img src={braid.image[0]} width='250px' height='200px' />
                        <div
                            style={{
                                deisplay: 'flex', flexDirection: 'column',
                                rowGap: '10px', padding: '5px 0px'
                            }}
                        >
                            <span>Design style :<b>{braid.name}</b></span>
                            <br />
                            <span> Price:<b>{braid.price} $</b></span>
                        </div>
                    </div>
                {/* </a> */}
                {/* <MDBCardBody> */}
                {/* <MDBCardTitle>{braid.title}</MDBCardTitle> */}
                {/* <MDBCardText> */}
                {/* {ite} */}
                {/* <div
                            style={{
                                color: 'black',
                                // fontWeight: 'bold',
                                letterSpacing: '1px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                            <span>
                                {braid.prix} 
                            </span>
                            
                        </div> */}
                {/* </MDBCardText> */}
                {/* </MDBCardBody> */}
            </MDBCard>
            // </a>
        )
    })

    return (
        <div>
            <div style={{
                padding: '5px 30px',
                height: '50px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: "95%", margin: "0 auto"
            }}>

                <div>
                    <select id="design"
                        onChange={(e) => {
                            if (e.target.value.toLocaleLowerCase() === 'all') {
                                setDesign(item)
                            } else {
                                let val = item.filter(opt => opt.catagory.toLocaleLowerCase() === e.target.value.toLocaleLowerCase())
                                setDesign(val)
                            }
                        }}
                    >
                        <option key="all">ALL</option>
                        <option key="women">Women</option>
                        <option key="men">Men</option>
                    </select>
                    <label htmlFor='design'> category </label>
                </div>

            </div>
            <br />

            <div id='detail'>
                <Outlet />
            </div>

            <div>
                <MDBRow className='row-cols-1 row-cols-md-4 g-4'
                    style={{
                        width: '100%',
                        justifyContent: 'space-evenly',
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        columnGap: '20px',
                        rowGap: '20px',
                        paddingBottom: '50px'
                    }}>
                    {/* {design.map((item, i) => (
                        <MDBCol key={i} 
                        style={{
                            border:'solid 1px grey'
                        }}
                        >
                                <MDBCard
                                    className='h-50'
                                    style={{ 
                                        cursor: "pointer", color: "black",
                                        border:'solid 1px red',
                                        height:'fit-content'
                                    }}
                                    onClick={() => {
                                        console.log(item.id);
                                       navigate('/design/' + item.id)
                                        console.log("click");
                                    }}
                                >
                                    <MDBCardImage
                                        src={item.image[0]}
                                        alt='...'
                                        position='top'
                                        width={"200px"}
                                        height={"200px"}
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle>{item.title}</MDBCardTitle>
                                        <MDBCardText>
                                            <div
                                                style={{
                                                    color: 'black',
                                                    // fontWeight: 'bold',
                                                    letterSpacing: '1px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between'
                                                }}>
                                                <span>
                                                    ${item.prix} 
                                                </span>
                                              
                                            </div>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                        </MDBCol>
                    ))} */}

                    {braidsDesign}

                </MDBRow>
            </div>
        </div>
    )
}




