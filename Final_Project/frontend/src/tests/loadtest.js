import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10, /// Number of users
  duration: '10s', // Duration of the test
};

export default function () {
  const res = http.get('http://localhost:3001/api/recipes');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'body is not empty': (r) => r.body.length > 0,
  });

  sleep(1); // Wait 1 second before the next request
}
