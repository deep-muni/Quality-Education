export default function urlModifier() {
    const url = window.location.href;

    if(url.includes("localhost")){
        return "http://localhost:5000/";
    }else{
        return "https://qualityeducationbackend.herokuapp.com/";
    }
}
