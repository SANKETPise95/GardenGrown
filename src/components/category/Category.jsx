import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://img.freepik.com/premium-photo/fruits-fruit-basket-white-background_987687-45.jpg',
        name: 'Fruits'
    },
    {
        image: 'https://media.istockphoto.com/id/1127420706/photo/fresh-vegetables-in-basket-on-white-isolated-background-top-view.jpg?s=612x612&w=0&k=20&c=U-9e1GUykrLoDumkoXHbfUV-3cBss_9CTUdQy38CTgk=',
        name: 'Vegetables'
    },
    {
        image: 'https://img.freepik.com/premium-photo/different-fresh-dairy-products-isolated-white-background_185193-29492.jpg',
        name: 'Dairy Farm'
    },
    {
        image: 'https://cdn.shopaccino.com/adfs/products/mix-dry-fruits-whole-974738l-removebg-preview-106509_m.png?v=512',
        name: 'Dry fruits'
    },
    {
        image: 'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191380lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&auto=webp',
        name: 'Flowers'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8tB2ygQh9oro5NX_CsejwII9ENQixo_y4rquwR6aOWF0XlUNW3P-nPpJMMYHzWxmSFE&usqp=CAU',
        name: 'AamMahotsav'
    },
    {
        image: 'https://bachatkart.in/image/cache/catalog/product/breakfast/chakki%20fresh%20aata-700x700.jpg',
        name: 'Fresh atta'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'Summer special'
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
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 " >
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