<template>
  <div class="message-form">
    <div class="message-form__append">
      <span class="attach_btn append_btn">
        <img src="@/assets/paperclip.svg" alt="">
      </span>
    </div>
    <div
      class="message-form__input"
      contenteditable="true"
      @paste="sanitizeScript"
      @keydown="onInput"
    >

    </div>
    <div class="message-form__append" @click="emitMessage">
      <span class="attach_btn send_btn">
        <img src="@/assets/send.svg" alt="">
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, ref } from 'vue';
import sanitizeHtml from 'sanitize-html';

defineComponent({
  name: 'MessageForm',
});

const message = ref('');
const emits = defineEmits(['on:submit']);

function emitMessage() {
  emits('on:submit', {
    text: message.value,
    sender: true,
    send_time: new Date().getTime(),
  });
}

function onInput(e) {
  console.log(e);
  if (e.shiftKey && e.code === 'Enter') {
    return;
  }
  if (e.code === 'Enter') {
    e.preventDefault();
    emitMessage();
  }
}

function sanitizeScript(e) {
  e.preventDefault();
  const clipboardData = e.clipboardData;
  const pastedData = clipboardData.getData('text/plain');
  const sanitizedData = sanitizeHtml(pastedData);
  e.target.innerText = sanitizedData;

  // Set the focus on the last word position
  const lastWordPosition = sanitizedData.lastIndexOf(' ') + 1;
  e.target.selectionStart = lastWordPosition;
  e.target.selectionEnd = lastWordPosition;
}


defineExpose({
  clear: () => {
    message.value = '';
  },
});
</script>

<style scoped lang="scss" src="@/assets/scss/message-form.scss">

</style>
