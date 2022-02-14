import {action, makeObservable, observable} from 'mobx';
import {RequestPromise, Response} from 'src/models/main';

interface MakeRequestData<D> {
  request: () => RequestPromise<D>;
  success?: (response: Response<D>) => void;
  error?: (error: string) => void;
  onFinally?: () => void;
  loadingOff?: true;
  log?: boolean;
}

export default class BaseStore {
  loading = false;
  error = '';

  constructor() {
    makeObservable(this, {
      loading: observable,
      error: observable,
      clear: action,
    });
  }

  clear() {
    this.loading = false;
    this.error = '';
  }

  makeRequest = async <D>({
    request,
    success,
    error,
    onFinally,
    loadingOff,
  }: MakeRequestData<D>) => {
    if (!loadingOff) {
      this.loading = true;
    }
    this.error = '';

    const res = await request();
    const errorMesssage = res?.error || '';

    if (!errorMesssage) {
      if (success) {
        if (res) {
          // @ts-ignore
          success(res);
        } else {
          console.log(JSON.stringify(res, null, 2));
        }
      }
    } else {
      this.error = errorMesssage;
      if (error) {
        error(this.error);
      }
    }

    if (!loadingOff) {
      this.loading = false;
    }

    if (onFinally) {
      onFinally();
    }
  };

  setError(err: string) {
    this.error = err;
  }
}
