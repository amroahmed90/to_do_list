import { signal, computed } from "@preact/signals-react";
import { INITIAL_DATA } from "../initialData/initialData";
import { Data } from "../types/types";

export const namesWithLists = signal<Data>(INITIAL_DATA);

export const activePerson = signal<string>(
  namesWithLists.value.length > 0 ? namesWithLists.value[0].id : ""
);

export const setActivePerson = (id: string) => {
  const person = namesWithLists.value.find((person) => person.id === id);
  if (!person) {
    activePerson.value = namesWithLists.value[0].id;
    console.error(`No person found with id: ${id}`);
    throw new Error(`No person found with id: ${id}`);
  }
  activePerson.value = id;
};

export const names = computed(() => {
  return namesWithLists.value.map((person) => person.name);
});

export const getPersonsLists = computed(
  () =>
    function (id: string) {
      const lists = namesWithLists.value.find(
        (person) => person.id === id
      )?.lists;
      if (!lists) {
        throw new Error(`No lists found for person with id: ${id}`);
      }
      return lists;
    }
);
