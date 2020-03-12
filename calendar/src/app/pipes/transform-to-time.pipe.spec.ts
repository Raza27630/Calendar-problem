import { TransformToTimePipe } from './transform-to-time.pipe';

describe('TransformToTimePipe', () => {
  it('create an instance', () => {
    const pipe = new TransformToTimePipe();
    expect(pipe).toBeTruthy();
  });
});
