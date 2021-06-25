import './Filter.css'
import {useState} from 'react'

const Filter = () => {

    const [open, setOpen] = useState(false);



    return ( 
        <>
            <div className="container-fluid mt-2 mb-5">
    <div className="row g-2">
        <div className="col-md-3">
                <div className="t-products p-2">
                    <h6 className="text-uppercase">Filter</h6>
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse"  data-bs-target="#filters" aria-expanded="false" aria-controls="filters"><i class="fa fa-filter" aria-hidden="true"></i></button>
                    {/* <div className="p-lists">
                        <div className="d-flex justify-content-between mt-2"> <span>Laptops</span> <span>23</span> </div>
                        <div className="d-flex justify-content-between mt-2"> <span>Desktops</span> <span>46</span> </div>
                        <div className="d-flex justify-content-between mt-2"> <span>Monitors</span> <span>13</span> </div>
                        <div className="d-flex justify-content-between mt-2"> <span>Mouse</span> <span>33</span> </div>
                        <div className="d-flex justify-content-between mt-2"> <span>Keyboard</span> <span>12</span> </div>
                        <div className="d-flex justify-content-between mt-2"> <span>Printer</span> <span>53</span> </div>
                        <div className="d-flex justify-content-between mt-2"> <span>Mobiles</span> <span>203</span> </div>
                        <div className="d-flex justify-content-between mt-2"> <span>CPU</span> <span>23</span> </div>
                    </div> */}
                </div>
                <div id="filters" className="collapse show" >
                    <div className="category p-2" >
                        <div className="heading d-flex justify-content-between align-items-center">
                            <h6 className="text-uppercase">Category</h6> <span>--</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> <label className="form-check-label" for="flexCheckDefault"> Seeds </label> </div> <span>23</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/> <label className="form-check-label" for="flexCheckChecked"> Nutrition </label> </div> <span>24</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/> <label className="form-check-label" for="flexCheckChecked"> Protection </label> </div> <span>14</span>
                        </div>
                        
                    </div>
                    <div className="brand p-2">
                        <div className="heading d-flex justify-content-between align-items-center">
                            <h6 className="text-uppercase">Brand</h6> <span>--</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> <label className="form-check-label" for="flexCheckDefault"> Ajeet </label> </div> <span>3</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/> <label className="form-check-label" for="flexCheckChecked"> Bayer </label> </div> <span>4</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/> <label className="form-check-label" for="flexCheckChecked"> Crystal </label> </div> <span>14</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/> <label className="form-check-label" for="flexCheckChecked"> Nandi </label> </div> <span>8</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/> <label className="form-check-label" for="flexCheckChecked"> Spectrum </label> </div> <span>14</span>
                        </div>
                    </div>
                    <div className="product p-2 mb-2">
                        <div className="heading d-flex justify-content-between align-items-center">
                            <h6 className="text-uppercase">Product</h6> <span>--</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> <label className="form-check-label" for="flexCheckDefault"> Cotton Seed </label> </div> <span>13</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/> <label className="form-check-label" for="flexCheckChecked"> Bajra Seed </label> </div> <span>4</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/> <label className="form-check-label" for="flexCheckChecked"> Herbicide </label> </div> <span>24</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/> <label className="form-check-label" for="flexCheckChecked"> Pesticide </label> </div> <span>18</span>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/> <label className="form-check-label" for="flexCheckChecked"> Insecticide </label> </div> <span>44</span>
                        </div>
                    </div>
                </div> 
        </div>
        <div className="col-md-9">
            <div className="row g-2">
                <div className="col-md-4">
                    <div className="productDis py-4"> <span className="off bg-success">-0% OFF</span>
                        <div className="text-center"> <img src="//cdn.shopify.com/s/files/1/0722/2059/products/AJEET-155-BG-II-COTTON_0e31cc0c-2f21-4219-9f1f-ec62e45e74d9_large.jpg?v=1601729586" width="200"/> </div>
                        <div className="about text-center">
                            <h5>AJEET 155 BG-II COTTON</h5> <span>475 gm</span>
                        </div>
                        <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center"> <button className="btn btn-primary text-uppercase">Add to cart</button>
                            <div className="add"> <span style={{color:'green',fontWeight:'bold'}}>Rs. 767</span> <span style={{color:'red'}}><s>Rs. 767</s></span> </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="productDis py-4"> <span className="off bg-success">-0% OFF</span>
                        <div className="text-center"> <img src="//cdn.shopify.com/s/files/1/0722/2059/products/AJEET-155-BG-II-COTTON_0e31cc0c-2f21-4219-9f1f-ec62e45e74d9_large.jpg?v=1601729586" width="200"/> </div>
                        <div className="about text-center">
                            <h5>AJEET 155 BG-II COTTON</h5> <span>475 gm</span>
                        </div>
                        <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center"> <button className="btn btn-primary text-uppercase">Add to cart</button>
                            <div className="add"> <span style={{color:'green',fontWeight:'bold'}}>Rs. 767</span> <span style={{color:'red'}}><s>Rs. 767</s></span> </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="productDis py-4"> <span className="off bg-success">-0% OFF</span>
                        <div className="text-center"> <img src="//cdn.shopify.com/s/files/1/0722/2059/products/AJEET-155-BG-II-COTTON_0e31cc0c-2f21-4219-9f1f-ec62e45e74d9_large.jpg?v=1601729586" width="200"/> </div>
                        <div className="about text-center">
                            <h5>AJEET 155 BG-II COTTON</h5> <span>475 gm</span>
                        </div>
                        <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center"> <button className="btn btn-primary text-uppercase">Add to cart</button>
                            <div className="add"> <span style={{color:'green',fontWeight:'bold'}}>Rs. 767</span> <span style={{color:'red'}}><s>Rs. 767</s></span> </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="productDis py-4"> <span className="off bg-success">-0% OFF</span>
                        <div className="text-center"> <img src="//cdn.shopify.com/s/files/1/0722/2059/products/AJEET-155-BG-II-COTTON_0e31cc0c-2f21-4219-9f1f-ec62e45e74d9_large.jpg?v=1601729586" width="200"/> </div>
                        <div className="about text-center">
                            <h5>AJEET 155 BG-II COTTON</h5> <span>475 gm</span>
                        </div>
                        <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center"> <button className="btn btn-primary text-uppercase">Add to cart</button>
                            <div className="add"> <span style={{color:'green',fontWeight:'bold'}}>Rs. 767</span> <span style={{color:'red'}}><s>Rs. 767</s></span> </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="productDis py-4"> <span className="off bg-success">-0% OFF</span>
                        <div className="text-center"> <img src="//cdn.shopify.com/s/files/1/0722/2059/products/AJEET-155-BG-II-COTTON_0e31cc0c-2f21-4219-9f1f-ec62e45e74d9_large.jpg?v=1601729586" width="200"/> </div>
                        <div className="about text-center">
                            <h5>AJEET 155 BG-II COTTON</h5> <span>475 gm</span>
                        </div>
                        <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center"> <button className="btn btn-primary text-uppercase">Add to cart</button>
                            <div className="add"> <span style={{color:'green',fontWeight:'bold'}}>Rs. 767</span> <span style={{color:'red'}}><s>Rs. 767</s></span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
     );
}
 
export default Filter;