<template>
  <div>
    <div class="d-flex space-between" v-if="actionButton || actionButton2">
      <div class="mb-1 sm-w100">
        <button class="btn btn-primary" v-if="actionButton" @click="actionButton.action">
          {{ actionButton.text }}
        </button>
        <button class="btn btn-primary" v-if="actionButton2" @click="actionButton2.action">
          {{ actionButton2.text }}
        </button>
      </div>
      <div v-if="showFilter" class="mb-1 search">
        <pui-input
          id="searchInput"
          v-model="searchInput"
          placeholder="Buscar"
          label="Buscar"
          class=""
        ></pui-input>
      </div>
    </div>
    <div v-else-if="showFilter" class="search third-right my-1">
      <pui-input
        id="searchInput"
        v-model="searchInput"
        placeholder="Buscar"
        label="Buscar"
        class=""
      ></pui-input>
    </div>
    <table class="table-list">
      <thead>
        <tr>
          <th v-for="(th, i) in header" :key="i" :sortable="th.sortable">
            {{ th.value }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in filteredData"
          :key="i"
          @click="handleClick(item)"
        >
          <td v-for="(td, j) in body" :key="j" :class="td.class">
            <div class="list-item">
              <div class="list-body">
                <span v-for="(dato, k) in td.data" :key="k">
                  <span v-if="dato.label" class="list-label text-normal"
                    >{{ dato.label }}:</span
                  >
                  <span
                    :class="dato.class"
                    v-if="dato.mutator"
                    v-html="dato.mutator(showItem(item, dato.value))"
                  ></span>
                  <span v-else :class="dato.class">
                    {{ showItem(item, dato.value) }}
                  </span>
                </span>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "TableList",
  props: {
    showFilter: { type: Boolean, required: true, default: false },
    header: { type: Array(), required: true, default: [] },
    body: { type: Array(), required: true, default: [] },
    data: { type: Array() },
    actionButton: null,
    actionButton2: null,
  },
  data() {
    return {
      searchOptions: [],
      searchInput: null,
      searchIndex: null,
      searchOptionSelected: null,
      filteredData: [],
    };
  },
  watch: {
    searchIndex() {
      this.filter();
    },
    searchInput() {
      this.filter();
    },
    data() {
      this.filteredData = this.data;
      console.log(this.filteredData);
    },
  },
  mounted() {
    this.filteredData = this.data;
    let headers = document.querySelectorAll(
      ".table-list th[sortable], .table-list th[sortdown], .table-list th[sortup]"
    );
    this.mountSearchOptions(headers);
    headers.forEach((th) => {
      this.addListeners(th);
    });
  },
  methods: {
    mountSearchOptions(headers) {
      this.searchOptions.push({ index: null, value: "Todos los datos" });
      headers.forEach((th) => {
        this.searchOptions.push({
          index: th.innerText.toLowerCase(),
          value: th.innerText,
        });
      });
    },
    addListeners(th) {
      th.addEventListener("click", (e) => {
        if (
          e.target.hasAttribute("sortable") ||
          e.target.hasAttribute("sortdown")
        ) {
          this.sortUp(e.target);
          return;
        }
        if (e.target.hasAttribute("sortup")) {
          this.sortDown(e.target);
          return;
        }
      });
    },
    filter() {
      if (this.searchInput != null) {
        this.filteredData = [...this.data].filter((item) => {
          let finded = false;
          this.body.forEach((val) => {
            val.data.forEach((key) => {
              let foo = this.showItem(item, key.value);
              if (foo) {
                if (
                  foo
                    .toString()
                    .toLowerCase()
                    .includes(this.searchInput.toLowerCase())
                ) {
                  finded = true;
                }
              }
            });
          });
          return finded;
        });
        console.log(this.filteredData.length)
      } else {
        return true;
      }
    },
    resetSortable() {
      let headers = document.querySelectorAll(".table-list th");
      headers.forEach((th) => {
        th.removeAttribute("sortup");
        th.removeAttribute("sortdown");
        if (!th.hasAttribute("sortable")) {
          th.setAttribute("sortable", "");
        }
      });
    },
    sortUp(element) {
      this.resetSortable();
      element.removeAttribute("sortable");
      element.setAttribute("sortup", "");
      this.sort(element, "up");
    },
    sortDown(element) {
      this.resetSortable();
      element.removeAttribute("sortable");
      element.setAttribute("sortdown", "");
      this.sort(element, "down");
    },
    sort(element, order) {
      this.filteredData.sort((a,b) => {
        let data_a = ''
        let data_b = ''
        this.body[element.cellIndex].data.forEach(element => {
          data_a += this.showItem(a, element.value)
          data_b += this.showItem(b, element.value)
        });
        if(!isNaN(data_a))
        {
          data_a = parseFloat(data_a)
        }
        if(!isNaN(data_b))
        {
          data_b = parseFloat(data_b)
        }
        if (data_a > data_b) {
          return order == "up" ? 1 : -1;
        }
        if (data_a < data_b) {
          return order == "up" ? -1 : 1;
        }
        return 0;
      })
    },
    getTextNodesIn(node, includeWhitespaceNodes) {
      let textNodes = [],
        whitespace = /^\s*$/;
      function getTextNodes(node) {
        if (node.nodeType == 3) {
          if (includeWhitespaceNodes || !whitespace.test(node.nodeValue)) {
            textNodes.push(node);
          }
        } else {
          for (var i = 0, len = node.childNodes.length; i < len; ++i) {
            getTextNodes(node.childNodes[i]);
          }
        }
      }

      getTextNodes(node);
      return textNodes;
    },
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
    handleClick(item) {
      this.$emit("rowClicked", item);
    },
    chunk(arr, chunkSize) {
      if (chunkSize <= 0) throw "Invalid chunk size";
      var R = [];
      for (var i = 0, len = arr.length; i < len; i += chunkSize)
        R.push(arr.slice(i, i + chunkSize));
      return R;
    },
    refresh(data) {
      this.searchInput = null;
      this.filteredData = data;
    },
  },
};
</script>