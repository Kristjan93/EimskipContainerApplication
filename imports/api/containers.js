import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Containers = new Mongo.Collection('containers');

Containers.schema = new SimpleSchema({
  location: { type: String, label: 'Location', optional: false },
  number: { type: String, label: 'Number', optional: true }
});

// Enabled using the collections-2 addon.
// Will insure validation against the schema on insert/update/delete.
// TODO future mutation might be needed.
Containers.attachSchema(Containers.schema);

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('containers', function containersPublication() {
    return Containers.find({ });
  });
}

Meteor.methods({
  'containers.insert'({ location = null, number = null }) {
    // This is an ugly-fix to get the right validation error.
    const newContainer = {
      location: location || null,
      number: number || null
    };
    Containers.insert(newContainer)
  },
  'containers.remove'(containerId) {
    Containers.remove(containerId);
  },
});
