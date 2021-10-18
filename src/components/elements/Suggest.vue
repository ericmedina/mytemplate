<template>
  <div
    class="suggest-container"
    ref="suggestcontainer"
    @blur="closeFocusOut"
    @focusout="closeFocusOut"
  >
    <pd-input
      :id="'sug_' + id"
      :label="label"
      :placeholder="placeholder"
      :classInput="classInput"
      :required="required"
      :readonly="readonly"
      :type="type"
      class="suggest"
      v-model="inputValue"
    ></pd-input>
    <div class="suggest-list" ref="suggestlist">
      <ul>
        <li v-for="(item, i) in filteredData" :key="i" @click="selected(item)">
          <div class="list-item">
            <div class="list-body">
              <span v-for="(span, k) in items" :key="k" :class="span.class">
                <span v-if="span.label" class="list-label"
                  >{{ span.label }}:</span
                >
                <span
                    :class="span.class"
                    v-if="span.mutator"
                    v-html="span.mutator(showItem(item, span.name))"
                  ></span>
                  <span v-else :class="span.class">
                    {{ showItem(item, span.name) }}
                  </span>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Suggest",
  data() {
    return {
      inputValue: "",
      filteredData: [],
      currentIndex: -1,
      isReverse: false,
    };
  },
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
    id: {
      type: String,
      required: true,
    },
    type: String,
    classInput: { type: String, value: null },
    placeholder: {
      type: String,
      required: true,
    },
    inputmode: String,
    value: null,
    data: [],
    items: [],
  },
  watch: {
    inputValue() {
      this.filter();
    },
    filteredData() {
      this.checkOffset();
    },
    data() {
      this.filteredData = this.data;
      this.filter();
    },
  },
  mounted() {
    this.filteredData = this.data;
    this.inputValue = this.value;
    let input = document.querySelector(`#sug_${this.id}`);
    input.onfocus = this.focusInput;
    input.onkeydown = this.checkKey;
  },
  methods: {
    showItem(item, value) {
      let keys = value.split(".");
      keys.forEach((k) => {
        if (!item) {
          return null;
        }
        item = item[k];
      });
      return item;
    },
    filter() {
      if (this.data) {
        this.filteredData = [...this.data].filter((item) => {
          let finded = false;
          this.items.forEach((key) => {
            let val = this.showItem(item, key.name);
            if (!this.inputValue) {
              finded = true;
            } else {
              if (
                val
                  .toString()
                  .toLowerCase()
                  .includes(this.inputValue.toLowerCase())
              ) {
                finded = true;
              }
            }
          });
          return finded;
        });
      } else {
        return true;
      }
    },
    selected(item) {
      this.currentIndex = -1;
      if(this.items[0].mutator){
        this.inputValue = this.items[0].mutator(this.showItem(item, this.items[0].name));
      }else{
        this.inputValue = this.showItem(item, this.items[0].name);
      }
      this.hide();
      this.$emit("selected", item);
    },
    checkOffset() {
      setTimeout(() => {
        let suggestList = this.$refs["suggestlist"];
        let totalHeight =
          suggestList.offsetHeight + suggestList.getBoundingClientRect().y;
        let overflow = window.innerHeight - totalHeight + 150;
        if (suggestList.offsetHeight > 150 && overflow < 0) {
          if (!suggestList.classList.contains("top")) {
            suggestList.classList.add("top");
            this.isReverse = true;
          }
        } else {
          if (suggestList.classList.contains("top")) {
            suggestList.classList.remove("top");
            this.isReverse = false;
          }
        }
      }, 1);
    },
    closeSuggest(e) {
      if (e.target != this.$el && !this.$el.contains(e.target)) {
        this.hide();
      }
    },
    closeFocusOut(e) {
      if (e.target != this.$el && !this.$el.contains(e.target)) {
        this.hide();
      }
    },
    focusInput() {
      let suggestList = this.$refs["suggestlist"];
      if (!suggestList.classList.contains("show")) {
        suggestList.classList.add("show");
        window.onclick = this.closeSuggest;
        this.checkOffset();
      }
    },
    checkKey(e) {
      e = e || window.event;
      this.focusInput();
      if (e.keyCode == 38) {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          this.addSelected();
          console.log(e.keyCode, this.currentIndex);
        }
      } else if (e.keyCode == 40) {if (this.currentIndex < this.filteredData.length - 1) {
          this.currentIndex++;
          this.addSelected();
        }
      } else if (e.keyCode == 27) {
        this.hide();
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if(this.currentIndex != -1){
          this.selected(this.filteredData[this.currentIndex]);
        }
      }
    },
    hide() {
      let suggestList = this.$refs["suggestlist"];
      if (suggestList.classList.contains("show")) {
        suggestList.classList.remove("show");
        if (suggestList.classList.contains("top")) {
          suggestList.classList.remove("top");
          this.isReverse = false;
        }
      }
    },
    addSelected() {
      let items = this.$refs["suggestlist"].querySelector("ul").children;
      let index = 0;
      for (let item of items) {
        if (index == this.currentIndex) {
          item.classList.add("selected");
        } else {
          item.classList.remove("selected");
        }
        index++;
      }
    },
  },
};
</script>
<style scoped>
.suggest-container {
  position: relative;
  width: 100%;
}
.suggest-list {
  margin-top: -0.1rem;
  position: absolute;
  width: 100%;
  display: none;
  z-index: 10;
}
.suggest-list.top {
  bottom: calc(100% - 1.4rem) !important;
}
.suggest-list.show {
  display: block;
}
.suggest-list ul {
  margin: 0;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  max-height: 300px;
  overflow-y: auto;
  background-color: white;
  box-shadow: var(--shadow-2), var(--shadow-2), var(--shadow-1);
  list-style: none;
  padding: 0;
}
.suggest-list.top ul {
  box-shadow: var(--shadow-reverse-2), var(--shadow-reverse-2),
    var(--shadow-reverse-1);
}
.suggest-list ul li {
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  border-bottom: 1px solid var(--neutral-30);
}
.suggest-list ul li:hover,
.suggest-list ul li.selected {
  background-color: var(--neutral-20);
}
</style>