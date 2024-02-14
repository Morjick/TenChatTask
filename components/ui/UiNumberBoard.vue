<template>
  <div class="ui-number-board">
    <div
      class="ui-number-board__tab"
      v-for="(item, ind) in boardArray"
      :key="item?.index"
    >
      <input
        type="number"
        placeholder="-"
        maxlength="1"
        :value="boardArray[ind].value"
        :id="`board-tab-${ind}`"
        @input="inputListener"
        @keydown="clearTab"
      >
      <!-- v-model="boardArray[ind].value" -->
    </div>
  </div>
</template>

<script lang="ts" setup>
interface boardTab {
  index: number
  value: string
}

const props = defineProps({
  count: {
    type: Number,
    default: 0
  },
})
const activeInput = ref(0)

const boardArray = reactive<boardTab[]>([])

const inputListener = (event: any) => {
  const value: string = event.data

  boardArray[activeInput.value].value = value

  if (activeInput.value + 1 > props.count) return false
  activeInput.value = activeInput.value + 1
}

const clearTab = (event: any) => {
  if (event.key === "Backspace") {
    activeInput.value = activeInput.value - 1
    boardArray[activeInput.value].value = ''
    event.preventDefault()
  }
}

onMounted(() => {
  for (let i = 0; i < props.count; i++) {
    boardArray[i] = {
      index: i,
      value: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.ui-number-board {
  display: flex;
  align-items: center;

  gap: 10px;

  &__tab {
    border-radius: 10px;
    border: 2px solid var(--primary-color);
    overflow: hidden;

    input {
      width: 64px;
      height: 64px;

      padding: 20px 20px 20px 25px;
      font-size: 32px;

      &::placeholder {
        color: var(--primary-color);
      }
    }
  }
}
</style>
