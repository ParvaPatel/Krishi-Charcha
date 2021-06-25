import './ProductDetails.css'
const ProductDetails = () => {
    return ( 
        <>
            <br /><br /><br />
            <div className="container-fluid mt-2 mb-5 ">
                <div className="row g-2">
                    <div className="col-md-5 displayImg">
                       <img src="//cdn.shopify.com/s/files/1/0722/2059/products/AJEET-155-BG-II-COTTON_0e31cc0c-2f21-4219-9f1f-ec62e45e74d9_large.jpg?v=1601729586" alt="" />
                        {/* <img src="//cdn.shopify.com/s/files/1/0722/2059/products/AJEET-155-BG-II-COTTON_0e31cc0c-2f21-4219-9f1f-ec62e45e74d9_large.jpg?v=1601729586" alt="" />
                        <img src="//cdn.shopify.com/s/files/1/0722/2059/products/AJEET-155-BG-II-COTTON_0e31cc0c-2f21-4219-9f1f-ec62e45e74d9_large.jpg?v=1601729586" alt="" />

                        <img src="//cdn.shopify.com/s/files/1/0722/2059/products/AJEET-155-BG-II-COTTON_0e31cc0c-2f21-4219-9f1f-ec62e45e74d9_large.jpg?v=1601729586" alt="" />
                        <img src="//cdn.shopify.com/s/files/1/0722/2059/products/AJEET-155-BG-II-COTTON_0e31cc0c-2f21-4219-9f1f-ec62e45e74d9_large.jpg?v=1601729586" alt="" /> */}

                        
                        {/* <img src="https://5.imimg.com/data5/TN/XJ/VN/SELLER-44455250/ajeet-155f-125x125.jpeg" alt="" /> */}
                    </div>
                    <div className="col-md-7 displayDtl">
                        <h3 className="text-uppercase">AJEET 155 BG-II COTTON
                        </h3> 
                        <div className="add"> 
                            <span style={{color:'green',fontWeight:'bold',fontSize:"2em"}}>Rs. 767</span> 
                            <span style={{color:'red'}}><s>Rs. 767</s></span> 
                        </div>
                        <div >
                            <table className="tabCont">
                                <th colSpan="3">Product Details</th>
                                <tr className="trPro">
                                    <td className="tdType">Brand</td>
                                    <td className="tdEmpty">:</td>
                                    <td className="tdDesc">Ajeet Seeds</td>
                                </tr>
                                <tr className="trPro">
                                    <td className="tdType">Product</td>
                                    <td className="tdEmpty">:</td>
                                    <td className="tdDesc">Cotton</td>
                                </tr>
                                <tr className="trPro">
                                    <td className="tdType">Category</td>
                                    <td className="tdEmpty">:</td>
                                    <td className="tdDesc">Seeds</td>
                                </tr>
                                <tr className="trPro">
                                    <td className="tdType">Size</td>
                                    <td className="tdEmpty">:</td>
                                    <td className="tdDesc">475gm</td>
                                </tr>
                               
                                
                            </table>
                        </div>
                        <br />
                        <div>
                            <h6>Product Description</h6>
                            <p>Features:</p>
                            <ul>
                                <li>Duration (days) : 145-160</li>
                                <li>Plant height (cm) : 145-160</li>
                                <li>Boll weight (gm) : 6.0-6.5</li>
                                <li>Staple length (mm) : 31.5-32.5</li>
                                <li>Ginning (%) : 36.5-37.5</li>
                            </ul>
                            <p>Salient Feature:</p>
                            <p>Suitable for irrigated as well as rainfed cultivation. 
                                Tall plant type with more no. of sympodia having big 
                                boll size Big boll size with good bearing and retention
                                capacity. good fibre qualities. Highly tolerant to leaf 
                                reddening & moderately tolerant to sucking pest. Good 
                                rejuvenation capacity.
                            </p>
                        </div>


                        <div className="cart-buttonProd mt-3 px-2">
                            <button className="btn btn-primary text-uppercase">
                                Add to cart
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ProductDetails;