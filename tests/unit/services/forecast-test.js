import { moduleFor, test } from 'ember-qunit';

moduleFor('service:forecast', 'Unit | Service | forecast', {
  // Specify the other units that are required for this test.
  needs: [
    'config:environment'
  ]
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});
