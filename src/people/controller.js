
import Model from './model';

function bulkCreate(array) {
  return Model.bulkCreate(array)
    .then(() => array);
}

function bulkUpdate(array) {
  return Model.bulkCreate(array, {updateOnDuplicate: true})
    .then(() => array);
}

function getAll() {
  return Model.findAll()
    .then(results => results.map(result => result.get()));
}

export let People = {
  Model,
  bulkCreate,
  bulkUpdate,
  getAll
};
