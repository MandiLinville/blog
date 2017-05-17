//PRIVATE
var state = {
    entries: [{
	id: 1,
    title: 'Lorem Ipsum',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
	{
	id: 2,
    title: 'Entry 2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	}
	]
}

//PUBLIC
let store = {
  methods: {
		getEntries() {
			return state.entries
		},
		createEntries(entry) {
				//validate its a good review
				if(!entry || !entry.id || !entry.title || !entry.body ) { return }

				state.entries.push(entry)
		},
		getEntriesById(id) {
			for(var i = 0; i < state.entries.length; i++) {
				var entry = state.entries[i];
				if(entry.id == id){
				return state.entries[i]
				}
			}
		}
  }
}

export { store }