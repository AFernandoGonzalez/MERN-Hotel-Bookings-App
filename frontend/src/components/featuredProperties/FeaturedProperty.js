import './featuredProperty.css'
import React from 'react'
import useFetch from '../../hooks/useFetch';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';



const FeaturedProperty = () => {
  const mainUrl = ` ${process.env.REACT_APP_API_KEY}hotels?featured=true&limit=4`
  const { data, loading, error } = useFetch(mainUrl)

  console.log(data);
  return (
    <div>
      {
        loading ? ('Loading please wait') :
          (<>
            <Container>
              <Row>
                {data && data?.map((item, index) => {
                  return (
                    <Card style={{ width: '18rem' }} key={index}>
                      <Card.Img
                        variant="top"
                        src={item.photos[0]}
                        alt=""
                      />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                          {item.city}
                        </Card.Text>
                        <Card.Text>
                          starting price ${item.cheapestPrice}
                        </Card.Text>
                        {item.rating && <div>
                          <button>{item.rating}</button>
                          <span>excellent</span>
                        </div>}
                      </Card.Body>
                    </Card>
                  )
                })}
              </Row>
            </Container>
          </>)

      }
    </div>
  )
}

export default FeaturedProperty