import { VuexModule, Module, getModule } from 'vuex-module-decorators';
import store from '@/store';

@Module({
  namespaced: true,
  name: 'articles',
  store,
  dynamic: true,
})
class ArticlesModules extends VuexModule {
  public user: any;
  public profile: any;
}

export default getModule(ArticlesModules);
