import classic from 'ember-classic-decorator';
import DS from 'ember-data';

const {
  RESTSerializer
} = DS;

@classic
export default class DataPointSerializer extends RESTSerializer {
  normalize(modelClass, resourceHash, prop) {
    resourceHash.id = resourceHash.time;

    return super.normalize(modelClass, resourceHash, prop);
  }
}
