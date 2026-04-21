'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (!element || Object.keys(data).length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  for (const a in data) {
    const li = document.createElement('li');

    li.textContent = a;
    createTree(li, data[a]);
    ul.appendChild(li);
  }

  element.appendChild(ul);
}

createTree(tree, food);
