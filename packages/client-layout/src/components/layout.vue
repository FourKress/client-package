<template>
  <div id="client-layout">
    <Header />
    <ClientContainer />
  </div>
</template>

<script>
import { ClientContainer } from 'client-container';
import Header from './header';


export default {
  name: 'MainLayout',
  components: {
    Header,
    ClientContainer
  },
};
</script>

<style scoped lang="scss">
#client-layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
