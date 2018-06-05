import { ApiUrl } from './promise';
import { User } from '../../intro/types';

enum ApiRequestType {
  User,
  Category
}

enum Category {
  Phone,
  Tablet
}

interface ApiRequest<T, U> {
  url: ApiUrl;
  type: T;
  responseType?: U; 
}

interface UserRequest extends ApiRequest<
  ApiRequestType.User,
  User
> {}

interface CategoryRequest extends ApiRequest<
  ApiRequestType.Category,
  Category
> {}

function get<
  R extends ApiRequest<R['type'], R['responseType']>
>(
  requestObj: R
): Promise<R['responseType']> {
  return fetch(requestObj.url).then( response => response.json() );
}

const UserRequest: UserRequest = {
  url: ApiUrl.Users,
  type: ApiRequestType.User
}

const CategoryRequest: CategoryRequest = {
  url: ApiUrl.Categories,
  type: ApiRequestType.Category
}

const user = get(UserRequest);
const category = get(CategoryRequest);