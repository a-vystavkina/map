import ErrorRepository from '../js/ErrorRepository';

test('Добавление ошибки', () => {
  const received = new ErrorRepository();
  received.errorSet('test', 'test1');
  expect(received.translate('test')).toBe('test1');
});

test('Неизвестная ошибка', () => {
  const received = new ErrorRepository();
  received.errorSet('error', 'error');
  expect(received.translate('test')).toBe('Unknown error');
});
