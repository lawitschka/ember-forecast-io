import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import { run } from '@ember/runloop';

module('Unit | Serializer | forecast', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it serializes records', function(assert) {
    let record = run(() => this.owner.lookup('service:store').createRecord('forecast-io/forecast'));

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
