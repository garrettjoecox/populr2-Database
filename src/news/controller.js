
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

function getMax() {
  var promiseArray = [];

  promiseArray.push(Model.max('count'));
  promiseArray.push(Model.max('countDelta'));

  return Promise.all(promiseArray);
}

export let News = {
  Model,
  bulkCreate,
  bulkUpdate,
  getAll,
  getMax
};
