<template>
  <div class="form-group">
    <label class="form-label">{{ label }}</label>
    <div class="input-group" v-if="prepend || append">
      <div class="input-group-prepend" v-if="prepend">
        <span class="input-group-text"><icon :feather="prepend"></icon></span>
      </div>
      <template v-if="select">
        <select
          :id="id"
          :placeholder="placeholder"
          :value="value"
          @input="update($event.target.value)"
          :class="[
            classInput ? classInput : 'form-control',
            required || numeric ? 'is-invalid' : '',
          ]"
        >
          <template v-if="options">
            <option :value="null">Seleccione una opción</option>
            <option v-for="option in options" :key="option" :value="option">
              {{ option }}
            </option>
          </template>
          <template v-else>
            <slot name="options"></slot>
          </template>
        </select>
      </template>
      <template v-else-if="textarea">
        <textarea
          :id="id"
          :placeholder="placeholder"
          :value="value"
          @input="update($event.target.value)"
          :class="[
            classInput ? classInput : 'form-control',
            required || numeric ? 'is-invalid' : '',
          ]"
        ></textarea>
      </template>
      <template v-else>
        <input
          :id="id"
          :placeholder="placeholder"
          :type="type ? type : 'text'"
          :inputmode="inputmode"
          :value="value"
          @input="update($event.target.value)"
          :class="[
            classInput ? classInput : 'form-control',
            required || numeric ? 'is-invalid' : '',
          ]"
          @keypress="validate"
        />
      </template>
      <div class="input-group-append" v-if="append">
        <span class="input-group-text"><icon :feather="append"></icon></span>
      </div>
    </div>
    <template v-else>
      <template v-if="select">
        <select
          :id="id"
          :placeholder="placeholder"
          :value="value"
          @input="update($event.target.value)"
          :disabled="disabled"
          :readonly="readonly"
          :class="[
            classInput ? classInput : 'form-control',
            required || numeric ? 'is-invalid' : '',
          ]"
        >
          <template v-if="options">
            <option :value="null">Seleccione una opción</option>
            <option v-for="option in options" :key="option" :value="option">
              {{ option.text }}
            </option>
          </template>
          <template v-else>
            <slot name="options"></slot>
          </template>
        </select>
      </template>
      <template v-else-if="textarea">
        <textarea
          :id="id"
          :placeholder="placeholder"
          :value="value"
          :disabled="disabled"
          :readonly="readonly"
          @input="update($event.target.value)"
          :class="[
            classInput ? classInput : 'form-control',
            required || numeric ? 'is-invalid' : '',
          ]"
        ></textarea>
      </template>
      <template v-else>
        <input
          :id="id"
          :placeholder="placeholder"
          :type="type ? type : 'text'"
          :inputmode="inputmode"
          :value="value"
          @input="update($event.target.value)"
          :class="[
            classInput ? classInput : 'form-control',
            required || numeric ? 'is-invalid' : '',
          ]"
          :disabled="disabled"
          :readonly="readonly"
          autocomplete="off"
          @keypress="validate"
        />
      </template>
    </template>
    <small class="form-message text-danger" v-if="required"
      >Éste campo es obligatorio.</small
    >
    <small class="form-message text-danger" v-if="numeric"
      >Sólo se aceptan números.</small
    >
    <slot name="helper"></slot>
    <slot name="validation"></slot>
  </div>
</template>
<script>
export default {
  name: "pui-input",
  props: {
    label: {
      type: String,
      required: true,
    },
    prepend: String,
    append: String,
    disabled: {
      type: Boolean,
      value: false,
    },
    readonly: {
      type: Boolean,
      value: false,
    },
    required: {
      type: Boolean,
      value: false,
    },
    numeric: {
      type: Boolean,
      value: false,
    },
    id: {
      type: String,
      required: true,
    },
    type: String,
    classInput: String,
    placeholder: {
      type: String,
      required: true,
    },
    inputmode: String,
    select: {
      type: Boolean,
      value: false,
    },
    options: Array,
    textarea: {
      type: Boolean,
      value: false,
    },
    value: null,
  },
  methods: {
    update: function (value) {
      this.$emit("input", value);
    },
    validate(evt) {
      if(evt.target.inputmode == 'numeric'){
        let theEvent = evt || window.event;
        let key = null;
  
        // Handle paste
        if (theEvent.type === "paste") {
          key = event.clipboardData.getData("text/plain");
        } else {
          // Handle key press
          key = theEvent.keyCode || theEvent.which;
          key = String.fromCharCode(key);
        }
        let regex = /[0-9]|\./;
        if (!regex.test(key)) {
          theEvent.returnValue = false;
          if (theEvent.preventDefault) theEvent.preventDefault();
        }
      }
    },
  },
};
</script>