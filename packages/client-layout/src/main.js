import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

const ClientLayout = () => {
  return new Vue({
    render: (h) => h(App),
  }).$mount('#app');
};

export default ClientLayout;
