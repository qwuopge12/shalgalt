import React from "react"
import { Link } from "react-router-dom"

const Header = () =>{
    return(
        <div className="w-full h-[740px] bg-[white] flex justify-center items-center ">
            <div className="w-[97%] h-[94%] bg-[white] block">
                <div className="w-full h-[50%] bg-[white] felx justify-between items-end">
                    <div className="w-[20%] h-[60%] bg-[red] flex justify-center items-center">
                        <div className="text-[black] text-[40px]">
                            <h1>
                                <Link to="/Red">READ MORE</Link>
                            </h1>
                        </div>
                    </div>
                    <div>
                        {/* <img src={Logo} alt="/" /> */}
                    </div>
                </div>
                <div className="w-full h-[50%] bg[white] flex justify-between items-end">
                    <div className="w-[20%] h-[60%] bg-[green] flex justify-center items-center">
                        <div className="text-[black] text-[40px]">
                            <h1>
                                <Link to="/Green">READ MORE</Link>
                            </h1>
                        </div> 
                    </div>
                    <div className="w-[20%] h-[60%] bg-[blue] flex justify-center items-center">
                        <div className="text-[black] text-[40px]">
                            <h1>
                                <Link to="/Blue">READ MORE</Link>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header