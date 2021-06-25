const Home = () => {
    return ( 
        <>
            <div className="home" >
                {/* <img src="images/homeBackground.jpeg" alt="Background Image" /> */}
                {/* <br/><br/> */}
                <div className="homeText">
                    <h1>Helping Farmers Grow</h1>
                    <h2>Combining Data and Technology with Agronomy</h2>
                </div>
                
            </div>
            <div className="aboutUs">
                <div>
                    <iframe width="100%" height="100%" className="videoSpace"
                    src="https://www.youtube.com/embed/tESxMGMdbO8">
                    </iframe> 
                </div>
                <div className="aboutUsText">
                    <h1>About Us</h1>
                    <br/>
                    <p>Krishi Mitra is India’s foremost AgTech start-up working on the mission of #HelpingFarmersGrow by providing a 
                        complete range of agri solutions at the fingertips of farmers. Krishi Mitra’s tech platform provides a 
                        combination of agronomy advice coupled with service and agri input products that enable farmers to significantly 
                        improve their productivity and income.
                        <br/><br/>
                        We use an extensive amount of data, technology and agronomy knowledge to give the right solutions (advice+products)
                        to Indian farmers. <br/><br/>
                        Krishi Mitra currently operates in the states of Gujarat and has over 5 Thousand farmers on its digital platform.
                        Farmers in these area can avail agri solutions for their entire crop life-cycle with a simple “missed call” or 
                        through its Web app, which is amongst the best farming focused apps in the country.<br/><br/>
                        Over the next 5 years, we plan to continue to provide incremental value to farmers in terms of wide range of inputs
                        delivered at their doorsteps, world-class agronomy guidance and also access to market linkages and credit.</p>
                </div>
            </div>
        </>

     );
}
 
export default Home;
// style={{ backgroundImage: "url(images/homeBackground.jpeg)"}}
// background-repeat: no-repeat,
// style={{ backgroundImage: "url(images/homeBackground.jpeg)"} }