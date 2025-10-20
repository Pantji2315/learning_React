function Header(){
    return (
<div className="Heading">
<img  className="logo" src="https://livewire.thewire.in/wp-content/uploads/2021/02/myntra.png" height="80px" width="80px"/>
<div className="option">
<button className="btn">Men</button>
<button className="btn">Women</button>
<button className="btn">Kids</button>
<button className="btn">Home and Livings</button>
<button className="btn">Beauty</button>
<button className="btn">Studio</button>
</div>
<input  className="searchBar" placeholder="Search for products brands and more"></input>
<div className="Profile">
    <button className="pro-btn">Profiles</button>
    <button className="pro-btn">Wishlist</button>
    <button className="pro-btn">Bag</button>
</div>
</div>

    )
}
export default Header;