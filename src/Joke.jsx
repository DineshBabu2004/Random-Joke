import { useEffect,useState } from "react";
export default function Joke() {
    let URL =  "https://official-joke-api.appspot.com/random_joke";
    let[joke,setJoke] = useState({setup:"",punchLine:""});
    useEffect(()=>{async function firstJoke(){
        let response =  await fetch(URL);
       let  jsonResponse =  await response.json();

       setJoke((curr) => ({
        ...curr,
        setup: jsonResponse.setup,
        punchLine: jsonResponse.punchline
    }))}
    firstJoke();
},[]);

    
    let randomJoke = async ()=>{
        let response =  await fetch(URL);
       let  jsonResponse =  await response.json();

       setJoke((curr) => ({
        ...curr,
        setup: jsonResponse.setup,
        punchLine: jsonResponse.punchline
    }));
    }
    return(
        <>
        <h2>Beleive me it is a Joke</h2>
        <h2>{joke.setup}</h2>
        <h2>{joke.punchLine}</h2>
        <button onClick={randomJoke}>Next Joke</button>
        </>
    );
}