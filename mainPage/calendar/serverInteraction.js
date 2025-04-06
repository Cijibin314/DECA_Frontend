async function getCalData(){
    try{
        const res = await fetch("https://deca-backend.onrender.com/api/calendar")
        const data = await res.json();
        console.log("data: " + data)
        return data;
    }catch(e){
        console.log("Error fetching: " + e);
    }
}