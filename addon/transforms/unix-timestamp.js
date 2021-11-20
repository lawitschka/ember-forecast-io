import classic from 'ember-classic-decorator';
import Transform from '@ember-data/serializer/transform';

@classic
export default class UnixTimestampTransform extends Transform {
  deserialize(serialized) {
    return new Date(serialized * 1000);
  }

  serialize(deserialized) {
    return deserialized ? deserialized.getTime() / 1000 : null;
  }
}
