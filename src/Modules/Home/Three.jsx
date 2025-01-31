import { useEffect, useState } from "react";
import Button from "../../Components/Button";

function Three() {
const [products, setProducts] = useState([]);
const [filterproducts, setFilterproducts] = useState([]);
    const getData = async () => {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        console.log(data);
        setProducts(data.recipes);
    };
    useEffect(() => {
    getData();
    }, []);

    const getFilterProducts = (country) => {
        const filterItem = products.filter((product) => {
            return product.cuisine === country;
        });
        setFilterproducts(filterItem);
    }
    
        return(
        <>
        <div className="border-2 border-gray-500 flex flex-col items-center">
            <div className="text-center">
                <h1>Our Most Popular Recepies</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil molestiae, debitis ipsum corporis aperiam at ut harum officiis numquam eveniet quos quia amet omnis repellendus alias quaerat saepe praesentium! Maxime!</p>
            </div>
            
            <div className=" flex gap-x-5">
            <button
            onClick={() => {
                getFilterProducts("Italian");
            }}
            className="border-2 hover:border-black w-20 rounded-full bg-slate-300">Italian</button>
            <button
            onClick={() => {
                getFilterProducts("Asian");
            }}
            className="border-2 hover:border-black w-20 rounded-full bg-slate-300">Asian</button>
            <button
             onClick={() => {
                getFilterProducts("American");
            }}
            className="border-2 hover:border-black w-20 rounded-full bg-slate-300">American</button>
            </div>

            <div className=" w-[80%] flex flex-wrap gap-5 mt-10 py-2 justify-center">
                {
                    filterproducts.length > 0 ? (
                        filterproducts.map((product, index) => {
                        return <div key={index} className="shadow-md shadow-slate-200 p-4 w-43 h-43 flex flex-col items-center justify-center">
                            
                            <img src={product.image} className="h-24 w-24" alt="" />
                            <h1>{product.name}</h1>
                            <p>Rs.{product.caloriesPerServing} </p>
                        </div>;
                    })
                ) : products.length > 0 ? (
                    products.map((product, index) => {
                        return(
                            <div key={index}>
                            <img src={product.image} className="h-24  w-24 " alt="" />
                <p>{product.name}</p>
                <p>Rs.{product.caloriesPerServing}</p>

                            </div>
                        )
                    }
                )
                )
                
                : (
                    <div>loading ...</div>
                )}
            </div>

            <Button title="Explore Our Menu"/>
        </div>
        </>
    )
}
export default Three 