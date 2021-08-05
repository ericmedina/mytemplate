<template>
  <div>
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
        <tr>
          <td class="text-primary">#6291</td>
          <td class="w-100">
            <span class="list-label">CUIT:</span> 23-37176364-4
          </td>
          <td class="important w-100">
            <div class="list-item">
              <div class="list-body">
                <span>Oric Daniel Medina</span>
                <small class="text-secondary">ericmedina.dev@gmail.com</small>
              </div>
            </div>
          </td>
          <td class=""><span class="list-label">Total:</span> $3171</td>
          <td class=""><span class="list-label">Fecha:</span> 19/10/2021</td>
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
        <tr>
          <td class="text-primary">#6292</td>
          <td class="w-100">
            <span class="list-label">CUIT:</span> 20-37176364-4
          </td>
          <td class="important w-100">
            <div class="list-item">
              <div class="list-body">
                <span>Mric Daniel Medina</span>
                <small class="text-secondary">ericmedina.dev@gmail.com</small>
              </div>
            </div>
          </td>
          <td class=""><span class="list-label">Total:</span> $3171</td>
          <td class=""><span class="list-label">Fecha:</span> 19/10/2021</td>
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
        <tr>
          <td class="text-primary">#6293</td>
          <td class="w-100">
            <span class="list-label">CUIT:</span> 22-37176364-4
          </td>
          <td class="important w-100">
            <div class="list-item">
              <div class="list-body">
                <span>Cric Daniel Medina</span>
                <small class="text-secondary">ericmedina.dev@gmail.com</small>
              </div>
            </div>
          </td>
          <td class=""><span class="list-label">Total:</span> $3171</td>
          <td class=""><span class="list-label">Fecha:</span> 19/10/2021</td>
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
        <tr>
          <td class="text-primary">#6294</td>
          <td class="w-100">
            <span class="list-label">CUIT:</span> 21-37176364-4
          </td>
          <td class="important w-100">
            <div class="list-item">
              <div class="list-body">
                <span>Rric Daniel Medina</span>
                <small class="text-secondary">ericmedina.dev@gmail.com</small>
              </div>
            </div>
          </td>
          <td class=""><span class="list-label">Total:</span> $3171</td>
          <td class=""><span class="list-label">Fecha:</span> 19/10/2021</td>
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
  mounted() {
    let headers = document.querySelectorAll(".table-list th[sortable], .table-list th[sortdown], .table-list th[sortup]");
    headers.forEach((th) => {
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
    });
  },
  methods: {
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
        this.resetSortable()
        element.removeAttribute("sortable");
        element.setAttribute("sortup", "");
        this.sort(element, 'up')
    },
    sortDown(element) {
        this.resetSortable()
        element.removeAttribute("sortable");
        element.setAttribute("sortdown", "");
        this.sort(element, 'down')
    },
    sort(element, order) {
        let index = element.cellIndex;
        let rows =  document.querySelectorAll(".table-list tbody tr");
        let body = document.querySelector(".table-list tbody");
        let rowOrdered = [...rows].sort((a,b) => {
            if(a.cells[index].innerHTML > b.cells[index].innerHTML){
                return (order == 'up')?1:-1
            }
            if(a.cells[index].innerHTML < b.cells[index].innerHTML){
                return (order == 'up')?-1:1
            }
            return 0
        })
        body.innerHTML = ''
        rowOrdered.forEach((r) => {
            body.innerHTML += r.outerHTML
        })
    },
  },
};
</script>