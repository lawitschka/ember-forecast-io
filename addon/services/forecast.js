import classic from 'ember-classic-decorator';
import { observes, on } from '@ember-decorators/object';
import Service, { inject as service } from '@ember/service';
import { warn } from '@ember/debug';
import { getWithDefault } from '@ember/object';
import { getOwner } from '@ember/application';

const DEFAULTS = {
  units: 'us',
  lang: 'en',
  host: 'http://localhost/forecast'
};

@classic
export default class ForecastService extends Service {
  // Service
  @service
  store;

  // @public
  // The Forecast.io proxy host.
  host = null;

  // @public
  // Units being returned by Forecast.io.
  units = null;

  // @public
  // Language being used by Forecast.io in texts.
  lang = null;

  // @public
  // Request weather forecast at specific location.
  forecast(latitude, longitude) {
    let id = `${latitude},${longitude}`;
    return this.store.findRecord('forecast-io/forecast', id);
  }

  // @public
  // Request weather forecast at specific location at point in time.
  forecastAt(latitude, longitude, date) {
    let id = `${latitude},${longitude},${date.getTime() / 1000}`;
    return this.store.findRecord('forecast-io/forecast', id);
  }

  // @private
  @on('init')
  _initDefaults() {
    let ENV = getOwner(this).resolveRegistration('config:environment');
    let config = ENV['ember-forecast-io'] || {};

    if (config.host == null) {
      warn(`ember-forecast-io did not find a host setting, default to ${DEFAULTS.host}`, false, { id: 'ember-forecast-io.host' });
    }
    for (let property of ['units', 'lang', 'host']) {
      this.set(property, getWithDefault(config, property, DEFAULTS[property]));
    }
  }

  // @private
  // eslint-disable-next-line ember/no-observers
  @observes('units', 'lang')
  _clearCachedForecasts() {
    for (let modelName of ['forecast', 'data-block', 'data-point']) {
      this.store.unloadAll(`forecast-io/${modelName}`);
    }
  }
}
