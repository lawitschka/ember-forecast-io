import classic from 'ember-classic-decorator';
import Model, { attr, belongsTo } from '@ember-data/model';

@classic
export default class ForecastModel extends Model {
  @attr('number')
  latitude;

  @attr('number')
  longitude;

  @attr('string')
  timezone;

  @attr('number')
  offset;

  @belongsTo('forecast-io/data-point', { async: false })
  currently;

  @belongsTo('forecast-io/data-block', { async: false })
  hourly;

  @belongsTo('forecast-io/data-block', { async: false })
  daily;

  @attr()
  alerts;

  @attr()
  flags;
}
