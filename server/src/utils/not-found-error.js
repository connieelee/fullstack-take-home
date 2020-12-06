module.exports = class NotFoundError extends Error {
  constructor(message) {
    super(message || 'Not found');
    this.status = 404;
  }
};
