import { TrimTextPipe } from './trim-text.pipe';

describe('ClosedCountPipe', () => {
  it('create an instance', () => {
    const pipe = new TrimTextPipe();
    expect(pipe).toBeTruthy();
  });
});
