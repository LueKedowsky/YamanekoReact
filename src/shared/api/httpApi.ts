import axios from 'axios';
import { URL_YAMANEKO_BASE } from 'api/requestURL';

export const httpApi = axios.create({
  baseURL: URL_YAMANEKO_BASE,
});
