import { User, Profile, UserSubmit } from '../models';
import {
  VuexModule,
  Module,
  getModule,
  Mutation,
  MutationAction,
  Action,
} from 'vuex-module-decorators';
import store from '@/store';
import { loginUser } from '../api';
//tslint:disable
@Module({
  namespaced: true,
  name: "users",
  store,
  dynamic: true
})
class UsersModules extends VuexModule {
  public user: User | null = null;
  public profile: Profile | null = null;

  @Mutation
  public setUser(user: User) {
    this.user = user;
  }

  get username() {
    return (this.user && this.user.username) || null;
  }

  @Action({ commit: "setUser" })
  public async login(userSubmit: UserSubmit) {
    const user = await loginUser(userSubmit);
    console.info("user is: ", user);
    return user;
  }
}

export default getModule(UsersModules);
