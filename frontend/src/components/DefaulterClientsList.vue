<template>
  <v-card outlined maxWidth="960" class="mx-auto my-12">
    <v-card-title>
      Clientes inadimplentes
      <v-spacer></v-spacer>
      <v-text-field
        v-model="query"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="clients"
      :items-per-page="5"
      :search="query"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "DefaulterClientsList",
  data: function () {
    return {
      query: "",
      headers: [
        { text: "Nome do cliente", value: "name" },
        { text: "Valor", value: "totalDefault" },
        { text: "Desde", value: "firstDefaultDate" },
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
