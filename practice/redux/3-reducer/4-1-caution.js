function reducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch ( action.type ) {
      case SET_SELECTED_PEOPLE:
        /* draft.selectedPeople = draft.propleList.find(
          item => item.id === action.id );*/
        draft.selectedPeople = action.id
        break;
      case EDIT_PEOPLE_NAME:
        const people = draft.peopleList.find(item => item.id === action.id);
        people.name = action.name;
        break;
      // ...
    }
  });
}