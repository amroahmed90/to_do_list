import React, { createContext, ReactNode, useContext } from "react";
import { useSelector } from "react-redux";
import { Data, List, Person } from "../types/types";

interface ContextType {
  activePerson: Person | null;
  updateActivePerson: (personId: string) => void;
  activeList: List | null;
  updateActiveList: (listId: string) => void;
}

// context
const PersonsListsContext = createContext<ContextType | undefined>(undefined);

//provider
const PesronsListsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const personsWithLists = useSelector((st) => st as Data);

  const [activePerson, setActivePerson] = React.useState<Person | null>(
    personsWithLists.length > 0 ? personsWithLists[0] : null
  );

  const [activeList, setActiveList] = React.useState<List | null>(
    activePerson && activePerson.lists.length > 0 ? activePerson.lists[0] : null
  );

  const updateActivePerson = React.useCallback(
    (personId: string) => {
      // make sure person with id exists before setting it
      const person = personsWithLists.filter(
        (person) => person.id === personId
      );
      if (!person || person.length === 0) {
        throw new Error(`Person with id ${personId} not found!`);
      }

      setActivePerson(person[0]);
      setActiveList(person[0].lists.length > 0 ? person[0].lists[0] : null);
    },
    [personsWithLists]
  );

  const updateActiveList = React.useCallback(
    (listId: string) => {
      // make sure active person has a list with that id before setting it
      const list = activePerson?.lists.filter((list) => list.id === listId);
      if (!list || list?.length === 0) {
        throw new Error(
          `Selected person with id ${activePerson?.id} has no list with id ${listId}`
        );
      }

      setActiveList(list[0]);
    },
    [activePerson?.id, activePerson?.lists]
  );

  const value = React.useMemo<ContextType>(
    () => ({
      activePerson,
      updateActivePerson,
      activeList,
      updateActiveList,
    }),
    [activeList, activePerson, updateActiveList, updateActivePerson]
  );

  return (
    <PersonsListsContext.Provider value={value}>
      {children}
    </PersonsListsContext.Provider>
  );
};

// hook
const usePersonsLists = (): ContextType => {
  const context = useContext(PersonsListsContext);

  if (!context) {
    throw new Error("usePersonsLists must be within a PesronsListsProvider");
  }

  return context;
};

export { PesronsListsProvider, usePersonsLists };
