import { User, Profile } from '../models';
import { VuexModule, Module, getModule } from 'vuex-module-decorators';
import store from '@/store';

@Module({
  namespaced: true,
  name: 'users',
  store,
})
class UsersModules extends VuexModule {
  public user: User | null = null;
  public profile: Profile | null = null;
}

export default getModule(UsersModules);
