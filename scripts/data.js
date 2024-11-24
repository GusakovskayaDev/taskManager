
const dataMethods = {
	data: [],

	add(record) {
    this.data.push(record);
    this.save();
		// this.displayRecord(record);
  },

	save() {
    localStorage.setItem('myData', JSON.stringify(this.data));
  },
}

export default dataMethods;