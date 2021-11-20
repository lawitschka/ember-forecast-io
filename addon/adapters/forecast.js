import classic from 'ember-classic-decorator';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import RESTAdapter from '@ember-data/adapter/rest';

@classic
export default class ForecastAdapter extends RESTAdapter {
  @service
  forecast;

  @alias('forecast.host')
  host;

  pathForType() {
    return null;
  }

  // Include language and unit query parameters in URL.
  urlForFindRecord() {
    let url = super.urlForFindRecord(...arguments);
    let query = {
      units: this.forecast.units,
      lang: this.forecast.lang,
    };
    const URLparams = new URLSearchParams(Object.entries(query));
    return `${url}?${URLparams}`;
  }
}
