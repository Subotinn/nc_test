import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {mockListData as data} from './mockData'

const mock = new MockAdapter(axios);

mock.onPost("http://test.mock.api/api/list").reply(200, {
  data
});
