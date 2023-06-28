import axios from 'axios';
import { URL_YAMANEKO_BASE } from 'shared/api/requestURL';

export const httpApi = axios.create({
  baseURL: URL_YAMANEKO_BASE,
});
