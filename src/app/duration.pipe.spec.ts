import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;

  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform seconds into HH:mm:ss format', () => {
    expect(pipe.transform(0)).toBe('00:00:00');
    expect(pipe.transform(59)).toBe('00:00:59');
    expect(pipe.transform(60)).toBe('00:01:00');
    expect(pipe.transform(3600)).toBe('01:00:00');
    expect(pipe.transform(3661)).toBe('01:01:01');
  });

});
