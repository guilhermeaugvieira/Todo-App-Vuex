import { createStore } from 'vuex';
import Todos from './modules/Todos-store';

export default createStore({
  modules: {
    Todos,
  },
});
