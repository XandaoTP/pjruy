
import { Button, Container, Row } from "react-bootstrap";
import { FormHotel } from "../../components/FormHotel";
import { Layout } from "../../components/Layout";
import styled from 'styled-components'
import { useState } from "react"
import Hotel1 from '../../assets/img/hoteis/hotel1.JPG'
import Hotel2 from '../../assets/img/hoteis/hotel2.JPG'
import Hotel3 from '../../assets/img/hoteis/hotel3.JPG'
import Hotel4 from '../../assets/img/hoteis/hotel4.JPG'
import Hotel5 from '../../assets/img/hoteis/hotel5.JPG'
import Hotel6 from '../../assets/img/hoteis/hotel6.JPG'
import Hotel7 from '../../assets/img/hoteis/hotel7.JPG'
import Hotel8 from '../../assets/img/hoteis/hotel8.JPG'
import Hotel9 from '../../assets/img/hoteis/hotel9.JPG'
import Hotel10 from '../../assets/img/hoteis/hotel10.JPG'


export function HomeView() {
    const  [hoteis, sethoteis] = useState([
        {
            id: 1,
            filter: 1,
            img: Hotel1
        },
        {
            id: 2,
            filter: 2,
            img: Hotel2
        },
        {
            id: 3,
            filter: 2,
            img: Hotel3
        },
        {
            id: 4,
            filter: 1,
            img: Hotel4
        },
        {
            id: 5,
            filter: 1,
            img: Hotel5
        },
        {
            id: 6,
            filter: 2,
            img: Hotel6
        },
        {
            id: 7,
            filter: 2,
            img: Hotel7
        },
        {
            id: 8,
            filter: 1,
            img: Hotel8
        },
        {
            id: 9,
            filter: 2,
            img: Hotel9
        },
        {
            id: 10,
            filter: 1,
            img: Hotel10
        },
    ])

    const filter = (value) => {
        const newhoteis = hoteis.filter(hotel => hotel.filter !== value);
        sethoteis(newhoteis);
      };
    return (
        <>
            <Layout>
                <StyledContainer className='d-flex gap-5'>
                    <Row>
                        <div>
                            <h4 className="text-md-left nt-4">Filtrar resultados por:</h4>
                            <FormHotel filter={filter}/>
                        </div>
                    </Row>
                    <Row>
                        <h3>Hotéis</h3>
                        <div>
                        {hoteis.map(hotel =>(
                            <img key={hotel.id} src={hotel.img}/>
                            ))
                        }
                        </div>
                    </Row>
                </StyledContainer>
            </Layout>
        </>
    )
}

const StyledContainer = styled(Container)`
display: flex ;`