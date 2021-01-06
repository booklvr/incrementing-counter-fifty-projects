import React, { Fragment } from 'react'
import IncrementingCounter from './components/IncrementingCounter'

const data = [
  {
    icon: 'fa-twitter',
    target: 12000,
    title: 'Twitter Followers',
  },
  {
    icon: 'fa-youtube',
    target: 5000,
    title: 'Youtube SubScribers',
  },
  {
    icon: 'fa-facebook',
    target: 7500,
    title: 'Facebook Fans',
  },
]

const App = () => {
  return (
    <Fragment>
      {data.map((item, index) => (
        <IncrementingCounter key={index} data={item}>
          hello
        </IncrementingCounter>
      ))}
    </Fragment>
  )
}

export default App
