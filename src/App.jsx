import data from "./Components/prd.json"
import "./Components/style.css"

function App(){
    return(
        <div>
            <h1>Product Inventory</h1>
            <table>
                <thead>
                    <tr>
                        <th>Sl.no</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((a) => {
                            return(
                                <tr>
                                    <td>{a.id}</td>
                                    <td>{a.name}</td>
                                    <td>{a.category}</td>
                                    <td>{a.price}</td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default App;