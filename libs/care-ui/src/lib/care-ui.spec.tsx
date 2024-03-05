import { render } from '@testing-library/react';

import CareUi from './care-ui';

describe('CareUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CareUi />);
    expect(baseElement).toBeTruthy();
  });
});
