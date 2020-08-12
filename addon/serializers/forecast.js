import classic from 'ember-classic-decorator';
import DS from 'ember-data';

const {
  EmbeddedRecordsMixin,
  RESTSerializer
} = DS;

@classic
export default class ForecastSerializer extends RESTSerializer.extend(EmbeddedRecordsMixin) {
  attrs = {
    currently: {
      serialize: false,
      deserialize: 'records'
    },
    hourly: {
      serialize: false,
      deserialize: 'records'
    },
    daily: {
      serialize: false,
      deserialize: 'records'
    }
  }

  normalizeResponse(store, modelClass, payload, recordId, requestType) {
    let typeKey = modelClass.modelName;
    let newPayload = {};
    newPayload[typeKey] = payload;
    newPayload[typeKey].id = recordId;

    return super.normalizeResponse(store, modelClass, newPayload, recordId, requestType);
  }
};
