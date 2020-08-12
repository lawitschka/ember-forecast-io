import classic from 'ember-classic-decorator';
import DS from 'ember-data';

const {
  attr,
  Model
} = DS;

@classic
export default class DataPointModel extends Model {
  @attr('unix-timestamp')
  time;

  @attr('string')
  summary;

  @attr('string')
  icon;

  @attr('unix-timestamp')
  sunriseTime;

  @attr('unix-timestamp')
  sunsetTime;

  @attr('number')
  moonPhase;

  @attr('number')
  nearestStormDistance;

  @attr('number')
  nearestStormBearing;

  @attr('number')
  precipIntensity;

  @attr('number')
  precipIntensityMax;

  @attr('unix-timestamp')
  precipIntensityMaxTime;

  @attr('number')
  precipProbability;

  @attr('string')
  precipType;

  @attr('number')
  precipAccumulation;

  @attr('number')
  temperature;

  @attr('number')
  temperatureMin;

  @attr('unix-timestamp')
  temperatureMinTime;

  @attr('number')
  temperatureMax;

  @attr('unix-timestamp')
  temperatureMaxTime;

  @attr('number')
  apparentTemperature;

  @attr('number')
  apparentTemperatureMin;

  @attr('unix-timestamp')
  apparentTemperatureMinTime;

  @attr('number')
  apparentTemperatureMax;

  @attr('unix-timestamp')
  apparentTemperatureMaxTime;

  @attr('number')
  dewPoint;

  @attr('number')
  windSpeed;

  @attr('number')
  windBearing;

  @attr('number')
  cloudCover;

  @attr('number')
  humidity;

  @attr('number')
  pressure;

  @attr('number')
  visibility;

  @attr('number')
  ozone;
}
