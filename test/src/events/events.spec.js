import events from '../../../src/events/events';

let expectedEvents = [
  'play',
  'pause',
  'progress',
  'abort',
  'suspend',
  'emptied',
  'stalled',
  'loadedmetadata',
  'loadeddata',
  'timeupdate',
  'ratechange',
  'volumechange',
  'texttrackchange'
];

describe('events', () => {

  it('should equals player events', () => {
    events.should.deep.equals(expectedEvents);
  });

});