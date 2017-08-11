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

// This code only runs on the server.
// Only published tasks that are accessible by the client.
if (Meteor.isServer) {
  Meteor.publish('containers', function containersPublication() {
    return Containers.find({ });
  });
}

Meteor.methods({
  'containers.insert'({ location, number }) {
    // This is an ugly-fix to get the right validation error.
    const newContainer = {
      location: location || null,
      number: number || null
    };

    Containers.insert(newContainer);
  },

  'containers.update'(containerId, { location, number }) {
    // This is an ugly-fix to get the right validation error.
    const editedContainer = {
      location: location || null,
      number: number || null
    };
    
    Containers.update(containerId, {
      $set: { location: location, number: number }
    });
  },

  'containers.remove'(containerId) {
    Containers.remove(containerId);
  },
});
