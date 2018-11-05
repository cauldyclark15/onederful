import { authenticate } from './';

it('will authenticate frontend by receiving access token and saving it to the browser', async () => {
  expect.assertions(1);
  await authenticate();

  const token = localStorage.getItem('accessToken');
  expect(token).toEqual('ONEDERFUL_SANDBOX_JWT');
});
