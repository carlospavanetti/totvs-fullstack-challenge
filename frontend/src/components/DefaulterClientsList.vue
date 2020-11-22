<template>
  <v-data-table
    :headers="headers"
    :items="clients"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  name: "DefaulterClientsList",
  data: function () {
    return {
      headers: [
        { text: "Nome Completo", value: "name" },
        { text: "Total Inadimplência", value: "totalDefault" },
        { text: "Primeira Inadimplência", value: "firstDefaultDate" },
      ],
      clients: [
        {
          name: "Carlos Prado 1",
          totalDefault: 159,
          firstDefaultDate: new Date(),
        },
        {
          name: "Carlos Prado 2",
          totalDefault: 237,
          firstDefaultDate: new Date(),
        },
        {
          name: "Carlos Prado 3",
          totalDefault: 262,
          firstDefaultDate: new Date(),
        },
        {
          name: "Carlos Prado 4",
          totalDefault: 305,
          firstDefaultDate: new Date(),
        },
      ],
    };
  },
};
</script>
