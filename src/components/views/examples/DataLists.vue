<template>
  <div class="card">
    <table-list
      :showFilter="true"
      :header="header"
      :body="body"
      :data="items"
    ></table-list>
  </div>
</template>
<script>
import TableList from "@/components/elements/TableList";
export default {
  name: "DataLists",
  components: {
    TableList,
  },
  data() {
    return {
      header: [
        { value: "Name", sortable:true },
        { value: "Email" , sortable:true },
        { value: "Cell" },
        { value: "Gender" },
        { value: "Age" },
      ],
      body: [
        {
          class: "important",
          data: [
            {
              value: "name",
              label: "Name",
              mutator: (name) => {
                return name["first"] + " " + name["last"];
              },
            },
          ],
        },
        {
          class: "w-100",
          data: [{ value: "email", label: "Email" }],
        },
        {
          class: "w-100",
          data: [{ value: "cell", label: "Cellphone" }],
        },
        {
          class: "w-100",
          data: [{ value: "gender", label: "Gender" }],
        },
        {
          class: "w-100",
          data: [{ value: "dob.age", label: "Age" }],
        },
      ],
      items: [],
    };
  },
  mounted() {
    fetch(
      "https://randomuser.me/api/?inc=gender,name,dob,,email,cell&noinfo&results=10"
    )
      .then((response) => response.json())
      .then((data) => this.items = data.results);
  },
};
</script>