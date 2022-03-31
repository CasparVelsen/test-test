import { render, screen } from '@testing-library/react';
import Catch from './Catch';

describe('Catch', () => {
  it('renders 6 input fields', () => {
    render(<Catch formData />);

    const inputSpecies = screen.getByLabelText(/Species/i);
    const inputBait = screen.getByLabelText(/Bait/i);
    const inputLength = screen.getByLabelText(/Length/i);
    const inputWeight = screen.getByLabelText(/Weight/i);
    const inputLocation = screen.getByLabelText(/Location/i);
    const inputNotes = screen.getByLabelText(/Notes/i);

    expect(inputSpecies).toBeInTheDocument();
    expect(inputBait).toBeInTheDocument();
    expect(inputLength).toBeInTheDocument();
    expect(inputWeight).toBeInTheDocument();
    expect(inputLocation).toBeInTheDocument();
    expect(inputNotes).toBeInTheDocument();
  });
});
