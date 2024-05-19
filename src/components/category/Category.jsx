import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://diz7l2x0sn587.cloudfront.net/kisankonnect/Images/ProductGroupImage/20221102130437Untitled%20design%20(25)-min.png',
        name: 'Fruits'
    },
    {
        image: 'https://diz7l2x0sn587.cloudfront.net/kisankonnect/Images/ProductGroupImage/20221102125708Untitled%20design%20(20)-min.png',
        name: 'Vegetables'
    },
    {
        image: 'https://pngbuy.com/wp-content/uploads/2023/04/white-cow-png.png',
        name: 'Dairy Farm'
    },
    {
        image: 'https://diz7l2x0sn587.cloudfront.net/kisankonnect/Images/ProductGroupImage/20221102125834Untitled%20design%20(21)-min.png',
        name: 'Dry fruits'
    },
    {
        image: 'https://diz7l2x0sn587.cloudfront.net/kisankonnect/Images/ProductGroupImage/20221102125535Untitled%20design%20(19)-min.png',
        name: 'Flowers'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8tB2ygQh9oro5NX_CsejwII9ENQixo_y4rquwR6aOWF0XlUNW3P-nPpJMMYHzWxmSFE&usqp=CAU',
        name: 'AamMahotsav'
    },
    {
        image: 'https://bachatkart.in/image/cache/catalog/product/breakfast/chakki%20fresh%20aata-700x700.jpg',
        name: 'Fresh Atta'
    },
    {
        image: 'https://diz7l2x0sn587.cloudfront.net/kisankonnect/Images/ProductGroupImage/20240319183041Summer-Special-Mnemonic-01.jpg',
        name: 'Summer Special'
    }
]

const Category = () => {
    // naviaget 
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    {/* Image  */}
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-white transition-all hover:bg-white cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        </div>
    );
}

export default Category;