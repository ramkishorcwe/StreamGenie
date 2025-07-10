import { useSelector } from "react-redux";
import Header from "./header";
// import {useEffect} from "react";
import type { IStore } from "../store/store";

const Home = ()=>{
      const selector = useSelector((store: IStore)=>store.user);
    console.log(selector);
    // useEffect(()=>{

    // },[])

    return(<>
        <Header />
        Home
    </>)
}
export default Home;