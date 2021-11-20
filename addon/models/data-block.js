import classic from 'ember-classic-decorator';
import Model, { attr, hasMany } from '@ember-data/model';

@classic
export default class DataBlockModel extends Model {
  @attr('string')
  summary;

  @attr('string')
  icon;

  @hasMany('forecast-io/data-point', { async: false })
  dataPoints;
}
