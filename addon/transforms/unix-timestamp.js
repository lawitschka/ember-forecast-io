import classic from 'ember-classic-decorator';
import DS from 'ember-data';

const {
  Transform
} = DS;

@classic
export default class UnixTimestampTransform extends Transform {
  deserialize(serialized) {
    return new Date(serialized * 1000);
  }

  serialize(deserialized) {
    return deserialized ? (deserialized.getTime() / 1000) : null;
  }
}
