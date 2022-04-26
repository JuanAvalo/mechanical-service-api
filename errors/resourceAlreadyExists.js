'use strict';

class ResourceAlreadyExists extends Error {
  constructor(message = 'Resource Already Exists', ...args) {
    super(message, ...args);
    this.type = 'custom'
    this.code = 409;
  }
}
module.exports = ResourceAlreadyExists;
