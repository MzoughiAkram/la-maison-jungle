import '../styles/Banner.css'
function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    var Total = monsteraPrice + ivyPrice + flowerPrice
    return (<div className="lmj-cart">
    <h2>Panier</h2>
    <ul>
     <li>Monstera : {monsteraPrice}dt</li>
     <li>Lierre : {ivyPrice}dt</li>
     <li>Fleurs : {flowerPrice}dt</li>
    </ul>
      Total : { Total }dt
      </div>)
}
export default Cart