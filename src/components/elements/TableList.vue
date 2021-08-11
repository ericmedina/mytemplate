<template>
  <div>
    <h2 class="card-title mb-0">Lists</h2>
    <div class="search third-right my-1">
      <pd-input
        id="searchInput"
        v-model="searchInput"
        placeholder="Buscar"
        label="Buscar"
        class=""
      ></pd-input>
      <!-- <pd-input
        id="searchInput"
        v-model="searchIndex"
        placeholder="Filtrar por:"
        select
        label="Filtrar por:"
      >
        <option
          slot="options"
          v-for="option in searchOptions"
          :key="option.index"
          :value="option.index"
        >
          {{ option.value }}
        </option>
      </pd-input> -->
    </div>
    <table class="table-list">
      <thead>
        <tr>
          <th sortup>#</th>
          <th sortdown>CUIT</th>
          <th sortable>Cliente</th>
          <th sortable>Total</th>
          <th sortable>Fecha</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in filteredData" :key="i">
          <td class="text-primary">#{{ item.id }}</td>
          <td class="w-100">
            <span class="list-label">CUIT:</span> {{ item.cuit }}
          </td>
          <td class="important w-100">
            <div class="list-item">
              <div class="list-body">
                <span>{{ item.nombre }}</span>
                <small class="text-secondary">{{ item.email }}</small>
              </div>
            </div>
          </td>
          <td class="">
            <span class="list-label">Total:</span> {{ item.total }}
          </td>
          <td class="">
            <span class="list-label">Fecha:</span> {{ item.fecha }}
          </td>
          <td class="w-100">
            <div class="actions">
              <button class="action-item">
                <icon feather="eye"></icon>
              </button>
              <button class="action-item">
                <icon feather="download"></icon>
              </button>
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
  data() {
    return {
      searchOptions: [],
      searchInput: null,
      searchIndex: null,
      searchOptionSelected: null,
      data: [],
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
  },
  mounted() {
    this.data = [
      {
        id: "6291",
        cuit: "23-37176364-4",
        nombre: "Oric Daniel Medina",
        email: "ericmedina.dev@gmail.com",
        total: "$3171",
        fecha: "19/10/2021",
      },
      {
        id: "6292",
        cuit: "20-37176364-4",
        nombre: "Mric Daniel Medina",
        email: "ericmedina.dev@gmail.com",
        total: "$3171",
        fecha: "19/10/2021",
      },
      {
        id: "6293",
        cuit: "22-37176364-4",
        nombre: "Cric Daniel Medina",
        email: "ericmedina.dev@gmail.com",
        total: "$3171",
        fecha: "19/10/2021",
      },
      {
        id: "6294",
        cuit: "21-37176364-4",
        nombre: "Rric Daniel Medina",
        email: "ericmedina.dev@gmail.com",
        total: "$3171",
        fecha: "19/10/2021",
      },
    ];
    this.filteredData = [...this.data];
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
          e.target.hasAttribute("sortup")
        ) {
          this.sortDown(e.target);
          return;
        }
        if (e.target.hasAttribute("sortdown")) {
          this.sortUp(e.target);
          return;
        }
      });
    },
    filter() {
      if (this.searchInput != null) {
        this.filteredData = this.data.filter((item) => {
          let values = Object.values(item);
          let finded = false;
          values.forEach((value) => {
            if (value.toLowerCase().includes(this.searchInput.toLowerCase())) {
              finded = true;
            }
          })
          console.log(finded)
          return finded;
        });
      }else{
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
      let index = element.cellIndex;
      let rows = document.querySelectorAll(".table-list tbody tr");
      let body = document.querySelector(".table-list tbody");
      let rowOrdered = [...rows].sort((a, b) => {
        if (a.cells[index].innerHTML > b.cells[index].innerHTML) {
          return order == "up" ? 1 : -1;
        }
        if (a.cells[index].innerHTML < b.cells[index].innerHTML) {
          return order == "up" ? -1 : 1;
        }
        return 0;
      });
      body.innerHTML = "";
      rowOrdered.forEach((r) => {
        body.innerHTML += r.outerHTML;
      });
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
  },
};
</script>