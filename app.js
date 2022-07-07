const App = {
  data() {
    return {
      title: 'Notes',
      input: {
        value: '',
        placeholder: 'Type ur note',
      },
      notes: [],
    };
  },
  mounted() {
    this.getNotes();
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList));
      },
      deep: true,
    },
  },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem('notes');
      if (localNotes) {
        this.notes = JSON.parse(localNotes);
      }
    },
    onSubmit() {
      const newNote = {
        description: this.input.value,
        seen: false,
      };
      this.notes.push(newNote);
      this.input.value = '';
    },
    remove(index) {
      this.notes.splice(index, 1);
    },
    toggleEdit(index) {
      this.notes[index].seen = !this.notes[index].seen;
    },
  },
};

Vue.createApp(App).mount('#app');
