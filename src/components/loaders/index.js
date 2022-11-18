import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const CircularLoaders = () => (
  <div style={{ width: '100%'}}>

    <Segment>
      {/* <Dimmer active> */}
        <Loader size='large' inline='centered'>
            <h1 style={{ textAlign: 'center'}}>Loading</h1>
        </Loader>
      {/* </Dimmer> */}

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

  </div>
)

export default CircularLoaders