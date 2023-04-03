<script setup>
import {state} from '@/socket';
import {computed, onMounted, ref} from 'vue';
import ConnectionManager from '@/components/ConnectionManager.vue';
import MyForm from '@/components/MyOfrm.vue';
import MessageList from '@/components/MessageList.vue';
import FormHeader from '@/components/FormHeader.vue';
import MessageForm from '@/components/MessageForm.vue';
import Messenger from '@/components/Messenger.vue';
import Contacts from '@/components/Contacts.vue';


</script>
<template>
    <div class="container-fluid app">
        <div style="margin-right: 16px">
            <Contacts style="width: 500px"/>
        </div>
        <Messenger />
    </div>
</template>

<style scoped lang="scss">
.app {
  height: 80vh;
  display: flex;
}

.container-fluid {
  padding: 16px;
}

.row {
  display: flex;
  justify-content: center;

}

.card {
  position: relative;

  word-wrap: break-word;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, .125);
  height: 100vh;
  width: 100%;


  &-footer {
    line-height: 1.5;
    color: #212529;
    text-align: left;
    word-wrap: break-word;
    box-sizing: border-box;
    border-radius: 0 0 15px 15px !important;
    border-top: 0 !important;
    padding: .75rem 1.25rem;
    background-color: rgba(0, 0, 0, .03);
  }
}
</style>
