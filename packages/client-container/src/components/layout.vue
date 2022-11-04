<template>
  <div id="client-container">
    <MainMenu />
    <div class="view-container">
      <MainSideBar />
      <MainIM />
      <MainPlugIn />
    </div>
  </div>
</template>

<script>
import { MainSideBar } from 'client-sidebar';
import { MainIM } from 'client-im';
import { MainPlugIn } from 'client-plugin';
import MainMenu from './menu';

export default {
  name: 'MainLayout',
  components: {
    MainMenu,
    MainSideBar,
    MainIM,
    MainPlugIn,
  },
};
</script>

<style scoped lang="scss">
#client-container {
  flex: 1;
  background-color: cadetblue;
  display: flex;

  .view-container {
    flex: 1;
    display: flex;
  }
}
</style>
