import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Todo from './Todo'

describe('<Todo />', () => {
  let todo

  beforeEach(() => {
    todo = {
      text: 'Test todo',
      done: false,
    }
  })

  test('renders correct text and "Set as done" button is shown', () => {
    const container = render(<Todo todo={todo} />).container
    let div = container.querySelector('.todo')
    expect(div).toHaveTextContent('Test todo')
    const button = container.querySelector('.doneButton')
    expect(button).toBeNull()
  })
})

