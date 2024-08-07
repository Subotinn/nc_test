import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {mockListData as data} from './mockData'

const mock = new MockAdapter(axios, {delayResponse: 3000});

mock.onPost("http://test.mock.api/api/list").reply(200, {
  data
});
