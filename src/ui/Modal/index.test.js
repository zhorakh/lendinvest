import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'; 
import App from '../../App'

describe('Modal', () => {
    it('render modal', async () => {
        const { getAllByTestId, findByTestId } = render(<App />)
        
        const button = getAllByTestId('button')
        userEvent.click(button[0])
        const test = await findByTestId('modal')
        expect(test).toBeTruthy();
    })
})
