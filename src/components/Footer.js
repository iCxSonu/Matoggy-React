const Footer = (() => {
    return (
        <div className="footer-container flex flex-wrap justify-evenly h-10 mt-5 font-extralight, font-medium bg-violet-800 shadow-xl shadow-purple-900  ">
            <div className="first">
                <h3 className="company font-bold text-2xl mt-2">Company</h3>
                <ul className="com-list ">
                    <li>About</li>
                    <li>Career</li>
                    <li>Our Team</li>
                    <li>Matoggy One</li>
                    <li>Instamart</li>
                </ul>
            </div>

            <div className="second">
                <h3 className="contact font-bold text-2xl mt-2">Contact Us</h3>
                <ul className="cont-list">
                    <li>Help & Support</li>
                    <li>Partner With Us</li>
                    <li>Ride With Us</li>

                </ul>
            </div>
            <div className="third">
                <h3 className="deliver font-bold text-2xl mt-2"> We Deliver To</h3>
                <ul className="del">
                    <li>Delhi</li>
                    <li>Bangalore</li>
                    <li>HyderaBad</li>
                    <li>Mumbai</li>
                    <li>Pune</li>
                </ul>
                <select id="city" name="city" className="form-select">
                    <option value="">Search Cities</option>
                    <option value="Alipur">Alipur</option>
                    <option value="Bawana">Bawana</option>
                    <option value="Central Delhi">Central Delhi</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Deoli">Deoli</option>
                    <option value="East Delhi">East Delhi</option>
                    <option value="Karol Bagh">Karol Bagh</option>
                    <option value="Najafgarh">Najafgarh</option>
                    <option value="Nangloi Jat">Nangloi Jat</option>
                    <option value="Narela">Narela</option>
                    <option value="New Delhi">New Delhi</option>
                    <option value="North Delhi">North Delhi</option>
                    <option value="North East Delhi">North East Delhi</option>
                    <option value="North West Delhi">North West Delhi</option>
                    <option value="Pitampura">Pitampura</option>
                    <option value="Rohini">Rohini</option>
                    <option value="South Delhi">South Delhi</option>
                    <option value="South West Delhi">South West Delhi</option>
                    <option value="West Delhi">West Delhi</option>
                </select>

            </div>
            <div className="fourth">
                <h3 className="legal font-bold text-2xl mt-2">Legal</h3>

                <ul className="leg">
                    <li>Terma & Condition</li>
                    <li>Cookie Policy</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

        </div>
    )
})

export default Footer;