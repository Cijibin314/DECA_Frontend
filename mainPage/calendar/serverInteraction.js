async function getCalData(){
    try{
        const res = await fetch("localhost:3000/api/calendar")
        const data = await res.json();
        console.log("data: " + data)
        return data;
    }catch(e){
        console.log("Error fetching: " + e);
    }
}