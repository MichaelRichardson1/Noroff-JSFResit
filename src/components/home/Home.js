import React from "react";
import "../../sass/style.scss";
import Heading from "../layout/Heading";
import MonsterList from "../data/MonsterList";
import {Search} from "./Search";

function Home() {
    return  <div className="container">   
                <Search />             
                <Heading content="Home" />
                
                <MonsterList />        
            </div>;
}

export default Home;
