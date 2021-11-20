import classic from 'ember-classic-decorator';
import RESTSerializer from '@ember-data/serializer/rest';

@classic
export default class DataPointSerializer extends RESTSerializer {
  normalize(modelClass, resourceHash, prop) {
    resourceHash.id = resourceHash.time;

    return super.normalize(modelClass, resourceHash, prop);
  }
}
