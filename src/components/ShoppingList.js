import { plantList } from './datas/plantList'

import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'


function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
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
				))*/ }
				{plantList.map(({id, cover, name, water, light, isBestSale, isSpecialOffer})=>(
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
						/*isBestSale = {isBestSale ? <span>🔥</span> : null}
						isSpecialOffer = {isSpecialOffer ? <div className="lmj-sales">Soldes💲!</div> : null}
					*//>
				))}
			</ul>	
		</div>
	)
}

export default ShoppingList
