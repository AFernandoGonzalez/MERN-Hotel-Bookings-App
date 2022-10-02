import './propertyList.css'
import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const PropertyList = () => {
  const mainUrl = ` ${process.env.REACT_APP_API_KEY}hotels/countByType`
  const { data, loading, error } = useFetch(mainUrl)

  console.log(data);
  return (
    <div>
      {
        loading ? ('Loading please wait') :
          (<>
            <Container>
              <Row>
                {data && data?.map((d, index) => {
                  return (

                    <Card style={{ width: '18rem' }} key={index}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>Berlin</Card.Title>
                        <Card.Text>

                          {data[index].count} {data[index].type}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
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

export default PropertyList