function carApp() {
    return {
        town: '',
        count: 0,
        fetchMostBlueCars() {
            axios.get('http://localhost:3000/api/most-blue-cars')
                .then(response => {
                    this.town = response.data.town;
                    this.count = response.data.count;
                })
                .catch(error => {
                    console.error('Error fetching most blue cars:', error);
                });
        }
    };
}
