async function fetchData() {
    try {
        let data = await fetch("https://api.gith.com/users");
        console.log(data);
        let finalData = await data.json();
        console.log(finalData);
    } catch (error) {
        console.log(error.message);
    }
}

fetchData();