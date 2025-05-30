import { plantList } from '../datas/plantList'
import React, { useState } from 'react'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import Categories from './Categories.js'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList

/*function ShoppingList({ cart, updateCart}) {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div className='lmj-shopping-list'>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{/*plantList.map((plant) => (
					<li key={plant.id}>
						{plant.name}
						{plant.isBestSale ? <span>🔥</span> : null}
						{plant.isSpecialOffer ? <div className="lmj-sales">Soldes💲!</div> : null}
						<CareScale careType='water' scaleValue={plant.water} />
						<CareScale careType='light' scaleValue={plant.light} />
					</li>
				))*/ /*}
				{plantList.map(({id, cover, name, water, light, isBestSale, isSpecialOffer})=>(
					<div key={id}>
					<PlantItem
						cover={cover}
						name={name}
						water={water}
						light={light}
						/*isBestSale = {isBestSale ? <span>🔥</span> : null}
						isSpecialOffer = {isSpecialOffer ? <div className="lmj-sales">Soldes💲!</div> : null}
					*//*/>
					<button onClick={() => updateCart(cart + 1)}>Ajouter</button>	
					</div>
				))}
			</ul>	
		</div>
	)
}

export default ShoppingList*/
