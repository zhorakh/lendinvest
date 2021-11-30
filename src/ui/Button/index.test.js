import { render } from '@testing-library/react'
import Button from './index'

describe('Button', () => {
   it('render button', () => {
      const { getByTestId } = render(<Button />)
      const button = getByTestId('button')
      expect(button).toBeTruthy();
   })
})
