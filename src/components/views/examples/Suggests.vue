<template>
  <div class="card">
    <h2 class="card-title">Suggests</h2>

    <h4 class="mt-2">With simple array:</h4>
    <suggest
      id="technology"
      label="Technology"
      placeholder="Find language.."
      class="my-1"
      :items="languagesFormat"
      :data="languagesItems"
      @selected="languageSelected"
    ></suggest>
    <p class="text-primary my-1">
      My selected technology: <b v-if="language">{{ language.description }}</b>
    </p>
    <hr class="my-2" />
    <h4>With api:</h4>
    <suggest
      id="developer"
      label="Developer"
      placeholder="Search developer.."
      class="my-1"
      :items="developersFormat"
      :data="developersItems"
      @selected="developerSelected"
    ></suggest>
    <p class="text-success my-1">
      My selected developer:
      <b v-if="developer">{{ developer.name.first }} {{ developer.name.last }}</b>
    </p>
  </div>
</template>
<script>
export default {
  name: "Suggests",
  data() {
    return {
      language: null,
      languagesFormat: [{ name: "description" }],
      languagesItems: [
        { description: "PHP" },
        { description: "Javascript" },
        { description: "Python" },
        { description: "Java" },
        { description: "Rust" },
        { description: "C#" },
      ],

      developer: null,
      developersFormat: [
        {
          name: "name",
          class: "text-success",
          mutator: (name) => {
            return name["first"] + " " + name["last"];
          },
        },
        {
          name:"email",
          class:"text-secondary"
        }
      ],
      developersItems:[]
    };
  },
  mounted() {
    fetch(
      "https://randomuser.me/api/?inc=name,email&noinfo&results=10"
    )
      .then((response) => response.json())
      .then((data) => this.developersItems = data.results);
  },
  methods: {
    languageSelected(language) {
      this.language = language;
    },
    developerSelected(developer){
      this.developer = developer
    }
  },
};
</script>