import React from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import data from "./data"

export default function App() {
    const cards = data.map(elem => (
        <Card 
            key={elem.id}
            {...elem} 
        />
    ))

    return (
        <div className="wrapper-container">
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}