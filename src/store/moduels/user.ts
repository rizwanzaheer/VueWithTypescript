import { User, Profile, UserSubmit } from '../models';
import {
  VuexModule,
  Module,
  getModule,
  MutationAction,
} from 'vuex-module-decorators';
import store from '@/store';
import { loginUser } from '../api';

@Module({
  namespaced: true,
  name: 'users',
  store,
})
class UsersModules extends VuexModule {
  public user: User | null = null;
  public profile: Profile | null = null;

  @MutationAction({ mutate: ['user'] })
  public async login(userSubmit: UserSubmit) {
    const user = await loginUser(userSubmit);
    return { user };
  }
}

export default getModule(UsersModules);
