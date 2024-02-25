import { useState, useEffect } from 'react';
import '../styles/Banner.css'
import '../styles/Cart.css'
/*function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15*/
    /*var Total = monsteraPrice + ivyPrice + flowerPrice*/
   /* const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
    <div className="lmj-cart">
    <h2>Panier</h2>
    <ul>
     <li>Monstera : {monsteraPrice}dt</li>
      <button onClick={() => updateCart(cart + 1)}>
                    Ajouter
      </button>
     <li>Lierre : {ivyPrice}dt</li>
     <li>Fleurs : {flowerPrice}dt</li>
    </ul>
    <h3>Total : {monsteraPrice * cart}€</h3>
    <div><button onClick={() => updateCart(0)}>
                    vider le panier
      </button></div>
      </div>) : (
        <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
    )
}
export default Cart*/

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	},[total])	
	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
								
								<button onClick={() => updateCart([])}>Supprimer</button>
								
							</div>
						))}
						
					</ul>
					<h3>Total : {total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart