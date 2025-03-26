import CareScale from './CareScale'
import '../styles/PlantItem.css'
import '../styles/ecommerce_plant_css.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, water, light, price }) {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			<div className='lmj-plant-item-name'>{name}</div>
			<div className='lmj-plant-item-price'>{price}€</div>
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}


export default PlantItem