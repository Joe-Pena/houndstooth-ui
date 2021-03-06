import React from 'react'
import {
  Row,
  Col,
  Button,
  Icon,
  ExtLink
} from 'atoms'
import {
  BowtieLogo,
  HoundstoothLogo
} from 'molecules'

const Welcome = () => {
  return (
    <section className='welcome-screen'>
      <Row className='flex-center'>
        <Col className='column-1' sm='12'>
          <HoundstoothLogo size='lg' />
        </Col>
        <Col className='flex flex-center' sm='12'>
          by
          <ExtLink href='https://bowtie.co/'>
            <BowtieLogo color='black' size='sm' />
          </ExtLink>
        </Col>
        <Col className='flex flex-center column-3' sm='12'>
          <Button className='btn-login' href={'/login'}>
            <Icon className={'fab fa-github'} size='md' />
            <div>Login with Github</div>
          </Button>
        </Col>
      </Row>
    </section>

  )
}

export default Welcome
