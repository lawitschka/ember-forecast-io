import classic from 'ember-classic-decorator';
import DS from 'ember-data';

const {
  attr,
  hasMany,
  Model
} = DS;

@classic
export default class DataBlockModel extends Model {
  @attr('string')
  summary;

  @attr('string')
  icon;

  @hasMany('forecast-io/data-point', { async: false })
  dataPoints;
}
