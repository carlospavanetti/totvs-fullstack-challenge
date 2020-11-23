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
    >
      <template v-slot:[`item.firstDefaultDate`]="{ item }">
        {{ item.firstDefaultDate | localizeDate }}
      </template>
      <template v-slot:[`item.totalDefault`]="{ item }">
        {{ item.totalDefault | currencyFromNumber }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "DefaulterClientsList",
  mounted() {
    axios
      .get(`${process.env.VUE_APP_ROOT_API}/defaulters`)
      .then((response) => (this.clients = response.data));
  },
  filters: {
    localizeDate(date) {
      if (!date) return;
      return new Date(date).toLocaleDateString("pt-br");
    },

    currencyFromNumber(number) {
      return `R$ ${number.toFixed(2)}`;
    },
  },
  data() {
    return {
      query: "",
      headers: [
        { text: "Nome do cliente", value: "name" },
        { text: "Valor", value: "totalDefault" },
        { text: "Desde", value: "firstDefaultDate" },
      ],
      clients: [],
    };
  },
};
</script>
