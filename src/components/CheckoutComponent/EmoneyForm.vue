<template>
  <div class="flex flex-col sm:flex-row sm:items-center gap-4 flex-wrap mt-10">
    <!---e-Money Number-->
    <div class="flex-1">
      <div class="flex justify-between">
        <label for="e-money_number" class="font-semibold">e-Money Number</label>
        <p class="text-xs font-bold text-red-600" v-if="eNumberHasError">
          {{ eNumberHasError }}
        </p>
      </div>

      <input
        type="number"
        id="e-money_number"
        class="
          caret-deep-brown
          w-full
          p-4
          placeholder:text-gray-500
          outline-none
          border-2 border-gray-200
          focus:border-deep-brown
          rounded-md
          mt-4
          font-semibold
          focus:text-deep-brown
          duration-300
        "
        :class="eNumberHasError ? 'border-red-600' : ''"
        @blur="$emit('checkeNumber')"
        :value="eNumber"
        @change="$emit('update:eNumber', $event.target.value)"
        placeholder="2018939171"
      />
    </div>
    <!---Emoney Pin--->
    <div class="flex-1">
      <div class="flex justify-between">
        <label for="money_pin" class="font-semibold">e-Money PIN</label>
        <p class="text-xs font-bold text-red-600" v-if="ePinHasError">
          {{ ePinHasError }}
        </p>
      </div>

      <input
        type="number"
        id="money_pin"
        class="
          caret-deep-brown
          w-full
          p-4
          placeholder:text-gray-500
          outline-none
          border-2 border-gray-200
          focus:border-deep-brown
          rounded-md
          mt-4
          font-semibold
          focus:text-deep-brown
          duration-300
        "
        :class="ePinHasError ? 'border-red-600' : ''"
        @blur="$emit('checkePin')"
        :value="ePin"
        @change="$emit('update:ePin', $event.target.value)"
        placeholder="2901"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["ePin", "eNumber", "ePinHasError", "eNumberHasError"],
  emits: ["checkePin", "checkeNumber"],
};
</script>